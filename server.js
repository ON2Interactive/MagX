const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;

function cleanEnvValue(value) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, "utf8");
  content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .forEach((line) => {
      const idx = line.indexOf("=");
      if (idx <= 0) return;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) {
        process.env[key] = value;
      }
    });
}

loadEnvFile(path.join(ROOT, ".env"));

const PORT = Number(process.env.PORT || 4174);
const SHARE_STORE_FILE = path.join(ROOT, ".magx-shares.json");
const SHARE_PAYLOAD_MAX_BYTES = 40 * 1024 * 1024;
const SHARE_MAX_ITEMS = 300;
const SUPABASE_URL = cleanEnvValue(process.env.SUPABASE_URL || "");
const SUPABASE_SERVICE_ROLE_KEY = cleanEnvValue(process.env.SUPABASE_SERVICE_ROLE_KEY || "");
const SUPABASE_STORAGE_BUCKET = cleanEnvValue(process.env.SUPABASE_STORAGE_BUCKET || "magx-assets");

const MIME_BY_EXT = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  res.end(body);
}

function loadShareStore() {
  try {
    if (!fs.existsSync(SHARE_STORE_FILE)) return {};
    const raw = fs.readFileSync(SHARE_STORE_FILE, "utf8");
    const parsed = JSON.parse(raw || "{}");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed;
  } catch {
    return {};
  }
}

let shareStore = loadShareStore();

function persistShareStore() {
  try {
    fs.writeFileSync(SHARE_STORE_FILE, JSON.stringify(shareStore, null, 2), "utf8");
  } catch (error) {
    console.error("Could not persist share store:", error?.message || error);
  }
}

function buildRequestOrigin(req) {
  const host = String(req.headers.host || `127.0.0.1:${PORT}`);
  const forwardedProto = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim();
  const proto = forwardedProto || "http";
  return `${proto}://${host}`;
}

function createShareId() {
  return crypto.randomBytes(9).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function normalizeOwnerId(value) {
  const raw = String(value || "").trim();
  const safe = raw.replace(/[^a-zA-Z0-9_-]/g, "");
  if (!safe) return "";
  return safe.slice(0, 128);
}

function hasSupabaseShareBackend() {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY && SUPABASE_STORAGE_BUCKET);
}

function encodeStoragePath(filePath) {
  return String(filePath || "")
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function buildSupabaseUrl(pathname) {
  return `${SUPABASE_URL.replace(/\/+$/, "")}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

async function supabaseStorageUpload(filePath, body, contentType) {
  const encodedBucket = encodeURIComponent(SUPABASE_STORAGE_BUCKET);
  const encodedPath = encodeStoragePath(filePath);
  const response = await fetch(buildSupabaseUrl(`/storage/v1/object/${encodedBucket}/${encodedPath}`), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      "x-upsert": "true",
      "Content-Type": contentType || "application/octet-stream",
    },
    body,
  });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Supabase upload failed (${response.status}): ${text || "unknown error"}`);
  }
}

async function supabaseStorageDownload(filePath) {
  const encodedBucket = encodeURIComponent(SUPABASE_STORAGE_BUCKET);
  const encodedPath = encodeStoragePath(filePath);
  const response = await fetch(buildSupabaseUrl(`/storage/v1/object/${encodedBucket}/${encodedPath}`), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      apikey: SUPABASE_SERVICE_ROLE_KEY,
    },
  });
  return response;
}

function extensionFromMimeType(mimeType) {
  const normalized = String(mimeType || "").toLowerCase();
  if (normalized.includes("png")) return "png";
  if (normalized.includes("jpeg") || normalized.includes("jpg")) return "jpg";
  if (normalized.includes("webp")) return "webp";
  if (normalized.includes("gif")) return "gif";
  if (normalized.includes("svg")) return "svg";
  return "bin";
}

function parseDataUrl(raw) {
  const value = String(raw || "");
  const match = value.match(/^data:([^;,]+)?(?:;charset=[^;,]+)?(;base64)?,([\s\S]*)$/i);
  if (!match) return null;
  const mimeType = String(match[1] || "application/octet-stream").trim().toLowerCase();
  const isBase64 = Boolean(match[2]);
  const payload = match[3] || "";
  try {
    const buffer = isBase64
      ? Buffer.from(payload.replace(/\s+/g, ""), "base64")
      : Buffer.from(decodeURIComponent(payload), "utf8");
    return { mimeType, buffer };
  } catch {
    return null;
  }
}

