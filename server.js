const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;

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
const printAssets = new Map();

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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  res.end(body);
}

function getPublicBaseUrl(req) {
  const fromEnv = process.env.PEECHO_PUBLIC_BASE_URL || process.env.PUBLIC_BASE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const host = req.headers.host;
  if (!host) return "";
  return `http://${host}`;
}

function decodeDataUrl(dataUrl) {
  const match = /^data:(.*?);base64,(.*)$/.exec(dataUrl || "");
  if (!match) return null;
  return {
    mimeType: match[1] || "image/png",
    buffer: Buffer.from(match[2], "base64"),
  };
}

function getPeechoSecretHash(orderId) {
  const raw = `${orderId || ""}${process.env.PEECHO_API_SECRET || ""}`;
  return crypto.createHash("sha256").update(raw).digest("hex");
}

function getFramedOfferingsConfig() {
  const raw = process.env.PEECHO_FRAMED_OFFERINGS_JSON || "[]";
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item) => ({
        key: String(item?.key || "").trim(),
        label: String(item?.label || "").trim(),
        offeringId: String(item?.offeringId || "").trim(),
      }))
      .filter((item) => item.key && item.offeringId);
  } catch {
    return [];
  }
}

async function postJsonWithFallback(urls, body) {
  let lastResponse = null;
  for (const url of urls) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }
      if (response.ok) return { response, payload, url };
      lastResponse = { response, payload, url };
      if (response.status !== 404 && response.status !== 405) {
        return lastResponse;
      }
    } catch (error) {
      lastResponse = { response: null, payload: { error: error.message }, url };
    }
  }
  return lastResponse;
}

function extractImageDataFromNanoBananaResponse(payload) {
  const candidates = Array.isArray(payload?.candidates) ? payload.candidates : [];
  for (const candidate of candidates) {
    const parts = candidate?.content?.parts;
    if (!Array.isArray(parts)) continue;
    for (const part of parts) {
      const inline = part?.inlineData || part?.inline_data;
      if (inline?.data) {
        const mime = inline.mimeType || inline.mime_type || "image/png";
        return `data:${mime};base64,${inline.data}`;
      }
    }
  }
  return null;
}