async function externalizeProjectImages(project, shareId) {
  const safeProject = JSON.parse(JSON.stringify(project || {}));
  const pages = Array.isArray(safeProject.pages) ? safeProject.pages : [];
  for (const page of pages) {
    const viewStates = page?.viewStates && typeof page.viewStates === "object" ? page.viewStates : {};
    for (const viewKey of ["desktop", "tablet", "mobile"]) {
      const viewState = viewStates[viewKey];
      const elements = Array.isArray(viewState?.elements) ? viewState.elements : [];
      for (const element of elements) {
        if (!element || element.type !== "image" || typeof element.src !== "string") continue;
        if (!element.src.startsWith("data:image/")) continue;
        const parsed = parseDataUrl(element.src);
        if (!parsed || !parsed.buffer || !parsed.buffer.length) continue;
        const ext = extensionFromMimeType(parsed.mimeType);
        const filename = `${crypto.randomUUID()}.${ext}`;
        const relativePath = `assets/${filename}`;
        const storagePath = `shares/${shareId}/${relativePath}`;
        await supabaseStorageUpload(storagePath, parsed.buffer, parsed.mimeType);
        element.src = `/api/share/${encodeURIComponent(shareId)}/asset/${encodeURIComponent(relativePath)}`;
      }
    }
  }
  return safeProject;
}

function validateSharedProjectPayload(project, options = {}) {
  const skipSizeLimit = Boolean(options.skipSizeLimit);
  if (!project || typeof project !== "object" || Array.isArray(project)) {
    return { ok: false, error: "Invalid project payload." };
  }
  if (!Array.isArray(project.pages) || project.pages.length === 0) {
    return { ok: false, error: "Project must include at least one page." };
  }
  let json = "";
  try {
    json = JSON.stringify(project);
  } catch {
    return { ok: false, error: "Project payload is not serializable." };
  }
  if (!skipSizeLimit && Buffer.byteLength(json, "utf8") > SHARE_PAYLOAD_MAX_BYTES) {
    return { ok: false, error: "Project payload is too large to share." };
  }
  return { ok: true };
}

function pruneShareStore() {
  const entries = Object.entries(shareStore);
  if (entries.length <= SHARE_MAX_ITEMS) return;
  entries.sort((a, b) => Number(a[1]?.createdAt || 0) - Number(b[1]?.createdAt || 0));
  const removeCount = entries.length - SHARE_MAX_ITEMS;
  for (let i = 0; i < removeCount; i += 1) {
    const [id] = entries[i];
    delete shareStore[id];
  }
}

function handleShareCreate(req, res) {
  let raw = "";
  let exceedsHardLimit = false;
  const hardLimitBytes = hasSupabaseShareBackend()
    ? 120 * 1024 * 1024
    : SHARE_PAYLOAD_MAX_BYTES + 2 * 1024 * 1024;
  req.on("data", (chunk) => {
    if (exceedsHardLimit) return;
    raw += chunk;
    if (Buffer.byteLength(raw, "utf8") > hardLimitBytes) {
      exceedsHardLimit = true;
      raw = "";
    }
  });

  req.on("end", async () => {
    if (exceedsHardLimit) {
      return sendJson(res, 413, { error: "Project payload is too large to share." });
    }
    try {
      const parsed = JSON.parse(raw || "{}");
      const project = parsed?.project || parsed;
      const ownerId =
        normalizeOwnerId(parsed?.ownerId) ||
        normalizeOwnerId(req.headers["x-magx-owner-id"]) ||
        `usr_${createShareId()}`;
      const validation = validateSharedProjectPayload(project, {
        skipSizeLimit: hasSupabaseShareBackend(),
      });
      if (!validation.ok) {
        return sendJson(res, 400, { error: validation.error || "Invalid shared payload." });
      }

      const id = createShareId();
      const createdAt = Date.now();
      if (hasSupabaseShareBackend()) {
        const projectForStorage = await externalizeProjectImages(project, id);
        const storagePath = `shares/${id}/project.json`;
        const body = Buffer.from(JSON.stringify(projectForStorage), "utf8");
        await supabaseStorageUpload(storagePath, body, "application/json; charset=utf-8");
        const metaBody = Buffer.from(
          JSON.stringify({
            shareId: id,
            ownerId,
            createdAt: new Date(createdAt).toISOString(),
          }),
          "utf8"
        );
        await supabaseStorageUpload(`shares/${id}/meta.json`, metaBody, "application/json; charset=utf-8");
      } else {
        shareStore[id] = {
          createdAt,
          ownerId,
          project,
        };
        pruneShareStore();
        persistShareStore();
      }

      const origin = buildRequestOrigin(req);
      const shareUrl = `${origin}/preview?share=${encodeURIComponent(id)}`;
      return sendJson(res, 200, {
        id,
        ownerId,
        url: shareUrl,
        createdAt: new Date(createdAt).toISOString(),
      });
    } catch (error) {
      return sendJson(res, 400, { error: error?.message || "Invalid request payload." });
    }
  });
}

function handleShareGet(req, res, shareId) {
  const id = String(shareId || "").trim();
  if (!id) {
    return sendJson(res, 400, { error: "Missing share id." });
  }
  if (hasSupabaseShareBackend()) {
    (async () => {
      try {
        const response = await supabaseStorageDownload(`shares/${id}/project.json`);
        if (response.status === 404) {
          return sendJson(res, 404, { error: "Share not found." });
        }
        if (!response.ok) {
          const text = await response.text().catch(() => "");
          return sendJson(res, 502, { error: text || "Could not load shared project." });
        }
        const raw = await response.text();
        const project = JSON.parse(raw || "{}");
        let ownerId = "";
        let createdAt = new Date().toISOString();
        try {
          const metaResponse = await supabaseStorageDownload(`shares/${id}/meta.json`);
          if (metaResponse.ok) {
            const metaRaw = await metaResponse.text();
            const meta = JSON.parse(metaRaw || "{}");
            ownerId = normalizeOwnerId(meta?.ownerId);
            if (meta?.createdAt) createdAt = new Date(meta.createdAt).toISOString();
          }
        } catch {
          // Meta is optional; continue.
        }
        return sendJson(res, 200, {
          id,
          ownerId,
          createdAt,
          project,
        });
      } catch (error) {
        return sendJson(res, 500, { error: error?.message || "Could not load shared project." });
      }
    })();
    return;
  }
  const record = shareStore[id];
  if (!record) {
    return sendJson(res, 404, { error: "Share not found." });
  }
  return sendJson(res, 200, {
    id,
    ownerId: normalizeOwnerId(record.ownerId),
    createdAt: new Date(Number(record.createdAt || Date.now())).toISOString(),
    project: record.project,
  });
}

function handleShareAssetGet(req, res, shareId, relativeAssetPath) {
  const id = String(shareId || "").trim();
  const relativePath = String(relativeAssetPath || "").trim();
  if (!hasSupabaseShareBackend()) {
    return sendJson(res, 404, { error: "Asset backend unavailable." });
  }
  if (!id || !relativePath) {
    return sendJson(res, 400, { error: "Missing share asset path." });
  }
  if (relativePath.includes("..") || relativePath.startsWith("/")) {
    return sendJson(res, 400, { error: "Invalid asset path." });
  }
  const storagePath = `shares/${id}/${relativePath}`;
  if (!storagePath.startsWith(`shares/${id}/assets/`)) {
    return sendJson(res, 400, { error: "Invalid asset path." });
  }
  (async () => {
    try {
      const response = await supabaseStorageDownload(storagePath);
      if (response.status === 404) {
        res.writeHead(404);
        res.end("Not Found");
        return;
      }
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        res.writeHead(502);
        res.end(text || "Asset fetch failed");
        return;
      }
      const bytes = Buffer.from(await response.arrayBuffer());
      const contentType = response.headers.get("content-type") || "application/octet-stream";
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": bytes.length,
      });
      res.end(bytes);
    } catch (error) {
      res.writeHead(500);
      res.end(error?.message || "Asset fetch failed");
    }
  })();
}