async function handleNanoBananaEdit(req, res) {
  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 30 * 1024 * 1024) {
      req.destroy();
    }
  });

  req.on("end", async () => {
    try {
      const { prompt, imageDataUrl } = JSON.parse(raw || "{}");
      if (!prompt || !imageDataUrl) {
        return sendJson(res, 400, { error: "Missing prompt or imageDataUrl." });
      }

      const match = /^data:(.*?);base64,(.*)$/.exec(imageDataUrl);
      if (!match) {
        return sendJson(res, 400, { error: "Invalid imageDataUrl." });
      }

      const googleApiKey = process.env.GOOGLE_API_KEY;
      if (!googleApiKey) {
        return sendJson(res, 500, { error: "Server missing GOOGLE_API_KEY in .env." });
      }

      const model = process.env.GOOGLE_IMAGE_EDIT_MODEL || "gemini-2.5-flash-image-preview";
      const endpoint =
        process.env.GOOGLE_IMAGE_EDIT_ENDPOINT ||
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${googleApiKey}`;

      const mimeType = match[1] || "image/png";
      const base64Data = match[2];
      const maxAttempts = Math.max(1, Number(process.env.GOOGLE_IMAGE_EDIT_RETRIES || 4) + 1);
      const requestBody = JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: prompt },
              { inlineData: { mimeType, data: base64Data } },
            ],
          },
        ],
        generationConfig: {
          responseModalities: ["IMAGE", "TEXT"],
        },
      });

      let lastError = "Image edit request failed.";
      let lastStatusCode = 502;

      for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBody,
          });

          let payload = null;
          try {
            payload = await response.json();
          } catch {
            payload = null;
          }

          if (response.ok) {
            const editedImageDataUrl = extractImageDataFromNanoBananaResponse(payload);
            if (editedImageDataUrl) {
              return sendJson(res, 200, { imageDataUrl: editedImageDataUrl });
            }
            lastError = "No image returned from editor response.";
            lastStatusCode = 502;
            if (attempt < maxAttempts) {
              await sleep(350 * attempt);
              continue;
            }
            break;
          }

          const reason = payload?.error?.message || payload?.error || "Image edit request failed.";
          const reasonText = String(reason);
          const retryable =
            response.status === 429 ||
            response.status >= 500 ||
            /internal error/i.test(reasonText) ||
            /temporar/i.test(reasonText);

          lastError = reasonText;
          lastStatusCode = response.status || 502;

          if (retryable && attempt < maxAttempts) {
            await sleep(500 * attempt);
            continue;
          }
          break;
        } catch (error) {
          lastError = error?.message || "Unexpected server error.";
          lastStatusCode = 502;
          if (attempt < maxAttempts) {
            await sleep(500 * attempt);
            continue;
          }
          break;
        }
      }

      return sendJson(res, lastStatusCode, { error: lastError });
    } catch (error) {
      return sendJson(res, 500, { error: error?.message || "Unexpected server error." });
    }
  });
}

async function handleNanoBananaGenerate(req, res) {
  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 2 * 1024 * 1024) {
      req.destroy();
    }
  });

  req.on("end", async () => {
    try {
      const { prompt, resolution, aspectRatio } = JSON.parse(raw || "{}");
      if (!prompt) {
        return sendJson(res, 400, { error: "Missing prompt." });
      }

      const googleApiKey = process.env.GOOGLE_API_KEY;
      if (!googleApiKey) {
        return sendJson(res, 500, { error: "Server missing GOOGLE_API_KEY in .env." });
      }

      const model = process.env.GOOGLE_IMAGE_EDIT_MODEL || "gemini-2.5-flash-image-preview";
      const endpoint =
        process.env.GOOGLE_IMAGE_EDIT_ENDPOINT ||
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${googleApiKey}`;

      const outputHints = [];
      if (resolution) outputHints.push(`target resolution ${resolution}`);
      if (aspectRatio) outputHints.push(`aspect ratio ${aspectRatio}`);
      const effectivePrompt = outputHints.length > 0
        ? `${prompt}\n\nOutput requirements: ${outputHints.join(", ")}.`
        : prompt;
      const allowedImageSizes = new Set(["1K", "2K", "4K"]);
      const allowedAspectRatios = new Set(["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]);
      const imageConfig = {};
      if (allowedImageSizes.has(String(resolution))) {
        imageConfig.imageSize = String(resolution);
      }
      if (allowedAspectRatios.has(String(aspectRatio))) {
        imageConfig.aspectRatio = String(aspectRatio);
      }

      const maxAttempts = Math.max(1, Number(process.env.GOOGLE_IMAGE_EDIT_RETRIES || 4) + 1);
      const requestBody = JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: effectivePrompt }],
          },
        ],
        generationConfig: {
          responseModalities: ["IMAGE", "TEXT"],
          ...(Object.keys(imageConfig).length > 0 ? { imageConfig } : {}),
        },
      });

      let lastError = "Image generation request failed.";
      let lastStatusCode = 502;

      for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBody,
          });

          let payload = null;
          try {
            payload = await response.json();
          } catch {
            payload = null;
          }

          if (response.ok) {
            const generatedImageDataUrl = extractImageDataFromNanoBananaResponse(payload);
            if (generatedImageDataUrl) {
              return sendJson(res, 200, { imageDataUrl: generatedImageDataUrl });
            }
            lastError = "No image returned from generation response.";
            lastStatusCode = 502;
            if (attempt < maxAttempts) {
              await sleep(350 * attempt);
              continue;
            }
            break;
          }

          const reason = payload?.error?.message || payload?.error || "Image generation request failed.";
          const reasonText = String(reason);
          const retryable =
            response.status === 429 ||
            response.status >= 500 ||
            /internal error/i.test(reasonText) ||
            /temporar/i.test(reasonText);

          lastError = reasonText;
          lastStatusCode = response.status || 502;
          if (retryable && attempt < maxAttempts) {
            await sleep(500 * attempt);
            continue;
          }
          break;
        } catch (error) {
          lastError = error?.message || "Unexpected server error.";
          lastStatusCode = 502;
          if (attempt < maxAttempts) {
            await sleep(500 * attempt);
            continue;
          }
          break;
        }
      }

      return sendJson(res, lastStatusCode, { error: lastError });
    } catch (error) {
      return sendJson(res, 500, { error: error?.message || "Unexpected server error." });
    }
  });
}