function normalizeEnvValue(value) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function buildGoogleGenerateEndpoint(model) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
}

function normalizeGoogleApiKey(value) {
  const normalized = normalizeEnvValue(value);
  const noWhitespace = normalized.replace(/\s+/g, "");
  return noWhitespace.replace(/[^A-Za-z0-9_-]/g, "");
}

function isLikelyGoogleApiKey(value) {
  return /^AIza[0-9A-Za-z_-]{20,}$/.test(value || "");
}

function normalizeLayoutModelName(value) {
  const normalized = normalizeEnvValue(value);
  if (!normalized) return "gemini-2.0-flash";
  if (!/^[a-zA-Z0-9._-]+$/.test(normalized)) return "gemini-2.0-flash";
  return normalized;
}

function normalizeImageModelName(value) {
  const normalized = normalizeEnvValue(value);
  if (!normalized) return "recraftv4_pro";
  if (!/^[a-zA-Z0-9._-]+$/.test(normalized)) return "recraftv4_pro";
  return normalized.toLowerCase();
}

function normalizeImageAspectRatio(value) {
  const normalized = String(value || "").trim();
  if (normalized === "21:9") return "16:9";
  const allowed = new Set([
    "1:1", "2:1", "1:2",
    "3:2", "2:3",
    "4:3", "3:4",
    "5:4", "4:5",
    "6:10", "14:10", "10:14",
    "16:9", "9:16",
  ]);
  return allowed.has(normalized) ? normalized : "1:1";
}

function normalizeImageResolution(value) {
  const normalized = String(value || "").trim().toUpperCase();
  if (normalized === "2K" || normalized === "4K") return normalized;
  return "1K";
}

function normalizeRecraftToken(value) {
  return normalizeEnvValue(value);
}

function selectRecraftGenerationModel(model, resolution) {
  const requested = normalizeImageModelName(model);
  const explicit = normalizeImageModelName(process.env.RECRAFT_IMAGE_MODEL || "");
  const defaultForResolution = resolution === "1K" ? "recraftv4" : "recraftv4_pro";
  const allowed = new Set(["recraftv3", "recraftv4", "recraftv4_pro"]);
  if (allowed.has(requested)) return requested;
  if (allowed.has(explicit)) return explicit;
  return defaultForResolution;
}

function selectRecraftEditModel() {
  const explicit = normalizeImageModelName(process.env.RECRAFT_IMAGE_EDIT_MODEL || "");
  return explicit === "recraftv3" ? explicit : "recraftv3";
}

function buildRecraftSize(aspectRatio, resolution) {
  const base = {
    "1:1": "1024x1024",
    "2:1": "1536x768",
    "1:2": "768x1536",
    "2:3": "832x1216",
    "3:2": "1216x832",
    "3:4": "896x1152",
    "4:3": "1152x896",
    "5:4": "1280x1024",
    "4:5": "1024x1280",
    "6:10": "832x1344",
    "14:10": "1344x960",
    "10:14": "960x1344",
    "9:16": "768x1360",
    "16:9": "1360x768",
  };
  const pro = {
    "1:1": "2048x2048",
    "2:1": "3072x1536",
    "1:2": "1536x3072",
    "2:3": "1664x2560",
    "3:2": "2560x1664",
    "3:4": "1792x2432",
    "4:3": "2432x1792",
    "5:4": "2304x1792",
    "4:5": "1792x2304",
    "6:10": "1664x2688",
    "14:10": "2560x1792",
    "10:14": "1792x2560",
    "9:16": "1536x2688",
    "16:9": "2688x1536",
  };
  const table = resolution === "1K" ? base : pro;
  return table[aspectRatio] || table["1:1"];
}

const RECRAFT_V4_SIZES = new Set([
  "1024x1024",
  "1536x768",
  "768x1536",
  "832x1216",
  "1216x832",
  "896x1152",
  "1152x896",
  "1280x1024",
  "1024x1280",
  "832x1344",
  "1344x960",
  "960x1344",
  "768x1360",
  "1360x768",
]);

const RECRAFT_V4_PRO_SIZES = new Set([
  "2048x2048",
  "3072x1536",
  "1536x3072",
  "1664x2560",
  "2560x1664",
  "1792x2432",
  "2432x1792",
  "2304x1792",
  "1792x2304",
  "1664x2688",
  "2560x1792",
  "1792x2560",
  "1536x2688",
  "2688x1536",
]);

const RECRAFT_SIZE_TO_ASPECT = {
  "1024x1024": "1:1",
  "1536x768": "2:1",
  "768x1536": "1:2",
  "832x1216": "2:3",
  "1216x832": "3:2",
  "896x1152": "3:4",
  "1152x896": "4:3",
  "1280x1024": "5:4",
  "1024x1280": "4:5",
  "832x1344": "6:10",
  "1344x960": "14:10",
  "960x1344": "10:14",
  "768x1360": "9:16",
  "1360x768": "16:9",
  "2048x2048": "1:1",
  "3072x1536": "2:1",
  "1536x3072": "1:2",
  "1664x2560": "2:3",
  "2560x1664": "3:2",
  "1792x2432": "3:4",
  "2432x1792": "4:3",
  "2304x1792": "5:4",
  "1792x2304": "4:5",
  "1664x2688": "6:10",
  "2560x1792": "14:10",
  "1792x2560": "10:14",
  "1536x2688": "9:16",
  "2688x1536": "16:9",
};

function normalizeRecraftSize(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (!/^\d+x\d+$/.test(normalized)) return "";
  if (RECRAFT_V4_SIZES.has(normalized) || RECRAFT_V4_PRO_SIZES.has(normalized)) {
    return normalized;
  }
  return "";
}

function resolutionFromRecraftSize(size) {
  if (RECRAFT_V4_PRO_SIZES.has(size)) return "2K";
  return "1K";
}

function normalizeAnthropicModelName(value) {
  const normalized = normalizeEnvValue(value);
  if (!normalized) return "claude-opus-4-6";
  if (!/^[a-zA-Z0-9._-]+$/.test(normalized)) return "claude-opus-4-6";
  return normalized;
}

function extractTextFromGenerateResponse(payload) {
  const candidates = Array.isArray(payload?.candidates) ? payload.candidates : [];
  const chunks = [];
  for (const candidate of candidates) {
    const parts = candidate?.content?.parts;
    if (!Array.isArray(parts)) continue;
    for (const part of parts) {
      if (typeof part?.text === "string" && part.text.trim()) {
        chunks.push(part.text);
      }
    }
  }
  return chunks.join("\n").trim();
}

function extractTextFromAnthropicResponse(payload) {
  const parts = Array.isArray(payload?.content) ? payload.content : [];
  const chunks = [];
  for (const part of parts) {
    if (part?.type === "text" && typeof part?.text === "string" && part.text.trim()) {
      chunks.push(part.text);
    }
  }
  return chunks.join("\n").trim();
}

function parseModelJson(text) {
  const trimmed = String(text || "").trim();
  if (!trimmed) return null;

  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1].trim() : trimmed;

  try {
    return JSON.parse(candidate);
  } catch {
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start >= 0 && end > start) {
      try {
        return JSON.parse(candidate.slice(start, end + 1));
      } catch {
        return null;
      }
    }
    return null;
  }
}

function parseImageDataUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  const match = raw.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,([A-Za-z0-9+/=\s]+)$/);
  if (!match) return null;
  const mimeType = String(match[1] || "image/png").toLowerCase();
  const data = String(match[2] || "").replace(/\s+/g, "");
  if (!data) return null;
  const byteLength = Buffer.byteLength(data, "base64");
  if (!Number.isFinite(byteLength) || byteLength <= 0 || byteLength > 12 * 1024 * 1024) {
    return null;
  }
  return { mimeType, data };
}

function extractImageFromGenerateResponse(payload) {
  const candidates = Array.isArray(payload?.candidates) ? payload.candidates : [];
  for (const candidate of candidates) {
    const parts = Array.isArray(candidate?.content?.parts) ? candidate.content.parts : [];
    for (const part of parts) {
      const inline = part?.inlineData || part?.inline_data || null;
      if (!inline) continue;
      const data = String(inline?.data || "").replace(/\s+/g, "");
      if (!data) continue;
      const mimeType = String(inline?.mimeType || inline?.mime_type || "image/png");
      if (!mimeType.startsWith("image/")) continue;
      return { mimeType, data };
    }
  }
  return null;
}