async function handlePeechoPrintOrder(req, res) {
  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 30 * 1024 * 1024) req.destroy();
  });

  req.on("end", async () => {
    try {
      const {
        imageDataUrl,
        fileName,
        width,
        height,
        offeringKey,
        quantity,
        currency,
        email,
        address,
      } = JSON.parse(raw || "{}");

      if (!imageDataUrl || !offeringKey || !email || !address?.line1 || !address?.city || !address?.postalCode || !address?.countryCode) {
        return sendJson(res, 400, { error: "Missing required print fields." });
      }

      const framedOfferings = getFramedOfferingsConfig();
      const selectedOffering = framedOfferings.find((offering) => offering.key === String(offeringKey));
      if (!selectedOffering) {
        return sendJson(res, 400, { error: "Invalid framed offering selected." });
      }

      const peechoApiKey = process.env.PEECHO_API_KEY;
      if (!peechoApiKey) {
        return sendJson(res, 500, { error: "Server missing PEECHO_API_KEY in .env." });
      }

      const decoded = decodeDataUrl(imageDataUrl);
      if (!decoded) {
        return sendJson(res, 400, { error: "Invalid image payload." });
      }

      const baseUrl = getPublicBaseUrl(req);
      if (!baseUrl) {
        return sendJson(res, 500, { error: "Server missing PUBLIC_BASE_URL/PEECHO_PUBLIC_BASE_URL." });
      }

      const assetId = crypto.randomBytes(12).toString("hex");
      printAssets.set(assetId, {
        mimeType: decoded.mimeType,
        buffer: decoded.buffer,
        createdAt: Date.now(),
      });
      const contentUrl = `${baseUrl}/api/print-assets/${assetId}`;

      const peechoBaseUrl = (process.env.PEECHO_BASE_URL || "https://test.www.peecho.com").replace(/\/$/, "");
      const orderPayload = {
        merchant_api_key: peechoApiKey,
        currency: currency || "USD",
        email,
        item_details: [
          {
            item_reference: fileName || `darkroomx-${Date.now()}`,
            offering_id: selectedOffering.offeringId,
            quantity: Math.max(1, Number(quantity) || 1),
            file_details: {
              content_url: contentUrl,
              content_width: Number(width) || 1000,
              content_height: Number(height) || 1000,
              number_of_pages: 1,
            },
          },
        ],
        address_details: {
          full_name: address.fullName || "",
          address_line1: address.line1,
          address_line2: address.line2 || "",
          city: address.city,
          state: address.state || "",
          postal_code: address.postalCode,
          country_code: String(address.countryCode || "").toUpperCase(),
        },
      };

      const orderResult = await postJsonWithFallback(
        [`${peechoBaseUrl}/rest/v3/order/`, `${peechoBaseUrl}/rest/v3/orders/`],
        orderPayload,
      );
      if (!orderResult?.response?.ok) {
        const reason = orderResult?.payload?.error || orderResult?.payload?.message || "Unable to create Peecho order.";
        return sendJson(res, orderResult?.response?.status || 502, { error: String(reason), details: orderResult?.payload || null });
      }

      const order = orderResult.payload || {};
      const orderId = order.order_id || order.orderId || order.id || order.order?.id || null;

      let payment = null;
      if (orderId && process.env.PEECHO_API_SECRET) {
        const paymentPayload = {
          merchant_api_key: peechoApiKey,
          order_id: orderId,
          orderId,
          secret: getPeechoSecretHash(orderId),
        };
        const paymentResult = await postJsonWithFallback(
          [`${peechoBaseUrl}/rest/v3/payment/`, `${peechoBaseUrl}/rest/v3/payments/`],
          paymentPayload,
        );
        if (paymentResult?.response?.ok) {
          payment = paymentResult.payload || null;
        }
      }

      return sendJson(res, 200, { orderId, order, payment, contentUrl });
    } catch (error) {
      return sendJson(res, 500, { error: error?.message || "Unexpected print server error." });
    }
  });
}

function handlePeechoFramedOfferings(_req, res) {
  const offerings = getFramedOfferingsConfig().map((item) => ({
    key: item.key,
    label: item.label || item.key,
  }));
  return sendJson(res, 200, { offerings });
}

function serveStatic(req, res) {
  const reqPath = req.url === "/" ? "/index.html" : decodeURIComponent(req.url.split("?")[0]);
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

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/image-edit") {
    handleNanoBananaEdit(req, res);
    return;
  }
  if (req.method === "POST" && req.url === "/api/image-generate") {
    handleNanoBananaGenerate(req, res);
    return;
  }
  if (req.method === "POST" && req.url === "/api/peecho/print-order") {
    handlePeechoPrintOrder(req, res);
    return;
  }
  if (req.method === "GET" && req.url === "/api/peecho/framed-offerings") {
    handlePeechoFramedOfferings(req, res);
    return;
  }
  if (req.method === "GET" && req.url.startsWith("/api/print-assets/")) {
    const assetId = req.url.split("/api/print-assets/")[1]?.split("?")[0];
    const asset = printAssets.get(assetId);
    if (!asset) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": asset.mimeType || "application/octet-stream",
      "Cache-Control": "public, max-age=300",
    });
    res.end(asset.buffer);
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }

  res.writeHead(405);
  res.end("Method Not Allowed");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