async function handleImageGenerate(req, res) {
  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 16 * 1024 * 1024) req.destroy();
  });

  req.on("end", async () => {
    try {
      const { prompt, model, size, aspectRatio, resolution, sourceImageDataUrl } = JSON.parse(raw || "{}");
      const promptText = String(prompt || "").trim();
      if (!promptText) {
        return sendJson(res, 400, { error: "Missing prompt." });
      }

      const recraftToken = normalizeRecraftToken(process.env.RECRAFT_API_TOKEN || process.env.RECRAFT_API_KEY || "");
      if (!recraftToken) {
        return sendJson(res, 500, { error: "Server missing RECRAFT_API_TOKEN in environment." });
      }

      const sourceImage = parseImageDataUrl(sourceImageDataUrl);
      const selectedAspectRatio = normalizeImageAspectRatio(aspectRatio);
      const selectedResolution = normalizeImageResolution(resolution);
      const selectedSize = normalizeRecraftSize(size);
      const effectiveSize = selectedSize || buildRecraftSize(selectedAspectRatio, selectedResolution);
      const effectiveResolution = selectedSize ? resolutionFromRecraftSize(selectedSize) : selectedResolution;
      const effectiveAspectRatio = RECRAFT_SIZE_TO_ASPECT[effectiveSize] || selectedAspectRatio;
      const targetModel = sourceImage
        ? selectRecraftEditModel()
        : selectRecraftGenerationModel(model, effectiveResolution);

      let response;
      if (sourceImage) {
        const imageBuffer = Buffer.from(sourceImage.data, "base64");
        const imageBlob = new Blob([imageBuffer], { type: sourceImage.mimeType });
        const form = new FormData();
        form.set("model", targetModel);
        form.set("prompt", promptText);
        form.set("image", imageBlob, "source-image.png");
        response = await fetch("https://external.api.recraft.ai/v1/images/imageToImage", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${recraftToken}`,
          },
          body: form,
        });
      } else {
        const payload = {
          model: targetModel,
          prompt: promptText,
          size: effectiveSize,
        };
        response = await fetch("https://external.api.recraft.ai/v1/images/generations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recraftToken}`,
          },
          body: JSON.stringify(payload),
        });
      }

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }
      if (!response.ok) {
        const reason =
          payload?.message ||
          payload?.error?.message ||
          payload?.error ||
          "Recraft image generation failed.";
        return sendJson(res, 502, { error: String(reason) });
      }
      const first = Array.isArray(payload?.data) ? payload.data[0] : null;
      const b64 = String(first?.b64_json || "").replace(/\s+/g, "");
      const url = String(first?.url || "").trim();
      let imageDataUrl = "";
      if (b64) {
        imageDataUrl = `data:image/png;base64,${b64}`;
      } else if (url) {
        const imageResponse = await fetch(url);
        if (!imageResponse.ok) {
          return sendJson(res, 502, { error: `Could not fetch generated image (${imageResponse.status}).` });
        }
        const mimeType = String(imageResponse.headers.get("content-type") || "image/png").split(";")[0].trim() || "image/png";
        const buffer = Buffer.from(await imageResponse.arrayBuffer());
        imageDataUrl = `data:${mimeType};base64,${buffer.toString("base64")}`;
      }
      if (!imageDataUrl) {
        return sendJson(res, 502, { error: "Recraft response did not include an image." });
      }
      return sendJson(res, 200, {
        provider: "recraft",
        model: targetModel,
        size: effectiveSize,
        aspectRatio: effectiveAspectRatio,
        resolution: effectiveResolution,
        edited: Boolean(sourceImage),
        imageDataUrl,
      });
    } catch (error) {
      return sendJson(res, 500, { error: error?.message || "Unexpected image server error." });
    }
  });
}

async function handleLayoutGenerate(req, res) {
  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 2 * 1024 * 1024) req.destroy();
  });

  req.on("end", async () => {
    try {
      const { prompt, style, pageCount } = JSON.parse(raw || "{}");
      const promptText = String(prompt || "").trim();
      if (!promptText) {
        return sendJson(res, 400, { error: "Missing prompt." });
      }

      const count = Math.max(1, Math.min(5, Number(pageCount) || 1));
      const styleText = String(style || "magx-inspired").trim();
      const anthropicApiKey = normalizeEnvValue(process.env.ANTHROPIC_API_KEY || "");
      const googleApiKey = normalizeGoogleApiKey(process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || "");

      if (!anthropicApiKey && !googleApiKey) {
        return sendJson(res, 500, { error: "Server missing ANTHROPIC_API_KEY or GOOGLE_API_KEY/GEMINI_API_KEY in environment." });
      }
      if (googleApiKey && !isLikelyGoogleApiKey(googleApiKey)) {
        return sendJson(res, 500, { error: "Invalid Google API key format in environment." });
      }

      const instruction = [
        "You are a senior web/UX designer generating wireframe-ready page layouts.",
        "Return JSON only. No markdown. No code fences.",
        `Generate exactly ${count} pages.`,
        `Visual style: ${styleText}.`,
        "Every page should feel premium, modern, and conversion-focused.",
        "Schema:",
        "{",
        '  "pages":[',
        "    {",
        '      "name":"string",',
        '      "canvasBackground":"#RRGGBB",',
        '      "elements":[',
        "        {",
        '          "type":"text|shape|image|icon",',
        '          "x":number, "y":number, "width":number, "height":number,',
        '          "text":"optional string",',
        '          "fontSize":optional number,',
        '          "textColor":"optional #RRGGBB",',
        '          "fontFamily":"optional CSS font family string",',
        '          "shapeKind":"optional rectangle|circle|triangle|line|star|polygon",',
        '          "fill":"optional #RRGGBB",',
        '          "stroke":"optional #RRGGBB",',
        '          "strokeWidth":"optional number",',
        '          "iconName":"optional ionicon name"',
        "        }",
        "      ]",
        "    }",
        "  ]",
        "}",
        "Rules:",
        "- Coordinates are for a 1280x720 desktop canvas.",
        "- Keep 12-40 elements per page.",
        "- Include a hero section, at least one content section, and one CTA section.",
        "- For image elements, include type=image with no src.",
      ].join("\n");

      const layoutPrompt = `${instruction}\n\nDesign brief:\n${promptText}`;

      let parsed = null;
      let providerUsed = "";
      const errors = [];

      if (anthropicApiKey) {
        try {
          const anthropicModel = normalizeAnthropicModelName(process.env.ANTHROPIC_LAYOUT_MODEL || process.env.ANTHROPIC_MODEL);
          const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "anthropic-version": "2023-06-01",
              "x-api-key": anthropicApiKey,
            },
            body: JSON.stringify({
              model: anthropicModel,
              max_tokens: 4000,
              temperature: 0.7,
              messages: [{ role: "user", content: layoutPrompt }],
            }),
          });

          let anthropicPayload = null;
          try {
            anthropicPayload = await anthropicResponse.json();
          } catch {
            anthropicPayload = null;
          }

          if (!anthropicResponse.ok) {
            const reason = anthropicPayload?.error?.message || anthropicPayload?.error?.type || anthropicPayload?.error || "Claude layout generation failed.";
            errors.push(`claude:${String(reason)}`);
          } else {
            const rawText = extractTextFromAnthropicResponse(anthropicPayload);
            const maybeParsed = parseModelJson(rawText);
            if (maybeParsed && Array.isArray(maybeParsed.pages)) {
              parsed = maybeParsed;
              providerUsed = "claude";
            } else {
              errors.push("claude:invalid json layout");
            }
          }
        } catch (error) {
          errors.push(`claude:${error?.message || "request failed"}`);
        }
      }

      if (!parsed && googleApiKey) {
        try {
          const model = normalizeLayoutModelName(process.env.GOOGLE_LAYOUT_MODEL || process.env.GEMINI_LAYOUT_MODEL);
          const endpoint = buildGoogleGenerateEndpoint(model);
          const body = {
            contents: [{ role: "user", parts: [{ text: layoutPrompt }] }],
            generationConfig: {
              temperature: 0.85,
              responseMimeType: "application/json",
            },
          };

          const callGenerate = async (requestBody) =>
            fetch(endpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": googleApiKey,
              },
              body: JSON.stringify(requestBody),
            });

          let response = await callGenerate(body);
          let payload = null;
          try {
            payload = await response.json();
          } catch {
            payload = null;
          }

          if (!response.ok) {
            const reason = String(payload?.error?.message || payload?.error || "");
            const unsupportedMime = /responsemime|unknown name .*responseMimeType|invalid json payload/i.test(reason);
            if (unsupportedMime) {
              const fallbackBody = { ...body, generationConfig: { temperature: 0.85 } };
              response = await callGenerate(fallbackBody);
              try {
                payload = await response.json();
              } catch {
                payload = null;
              }
            }
          }

          if (!response.ok) {
            const reason = payload?.error?.message || payload?.error || "Gemini layout generation failed.";
            errors.push(`gemini:${String(reason)}`);
          } else {
            const rawText = extractTextFromGenerateResponse(payload);
            const maybeParsed = parseModelJson(rawText);
            if (maybeParsed && Array.isArray(maybeParsed.pages)) {
              parsed = maybeParsed;
              providerUsed = "gemini";
            } else {
              errors.push("gemini:invalid json layout");
            }
          }
        } catch (error) {
          errors.push(`gemini:${error?.message || "request failed"}`);
        }
      }

      if (!parsed || !Array.isArray(parsed.pages)) {
        const reason = errors.length > 0 ? errors.join(" | ") : "Layout generation failed.";
        return sendJson(res, 502, { error: reason });
      }

      const pages = parsed.pages.slice(0, count).map((page, index) => ({
        name: String(page?.name || `Page ${index + 1}`),
        canvasBackground: String(page?.canvasBackground || "#f6f7fb"),
        elements: Array.isArray(page?.elements) ? page.elements : [],
      }));

      return sendJson(res, 200, { pages, provider: providerUsed || (anthropicApiKey ? "claude" : "gemini") });
    } catch (error) {
      return sendJson(res, 500, { error: error?.message || "Unexpected layout server error." });
    }
  });
}

function serveStatic(req, res) {
  const rawPath = decodeURIComponent(req.url.split("?")[0] || "/");
  let reqPath =
    rawPath === "/"
      ? "/index.html"
      : rawPath === "/magx" || rawPath === "/editor"
        ? "/editor.html"
        : rawPath === "/preview"
          ? "/preview.html"
        : rawPath;
  if (reqPath !== "/editor.html" && reqPath !== "/index.html" && !path.extname(reqPath)) {
    const htmlCandidate = path.join(ROOT, `${reqPath}.html`);
    if (fs.existsSync(htmlCandidate)) {
      reqPath = `${reqPath}.html`;
    }
  }

  const safePath = path.normalize(path.join(ROOT, reqPath));
  if (!safePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(safePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME_BY_EXT[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
}

function requestHandler(req, res) {
  const reqUrl = new URL(req.url || "/", `http://${req.headers.host || "127.0.0.1"}`);
  const pathname = reqUrl.pathname;

  if (req.method === "POST" && pathname === "/api/layout-generate") {
    handleLayoutGenerate(req, res);
    return;
  }

  if (req.method === "POST" && pathname === "/api/image-generate") {
    handleImageGenerate(req, res);
    return;
  }

  if (req.method === "GET" && pathname.startsWith("/api/share/") && pathname.includes("/asset/")) {
    const match = pathname.match(/^\/api\/share\/([^/]+)\/asset\/(.+)$/);
    if (!match) {
      return sendJson(res, 400, { error: "Invalid share asset route." });
    }
    const shareId = decodeURIComponent(match[1]);
    const relativePath = decodeURIComponent(match[2]);
    handleShareAssetGet(req, res, shareId, relativePath);
    return;
  }

  if (req.method === "POST" && pathname === "/api/share") {
    handleShareCreate(req, res);
    return;
  }

  if (req.method === "GET" && pathname.startsWith("/api/share/")) {
    const shareId = decodeURIComponent(pathname.slice("/api/share/".length));
    handleShareGet(req, res, shareId);
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }

  res.writeHead(405);
  res.end("Method Not Allowed");
}

if (require.main === module) {
  const server = http.createServer(requestHandler);
  server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
  });
}

module.exports = requestHandler;
