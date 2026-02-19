const designCanvas = document.getElementById("designCanvas");
const canvasPanel = document.querySelector(".bf-canvas-panel");
const canvasWrap = document.querySelector(".bf-canvas-wrap");
const leftToolbar = document.querySelector(".bf-left-toolbar");
const topbar = document.querySelector(".bf-topbar");
const layerList = document.getElementById("layerList");
const statusText = document.getElementById("statusText");

const addTextBtn = document.getElementById("addTextBtn");
const toolSelectBtn = document.getElementById("toolSelectBtn");
const toolUploadBtn = document.getElementById("toolUploadBtn");
const toolShapesBtn = document.getElementById("toolShapesBtn");
const toolIconsBtn = document.getElementById("toolIconsBtn");
const toolAiImageBtn = document.getElementById("toolAiImageBtn");
const settingsBtn = document.getElementById("settingsBtn");
const shapeFlyout = document.getElementById("shapeFlyout");
const shapeOptionButtons = Array.from(document.querySelectorAll(".shape-option-btn"));
const iconFlyout = document.getElementById("iconFlyout");
const iconFlyoutGrid = document.getElementById("iconFlyoutGrid");
const imageInput = document.getElementById("imageInput");
const deleteBtn = document.getElementById("deleteBtn");
const bringFrontBtn = document.getElementById("bringFrontBtn");
const sendBackBtn = document.getElementById("sendBackBtn");

const canvasWidthInput = document.getElementById("canvasWidth");
const canvasHeightInput = document.getElementById("canvasHeight");
const canvasBgColorInput = document.getElementById("canvasBgColor");
const canvasBgColorHexInput = document.getElementById("canvasBgColorHex");
const applyCanvasSizeBtn = document.getElementById("applyCanvasSizeBtn");

const exportBtn = document.getElementById("exportBtn");
const previewBtn = document.getElementById("previewBtn");
const aiGenerateBtn = document.getElementById("aiGenerateBtn");
const copyHtmlBtn = document.getElementById("copyHtmlBtn");
const exportJsonBtn = document.getElementById("exportJsonBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const groupBtn = document.getElementById("groupBtn");
const ungroupBtn = document.getElementById("ungroupBtn");
const gridBtn = document.getElementById("gridBtn");
const gridFlyout = document.getElementById("gridFlyout");
const gridOptionButtons = Array.from(document.querySelectorAll(".topbar-flyout-option[data-grid-preset]"));
const gridAdvancedToggleBtn = document.getElementById("gridAdvancedToggleBtn");
const gridAdvancedPanel = document.getElementById("gridAdvancedPanel");
const gridColumnsInput = document.getElementById("gridColumnsInput");
const gridGutterInput = document.getElementById("gridGutterInput");
const gridMarginInput = document.getElementById("gridMarginInput");
const gridAdvancedApplyBtn = document.getElementById("gridAdvancedApplyBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomResetBtn = document.getElementById("zoomResetBtn");
const zoomLevel = document.getElementById("zoomLevel");
const publicationSizeSelect = document.getElementById("publicationSizeSelect");
const aiModal = document.getElementById("aiModal");
const aiPrompt = document.getElementById("aiPrompt");
const aiStyle = document.getElementById("aiStyle");
const aiPageCount = document.getElementById("aiPageCount");
const aiGenerateConfirmBtn = document.getElementById("aiGenerateConfirmBtn");
const aiGenerateCancelBtn = document.getElementById("aiGenerateCancelBtn");
const clearCanvasModal = document.getElementById("clearCanvasModal");
const clearCanvasConfirmBtn = document.getElementById("clearCanvasConfirmBtn");
const clearCanvasCancelBtn = document.getElementById("clearCanvasCancelBtn");
const exportModal = document.getElementById("exportModal");
const exportFormatPng = document.getElementById("exportFormatPng");
const exportFormatHtml = document.getElementById("exportFormatHtml");
const exportFormatPdf = document.getElementById("exportFormatPdf");
const exportFormatMeta = document.getElementById("exportFormatMeta");
const exportModalConfirmBtn = document.getElementById("exportModalConfirmBtn");
const exportModalCancelBtn = document.getElementById("exportModalCancelBtn");
const shareBtn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const shareModalCloseBtn = document.getElementById("shareModalCloseBtn");
const nativeShareBtn = document.getElementById("nativeShareBtn");
const shareLinkField = document.getElementById("shareLinkField");
const createShareLinkBtn = document.getElementById("createShareLinkBtn");
const copyShareLinkBtn = document.getElementById("copyShareLinkBtn");
const shareModalStatus = document.getElementById("shareModalStatus");
const creditsBtn = document.getElementById("creditsBtn");
const creditsModal = document.getElementById("creditsModal");
const creditsModalBalance = document.getElementById("creditsModalBalance");
const creditsModalCloseBtn = document.getElementById("creditsModalCloseBtn");
const settingsModal = document.getElementById("settingsModal");
const settingsModalCloseBtn = document.getElementById("settingsModalCloseBtn");
const settingsProjectName = document.getElementById("settingsProjectName");
const settingsSaveProjectBtn = document.getElementById("settingsSaveProjectBtn");
const settingsExportProjectBtn = document.getElementById("settingsExportProjectBtn");
const settingsImportProjectBtn = document.getElementById("settingsImportProjectBtn");
const settingsSavedProjects = document.getElementById("settingsSavedProjects");
const settingsLoadProjectBtn = document.getElementById("settingsLoadProjectBtn");
const settingsDeleteProjectBtn = document.getElementById("settingsDeleteProjectBtn");
const settingsModalStatus = document.getElementById("settingsModalStatus");
const settingsImportInput = document.getElementById("settingsImportInput");
const aiImageModal = document.getElementById("aiImageModal");
const aiImageModel = document.getElementById("aiImageModel");
const aiImageAspectRatio = document.getElementById("aiImageAspectRatio");
const aiImageResolution = document.getElementById("aiImageResolution");
const aiImageVariantCount = document.getElementById("aiImageVariantCount");
const aiImageSize = document.getElementById("aiImageSize");
const aiImagePrompt = document.getElementById("aiImagePrompt");
const aiImageModalStatus = document.getElementById("aiImageModalStatus");
const aiImageVariantGrid = document.getElementById("aiImageVariantGrid");
const aiImageRegenerateBtn = document.getElementById("aiImageRegenerateBtn");
const aiImageGenerateBtn = document.getElementById("aiImageGenerateBtn");
const aiImageCancelBtn = document.getElementById("aiImageCancelBtn");
const aiImageLoadingIndicator = document.getElementById("aiImageLoadingIndicator");
const aiImageEditModal = document.getElementById("aiImageEditModal");
const aiImageEditPreview = document.getElementById("aiImageEditPreview");
const aiImageEditPrompt = document.getElementById("aiImageEditPrompt");
const aiImageEditModalStatus = document.getElementById("aiImageEditModalStatus");
const aiImageEditGenerateBtn = document.getElementById("aiImageEditGenerateBtn");
const aiImageEditCancelBtn = document.getElementById("aiImageEditCancelBtn");

const inspectorEmpty = document.getElementById("inspectorEmpty");
const inspectorBody = document.getElementById("inspectorBody");
const textFields = document.getElementById("textFields");
const shapeFields = document.getElementById("shapeFields");
const imageFields = document.getElementById("imageFields");
const iconFields = document.getElementById("iconFields");
const inspectorCanvasSection = document.getElementById("inspectorCanvasSection");
const inspectorPanel = document.querySelector(".bf-inspector-panel");
const pagesDrawer = document.querySelector(".bf-pages-drawer");
const addPageBtn = document.getElementById("addPageBtn");
const pageThumbList = document.getElementById("pageThumbList");
const inspectorTransformSection = document.getElementById("inspectorTransformSection");
const inspectorTextSection = document.getElementById("inspectorTextSection");
const inspectorShapeSection = document.getElementById("inspectorShapeSection");
const inspectorImageSection = document.getElementById("inspectorImageSection");
const inspectorIconSection = document.getElementById("inspectorIconSection");
const inspectorLayersSection = document.getElementById("inspectorLayersSection");

const propX = document.getElementById("propX");
const propY = document.getElementById("propY");
const propWidth = document.getElementById("propWidth");
const propHeight = document.getElementById("propHeight");
const propRotation = document.getElementById("propRotation");
const propRotationNumber = document.getElementById("propRotationNumber");
const propOpacity = document.getElementById("propOpacity");
const propFontSize = document.getElementById("propFontSize");
const propFontSizeNumber = document.getElementById("propFontSizeNumber");
const propFontFamily = document.getElementById("propFontFamily");
const propFontWeight = document.getElementById("propFontWeight");
const propTextColor = document.getElementById("propTextColor");
const propTextColorHex = document.getElementById("propTextColorHex");
const propTextFillMode = document.getElementById("propTextFillMode");
const propTextGradientFields = document.getElementById("propTextGradientFields");
const propTextGradientFrom = document.getElementById("propTextGradientFrom");
const propTextGradientTo = document.getElementById("propTextGradientTo");
const propTextGradientAngle = document.getElementById("propTextGradientAngle");
const propTextGradientPresets = Array.from(document.querySelectorAll("#propTextGradientPresets .bf-fill-preset"));
const propTextImageFields = document.getElementById("propTextImageFields");
const propTextImageUploadBtn = document.getElementById("propTextImageUploadBtn");
const propTextImageClearBtn = document.getElementById("propTextImageClearBtn");
const propTextImageInput = document.getElementById("propTextImageInput");
const propTextImageScale = document.getElementById("propTextImageScale");
const propTextImageX = document.getElementById("propTextImageX");
const propTextImageY = document.getElementById("propTextImageY");
const propTextAlignLeft = document.getElementById("propTextAlignLeft");
const propTextAlignCenter = document.getElementById("propTextAlignCenter");
const propTextAlignRight = document.getElementById("propTextAlignRight");
const propTextUnderline = document.getElementById("propTextUnderline");
const propTextStrikethrough = document.getElementById("propTextStrikethrough");
const propTextAllCaps = document.getElementById("propTextAllCaps");
const propTextSmallCaps = document.getElementById("propTextSmallCaps");
const propTextSuperscript = document.getElementById("propTextSuperscript");
const propTextSubscript = document.getElementById("propTextSubscript");
const propTracking = document.getElementById("propTracking");
const propTrackingNumber = document.getElementById("propTrackingNumber");
const propLineHeight = document.getElementById("propLineHeight");
const propLineHeightNumber = document.getElementById("propLineHeightNumber");
const propWordSpacing = document.getElementById("propLetterSpacing");
const propWordSpacingNumber = document.getElementById("propLetterSpacingNumber");
const propFill = document.getElementById("propFill");
const propFillHex = document.getElementById("propFillHex");
const propShapeFillMode = document.getElementById("propShapeFillMode");
const propShapeGradientFields = document.getElementById("propShapeGradientFields");
const propShapeGradientFrom = document.getElementById("propShapeGradientFrom");
const propShapeGradientTo = document.getElementById("propShapeGradientTo");
const propShapeGradientAngle = document.getElementById("propShapeGradientAngle");
const propShapeGradientPresets = Array.from(document.querySelectorAll("#propShapeGradientPresets .bf-fill-preset"));
const propShapeImageFields = document.getElementById("propShapeImageFields");
const propShapeImageUploadBtn = document.getElementById("propShapeImageUploadBtn");
const propShapeImageClearBtn = document.getElementById("propShapeImageClearBtn");
const propShapeImageInput = document.getElementById("propShapeImageInput");
const propShapeImageScale = document.getElementById("propShapeImageScale");
const propShapeImageX = document.getElementById("propShapeImageX");
const propShapeImageY = document.getElementById("propShapeImageY");
const propStroke = document.getElementById("propStroke");
const propStrokeHex = document.getElementById("propStrokeHex");
const propStrokeWidth = document.getElementById("propStrokeWidth");
const propStrokeWidthNumber = document.getElementById("propStrokeWidthNumber");
const propStrokeTop = document.getElementById("propStrokeTop");
const propStrokeRight = document.getElementById("propStrokeRight");
const propStrokeBottom = document.getElementById("propStrokeBottom");
const propStrokeLeft = document.getElementById("propStrokeLeft");
const propRadius = document.getElementById("propRadius");
const propRadiusNumber = document.getElementById("propRadiusNumber");
const propShapePreviewFullWidth = document.getElementById("propShapePreviewFullWidth");
const propImageFit = document.getElementById("propImageFit");
const propImageFocalX = document.getElementById("propImageFocalX");
const propImageFocalY = document.getElementById("propImageFocalY");
const propImageBrightness = document.getElementById("propImageBrightness");
const propImageContrast = document.getElementById("propImageContrast");
const propImageSaturation = document.getElementById("propImageSaturation");
const propImageBlur = document.getElementById("propImageBlur");
const propImageGrayscale = document.getElementById("propImageGrayscale");
const propImageSepia = document.getElementById("propImageSepia");
const propImageHue = document.getElementById("propImageHue");
const propImageAiEditBtn = document.getElementById("propImageAiEditBtn");
const propImageDownloadBtn = document.getElementById("propImageDownloadBtn");
const propImageVersionPrevBtn = document.getElementById("propImageVersionPrevBtn");
const propImageVersionNextBtn = document.getElementById("propImageVersionNextBtn");
const propImageRevertOriginalBtn = document.getElementById("propImageRevertOriginalBtn");
const propImageVersionStatus = document.getElementById("propImageVersionStatus");
const propIconName = document.getElementById("propIconName");
const propIconColor = document.getElementById("propIconColor");
const propIconColorHex = document.getElementById("propIconColorHex");
const propIconStrokeWidth = document.getElementById("propIconStrokeWidth");
const propIconStrokeWidthNumber = document.getElementById("propIconStrokeWidthNumber");

const VIEW_PRESETS = {
  desktop: { width: 2550, height: 3300 },
  tablet: { width: 834, height: 1112 },
  mobile: { width: 390, height: 844 },
};
const CANVAS_PPI = 300;
const PUBLICATION_SIZE_PRESETS = {
  custom: null,
  us_letter_portrait: { widthIn: 8.5, heightIn: 11 },
  us_letter_landscape: { widthIn: 11, heightIn: 8.5 },
  a4_portrait: { widthIn: 8.27, heightIn: 11.69 },
  a4_landscape: { widthIn: 11.69, heightIn: 8.27 },
  tabloid_portrait: { widthIn: 11, heightIn: 17 },
  tabloid_landscape: { widthIn: 17, heightIn: 11 },
};

const IONIC_ICON_NAMES = [
  "add", "add-circle", "remove", "remove-circle",
  "close", "checkmark", "checkmark-circle", "alert-circle",
  "help-circle", "information-circle", "settings", "color-palette",
  "brush", "wand", "sparkles", "shapes",
  "square", "ellipse", "triangle", "star",
  "heart", "bookmark", "flag", "camera",
  "image", "images", "videocam", "mic",
  "musical-notes", "headset", "volume-high", "mail",
  "chatbubble", "chatbubbles", "send", "call",
  "person", "people", "home", "business",
  "storefront", "cart", "bag", "card",
  "cash", "pricetag", "gift", "calendar",
  "time", "alarm", "timer", "location",
  "navigate", "globe", "compass", "map",
  "pin", "airplane", "car", "train",
  "boat", "bicycle", "walk", "fitness",
  "barbell", "football", "basketball", "analytics",
  "bar-chart", "pie-chart", "trending-up", "pulse",
  "wifi", "bluetooth", "battery-half", "hardware-chip",
  "phone-portrait", "laptop", "desktop", "server",
  "cloud", "cloud-upload", "download", "upload",
  "refresh", "sync", "arrow-back", "arrow-forward",
  "arrow-up", "arrow-down", "swap-horizontal", "expand",
  "copy", "duplicate", "create", "trash",
  "lock-closed", "lock-open", "key", "shield-checkmark",
  "eye", "eye-off", "search", "funnel",
  "options", "menu", "grid", "list",
  "folder", "document", "document-text", "attach",
  "link", "code", "terminal", "bug"
];
const IONIC_ICON_SET = new Set(IONIC_ICON_NAMES);
const DEFAULT_TEXT_FONT_FAMILY = "Helvetica, Arial, sans-serif";
const DEFAULT_AI_IMAGE_MODEL = "recraftv4_pro";
const AI_IMAGE_PREFS_STORAGE_KEY = "magx.aiImagePrefs.v1";
const DEFAULT_AI_IMAGE_SIZE = "3:4";
const RECRAFT_SIZE_OPTIONS = [
  { size: "1:1", apiSize: "2048x2048", aspectRatio: "1:1", resolution: "2K" },
  { size: "2:1", apiSize: "3072x1536", aspectRatio: "2:1", resolution: "2K" },
  { size: "1:2", apiSize: "1536x3072", aspectRatio: "1:2", resolution: "2K" },
  { size: "3:2", apiSize: "2560x1664", aspectRatio: "3:2", resolution: "2K" },
  { size: "2:3", apiSize: "1664x2560", aspectRatio: "2:3", resolution: "2K" },
  { size: "4:3", apiSize: "2432x1792", aspectRatio: "4:3", resolution: "2K" },
  { size: "3:4", apiSize: "1792x2432", aspectRatio: "3:4", resolution: "2K" },
  { size: "5:4", apiSize: "2304x1792", aspectRatio: "5:4", resolution: "2K" },
  { size: "4:5", apiSize: "1792x2304", aspectRatio: "4:5", resolution: "2K" },
  { size: "6:10", apiSize: "1664x2688", aspectRatio: "6:10", resolution: "2K" },
  { size: "14:10", apiSize: "2560x1792", aspectRatio: "14:10", resolution: "2K" },
  { size: "10:14", apiSize: "1792x2560", aspectRatio: "10:14", resolution: "2K" },
  { size: "16:9", apiSize: "2688x1536", aspectRatio: "16:9", resolution: "2K" },
  { size: "9:16", apiSize: "1536x2688", aspectRatio: "9:16", resolution: "2K" },
];
const RECRAFT_SIZE_MAP = new Map(RECRAFT_SIZE_OPTIONS.map((entry) => [entry.size, entry]));
const CREDITS_STORAGE_KEY = "magx.credits.v1";
const PROJECTS_STORAGE_KEY = "magx.projects.v1";
const DEFAULT_PROJECT_NAME = "Untitled MagX Project";
const DEFAULT_CREDITS = 1000;
const CANVAS_PAN_MARGIN = 420;
const DEFAULT_INSERT_TOP = 72;
const CANVAS_AUTO_EXPAND_PADDING = 120;
const CANVAS_MAX_AUTO_HEIGHT = 12000;
const CANVAS_MIN_WIDTH_PX = 320;
const CANVAS_MIN_HEIGHT_PX = 240;
const CANVAS_MAX_WIDTH_PX = 12000;
const CANVAS_MAX_HEIGHT_PX = 12000;
const MIN_CANVAS_ZOOM = 0.05;
const MAX_CANVAS_ZOOM = 4;
const CANVAS_FIT_PADDING = 32;

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeRecraftSize(value) {
  const raw = String(value || "").trim();
  return RECRAFT_SIZE_MAP.has(raw) ? raw : DEFAULT_AI_IMAGE_SIZE;
}

function getRecraftSizeMeta(value) {
  const size = normalizeRecraftSize(value);
  return RECRAFT_SIZE_MAP.get(size) || RECRAFT_SIZE_MAP.get(DEFAULT_AI_IMAGE_SIZE);
}

function findRecraftSizeByLegacy(aspectRatio, resolution) {
  const aspect = String(aspectRatio || "").trim() || "3:4";
  const normalizedResolution = String(resolution || "").trim().toUpperCase();
  const desiredResolution = normalizedResolution === "2K" || normalizedResolution === "4K" ? "2K" : "1K";
  const match = RECRAFT_SIZE_OPTIONS.find((entry) => entry.aspectRatio === aspect && entry.resolution === desiredResolution);
  return match?.size || DEFAULT_AI_IMAGE_SIZE;
}

function createDefaultViewState(viewKey) {
  const preset = VIEW_PRESETS[viewKey] || VIEW_PRESETS.desktop;
  return {
    canvas: {
      width: preset.width,
      height: preset.height,
      background: "#f6f7fb",
    },
    elements: [],
    selectedId: null,
    dirty: viewKey === "desktop",
  };
}

function createPageRecord(index) {
  return {
    id: `page_${index}`,
    name: `Page ${index}`,
    currentView: "desktop",
    viewStates: {
      desktop: createDefaultViewState("desktop"),
      tablet: createDefaultViewState("tablet"),
      mobile: createDefaultViewState("mobile"),
    },
  };
}

const state = {
  canvas: {
    width: 2550,
    height: 3300,
    background: "#f6f7fb",
  },
  elements: [],
  selectedId: null,
  selectedIds: [],
  nextId: 1,
  nextGroupIndex: 1,
  drag: null,
  zoom: 1,
  activeTool: "select",
  activeShapeType: "rectangle",
  activeIconName: "star",
  currentView: "desktop",
  viewStates: {
    desktop: createDefaultViewState("desktop"),
    tablet: createDefaultViewState("tablet"),
    mobile: createDefaultViewState("mobile"),
  },
  pages: [],
  currentPageId: null,
  nextPageIndex: 1,
  draggingLayerId: null,
  snapGuides: [],
  pan: null,
  undoStack: [],
  redoStack: [],
  activeHistoryGroup: null,
  maxHistory: 150,
  layoutGuidePreset: "grid-6",
  layoutGuideCustom: {
    columns: 12,
    gutter: 16,
    margin: 24,
  },
  aiImagePrefs: {
    model: DEFAULT_AI_IMAGE_MODEL,
    imageSize: DEFAULT_AI_IMAGE_SIZE,
    aspectRatio: "3:4",
    resolution: "1K",
    variantCount: 1,
  },
  aiImageLastRequest: null,
  aiImageVariantResults: [],
  aiImageEditTargetId: null,
  projectName: DEFAULT_PROJECT_NAME,
  credits: DEFAULT_CREDITS,
  isReadOnly: false,
  textDraw: null,
  pendingTextEditId: null,
};

const initialPage = createPageRecord(state.nextPageIndex);
state.pages = [initialPage];
state.currentPageId = initialPage.id;
state.nextPageIndex += 1;
state.currentView = initialPage.currentView;
state.viewStates = cloneJson(initialPage.viewStates);
state.canvas = cloneJson(state.viewStates[state.currentView].canvas);
state.elements = cloneJson(state.viewStates[state.currentView].elements);
state.selectedId = state.viewStates[state.currentView].selectedId;
state.selectedIds = state.selectedId ? [state.selectedId] : [];
let isSpacePanPressed = false;
let lastInspectorFocusSectionId = null;

function setStatus(message) {
  statusText.textContent = message;
}

function normalizeProjectName(value) {
  const raw = String(value || "").trim();
  return raw || DEFAULT_PROJECT_NAME;
}

function setProjectName(name, options = {}) {
  const next = normalizeProjectName(name);
  state.projectName = next;
  if (options.syncInput !== false && settingsProjectName) {
    settingsProjectName.value = next;
  }
}

function isTypingElement(element) {
  if (!element) return false;
  const tagName = String(element.tagName || "").toUpperCase();
  return tagName === "INPUT" || tagName === "TEXTAREA" || Boolean(element.isContentEditable);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function pxToInches(px) {
  return (Number(px) || 0) / CANVAS_PPI;
}

function inchesToDisplayString(inches) {
  const rounded = Math.round((Number(inches) || 0) * 100) / 100;
  return rounded % 1 === 0 ? String(rounded.toFixed(0)) : String(rounded.toFixed(2)).replace(/\.?0+$/, "");
}

function normalizeTextAlign(value) {
  if (value === "center" || value === "right") return value;
  return "left";
}

function normalizeTextCase(value) {
  if (value === "uppercase" || value === "small-caps") return value;
  return "normal";
}

function normalizeTextScript(value) {
  if (value === "superscript" || value === "subscript") return value;
  return "normal";
}

function getTextScriptScale(item) {
  return normalizeTextScript(item?.textScript) === "normal" ? 1 : 0.66;
}

function getEffectiveTextFontSize(item) {
  const base = clamp(Number(item?.fontSize) || 12, 8, 2000);
  return base * getTextScriptScale(item);
}

function getRenderedTextContent(item) {
  const raw = String(item?.text || "");
  const textCase = normalizeTextCase(item?.textCase);
  if (textCase === "uppercase") {
    return raw.toUpperCase();
  }
  return raw;
}

function getCanvasRenderedTextContent(item) {
  const raw = String(item?.text || "");
  const textCase = normalizeTextCase(item?.textCase);
  if (textCase === "uppercase" || textCase === "small-caps") {
    return raw.toUpperCase();
  }
  return raw;
}

function normalizeFillMode(value, fallback = "solid") {
  const next = String(value || fallback).trim().toLowerCase();
  if (next === "none" || next === "solid" || next === "gradient" || next === "image") return next;
  return fallback;
}

function normalizeGradientAngle(value, fallback = 90) {
  return clamp(Math.round(Number(value) || fallback), 0, 360);
}

function buildGradientCss(from, to, angle = 90) {
  const a = normalizeGradientAngle(angle, 90);
  const start = normalizeHexColor(from, "#595959");
  const end = normalizeHexColor(to, "#9d9d9d");
  return `linear-gradient(${a}deg, ${start} 0%, ${end} 100%)`;
}

function syncRangeNumber(rangeInput, numberInput, value) {
  const next = String(value);
  if (rangeInput) rangeInput.value = next;
  if (numberInput) numberInput.value = next;
}

function getShapeImageScale(item) {
  return clamp(Number(item.shapeFillImageScale ?? 100), 20, 300);
}

function getShapeImageX(item) {
  return clamp(Number(item.shapeFillImageX ?? 50), 0, 100);
}

function getShapeImageY(item) {
  return clamp(Number(item.shapeFillImageY ?? 50), 0, 100);
}

function getTextImageScale(item) {
  return clamp(Number(item.textFillImageScale ?? 100), 20, 300);
}

function getTextImageX(item) {
  return clamp(Number(item.textFillImageX ?? 50), 0, 100);
}

function getTextImageY(item) {
  return clamp(Number(item.textFillImageY ?? 50), 0, 100);
}

function getShapeFillCss(item) {
  const mode = normalizeFillMode(item.shapeFillMode, "solid");
  if (mode === "none") {
    return "transparent";
  }
  if (mode === "image" && item.shapeFillImageSrc) {
    const scale = getShapeImageScale(item);
    const x = getShapeImageX(item);
    const y = getShapeImageY(item);
    return `url(${item.shapeFillImageSrc}) ${x}% ${y}% / ${scale}% auto no-repeat`;
  }
  if (mode === "gradient") {
    return buildGradientCss(item.shapeGradientFrom, item.shapeGradientTo, item.shapeGradientAngle);
  }
  return normalizeHexColor(item.fill, "#595959");
}

function updateFillModeInspectorVisibility(selected = getSelected()) {
  const textMode = normalizeFillMode(selected?.textFillMode, "solid");
  propTextGradientFields?.classList.toggle("hidden", textMode !== "gradient");
  propTextImageFields?.classList.toggle("hidden", textMode !== "image");
  if (propTextImageClearBtn) {
    propTextImageClearBtn.disabled = !(selected?.textFillImageSrc && textMode === "image");
  }
  if (propTextImageScale) propTextImageScale.value = String(getTextImageScale(selected || {}));
  if (propTextImageX) propTextImageX.value = String(getTextImageX(selected || {}));
  if (propTextImageY) propTextImageY.value = String(getTextImageY(selected || {}));
  const shapeMode = normalizeFillMode(selected?.shapeFillMode, "solid");
  propShapeGradientFields?.classList.toggle("hidden", shapeMode !== "gradient");
  propShapeImageFields?.classList.toggle("hidden", shapeMode !== "image");
  if (propShapeImageClearBtn) {
    propShapeImageClearBtn.disabled = !(selected?.shapeFillImageSrc && shapeMode === "image");
  }
  if (propShapeImageScale) propShapeImageScale.value = String(getShapeImageScale(selected || {}));
  if (propShapeImageX) propShapeImageX.value = String(getShapeImageX(selected || {}));
  if (propShapeImageY) propShapeImageY.value = String(getShapeImageY(selected || {}));
}

function normalizeFontWeight(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "600";
  const stepped = Math.round(numeric / 100) * 100;
  return String(clamp(stepped, 100, 900));
}

function normalizeImageFilterValue(value, type) {
  const numeric = Number(value);
  if (type === "blur") return clamp(Number.isFinite(numeric) ? numeric : 0, 0, 20);
  if (type === "hue") return clamp(Number.isFinite(numeric) ? numeric : 0, 0, 360);
  return clamp(Number.isFinite(numeric) ? numeric : 100, 0, 200);
}

function buildImageFilterCss(item) {
  const brightness = normalizeImageFilterValue(item.imageBrightness ?? 100, "percent");
  const contrast = normalizeImageFilterValue(item.imageContrast ?? 100, "percent");
  const saturation = normalizeImageFilterValue(item.imageSaturation ?? 100, "percent");
  const blur = normalizeImageFilterValue(item.imageBlur ?? 0, "blur");
  const grayscale = clamp(Number(item.imageGrayscale ?? 0), 0, 100);
  const sepia = clamp(Number(item.imageSepia ?? 0), 0, 100);
  const hue = normalizeImageFilterValue(item.imageHue ?? 0, "hue");
  return [
    `brightness(${brightness}%)`,
    `contrast(${contrast}%)`,
    `saturate(${saturation}%)`,
    `blur(${blur}px)`,
    `grayscale(${grayscale}%)`,
    `sepia(${sepia}%)`,
    `hue-rotate(${hue}deg)`,
  ].join(" ");
}

function getDefaultTextInsertPoint() {
  const insert = getDefaultInsertPoint(420, 120);
  return {
    x: insert.x,
    y: insert.y,
  };
}

function getDefaultInsertPoint(width, height, top = DEFAULT_INSERT_TOP) {
  const safeWidth = Math.max(1, Number(width) || 1);
  const safeHeight = Math.max(1, Number(height) || 1);
  const x = Math.round(clamp((state.canvas.width - safeWidth) / 2, 20 - safeWidth, state.canvas.width - 20));
  const maxY = Math.max(20, state.canvas.height - safeHeight - 20);
  const y = Math.round(clamp(top, 20, maxY));
  return { x, y };
}

function ensureCanvasHeightForContent(minimumBottom = null) {
  // MagX pages use fixed sizes; disable legacy vertical auto-expand behavior.
  return false;
}

function setTextAlignButtons(value) {
  const align = normalizeTextAlign(value);
  propTextAlignLeft?.classList.toggle("is-active", align === "left");
  propTextAlignCenter?.classList.toggle("is-active", align === "center");
  propTextAlignRight?.classList.toggle("is-active", align === "right");
}

function normalizeTracking(value) {
  return clamp(Number(value) || 0, -5, 40);
}

function setTextDecorationButtons(selected) {
  const underline = Boolean(selected?.textUnderline);
  const strike = Boolean(selected?.textStrikethrough);
  propTextUnderline?.classList.toggle("is-active", underline);
  propTextStrikethrough?.classList.toggle("is-active", strike);
}

function setTextOpenTypeButtons(selected) {
  const textCase = normalizeTextCase(selected?.textCase);
  const textScript = normalizeTextScript(selected?.textScript);
  propTextAllCaps?.classList.toggle("is-active", textCase === "uppercase");
  propTextSmallCaps?.classList.toggle("is-active", textCase === "small-caps");
  propTextSuperscript?.classList.toggle("is-active", textScript === "superscript");
  propTextSubscript?.classList.toggle("is-active", textScript === "subscript");
}

function hydrateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function uid() {
  const id = `node_${state.nextId}`;
  state.nextId += 1;
  return id;
}

function getSelected() {
  return state.elements.find((item) => item.id === state.selectedId) || null;
}

function getSelectedIds() {
  if (state.selectedIds.length > 0) return [...state.selectedIds];
  return state.selectedId ? [state.selectedId] : [];
}

function isSelected(id) {
  return getSelectedIds().includes(id);
}

function getGroupMemberIds(groupId) {
  if (!groupId) return [];
  return state.elements.filter((item) => item.groupId === groupId).map((item) => item.id);
}

function canGroupSelection() {
  return getSelectedIds().length >= 2;
}

function canUngroupSelection() {
  const selectedIds = new Set(getSelectedIds());
  return state.elements.some((item) => selectedIds.has(item.id) && item.groupId);
}

function getBorderWidths(item) {
  const fallback = clamp(Number(item?.strokeWidth) || 0, 0, 80);
  return {
    top: clamp(Number(item?.strokeTop ?? fallback) || 0, 0, 80),
    right: clamp(Number(item?.strokeRight ?? fallback) || 0, 0, 80),
    bottom: clamp(Number(item?.strokeBottom ?? fallback) || 0, 0, 80),
    left: clamp(Number(item?.strokeLeft ?? fallback) || 0, 0, 80),
  };
}

function getRepresentativeStrokeWidth(item) {
  const sides = getBorderWidths(item);
  return Math.max(sides.top, sides.right, sides.bottom, sides.left);
}

function isItemLocked(item) {
  return Boolean(item?.isLocked);
}

function getUnlockedSelectedIds() {
  return getSelectedIds().filter((id) => {
    const item = state.elements.find((entry) => entry.id === id);
    return item && !isItemLocked(item);
  });
}

function updateCanvasSize() {
  designCanvas.style.width = `${state.canvas.width}px`;
  designCanvas.style.height = `${state.canvas.height}px`;
  canvasWidthInput.value = inchesToDisplayString(pxToInches(state.canvas.width));
  canvasHeightInput.value = inchesToDisplayString(pxToInches(state.canvas.height));
  updatePublicationSizeSelect();
  updateCanvasWorkspaceBounds();
  ensureCanvasFitsWorkspace();
}

function updateCanvasBackground() {
  const normalized = normalizeHexColor(state.canvas.background, "#f6f7fb");
  state.canvas.background = normalized;
  designCanvas.style.backgroundColor = normalized;
  const guideDataUrl = buildLayoutGuideDataUrl();
  if (guideDataUrl) {
    designCanvas.style.backgroundImage = `url("${guideDataUrl}")`;
    designCanvas.style.backgroundSize = "100% 100%";
    designCanvas.style.backgroundRepeat = "no-repeat";
    designCanvas.style.backgroundPosition = "0 0";
  } else {
    designCanvas.style.backgroundImage = "none";
    designCanvas.style.backgroundSize = "";
    designCanvas.style.backgroundRepeat = "";
    designCanvas.style.backgroundPosition = "";
  }
  canvasBgColorInput.value = normalized;
  setHexInputValue(canvasBgColorHexInput, normalized);
}

function buildLayoutGuideDataUrl() {
  if (state.layoutGuidePreset === "none") return "";
  if (state.layoutGuidePreset === "columns-12") {
    return buildColumnsGuideDataUrl(12, 0, 0);
  }
  if (state.layoutGuidePreset === "grid-3") {
    return buildUniformGridGuideDataUrl(3, 3);
  }
  if (state.layoutGuidePreset === "grid-4") {
    return buildUniformGridGuideDataUrl(4, 4);
  }
  if (state.layoutGuidePreset === "grid-6") {
    return buildUniformGridGuideDataUrl(6, 6);
  }
  if (state.layoutGuidePreset === "custom-columns") {
    const custom = state.layoutGuideCustom || { columns: 12, gutter: 16, margin: 24 };
    return buildColumnsGuideDataUrl(custom.columns, custom.gutter, custom.margin);
  }
  return "";
}

function updateGridButtonState() {
  if (!gridBtn) return;
  gridBtn.classList.toggle("is-grid-on", state.layoutGuidePreset !== "none");
}

function buildUniformGridGuideDataUrl(columns, rows) {
  const width = Math.max(1, Number(state.canvas.width) || 1);
  const height = Math.max(1, Number(state.canvas.height) || 1);
  const safeColumns = clamp(Math.round(Number(columns) || 0), 1, 48);
  const safeRows = clamp(Math.round(Number(rows) || 0), 1, 48);
  const stroke = "rgba(18,22,30,0.24)";
  const lines = [];
  for (let i = 1; i < safeColumns; i += 1) {
    const x = (width * i) / safeColumns;
    lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" />`);
  }
  for (let i = 1; i < safeRows; i += 1) {
    const y = (height * i) / safeRows;
    lines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" />`);
  }
  if (lines.length === 0) return "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <g fill="none" stroke="${stroke}" stroke-width="1" shape-rendering="crispEdges">
    ${lines.join("\n    ")}
  </g>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function buildColumnsGuideDataUrl(columns, gutter, margin) {
  const width = Math.max(1, Number(state.canvas.width) || 1);
  const height = Math.max(1, Number(state.canvas.height) || 1);
  const safeColumns = clamp(Math.round(Number(columns) || 12), 1, 48);
  const safeGutter = clamp(Number(gutter) || 0, 0, 240);
  const maxMargin = Math.max(0, Math.floor(width / 2) - 1);
  const safeMargin = clamp(Number(margin) || 0, 0, maxMargin);
  const contentWidth = width - safeMargin * 2;
  if (contentWidth <= 1) return "";
  const totalGutterWidth = safeGutter * (safeColumns - 1);
  const columnWidth = (contentWidth - totalGutterWidth) / safeColumns;
  if (!Number.isFinite(columnWidth) || columnWidth <= 1) return "";

  const stroke = "rgba(18,22,30,0.28)";
  const fill = "rgba(18,22,30,0.07)";
  const fills = [];
  const lines = [];
  let x = safeMargin;
  for (let i = 0; i < safeColumns; i += 1) {
    const next = x + columnWidth;
    fills.push(`<rect x="${x}" y="0" width="${columnWidth}" height="${height}" />`);
    lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" />`);
    if (i === safeColumns - 1) {
      lines.push(`<line x1="${next}" y1="0" x2="${next}" y2="${height}" />`);
    }
    x = next + safeGutter;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <g shape-rendering="crispEdges">
    <g fill="${fill}">
      ${fills.join("\n      ")}
    </g>
    <g fill="none" stroke="${stroke}" stroke-width="1">
      ${lines.join("\n      ")}
    </g>
  </g>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function updateZoomLabel() {
  zoomLevel.textContent = `${Math.round(state.zoom * 100)}%`;
}

function applyCanvasTransform() {
  designCanvas.style.transform = `scale(${state.zoom})`;
  updateCanvasWorkspaceBounds();
}

function updateCanvasWorkspaceBounds() {
  if (!canvasWrap || !canvasPanel) return;
  const canvasWidth = Math.max(1, Math.round(Number(state.canvas.width) || 1));
  const canvasHeight = Math.max(1, Math.round(Number(state.canvas.height) || 1));
  const scaledWidth = Math.max(1, Math.round(canvasWidth * state.zoom));
  const scaledHeight = Math.max(1, Math.round(canvasHeight * state.zoom));
  const requiredWidth = Math.max(canvasWidth, scaledWidth);
  const requiredHeight = Math.max(canvasHeight, scaledHeight);
  const nextWidth = Math.max(canvasPanel.clientWidth + CANVAS_PAN_MARGIN * 2, requiredWidth + CANVAS_PAN_MARGIN * 2);
  const nextHeight = Math.max(canvasPanel.clientHeight + CANVAS_PAN_MARGIN * 2, requiredHeight + CANVAS_PAN_MARGIN * 2);
  canvasWrap.style.width = `${Math.ceil(nextWidth)}px`;
  canvasWrap.style.height = `${Math.ceil(nextHeight)}px`;
}

function centerCanvasViewport() {
  if (!canvasPanel) return;
  const panelRect = canvasPanel.getBoundingClientRect();
  const canvasRect = designCanvas.getBoundingClientRect();
  const canvasCenterX = canvasPanel.scrollLeft + (canvasRect.left - panelRect.left) + canvasRect.width / 2;
  const canvasCenterY = canvasPanel.scrollTop + (canvasRect.top - panelRect.top) + canvasRect.height / 2;
  const targetScrollLeft = canvasCenterX - canvasPanel.clientWidth / 2;
  const targetScrollTop = canvasCenterY - canvasPanel.clientHeight / 2;
  const maxScrollLeft = Math.max(0, canvasPanel.scrollWidth - canvasPanel.clientWidth);
  const maxScrollTop = Math.max(0, canvasPanel.scrollHeight - canvasPanel.clientHeight);
  canvasPanel.scrollLeft = clamp(targetScrollLeft, 0, maxScrollLeft);
  canvasPanel.scrollTop = clamp(targetScrollTop, 0, maxScrollTop);
}

function recenterCanvasViewportSoon() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      centerCanvasViewport();
    });
  });
}

function getCanvasFitZoom() {
  if (!canvasPanel) return state.zoom;
  const availableWidth = Math.max(1, canvasPanel.clientWidth - CANVAS_FIT_PADDING * 2);
  const availableHeight = Math.max(1, canvasPanel.clientHeight - CANVAS_FIT_PADDING * 2);
  const fitWidth = availableWidth / Math.max(1, Number(state.canvas.width) || 1);
  const fitHeight = availableHeight / Math.max(1, Number(state.canvas.height) || 1);
  return clamp(Math.min(fitWidth, fitHeight), MIN_CANVAS_ZOOM, MAX_CANVAS_ZOOM);
}

function ensureCanvasFitsWorkspace() {
  const fitZoom = getCanvasFitZoom();
  if (!Number.isFinite(fitZoom)) return;
  if (state.zoom > fitZoom + 0.001) {
    setZoom(fitZoom);
  }
}

function setZoom(nextZoom) {
  const prevZoom = state.zoom;
  state.zoom = clamp(nextZoom, MIN_CANVAS_ZOOM, MAX_CANVAS_ZOOM);
  updateZoomLabel();
  applyCanvasTransform();
  if (state.zoom <= 1 || prevZoom <= 1) {
    requestAnimationFrame(() => {
      centerCanvasViewport();
    });
  }
}

function updateViewButtons() {
  updatePublicationSizeSelect();
}

function inchesToCanvasPx(inches) {
  return Math.round((Number(inches) || 0) * CANVAS_PPI);
}

function getPublicationPresetCanvasSize(preset) {
  if (!preset) return null;
  return {
    width: inchesToCanvasPx(preset.widthIn),
    height: inchesToCanvasPx(preset.heightIn),
  };
}

function resolvePublicationPresetKey(width, height) {
  const safeWidth = Math.round(Number(width) || 0);
  const safeHeight = Math.round(Number(height) || 0);
  const match = Object.entries(PUBLICATION_SIZE_PRESETS).find(([key, preset]) => {
    if (key === "custom" || !preset) return false;
    const size = getPublicationPresetCanvasSize(preset);
    return size?.width === safeWidth && size?.height === safeHeight;
  });
  return match?.[0] || "custom";
}

function updatePublicationSizeSelect() {
  if (!publicationSizeSelect) return;
  publicationSizeSelect.value = resolvePublicationPresetKey(state.canvas.width, state.canvas.height);
}

function markCurrentViewDirty() {
  const viewState = state.viewStates[state.currentView];
  if (!viewState) return;
  viewState.dirty = true;
}

function scaleElementsForCanvas(elements, sourceCanvas, targetCanvas) {
  const scaleX = targetCanvas.width / sourceCanvas.width;
  const scaleY = targetCanvas.height / sourceCanvas.height;
  const scaleUniform = Math.min(scaleX, scaleY);
  return cloneJson(elements).map((item) => ({
    ...item,
    // Keep non-rectangle shapes proportional across responsive inherited views.
    width:
      item.type === "shape" && item.shapeKind && item.shapeKind !== "rectangle" && item.shapeKind !== "line"
        ? Math.max(8, Math.round(item.width * scaleUniform))
        : Math.max(8, Math.round(item.width * scaleX)),
    height:
      item.type === "shape" && item.shapeKind && item.shapeKind !== "rectangle" && item.shapeKind !== "line"
        ? Math.max(8, Math.round(item.height * scaleUniform))
        : Math.max(8, Math.round(item.height * scaleY)),
    x: Math.round(item.x * scaleX),
    y: Math.round(item.y * scaleY),
    fontSize: item.type === "text" ? Math.max(8, Math.round(item.fontSize * scaleUniform)) : item.fontSize,
    strokeWidth: typeof item.strokeWidth === "number" ? Math.max(0, Math.round(item.strokeWidth * scaleUniform)) : item.strokeWidth,
    radius: typeof item.radius === "number" ? Math.max(0, Math.round(item.radius * scaleUniform)) : item.radius,
  }));
}

function deriveViewFromDesktop(viewKey) {
  if (viewKey === "desktop") return;
  const desktop = state.viewStates.desktop;
  const target = state.viewStates[viewKey];
  if (!desktop || !target) return;
  target.elements = scaleElementsForCanvas(desktop.elements, desktop.canvas, target.canvas);
  target.selectedId = null;
}

function deriveViewFromDesktopFor(viewStates, viewKey) {
  if (viewKey === "desktop") return;
  const desktop = viewStates.desktop;
  const target = viewStates[viewKey];
  if (!desktop || !target) return;
  target.elements = scaleElementsForCanvas(desktop.elements, desktop.canvas, target.canvas);
  target.selectedId = null;
}

function ensureInheritedViewsFor(viewStates) {
  ["tablet", "mobile"].forEach((viewKey) => {
    const viewState = viewStates[viewKey];
    if (!viewState) return;
    if (!viewState.dirty) {
      deriveViewFromDesktopFor(viewStates, viewKey);
    }
  });
}

function ensureInheritedViewsUpToDate() {
  ensureInheritedViewsFor(state.viewStates);
}

function persistCurrentViewState() {
  const existing = state.viewStates[state.currentView] || createDefaultViewState(state.currentView);
  const selectedIds = getSelectedIds();
  const selectedId = selectedIds.includes(state.selectedId) ? state.selectedId : (selectedIds[0] || null);
  state.viewStates[state.currentView] = {
    ...existing,
    canvas: cloneJson(state.canvas),
    elements: cloneJson(state.elements),
    selectedId,
  };
}

function persistCurrentPageState() {
  persistCurrentViewState();
  const page = state.pages.find((item) => item.id === state.currentPageId);
  if (!page) return;
  page.currentView = state.currentView;
  page.viewStates = cloneJson(state.viewStates);
}

function hydrateCanvasFromPage(page) {
  state.currentView = page.currentView || "desktop";
  state.viewStates = cloneJson(page.viewStates);
  const current = state.viewStates[state.currentView] || state.viewStates.desktop || createDefaultViewState("desktop");
  state.canvas = cloneJson(current.canvas);
  state.elements = cloneJson(current.elements);
  state.selectedId = current.selectedId;
  state.selectedIds = state.selectedId ? [state.selectedId] : [];
}

function switchPage(pageId) {
  if (!pageId || pageId === state.currentPageId) return;
  persistCurrentPageState();
  const target = state.pages.find((item) => item.id === pageId);
  if (!target) return;
  state.currentPageId = target.id;
  hydrateCanvasFromPage(target);
  state.drag = null;
  state.snapGuides = [];
  updateViewButtons();
  updateCanvasSize();
  updateCanvasBackground();
  render();
  setStatus(`Switched to ${target.name}.`);
}

function addNewPage() {
  persistCurrentPageState();
  const page = createPageRecord(state.nextPageIndex);
  state.nextPageIndex += 1;
  state.pages.push(page);
  state.currentPageId = page.id;
  hydrateCanvasFromPage(page);
  state.drag = null;
  state.snapGuides = [];
  updateViewButtons();
  updateCanvasSize();
  updateCanvasBackground();
  render();
  setStatus(`${page.name} created.`);
}

function duplicatePage(pageId) {
  persistCurrentPageState();
  const source = state.pages.find((item) => item.id === pageId);
  if (!source) return;
  const page = createPageRecord(state.nextPageIndex);
  state.nextPageIndex += 1;
  page.name = `${source.name || "Page"} Copy`;
  page.currentView = source.currentView || "desktop";
  page.viewStates = cloneJson(source.viewStates);
  state.pages.push(page);
  state.currentPageId = page.id;
  hydrateCanvasFromPage(page);
  state.drag = null;
  state.snapGuides = [];
  updateViewButtons();
  updateCanvasSize();
  updateCanvasBackground();
  render();
  setStatus(`${page.name} duplicated.`);
}

function deletePage(pageId) {
  persistCurrentPageState();
  if (state.pages.length <= 1) {
    setStatus("At least one page is required.");
    return;
  }
  const index = state.pages.findIndex((item) => item.id === pageId);
  if (index < 0) return;
  const [removed] = state.pages.splice(index, 1);

  if (state.currentPageId === pageId) {
    const nextIndex = Math.max(0, Math.min(index, state.pages.length - 1));
    const nextPage = state.pages[nextIndex];
    state.currentPageId = nextPage.id;
    hydrateCanvasFromPage(nextPage);
    state.drag = null;
    state.snapGuides = [];
    updateViewButtons();
    updateCanvasSize();
    updateCanvasBackground();
  }

  render();
  setStatus(`${removed?.name || "Page"} deleted.`);
}

function switchView(nextView) {
  if (!state.viewStates[nextView]) return;
  if (state.currentView === nextView) return;

  persistCurrentViewState();
  if (nextView !== "desktop" && !state.viewStates[nextView].dirty) {
    deriveViewFromDesktop(nextView);
  }
  const nextState = state.viewStates[nextView];
  state.currentView = nextView;
  state.canvas = cloneJson(nextState.canvas);
  state.elements = cloneJson(nextState.elements);
  state.selectedId = nextState.selectedId;
  state.selectedIds = state.selectedId ? [state.selectedId] : [];
  state.drag = null;

  updateViewButtons();
  updateCanvasSize();
  updateCanvasBackground();
  persistCurrentPageState();
  render();
  setStatus(`Switched to ${nextView} view.`);
}

function normalizeOrder() {
  state.elements.forEach((item, index) => {
    item.z = index;
  });
}

function getBounds(item, x = item.x, y = item.y) {
  return {
    left: x,
    right: x + item.width,
    top: y,
    bottom: y + item.height,
    cx: x + item.width / 2,
    cy: y + item.height / 2,
  };
}

function computeSnapForMove(selected, proposedX, proposedY) {
  const SNAP_THRESHOLD = 6;
  const selectedBounds = getBounds(selected, proposedX, proposedY);
  const guides = [];

  const xCandidates = [0, state.canvas.width / 2, state.canvas.width];
  const yCandidates = [0, state.canvas.height / 2, state.canvas.height];
  state.elements.forEach((item) => {
    if (item.id === selected.id) return;
    const b = getBounds(item);
    xCandidates.push(b.left, b.cx, b.right);
    yCandidates.push(b.top, b.cy, b.bottom);
  });

  const selectedXAnchors = [
    { key: "left", value: selectedBounds.left },
    { key: "cx", value: selectedBounds.cx },
    { key: "right", value: selectedBounds.right },
  ];
  const selectedYAnchors = [
    { key: "top", value: selectedBounds.top },
    { key: "cy", value: selectedBounds.cy },
    { key: "bottom", value: selectedBounds.bottom },
  ];

  let bestX = null;
  for (const anchor of selectedXAnchors) {
    for (const candidate of xCandidates) {
      const diff = candidate - anchor.value;
      if (Math.abs(diff) > SNAP_THRESHOLD) continue;
      if (!bestX || Math.abs(diff) < Math.abs(bestX.diff)) {
        bestX = { candidate, diff };
      }
    }
  }

  let bestY = null;
  for (const anchor of selectedYAnchors) {
    for (const candidate of yCandidates) {
      const diff = candidate - anchor.value;
      if (Math.abs(diff) > SNAP_THRESHOLD) continue;
      if (!bestY || Math.abs(diff) < Math.abs(bestY.diff)) {
        bestY = { candidate, diff };
      }
    }
  }

  let snappedX = proposedX;
  let snappedY = proposedY;

  if (bestX) {
    snappedX += bestX.diff;
    guides.push({ axis: "x", position: bestX.candidate });
  }
  if (bestY) {
    snappedY += bestY.diff;
    guides.push({ axis: "y", position: bestY.candidate });
  }

  return { x: snappedX, y: snappedY, guides };
}

function snapshotState() {
  persistCurrentPageState();
  return cloneJson({
    nextId: state.nextId,
    nextGroupIndex: state.nextGroupIndex,
    projectName: state.projectName,
    pages: state.pages,
    currentPageId: state.currentPageId,
    nextPageIndex: state.nextPageIndex,
  });
}

function applySnapshot(snapshot) {
  state.nextId = snapshot.nextId;
  state.nextGroupIndex = snapshot.nextGroupIndex || state.nextGroupIndex;
  setProjectName(snapshot.projectName || state.projectName || DEFAULT_PROJECT_NAME, { syncInput: false });
  state.pages = cloneJson(snapshot.pages || []);
  state.currentPageId = snapshot.currentPageId;
  state.nextPageIndex = snapshot.nextPageIndex || Math.max(2, state.pages.length + 1);
  if (state.pages.length === 0) {
    const fallback = createPageRecord(1);
    state.pages = [fallback];
    state.currentPageId = fallback.id;
    state.nextPageIndex = 2;
  }
  const page = state.pages.find((item) => item.id === state.currentPageId) || state.pages[0];
  state.currentPageId = page.id;
  hydrateCanvasFromPage(page);
  state.drag = null;
  updateViewButtons();
  updateCanvasSize();
  updateCanvasBackground();
  render();
}

function updateHistoryButtons() {
  if (undoBtn) undoBtn.disabled = state.undoStack.length === 0;
  if (redoBtn) redoBtn.disabled = state.redoStack.length === 0;
}

function updateSelectionActionButtons() {
  if (groupBtn) groupBtn.disabled = !canGroupSelection();
  if (ungroupBtn) ungroupBtn.disabled = !canUngroupSelection();
}

function pushUndoSnapshot() {
  let snapshot;
  try {
    snapshot = snapshotState();
  } catch (error) {
    console.error("Undo snapshot failed:", error);
    return;
  }
  const last = state.undoStack[state.undoStack.length - 1];
  if (last && JSON.stringify(last) === JSON.stringify(snapshot)) {
    return;
  }
  state.undoStack.push(snapshot);
  if (state.undoStack.length > state.maxHistory) {
    state.undoStack.shift();
  }
  state.redoStack = [];
  updateHistoryButtons();
}

function beginHistoryGroup(groupName) {
  if (state.activeHistoryGroup === groupName) return false;
  if (state.activeHistoryGroup && state.activeHistoryGroup !== groupName) {
    state.activeHistoryGroup = null;
  }
  pushUndoSnapshot();
  state.activeHistoryGroup = groupName;
  return true;
}

function endHistoryGroup(groupName) {
  if (state.activeHistoryGroup === groupName) {
    state.activeHistoryGroup = null;
  }
  updateHistoryButtons();
}

function runWithHistory(fn, groupName = "action") {
  if (!requireEditableStatus()) return;
  let historyStarted = false;
  try {
    historyStarted = beginHistoryGroup(groupName);
  } catch (error) {
    console.error("History begin failed:", error);
  }
  try {
    fn();
  } finally {
    if (historyStarted) {
      endHistoryGroup(groupName);
    }
  }
}

function closeActiveHistoryGroup() {
  if (!state.activeHistoryGroup) return;
  state.activeHistoryGroup = null;
  updateHistoryButtons();
}

function undoAction() {
  closeActiveHistoryGroup();
  if (state.undoStack.length === 0) return;
  const current = snapshotState();
  const previous = state.undoStack.pop();
  state.redoStack.push(current);
  applySnapshot(previous);
  updateHistoryButtons();
  setStatus("Undo");
}

function redoAction() {
  closeActiveHistoryGroup();
  if (state.redoStack.length === 0) return;
  const current = snapshotState();
  const next = state.redoStack.pop();
  state.undoStack.push(current);
  applySnapshot(next);
  updateHistoryButtons();
  setStatus("Redo");
}

function focusInspectorSection(sectionNode) {
  const nextId = sectionNode?.id || "__canvas__";
  if (lastInspectorFocusSectionId === nextId) return;
  lastInspectorFocusSectionId = nextId;
  const sections = inspectorPanel?.querySelectorAll("details.bf-inspector-section");
  sections?.forEach((section) => {
    section.open = false;
  });
  if (inspectorTransformSection) {
    inspectorTransformSection.open = true;
  }
  if (sectionNode) {
    sectionNode.open = true;
  }
}

function getLayerLabel(type, shapeKind) {
  if (type === "text") return "Text";
  if (type === "image") return "Image";
  if (type === "icon") return "Icon";
  if (type === "shape") {
    if (shapeKind === "rectangle") return "Rectangle";
    if (shapeKind === "circle") return "Circle";
    if (shapeKind === "triangle") return "Triangle";
    if (shapeKind === "line") return "Line";
    if (shapeKind === "star") return "Star";
    if (shapeKind === "polygon") return "Polygon";
    return "Shape";
  }
  return "Layer";
}

function createDefaultLayerName(type, shapeKind) {
  const base = getLayerLabel(type, shapeKind);
  const count = state.elements.filter((item) => getLayerLabel(item.type, item.shapeKind) === base).length + 1;
  return `${base} ${count}`;
}

function reorderLayer(dragId, targetId, insertAfter = false) {
  runWithHistory(() => {
    const fromIndex = state.elements.findIndex((item) => item.id === dragId);
    const targetIndex = state.elements.findIndex((item) => item.id === targetId);
    if (fromIndex < 0 || targetIndex < 0 || fromIndex === targetIndex) return;

    const [moved] = state.elements.splice(fromIndex, 1);
    let insertIndex = targetIndex;
    if (fromIndex < targetIndex) {
      insertIndex -= 1;
    }
    if (insertAfter) {
      insertIndex += 1;
    }
    insertIndex = clamp(insertIndex, 0, state.elements.length);
    state.elements.splice(insertIndex, 0, moved);
    markCurrentViewDirty();
    normalizeOrder();
    render();
  }, "layer-reorder");
}

function selectElement(id, { additive = false } = {}) {
  const item = state.elements.find((node) => node.id === id);
  if (!item) return;

  if (additive) {
    const next = new Set(getSelectedIds());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    state.selectedIds = Array.from(next);
    state.selectedId = state.selectedIds[state.selectedIds.length - 1] || null;
    render();
    return;
  }

  const memberIds = item.groupId ? getGroupMemberIds(item.groupId) : [id];
  state.selectedIds = memberIds.length > 0 ? memberIds : [id];
  state.selectedId = id;
  render();
}

function deselect() {
  state.selectedId = null;
  state.selectedIds = [];
  focusInspectorSection(inspectorCanvasSection);
  render();
}

function updateToolButtons() {
  const toolMap = {
    select: toolSelectBtn,
    text: addTextBtn,
    icon: toolIconsBtn,
  };
  Object.entries(toolMap).forEach(([tool, button]) => {
    if (!button) return;
    button.classList.toggle("is-active", state.activeTool === tool);
  });
  designCanvas?.classList.toggle("is-text-tool", state.activeTool === "text");
  canvasWrap?.classList.toggle("is-text-tool", state.activeTool === "text");
  canvasPanel?.classList.toggle("is-text-tool", state.activeTool === "text");
}

function setActiveTool(tool) {
  state.activeTool = tool;
  if (tool !== "text" && state.textDraw?.active) {
    state.textDraw = null;
  }
  updateToolButtons();
  if (tool !== "shape") {
    closeShapeFlyout();
  }
  if (tool !== "icon") {
    closeIconFlyout();
  }
}

function closeShapeFlyout() {
  shapeFlyout.classList.add("hidden-panel");
  toolShapesBtn.classList.remove("is-active");
}

function closeIconFlyout() {
  iconFlyout.classList.add("hidden-panel");
  toolIconsBtn.classList.remove("is-active");
}

function closeGridFlyout() {
  gridFlyout?.classList.add("hidden-panel");
  gridAdvancedPanel?.classList.add("hidden-panel");
}

function updateGridFlyoutOptions() {
  gridOptionButtons.forEach((button) => {
    const isActive = button.dataset.gridPreset === state.layoutGuidePreset;
    button.classList.toggle("is-active", isActive);
  });
  updateGridButtonState();
  if (gridAdvancedToggleBtn) {
    gridAdvancedToggleBtn.classList.toggle("is-active", state.layoutGuidePreset === "custom-columns");
  }
  if (gridColumnsInput) gridColumnsInput.value = String(Math.round(clamp(Number(state.layoutGuideCustom?.columns) || 12, 1, 48)));
  if (gridGutterInput) gridGutterInput.value = String(Math.round(clamp(Number(state.layoutGuideCustom?.gutter) || 0, 0, 240)));
  if (gridMarginInput) {
    const maxMargin = Math.max(0, Math.floor((Number(state.canvas.width) || 1) / 2) - 1);
    gridMarginInput.value = String(Math.round(clamp(Number(state.layoutGuideCustom?.margin) || 0, 0, maxMargin)));
  }
}

function applyLayoutGuidePreset(preset) {
  const valid = new Set(["none", "columns-12", "grid-3", "grid-4", "grid-6", "custom-columns"]);
  state.layoutGuidePreset = valid.has(preset) ? preset : "none";
  updateGridFlyoutOptions();
  updateCanvasBackground();
  if (state.layoutGuidePreset === "none") {
    setStatus("Grid guide off.");
  } else {
    const labelMap = {
      "columns-12": "12 Column",
      "grid-3": "3 x 3",
      "grid-4": "4 x 4",
      "grid-6": "6 x 6",
      "custom-columns": "Custom",
    };
    if (state.layoutGuidePreset === "custom-columns") {
      const columns = Math.round(clamp(Number(state.layoutGuideCustom?.columns) || 12, 1, 48));
      const gutter = Math.round(clamp(Number(state.layoutGuideCustom?.gutter) || 0, 0, 240));
      const maxMargin = Math.max(0, Math.floor((Number(state.canvas.width) || 1) / 2) - 1);
      const margin = Math.round(clamp(Number(state.layoutGuideCustom?.margin) || 0, 0, maxMargin));
      setStatus(`Grid guide: Custom (${columns} cols, ${gutter}px gutter, ${margin}px margin).`);
    } else {
      setStatus(`Grid guide: ${labelMap[state.layoutGuidePreset] || state.layoutGuidePreset}`);
    }
  }
}

function toggleGridFlyout() {
  if (!gridFlyout) return;
  const willOpen = gridFlyout.classList.contains("hidden-panel");
  gridFlyout.classList.toggle("hidden-panel", !willOpen);
  if (willOpen) {
    updateGridFlyoutOptions();
  }
}

function toggleGridAdvancedPanel() {
  if (!gridAdvancedPanel) return;
  const willOpen = gridAdvancedPanel.classList.contains("hidden-panel");
  gridAdvancedPanel.classList.toggle("hidden-panel", !willOpen);
}

function applyCustomGridFromInputs() {
  const columns = Math.round(clamp(Number(gridColumnsInput?.value) || 12, 1, 48));
  const gutter = Math.round(clamp(Number(gridGutterInput?.value) || 0, 0, 240));
  const maxMargin = Math.max(0, Math.floor((Number(state.canvas.width) || 1) / 2) - 1);
  const margin = Math.round(clamp(Number(gridMarginInput?.value) || 0, 0, maxMargin));
  state.layoutGuideCustom = { columns, gutter, margin };
  if (gridColumnsInput) gridColumnsInput.value = String(columns);
  if (gridGutterInput) gridGutterInput.value = String(gutter);
  if (gridMarginInput) gridMarginInput.value = String(margin);
  applyLayoutGuidePreset("custom-columns");
}

function normalizeIonicIconName(name) {
  return String(name || "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .toLowerCase();
}

function openIconFlyout() {
  if (!iconFlyoutGrid?.children.length) {
    populateIconControls();
  }
  iconFlyout.classList.remove("hidden-panel");
  toolIconsBtn.classList.add("is-active");
}

function toggleIconFlyout() {
  if (iconFlyout.classList.contains("hidden-panel")) {
    openIconFlyout();
    setActiveTool("icon");
    return;
  }
  closeIconFlyout();
  setActiveTool("select");
}

function getIonicIconNames() {
  return IONIC_ICON_NAMES.slice().sort((a, b) => a.localeCompare(b));
}

function removeIconOption(name) {
  if (!propIconName) return;
  const option = propIconName.querySelector(`option[value="${name}"]`);
  if (option) option.remove();
}

function resolveSafeIconName(name) {
  const normalized = normalizeIonicIconName(name);
  if (IONIC_ICON_SET.has(normalized)) return normalized;
  return "star";
}

function ensureHexColor(value, fallback) {
  const candidate = String(value || "").trim();
  if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(candidate)) {
    return candidate;
  }
  return fallback;
}

function normalizeHexColor(value, fallback = "#000000") {
  const safe = ensureHexColor(value, "");
  if (!safe) return fallback;
  if (safe.length === 4) {
    return `#${safe[1]}${safe[1]}${safe[2]}${safe[2]}${safe[3]}${safe[3]}`.toLowerCase();
  }
  return safe.toLowerCase();
}

function setHexInputValue(input, colorValue) {
  if (!input) return;
  input.value = normalizeHexColor(colorValue, "#000000").toUpperCase();
  input.classList.remove("is-invalid");
}

function commitHexInput(hexInput, fallbackColor, onValid) {
  if (!hexInput) return false;
  const normalized = normalizeHexColor(hexInput.value, "");
  if (!normalized) {
    hexInput.classList.add("is-invalid");
    return false;
  }
  hexInput.classList.remove("is-invalid");
  hexInput.value = normalized.toUpperCase();
  onValid(normalized || fallbackColor);
  return true;
}

function bindHexInputEvents(hexInput, fallbackColor, onValid) {
  if (!hexInput) return;
  hexInput.addEventListener("input", () => {
    hexInput.classList.remove("is-invalid");
  });
  hexInput.addEventListener("change", () => {
    commitHexInput(hexInput, fallbackColor, onValid);
  });
  hexInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const ok = commitHexInput(hexInput, fallbackColor, onValid);
    if (ok) {
      event.preventDefault();
      hexInput.blur();
    }
  });
}

function bindRangeReset(input, defaultValue, onReset) {
  if (!input) return;
  let lastPointerDownAt = 0;
  const triggerReset = (event) => {
    event?.preventDefault?.();
    input.value = String(defaultValue);
    onReset();
  };
  input.addEventListener("dblclick", triggerReset);
  input.addEventListener("click", (event) => {
    if (event.detail >= 2) {
      triggerReset(event);
    }
  });
  input.addEventListener("pointerdown", (event) => {
    const now = Date.now();
    if (now - lastPointerDownAt <= 320) {
      triggerReset(event);
      lastPointerDownAt = 0;
      return;
    }
    lastPointerDownAt = now;
  });
}

function createPlaceholderImageDataUrl(width, height, label = "Image") {
  const safeW = clamp(Number(width) || 320, 80, 2000);
  const safeH = clamp(Number(height) || 180, 60, 2000);
  const safeLabel = escapeHtml(String(label || "Image"));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${safeW}" height="${safeH}" viewBox="0 0 ${safeW} ${safeH}">
  <rect width="100%" height="100%" fill="#D0D2D8"/>
  <rect x="8" y="8" width="${Math.max(0, safeW - 16)}" height="${Math.max(0, safeH - 16)}" fill="none" stroke="#9EA3AF" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="50%" y="50%" fill="#5A5F6D" font-family="Arial, sans-serif" font-size="18" dominant-baseline="middle" text-anchor="middle">${safeLabel}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function openAiModal() {
  aiModal?.classList.remove("hidden");
  setTimeout(() => aiPrompt?.focus(), 0);
}

function closeAiModal() {
  aiModal?.classList.add("hidden");
}

function setAiImageModalStatus(message, isError = false) {
  if (!aiImageModalStatus) return;
  aiImageModalStatus.textContent = String(message || "");
  aiImageModalStatus.classList.toggle("is-error", Boolean(message && isError));
}

function setAiImageLoading(isLoading) {
  aiImageLoadingIndicator?.classList.toggle("hidden", !isLoading);
}

function ensureImageVersionState(item) {
  if (!item || item.type !== "image") return;
  if (!Array.isArray(item.aiVersionHistory)) {
    item.aiVersionHistory = item.src ? [item.src] : [];
  }
  if (!Number.isInteger(item.aiVersionIndex)) {
    item.aiVersionIndex = Math.max(0, item.aiVersionHistory.length - 1);
  }
  if (item.aiVersionHistory.length === 0 && item.src) {
    item.aiVersionHistory = [item.src];
    item.aiVersionIndex = 0;
  }
  item.aiVersionIndex = clamp(item.aiVersionIndex, 0, Math.max(0, item.aiVersionHistory.length - 1));
  if (item.aiVersionHistory[item.aiVersionIndex]) {
    item.src = item.aiVersionHistory[item.aiVersionIndex];
  }
}

function recordImageVersion(item, src) {
  if (!item || item.type !== "image" || !src) return;
  ensureImageVersionState(item);
  const history = Array.isArray(item.aiVersionHistory) ? [...item.aiVersionHistory] : [];
  const current = history[item.aiVersionIndex];
  if (current === src) return;
  const trimmed = history.slice(0, item.aiVersionIndex + 1);
  trimmed.push(src);
  const capped = trimmed.slice(-30);
  item.aiVersionHistory = capped;
  item.aiVersionIndex = capped.length - 1;
  item.src = src;
}

function setImageVersionStatusText(item) {
  if (!propImageVersionStatus) return;
  if (!item || item.type !== "image") {
    propImageVersionStatus.textContent = "Version history unavailable.";
    return;
  }
  ensureImageVersionState(item);
  const total = item.aiVersionHistory?.length || 0;
  if (total <= 1) {
    propImageVersionStatus.textContent = "Original version.";
    return;
  }
  propImageVersionStatus.textContent = `Version ${item.aiVersionIndex + 1} of ${total}`;
}

function updateImageVersionButtons(item) {
  const selectedImage = item && item.type === "image" ? item : null;
  if (selectedImage) ensureImageVersionState(selectedImage);
  const total = selectedImage?.aiVersionHistory?.length || 0;
  const index = selectedImage?.aiVersionIndex || 0;
  if (propImageVersionPrevBtn) propImageVersionPrevBtn.disabled = !(selectedImage && index > 0);
  if (propImageVersionNextBtn) propImageVersionNextBtn.disabled = !(selectedImage && index < total - 1);
  if (propImageRevertOriginalBtn) propImageRevertOriginalBtn.disabled = !(selectedImage && total > 1 && index !== 0);
  if (propImageDownloadBtn) propImageDownloadBtn.disabled = !(selectedImage?.src);
  setImageVersionStatusText(selectedImage);
}

function applySelectedImageVersion(nextIndex) {
  const selected = getSelected();
  if (!selected || selected.type !== "image") return;
  ensureImageVersionState(selected);
  const safeIndex = clamp(Number(nextIndex) || 0, 0, Math.max(0, selected.aiVersionHistory.length - 1));
  if (safeIndex === selected.aiVersionIndex) return;
  selected.aiVersionIndex = safeIndex;
  selected.src = selected.aiVersionHistory[safeIndex];
  markCurrentViewDirty();
  render();
}

function parseDataUrlMimeType(dataUrl) {
  const match = String(dataUrl || "").match(/^data:([^;,]+)[;,]/i);
  return String(match?.[1] || "image/png").toLowerCase();
}

function extensionForMimeType(mimeType) {
  if (mimeType.includes("jpeg") || mimeType.includes("jpg")) return "jpg";
  if (mimeType.includes("webp")) return "webp";
  if (mimeType.includes("gif")) return "gif";
  return "png";
}

function downloadImageDataUrl(dataUrl, baseName = "magx-image") {
  if (!dataUrl) return;
  const mime = parseDataUrlMimeType(dataUrl);
  const ext = extensionForMimeType(mime);
  fetch(dataUrl)
    .then((response) => response.blob())
    .then((blob) => {
      downloadBlob(blob, `${baseName}-${Date.now()}.${ext}`);
    })
    .catch(() => {
      setStatus("Could not download image asset.");
    });
}

function renderAiImageVariantGrid() {
  if (!aiImageVariantGrid) return;
  aiImageVariantGrid.innerHTML = "";
  const variants = Array.isArray(state.aiImageVariantResults) ? state.aiImageVariantResults : [];
  aiImageVariantGrid.classList.toggle("hidden", variants.length === 0);
  variants.forEach((variant, index) => {
    const card = document.createElement("div");
    card.className = "bf-ai-variant-card";
    const img = document.createElement("img");
    img.src = variant.imageDataUrl;
    img.alt = `Variant ${index + 1}`;
    card.appendChild(img);

    const actions = document.createElement("div");
    actions.className = "bf-ai-variant-actions";
    const applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.innerHTML = '<i data-lucide="check"></i><span>Apply</span>';
    applyBtn.addEventListener("click", async () => {
      await applyGeneratedImageToCanvas(variant.imageDataUrl, variant.model);
      closeAiImageModal();
    });
    const downloadBtn = document.createElement("button");
    downloadBtn.type = "button";
    downloadBtn.innerHTML = '<i data-lucide="download"></i><span>Download</span>';
    downloadBtn.addEventListener("click", () => {
      downloadImageDataUrl(variant.imageDataUrl, "magx-asset");
    });
    actions.appendChild(applyBtn);
    actions.appendChild(downloadBtn);
    card.appendChild(actions);
    aiImageVariantGrid.appendChild(card);
  });
  hydrateIcons();
}

function getSelectedImageForAiEdit() {
  const selected = getSelected();
  if (!selected || selected.type !== "image" || !selected.src) return null;
  return selected;
}

function setAiImageEditModalStatus(message, isError = false) {
  if (!aiImageEditModalStatus) return;
  aiImageEditModalStatus.textContent = String(message || "");
  aiImageEditModalStatus.classList.toggle("is-error", Boolean(message && isError));
}

function openAiImageEditModal() {
  if (!requireCredits(1, "AI image edit")) return;
  if (!requireEditableStatus()) return;
  const selectedImage = getSelectedImageForAiEdit();
  if (!selectedImage) {
    setStatus("Select an image layer to use AI Edit.");
    return;
  }
  state.aiImageEditTargetId = selectedImage.id;
  if (aiImageEditPreview) aiImageEditPreview.src = selectedImage.src;
  if (aiImageEditPrompt) aiImageEditPrompt.value = "";
  setAiImageEditModalStatus("");
  aiImageEditModal?.classList.remove("hidden");
  setTimeout(() => aiImageEditPrompt?.focus(), 0);
}

function closeAiImageEditModal() {
  state.aiImageEditTargetId = null;
  aiImageEditModal?.classList.add("hidden");
}

function loadAiImagePrefs() {
  try {
    const raw = window.localStorage.getItem(AI_IMAGE_PREFS_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    const model = String(parsed?.model || "").trim();
    const imageSize = String(parsed?.imageSize || "").trim();
    const aspectRatio = String(parsed?.aspectRatio || "").trim();
    const resolution = String(parsed?.resolution || "").trim();
    const variantCount = clamp(Number(parsed?.variantCount) || 1, 1, 4);
    state.aiImagePrefs.model = model || DEFAULT_AI_IMAGE_MODEL;
    state.aiImagePrefs.imageSize = normalizeRecraftSize(
      imageSize || findRecraftSizeByLegacy(aspectRatio, resolution)
    );
    const sizeMeta = getRecraftSizeMeta(state.aiImagePrefs.imageSize);
    state.aiImagePrefs.aspectRatio = sizeMeta.aspectRatio;
    state.aiImagePrefs.resolution = sizeMeta.resolution;
    state.aiImagePrefs.variantCount = variantCount;
  } catch {
    // Ignore invalid local preferences.
  }
}

function saveAiImagePrefs() {
  try {
    window.localStorage.setItem(AI_IMAGE_PREFS_STORAGE_KEY, JSON.stringify(state.aiImagePrefs));
  } catch {
    // Ignore localStorage failures.
  }
}

function syncAiImagePrefsFromInputs() {
  state.aiImagePrefs.model = DEFAULT_AI_IMAGE_MODEL;
  state.aiImagePrefs.imageSize = normalizeRecraftSize(aiImageSize?.value || state.aiImagePrefs.imageSize);
  const sizeMeta = getRecraftSizeMeta(state.aiImagePrefs.imageSize);
  state.aiImagePrefs.aspectRatio = sizeMeta.aspectRatio;
  state.aiImagePrefs.resolution = sizeMeta.resolution;
  state.aiImagePrefs.variantCount = clamp(Number(aiImageVariantCount?.value || state.aiImagePrefs.variantCount || 1), 1, 4);
  if (aiImageSize && aiImageSize.value !== state.aiImagePrefs.imageSize) {
    aiImageSize.value = state.aiImagePrefs.imageSize;
  }
  saveAiImagePrefs();
}

function updateAiImageRegenerateButton() {
  if (!aiImageRegenerateBtn) return;
  const required = Math.max(1, Number(state.aiImageLastRequest?.variantCount) || 1);
  aiImageRegenerateBtn.disabled = !state.aiImageLastRequest || !hasEnoughCredits(required) || state.isReadOnly;
}

function openAiImageModal() {
  if (!requireCredits(1, "AI image generation")) return;
  if (!requireEditableStatus()) return;
  state.aiImagePrefs.model = DEFAULT_AI_IMAGE_MODEL;
  state.aiImagePrefs.imageSize = normalizeRecraftSize(state.aiImagePrefs.imageSize);
  const sizeMeta = getRecraftSizeMeta(state.aiImagePrefs.imageSize);
  state.aiImagePrefs.aspectRatio = sizeMeta.aspectRatio;
  state.aiImagePrefs.resolution = sizeMeta.resolution;
  if (aiImageSize) aiImageSize.value = state.aiImagePrefs.imageSize;
  // Always reset controls on open so first click is consistent.
  if (aiImageGenerateBtn) aiImageGenerateBtn.disabled = false;
  if (aiImageCancelBtn) aiImageCancelBtn.disabled = false;
  state.aiImageVariantResults = [];
  if (aiImagePrompt) {
    const rememberedPrompt = String(state.aiImageLastRequest?.prompt || "").trim();
    if (rememberedPrompt && !String(aiImagePrompt.value || "").trim()) {
      aiImagePrompt.value = rememberedPrompt;
    }
  }
  setAiImageModalStatus("");
  setAiImageLoading(false);
  updateAiImageRegenerateButton();
  aiImageModal?.classList.remove("hidden");
  setTimeout(() => aiImagePrompt?.focus(), 0);
}

function closeAiImageModal() {
  setAiImageLoading(false);
  if (aiImageGenerateBtn) aiImageGenerateBtn.disabled = false;
  if (aiImageCancelBtn) aiImageCancelBtn.disabled = false;
  aiImageModal?.classList.add("hidden");
}

function openClearCanvasModal() {
  clearCanvasModal?.classList.remove("hidden");
}

function closeClearCanvasModal() {
  clearCanvasModal?.classList.add("hidden");
}

function openExportModal() {
  if (!requireCredits(1, "Export")) return;
  exportModal?.classList.remove("hidden");
}

function closeExportModal() {
  exportModal?.classList.add("hidden");
}

function openShareModal() {
  if (!requireCredits(1, "Share")) return;
  if (state.isReadOnly) {
    setStatus("View-only shared link. Sharing is disabled.");
    return;
  }
  shareModal?.classList.remove("hidden");
  setShareModalStatus("");
  if (nativeShareBtn) nativeShareBtn.disabled = false;
}

function closeShareModal() {
  shareModal?.classList.add("hidden");
}

function setSettingsModalStatus(message, isError = false) {
  if (!settingsModalStatus) return;
  settingsModalStatus.textContent = String(message || "");
  settingsModalStatus.classList.toggle("is-error", Boolean(isError && message));
}

function readStoredProjects() {
  try {
    const raw = window.localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) => entry && typeof entry === "object" && entry.id && entry.project);
  } catch {
    return [];
  }
}

function writeStoredProjects(records) {
  const safeRecords = Array.isArray(records) ? records.slice(0, 50) : [];
  try {
    window.localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(safeRecords));
  } catch {
    throw new Error("Local storage is unavailable.");
  }
}

function renderStoredProjects() {
  if (!settingsSavedProjects) return;
  const records = readStoredProjects();
  const previousValue = settingsSavedProjects.value;
  settingsSavedProjects.innerHTML = "";
  records.forEach((record) => {
    const option = document.createElement("option");
    option.value = String(record.id);
    const savedAt = record.savedAt ? new Date(record.savedAt) : null;
    const dateLabel = savedAt && Number.isFinite(savedAt.getTime())
      ? savedAt.toLocaleString()
      : "Unknown date";
    option.textContent = `${normalizeProjectName(record.name)} - ${dateLabel}`;
    settingsSavedProjects.appendChild(option);
  });
  if (!records.length) return;
  const hasPrevious = records.some((record) => String(record.id) === previousValue);
  settingsSavedProjects.value = hasPrevious ? previousValue : String(records[0].id);
}

function openSettingsModal() {
  setProjectName(state.projectName || DEFAULT_PROJECT_NAME);
  renderStoredProjects();
  setSettingsModalStatus("");
  settingsModal?.classList.remove("hidden");
}

function closeSettingsModal() {
  settingsModal?.classList.add("hidden");
  setSettingsModalStatus("");
}

function saveProjectToLocalLibrary() {
  const name = normalizeProjectName(settingsProjectName?.value || state.projectName);
  setProjectName(name);
  const payload = buildProjectPayload();
  const records = readStoredProjects();
  const id = `project_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  records.unshift({
    id,
    name,
    savedAt: new Date().toISOString(),
    project: payload,
  });
  writeStoredProjects(records);
  renderStoredProjects();
  if (settingsSavedProjects) settingsSavedProjects.value = id;
  setSettingsModalStatus("Saved locally.");
  setStatus("Project saved locally.");
}

function loadProjectFromLocalLibrary() {
  const selectedId = String(settingsSavedProjects?.value || "").trim();
  if (!selectedId) {
    setSettingsModalStatus("Select a project to load.", true);
    return;
  }
  const records = readStoredProjects();
  const selectedRecord = records.find((record) => String(record.id) === selectedId);
  if (!selectedRecord?.project) {
    setSettingsModalStatus("Could not load selected project.", true);
    return;
  }
  const snapshot = normalizeIncomingProjectPayload(selectedRecord.project);
  applySnapshot(snapshot);
  state.undoStack = [];
  state.redoStack = [];
  updateHistoryButtons();
  setReadOnlyMode(false);
  setProjectName(selectedRecord.name || snapshot.projectName || DEFAULT_PROJECT_NAME);
  setSettingsModalStatus("Project loaded.");
  setStatus("Project loaded.");
}

function deleteProjectFromLocalLibrary() {
  const selectedId = String(settingsSavedProjects?.value || "").trim();
  if (!selectedId) {
    setSettingsModalStatus("Select a project to delete.", true);
    return;
  }
  const records = readStoredProjects();
  const next = records.filter((record) => String(record.id) !== selectedId);
  writeStoredProjects(next);
  renderStoredProjects();
  setSettingsModalStatus("Project removed.");
  setStatus("Saved project removed.");
}

async function importProjectFromFile(file) {
  if (!file) return;
  const text = await file.text();
  let payload = null;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON file.");
  }
  const snapshot = normalizeIncomingProjectPayload(payload);
  applySnapshot(snapshot);
  state.undoStack = [];
  state.redoStack = [];
  updateHistoryButtons();
  setReadOnlyMode(false);
  const fileBaseName = String(file.name || "").replace(/\.[^.]+$/, "");
  setProjectName(snapshot.projectName || fileBaseName || DEFAULT_PROJECT_NAME);
  setStatus("Project imported.");
}

function setShareLinkValue(url) {
  const next = String(url || "").trim();
  if (shareLinkField) {
    shareLinkField.value = next;
  }
  updateCreditLockedControls();
}

function setShareModalStatus(message, isError = false) {
  if (!shareModalStatus) return;
  shareModalStatus.textContent = String(message || "");
  shareModalStatus.classList.toggle("is-error", Boolean(isError && message));
}

function loadCredits() {
  try {
    const raw = window.localStorage.getItem(CREDITS_STORAGE_KEY);
    const parsed = Number(raw);
    if (Number.isFinite(parsed) && parsed >= 0) {
      state.credits = Math.max(DEFAULT_CREDITS, Math.floor(parsed));
      return;
    }
  } catch {
    // Ignore bad local storage values.
  }
  state.credits = DEFAULT_CREDITS;
}

function persistCredits() {
  try {
    window.localStorage.setItem(CREDITS_STORAGE_KEY, String(Math.max(0, Math.floor(state.credits || 0))));
  } catch {
    // Ignore local storage write failures.
  }
}

function updateCreditsUI() {
  const credits = Math.max(0, Math.floor(state.credits || 0));
  const depleted = credits <= 0;
  if (creditsBtn) {
    creditsBtn.textContent = depleted ? "Buy Credits" : `Credits: ${credits}`;
    creditsBtn.classList.toggle("is-depleted", depleted);
  }
  if (creditsModalBalance) {
    creditsModalBalance.textContent = `Current balance: ${credits} credit${credits === 1 ? "" : "s"}`;
  }
  updateCreditLockedControls();
}

function openCreditsModal() {
  updateCreditsUI();
  creditsModal?.classList.remove("hidden");
}

function closeCreditsModal() {
  creditsModal?.classList.add("hidden");
}

function hasEnoughCredits(cost = 1) {
  return Math.max(0, Math.floor(state.credits || 0)) >= Math.max(1, Math.floor(cost || 1));
}

function consumeCredits(cost = 1, reason = "") {
  const amount = Math.max(1, Math.floor(cost || 1));
  if (!hasEnoughCredits(amount)) return false;
  state.credits = Math.max(0, Math.floor(state.credits || 0) - amount);
  persistCredits();
  updateCreditsUI();
  if (reason) {
    setStatus(`${reason}. ${state.credits} credit${state.credits === 1 ? "" : "s"} left.`);
  }
  return true;
}

function requireCredits(cost = 1, actionLabel = "This action") {
  const amount = Math.max(1, Math.floor(cost || 1));
  if (hasEnoughCredits(amount)) return true;
  setStatus(`${actionLabel} requires ${amount} credit${amount === 1 ? "" : "s"}. Buy credits to continue.`);
  openCreditsModal();
  return false;
}

function updateCreditLockedControls() {
  const hasOne = hasEnoughCredits(1);
  const readOnly = Boolean(state.isReadOnly);
  if (exportBtn) exportBtn.disabled = readOnly || !hasOne;
  if (shareBtn) shareBtn.disabled = readOnly || !hasOne;
  if (toolAiImageBtn) toolAiImageBtn.disabled = readOnly || !hasOne;
  if (createShareLinkBtn) createShareLinkBtn.disabled = readOnly || !hasOne;
  if (nativeShareBtn) nativeShareBtn.disabled = readOnly || !hasOne;
  if (copyShareLinkBtn) {
    const hasValue = Boolean(String(shareLinkField?.value || "").trim());
    copyShareLinkBtn.disabled = readOnly || !hasOne || !hasValue;
  }
  if (exportModalConfirmBtn) exportModalConfirmBtn.disabled = !hasOne;
  // Keep image generate actions clickable so users always see explicit credit/API errors.
  if (aiImageGenerateBtn) aiImageGenerateBtn.disabled = readOnly;
  if (aiImageEditGenerateBtn) aiImageEditGenerateBtn.disabled = readOnly;
  const selectedImage = getSelected();
  if (propImageAiEditBtn) {
    const ready = Boolean(selectedImage && selectedImage.type === "image" && selectedImage.src) && hasOne && !readOnly;
    propImageAiEditBtn.disabled = !ready;
    propImageAiEditBtn.classList.toggle("is-ready", ready);
  }
  updateAiImageRegenerateButton();
}

function setReadOnlyMode(enabled) {
  state.isReadOnly = Boolean(enabled);
  document.body.classList.toggle("is-readonly", state.isReadOnly);
  [
    aiGenerateBtn,
    deleteBtn,
    undoBtn,
    redoBtn,
    groupBtn,
    ungroupBtn,
    sendBackBtn,
    bringFrontBtn,
    previewBtn,
    exportBtn,
    shareBtn,
    gridBtn,
    zoomInBtn,
    zoomOutBtn,
    zoomResetBtn,
    publicationSizeSelect,
    addPageBtn,
    toolSelectBtn,
    toolUploadBtn,
    addTextBtn,
    toolShapesBtn,
    toolIconsBtn,
    toolAiImageBtn,
    propImageAiEditBtn,
    propImageDownloadBtn,
    propImageVersionPrevBtn,
    propImageVersionNextBtn,
    propImageRevertOriginalBtn,
    applyCanvasSizeBtn,
  ].forEach((control) => {
    if (!control) return;
    control.disabled = state.isReadOnly;
  });
  if (state.isReadOnly) {
    closeShapeFlyout();
    closeIconFlyout();
    closeGridFlyout();
    closeAiModal();
    closeClearCanvasModal();
    closeExportModal();
    closeShareModal();
    closeSettingsModal();
    closeCreditsModal();
    closeAiImageModal();
    closeAiImageEditModal();
    setActiveTool("select");
    deselect();
  }
  updateCreditLockedControls();
}

function requireEditableStatus() {
  if (!state.isReadOnly) return true;
  setStatus("View-only shared link. Editing is disabled.");
  return false;
}

function isEditorShellRoute() {
  const path = String(window.location.pathname || "").toLowerCase();
  return path === "/editor" || path === "/editor.html" || path === "/magx";
}

function removeEditorShareUi() {
  if (!isEditorShellRoute()) return;
  if (shareBtn?.parentElement) shareBtn.parentElement.removeChild(shareBtn);
  if (shareModal?.parentElement) shareModal.parentElement.removeChild(shareModal);
}

function getUtf8ByteLength(value) {
  try {
    return new TextEncoder().encode(String(value || "")).length;
  } catch {
    return String(value || "").length;
  }
}

function getOrCreateClientOwnerId() {
  const storageKey = "magx_owner_id";
  try {
    const existing = String(window.localStorage.getItem(storageKey) || "").trim();
    if (existing) return existing;
  } catch {
    // Ignore localStorage access errors.
  }
  const generated = (() => {
    try {
      if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return `usr_${window.crypto.randomUUID()}`;
      }
    } catch {
      // Ignore and fallback.
    }
    return `usr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  })();
  try {
    window.localStorage.setItem(storageKey, generated);
  } catch {
    // Ignore localStorage write errors.
  }
  return generated;
}

function createClientShareRequestId() {
  try {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID().replace(/-/g, "_");
    }
  } catch {
    // Ignore and fallback.
  }
  return `shr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 12)}`;
}

async function maybeCompressJsonForShare(payloadObject) {
  const json = JSON.stringify(payloadObject || {});
  const headers = { "Content-Type": "application/json" };
  let body = json;
  try {
    if (typeof CompressionStream === "function") {
      const input = new TextEncoder().encode(json);
      if (input.byteLength > 500 * 1024) {
        const stream = new Blob([input]).stream().pipeThrough(new CompressionStream("gzip"));
        const compressed = await new Response(stream).arrayBuffer();
        if (compressed.byteLength > 0 && compressed.byteLength < input.byteLength) {
          body = compressed;
          headers["Content-Encoding"] = "gzip";
        }
      }
    }
  } catch {
    // Fallback to plain JSON body.
  }
  return { body, headers };
}

async function optimizeShareImageSource(src, options = {}) {
  const value = String(src || "");
  if (!value.startsWith("data:image/")) return value;
  const maxBytes = Number(options.maxBytes) || 1_400_000;
  const maxDimension = Math.max(256, Number(options.maxDimension) || 1600);
  const quality = Math.min(0.95, Math.max(0.4, Number(options.quality) || 0.82));
  const currentBytes = getUtf8ByteLength(value);
  if (currentBytes <= maxBytes) return value;

  const image = await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = value;
  });
  if (!image) return value;

  const sourceWidth = Number(image.naturalWidth || image.width || 0);
  const sourceHeight = Number(image.naturalHeight || image.height || 0);
  if (!sourceWidth || !sourceHeight) return value;

  const scale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
  const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
  const targetHeight = Math.max(1, Math.round(sourceHeight * scale));
  const canvasEl = document.createElement("canvas");
  canvasEl.width = targetWidth;
  canvasEl.height = targetHeight;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) return value;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, 0, 0, targetWidth, targetHeight);

  let optimized = "";
  try {
    optimized = canvasEl.toDataURL("image/webp", quality);
  } catch {
    optimized = "";
  }
  if (!optimized.startsWith("data:image/")) {
    try {
      optimized = canvasEl.toDataURL("image/jpeg", quality);
    } catch {
      optimized = "";
    }
  }
  if (!optimized.startsWith("data:image/")) return value;
  return getUtf8ByteLength(optimized) < currentBytes ? optimized : value;
}

async function buildSharePayload() {
  const payload = cloneJson(buildProjectPayload());
  const imageRefs = [];
  const stripFields = async (item) => {
    if (!item || typeof item !== "object") return item;
    const next = { ...item };
    if (next.type === "image") {
      delete next.aiVersionHistory;
      delete next.aiVersionIndex;
      // Shared preview is read-only; strip any non-render image blobs to keep share payload small.
      Object.keys(next).forEach((key) => {
        if (key === "src") return;
        const value = next[key];
        if (typeof value === "string" && value.startsWith("data:image/")) {
          delete next[key];
          return;
        }
        if (Array.isArray(value) && value.length > 0 && value.every((entry) => typeof entry === "string" && entry.startsWith("data:image/"))) {
          delete next[key];
        }
      });
      if (typeof next.src === "string" && next.src.startsWith("data:image/")) {
        next.src = await optimizeShareImageSource(next.src, { maxBytes: 1_400_000, maxDimension: 1600, quality: 0.82 });
        imageRefs.push(next);
      }
    }
    return next;
  };
  payload.pages = await Promise.all((Array.isArray(payload.pages) ? payload.pages : []).map(async (page) => {
    if (!page || typeof page !== "object") return page;
    const nextPage = { ...page };
    const viewStates = nextPage.viewStates && typeof nextPage.viewStates === "object"
      ? nextPage.viewStates
      : {};
    await Promise.all(["desktop", "tablet", "mobile"].map(async (viewKey) => {
      const viewState = viewStates[viewKey];
      if (!viewState || typeof viewState !== "object") return;
      const elements = Array.isArray(viewState.elements) ? viewState.elements : [];
      viewState.elements = await Promise.all(elements.map(stripFields));
    }));
    // Keep only the active view for shared previews to avoid 3x payload bloat.
    const activeViewKey = String(nextPage.currentView || "desktop");
    const activeView = viewStates[activeViewKey] || viewStates.desktop || viewStates.tablet || viewStates.mobile;
    nextPage.viewStates = activeView ? { [activeViewKey]: activeView } : {};
    return nextPage;
  }));
  const maxPayloadBytes = 8 * 1024 * 1024;
  let bytes = getUtf8ByteLength(JSON.stringify(payload));
  if (bytes > maxPayloadBytes && imageRefs.length > 0) {
    const passes = [
      { maxBytes: 1_000_000, maxDimension: 1400, quality: 0.76 },
      { maxBytes: 750_000, maxDimension: 1200, quality: 0.7 },
      { maxBytes: 500_000, maxDimension: 1000, quality: 0.64 },
      { maxBytes: 320_000, maxDimension: 800, quality: 0.58 },
    ];
    for (const pass of passes) {
      if (bytes <= maxPayloadBytes) break;
      for (const imageRef of imageRefs) {
        if (bytes <= maxPayloadBytes) break;
        if (!imageRef || typeof imageRef.src !== "string" || !imageRef.src.startsWith("data:image/")) continue;
        imageRef.src = await optimizeShareImageSource(imageRef.src, pass);
        bytes = getUtf8ByteLength(JSON.stringify(payload));
      }
    }
  }
  return payload;
}

async function createShareLink() {
  setShareModalStatus("Preparing share link...");
  const payload = await buildSharePayload();
  const ownerId = getOrCreateClientOwnerId();
  const requestedShareId = createClientShareRequestId();
  const initBody = await maybeCompressJsonForShare({ ownerId, requestedShareId });
  const initResponse = await fetch("/api/share/init", {
    method: "POST",
    headers: initBody.headers,
    body: initBody.body,
  });
  const initPayload = await initResponse.json().catch(() => ({}));
  if (!initResponse.ok) {
    throw new Error(initPayload?.error || "Could not initialize share.");
  }
  const shareId = String(initPayload?.id || requestedShareId || "").trim();
  const shareUrlRaw = String(initPayload?.url || "").trim();
  if (!shareId || !shareUrlRaw) {
    throw new Error("Share initialization did not return a valid ID.");
  }
  const imageRefs = [];
  (Array.isArray(payload.pages) ? payload.pages : []).forEach((page) => {
    const viewStates = page?.viewStates && typeof page.viewStates === "object" ? page.viewStates : {};
    ["desktop", "tablet", "mobile"].forEach((viewKey) => {
      const elements = Array.isArray(viewStates?.[viewKey]?.elements) ? viewStates[viewKey].elements : [];
      elements.forEach((item) => {
        if (item?.type === "image" && typeof item.src === "string" && item.src.startsWith("data:image/")) {
          imageRefs.push(item);
        }
      });
    });
  });
  if (imageRefs.length > 0) {
    let uploaded = 0;
    for (const imageRef of imageRefs) {
      const dataUrl = String(imageRef.src || "");
      if (!dataUrl.startsWith("data:image/")) continue;
      const mime = parseDataUrlMimeType(dataUrl);
      const ext = extensionForMimeType(mime);
      const filename = `${createClientShareRequestId()}.${ext}`;
      const relativePath = `assets/${filename}`;
      setShareModalStatus(`Uploading assets ${uploaded + 1}/${imageRefs.length}...`);
      const uploadPayload = await maybeCompressJsonForShare({ dataUrl });
      const uploadResponse = await fetch(`/api/share/${encodeURIComponent(shareId)}/asset/${encodeURIComponent(relativePath)}`, {
        method: "POST",
        headers: uploadPayload.headers,
        body: uploadPayload.body,
      });
      const uploadBody = await uploadResponse.json().catch(() => ({}));
      if (!uploadResponse.ok) {
        throw new Error(uploadBody?.error || "Could not upload image assets for sharing.");
      }
      imageRef.src = String(uploadBody?.url || `/api/share/${encodeURIComponent(shareId)}/asset/${encodeURIComponent(relativePath)}`);
      uploaded += 1;
    }
  }
  setShareModalStatus("Saving preview project...");
  const requestPayload = { project: payload, ownerId };
  const requestBody = await maybeCompressJsonForShare(requestPayload);
  let response;
  try {
    response = await fetch(`/api/share/${encodeURIComponent(shareId)}/project`, {
      method: "POST",
      headers: requestBody.headers,
      body: requestBody.body,
    });
  } catch (error) {
    const message = error?.message || "";
    if (String(message).toLowerCase().includes("failed to fetch")) {
      throw new Error("Share API is unreachable. Start MagX with `node server.js` and open `/editor` from that server.");
    }
    throw new Error("Could not reach Share API.");
  }
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 413) {
      throw new Error("Project is too large to generate a share/embed link.");
    }
    if (response.status === 404) {
      throw new Error("Share API is unavailable on this server. Start MagX via `node server.js`.");
    }
    throw new Error(body?.error || "Could not create share link.");
  }
  const url = normalizeShareLinkInput(shareUrlRaw) || shareUrlRaw;
  if (!url) {
    throw new Error("Share URL is unavailable.");
  }
  setShareLinkValue(url);
  setShareModalStatus("Share link ready.");
  return url;
}

function normalizeShareLinkInput(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const uuidPathPattern = /^\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  try {
    if (/^https?:\/\//i.test(raw)) {
      const parsed = new URL(raw);
      const id = String(parsed.searchParams.get("share") || "").trim();
      if (id) return `${parsed.origin}/editor?share=${encodeURIComponent(id)}&preview=1`;
      const pathMatch = String(parsed.pathname || "").match(uuidPathPattern);
      if (pathMatch?.[1]) return `${parsed.origin}/editor?share=${encodeURIComponent(pathMatch[1])}&preview=1`;
    }
    if (raw.startsWith("/")) {
      const parsed = new URL(raw, window.location.origin);
      const id = String(parsed.searchParams.get("share") || "").trim();
      if (id) return `${parsed.origin}/editor?share=${encodeURIComponent(id)}&preview=1`;
      const pathMatch = String(parsed.pathname || "").match(uuidPathPattern);
      if (pathMatch?.[1]) return `${parsed.origin}/editor?share=${encodeURIComponent(pathMatch[1])}&preview=1`;
    }
  } catch {
    return "";
  }
  return "";
}

async function ensureShareLink() {
  const typed = normalizeShareLinkInput(shareLinkField?.value || "");
  if (typed) {
    setShareLinkValue(typed);
    return typed;
  }
  return createShareLink();
}

async function copyShareLink() {
  const url = await ensureShareLink();
  const copied = await copyTextWithFallback(url, "Copy share link:");
  if (copied) {
    setShareModalStatus("Share link copied.");
    setStatus("Share link copied.");
  } else {
    setShareModalStatus("Share link ready. Copy manually.");
    setStatus("Share link ready. Copy manually.");
  }
}

async function copyTextWithFallback(text, promptLabel = "Copy text:") {
  const value = String(text || "");
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // Fall back to manual copy prompt.
  }
  window.prompt(promptLabel, value);
  return false;
}

function normalizeIncomingProjectPayload(payload) {
  if (!payload || typeof payload !== "object" || !Array.isArray(payload.pages) || payload.pages.length === 0) {
    throw new Error("Shared project payload is invalid.");
  }
  const projectName = normalizeProjectName(payload.projectName || DEFAULT_PROJECT_NAME);
  const pages = cloneJson(payload.pages);
  let maxNodeId = 0;
  let maxGroupIndex = 0;
  let maxPageIndex = 0;
  pages.forEach((page) => {
    const pageMatch = String(page?.id || "").match(/^page_(\d+)$/);
    if (pageMatch) {
      maxPageIndex = Math.max(maxPageIndex, Number(pageMatch[1]) || 0);
    }
    const views = page?.viewStates || {};
    ["desktop", "tablet", "mobile"].forEach((viewKey) => {
      const elements = Array.isArray(views?.[viewKey]?.elements) ? views[viewKey].elements : [];
      elements.forEach((item) => {
        const itemMatch = String(item?.id || "").match(/^node_(\d+)$/);
        if (itemMatch) {
          maxNodeId = Math.max(maxNodeId, Number(itemMatch[1]) || 0);
        }
        const groupMatch = String(item?.groupId || "").match(/^group_(\d+)$/);
        if (groupMatch) {
          maxGroupIndex = Math.max(maxGroupIndex, Number(groupMatch[1]) || 0);
        }
      });
    });
  });
  const currentPageId =
    typeof payload.currentPageId === "string" && pages.some((page) => page.id === payload.currentPageId)
      ? payload.currentPageId
      : pages[0].id;
  return {
    nextId: Math.max(1, maxNodeId + 1),
    nextGroupIndex: Math.max(1, maxGroupIndex + 1),
    projectName,
    pages,
    currentPageId,
    nextPageIndex: Math.max(2, maxPageIndex + 1, pages.length + 1),
  };
}

async function loadSharedProjectById(shareId) {
  const safeShareId = String(shareId || "").trim();
  if (!safeShareId) throw new Error("Missing share id.");
  setStatus("Loading shared project...");
  const response = await fetch(`/api/share/${encodeURIComponent(safeShareId)}`);
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body?.error || "Could not load shared project.");
  }
  const snapshot = normalizeIncomingProjectPayload(body?.project);
  applySnapshot(snapshot);
  state.undoStack = [];
  state.redoStack = [];
  updateHistoryButtons();
  setReadOnlyMode(true);
  setStatus("Shared project loaded.");
  return safeShareId;
}

async function loadSharedProjectFromUrlIfPresent() {
  const params = new URLSearchParams(window.location.search);
  const legacyPathShareMatch = String(window.location.pathname || "")
    .match(/^\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/);
  const shareId = String(params.get("share") || legacyPathShareMatch?.[1] || "").trim();
  const previewParam = String(params.get("preview") || "").trim().toLowerCase();
  const onPreviewRoute = String(window.location.pathname || "").toLowerCase() === "/preview";
  const openPreviewOnLoad =
    onPreviewRoute ||
    Boolean(legacyPathShareMatch?.[1]) ||
    previewParam === "1" ||
    previewParam === "true" ||
    previewParam === "yes";
  if (!shareId) return false;
  await loadSharedProjectById(shareId);
  const canonicalUrl = `${window.location.origin}/editor?share=${encodeURIComponent(shareId)}&preview=1`;
  window.history.replaceState({}, "", canonicalUrl);
  setShareLinkValue(canonicalUrl);
  if (openPreviewOnLoad) {
    previewDesign({ sameTab: true });
  }
  return true;
}

function clearCurrentCanvasView() {
  state.elements = [];
  state.selectedId = null;
  state.selectedIds = [];
  state.drag = null;
  state.snapGuides = [];
  markCurrentViewDirty();
  persistCurrentPageState();
  render();
  setStatus("Canvas cleared.");
}

async function requestAiLayout(prompt, style, pageCount) {
  const response = await fetch("/api/layout-generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, style, pageCount }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.error || "AI layout generation failed.");
  }
  if (!Array.isArray(payload?.pages)) {
    throw new Error("AI returned an invalid layout.");
  }
  return {
    pages: payload.pages,
    provider: payload?.provider || "remote",
  };
}

async function requestAiImage(prompt, options = {}) {
  const model = String(options.model || "").trim() || DEFAULT_AI_IMAGE_MODEL;
  const imageSize = normalizeRecraftSize(options.size || options.imageSize || state.aiImagePrefs.imageSize);
  const sizeMeta = getRecraftSizeMeta(imageSize);
  const aspectRatio = String(options.aspectRatio || "").trim() || sizeMeta.aspectRatio;
  const resolution = String(options.resolution || "").trim() || sizeMeta.resolution;
  const sourceImageDataUrl = String(options.sourceImageDataUrl || "").trim();
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), 90000);
  let response;
  try {
    response = await fetch("/api/image-generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
      body: JSON.stringify({
        prompt,
        model,
        size: sizeMeta.apiSize || imageSize,
        aspectRatio,
        resolution,
        sourceImageDataUrl: sourceImageDataUrl || undefined,
      }),
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error("AI image request timed out. Try again.");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
  const responseText = await response.text().catch(() => "");
  let payload = {};
  try {
    payload = responseText ? JSON.parse(responseText) : {};
  } catch {
    payload = {};
  }
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("AI image API is unavailable on this server. Restart using `node server.js`.");
    }
    const serverError = String(payload?.error || "").trim();
    if (serverError) {
      throw new Error(serverError);
    }
    const fallbackError = String(responseText || "").trim();
    throw new Error(fallbackError || `AI image generation failed (HTTP ${response.status}).`);
  }
  const imageDataUrl = String(payload?.imageDataUrl || "").trim();
  if (!imageDataUrl) {
    throw new Error("AI image response did not include an image.");
  }
  return {
    imageDataUrl,
    model: String(payload?.model || model),
    size: String(payload?.size || sizeMeta.apiSize || imageSize),
  };
}

function hashString(value) {
  let hash = 2166136261;
  const input = String(value || "");
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function toTitleCase(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function summarizePrompt(prompt, maxWords = 8) {
  const words = String(prompt || "")
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "Creative Product";
  return toTitleCase(words.slice(0, maxWords).join(" "));
}

function intersectsRect(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function estimateTextHeight(text, width, fontSize, lineHeight) {
  const safeText = String(text || "");
  const safeWidth = Math.max(80, Number(width) || 320);
  const fs = Math.max(8, Number(fontSize) || 16);
  const lh = clamp(Number(lineHeight) || 1.2, 0.8, 3);
  // Approximation for wrapping in canvas divs.
  const approxCharsPerLine = Math.max(6, Math.floor(safeWidth / (fs * 0.53)));
  const explicitLines = safeText.split("\n");
  let wrappedLines = 0;
  explicitLines.forEach((line) => {
    const len = Math.max(1, line.length);
    wrappedLines += Math.max(1, Math.ceil(len / approxCharsPerLine));
  });
  return wrappedLines * fs * lh;
}

function measureTextBounds(text, options = {}) {
  const content = String(text || "");
  const fontSize = Math.max(8, Number(options.fontSize) || 16);
  const lineHeight = clamp(Number(options.lineHeight) || 1.2, 0.8, 3);
  const fontFamily = String(options.fontFamily || DEFAULT_TEXT_FONT_FAMILY);
  const fontWeight = normalizeFontWeight(options.fontWeight ?? "400");
  const tracking = normalizeTracking(options.tracking ?? 0);
  const wordSpacing = clamp(Number(options.wordSpacing ?? 0), -5, 40);
  const textCase = normalizeTextCase(options.textCase);
  const rendered = textCase === "uppercase" ? content.toUpperCase() : content;
  const lines = rendered.split("\n");
  const probe = document.createElement("canvas");
  const ctx = probe.getContext("2d");
  if (!ctx) {
    return {
      width: Math.max(40, Math.ceil(fontSize * 3)),
      height: Math.max(24, Math.ceil(fontSize * lineHeight)),
    };
  }
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  let maxLineWidth = 0;
  lines.forEach((line) => {
    const measured = measureAdvancedTextWidth(ctx, line, wordSpacing, tracking);
    maxLineWidth = Math.max(maxLineWidth, measured);
  });
  const safeLines = Math.max(1, lines.length);
  return {
    width: Math.max(40, Math.ceil(maxLineWidth + 6)),
    height: Math.max(24, Math.ceil((safeLines * fontSize * lineHeight) + 6)),
  };
}

function fitTextItemToContent(item, textOverride = null) {
  if (!item || item.type !== "text") return;
  const bounds = measureTextBounds(textOverride == null ? item.text : textOverride, {
    fontSize: item.fontSize,
    fontFamily: item.fontFamily,
    fontWeight: item.fontWeight,
    lineHeight: item.lineHeight,
    tracking: item.tracking,
    wordSpacing: item.wordSpacing,
    textCase: item.textCase,
  });
  item.width = Math.max(40, bounds.width);
  item.height = Math.max(24, bounds.height);
}

function getEditingNodeText(node) {
  if (!node) return "";
  return String(node.innerText || "")
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ");
}

function startInlineTextEditing(node, item) {
  if (!node || !item || item.type !== "text") return;
  if (state.isReadOnly || isItemLocked(item)) return;
  if (node.classList.contains("is-text-editing")) return;
  beginHistoryGroup("text-edit");
  const originalText = item.text;
  node.classList.add("is-text-editing");
  node.style.userSelect = "text";
  node.style.cursor = "text";
  node.style.color = "#11131f";
  node.style.backgroundImage = "none";
  node.style.backgroundClip = "";
  node.style.webkitBackgroundClip = "";
  node.style.textTransform = "none";
  node.style.fontVariantCaps = "normal";
  node.style.paddingTop = "0";
  node.style.paddingBottom = "0";
  node.style.overflow = "visible";

  const editor = document.createElement("textarea");
  editor.className = "bf-inline-text-editor";
  editor.value = String(item.text || "");
  editor.spellcheck = false;
  editor.wrap = "off";
  editor.style.fontSize = `${getEffectiveTextFontSize(item)}px`;
  editor.style.fontFamily = item.fontFamily;
  editor.style.fontWeight = normalizeFontWeight(item.fontWeight ?? 600);
  editor.style.textAlign = normalizeTextAlign(item.textAlign);
  editor.style.lineHeight = String(clamp(Number(item.lineHeight ?? 1.2), 0.8, 3));
  editor.style.letterSpacing = `${normalizeTracking(item.tracking ?? 0)}px`;
  editor.style.wordSpacing = `${clamp(Number(item.wordSpacing ?? 0), -5, 40)}px`;

  node.textContent = "";
  node.appendChild(editor);
  editor.focus();
  editor.setSelectionRange(editor.value.length, editor.value.length);

  const applyDraftSize = (draft) => {
    const bounds = measureTextBounds(draft, {
      fontSize: item.fontSize,
      fontFamily: item.fontFamily,
      fontWeight: item.fontWeight,
      lineHeight: item.lineHeight,
      tracking: item.tracking,
      wordSpacing: item.wordSpacing,
      textCase: "none",
    });
    item.width = Math.max(40, bounds.width);
    item.height = Math.max(24, bounds.height);
    node.style.width = `${item.width}px`;
    node.style.height = `${item.height}px`;
    editor.style.width = `${item.width}px`;
    editor.style.height = `${item.height}px`;
    markCurrentViewDirty();
  };

  const commit = () => {
    item.text = String(editor.value || "").replace(/\r/g, "");
    fitTextItemToContent(item, item.text);
    node.classList.remove("is-text-editing");
    node.style.userSelect = "";
    node.style.cursor = "";
    node.style.overflow = "";
    markCurrentViewDirty();
    endHistoryGroup("text-edit");
    render();
  };
  const cancel = () => {
    item.text = originalText;
    node.classList.remove("is-text-editing");
    node.style.userSelect = "";
    node.style.cursor = "";
    node.style.overflow = "";
    endHistoryGroup("text-edit");
    render();
  };

  const cleanup = () => {
    editor.removeEventListener("blur", handleBlur);
    editor.removeEventListener("keydown", handleKeydown);
    editor.removeEventListener("input", handleInput);
  };
  const handleBlur = () => {
    cleanup();
    commit();
  };
  const handleInput = () => {
    applyDraftSize(String(editor.value || ""));
  };
  const handleKeydown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      cleanup();
      cancel();
      return;
    }
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      cleanup();
      commit();
    }
  };

  editor.addEventListener("blur", handleBlur);
  editor.addEventListener("keydown", handleKeydown);
  editor.addEventListener("input", handleInput);
  applyDraftSize(editor.value);
}

function polishGeneratedElements(elements, canvas) {
  const safeCanvas = canvas || VIEW_PRESETS.desktop;
  const polished = cloneJson(elements).map((item, index) => {
    const out = { ...item };
    out.z = index;
    out.x = clamp(Number(out.x) || 0, 0, Math.max(0, safeCanvas.width - 20));
    out.y = clamp(Number(out.y) || 0, 0, Math.max(0, safeCanvas.height - 20));
    out.width = clamp(Number(out.width) || 120, 20, safeCanvas.width - out.x);
    out.height = clamp(Number(out.height) || 40, 20, safeCanvas.height - out.y);

    if (out.type === "text") {
      out.fontSize = clamp(Number(out.fontSize) || 36, 10, 220);
      out.lineHeight = clamp(Number(out.lineHeight ?? 1.2), 0.8, 3);
      const needed = estimateTextHeight(out.text, out.width, out.fontSize, out.lineHeight);
      if (needed > out.height * 0.95) {
        const ratio = clamp((out.height * 0.9) / Math.max(1, needed), 0.35, 1);
        out.fontSize = clamp(Math.floor(out.fontSize * ratio), 10, out.fontSize);
      }
      out.height = Math.max(out.height, Math.ceil(estimateTextHeight(out.text, out.width, out.fontSize, out.lineHeight)));
      out.height = clamp(out.height, 20, safeCanvas.height - out.y);
    }
    return out;
  });

  // Resolve overlaps by pushing lower elements down where possible.
  const sorted = polished.map((item, idx) => ({ item, idx })).sort((a, b) => a.item.y - b.item.y || a.item.x - b.item.x);
  for (let i = 0; i < sorted.length; i += 1) {
    for (let j = i + 1; j < sorted.length; j += 1) {
      const a = sorted[i].item;
      const b = sorted[j].item;
      if (!intersectsRect(a, b)) continue;
      if (b.y < a.y) continue;
      const targetY = a.y + a.height + 14;
      if (targetY < safeCanvas.height - 20) {
        b.y = clamp(targetY, 0, safeCanvas.height - Math.max(20, b.height));
      }
    }
  }

  return sorted.sort((a, b) => a.idx - b.idx).map((entry, index) => ({ ...entry.item, z: index }));
}

function generateFallbackAiPages(prompt, style, pageCount) {
  const count = clamp(Number(pageCount) || 1, 1, 5);
  const seed = hashString(`${prompt}|${style}`);
  const heroTitle = summarizePrompt(prompt, 8);
  const subline = String(prompt || "").trim().slice(0, 130) || "Design fast and ship polished web pages.";
  const baseBackgrounds = ["#f6f7fb", "#f4f6ff", "#f7f6f3", "#f2f8f6", "#f8f5fa"];
  const accentColors = ["#1f2937", "#0f172a", "#1d3557", "#22303c", "#2d1f45"];
  const ctaColors = ["#2f8f6b", "#3366ff", "#ff6b35", "#4f46e5", "#0f766e"];
  const templateKind = (seed % 3);
  const styleBias = String(style || "").toLowerCase();

  const pages = [];
  for (let p = 0; p < count; p += 1) {
    const bg = baseBackgrounds[(seed + p) % baseBackgrounds.length];
    const accent = accentColors[(seed + p * 3) % accentColors.length];
    const cta = ctaColors[(seed + p * 5) % ctaColors.length];
    const pageName = p === 0 ? "Landing" : p === 1 ? "Features" : p === 2 ? "Pricing" : `Page ${p + 1}`;
    const compact = styleBias.includes("minimal");
    const loud = styleBias.includes("bold");
    const heroSize = compact ? 54 : loud ? 70 : 62;
    const bodySize = compact ? 20 : 23;

    let elements = [];
    if ((templateKind + p) % 3 === 0) {
      elements = [
        { type: "text", x: 84, y: 52, width: 420, height: 48, text: "MagX", fontSize: 28, textColor: accent },
        { type: "text", x: 84, y: 122, width: 660, height: 214, text: heroTitle, fontSize: heroSize, textColor: accent, lineHeight: 1.08 },
        { type: "text", x: 86, y: 338, width: 700, height: 86, text: subline, fontSize: bodySize, textColor: "#4b5563" },
        { type: "shape", shapeKind: "rectangle", x: 86, y: 436, width: 198, height: 56, fill: cta, stroke: cta, strokeWidth: 0, radius: 0 },
        { type: "text", x: 126, y: 452, width: 150, height: 32, text: "Start Now", fontSize: 22, textColor: "#ffffff" },
        { type: "shape", shapeKind: "rectangle", x: 302, y: 436, width: 198, height: 56, fill: "#e7ebf4", stroke: "#d4dae7", strokeWidth: 1, radius: 0 },
        { type: "text", x: 356, y: 452, width: 130, height: 32, text: "Learn More", fontSize: 22, textColor: "#1f2937" },
        { type: "image", x: 822, y: 92, width: 378, height: 262, text: "Hero Visual" },
        { type: "shape", shapeKind: "rectangle", x: 84, y: 518, width: 1116, height: 148, fill: "#ffffff", stroke: "#d9dde8", strokeWidth: 1, radius: 0 },
        { type: "text", x: 118, y: 546, width: 420, height: 40, text: `${heroTitle} Highlights`, fontSize: 28, textColor: accent },
        { type: "text", x: 118, y: 584, width: 880, height: 50, text: "Export handoff-ready layouts for Codex, AntiGravity, Cursor, Emergent, and Base44.", fontSize: 19, textColor: "#4b5563" },
        { type: "icon", x: 1048, y: 548, width: 42, height: 42, iconName: "sparkles", fill: accent },
      ];
    } else if ((templateKind + p) % 3 === 1) {
      elements = [
        { type: "text", x: 84, y: 52, width: 380, height: 46, text: "MagX", fontSize: 26, textColor: accent },
        { type: "text", x: 210, y: 132, width: 860, height: 130, text: heroTitle, fontSize: heroSize, textColor: accent },
        { type: "text", x: 250, y: 272, width: 760, height: 74, text: subline, fontSize: bodySize, textColor: "#4b5563" },
        { type: "shape", shapeKind: "rectangle", x: 450, y: 362, width: 194, height: 54, fill: cta, stroke: cta, strokeWidth: 0, radius: 0 },
        { type: "text", x: 490, y: 376, width: 128, height: 30, text: "Get Started", fontSize: 21, textColor: "#ffffff" },
        { type: "shape", shapeKind: "rectangle", x: 660, y: 362, width: 194, height: 54, fill: "#e7ebf4", stroke: "#d4dae7", strokeWidth: 1, radius: 0 },
        { type: "text", x: 718, y: 376, width: 120, height: 30, text: "Pricing", fontSize: 21, textColor: "#1f2937" },
        { type: "shape", shapeKind: "rectangle", x: 84, y: 460, width: 360, height: 186, fill: "#ffffff", stroke: "#d9dde8", strokeWidth: 1, radius: 0 },
        { type: "shape", shapeKind: "rectangle", x: 462, y: 460, width: 360, height: 186, fill: "#ffffff", stroke: "#d9dde8", strokeWidth: 1, radius: 0 },
        { type: "shape", shapeKind: "rectangle", x: 840, y: 460, width: 360, height: 186, fill: "#ffffff", stroke: "#d9dde8", strokeWidth: 1, radius: 0 },
        { type: "icon", x: 112, y: 492, width: 36, height: 36, iconName: "flash", fill: accent },
        { type: "icon", x: 490, y: 492, width: 36, height: 36, iconName: "rocket", fill: accent },
        { type: "icon", x: 868, y: 492, width: 36, height: 36, iconName: "layers", fill: accent },
        { type: "text", x: 162, y: 496, width: 254, height: 34, text: "Fast Setup", fontSize: 25, textColor: accent },
        { type: "text", x: 540, y: 496, width: 254, height: 34, text: "Scalable", fontSize: 25, textColor: accent },
        { type: "text", x: 918, y: 496, width: 254, height: 34, text: "Agent Ready", fontSize: 25, textColor: accent },
      ];
    } else {
      elements = [
        { type: "shape", shapeKind: "rectangle", x: 0, y: 0, width: 1280, height: 84, fill: "#ffffff", stroke: "#e6e8ef", strokeWidth: 1, radius: 0 },
        { type: "text", x: 82, y: 30, width: 280, height: 34, text: "MagX", fontSize: 28, textColor: accent },
        { type: "text", x: 888, y: 32, width: 330, height: 28, text: "Features   Pricing   Contact", fontSize: 19, textColor: "#556070" },
        { type: "text", x: 84, y: 128, width: 610, height: 122, text: heroTitle, fontSize: heroSize, textColor: accent },
        { type: "text", x: 86, y: 266, width: 590, height: 84, text: subline, fontSize: bodySize, textColor: "#4b5563" },
        { type: "shape", shapeKind: "rectangle", x: 86, y: 366, width: 202, height: 56, fill: cta, stroke: cta, strokeWidth: 0, radius: 0 },
        { type: "text", x: 132, y: 382, width: 140, height: 30, text: "Try Free", fontSize: 22, textColor: "#ffffff" },
        { type: "shape", shapeKind: "rectangle", x: 310, y: 366, width: 202, height: 56, fill: "#e7ebf4", stroke: "#d4dae7", strokeWidth: 1, radius: 0 },
        { type: "text", x: 358, y: 382, width: 136, height: 30, text: "View Docs", fontSize: 22, textColor: "#1f2937" },
        { type: "image", x: 720, y: 128, width: 480, height: 292, text: "Product Preview" },
        { type: "shape", shapeKind: "rectangle", x: 84, y: 474, width: 352, height: 178, fill: "#ffffff", stroke: "#d9dde8", strokeWidth: 1, radius: 0 },
        { type: "shape", shapeKind: "rectangle", x: 464, y: 474, width: 352, height: 178, fill: "#ffffff", stroke: "#d9dde8", strokeWidth: 1, radius: 0 },
        { type: "shape", shapeKind: "rectangle", x: 844, y: 474, width: 352, height: 178, fill: "#ffffff", stroke: "#d9dde8", strokeWidth: 1, radius: 0 },
        { type: "text", x: 116, y: 512, width: 290, height: 34, text: "Custom Layouts", fontSize: 25, textColor: accent },
        { type: "text", x: 496, y: 512, width: 290, height: 34, text: "Responsive Export", fontSize: 25, textColor: accent },
        { type: "text", x: 876, y: 512, width: 290, height: 34, text: "AI Handoff", fontSize: 25, textColor: accent },
      ];
    }

    pages.push({
      name: pageName,
      canvasBackground: bg,
      elements,
    });
  }

  return pages;
}

function buildElementFromAiSpec(spec, index) {
  const type = String(spec?.type || "shape").toLowerCase();
  const x = clamp(Number(spec?.x) || 80, -500, 5000);
  const y = clamp(Number(spec?.y) || 80, -500, 5000);
  const width = clamp(Number(spec?.width) || (type === "text" ? 360 : 240), 20, 4096);
  const height = clamp(Number(spec?.height) || (type === "text" ? 120 : 160), 20, 4096);

  if (type === "text") {
    return {
      id: uid(),
      type: "text",
      x,
      y,
      width,
      height,
      rotation: 0,
      opacity: 1,
      z: index,
      text: String(spec?.text || "Headline"),
      fontSize: clamp(Number(spec?.fontSize) || 44, 10, 220),
      fontFamily: String(spec?.fontFamily || DEFAULT_TEXT_FONT_FAMILY),
      fontWeight: normalizeFontWeight(spec?.fontWeight ?? 600),
      textColor: ensureHexColor(spec?.textColor, "#11131f"),
      textFillMode: "solid",
      textGradientFrom: ensureHexColor(spec?.textColor, "#11131f"),
      textGradientTo: "#6f7380",
      textGradientAngle: 90,
      textFillImageSrc: null,
      textFillImageScale: 100,
      textFillImageX: 50,
      textFillImageY: 50,
      tracking: normalizeTracking(spec?.tracking ?? 0),
      textUnderline: Boolean(spec?.textUnderline),
      textStrikethrough: Boolean(spec?.textStrikethrough),
      textCase: normalizeTextCase(spec?.textCase),
      textScript: normalizeTextScript(spec?.textScript),
      textAlign: normalizeTextAlign(spec?.textAlign || "left"),
      lineHeight: clamp(Number(spec?.lineHeight) || 1.2, 0.8, 3),
      wordSpacing: clamp(Number(spec?.wordSpacing ?? spec?.letterSpacing) || 0, -5, 40),
      layerName: `Text ${index + 1}`,
    };
  }

  if (type === "image") {
    const src = createPlaceholderImageDataUrl(width, height, spec?.text || "Image");
    return {
      id: uid(),
      type: "image",
      x,
      y,
      width,
      height,
      rotation: 0,
      opacity: 1,
      z: index,
      src,
      imageFit: "cover",
      focalX: 50,
      focalY: 50,
      imageBrightness: normalizeImageFilterValue(spec?.imageBrightness ?? 100, "percent"),
      imageContrast: normalizeImageFilterValue(spec?.imageContrast ?? 100, "percent"),
      imageSaturation: normalizeImageFilterValue(spec?.imageSaturation ?? 100, "percent"),
      imageBlur: normalizeImageFilterValue(spec?.imageBlur ?? 0, "blur"),
      imageGrayscale: clamp(Number(spec?.imageGrayscale ?? 0), 0, 100),
      imageSepia: clamp(Number(spec?.imageSepia ?? 0), 0, 100),
      imageHue: normalizeImageFilterValue(spec?.imageHue ?? 0, "hue"),
      aiVersionHistory: [src],
      aiVersionIndex: 0,
      layerName: `Image ${index + 1}`,
    };
  }

  if (type === "icon") {
    return {
      id: uid(),
      type: "icon",
      x,
      y,
      width: clamp(width, 20, 240),
      height: clamp(height, 20, 240),
      rotation: 0,
      opacity: 1,
      z: index,
      iconName: resolveSafeIconName(spec?.iconName || "sparkles"),
      iconColor: ensureHexColor(spec?.iconColor || spec?.fill, "#1f1f1f"),
      iconStrokeWidth: clamp(Number(spec?.iconStrokeWidth) || 1.75, 1, 4),
      layerName: `Icon ${index + 1}`,
    };
  }

  const shapeKind = ["rectangle", "circle", "triangle", "line", "star", "polygon"].includes(spec?.shapeKind)
    ? spec.shapeKind
    : "rectangle";
  return {
    id: uid(),
    type: "shape",
    x,
    y,
    width,
    height,
    rotation: 0,
    opacity: 1,
    z: index,
    shapeKind,
    fill: ensureHexColor(spec?.fill, "#595959"),
    shapeFillMode: "solid",
    shapeGradientFrom: ensureHexColor(spec?.fill, "#595959"),
    shapeGradientTo: "#9d9d9d",
    shapeGradientAngle: 90,
    shapeFillImageSrc: null,
    shapeFillImageScale: 100,
    shapeFillImageX: 50,
    shapeFillImageY: 50,
    stroke: ensureHexColor(spec?.stroke, "#11131f"),
    strokeWidth: clamp(Number(spec?.strokeWidth) || 0, 0, 80),
    radius: clamp(Number(spec?.radius) || 0, 0, 240),
    layerName: `${getLayerLabel("shape", shapeKind)} ${index + 1}`,
  };
}

function applyAiGeneratedPages(pageSpecs) {
  const incoming = Array.isArray(pageSpecs) ? pageSpecs : [];
  if (incoming.length === 0) {
    throw new Error("No pages were returned by the model.");
  }

  state.pages = incoming.map((pageSpec, pageIndex) => {
    const page = createPageRecord(state.nextPageIndex);
    state.nextPageIndex += 1;
    page.name = String(pageSpec?.name || `Page ${pageIndex + 1}`);
    page.currentView = "desktop";
    const background = ensureHexColor(pageSpec?.canvasBackground, "#f6f7fb");
    const rawElements = (Array.isArray(pageSpec?.elements) ? pageSpec.elements : [])
      .slice(0, 72)
      .map((spec, index) => buildElementFromAiSpec(spec, index));
    const elements = polishGeneratedElements(rawElements, page.viewStates.desktop.canvas);
    page.viewStates.desktop.canvas.background = background;
    page.viewStates.desktop.elements = elements;
    page.viewStates.desktop.selectedId = null;
    page.viewStates.desktop.dirty = true;
    page.viewStates.tablet.dirty = false;
    page.viewStates.mobile.dirty = false;
    return page;
  });

  state.currentPageId = state.pages[0].id;
  hydrateCanvasFromPage(state.pages[0]);
  state.snapGuides = [];
  state.drag = null;
  updateViewButtons();
  updateCanvasSize();
  updateCanvasBackground();
  render();
}

async function handleAiGenerate() {
  if (!requireCredits(1, "AI layout generation")) return;
  const prompt = String(aiPrompt?.value || "").trim();
  if (!prompt) {
    setStatus("Enter a prompt for AI generation.");
    aiPrompt?.focus();
    return;
  }

  const style = String(aiStyle?.value || "magx-inspired");
  const pageCount = clamp(Number(aiPageCount?.value) || 1, 1, 5);
  if (aiGenerateConfirmBtn) aiGenerateConfirmBtn.disabled = true;
  setStatus("Generating pages with AI...");

  try {
    let pages = [];
    let provider = "remote";
    let usedFallback = false;
    try {
      const result = await requestAiLayout(prompt, style, pageCount);
      pages = result.pages;
      provider = result.provider || "remote";
    } catch (primaryError) {
      usedFallback = true;
      pages = generateFallbackAiPages(prompt, style, pageCount);
      console.error("AI API failed; using local fallback generator:", primaryError);
    }
    runWithHistory(() => {
      applyAiGeneratedPages(pages);
    }, "ai-generate");
    closeAiModal();
    if (usedFallback) {
      setStatus(`Generated ${pages.length} page${pages.length === 1 ? "" : "s"} using local fallback (API unavailable).`);
    } else {
      setStatus(`AI generated ${pages.length} page${pages.length === 1 ? "" : "s"} via ${provider}.`);
    }
    consumeCredits(1);
  } catch (error) {
    setStatus(error?.message || "AI generation failed.");
  } finally {
    if (aiGenerateConfirmBtn) aiGenerateConfirmBtn.disabled = false;
  }
}

async function handleAiImageGenerate(overrides = null) {
  if (!requireEditableStatus()) return;
  if (isAiImageRequestInFlight) return;
  isAiImageRequestInFlight = true;
  clearTimeout(aiImageInFlightSafetyTimer);
  aiImageInFlightSafetyTimer = setTimeout(() => {
    isAiImageRequestInFlight = false;
    if (aiImageGenerateBtn) aiImageGenerateBtn.disabled = false;
    if (aiImageCancelBtn) aiImageCancelBtn.disabled = false;
    setAiImageLoading(false);
    updateAiImageRegenerateButton();
    setStatus("Image request timed out. Please try again.");
  }, 120000);
  if (aiImageGenerateBtn) aiImageGenerateBtn.disabled = true;
  if (aiImageCancelBtn) aiImageCancelBtn.disabled = true;
  if (aiImageRegenerateBtn) aiImageRegenerateBtn.disabled = true;
  setAiImageLoading(true);
  setStatus("Generating image with AI...");
  try {
    const prompt = String(
      overrides?.prompt ??
      aiImagePrompt?.value ??
      state.aiImageLastRequest?.prompt ??
      ""
    ).trim();
    if (!prompt) {
      setStatus("Enter an image prompt.");
      aiImagePrompt?.focus();
      return;
    }
    const model = String(overrides?.model ?? DEFAULT_AI_IMAGE_MODEL).trim() || DEFAULT_AI_IMAGE_MODEL;
    const imageSize = normalizeRecraftSize(
      overrides?.imageSize ??
      overrides?.size ??
      aiImageSize?.value ??
      state.aiImagePrefs.imageSize
    );
    const sizeMeta = getRecraftSizeMeta(imageSize);
    const aspectRatio = sizeMeta.aspectRatio;
    const resolution = sizeMeta.resolution;
    const variantCount = 1;
    if (!requireCredits(variantCount, "AI image generation")) {
      setStatus(`Need ${variantCount} credit${variantCount === 1 ? "" : "s"} to generate.`);
      return;
    }
    if (!overrides) {
      syncAiImagePrefsFromInputs();
    }
    state.aiImageVariantResults = [];

    const requests = Array.from({ length: variantCount }, () =>
      requestAiImage(prompt, { model, imageSize, aspectRatio, resolution })
    );
    const results = await Promise.all(requests);
    state.aiImageVariantResults = results.map((entry) => ({
      imageDataUrl: entry.imageDataUrl,
      model: entry.model || model,
    }));
    renderAiImageVariantGrid();
    state.aiImageLastRequest = { prompt, model, imageSize, aspectRatio, resolution, variantCount };
    updateAiImageRegenerateButton();
    consumeCredits(variantCount);
    if (variantCount === 1 && state.aiImageVariantResults[0]) {
      await applyGeneratedImageToCanvas(state.aiImageVariantResults[0].imageDataUrl, state.aiImageVariantResults[0].model || model);
      closeAiImageModal();
    } else {
      setStatus(`Generated ${state.aiImageVariantResults.length} image variants.`);
    }
  } catch (error) {
    setStatus(error?.message || "AI image request failed.");
  } finally {
    clearTimeout(aiImageInFlightSafetyTimer);
    aiImageInFlightSafetyTimer = null;
    isAiImageRequestInFlight = false;
    if (aiImageGenerateBtn) aiImageGenerateBtn.disabled = false;
    if (aiImageCancelBtn) aiImageCancelBtn.disabled = false;
    setAiImageLoading(false);
    updateAiImageRegenerateButton();
  }
}

async function applyGeneratedImageToCanvas(imageDataUrl, modelLabel = DEFAULT_AI_IMAGE_MODEL) {
  let width = 512;
  let height = 512;
  try {
    const img = await createImage(imageDataUrl);
    const maxWidth = Math.min(840, state.canvas.width - 80);
    const scale = Math.min(1, maxWidth / Math.max(1, img.width));
    width = Math.max(60, Math.round(img.width * scale));
    height = Math.max(60, Math.round(img.height * scale));
  } catch {
    // Keep fallback size if image dimensions are unavailable.
  }
  runWithHistory(() => {
    const insert = getDefaultInsertPoint(width, height);
    addElement({
      type: "image",
      src: imageDataUrl,
      x: insert.x,
      y: insert.y,
      width,
      height,
      aiVersionHistory: [imageDataUrl],
      aiVersionIndex: 0,
    });
  }, "ai-image");
  setStatus(`AI image added to canvas (${modelLabel}).`);
}

async function handleAiImageEditGenerate() {
  if (!requireCredits(1, "AI image edit")) {
    setAiImageEditModalStatus(`Need 1 credit to edit. Current balance: ${Math.max(0, Math.floor(state.credits || 0))}.`, true);
    return;
  }
  if (!requireEditableStatus()) return;
  const prompt = String(aiImageEditPrompt?.value || "").trim();
  if (!prompt) {
    setAiImageEditModalStatus("Enter an edit prompt.", true);
    aiImageEditPrompt?.focus();
    return;
  }

  const targetId = state.aiImageEditTargetId;
  const target = state.elements.find((item) => item.id === targetId && item.type === "image" && item.src);
  if (!target) {
    setAiImageEditModalStatus("Select an image layer and reopen AI Edit.", true);
    return;
  }

  const model = DEFAULT_AI_IMAGE_MODEL;
  const imageSize = normalizeRecraftSize(state.aiImagePrefs.imageSize);
  const sizeMeta = getRecraftSizeMeta(imageSize);
  const aspectRatio = sizeMeta.aspectRatio;
  const resolution = sizeMeta.resolution;

  if (aiImageEditGenerateBtn) aiImageEditGenerateBtn.disabled = true;
  if (aiImageEditCancelBtn) aiImageEditCancelBtn.disabled = true;
  setAiImageEditModalStatus("Generating edit...");
  setStatus("Generating AI image edit...");

  try {
    const result = await requestAiImage(prompt, {
      model,
      imageSize,
      aspectRatio,
      resolution,
      sourceImageDataUrl: target.src,
    });
    runWithHistory(() => {
      const updateTarget = state.elements.find((item) => item.id === targetId && item.type === "image");
      if (!updateTarget) return;
      recordImageVersion(updateTarget, result.imageDataUrl);
      markCurrentViewDirty();
      selectElement(updateTarget.id);
      render();
    }, "ai-image-edit");
    consumeCredits(1);
    setStatus(`AI edit applied (${result.model}).`);
    closeAiImageEditModal();
  } catch (error) {
    setAiImageEditModalStatus(error?.message || "AI image edit failed.", true);
    setStatus(error?.message || "AI image edit failed.");
  } finally {
    if (aiImageEditGenerateBtn) aiImageEditGenerateBtn.disabled = false;
    if (aiImageEditCancelBtn) aiImageEditCancelBtn.disabled = false;
  }
}

function populateIconControls() {
  const iconNames = getIonicIconNames();

  if (propIconName) {
    propIconName.innerHTML = "";
    iconNames.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      propIconName.appendChild(option);
    });
  }

  if (iconFlyoutGrid) {
    iconFlyoutGrid.innerHTML = "";
    iconNames.forEach((name) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "icon-option-btn";
      btn.title = name;
      btn.dataset.iconName = name;
      const iconEl = document.createElement("ion-icon");
      iconEl.setAttribute("name", name);
      iconEl.addEventListener("ionError", () => {
        btn.remove();
        removeIconOption(name);
      });
      btn.appendChild(iconEl);
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        runWithHistory(() => addIconOverlay(resolveSafeIconName(name)), "add-icon");
        closeIconFlyout();
      });
      iconFlyoutGrid.appendChild(btn);
    });
  }

  hydrateIcons();
}

function addElement(partial) {
  const item = {
    id: uid(),
    type: partial.type,
    x: partial.x ?? 80,
    y: partial.y ?? 80,
    width: partial.width ?? 220,
    height: partial.height ?? 120,
    rotation: partial.rotation ?? 0,
    opacity: partial.opacity ?? 1,
    z: state.elements.length,
    text: partial.text ?? "Double-click to edit text",
    fontSize: partial.fontSize ?? 36,
    fontFamily: partial.fontFamily ?? DEFAULT_TEXT_FONT_FAMILY,
    fontWeight: normalizeFontWeight(partial.fontWeight ?? 600),
    textColor: partial.textColor ?? "#11131f",
    textFillMode: normalizeFillMode(partial.textFillMode ?? "solid", "solid"),
    textGradientFrom: partial.textGradientFrom ?? "#11131f",
    textGradientTo: partial.textGradientTo ?? "#6f7380",
    textGradientAngle: normalizeGradientAngle(partial.textGradientAngle ?? 90, 90),
    textFillImageSrc: partial.textFillImageSrc ?? null,
    textFillImageScale: getTextImageScale(partial),
    textFillImageX: getTextImageX(partial),
    textFillImageY: getTextImageY(partial),
    tracking: normalizeTracking(partial.tracking ?? 0),
    textUnderline: Boolean(partial.textUnderline),
    textStrikethrough: Boolean(partial.textStrikethrough),
    textCase: normalizeTextCase(partial.textCase),
    textScript: normalizeTextScript(partial.textScript),
    textAlign: normalizeTextAlign(partial.textAlign ?? "left"),
    lineHeight: clamp(Number(partial.lineHeight ?? 1.2), 0.8, 3),
    wordSpacing: clamp(Number(partial.wordSpacing ?? partial.letterSpacing ?? 0), -5, 40),
    fill: partial.fill ?? "#595959",
    shapeFillMode: normalizeFillMode(partial.shapeFillMode ?? "solid", "solid"),
    shapeGradientFrom: partial.shapeGradientFrom ?? "#595959",
    shapeGradientTo: partial.shapeGradientTo ?? "#9d9d9d",
    shapeGradientAngle: normalizeGradientAngle(partial.shapeGradientAngle ?? 90, 90),
    shapeFillImageSrc: partial.shapeFillImageSrc ?? null,
    shapeFillImageScale: getShapeImageScale(partial),
    shapeFillImageX: getShapeImageX(partial),
    shapeFillImageY: getShapeImageY(partial),
    stroke: partial.stroke ?? "#11131f",
    strokeWidth: partial.strokeWidth ?? 0,
    strokeTop: clamp(Number(partial.strokeTop ?? partial.strokeWidth ?? 0) || 0, 0, 80),
    strokeRight: clamp(Number(partial.strokeRight ?? partial.strokeWidth ?? 0) || 0, 0, 80),
    strokeBottom: clamp(Number(partial.strokeBottom ?? partial.strokeWidth ?? 0) || 0, 0, 80),
    strokeLeft: clamp(Number(partial.strokeLeft ?? partial.strokeWidth ?? 0) || 0, 0, 80),
    radius: partial.radius ?? 0,
    src: partial.src ?? null,
    shapeKind: partial.shapeKind ?? null,
    previewFullWidth: Boolean(partial.previewFullWidth),
    imageFit: partial.imageFit ?? "cover",
    focalX: partial.focalX ?? 50,
    focalY: partial.focalY ?? 50,
    imageBrightness: normalizeImageFilterValue(partial.imageBrightness ?? 100, "percent"),
    imageContrast: normalizeImageFilterValue(partial.imageContrast ?? 100, "percent"),
    imageSaturation: normalizeImageFilterValue(partial.imageSaturation ?? 100, "percent"),
    imageBlur: normalizeImageFilterValue(partial.imageBlur ?? 0, "blur"),
    imageGrayscale: clamp(Number(partial.imageGrayscale ?? 0), 0, 100),
    imageSepia: clamp(Number(partial.imageSepia ?? 0), 0, 100),
    imageHue: normalizeImageFilterValue(partial.imageHue ?? 0, "hue"),
    aiVersionHistory: Array.isArray(partial.aiVersionHistory)
      ? [...partial.aiVersionHistory]
      : (partial.type === "image" && partial.src ? [partial.src] : []),
    aiVersionIndex: Number.isInteger(partial.aiVersionIndex)
      ? partial.aiVersionIndex
      : 0,
    iconName: partial.iconName ?? state.activeIconName,
    iconColor: partial.iconColor ?? "#1f1f1f",
    iconStrokeWidth: partial.iconStrokeWidth ?? 1.75,
    groupId: partial.groupId ?? null,
    componentId: partial.componentId ?? null,
    componentRoot: Boolean(partial.componentRoot),
    componentName: partial.componentName ?? null,
    componentPadding: clamp(Number(partial.componentPadding ?? 0) || 0, 0, 160),
    componentMarginTop: clamp(Number(partial.componentMarginTop ?? 0) || 0, -300, 1200),
    isLocked: Boolean(partial.isLocked),
    layerName: partial.layerName ?? createDefaultLayerName(partial.type, partial.shapeKind),
  };

  if (item.type === "image") {
    ensureImageVersionState(item);
  }

  state.elements.push(item);
  ensureCanvasHeightForContent(item.y + item.height);
  markCurrentViewDirty();
  normalizeOrder();
  if (item.type === "text" && partial.startEditing) {
    state.pendingTextEditId = item.id;
  }
  selectElement(item.id);
  return item;
}

function groupSelectedElements() {
  const selectedIds = getUnlockedSelectedIds();
  if (selectedIds.length < 2) {
    if (getSelectedIds().length > 0 && selectedIds.length === 0) {
      setStatus("Selected layer is locked.");
      return false;
    }
    setStatus("Select at least 2 elements to group.");
    return false;
  }
  const groupId = `group_${state.nextGroupIndex}`;
  state.nextGroupIndex += 1;
  state.elements.forEach((item) => {
    if (selectedIds.includes(item.id)) {
      item.groupId = groupId;
    }
  });
  markCurrentViewDirty();
  render();
  setStatus(`Grouped ${selectedIds.length} elements.`);
  return true;
}

function ungroupSelectedElements() {
  const selectedIds = new Set(getUnlockedSelectedIds());
  if (selectedIds.size === 0) {
    if (getSelectedIds().length > 0) {
      setStatus("Selected layer is locked.");
      return false;
    }
    setStatus("Select grouped elements to ungroup.");
    return false;
  }
  const groupsToClear = new Set(
    state.elements
      .filter((item) => selectedIds.has(item.id) && item.groupId)
      .map((item) => item.groupId)
  );
  if (groupsToClear.size === 0) {
    setStatus("No grouped elements selected.");
    return false;
  }
  let affected = 0;
  state.elements.forEach((item) => {
    if (item.groupId && groupsToClear.has(item.groupId)) {
      item.groupId = null;
      affected += 1;
    }
  });
  markCurrentViewDirty();
  render();
  setStatus(`Ungrouped ${affected} element${affected === 1 ? "" : "s"}.`);
  return true;
}

function addShapeOverlay(shapeType) {
  const byType = {
    rectangle: { width: 320, height: 180 },
    circle: { width: 220, height: 220, radius: 0 },
    triangle: { width: 240, height: 220, radius: 0 },
    line: { width: 260, height: 10, fill: "#a9a9a9", strokeWidth: 0, radius: 0 },
    star: { width: 240, height: 240, radius: 0 },
    polygon: { width: 240, height: 220, radius: 0 },
  };
  const config = byType[shapeType] || byType.rectangle;
  const insert = getDefaultInsertPoint(config.width, config.height);
  const base = {
    x: insert.x,
    y: insert.y,
    fill: "#595959",
    stroke: "#11131f",
    strokeWidth: 0,
    radius: 0,
  };
  addElement({
    type: "shape",
    shapeKind: shapeType,
    ...base,
    ...config,
  });
  setActiveTool("select");
}

function addIconOverlay(iconName) {
  state.activeIconName = resolveSafeIconName(iconName || state.activeIconName);
  const insert = getDefaultInsertPoint(48, 48);
  addElement({
    type: "icon",
    iconName: state.activeIconName,
    iconColor: "#1f1f1f",
    iconStrokeWidth: 1.75,
    x: insert.x,
    y: insert.y,
    width: 48,
    height: 48,
  });
  setActiveTool("select");
}

function addTextOverlay(x = null, y = null) {
  const fallbackPoint = getDefaultTextInsertPoint();
  const defaults = measureTextBounds("Text", {
    fontSize: 24,
    fontFamily: DEFAULT_TEXT_FONT_FAMILY,
    fontWeight: "400",
    lineHeight: 1.2,
    tracking: 0,
    wordSpacing: 0,
  });
  addElement({
    type: "text",
    text: "Text",
    x: x == null ? fallbackPoint.x : Math.round(x),
    y: y == null ? fallbackPoint.y : Math.round(y),
    width: defaults.width,
    height: defaults.height,
    fontSize: 24,
    fontFamily: DEFAULT_TEXT_FONT_FAMILY,
    fontWeight: "400",
    textColor: "#11131f",
    startEditing: true,
  });
}

function removeSelected() {
  const selectedIds = new Set(getUnlockedSelectedIds());
  if (selectedIds.size === 0) {
    if (getSelectedIds().length > 0) setStatus("Selected layer is locked.");
    return;
  }
  state.elements = state.elements.filter((item) => !selectedIds.has(item.id));
  markCurrentViewDirty();
  state.selectedId = null;
  state.selectedIds = [];
  normalizeOrder();
  render();
}

function removeElementById(id) {
  const exists = state.elements.some((item) => item.id === id);
  if (!exists) return;
  const item = state.elements.find((entry) => entry.id === id);
  if (isItemLocked(item)) {
    setStatus("Layer is locked.");
    return;
  }
  state.elements = state.elements.filter((item) => item.id !== id);
  markCurrentViewDirty();
  if (state.selectedId === id) {
    state.selectedId = null;
  }
  state.selectedIds = getSelectedIds().filter((selectedId) => selectedId !== id);
  if (state.selectedIds.length === 0) {
    state.selectedId = null;
  } else if (!state.selectedIds.includes(state.selectedId)) {
    state.selectedId = state.selectedIds[state.selectedIds.length - 1] || null;
  }
  normalizeOrder();
  render();
}

function duplicateElementById(id) {
  const item = state.elements.find((node) => node.id === id);
  if (!item) return;
  if (isItemLocked(item)) {
    setStatus("Layer is locked.");
    return;
  }
  addElement({
    ...item,
    x: item.x + 24,
    y: item.y + 24,
  });
}

function duplicateSelected() {
  const selectedIds = getUnlockedSelectedIds();
  if (selectedIds.length === 0) {
    if (getSelectedIds().length > 0) setStatus("Selected layer is locked.");
    return;
  }
  selectedIds.forEach((id) => {
    const item = state.elements.find((node) => node.id === id);
    if (!item) return;
    addElement({
      ...item,
      groupId: null,
      x: item.x + 24,
      y: item.y + 24,
    });
  });
}

function bringSelectedToFront() {
  const selectedIds = new Set(getUnlockedSelectedIds());
  if (selectedIds.size === 0) {
    if (getSelectedIds().length > 0) setStatus("Selected layer is locked.");
    return;
  }
  const selectedItems = state.elements.filter((node) => selectedIds.has(node.id));
  state.elements = state.elements.filter((node) => !selectedIds.has(node.id));
  state.elements.push(...selectedItems);
  markCurrentViewDirty();
  normalizeOrder();
  render();
}

function sendSelectedToBack() {
  const selectedIds = new Set(getUnlockedSelectedIds());
  if (selectedIds.size === 0) {
    if (getSelectedIds().length > 0) setStatus("Selected layer is locked.");
    return;
  }
  const selectedItems = state.elements.filter((node) => selectedIds.has(node.id));
  state.elements = state.elements.filter((node) => !selectedIds.has(node.id));
  state.elements.unshift(...selectedItems);
  markCurrentViewDirty();
  normalizeOrder();
  render();
}

function nudgeSelectedElements(deltaX, deltaY) {
  const selectedIds = new Set(getUnlockedSelectedIds());
  if (selectedIds.size === 0) {
    if (getSelectedIds().length > 0) setStatus("Selected layer is locked.");
    return false;
  }
  let changed = false;
  state.elements.forEach((item) => {
    if (!selectedIds.has(item.id)) return;
    const nextX = clamp(item.x + deltaX, -item.width + 20, state.canvas.width - 20);
    const nextY = clamp(item.y + deltaY, -item.height + 20, state.canvas.height - 20);
    if (nextX !== item.x || nextY !== item.y) {
      item.x = nextX;
      item.y = nextY;
      changed = true;
    }
  });
  if (changed) {
    markCurrentViewDirty();
    render();
  }
  return changed;
}

function renderElement(item) {
  const node = document.createElement("div");
  node.className = "bf-node";
  node.dataset.id = item.id;
  node.style.left = `${item.x}px`;
  node.style.top = `${item.y}px`;
  node.style.width = `${item.width}px`;
  node.style.height = `${item.height}px`;
  node.style.opacity = String(item.opacity);
  node.style.zIndex = String(item.z + 1);
  node.style.transform = `rotate(${item.rotation}deg)`;

  if (item.type === "text") {
    node.classList.add("bf-node-text");
    const textCase = normalizeTextCase(item.textCase);
    const textScript = normalizeTextScript(item.textScript);
    const effectiveFontSize = getEffectiveTextFontSize(item);
    const textMode = normalizeFillMode(item.textFillMode, "solid");
    if (textMode === "gradient") {
      node.style.color = "transparent";
      node.style.backgroundImage = buildGradientCss(item.textGradientFrom, item.textGradientTo, item.textGradientAngle);
      node.style.backgroundClip = "text";
      node.style.webkitBackgroundClip = "text";
    } else if (textMode === "image" && item.textFillImageSrc) {
      node.style.color = "transparent";
      node.style.backgroundImage = `url(${item.textFillImageSrc})`;
      node.style.backgroundSize = `${getTextImageScale(item)}% auto`;
      node.style.backgroundPosition = `${getTextImageX(item)}% ${getTextImageY(item)}%`;
      node.style.backgroundRepeat = "no-repeat";
      node.style.backgroundClip = "text";
      node.style.webkitBackgroundClip = "text";
    } else if (textMode === "none") {
      node.style.color = "transparent";
      node.style.backgroundImage = "none";
      node.style.backgroundSize = "";
      node.style.backgroundPosition = "";
      node.style.backgroundRepeat = "";
      node.style.backgroundClip = "";
      node.style.webkitBackgroundClip = "";
    } else {
      node.style.color = item.textColor;
      node.style.backgroundImage = "none";
      node.style.backgroundSize = "";
      node.style.backgroundPosition = "";
      node.style.backgroundRepeat = "";
      node.style.backgroundClip = "";
      node.style.webkitBackgroundClip = "";
    }
    node.style.fontSize = `${effectiveFontSize}px`;
    node.style.fontFamily = item.fontFamily;
    node.style.fontWeight = normalizeFontWeight(item.fontWeight ?? 600);
    node.style.textAlign = normalizeTextAlign(item.textAlign);
    node.style.textTransform = textCase === "uppercase" ? "uppercase" : "none";
    node.style.fontVariantCaps = textCase === "small-caps" ? "small-caps" : "normal";
    node.style.letterSpacing = `${normalizeTracking(item.tracking ?? 0)}px`;
    node.style.lineHeight = String(clamp(Number(item.lineHeight ?? 1.2), 0.8, 3));
    node.style.wordSpacing = `${clamp(Number(item.wordSpacing ?? 0), -5, 40)}px`;
    node.style.textDecoration = `${item.textUnderline ? "underline" : ""} ${item.textStrikethrough ? "line-through" : ""}`.trim() || "none";
    node.style.paddingTop = textScript === "subscript" ? `${Math.round(Number(item.fontSize || 12) * 0.24)}px` : "0";
    node.style.paddingBottom = textScript === "superscript" ? `${Math.round(Number(item.fontSize || 12) * 0.24)}px` : "0";
    node.textContent = getRenderedTextContent(item);
  }

  if (item.type === "shape") {
    const shape = document.createElement("div");
    shape.className = "bf-node-shape";
    shape.style.background = getShapeFillCss(item);
    const borders = getBorderWidths(item);
    shape.style.borderStyle = "solid";
    shape.style.borderColor = item.stroke;
    shape.style.borderWidth = `${borders.top}px ${borders.right}px ${borders.bottom}px ${borders.left}px`;
    shape.style.borderRadius = item.shapeKind === "circle" ? "50%" : `${item.radius}px`;
    shape.style.clipPath = "none";

    if (item.shapeKind === "triangle") {
      shape.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
      shape.style.border = "none";
    }
    if (item.shapeKind === "star") {
      shape.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
      shape.style.border = "none";
    }
    if (item.shapeKind === "polygon") {
      shape.style.clipPath = "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)";
      shape.style.border = "none";
    }
    if (item.shapeKind === "line") {
      shape.style.background = item.fill;
      shape.style.border = "none";
      shape.style.height = `${Math.max(2, item.height)}px`;
      shape.style.marginTop = `${Math.max(0, (item.height - Math.max(2, item.height)) / 2)}px`;
      shape.style.borderRadius = "999px";
    }
    node.appendChild(shape);
  }

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = "Canvas element";
    img.style.objectFit = item.imageFit || "cover";
    img.style.objectPosition = `${clamp(Number(item.focalX ?? 50), 0, 100)}% ${clamp(Number(item.focalY ?? 50), 0, 100)}%`;
    img.style.filter = buildImageFilterCss(item);
    node.appendChild(img);
  }

  if (item.type === "icon") {
    node.classList.add("bf-node-icon");
    node.style.color = item.iconColor || "#1f1f1f";
    const icon = document.createElement("ion-icon");
    icon.setAttribute("name", resolveSafeIconName(item.iconName));
    icon.style.setProperty("--ionicon-stroke-width", `${(item.iconStrokeWidth ?? 1.75) * 14}px`);
    node.appendChild(icon);
  }

  const selectionIds = getSelectedIds();
  const isPrimarySelected = state.selectedId === item.id;
  if (isItemLocked(item)) {
    node.classList.add("is-locked");
  }
  if (selectionIds.includes(item.id)) {
    node.classList.add("is-selected");
    if (selectionIds.length === 1 && isPrimarySelected) {
      const handle = document.createElement("div");
      handle.className = "bf-resize-handle";
      node.appendChild(handle);
    }
  }

  node.addEventListener("pointerdown", (event) => {
    if (node.classList.contains("is-text-editing") || event.target?.closest?.(".bf-inline-text-editor")) {
      event.stopPropagation();
      return;
    }
    if (state.activeTool === "text") {
      event.preventDefault();
      event.stopPropagation();
      placeFromTool(event);
      return;
    }
    if (item.type === "text" && event.detail > 1) {
      event.stopPropagation();
      return;
    }
    if (isItemLocked(item)) {
      selectElement(item.id, { additive: event.shiftKey || event.metaKey || event.ctrlKey });
      setStatus("Layer is locked.");
      return;
    }
    startDrag(event, item.id);
  });
  node.addEventListener("dblclick", (event) => {
    if (state.isReadOnly) return;
    if (isItemLocked(item)) return;
    if (item.type === "text") {
      event.preventDefault();
      event.stopPropagation();
      startInlineTextEditing(node, item);
    }
  });

  return node;
}

function renderLayers() {
  layerList.innerHTML = "";
  const selectedIds = new Set(getSelectedIds());
  const ordered = [...state.elements].sort((a, b) => b.z - a.z);
  ordered.forEach((item) => {
    const li = document.createElement("li");
    li.className = `bf-layer-item${selectedIds.has(item.id) ? " is-selected" : ""}`;
    li.draggable = true;
    li.dataset.layerId = item.id;

    const grip = document.createElement("span");
    grip.className = "bf-layer-grip";
    grip.textContent = "⋮⋮";
    grip.setAttribute("aria-hidden", "true");

    const nameInput = document.createElement("input");
    nameInput.className = "bf-layer-name";
    nameInput.type = "text";
    nameInput.value = item.layerName || getLayerLabel(item.type, item.shapeKind);
    nameInput.addEventListener("pointerdown", (event) => event.stopPropagation());
    nameInput.addEventListener("click", (event) => event.stopPropagation());
    nameInput.addEventListener("input", () => {
      if (state.isReadOnly) return;
      item.layerName = nameInput.value || getLayerLabel(item.type, item.shapeKind);
      markCurrentViewDirty();
    });

    li.appendChild(grip);
    li.appendChild(nameInput);

    const badges = document.createElement("div");
    badges.className = "bf-layer-badges";

    const lockBadge = document.createElement("button");
    lockBadge.type = "button";
    lockBadge.className = "bf-layer-badge";
    lockBadge.title = item.isLocked ? "Unlock Layer" : "Lock Layer";
    lockBadge.setAttribute("aria-label", item.isLocked ? "Unlock Layer" : "Lock Layer");
    lockBadge.innerHTML = item.isLocked ? '<i data-lucide="lock"></i>' : '<i data-lucide="unlock"></i>';
    lockBadge.addEventListener("pointerdown", (event) => event.stopPropagation());
    lockBadge.addEventListener("click", (event) => {
      event.stopPropagation();
      runWithHistory(() => {
        item.isLocked = !item.isLocked;
        markCurrentViewDirty();
        render();
        setStatus(item.isLocked ? "Layer locked." : "Layer unlocked.");
      }, "layer-lock");
    });

    const duplicateBadge = document.createElement("button");
    duplicateBadge.type = "button";
    duplicateBadge.className = "bf-layer-badge";
    duplicateBadge.title = "Duplicate Layer";
    duplicateBadge.setAttribute("aria-label", "Duplicate Layer");
    duplicateBadge.innerHTML = '<i data-lucide="copy"></i>';
    duplicateBadge.addEventListener("pointerdown", (event) => event.stopPropagation());
    duplicateBadge.addEventListener("click", (event) => {
      event.stopPropagation();
      runWithHistory(() => duplicateElementById(item.id), "layer-action");
    });

    const deleteBadge = document.createElement("button");
    deleteBadge.type = "button";
    deleteBadge.className = "bf-layer-badge bf-layer-badge-danger";
    deleteBadge.title = "Delete Layer";
    deleteBadge.setAttribute("aria-label", "Delete Layer");
    deleteBadge.innerHTML = '<i data-lucide="trash-2"></i>';
    deleteBadge.addEventListener("pointerdown", (event) => event.stopPropagation());
    deleteBadge.addEventListener("click", (event) => {
      event.stopPropagation();
      runWithHistory(() => removeElementById(item.id), "layer-action");
    });

    badges.appendChild(lockBadge);
    badges.appendChild(duplicateBadge);
    badges.appendChild(deleteBadge);
    li.appendChild(badges);

    li.addEventListener("click", (event) => selectElement(item.id, { additive: event.shiftKey || event.metaKey || event.ctrlKey }));
    li.addEventListener("dragstart", (event) => {
      state.draggingLayerId = item.id;
      li.classList.add("is-dragging");
      event.dataTransfer?.setData("text/plain", item.id);
      if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
    });
    li.addEventListener("dragend", () => {
      state.draggingLayerId = null;
      li.classList.remove("is-dragging");
      layerList.querySelectorAll(".bf-layer-item").forEach((node) => node.classList.remove("is-drop-target"));
    });
    li.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (!state.draggingLayerId || state.draggingLayerId === item.id) return;
      li.classList.add("is-drop-target");
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
    });
    li.addEventListener("dragleave", () => {
      li.classList.remove("is-drop-target");
    });
    li.addEventListener("drop", (event) => {
      event.preventDefault();
      li.classList.remove("is-drop-target");
      if (!state.draggingLayerId || state.draggingLayerId === item.id) return;
      const bounds = li.getBoundingClientRect();
      const insertAfter = event.clientY > bounds.top + bounds.height / 2;
      reorderLayer(state.draggingLayerId, item.id, insertAfter);
    });
    layerList.appendChild(li);
  });
}

function renderPageDrawer() {
  if (!pageThumbList) return;
  pageThumbList.innerHTML = "";
  const centerThumbPreview = (thumbNode, previewNode, canvasState) => {
    const rect = thumbNode.getBoundingClientRect();
    const thumbWidth = rect.width > 0 ? rect.width : 112;
    const thumbHeight = rect.height > 0 ? rect.height : 84;
    const scale = Math.min(thumbWidth / canvasState.width, thumbHeight / canvasState.height);
    const scaledWidth = canvasState.width * scale;
    const scaledHeight = canvasState.height * scale;
    previewNode.style.left = `${Math.round((thumbWidth - scaledWidth) / 2)}px`;
    previewNode.style.top = `${Math.round((thumbHeight - scaledHeight) / 2)}px`;
    previewNode.style.transform = `scale(${scale})`;
  };

  state.pages.forEach((page) => {
    const li = document.createElement("li");
    li.className = `bf-page-item${page.id === state.currentPageId ? " is-active" : ""}`;
    li.dataset.pageId = page.id;

    const thumb = document.createElement("div");
    thumb.className = "bf-page-thumb";

    const badgeActions = document.createElement("div");
    badgeActions.className = "bf-page-badges";

    const duplicateBadge = document.createElement("button");
    duplicateBadge.type = "button";
    duplicateBadge.className = "bf-page-badge";
    duplicateBadge.title = "Duplicate Page";
    duplicateBadge.setAttribute("aria-label", "Duplicate Page");
    duplicateBadge.innerHTML = '<i data-lucide="copy"></i>';
    duplicateBadge.addEventListener("pointerdown", (event) => event.stopPropagation());
    duplicateBadge.addEventListener("click", (event) => {
      event.stopPropagation();
      runWithHistory(() => duplicatePage(page.id), "page-duplicate");
    });

    const deleteBadge = document.createElement("button");
    deleteBadge.type = "button";
    deleteBadge.className = "bf-page-badge bf-page-badge-danger";
    deleteBadge.title = "Delete Page";
    deleteBadge.setAttribute("aria-label", "Delete Page");
    deleteBadge.innerHTML = '<i data-lucide="trash-2"></i>';
    deleteBadge.addEventListener("pointerdown", (event) => event.stopPropagation());
    deleteBadge.addEventListener("click", (event) => {
      event.stopPropagation();
      runWithHistory(() => deletePage(page.id), "page-delete");
    });

    badgeActions.appendChild(duplicateBadge);
    badgeActions.appendChild(deleteBadge);
    thumb.appendChild(badgeActions);

    const preview = document.createElement("div");
    preview.className = "bf-page-thumb-canvas";
    const isCurrentPage = page.id === state.currentPageId;
    const pageViewKey = isCurrentPage ? state.currentView : (page.currentView || "desktop");
    const pageViewState = isCurrentPage
      ? { canvas: state.canvas, elements: state.elements }
      : (page.viewStates?.[pageViewKey] || createDefaultViewState(pageViewKey));
    const canvasState = pageViewState.canvas || VIEW_PRESETS.desktop;
    preview.style.background = canvasState.background || "#f6f7fb";

    // Initial fallback centering before DOM mount.
    centerThumbPreview(thumb, preview, canvasState);
    preview.style.width = `${canvasState.width}px`;
    preview.style.height = `${canvasState.height}px`;

    const previewElements = [...(pageViewState.elements || [])].sort((a, b) => (a.z || 0) - (b.z || 0)).slice(0, 48);
    previewElements.forEach((item) => {
      const layer = document.createElement("span");
      layer.className = "bf-page-thumb-layer";
      layer.style.left = `${item.x || 0}px`;
      layer.style.top = `${item.y || 0}px`;
      layer.style.width = `${Math.max(2, item.width || 0)}px`;
      layer.style.height = `${Math.max(2, item.height || 0)}px`;
      layer.style.opacity = String(item.opacity ?? 1);

      if (item.type === "text") {
        const textMode = normalizeFillMode(item.textFillMode, "solid");
        layer.style.background =
          textMode === "none"
            ? "transparent"
            : textMode === "gradient"
              ? buildGradientCss(item.textGradientFrom, item.textGradientTo, item.textGradientAngle)
              : textMode === "image"
                ? "#8f8f8f"
                : (item.textColor || "#11131f");
      } else if (item.type === "shape") {
        layer.style.background = getShapeFillCss(item);
      } else if (item.type === "image") {
        layer.style.background = "#8f8f8f";
      } else if (item.type === "icon") {
        layer.style.background = item.iconColor || "#1f1f1f";
      } else {
        layer.style.background = "#666";
      }
      preview.appendChild(layer);
    });

    thumb.appendChild(preview);
    li.appendChild(thumb);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "bf-page-label-input";
    nameInput.value = page.name || "Untitled Page";
    nameInput.addEventListener("pointerdown", (event) => event.stopPropagation());
    nameInput.addEventListener("click", (event) => event.stopPropagation());
    nameInput.addEventListener("input", () => {
      if (state.isReadOnly) return;
      page.name = nameInput.value.trim() || "Untitled Page";
    });
    nameInput.addEventListener("blur", () => {
      if (state.isReadOnly) return;
      if (!nameInput.value.trim()) {
        page.name = "Untitled Page";
        nameInput.value = page.name;
      }
    });
    li.appendChild(nameInput);

    li.addEventListener("click", () => {
      if (page.id === state.currentPageId) return;
      runWithHistory(() => switchPage(page.id), "page-switch");
    });
    pageThumbList.appendChild(li);
    // Recenter using actual rendered size after mount.
    requestAnimationFrame(() => centerThumbPreview(thumb, preview, canvasState));
  });
}

function renderInspector() {
  const selectedIds = getSelectedIds();
  const selected = selectedIds.length === 1 ? getSelected() : null;
  const hasSingleSelection = Boolean(selected);

  inspectorEmpty.classList.toggle("hidden", hasSingleSelection);
  inspectorBody.classList.toggle("hidden", !hasSingleSelection);

  if (!hasSingleSelection) {
    if (inspectorEmpty) {
      inspectorEmpty.textContent = selectedIds.length > 1
        ? "Multiple elements selected. Use Cmd/Ctrl+G to group."
        : "Select an element to edit properties.";
    }
    textFields.classList.add("hidden");
    shapeFields.classList.add("hidden");
    imageFields.classList.add("hidden");
    iconFields.classList.add("hidden");
    updateFillModeInspectorVisibility(null);
    if (propImageAiEditBtn) {
      propImageAiEditBtn.disabled = true;
      propImageAiEditBtn.classList.remove("is-ready");
    }
    updateImageVersionButtons(null);
    const fullWidthRow = propShapePreviewFullWidth?.closest(".bf-transform-toggle-row");
    if (fullWidthRow) fullWidthRow.classList.add("hidden");
    if (propShapePreviewFullWidth) propShapePreviewFullWidth.checked = false;
    focusInspectorSection(inspectorCanvasSection);
    return;
  }

  propX.value = String(Math.round(selected.x));
  propY.value = String(Math.round(selected.y));
  propWidth.value = String(Math.round(selected.width));
  propHeight.value = String(Math.round(selected.height));
  syncRangeNumber(propRotation, propRotationNumber, Math.round(selected.rotation));
  propOpacity.value = String(Math.round(selected.opacity * 100));
  const fullWidthRow = propShapePreviewFullWidth?.closest(".bf-transform-toggle-row");
  const canUsePreviewFullWidth = selected.type === "shape" && selected.shapeKind === "rectangle";
  if (fullWidthRow) fullWidthRow.classList.toggle("hidden", !canUsePreviewFullWidth);
  if (propShapePreviewFullWidth) {
    propShapePreviewFullWidth.checked = Boolean(canUsePreviewFullWidth && selected.previewFullWidth);
    propShapePreviewFullWidth.disabled = !canUsePreviewFullWidth;
  }

  textFields.classList.toggle("hidden", selected.type !== "text");
  shapeFields.classList.toggle("hidden", selected.type !== "shape");
  imageFields.classList.toggle("hidden", selected.type !== "image");
  iconFields.classList.toggle("hidden", selected.type !== "icon");
  if (propImageAiEditBtn && selected.type !== "image") {
    propImageAiEditBtn.disabled = true;
    propImageAiEditBtn.classList.remove("is-ready");
  }
  if (selected.type !== "image") {
    updateImageVersionButtons(null);
  }

  if (selected.type === "text") {
    focusInspectorSection(inspectorTextSection);
    syncRangeNumber(propFontSize, propFontSizeNumber, clamp(Number(selected.fontSize) || 12, 8, 2000));
    propFontFamily.value = selected.fontFamily;
    if (propFontWeight) propFontWeight.value = normalizeFontWeight(selected.fontWeight ?? 600);
    propTextColor.value = selected.textColor;
    setHexInputValue(propTextColorHex, selected.textColor);
    if (propTextFillMode) propTextFillMode.value = normalizeFillMode(selected.textFillMode, "solid");
    if (propTextGradientFrom) propTextGradientFrom.value = normalizeHexColor(selected.textGradientFrom, "#11131f");
    if (propTextGradientTo) propTextGradientTo.value = normalizeHexColor(selected.textGradientTo, "#6f7380");
    if (propTextGradientAngle) propTextGradientAngle.value = String(normalizeGradientAngle(selected.textGradientAngle, 90));
    if (propTextImageScale) propTextImageScale.value = String(getTextImageScale(selected));
    if (propTextImageX) propTextImageX.value = String(getTextImageX(selected));
    if (propTextImageY) propTextImageY.value = String(getTextImageY(selected));
    setTextAlignButtons(selected.textAlign || "left");
    setTextDecorationButtons(selected);
    setTextOpenTypeButtons(selected);
    syncRangeNumber(propTracking, propTrackingNumber, normalizeTracking(selected.tracking ?? 0));
    syncRangeNumber(propLineHeight, propLineHeightNumber, clamp(Number(selected.lineHeight ?? 1.2), 0.8, 3));
    syncRangeNumber(propWordSpacing, propWordSpacingNumber, clamp(Number(selected.wordSpacing ?? 0), -5, 40));
    updateFillModeInspectorVisibility(selected);
  }

  if (selected.type === "shape") {
    focusInspectorSection(inspectorShapeSection);
    propFill.value = selected.fill;
    setHexInputValue(propFillHex, selected.fill);
    if (propShapeFillMode) propShapeFillMode.value = normalizeFillMode(selected.shapeFillMode, "solid");
    if (propShapeGradientFrom) propShapeGradientFrom.value = normalizeHexColor(selected.shapeGradientFrom, "#595959");
    if (propShapeGradientTo) propShapeGradientTo.value = normalizeHexColor(selected.shapeGradientTo, "#9d9d9d");
    if (propShapeGradientAngle) propShapeGradientAngle.value = String(normalizeGradientAngle(selected.shapeGradientAngle, 90));
    propStroke.value = selected.stroke;
    setHexInputValue(propStrokeHex, selected.stroke);
    const borders = getBorderWidths(selected);
    syncRangeNumber(propStrokeWidth, propStrokeWidthNumber, getRepresentativeStrokeWidth(selected));
    if (propStrokeTop) propStrokeTop.value = String(borders.top);
    if (propStrokeRight) propStrokeRight.value = String(borders.right);
    if (propStrokeBottom) propStrokeBottom.value = String(borders.bottom);
    if (propStrokeLeft) propStrokeLeft.value = String(borders.left);
    syncRangeNumber(propRadius, propRadiusNumber, clamp(Number(selected.radius) || 0, 0, 200));
    updateFillModeInspectorVisibility(selected);
  }

  if (selected.type === "image") {
    focusInspectorSection(inspectorImageSection);
    ensureImageVersionState(selected);
    propImageFit.value = selected.imageFit || "cover";
    propImageFocalX.value = String(clamp(Number(selected.focalX ?? 50), 0, 100));
    propImageFocalY.value = String(clamp(Number(selected.focalY ?? 50), 0, 100));
    if (propImageBrightness) propImageBrightness.value = String(normalizeImageFilterValue(selected.imageBrightness ?? 100, "percent"));
    if (propImageContrast) propImageContrast.value = String(normalizeImageFilterValue(selected.imageContrast ?? 100, "percent"));
    if (propImageSaturation) propImageSaturation.value = String(normalizeImageFilterValue(selected.imageSaturation ?? 100, "percent"));
    if (propImageBlur) propImageBlur.value = String(normalizeImageFilterValue(selected.imageBlur ?? 0, "blur"));
    if (propImageGrayscale) propImageGrayscale.value = String(clamp(Number(selected.imageGrayscale ?? 0), 0, 100));
    if (propImageSepia) propImageSepia.value = String(clamp(Number(selected.imageSepia ?? 0), 0, 100));
    if (propImageHue) propImageHue.value = String(normalizeImageFilterValue(selected.imageHue ?? 0, "hue"));
    if (propImageAiEditBtn) {
      const ready = Boolean(selected.src) && hasEnoughCredits(1) && !state.isReadOnly;
      propImageAiEditBtn.disabled = !ready;
      propImageAiEditBtn.classList.toggle("is-ready", ready);
    }
    updateImageVersionButtons(selected);
  }

  if (selected.type === "icon") {
    focusInspectorSection(inspectorIconSection);
    if (propIconName) propIconName.value = resolveSafeIconName(selected.iconName);
    if (propIconColor) propIconColor.value = selected.iconColor || "#1f1f1f";
    setHexInputValue(propIconColorHex, selected.iconColor || "#1f1f1f");
    syncRangeNumber(propIconStrokeWidth, propIconStrokeWidthNumber, clamp(Number(selected.iconStrokeWidth ?? 1.75), 1, 4));
  }
}

function render() {
  designCanvas.innerHTML = "";
  updateCanvasBackground();
  const ordered = [...state.elements].sort((a, b) => a.z - b.z);
  ordered.forEach((item) => {
    designCanvas.appendChild(renderElement(item));
  });
  state.snapGuides.forEach((guide) => {
    const line = document.createElement("div");
    line.className = `bf-snap-guide ${guide.axis === "x" ? "bf-snap-guide-v" : "bf-snap-guide-h"}`;
    if (guide.axis === "x") {
      line.style.left = `${guide.position}px`;
    } else {
      line.style.top = `${guide.position}px`;
    }
    designCanvas.appendChild(line);
  });
  if (state.textDraw?.active) {
    const left = Math.min(state.textDraw.startX, state.textDraw.currentX);
    const top = Math.min(state.textDraw.startY, state.textDraw.currentY);
    const width = Math.max(1, Math.abs(state.textDraw.currentX - state.textDraw.startX));
    const height = Math.max(1, Math.abs(state.textDraw.currentY - state.textDraw.startY));
    const preview = document.createElement("div");
    preview.className = "bf-text-draw-preview";
    preview.style.left = `${left}px`;
    preview.style.top = `${top}px`;
    preview.style.width = `${width}px`;
    preview.style.height = `${height}px`;
    designCanvas.appendChild(preview);
  }

  renderLayers();
  renderPageDrawer();
  renderInspector();
  updateSelectionActionButtons();
  hydrateIcons();
  if (state.pendingTextEditId) {
    const pendingId = state.pendingTextEditId;
    state.pendingTextEditId = null;
    requestAnimationFrame(() => {
      const item = state.elements.find((entry) => entry.id === pendingId);
      if (!item || item.type !== "text" || isItemLocked(item) || state.isReadOnly) return;
      const node = designCanvas.querySelector(`.bf-node[data-id="${pendingId}"]`);
      if (!node) return;
      startInlineTextEditing(node, item);
    });
  }
}

function startDrag(event, id) {
  if (isSpacePanPressed || event.button === 1) return;
  if (event.button !== 0) return;
  if (state.isReadOnly) return;
  event.stopPropagation();
  if (event.shiftKey || event.metaKey || event.ctrlKey) {
    selectElement(id, { additive: true });
    return;
  }
  if (!isSelected(id)) {
    selectElement(id);
  }
  const selected = getSelected();
  if (!selected) return;

  const target = event.target;
  const isResize = target.classList.contains("bf-resize-handle");
  const directItem = state.elements.find((item) => item.id === id);
  if (isItemLocked(directItem)) {
    setStatus("Layer is locked.");
    return;
  }
  let moveIds = getUnlockedSelectedIds();
  if ((!moveIds || moveIds.length === 0) && directItem) {
    moveIds = [directItem.id];
  }
  if (directItem?.groupId) {
    const groupIds = getGroupMemberIds(directItem.groupId).filter((groupId) => {
      const groupItem = state.elements.find((entry) => entry.id === groupId);
      return groupItem && !isItemLocked(groupItem);
    });
    if (groupIds.length > 0) {
      moveIds = groupIds;
      state.selectedIds = groupIds;
      state.selectedId = id;
      render();
    }
  }

  const origins = {};
  moveIds.forEach((moveId) => {
    const item = state.elements.find((entry) => entry.id === moveId);
    if (!item) return;
    origins[moveId] = { x: item.x, y: item.y };
  });

  state.drag = {
    mode: isResize ? "resize" : "move",
    id,
    moveIds,
    origins,
    startX: event.clientX,
    startY: event.clientY,
    originX: selected.x,
    originY: selected.y,
    originW: selected.width,
    originH: selected.height,
  };

  beginHistoryGroup("drag");
  target.setPointerCapture(event.pointerId);
}

function onPointerMove(event) {
  if (state.textDraw?.active) {
    const point = getCanvasPoint(event);
    state.textDraw.currentX = point.x;
    state.textDraw.currentY = point.y;
    render();
    return;
  }
  if (state.pan?.active && canvasPanel) {
    const deltaX = event.clientX - state.pan.startX;
    const deltaY = event.clientY - state.pan.startY;
    canvasPanel.scrollLeft = state.pan.startScrollLeft - deltaX;
    canvasPanel.scrollTop = state.pan.startScrollTop - deltaY;
    return;
  }

  if (!state.drag) return;
  const selected = getSelected();
  if (!selected || selected.id !== state.drag.id) return;

  const deltaX = (event.clientX - state.drag.startX) / state.zoom;
  const deltaY = (event.clientY - state.drag.startY) / state.zoom;

  if (state.drag.mode === "move") {
    const primaryOrigin = state.drag.origins?.[selected.id] || { x: state.drag.originX, y: state.drag.originY };
    const desiredBottom = primaryOrigin.y + deltaY + selected.height;
    ensureCanvasHeightForContent(desiredBottom);
    const proposedX = clamp(primaryOrigin.x + deltaX, -selected.width + 20, state.canvas.width - 20);
    const proposedY = clamp(primaryOrigin.y + deltaY, -selected.height + 20, state.canvas.height - 20);
    const snapped = computeSnapForMove(selected, proposedX, proposedY);
    const finalPrimaryX = clamp(snapped.x, -selected.width + 20, state.canvas.width - 20);
    const finalPrimaryY = clamp(snapped.y, -selected.height + 20, state.canvas.height - 20);
    const appliedDeltaX = finalPrimaryX - primaryOrigin.x;
    const appliedDeltaY = finalPrimaryY - primaryOrigin.y;
    const idsToMove = Array.isArray(state.drag.moveIds) ? state.drag.moveIds : [selected.id];
    idsToMove.forEach((moveId) => {
      const item = state.elements.find((entry) => entry.id === moveId);
      const origin = state.drag.origins?.[moveId];
      if (!item || !origin) return;
      item.x = clamp(origin.x + appliedDeltaX, -item.width + 20, state.canvas.width - 20);
      item.y = clamp(origin.y + appliedDeltaY, -item.height + 20, state.canvas.height - 20);
    });
    state.snapGuides = snapped.guides;
  } else {
    state.snapGuides = [];
    if (selected.type === "shape" && selected.shapeKind !== "rectangle" && state.drag.originH > 0) {
      const ratio = state.drag.originW / state.drag.originH;
      let nextWidth = state.drag.originW + deltaX;
      let nextHeight = state.drag.originH + deltaY;
      if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        nextWidth = clamp(nextWidth, 20, state.canvas.width);
        nextHeight = nextWidth / ratio;
      } else {
        nextHeight = clamp(nextHeight, 20, state.canvas.height);
        nextWidth = nextHeight * ratio;
      }
      selected.width = clamp(nextWidth, 20, state.canvas.width);
      selected.height = clamp(nextHeight, 20, state.canvas.height);
      ensureCanvasHeightForContent(selected.y + selected.height);
    } else {
      selected.width = clamp(state.drag.originW + deltaX, 20, state.canvas.width);
      selected.height = clamp(state.drag.originH + deltaY, 20, state.canvas.height);
      ensureCanvasHeightForContent(selected.y + selected.height);
    }
  }

  markCurrentViewDirty();
  render();
}

function onPointerUp() {
  if (state.textDraw?.active) {
    const startX = state.textDraw.startX;
    const startY = state.textDraw.startY;
    const endX = state.textDraw.currentX;
    const endY = state.textDraw.currentY;
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);
    const left = Math.min(startX, endX);
    const top = Math.min(startY, endY);
    state.textDraw = null;
    const defaults = measureTextBounds("Text", {
      fontSize: 24,
      fontFamily: DEFAULT_TEXT_FONT_FAMILY,
      fontWeight: "400",
      lineHeight: 1.2,
      tracking: 0,
      wordSpacing: 0,
    });
    const useDefaultSize = width < 40 && height < 24;
    runWithHistory(() => {
      addElement({
        type: "text",
        text: "Text",
        x: Math.round(left),
        y: Math.round(top),
        width: Math.round(useDefaultSize ? defaults.width : width),
        height: Math.round(useDefaultSize ? defaults.height : height),
        fontSize: 24,
        fontFamily: DEFAULT_TEXT_FONT_FAMILY,
        fontWeight: "400",
        textColor: "#11131f",
        startEditing: true,
      });
    }, "add-text");
    setActiveTool("select");
    setStatus("Text added.");
    render();
    return;
  }
  if (state.pan?.active) {
    state.pan = null;
    canvasPanel?.classList.remove("is-panning");
  }
  endHistoryGroup("drag");
  state.drag = null;
  if (state.snapGuides.length > 0) {
    state.snapGuides = [];
    render();
  }
}

function applyInspectorPatch(patch) {
  if (!requireEditableStatus()) return;
  const selected = getSelected();
  if (!selected) return;
  if (isItemLocked(selected)) {
    setStatus("Layer is locked.");
    return;
  }
  beginHistoryGroup("inspector");
  Object.assign(selected, patch);
  ensureCanvasHeightForContent(selected.y + selected.height);
  markCurrentViewDirty();
  render();
}

function getCanvasPoint(event) {
  const rect = designCanvas.getBoundingClientRect();
  return {
    x: clamp((event.clientX - rect.left) / state.zoom, 0, state.canvas.width),
    y: clamp((event.clientY - rect.top) / state.zoom, 0, state.canvas.height),
  };
}

function placeFromTool(event) {
  if (!requireEditableStatus()) return;
  const point = getCanvasPoint(event);

  if (state.activeTool === "text") {
    state.textDraw = {
      active: true,
      startX: point.x,
      startY: point.y,
      currentX: point.x,
      currentY: point.y,
    };
    render();
  }
}

async function applyDroppedImageMask(file, targetElementId = null) {
  if (!requireEditableStatus()) return false;
  const targetId = targetElementId || state.selectedId;
  const target = state.elements.find((item) => item.id === targetId && (item.type === "shape" || item.type === "text"));
  if (!target) {
    setStatus("Select a shape or text layer, then drop an image to mask it.");
    return false;
  }
  const src = await readFileAsDataURL(file);
  const isShape = target.type === "shape";
  runWithHistory(() => {
    if (isShape) {
      target.shapeFillMode = "image";
      target.shapeFillImageSrc = src;
      target.shapeFillImageScale = 100;
      target.shapeFillImageX = 50;
      target.shapeFillImageY = 50;
    } else {
      target.textFillMode = "image";
      target.textFillImageSrc = src;
      target.textFillImageScale = 100;
      target.textFillImageX = 50;
      target.textFillImageY = 50;
    }
    markCurrentViewDirty();
    render();
  }, "image-mask-fill");
  if (isShape && propShapeFillMode) propShapeFillMode.value = "image";
  if (!isShape && propTextFillMode) propTextFillMode.value = "image";
  updateFillModeInspectorVisibility(target);
  setStatus(`${isShape ? "Shape" : "Text"} image mask applied.`);
  return true;
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read image file."));
    reader.readAsDataURL(file);
  });
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function createImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to render an image layer."));
    image.src = src;
  });
}

function createImageFromSvg(svgNode) {
  return new Promise((resolve, reject) => {
    try {
      const xml = new XMLSerializer().serializeToString(svgNode);
      const encoded = encodeURIComponent(xml);
      const src = `data:image/svg+xml;charset=utf-8,${encoded}`;
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Failed to render icon layer."));
      image.src = src;
    } catch (error) {
      reject(error);
    }
  });
}

function drawImageLayer(ctx, item, img) {
  const destW = item.width;
  const destH = item.height;
  const sourceW = img.naturalWidth || img.width;
  const sourceH = img.naturalHeight || img.height;
  const fit = item.imageFit || "cover";
  const focalX = clamp(Number(item.focalX ?? 50), 0, 100) / 100;
  const focalY = clamp(Number(item.focalY ?? 50), 0, 100) / 100;
  const previousFilter = ctx.filter;
  ctx.filter = buildImageFilterCss(item);

  if (fit === "fill") {
    ctx.drawImage(img, 0, 0, destW, destH);
    ctx.filter = previousFilter;
    return;
  }

  if (fit === "contain") {
    const scale = Math.min(destW / sourceW, destH / sourceH);
    const drawW = sourceW * scale;
    const drawH = sourceH * scale;
    const dx = (destW - drawW) * focalX;
    const dy = (destH - drawH) * focalY;
    ctx.drawImage(img, dx, dy, drawW, drawH);
    ctx.filter = previousFilter;
    return;
  }

  const coverScale = Math.max(destW / sourceW, destH / sourceH);
  const cropW = destW / coverScale;
  const cropH = destH / coverScale;
  const sx = (sourceW - cropW) * focalX;
  const sy = (sourceH - cropH) * focalY;
  ctx.drawImage(img, sx, sy, cropW, cropH, 0, 0, destW, destH);
  ctx.filter = previousFilter;
}

async function resolveCanvasFillStyle(ctx, item, width, height) {
  const mode = normalizeFillMode(item.shapeFillMode, "solid");
  if (mode === "none") {
    return null;
  }
  if (mode === "gradient") {
    const angle = normalizeGradientAngle(item.shapeGradientAngle, 90) * (Math.PI / 180);
    const cx = width / 2;
    const cy = height / 2;
    const half = Math.max(width, height) / 2;
    const x0 = cx - Math.cos(angle) * half;
    const y0 = cy - Math.sin(angle) * half;
    const x1 = cx + Math.cos(angle) * half;
    const y1 = cy + Math.sin(angle) * half;
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    gradient.addColorStop(0, normalizeHexColor(item.shapeGradientFrom, "#595959"));
    gradient.addColorStop(1, normalizeHexColor(item.shapeGradientTo, "#9d9d9d"));
    return gradient;
  }
  if (mode === "image" && item.shapeFillImageSrc) {
    try {
      const image = await createImage(item.shapeFillImageSrc);
      return image;
    } catch {
      return normalizeHexColor(item.fill, "#595959");
    }
  }
  return normalizeHexColor(item.fill, "#595959");
}

async function drawShape(ctx, item) {
  const borders = getBorderWidths(item);
  const representativeStroke = getRepresentativeStrokeWidth(item);
  const inset = representativeStroke / 2;
  const width = Math.max(0, item.width - representativeStroke);
  const height = Math.max(0, item.height - representativeStroke);
  const x = inset;
  const y = inset;
  const fillStyle = await resolveCanvasFillStyle(ctx, item, item.width, item.height);
  const mode = normalizeFillMode(item.shapeFillMode, "solid");

  if (item.shapeKind === "line") {
    ctx.beginPath();
    ctx.moveTo(0, item.height / 2);
    ctx.lineTo(item.width, item.height / 2);
    ctx.strokeStyle = fillStyle instanceof HTMLImageElement ? normalizeHexColor(item.fill, "#595959") : fillStyle;
    ctx.lineWidth = Math.max(2, item.height);
    ctx.stroke();
    return;
  }

  ctx.beginPath();
  if (item.shapeKind === "circle") {
    const rx = width / 2;
    const ry = height / 2;
    ctx.ellipse(inset + rx, inset + ry, rx, ry, 0, 0, Math.PI * 2);
  } else if (item.shapeKind === "triangle") {
    ctx.moveTo(x + width / 2, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
  } else if (item.shapeKind === "star") {
    const cx = x + width / 2;
    const cy = y + height / 2;
    const spikes = 5;
    const outerRadius = Math.min(width, height) / 2;
    const innerRadius = outerRadius * 0.45;
    let rotation = Math.PI / 2 * 3;
    const step = Math.PI / spikes;
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i += 1) {
      ctx.lineTo(cx + Math.cos(rotation) * outerRadius, cy + Math.sin(rotation) * outerRadius);
      rotation += step;
      ctx.lineTo(cx + Math.cos(rotation) * innerRadius, cy + Math.sin(rotation) * innerRadius);
      rotation += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
  } else if (item.shapeKind === "polygon") {
    const cx = x + width / 2;
    const cy = y + height / 2;
    const sides = 6;
    const radius = Math.min(width, height) / 2;
    for (let i = 0; i < sides; i += 1) {
      const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
      const px = cx + radius * Math.cos(angle);
      const py = cy + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
  } else {
    const radius = clamp(item.radius, 0, Math.min(width, height) / 2);
    const w = width;
    const h = height;
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }
  ctx.closePath();
  if (mode === "image" && fillStyle instanceof HTMLImageElement) {
    ctx.save();
    ctx.clip();
    const srcW = Math.max(1, fillStyle.naturalWidth || fillStyle.width || 1);
    const srcH = Math.max(1, fillStyle.naturalHeight || fillStyle.height || 1);
    const baseScale = Math.max(item.width / srcW, item.height / srcH);
    const zoomScale = getShapeImageScale(item) / 100;
    const drawW = srcW * baseScale * zoomScale;
    const drawH = srcH * baseScale * zoomScale;
    const dx = (item.width - drawW) * (getShapeImageX(item) / 100);
    const dy = (item.height - drawH) * (getShapeImageY(item) / 100);
    ctx.drawImage(fillStyle, dx, dy, drawW, drawH);
    ctx.restore();
  } else if (mode !== "none" && fillStyle != null) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
  if (item.shapeKind === "rectangle") {
    if (borders.top > 0) {
      ctx.fillStyle = item.stroke;
      ctx.fillRect(0, 0, item.width, borders.top);
    }
    if (borders.right > 0) {
      ctx.fillStyle = item.stroke;
      ctx.fillRect(item.width - borders.right, 0, borders.right, item.height);
    }
    if (borders.bottom > 0) {
      ctx.fillStyle = item.stroke;
      ctx.fillRect(0, item.height - borders.bottom, item.width, borders.bottom);
    }
    if (borders.left > 0) {
      ctx.fillStyle = item.stroke;
      ctx.fillRect(0, 0, borders.left, item.height);
    }
  } else if (representativeStroke > 0) {
    ctx.strokeStyle = item.stroke;
    ctx.lineWidth = representativeStroke;
    ctx.stroke();
  }
}

function measureAdvancedTextWidth(ctx, text, wordSpacing, tracking) {
  const chars = Array.from(String(text || ""));
  if (chars.length === 0) return 0;
  let width = 0;
  chars.forEach((ch, index) => {
    width += ctx.measureText(ch).width;
    if (ch === " ") width += wordSpacing;
    if (index < chars.length - 1) width += tracking;
  });
  return width;
}

function drawAdvancedText(ctx, text, x, y, wordSpacing, tracking) {
  const chars = Array.from(String(text || ""));
  let cursor = x;
  chars.forEach((ch, index) => {
    ctx.fillText(ch, cursor, y);
    cursor += ctx.measureText(ch).width;
    if (ch === " ") cursor += wordSpacing;
    if (index < chars.length - 1) cursor += tracking;
  });
}

async function renderCanvasToPngBlob(canvasState, elements) {
  const canvas = document.createElement("canvas");
  canvas.width = canvasState.width;
  canvas.height = canvasState.height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = canvasState.background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const ordered = [...elements].sort((a, b) => a.z - b.z);

  for (const item of ordered) {
    ctx.save();
    ctx.globalAlpha = item.opacity;
    ctx.translate(item.x, item.y);
    ctx.rotate((item.rotation * Math.PI) / 180);

    if (item.type === "shape") {
      await drawShape(ctx, item);
    }

    if (item.type === "text") {
      const effectiveFontSize = getEffectiveTextFontSize(item);
      const textScript = normalizeTextScript(item.textScript);
      const textMode = normalizeFillMode(item.textFillMode, "solid");
      ctx.textBaseline = "top";
      ctx.font = `${normalizeFontWeight(item.fontWeight ?? 600)} ${effectiveFontSize}px ${item.fontFamily}`;
      if (textMode === "gradient") {
        const angle = normalizeGradientAngle(item.textGradientAngle, 90) * (Math.PI / 180);
        const cx = item.width / 2;
        const cy = item.height / 2;
        const half = Math.max(item.width, item.height) / 2;
        const x0 = cx - Math.cos(angle) * half;
        const y0 = cy - Math.sin(angle) * half;
        const x1 = cx + Math.cos(angle) * half;
        const y1 = cy + Math.sin(angle) * half;
        const textGradient = ctx.createLinearGradient(x0, y0, x1, y1);
        textGradient.addColorStop(0, normalizeHexColor(item.textGradientFrom, "#11131f"));
        textGradient.addColorStop(1, normalizeHexColor(item.textGradientTo, "#6f7380"));
        ctx.fillStyle = textGradient;
      } else if (textMode === "image" && item.textFillImageSrc) {
        try {
          const img = await createImage(item.textFillImageSrc);
          const pattern = ctx.createPattern(img, "no-repeat");
          if (pattern && typeof DOMMatrix === "function" && pattern.setTransform) {
            const srcW = Math.max(1, img.naturalWidth || img.width || 1);
            const srcH = Math.max(1, img.naturalHeight || img.height || 1);
            const baseScale = Math.max(item.width / srcW, item.height / srcH);
            const zoomScale = getTextImageScale(item) / 100;
            const drawW = srcW * baseScale * zoomScale;
            const drawH = srcH * baseScale * zoomScale;
            const dx = (item.width - drawW) * (getTextImageX(item) / 100);
            const dy = (item.height - drawH) * (getTextImageY(item) / 100);
            pattern.setTransform(new DOMMatrix().translate(dx, dy).scale((drawW / srcW), (drawH / srcH)));
            ctx.fillStyle = pattern;
          } else {
            ctx.fillStyle = normalizeHexColor(item.textColor, "#11131f");
          }
        } catch {
          ctx.fillStyle = normalizeHexColor(item.textColor, "#11131f");
        }
      } else if (textMode === "none") {
        ctx.fillStyle = "rgba(0,0,0,0)";
      } else {
        ctx.fillStyle = normalizeHexColor(item.textColor, "#11131f");
      }
      const lines = getCanvasRenderedTextContent(item).split("\n");
      const lineHeight = effectiveFontSize * clamp(Number(item.lineHeight ?? 1.2), 0.8, 3);
      const textAlign = normalizeTextAlign(item.textAlign);
      const wordSpacing = clamp(Number(item.wordSpacing ?? 0), -5, 40);
      const tracking = normalizeTracking(item.tracking ?? 0);
      const scriptOffset = textScript === "superscript"
        ? -(Number(item.fontSize || 12) * 0.22)
        : textScript === "subscript"
          ? (Number(item.fontSize || 12) * 0.22)
          : 0;
      lines.forEach((line, index) => {
        const y = index * lineHeight + scriptOffset;
        const lineWidth = measureAdvancedTextWidth(ctx, line, wordSpacing, tracking);
        let x = 0;
        if (textAlign === "center") {
          x = (item.width - lineWidth) / 2;
        } else if (textAlign === "right") {
          x = item.width - lineWidth;
        }
        drawAdvancedText(ctx, line, x, y, wordSpacing, tracking);
        if (item.textUnderline || item.textStrikethrough) {
          ctx.save();
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = Math.max(1, effectiveFontSize * 0.06);
          if (item.textUnderline) {
            const underlineY = y + effectiveFontSize * 0.92;
            ctx.beginPath();
            ctx.moveTo(x, underlineY);
            ctx.lineTo(x + lineWidth, underlineY);
            ctx.stroke();
          }
          if (item.textStrikethrough) {
            const strikeY = y + effectiveFontSize * 0.56;
            ctx.beginPath();
            ctx.moveTo(x, strikeY);
            ctx.lineTo(x + lineWidth, strikeY);
            ctx.stroke();
          }
          ctx.restore();
        }
      });
    }

    if (item.type === "image" && item.src) {
      const img = await createImage(item.src);
      drawImageLayer(ctx, item, img);
    }

    if (item.type === "icon") {
      const node = designCanvas.querySelector(`.bf-node[data-id="${item.id}"] svg`);
      if (node) {
        const iconImg = await createImageFromSvg(node);
        ctx.drawImage(iconImg, 0, 0, item.width, item.height);
      }
    }

    ctx.restore();
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Failed to render PNG."));
        return;
      }
      resolve(blob);
    }, "image/png");
  });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to encode file."));
    reader.readAsDataURL(blob);
  });
}

async function renderCanvasToPdfBlob(canvasState, elements) {
  const jsPdfModule = window.jspdf;
  if (!jsPdfModule?.jsPDF) {
    throw new Error("PDF export unavailable: jsPDF failed to load.");
  }
  const pngBlob = await renderCanvasToPngBlob(canvasState, elements);
  const pngDataUrl = await blobToDataUrl(pngBlob);
  const { jsPDF } = jsPdfModule;
  const orientation = canvasState.width >= canvasState.height ? "landscape" : "portrait";
  const pdf = new jsPDF({
    orientation,
    unit: "pt",
    format: [canvasState.width, canvasState.height],
    compress: true,
  });
  pdf.addImage(pngDataUrl, "PNG", 0, 0, canvasState.width, canvasState.height);
  return pdf.output("blob");
}

async function exportToPng() {
  const blob = await renderCanvasToPngBlob(state.canvas, state.elements);
  downloadBlob(blob, `magx-${Date.now()}.png`);
  setStatus("PNG export completed.");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildLayerHtml(viewState, options = {}) {
  const canvasWidth = Math.max(1, Number(viewState?.canvas?.width) || 1);
  const enableFullBleed = Boolean(options.enableFullBleed);
  return [...viewState.elements]
    .sort((a, b) => a.z - b.z)
    .map((item) => {
      const shouldStretchFullWidth =
        enableFullBleed &&
        Boolean(item.previewFullWidth) &&
        item.type === "shape" &&
        item.shapeKind === "rectangle";
      const leftCss = shouldStretchFullWidth
        ? `calc(${item.x}px - ((100vw - ${canvasWidth}px) / 2))`
        : `${item.x}px`;
      const widthCss = shouldStretchFullWidth ? "100vw" : `${item.width}px`;
      const commonStyle = [
        `left:${leftCss}`,
        `top:${item.y}px`,
        `width:${widthCss}`,
        `height:${item.height}px`,
        `opacity:${item.opacity}`,
        `transform:rotate(${item.rotation}deg)`,
        "transform-origin:top left",
        "position:absolute",
      ].join(";");

      if (item.type === "text") {
        const lineHeight = clamp(Number(item.lineHeight ?? 1.2), 0.8, 3);
        const wordSpacing = clamp(Number(item.wordSpacing ?? 0), -5, 40);
        const tracking = normalizeTracking(item.tracking ?? 0);
        const textAlign = normalizeTextAlign(item.textAlign);
        const textCase = normalizeTextCase(item.textCase);
        const textScript = normalizeTextScript(item.textScript);
        const effectiveFontSize = getEffectiveTextFontSize(item);
        const scriptOffset = textScript === "superscript"
          ? -(Number(item.fontSize || 12) * 0.22)
          : textScript === "subscript"
            ? (Number(item.fontSize || 12) * 0.22)
            : 0;
        const decoration = `${item.textUnderline ? "underline" : ""} ${item.textStrikethrough ? "line-through" : ""}`.trim() || "none";
        const textMode = normalizeFillMode(item.textFillMode, "solid");
        const textFillStyle =
          textMode === "none"
            ? "color:transparent;"
            :
          textMode === "gradient"
            ? `color:transparent;background-image:${escapeHtml(buildGradientCss(item.textGradientFrom, item.textGradientTo, item.textGradientAngle))};background-clip:text;-webkit-background-clip:text;`
            : textMode === "image" && item.textFillImageSrc
              ? `color:transparent;background-image:url(${escapeHtml(item.textFillImageSrc)});background-size:${getTextImageScale(item)}% auto;background-position:${getTextImageX(item)}% ${getTextImageY(item)}%;background-repeat:no-repeat;background-clip:text;-webkit-background-clip:text;`
              : `color:${escapeHtml(item.textColor)};`;
        return `<div style="${commonStyle};${textFillStyle}font:${normalizeFontWeight(item.fontWeight ?? 600)} ${effectiveFontSize}px ${escapeHtml(item.fontFamily)};white-space:pre-wrap;line-height:${lineHeight};word-spacing:${wordSpacing}px;letter-spacing:${tracking}px;text-decoration:${decoration};text-align:${textAlign};text-transform:${textCase === "uppercase" ? "uppercase" : "none"};font-variant-caps:${textCase === "small-caps" ? "small-caps" : "normal"};position:absolute;translate:0 ${scriptOffset}px;">${escapeHtml(getRenderedTextContent(item))}</div>`;
      }

      if (item.type === "shape") {
        const fillCss = escapeHtml(getShapeFillCss(item));
        const radius = item.shapeKind === "circle" ? "50%" : `${item.radius}px`;
        const borders = getBorderWidths(item);
        if (item.shapeKind === "triangle") {
          return `<div style="${commonStyle};background:${fillCss};clip-path:polygon(50% 0%, 0% 100%, 100% 100%);"></div>`;
        }
        if (item.shapeKind === "star") {
          return `<div style="${commonStyle};background:${fillCss};clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);"></div>`;
        }
        if (item.shapeKind === "polygon") {
          return `<div style="${commonStyle};background:${fillCss};clip-path:polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);"></div>`;
        }
        if (item.shapeKind === "line") {
          return `<div style="${commonStyle};height:${item.height}px;background:${fillCss};border:none;border-radius:999px;"></div>`;
        }
        return `<div style="${commonStyle};background:${fillCss};border-style:solid;border-color:${escapeHtml(item.stroke)};border-width:${borders.top}px ${borders.right}px ${borders.bottom}px ${borders.left}px;border-radius:${radius};"></div>`;
      }

      if (item.type === "image") {
        const fit = escapeHtml(item.imageFit || "cover");
        const focalX = clamp(Number(item.focalX ?? 50), 0, 100);
        const focalY = clamp(Number(item.focalY ?? 50), 0, 100);
        const filter = escapeHtml(buildImageFilterCss(item));
        return `<img alt="Layer image" src="${item.src}" style="${commonStyle};object-fit:${fit};object-position:${focalX}% ${focalY}%;filter:${filter};display:block;"/>`;
      }

      if (item.type === "icon") {
        const iconName = escapeHtml(resolveSafeIconName(item.iconName));
        const iconColor = escapeHtml(item.iconColor || "#1f1f1f");
        const strokeWidth = clamp(Number(item.iconStrokeWidth ?? 1.75), 1, 4);
        return `<div style="${commonStyle};display:grid;place-items:center;color:${iconColor};"><ion-icon name="${iconName}" style="--ionicon-stroke-width:${strokeWidth * 14}px;"></ion-icon></div>`;
      }

      return "";
    })
    .join("\n");
}

function buildExportHtmlForViewStates(viewStates, pageTitle = "MagX Export", options = {}) {
  const localViewStates = cloneJson(viewStates);
  ensureInheritedViewsFor(localViewStates);
  const desktop = localViewStates.desktop;
  const tablet = localViewStates.tablet;
  const mobile = localViewStates.mobile;
  const enableFullBleed = Boolean(options.enableFullBleed);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(pageTitle)}</title>
<style>
  html, body { margin: 0; padding: 0; background: ${desktop.canvas.background}; }
  .view-shell {
    display: none;
    margin: 0 auto;
    width: fit-content;
  }
  .view-shell.view-desktop {
    display: block;
  }
  .canvas {
    position: relative;
    overflow: ${enableFullBleed ? "visible" : "hidden"};
    box-shadow: none;
  }
  .canvas-desktop { width: ${desktop.canvas.width}px; height: ${desktop.canvas.height}px; background: ${desktop.canvas.background}; }
  .canvas-tablet { width: ${tablet.canvas.width}px; height: ${tablet.canvas.height}px; background: ${tablet.canvas.background}; }
  .canvas-mobile { width: ${mobile.canvas.width}px; height: ${mobile.canvas.height}px; background: ${mobile.canvas.background}; }
  @media (max-width: 1100px) {
    .view-shell.view-desktop { display: none; }
    .view-shell.view-tablet { display: block; }
  }
  @media (max-width: 768px) {
    .view-shell.view-tablet { display: none; }
    .view-shell.view-mobile { display: block; }
  }
</style>
</head>
<body>
  <div class="view-shell view-desktop">
    <div class="canvas canvas-desktop">
      ${buildLayerHtml(desktop, { enableFullBleed })}
    </div>
  </div>
  <div class="view-shell view-tablet">
    <div class="canvas canvas-tablet">
      ${buildLayerHtml(tablet, { enableFullBleed })}
    </div>
  </div>
  <div class="view-shell view-mobile">
    <div class="canvas canvas-mobile">
      ${buildLayerHtml(mobile, { enableFullBleed })}
    </div>
  </div>
  <script type="module" src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.js"></script>
</body>
</html>`;
}

function buildExportHtml(options = {}) {
  persistCurrentPageState();
  const page = state.pages.find((item) => item.id === state.currentPageId);
  if (!page) {
    return buildExportHtmlForViewStates(state.viewStates, "MagX Export", options);
  }
  return buildExportHtmlForViewStates(page.viewStates, `${page.name || "Untitled Page"} - MagX`, options);
}

function slugifyFileName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getPageExportEntries() {
  const usedNames = new Set();
  return state.pages.map((page, index) => {
    const baseSeed = slugifyFileName(page.name) || `page-${index + 1}`;
    let base = baseSeed;
    let suffix = 2;
    while (usedNames.has(base)) {
      base = `${baseSeed}-${suffix}`;
      suffix += 1;
    }
    usedNames.add(base);
    return {
      page,
      index,
      base,
      pageName: page.name || `Page ${index + 1}`,
      viewKey: page.currentView || "desktop",
    };
  });
}

function collectDesignMetadata(entries) {
  const colorSet = new Set();
  const fontSet = new Set();
  const pageSummaries = [];
  let totalElements = 0;

  const pushColor = (value) => {
    const normalized = normalizeHexColor(value, "");
    if (normalized) colorSet.add(normalized.toUpperCase());
  };

  entries.forEach((entry) => {
    const page = entry.page;
    const viewStates = page?.viewStates || {};
    const summary = {
      id: page?.id || "",
      name: entry.pageName,
      views: {},
    };
    ["desktop", "tablet", "mobile"].forEach((viewKey) => {
      const viewState = viewStates[viewKey] || createDefaultViewState(viewKey);
      const elements = Array.isArray(viewState?.elements) ? viewState.elements : [];
      totalElements += elements.length;
      const byType = elements.reduce((acc, item) => {
        const type = String(item?.type || "unknown");
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});
      summary.views[viewKey] = {
        canvas: {
          width: viewState.canvas?.width || 0,
          height: viewState.canvas?.height || 0,
          background: viewState.canvas?.background || "#f6f7fb",
        },
        elementCount: elements.length,
        byType,
      };
      pushColor(viewState.canvas?.background);
      elements.forEach((item) => {
        if (item?.type === "text") {
          pushColor(item.textColor);
          pushColor(item.textGradientFrom);
          pushColor(item.textGradientTo);
          if (item.fontFamily) fontSet.add(String(item.fontFamily));
        }
        if (item?.type === "shape") {
          pushColor(item.fill);
          pushColor(item.stroke);
          pushColor(item.shapeGradientFrom);
          pushColor(item.shapeGradientTo);
        }
        if (item?.type === "icon") {
          pushColor(item.iconColor);
        }
      });
    });
    pageSummaries.push(summary);
  });

  return {
    app: "MagX",
    exportedAt: new Date().toISOString(),
    totals: {
      pages: entries.length,
      elements: totalElements,
      uniqueColors: colorSet.size,
      uniqueFonts: fontSet.size,
    },
    tokens: {
      colors: [...colorSet].sort(),
      fonts: [...fontSet].sort(),
    },
    pages: pageSummaries,
  };
}

function serializeElementForManifest(item) {
  const base = {
    id: item.id,
    layerName: item.layerName || "",
    type: item.type,
    z: Number(item.z) || 0,
    x: Number(item.x) || 0,
    y: Number(item.y) || 0,
    width: Number(item.width) || 0,
    height: Number(item.height) || 0,
    rotation: Number(item.rotation) || 0,
    opacity: Number(item.opacity) || 1,
    groupId: item.groupId || null,
    componentId: item.componentId || null,
    componentRoot: Boolean(item.componentRoot),
    componentName: item.componentName || null,
    componentPadding: clamp(Number(item.componentPadding) || 0, 0, 160),
    componentMarginTop: clamp(Number(item.componentMarginTop) || 0, -300, 1200),
    isLocked: Boolean(item.isLocked),
  };

  if (item.type === "shape") {
    return {
      ...base,
      shapeKind: item.shapeKind || "rectangle",
      fillMode: normalizeFillMode(item.shapeFillMode, "solid"),
      fill: item.fill || null,
      gradientFrom: item.shapeGradientFrom || null,
      gradientTo: item.shapeGradientTo || null,
      gradientAngle: Number(item.shapeGradientAngle) || 0,
      imageFill: item.shapeFillImageSrc ? true : false,
      stroke: item.stroke || null,
      strokeTop: getBorderWidths(item).top,
      strokeRight: getBorderWidths(item).right,
      strokeBottom: getBorderWidths(item).bottom,
      strokeLeft: getBorderWidths(item).left,
      radius: Number(item.radius) || 0,
      previewFullWidth: Boolean(item.previewFullWidth),
    };
  }

  if (item.type === "text") {
    return {
      ...base,
      text: String(item.text || ""),
      fontFamily: item.fontFamily || "",
      fontSize: Number(item.fontSize) || 0,
      fontWeight: normalizeFontWeight(item.fontWeight ?? 600),
      align: normalizeTextAlign(item.textAlign),
      lineHeight: Number(item.lineHeight) || 1.2,
      tracking: normalizeTracking(item.tracking ?? 0),
      wordSpacing: Number(item.wordSpacing) || 0,
      fillMode: normalizeFillMode(item.textFillMode, "solid"),
      textColor: item.textColor || null,
      gradientFrom: item.textGradientFrom || null,
      gradientTo: item.textGradientTo || null,
      gradientAngle: Number(item.textGradientAngle) || 0,
      imageFill: item.textFillImageSrc ? true : false,
      underline: Boolean(item.textUnderline),
      strikethrough: Boolean(item.textStrikethrough),
      textCase: normalizeTextCase(item.textCase),
      textScript: normalizeTextScript(item.textScript),
    };
  }

  if (item.type === "image") {
    return {
      ...base,
      src: item.src || null,
      fit: item.imageFit || "cover",
      focalX: Number(item.focalX ?? 50),
      focalY: Number(item.focalY ?? 50),
      filters: {
        brightness: Number(item.imageBrightness ?? 100),
        contrast: Number(item.imageContrast ?? 100),
        saturation: Number(item.imageSaturation ?? 100),
        blur: Number(item.imageBlur ?? 0),
        grayscale: Number(item.imageGrayscale ?? 0),
        sepia: Number(item.imageSepia ?? 0),
        hue: Number(item.imageHue ?? 0),
      },
    };
  }

  if (item.type === "icon") {
    return {
      ...base,
      iconName: resolveSafeIconName(item.iconName),
      iconColor: item.iconColor || null,
      iconStrokeWidth: Number(item.iconStrokeWidth ?? 1.75),
    };
  }

  return base;
}

function addHtmlPackageFilesToZip(zip, entries) {
  const manifest = [];

  entries.forEach((entry) => {
    const fileName = `${entry.base}.html`;
    const html = buildExportHtmlForViewStates(entry.page.viewStates, `${entry.pageName} - MagX`);
    zip.file(fileName, html);
    manifest.push({
      pageId: entry.page.id,
      name: entry.pageName,
      file: fileName,
      currentView: entry.viewKey,
      views: {
        desktop: (() => {
          const view = entry.page.viewStates?.desktop || createDefaultViewState("desktop");
          return {
            canvas: view.canvas,
            elementCount: (view.elements || []).length,
            elements: (view.elements || []).slice().sort((a, b) => (a.z || 0) - (b.z || 0)).map(serializeElementForManifest),
          };
        })(),
        tablet: (() => {
          const view = entry.page.viewStates?.tablet || createDefaultViewState("tablet");
          return {
            canvas: view.canvas,
            elementCount: (view.elements || []).length,
            elements: (view.elements || []).slice().sort((a, b) => (a.z || 0) - (b.z || 0)).map(serializeElementForManifest),
          };
        })(),
        mobile: (() => {
          const view = entry.page.viewStates?.mobile || createDefaultViewState("mobile");
          return {
            canvas: view.canvas,
            elementCount: (view.elements || []).length,
            elements: (view.elements || []).slice().sort((a, b) => (a.z || 0) - (b.z || 0)).map(serializeElementForManifest),
          };
        })(),
      },
    });
  });

  const indexHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MagX Pages</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin: 32px; background: #111; color: #e8e8e8; }
    h1 { margin: 0 0 16px; font-size: 24px; }
    ul { padding-left: 18px; }
    li { margin: 8px 0; }
    a { color: #9fd6ff; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>MagX Export</h1>
  <ul>
    ${manifest.map((item) => `<li><a href="${escapeHtml(item.file)}">${escapeHtml(item.name || item.file)}</a></li>`).join("\n    ")}
  </ul>
</body>
</html>`;
  const readme = `# MagX Export Package

This ZIP was exported from **MagX**.

## Included Files

- \`index.html\`: quick entry page linking all exported pages
- \`manifest.json\`: page metadata and file mapping
- One HTML file per page/canvas in this project

## Intended Build/Handoff Tools

- Codex
- AntiGravity
- Cursor
- Emergent
- Base44

## Recreation Instructions

1. Open \`manifest.json\` to see the page list and source files.
2. Build each page using its matching HTML file as the visual/layout source of truth.
3. Preserve responsive behavior across Desktop, Tablet, and Mobile breakpoints in each page file.
4. Keep layer ordering and relative spacing consistent with the exported markup.
5. If you are rebuilding in a framework, mirror the DOM structure first, then replace with semantic components.

## Pages

${manifest.map((item, index) => `${index + 1}. ${item.name || `Page ${index + 1}`} -> \`${item.file}\``).join("\n")}

---

Generated by MagX on ${new Date().toISOString()}.
  `;
  zip.file("index.html", indexHtml);
  zip.file(
    "manifest.json",
    JSON.stringify(
      {
        app: "MagX",
        version: 2,
        exportedAt: new Date().toISOString(),
        pages: manifest,
      },
      null,
      2
    )
  );
  zip.file("README.md", readme);
}

async function addPngPackageFilesToZip(zip, entries) {
  for (const entry of entries) {
    const viewState = entry.page.viewStates?.[entry.viewKey] || createDefaultViewState(entry.viewKey);
    const pngBlob = await renderCanvasToPngBlob(viewState.canvas, viewState.elements || []);
    zip.file(`png/${entry.base}.png`, pngBlob);
  }
}

async function addPdfPackageFilesToZip(zip, entries) {
  for (const entry of entries) {
    const viewState = entry.page.viewStates?.[entry.viewKey] || createDefaultViewState(entry.viewKey);
    const pdfBlob = await renderCanvasToPdfBlob(viewState.canvas, viewState.elements || []);
    zip.file(`pdf/${entry.base}.pdf`, pdfBlob);
  }
}

async function exportZipPackage(options = { includePng: true, includeHtml: true, includePdf: true, includeMeta: true }) {
  persistCurrentPageState();
  if (!window.JSZip) {
    setStatus("Zip export unavailable: JSZip failed to load.");
    return;
  }
  const includePng = Boolean(options.includePng);
  const includeHtml = Boolean(options.includeHtml);
  const includePdf = Boolean(options.includePdf);
  const includeMeta = Boolean(options.includeMeta);
  if (!includePng && !includeHtml && !includePdf && !includeMeta) {
    setStatus("Select at least one export format.");
    return;
  }

  const zip = new window.JSZip();
  const entries = getPageExportEntries();

  if (includeHtml) {
    addHtmlPackageFilesToZip(zip, entries);
  }
  if (includePng) {
    await addPngPackageFilesToZip(zip, entries);
  }
  if (includePdf) {
    await addPdfPackageFilesToZip(zip, entries);
  }
  if (includeMeta) {
    const metadata = collectDesignMetadata(entries);
    zip.file("metadata/design-tokens.json", JSON.stringify(metadata, null, 2));
  }

  const blob = await zip.generateAsync({ type: "blob" });
  downloadBlob(blob, `magx-${Date.now()}.zip`);
  const formats = [
    includePng ? "PNG" : null,
    includeHtml ? "HTML" : null,
    includePdf ? "PDF" : null,
    includeMeta ? "Metadata" : null,
  ].filter(Boolean);
  setStatus(`ZIP exported with ${formats.join(", ")}.`);
}

async function copyHtmlPackage() {
  const html = buildExportHtml();
  await navigator.clipboard.writeText(html);
  setStatus("HTML copied to clipboard.");
}

const PREVIEW_DOWNLOAD_PDF_MESSAGE = "magx-preview-download-pdf";
const PREVIEW_DOWNLOAD_PDF_RESULT_MESSAGE = "magx-preview-download-pdf-result";
const PREVIEW_COPY_PREVIEW_LINK_MESSAGE = "magx-preview-copy-preview-link";
const PREVIEW_COPY_PREVIEW_LINK_RESULT_MESSAGE = "magx-preview-copy-preview-link-result";
const PREVIEW_COPY_EMBED_MESSAGE = "magx-preview-copy-embed";
const PREVIEW_COPY_EMBED_RESULT_MESSAGE = "magx-preview-copy-embed-result";
let activePreviewWindowRef = null;
let previewMessageListenerBound = false;
let isPreviewPdfExporting = false;
let isAiImageRequestInFlight = false;
let aiImageInFlightSafetyTimer = null;

function buildEmbedIframeCode(url) {
  const safeUrl = String(url || "").trim();
  return `<iframe src="${safeUrl}" style="width:100%;height:900px;border:0;" loading="lazy" title="MagX Embed"></iframe>`;
}

async function copyPreviewEmbedCodeFromEditor() {
  try {
    const shareUrl = await ensureShareLink();
    const embedCode = buildEmbedIframeCode(shareUrl);
    setStatus("Embed code ready.");
    return { ok: true, message: "Embed code ready.", embedCode };
  } catch (error) {
    const message = error?.message || "Could not create embed code.";
    setStatus(message);
    return { ok: false, message, embedCode: "" };
  }
}

async function copyPreviewLinkFromEditor() {
  try {
    const shareUrl = await ensureShareLink();
    const previewUrl = normalizeShareLinkInput(shareUrl) || shareUrl;
    setStatus("Preview link ready.");
    return { ok: true, message: "Preview link ready.", url: previewUrl };
  } catch (error) {
    const message = error?.message || "Could not create preview link.";
    setStatus(message);
    return { ok: false, message, url: "" };
  }
}

async function downloadPreviewPdfFromEditor() {
  if (isPreviewPdfExporting) {
    throw new Error("PDF generation is already in progress.");
  }
  if (!window.jspdf?.jsPDF) {
    throw new Error("PDF export unavailable: jsPDF failed to load.");
  }
  isPreviewPdfExporting = true;
  try {
    persistCurrentPageState();
    const entries = getPageExportEntries();
    if (!entries.length) throw new Error("No pages to export.");
    const { jsPDF } = window.jspdf;
    let pdf = null;
    for (const entry of entries) {
      const viewState = entry.page.viewStates?.[entry.viewKey] || createDefaultViewState(entry.viewKey);
      const width = Math.max(1, Number(viewState.canvas?.width) || 1);
      const height = Math.max(1, Number(viewState.canvas?.height) || 1);
      const orientation = width >= height ? "landscape" : "portrait";
      const pngBlob = await renderCanvasToPngBlob(viewState.canvas, viewState.elements || []);
      const pngDataUrl = await blobToDataUrl(pngBlob);
      if (!pdf) {
        pdf = new jsPDF({
          orientation,
          unit: "pt",
          format: [width, height],
          compress: true,
        });
      } else {
        pdf.addPage([width, height], orientation);
      }
      pdf.addImage(pngDataUrl, "PNG", 0, 0, width, height);
    }
    const blob = pdf.output("blob");
    downloadBlob(blob, `magx-${Date.now()}.pdf`);
    setStatus("Preview PDF exported.");
    return { ok: true, message: "PDF exported." };
  } catch (error) {
    const message = error?.message || "Could not export preview PDF.";
    setStatus(message);
    return { ok: false, message };
  } finally {
    isPreviewPdfExporting = false;
  }
}

function bindPreviewMessageListener() {
  if (previewMessageListenerBound) return;
  window.addEventListener("message", async (event) => {
    if (event.origin !== window.location.origin) return;
    if (activePreviewWindowRef && event.source !== activePreviewWindowRef) return;
    let result = null;
    if (event.data?.type === PREVIEW_DOWNLOAD_PDF_MESSAGE) {
      result = await downloadPreviewPdfFromEditor();
      try {
        event.source?.postMessage({ type: PREVIEW_DOWNLOAD_PDF_RESULT_MESSAGE, ...result }, event.origin);
      } catch {
        // Ignore response channel errors.
      }
      return;
    }
    if (event.data?.type === PREVIEW_COPY_EMBED_MESSAGE) {
      result = await copyPreviewEmbedCodeFromEditor();
      try {
        event.source?.postMessage({ type: PREVIEW_COPY_EMBED_RESULT_MESSAGE, ...result }, event.origin);
      } catch {
        // Ignore response channel errors.
      }
      return;
    }
    if (event.data?.type === PREVIEW_COPY_PREVIEW_LINK_MESSAGE) {
      result = await copyPreviewLinkFromEditor();
      try {
        event.source?.postMessage({ type: PREVIEW_COPY_PREVIEW_LINK_RESULT_MESSAGE, ...result }, event.origin);
      } catch {
        // Ignore response channel errors.
      }
    }
  });
  previewMessageListenerBound = true;
}

function buildPageTurnPreviewHtml() {
  persistCurrentPageState();
  ensureInheritedViewsUpToDate();
  const currentUrlParams = new URLSearchParams(window.location.search);
  const pathShareIdMatch = String(window.location.pathname || "")
    .match(/^\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/);
  const currentShareId = String(currentUrlParams.get("share") || pathShareIdMatch?.[1] || "").trim();
  const shareUrlHint =
    (currentShareId
      ? `${window.location.origin}/editor?share=${encodeURIComponent(currentShareId)}&preview=1`
      : normalizeShareLinkInput(shareLinkField?.value || "")) || "";
  const pages = state.pages.map((page, index) => {
    const viewKey = page.currentView || "desktop";
    const viewState = page.viewStates?.[viewKey] || createDefaultViewState(viewKey);
    return {
      id: page.id || `page_${index + 1}`,
      name: page.name || `Page ${index + 1}`,
      canvas: {
        width: Math.max(1, Number(viewState.canvas?.width) || 1),
        height: Math.max(1, Number(viewState.canvas?.height) || 1),
        background: viewState.canvas?.background || "#f6f7fb",
      },
      layerHtml: buildLayerHtml(viewState, { enableFullBleed: true }),
    };
  });
  const maxWidth = Math.max(...pages.map((page) => page.canvas.width), 1);
  const maxHeight = Math.max(...pages.map((page) => page.canvas.height), 1);
  const payload = JSON.stringify({ pages, maxWidth, maxHeight }).replace(/</g, "\\u003c");
  const shareUrlHintJson = JSON.stringify(shareUrlHint).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MagX Preview</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    html, body { margin: 0; height: 100%; overflow: hidden; background: linear-gradient(180deg, #1a1a1a 0%, #101010 100%); font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #f4f6fb; }
    .shell { height: 100%; display: grid; grid-template-rows: auto 1fr auto; }
    .toolbar { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.12); background: rgba(26, 26, 26, 0.92); }
    .toolbar-group { display: flex; gap: 8px; align-items: center; }
    .btn { border: none; background: transparent; color: #f4f6fb; border-radius: 8px; width: 34px; height: 34px; padding: 0; cursor: pointer; font: inherit; display: grid; place-items: center; }
    .btn:disabled { opacity: 0.42; cursor: default; }
    .btn:hover { background: rgba(255, 255, 255, 0.08); }
    .btn svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .btn.mode-btn { width: 34px; min-width: 34px; padding: 0; }
    .btn.mode-btn.is-mode-active { background: #1f2f66; color: #9fbcff; }
    .stage-wrap { position: relative; min-height: 0; overflow: hidden; }
    .stage { position: absolute; inset: 0; display: grid; place-items: center; touch-action: none; cursor: grab; }
    .stage.is-dragging { cursor: grabbing; }
    .camera { transform-origin: center center; will-change: transform; }
    .book { position: relative; display: flex; gap: 14px; perspective: 2400px; align-items: center; }
    .book.is-cover { gap: 8px; }
    .page { position: relative; overflow: hidden; background: #f6f7fb; box-shadow: 0 28px 70px rgba(0, 0, 0, 0.55); border-radius: 2px; }
    .page.page-right::after, .page.page-left::after { content: ""; position: absolute; inset: 0; pointer-events: none; }
    .page.page-right::after { background: linear-gradient(270deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 38%, rgba(0,0,0,0.14) 100%); }
    .page.page-left::after { background: linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 38%, rgba(0,0,0,0.14) 100%); }
    .page.page-void { background: transparent; box-shadow: none; border: 1px solid rgba(255,255,255,0.07); border-radius: 2px; opacity: 0.25; }
    .spread-gap { width: 4px; height: 92%; background: linear-gradient(180deg, rgba(255,255,255,0.28), rgba(255,255,255,0.06)); border-radius: 999px; position: relative; }
    .spread-gap::before { content: ""; position: absolute; inset: -10px -8px; background: radial-gradient(circle at center, rgba(0,0,0,0.28), transparent 72%); }
    .layer-root { position: absolute; inset: 0; }
    .turn-page { position: absolute; top: 0; transform-style: preserve-3d; pointer-events: none; z-index: 30; }
    .turn-page::before { content: ""; position: absolute; inset: -2px; background: linear-gradient(90deg, rgba(0,0,0,0.35), transparent 40%, rgba(0,0,0,0.35)); opacity: 0.45; filter: blur(8px); }
    .turn-page .face { position: absolute; inset: 0; overflow: hidden; backface-visibility: hidden; box-shadow: 0 20px 62px rgba(0,0,0,0.56); }
    .turn-page .face::after { content: ""; position: absolute; inset: 0; pointer-events: none; }
    .turn-page .front::after { background: linear-gradient(90deg, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.08) 34%, rgba(255,255,255,0.10) 72%, rgba(255,255,255,0.16) 100%); }
    .turn-page .back { transform: rotateY(180deg); filter: brightness(0.94) saturate(0.96); }
    .turn-page .back::after { background: linear-gradient(270deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.05) 32%, rgba(255,255,255,0.12) 100%); }
    .turn-next { right: 0; transform-origin: left center; animation: turnNext 560ms cubic-bezier(0.27, 0.01, 0.22, 0.99) forwards; }
    .turn-prev { left: 0; transform-origin: right center; animation: turnPrev 560ms cubic-bezier(0.27, 0.01, 0.22, 0.99) forwards; }
    @keyframes turnNext { from { transform: rotateY(0deg); } to { transform: rotateY(-178deg); } }
    @keyframes turnPrev { from { transform: rotateY(0deg); } to { transform: rotateY(178deg); } }
    .footer { padding: 8px 16px 12px; border-top: 1px solid rgba(255, 255, 255, 0.1); background: rgba(20, 20, 20, 0.85); display: flex; justify-content: center; }
    .footer-nav { display: inline-flex; gap: 8px; }
  </style>
</head>
<body>
  <div class="shell">
    <div class="toolbar">
      <div class="toolbar-group">
        <button id="prevBtn" class="btn" type="button" aria-label="Previous Spread" title="Previous Spread">
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button id="nextBtn" class="btn" type="button" aria-label="Next Spread" title="Next Spread">
          <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        <button id="viewModeBtn" class="btn mode-btn" type="button" aria-label="Toggle Spread or Single View" title="Toggle Spread or Single View">
          <svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="8" height="13" rx="1"/><rect x="12.5" y="5.5" width="8" height="13" rx="1"/></svg>
        </button>
        <button id="downloadPdfBtn" class="btn" type="button" aria-label="Download PDF" title="Download PDF">
          <svg viewBox="0 0 24 24"><path d="M12 4v10"/><path d="M8.5 10.5L12 14l3.5-3.5"/><path d="M4 18h16"/></svg>
        </button>
        <button id="sharePreviewBtn" class="btn" type="button" aria-label="Copy Preview Link" title="Copy Preview Link">
          <svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.66 0l2.83-2.83a4 4 0 0 0-5.66-5.66L11.5 6.84"/><path d="M14 10a4 4 0 0 0-5.66 0L5.5 12.83a4 4 0 0 0 5.66 5.66L12.5 17.16"/></svg>
        </button>
        <button id="embedCodeBtn" class="btn" type="button" aria-label="Copy Embed Code" title="Copy Embed Code">
          <svg viewBox="0 0 24 24"><path d="M8 8l-4 4 4 4"/><path d="M16 8l4 4-4 4"/><path d="M14 4l-4 16"/></svg>
        </button>
      </div>
      <div id="spreadLabel">1/1</div>
      <div class="toolbar-group">
        <button id="zoomOutBtn" class="btn" type="button" aria-label="Zoom Out" title="Zoom Out">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6"/></svg>
        </button>
        <div id="zoomLabel">100%</div>
        <button id="zoomInBtn" class="btn" type="button" aria-label="Zoom In" title="Zoom In">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
        </button>
        <button id="zoomResetBtn" class="btn" type="button" aria-label="Reset Zoom" title="Reset Zoom">
          <svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v5h5"/></svg>
        </button>
      </div>
    </div>
    <div class="stage-wrap">
      <div id="stage" class="stage">
        <div id="camera" class="camera">
          <div id="book" class="book"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-nav">
        <button id="prevFooterBtn" class="btn" type="button" aria-label="Previous Spread" title="Previous Spread">
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button id="nextFooterBtn" class="btn" type="button" aria-label="Next Spread" title="Next Spread">
          <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  </div>
  <script type="application/json" id="previewData">${payload}</script>
  <script>
    const shareUrlHint = ${shareUrlHintJson};
    const data = JSON.parse(document.getElementById("previewData").textContent || "{}");
    const pages = Array.isArray(data.pages) ? data.pages : [];
    const stage = document.getElementById("stage");
    const camera = document.getElementById("camera");
    const book = document.getElementById("book");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevFooterBtn = document.getElementById("prevFooterBtn");
    const nextFooterBtn = document.getElementById("nextFooterBtn");
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");
    const sharePreviewBtn = document.getElementById("sharePreviewBtn");
    const embedCodeBtn = document.getElementById("embedCodeBtn");
    const viewModeBtn = document.getElementById("viewModeBtn");
    const spreadLabel = document.getElementById("spreadLabel");
    const zoomLabel = document.getElementById("zoomLabel");
    const zoomInBtn = document.getElementById("zoomInBtn");
    const zoomOutBtn = document.getElementById("zoomOutBtn");
    const zoomResetBtn = document.getElementById("zoomResetBtn");

    let spreadIndex = 0;
    let isTurning = false;
    let viewMode = "spread";
    const cameraState = { zoom: 1, x: 0, y: 0 };
    const dragState = { active: false, startX: 0, startY: 0, originX: 0, originY: 0, touchStartX: 0, touchStartY: 0 };

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }
    function buildSpreads() {
      if (!pages.length) return [];
      const result = [{ left: null, right: 0, kind: "cover" }];
      let cursor = 1;
      while (cursor + 1 < pages.length) {
        result.push({ left: cursor, right: cursor + 1, kind: "spread" });
        cursor += 2;
      }
      if (cursor < pages.length) {
        result.push({ left: cursor, right: null, kind: "back-cover" });
      }
      return result;
    }
    const spreads = buildSpreads();
    function getUnits() {
      if (viewMode === "single") {
        return pages.map((page, index) => ({ left: null, right: index, kind: "single" }));
      }
      return spreads;
    }
    function spreadCount() {
      return Math.max(1, getUnits().length);
    }
    function updateViewModeButton() {
      if (!viewModeBtn) return;
      viewModeBtn.innerHTML = viewMode === "spread"
        ? '<svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="8" height="13" rx="1"/><rect x="12.5" y="5.5" width="8" height="13" rx="1"/></svg>'
        : '<svg viewBox="0 0 24 24"><rect x="6.5" y="4.5" width="11" height="15" rx="1"/></svg>';
      viewModeBtn.classList.toggle("is-mode-active", viewMode === "spread");
      viewModeBtn.setAttribute("aria-label", viewMode === "spread" ? "Switch to Single Page View" : "Switch to Spread View");
      viewModeBtn.setAttribute("title", viewMode === "spread" ? "Switch to Single Page View" : "Switch to Spread View");
    }
    function scheduleCenterBookInView() {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          centerBookInView();
        });
      });
    }
    function buildPageNode(page, side) {
      const node = document.createElement("article");
      node.className = "page " + (side === "left" ? "page-left" : "page-right");
      node.style.width = page.canvas.width + "px";
      node.style.height = page.canvas.height + "px";
      node.style.background = page.canvas.background || "#f6f7fb";
      const root = document.createElement("div");
      root.className = "layer-root";
      root.innerHTML = page.layerHtml || "";
      node.appendChild(root);
      return node;
    }
    function getSpreadContentSize(spread) {
      const leftPage = Number.isInteger(spread?.left) ? pages[spread.left] : null;
      const rightPage = Number.isInteger(spread?.right) ? pages[spread.right] : null;
      const hasBoth = Boolean(leftPage && rightPage);
      const width = hasBoth
        ? leftPage.canvas.width + rightPage.canvas.width + 14
        : (leftPage?.canvas?.width || rightPage?.canvas?.width || Math.max(data.maxWidth || 1, 1));
      const height = hasBoth
        ? Math.max(leftPage.canvas.height, rightPage.canvas.height)
        : (leftPage?.canvas?.height || rightPage?.canvas?.height || Math.max(data.maxHeight || 1, 1));
      return { width, height };
    }
    function getSpreadFitZoom(spread) {
      const size = getSpreadContentSize(spread);
      const availableW = Math.max(1, stage.clientWidth - 80);
      const availableH = Math.max(1, stage.clientHeight - 80);
      return clamp(Math.min(availableW / size.width, availableH / size.height), 0.18, 1);
    }
    function renderSpread() {
      const units = getUnits();
      const count = spreadCount();
      spreadIndex = clamp(spreadIndex, 0, count - 1);
      const spread = units[spreadIndex] || { left: null, right: null, kind: "spread" };
      const leftPage = Number.isInteger(spread.left) ? pages[spread.left] : null;
      const rightPage = Number.isInteger(spread.right) ? pages[spread.right] : null;

      book.innerHTML = "";
      book.classList.toggle("is-cover", !leftPage || !rightPage);
      if (leftPage && rightPage) {
        const left = buildPageNode(leftPage, "left");
        const right = buildPageNode(rightPage, "right");
        book.appendChild(left);
        const gap = document.createElement("div");
        gap.className = "spread-gap";
        book.appendChild(gap);
        book.appendChild(right);
      } else if (rightPage) {
        book.appendChild(buildPageNode(rightPage, "right"));
      } else if (leftPage) {
        book.appendChild(buildPageNode(leftPage, "left"));
      }

      spreadLabel.textContent = (spreadIndex + 1) + "/" + count;
      prevBtn.disabled = spreadIndex <= 0 || isTurning;
      nextBtn.disabled = spreadIndex >= count - 1 || isTurning;
      if (prevFooterBtn) prevFooterBtn.disabled = prevBtn.disabled;
      if (nextFooterBtn) nextFooterBtn.disabled = nextBtn.disabled;
      scheduleCenterBookInView();
    }
    function centerBookInView() {
      const units = getUnits();
      const spread = units[spreadIndex] || { left: null, right: null };
      cameraState.zoom = getSpreadFitZoom(spread);
      applyCameraTransform();
      const stageRect = stage.getBoundingClientRect();
      const bookRect = book.getBoundingClientRect();
      const stageCenterX = stageRect.left + stageRect.width / 2;
      const stageCenterY = stageRect.top + stageRect.height / 2;
      const bookCenterX = bookRect.left + bookRect.width / 2;
      const bookCenterY = bookRect.top + bookRect.height / 2;
      cameraState.x += stageCenterX - bookCenterX;
      cameraState.y += stageCenterY - bookCenterY;
      applyCameraTransform();
    }
    function applyCameraTransform() {
      camera.style.transform = "translate(" + cameraState.x + "px, " + cameraState.y + "px) scale(" + cameraState.zoom + ")";
      zoomLabel.textContent = Math.round(cameraState.zoom * 100) + "%";
    }
    function setZoom(nextZoom) {
      cameraState.zoom = clamp(nextZoom, 0.2, 3);
      applyCameraTransform();
    }
    function resetCameraView() {
      cameraState.x = 0;
      cameraState.y = 0;
      cameraState.zoom = 1;
      applyCameraTransform();
      scheduleCenterBookInView();
    }
    function turnNext() {
      if (isTurning || spreadIndex >= spreadCount() - 1) return;
      const units = getUnits();
      const spread = units[spreadIndex];
      const nextSpread = units[spreadIndex + 1];
      const turningPage = Number.isInteger(spread?.right)
        ? pages[spread.right]
        : (Number.isInteger(spread?.left) ? pages[spread.left] : null);
      const revealOnBack = Number.isInteger(nextSpread?.left)
        ? pages[nextSpread.left]
        : (Number.isInteger(nextSpread?.right) ? pages[nextSpread.right] : turningPage);
      if (!turningPage) return;
      isTurning = true;
      const flipper = document.createElement("div");
      flipper.className = "turn-page turn-next";
      flipper.style.width = turningPage.canvas.width + "px";
      flipper.style.height = turningPage.canvas.height + "px";
      const front = document.createElement("div");
      front.className = "face front";
      front.style.background = turningPage.canvas.background || "#f6f7fb";
      front.innerHTML = '<div class="layer-root">' + (turningPage.layerHtml || "") + "</div>";
      const back = document.createElement("div");
      back.className = "face back";
      back.style.background = (revealOnBack?.canvas?.background) || turningPage.canvas.background || "#eceef4";
      back.innerHTML = '<div class="layer-root">' + ((revealOnBack?.layerHtml) || "") + "</div>";
      flipper.appendChild(front);
      flipper.appendChild(back);
      book.appendChild(flipper);
      setTimeout(() => {
        spreadIndex += 1;
        isTurning = false;
        renderSpread();
      }, 580);
    }
    function turnPrev() {
      if (isTurning || spreadIndex <= 0) return;
      const units = getUnits();
      const spread = units[spreadIndex];
      const prevSpread = units[spreadIndex - 1];
      const turningPage = Number.isInteger(spread?.left)
        ? pages[spread.left]
        : (Number.isInteger(spread?.right) ? pages[spread.right] : null);
      const revealOnBack = Number.isInteger(prevSpread?.right)
        ? pages[prevSpread.right]
        : (Number.isInteger(prevSpread?.left) ? pages[prevSpread.left] : turningPage);
      if (!turningPage) return;
      isTurning = true;
      const flipper = document.createElement("div");
      flipper.className = "turn-page turn-prev";
      flipper.style.width = turningPage.canvas.width + "px";
      flipper.style.height = turningPage.canvas.height + "px";
      const front = document.createElement("div");
      front.className = "face front";
      front.style.background = turningPage.canvas.background || "#f6f7fb";
      front.innerHTML = '<div class="layer-root">' + (turningPage.layerHtml || "") + "</div>";
      const back = document.createElement("div");
      back.className = "face back";
      back.style.background = (revealOnBack?.canvas?.background) || turningPage.canvas.background || "#eceef4";
      back.innerHTML = '<div class="layer-root">' + ((revealOnBack?.layerHtml) || "") + "</div>";
      flipper.appendChild(front);
      flipper.appendChild(back);
      book.appendChild(flipper);
      setTimeout(() => {
        spreadIndex -= 1;
        isTurning = false;
        renderSpread();
      }, 580);
    }

    prevBtn.addEventListener("click", turnPrev);
    nextBtn.addEventListener("click", turnNext);
    prevFooterBtn?.addEventListener("click", turnPrev);
    nextFooterBtn?.addEventListener("click", turnNext);
    downloadPdfBtn?.addEventListener("click", () => {
      if (!window.opener) return;
      if (downloadPdfBtn.disabled) return;
      downloadPdfBtn.disabled = true;
      window.opener.postMessage({ type: "${PREVIEW_DOWNLOAD_PDF_MESSAGE}" }, window.location.origin);
    });
    embedCodeBtn?.addEventListener("click", () => {
      if (embedCodeBtn.disabled) return;
      const url = String(shareUrlHint || "").trim();
      if (url) {
        const code = '<iframe src="' + url + '" style="width:100%;height:900px;border:0;" loading="lazy" title="MagX Embed"></iframe>';
        navigator.clipboard.writeText(code).then(() => {
          alert("Embed code copied.");
        }).catch(() => {
          window.prompt("Copy embed code:", code);
        });
        return;
      }
      if (window.opener) {
        embedCodeBtn.disabled = true;
        window.opener.postMessage({ type: "${PREVIEW_COPY_EMBED_MESSAGE}" }, window.location.origin);
        return;
      }
      alert("Embed code unavailable for this preview.");
    });
    sharePreviewBtn?.addEventListener("click", () => {
      const currentHref = String(window.location.href || "").split("#")[0];
      const hasShareParam = /[?&]share=/.test(currentHref);
      const url = hasShareParam ? currentHref : String(shareUrlHint || "").trim();
      if (!url && window.opener) {
        sharePreviewBtn.disabled = true;
        window.opener.postMessage({ type: "${PREVIEW_COPY_PREVIEW_LINK_MESSAGE}" }, window.location.origin);
        return;
      }
      if (!url) {
        alert("Preview link unavailable.");
        return;
      }
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied.");
      }).catch(() => {
        window.prompt("Copy link:", url);
      });
    });
    viewModeBtn?.addEventListener("click", () => {
      viewMode = viewMode === "spread" ? "single" : "spread";
      const maxIndex = Math.max(0, spreadCount() - 1);
      spreadIndex = clamp(spreadIndex, 0, maxIndex);
      updateViewModeButton();
      renderSpread();
    });
    zoomInBtn.addEventListener("click", () => setZoom(cameraState.zoom + 0.1));
    zoomOutBtn.addEventListener("click", () => setZoom(cameraState.zoom - 0.1));
    zoomResetBtn.addEventListener("click", () => {
      resetCameraView();
    });

    stage.addEventListener("wheel", (event) => {
      event.preventDefault();
      setZoom(cameraState.zoom + (event.deltaY < 0 ? 0.1 : -0.1));
    }, { passive: false });
    stage.addEventListener("pointerdown", (event) => {
      dragState.active = true;
      dragState.startX = event.clientX;
      dragState.startY = event.clientY;
      dragState.originX = cameraState.x;
      dragState.originY = cameraState.y;
      stage.classList.add("is-dragging");
    });
    window.addEventListener("pointermove", (event) => {
      if (!dragState.active) return;
      cameraState.x = dragState.originX + (event.clientX - dragState.startX);
      cameraState.y = dragState.originY + (event.clientY - dragState.startY);
      applyCameraTransform();
    });
    window.addEventListener("pointerup", () => {
      if (!dragState.active) return;
      dragState.active = false;
      stage.classList.remove("is-dragging");
    });

    stage.addEventListener("touchstart", (event) => {
      const touch = event.touches && event.touches[0];
      if (!touch) return;
      dragState.touchStartX = touch.clientX;
      dragState.touchStartY = touch.clientY;
    }, { passive: true });
    stage.addEventListener("touchend", (event) => {
      const touch = event.changedTouches && event.changedTouches[0];
      if (!touch) return;
      const dx = touch.clientX - dragState.touchStartX;
      const dy = touch.clientY - dragState.touchStartY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        if (dx < 0) turnNext();
        else turnPrev();
      }
    }, { passive: true });

    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") turnNext();
      if (event.key === "ArrowLeft") turnPrev();
    });
    window.addEventListener("message", async (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "${PREVIEW_DOWNLOAD_PDF_RESULT_MESSAGE}") {
        if (downloadPdfBtn) downloadPdfBtn.disabled = false;
        if (!event.data?.ok) {
          alert(event.data?.message || "Could not export PDF.");
        }
        return;
      }
      if (event.data?.type === "${PREVIEW_COPY_EMBED_RESULT_MESSAGE}") {
        if (embedCodeBtn) embedCodeBtn.disabled = false;
        if (!event.data?.ok) {
          alert(event.data?.message || "Could not create embed code.");
          return;
        }
        const code = String(event.data?.embedCode || "").trim();
        if (!code) {
          alert("Embed code unavailable.");
          return;
        }
        try {
          await navigator.clipboard.writeText(code);
          alert("Embed code copied.");
        } catch {
          window.prompt("Copy embed code:", code);
        }
        return;
      }
      if (event.data?.type === "${PREVIEW_COPY_PREVIEW_LINK_RESULT_MESSAGE}") {
        if (sharePreviewBtn) sharePreviewBtn.disabled = false;
        if (!event.data?.ok) {
          alert(event.data?.message || "Could not create preview link.");
          return;
        }
        const url = String(event.data?.url || "").trim();
        if (!url) {
          alert("Preview link unavailable.");
          return;
        }
        try {
          await navigator.clipboard.writeText(url);
          alert("Link copied.");
        } catch {
          window.prompt("Copy link:", url);
        }
      }
    });
    window.addEventListener("resize", scheduleCenterBookInView);
    if (!window.opener && downloadPdfBtn) downloadPdfBtn.disabled = true;
    if (!window.opener && embedCodeBtn) embedCodeBtn.disabled = !String(shareUrlHint || "").trim();

    updateViewModeButton();
    renderSpread();
    applyCameraTransform();
  </script>
  <script type="module" src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.js"></script>
</body>
</html>`;
}

function previewDesign(options = {}) {
  const sameTab = Boolean(options?.sameTab);
  bindPreviewMessageListener();
  const html = buildPageTurnPreviewHtml();
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const previewUrl = URL.createObjectURL(blob);
  if (sameTab) {
    window.location.replace(previewUrl);
    setTimeout(() => URL.revokeObjectURL(previewUrl), 60000);
    return;
  }
  const previewWindow = window.open(previewUrl, "_blank");
  if (!previewWindow) {
    URL.revokeObjectURL(previewUrl);
    setStatus("Popup blocked. Allow popups to use preview.");
    return;
  }
  activePreviewWindowRef = previewWindow;
  setTimeout(() => URL.revokeObjectURL(previewUrl), 60000);
  setStatus("Preview opened in a new tab.");
}

function buildProjectPayload() {
  persistCurrentPageState();
  ensureInheritedViewsUpToDate();
  return {
    app: "MagX",
    version: 1,
    exportedAt: new Date().toISOString(),
    projectName: state.projectName || DEFAULT_PROJECT_NAME,
    currentPageId: state.currentPageId,
    currentView: state.currentView,
    pages: state.pages,
  };
}

function exportJson() {
  const payload = buildProjectPayload();
  downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" }), `magx-${Date.now()}.json`);
  setStatus("Project JSON exported.");
}

async function copyProjectJsonToClipboard() {
  const payload = buildProjectPayload();
  await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
  setStatus("Project JSON copied.");
}

function downloadProjectJson() {
  exportJson();
}

async function shareProjectJson() {
  const url = await ensureShareLink();
  try {
    if (!("share" in navigator)) {
      await navigator.clipboard.writeText(url);
      setShareModalStatus("Native share unavailable. Link copied.");
      setStatus("Share link copied.");
      return;
    }
    await navigator.share({
      title: "MagX Project",
      text: "Open this MagX project",
      url,
    });
    setStatus("Share link sent.");
    setShareModalStatus("Share link sent.");
    closeShareModal();
  } catch (error) {
    if (error?.name === "AbortError") return;
    try {
      await navigator.clipboard.writeText(url);
      setShareModalStatus("Native share unavailable. Link copied.");
      setStatus("Native share unavailable. Link copied instead.");
    } catch {
      setShareModalStatus("Could not share link.", true);
      setStatus("Could not share link.");
    }
  }
  previewMessageListenerBound = true;
}

function bindEvents() {
  if (inspectorLayersSection) {
    inspectorLayersSection.open = true;
    inspectorLayersSection.addEventListener("toggle", () => {
      if (!inspectorLayersSection.open) inspectorLayersSection.open = true;
    });
    const layersSummary = inspectorLayersSection.querySelector("summary");
    layersSummary?.addEventListener("click", (event) => {
      event.preventDefault();
      inspectorLayersSection.open = true;
    });
  }
  aiGenerateBtn?.addEventListener("click", openAiModal);
  aiGenerateCancelBtn?.addEventListener("click", closeAiModal);
  aiGenerateConfirmBtn?.addEventListener("click", handleAiGenerate);
  toolAiImageBtn?.addEventListener("click", openAiImageModal);
  aiImageCancelBtn?.addEventListener("click", closeAiImageModal);
  aiImageGenerateBtn?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    void handleAiImageGenerate();
  });
  aiImageGenerateBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    void handleAiImageGenerate();
  });
  propImageAiEditBtn?.addEventListener("click", openAiImageEditModal);
  aiImageEditCancelBtn?.addEventListener("click", closeAiImageEditModal);
  aiImageEditGenerateBtn?.addEventListener("click", handleAiImageEditGenerate);
  aiImageRegenerateBtn?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!state.aiImageLastRequest) {
      setStatus("Generate one image first, then regenerate.");
      return;
    }
    if (aiImagePrompt) aiImagePrompt.value = state.aiImageLastRequest.prompt;
    setStatus("Regenerating image...");
    void handleAiImageGenerate({
      ...state.aiImageLastRequest,
      model: DEFAULT_AI_IMAGE_MODEL,
    });
  });
  aiImageRegenerateBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!state.aiImageLastRequest) {
      setStatus("Generate one image first, then regenerate.");
      return;
    }
    if (aiImagePrompt) aiImagePrompt.value = state.aiImageLastRequest.prompt;
    setStatus("Regenerating image...");
    void handleAiImageGenerate({
      ...state.aiImageLastRequest,
      model: DEFAULT_AI_IMAGE_MODEL,
    });
  });
  aiImageAspectRatio?.addEventListener("change", () => syncAiImagePrefsFromInputs());
  aiImageResolution?.addEventListener("change", () => syncAiImagePrefsFromInputs());
  aiImageVariantCount?.addEventListener("change", () => syncAiImagePrefsFromInputs());
  aiImageSize?.addEventListener("change", () => syncAiImagePrefsFromInputs());
  aiModal?.addEventListener("pointerdown", (event) => {
    if (event.target === aiModal) {
      closeAiModal();
    }
  });
  aiImageModal?.addEventListener("pointerdown", (event) => {
    if (event.target === aiImageModal) {
      closeAiImageModal();
    }
  });
  aiImageEditModal?.addEventListener("pointerdown", (event) => {
    if (event.target === aiImageEditModal) {
      closeAiImageEditModal();
    }
  });
  deleteBtn?.addEventListener("click", openClearCanvasModal);
  clearCanvasCancelBtn?.addEventListener("click", closeClearCanvasModal);
  clearCanvasConfirmBtn?.addEventListener("click", () => {
    runWithHistory(() => clearCurrentCanvasView(), "clear-canvas");
    closeClearCanvasModal();
  });
  clearCanvasModal?.addEventListener("pointerdown", (event) => {
    if (event.target === clearCanvasModal) {
      closeClearCanvasModal();
    }
  });
  exportBtn?.addEventListener("click", openExportModal);
  shareBtn?.addEventListener("click", openShareModal);
  settingsBtn?.addEventListener("click", openSettingsModal);
  exportModalCancelBtn?.addEventListener("click", closeExportModal);
  exportModalConfirmBtn?.addEventListener("click", async () => {
    const includePng = Boolean(exportFormatPng?.checked);
    const includeHtml = Boolean(exportFormatHtml?.checked);
    const includePdf = Boolean(exportFormatPdf?.checked);
    const includeMeta = Boolean(exportFormatMeta?.checked);
    if (!includePng && !includeHtml && !includePdf && !includeMeta) {
      setStatus("Select at least one export format.");
      return;
    }
    if (!requireCredits(1, "Export")) return;
    try {
      if (exportModalConfirmBtn) exportModalConfirmBtn.disabled = true;
      setStatus("Building export ZIP...");
      await exportZipPackage({ includePng, includeHtml, includePdf, includeMeta });
      consumeCredits(1);
      closeExportModal();
    } catch (error) {
      setStatus(error?.message || "Export failed.");
    } finally {
      if (exportModalConfirmBtn) exportModalConfirmBtn.disabled = false;
    }
  });
  exportModal?.addEventListener("pointerdown", (event) => {
    if (event.target === exportModal) {
      closeExportModal();
    }
  });
  shareModalCloseBtn?.addEventListener("click", closeShareModal);
  settingsModalCloseBtn?.addEventListener("click", closeSettingsModal);
  settingsSaveProjectBtn?.addEventListener("click", () => {
    try {
      saveProjectToLocalLibrary();
    } catch (error) {
      setSettingsModalStatus(error?.message || "Could not save project.", true);
      setStatus(error?.message || "Could not save project.");
    }
  });
  settingsExportProjectBtn?.addEventListener("click", () => {
    downloadProjectJson();
    setSettingsModalStatus("Project JSON downloaded.");
  });
  settingsImportProjectBtn?.addEventListener("click", () => {
    settingsImportInput?.click();
  });
  settingsImportInput?.addEventListener("change", async () => {
    const file = settingsImportInput.files?.[0];
    if (!file) return;
    try {
      await importProjectFromFile(file);
      setSettingsModalStatus("Project imported.");
    } catch (error) {
      setSettingsModalStatus(error?.message || "Could not import project.", true);
      setStatus(error?.message || "Could not import project.");
    } finally {
      settingsImportInput.value = "";
    }
  });
  settingsLoadProjectBtn?.addEventListener("click", () => {
    try {
      loadProjectFromLocalLibrary();
    } catch (error) {
      setSettingsModalStatus(error?.message || "Could not load project.", true);
      setStatus(error?.message || "Could not load project.");
    }
  });
  settingsDeleteProjectBtn?.addEventListener("click", () => {
    try {
      deleteProjectFromLocalLibrary();
    } catch (error) {
      setSettingsModalStatus(error?.message || "Could not delete project.", true);
      setStatus(error?.message || "Could not delete project.");
    }
  });
  settingsSavedProjects?.addEventListener("dblclick", () => {
    try {
      loadProjectFromLocalLibrary();
    } catch (error) {
      setSettingsModalStatus(error?.message || "Could not load project.", true);
      setStatus(error?.message || "Could not load project.");
    }
  });
  settingsProjectName?.addEventListener("change", () => {
    setProjectName(settingsProjectName.value, { syncInput: true });
  });
  creditsBtn?.addEventListener("click", () => {
    if (Math.max(0, Math.floor(state.credits || 0)) <= 0) {
      openCreditsModal();
      return;
    }
    setStatus(`${state.credits} credits available.`);
  });
  creditsModalCloseBtn?.addEventListener("click", closeCreditsModal);
  creditsModal?.addEventListener("pointerdown", (event) => {
    if (event.target === creditsModal) {
      closeCreditsModal();
    }
  });
  createShareLinkBtn?.addEventListener("click", async () => {
    try {
      if (createShareLinkBtn) createShareLinkBtn.disabled = true;
      const url = await createShareLink();
      const copied = await copyTextWithFallback(url, "Copy share link:");
      if (copied) {
        setShareModalStatus("Share link created and copied.");
        setStatus("Share link created and copied.");
      } else {
        setShareModalStatus("Share link created. Copy manually.");
        setStatus("Share link created. Copy manually.");
      }
    } catch (error) {
      setShareModalStatus(error?.message || "Could not create share link.", true);
      setStatus(error?.message || "Could not create share link.");
    } finally {
      if (createShareLinkBtn) createShareLinkBtn.disabled = false;
    }
  });
  copyShareLinkBtn?.addEventListener("click", async () => {
    try {
      await copyShareLink();
    } catch (error) {
      setShareModalStatus(error?.message || "Could not copy share link.", true);
      setStatus(error?.message || "Could not copy share link.");
    }
  });
  shareLinkField?.addEventListener("input", () => {
    updateCreditLockedControls();
  });
  nativeShareBtn?.addEventListener("click", async () => {
    try {
      await shareProjectJson();
    } catch (error) {
      setShareModalStatus(error?.message || "Could not share project.", true);
      setStatus(error?.message || "Could not share project.");
    }
  });
  shareModal?.addEventListener("pointerdown", (event) => {
    if (event.target === shareModal) {
      closeShareModal();
    }
  });
  settingsModal?.addEventListener("pointerdown", (event) => {
    if (event.target === settingsModal) {
      closeSettingsModal();
    }
  });
  aiImageEditPrompt?.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      handleAiImageEditGenerate();
    }
  });
  propImageDownloadBtn?.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "image" || !selected.src) {
      setStatus("Select an image to download.");
      return;
    }
    downloadImageDataUrl(selected.src, "magx-asset");
  });
  propImageVersionPrevBtn?.addEventListener("click", () =>
    runWithHistory(() => {
      const selected = getSelected();
      if (!selected || selected.type !== "image") return;
      applySelectedImageVersion((selected.aiVersionIndex || 0) - 1);
    }, "image-version")
  );
  propImageVersionNextBtn?.addEventListener("click", () =>
    runWithHistory(() => {
      const selected = getSelected();
      if (!selected || selected.type !== "image") return;
      applySelectedImageVersion((selected.aiVersionIndex || 0) + 1);
    }, "image-version")
  );
  propImageRevertOriginalBtn?.addEventListener("click", () =>
    runWithHistory(() => {
      applySelectedImageVersion(0);
    }, "image-version")
  );
  addPageBtn?.addEventListener("click", () => addNewPage());
  toolSelectBtn.addEventListener("click", () => setActiveTool("select"));
  addTextBtn.addEventListener("click", () => {
    setActiveTool("text");
    setStatus("Text tool active. Drag on canvas to draw a text box.");
  });
  publicationSizeSelect?.addEventListener("change", () =>
    runWithHistory(() => {
      if (!requireEditableStatus()) {
        updatePublicationSizeSelect();
        return;
      }
      const preset = getPublicationPresetCanvasSize(PUBLICATION_SIZE_PRESETS[publicationSizeSelect.value]);
      if (!preset) {
        setStatus("Custom size selected. Use Width and Height to set canvas size.");
        return;
      }
      const nextWidth = clamp(Number(preset.width) || 1280, CANVAS_MIN_WIDTH_PX, CANVAS_MAX_WIDTH_PX);
      const nextHeight = clamp(Number(preset.height) || 720, CANVAS_MIN_HEIGHT_PX, CANVAS_MAX_HEIGHT_PX);
      state.canvas.width = nextWidth;
      state.canvas.height = nextHeight;
      markCurrentViewDirty();
      updateCanvasSize();
      render();
      recenterCanvasViewportSoon();
      setStatus(`Canvas resized to ${inchesToDisplayString(pxToInches(nextWidth))} x ${inchesToDisplayString(pxToInches(nextHeight))} in.`);
    }, "canvas")
  );
  toolUploadBtn.addEventListener("click", () => imageInput.click());
  toolShapesBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = shapeFlyout.classList.contains("hidden-panel");
    shapeFlyout.classList.toggle("hidden-panel", !willOpen);
    toolShapesBtn.classList.toggle("is-active", willOpen);
  });
  shapeOptionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.activeShapeType = button.dataset.shapeType || "rectangle";
      runWithHistory(() => addShapeOverlay(state.activeShapeType), "add-shape");
      closeShapeFlyout();
    });
  });
  toolIconsBtn?.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
  toolIconsBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleIconFlyout();
  });
  gridBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleGridFlyout();
  });
  gridOptionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      applyLayoutGuidePreset(button.dataset.gridPreset || "none");
      closeGridFlyout();
    });
  });
  gridAdvancedToggleBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleGridAdvancedPanel();
  });
  gridAdvancedApplyBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    applyCustomGridFromInputs();
    closeGridFlyout();
  });
  [gridColumnsInput, gridGutterInput, gridMarginInput].forEach((input) => {
    input?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      event.stopPropagation();
      applyCustomGridFromInputs();
      closeGridFlyout();
    });
  });
  document.addEventListener("pointerdown", (event) => {
    if (!shapeFlyout.contains(event.target) && event.target !== toolShapesBtn && !toolShapesBtn.contains(event.target)) {
      closeShapeFlyout();
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!iconFlyout.contains(event.target) && event.target !== toolIconsBtn && !toolIconsBtn.contains(event.target)) {
      closeIconFlyout();
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!gridFlyout?.contains(event.target) && event.target !== gridBtn && !gridBtn?.contains(event.target)) {
      closeGridFlyout();
    }
  });
  document.addEventListener("pointerdown", (event) => {
    const insideCanvas = designCanvas.contains(event.target);
    const insideInspector = inspectorPanel?.contains(event.target);
    const insidePagesDrawer = pagesDrawer?.contains(event.target);
    const insideLeftToolbar = leftToolbar?.contains(event.target);
    const insideTopbar = topbar?.contains(event.target);
    if (!insideCanvas && !insideInspector && !insidePagesDrawer && !insideLeftToolbar && !insideTopbar) {
      deselect();
    }
  });

  imageInput.addEventListener("change", async () => {
    if (!requireEditableStatus()) {
      imageInput.value = "";
      return;
    }
    const file = imageInput.files?.[0];
    imageInput.value = "";
    if (!file) return;

    try {
      const src = await readFileAsDataURL(file);
      const img = await createImage(src);
      const maxWidth = 460;
      const scale = Math.min(1, maxWidth / img.width);
      const width = Math.max(60, Math.round(img.width * scale));
      const height = Math.max(60, Math.round(img.height * scale));
      const insert = getDefaultInsertPoint(width, height);
      runWithHistory(() => {
        addElement({
          type: "image",
          src,
          x: insert.x,
          y: insert.y,
          width,
          height,
        });
      });
      setActiveTool("select");
    } catch (error) {
      setStatus(error.message || "Could not add image.");
    }
  });

  bringFrontBtn?.addEventListener("click", () => runWithHistory(() => bringSelectedToFront(), "layer-action"));
  sendBackBtn?.addEventListener("click", () => runWithHistory(() => sendSelectedToBack(), "layer-action"));

  const applyCanvasSizeFromInputs = () =>
    runWithHistory(() => {
      if (!requireEditableStatus()) return;
      const nextWidthIn = Number(canvasWidthInput.value);
      const nextHeightIn = Number(canvasHeightInput.value);
      const nextWidth = clamp(
        Number.isFinite(nextWidthIn) ? inchesToCanvasPx(nextWidthIn) : state.canvas.width,
        CANVAS_MIN_WIDTH_PX,
        CANVAS_MAX_WIDTH_PX
      );
      const nextHeight = clamp(
        Number.isFinite(nextHeightIn) ? inchesToCanvasPx(nextHeightIn) : state.canvas.height,
        CANVAS_MIN_HEIGHT_PX,
        CANVAS_MAX_HEIGHT_PX
      );
      state.canvas.width = nextWidth;
      state.canvas.height = nextHeight;
      markCurrentViewDirty();
      updateCanvasSize();
      render();
      recenterCanvasViewportSoon();
      setStatus(`Canvas resized to ${inchesToDisplayString(pxToInches(nextWidth))} x ${inchesToDisplayString(pxToInches(nextHeight))} in.`);
    }, "canvas");
  applyCanvasSizeBtn.addEventListener("click", applyCanvasSizeFromInputs);
  [canvasWidthInput, canvasHeightInput].forEach((input) => {
    input?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      applyCanvasSizeFromInputs();
    });
  });
  canvasBgColorInput.addEventListener("input", () => {
    if (!requireEditableStatus()) return;
    const next = normalizeHexColor(canvasBgColorInput.value, "#f6f7fb");
    state.canvas.background = next;
    setHexInputValue(canvasBgColorHexInput, next);
    markCurrentViewDirty();
    updateCanvasBackground();
    render();
  });
  bindHexInputEvents(canvasBgColorHexInput, "#f6f7fb", (next) => {
    if (!requireEditableStatus()) return;
    state.canvas.background = normalizeHexColor(next, "#f6f7fb");
    canvasBgColorInput.value = state.canvas.background;
    markCurrentViewDirty();
    updateCanvasBackground();
    render();
  });

  zoomInBtn.addEventListener("click", () => setZoom(state.zoom + 0.1));
  zoomOutBtn.addEventListener("click", () => setZoom(state.zoom - 0.1));
  if (zoomResetBtn) {
    zoomResetBtn.addEventListener("click", () => setZoom(1));
  }
  if (undoBtn) undoBtn.addEventListener("click", undoAction);
  if (redoBtn) redoBtn.addEventListener("click", redoAction);
  if (groupBtn) groupBtn.addEventListener("click", () => runWithHistory(() => groupSelectedElements(), "group-elements"));
  if (ungroupBtn) ungroupBtn.addEventListener("click", () => runWithHistory(() => ungroupSelectedElements(), "group-elements"));

  previewBtn.addEventListener("click", async () => {
    try {
      if (previewBtn) previewBtn.disabled = true;
      setStatus("Preparing preview...");
      bindPreviewMessageListener();
      const url = await createShareLink();
      const previewWindow = window.open(url, "_blank");
      if (previewWindow) {
        activePreviewWindowRef = previewWindow;
        setStatus("Preview opened.");
      } else {
        window.location.assign(url);
      }
    } catch (error) {
      setStatus(error?.message || "Could not open preview.");
    } finally {
      if (previewBtn) previewBtn.disabled = false;
    }
  });
  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener("click", async () => {
      try {
        await copyHtmlPackage();
      } catch {
        setStatus("Clipboard permission denied. Use Export Zip instead.");
      }
    });
  }
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener("click", exportJson);
  }

  designCanvas.addEventListener("pointerdown", (event) => {
    if (event.target === designCanvas) {
      if (state.activeTool !== "select") {
        placeFromTool(event);
        return;
      }
      deselect();
    }
  });
  designCanvas.addEventListener("dragover", (event) => {
    if (state.isReadOnly) return;
    const hasFiles = Array.from(event.dataTransfer?.types || []).includes("Files");
    if (hasFiles) {
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
    }
  });
  designCanvas.addEventListener("drop", async (event) => {
    if (state.isReadOnly) return;
    const file = Array.from(event.dataTransfer?.files || []).find((entry) => String(entry.type || "").startsWith("image/"));
    if (!file) return;
    event.preventDefault();
    const node = event.target.closest?.(".bf-node");
    const targetId = node?.dataset?.id || null;
    const targetElementId = state.elements.some((item) => item.id === targetId && (item.type === "shape" || item.type === "text"))
      ? targetId
      : state.selectedId;
    if (targetElementId) {
      selectElement(targetElementId);
    }
    try {
      await applyDroppedImageMask(file, targetElementId);
    } catch (error) {
      setStatus(error?.message || "Could not apply dropped image.");
    }
  });
  canvasPanel?.addEventListener("pointerdown", (event) => {
    const isPanGesture = isSpacePanPressed || event.button === 1;
    if (event.button !== 0 && event.button !== 1) return;
    if (!isPanGesture) {
      if (state.activeTool !== "select") return;
      if (event.target.closest(".bf-node")) return;
      if (event.target.closest(".bf-resize-handle")) return;
      if (event.target.closest("input, textarea, select, button, label")) return;
    }
    event.preventDefault();

    state.pan = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      startScrollLeft: canvasPanel.scrollLeft,
      startScrollTop: canvasPanel.scrollTop,
    };
    canvasPanel.classList.add("is-panning");
  });

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);

  propX.addEventListener("input", () => {
    const value = Number(propX.value);
    if (!Number.isFinite(value)) return;
    applyInspectorPatch({ x: value });
  });
  propY.addEventListener("input", () => {
    const value = Number(propY.value);
    if (!Number.isFinite(value)) return;
    applyInspectorPatch({ y: value });
  });
  const commitTransformSizeInput = (dimension) => {
    const input = dimension === "width" ? propWidth : propHeight;
    const value = Number(input?.value);
    if (!Number.isFinite(value)) return;
    applyInspectorPatch({ [dimension]: clamp(value, 20, 4096) });
  };
  propWidth.addEventListener("change", () => commitTransformSizeInput("width"));
  propHeight.addEventListener("change", () => commitTransformSizeInput("height"));
  propWidth.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    commitTransformSizeInput("width");
    propWidth.blur();
  });
  propHeight.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    commitTransformSizeInput("height");
    propHeight.blur();
  });
  const applyRotation = (value) => {
    const next = clamp(Number(value) || 0, -360, 360);
    syncRangeNumber(propRotation, propRotationNumber, next);
    applyInspectorPatch({ rotation: next });
  };
  propRotation.addEventListener("input", () => applyRotation(propRotation.value));
  propRotationNumber?.addEventListener("input", () => applyRotation(propRotationNumber.value));
  propOpacity.addEventListener("input", () => applyInspectorPatch({ opacity: clamp((Number(propOpacity.value) || 0) / 100, 0, 1) }));

  const applyFontSize = (value) => {
    const next = clamp(Number(value) || 12, 8, 2000);
    syncRangeNumber(propFontSize, propFontSizeNumber, next);
    applyInspectorPatch({ fontSize: next });
  };
  propFontSize.addEventListener("input", () => applyFontSize(propFontSize.value));
  propFontSizeNumber?.addEventListener("input", () => applyFontSize(propFontSizeNumber.value));
  propFontFamily.addEventListener("change", () => applyInspectorPatch({ fontFamily: propFontFamily.value || "sans-serif" }));
  propFontWeight?.addEventListener("change", () => applyInspectorPatch({ fontWeight: normalizeFontWeight(propFontWeight.value) }));
  propTextColor.addEventListener("input", () => {
    const next = normalizeHexColor(propTextColor.value, "#11131f");
    propTextColor.value = next;
    setHexInputValue(propTextColorHex, next);
    applyInspectorPatch({ textColor: next });
  });
  propTextFillMode?.addEventListener("change", () => {
    const mode = normalizeFillMode(propTextFillMode.value, "solid");
    applyInspectorPatch({ textFillMode: mode });
    updateFillModeInspectorVisibility();
  });
  propTextGradientFrom?.addEventListener("input", () => {
    applyInspectorPatch({ textGradientFrom: normalizeHexColor(propTextGradientFrom.value, "#11131f"), textFillMode: "gradient" });
    if (propTextFillMode) propTextFillMode.value = "gradient";
    updateFillModeInspectorVisibility();
  });
  propTextGradientTo?.addEventListener("input", () => {
    applyInspectorPatch({ textGradientTo: normalizeHexColor(propTextGradientTo.value, "#6f7380"), textFillMode: "gradient" });
    if (propTextFillMode) propTextFillMode.value = "gradient";
    updateFillModeInspectorVisibility();
  });
  propTextGradientAngle?.addEventListener("input", () => {
    applyInspectorPatch({ textGradientAngle: normalizeGradientAngle(propTextGradientAngle.value, 90), textFillMode: "gradient" });
    if (propTextFillMode) propTextFillMode.value = "gradient";
    updateFillModeInspectorVisibility();
  });
  propTextGradientPresets.forEach((button) => {
    button.addEventListener("click", () => {
      const from = normalizeHexColor(button.dataset.from, "#11131f");
      const to = normalizeHexColor(button.dataset.to, "#6f7380");
      const angle = normalizeGradientAngle(button.dataset.angle, 90);
      applyInspectorPatch({
        textFillMode: "gradient",
        textGradientFrom: from,
        textGradientTo: to,
        textGradientAngle: angle,
      });
      if (propTextFillMode) propTextFillMode.value = "gradient";
      if (propTextGradientFrom) propTextGradientFrom.value = from;
      if (propTextGradientTo) propTextGradientTo.value = to;
      if (propTextGradientAngle) propTextGradientAngle.value = String(angle);
      updateFillModeInspectorVisibility();
    });
  });
  propTextImageUploadBtn?.addEventListener("click", () => {
    if (!requireEditableStatus()) return;
    propTextImageInput?.click();
  });
  propTextImageInput?.addEventListener("change", async () => {
    if (!requireEditableStatus()) {
      if (propTextImageInput) propTextImageInput.value = "";
      return;
    }
    const file = propTextImageInput?.files?.[0];
    if (propTextImageInput) propTextImageInput.value = "";
    if (!file) return;
    try {
      const src = await readFileAsDataURL(file);
      applyInspectorPatch({
        textFillMode: "image",
        textFillImageSrc: src,
        textFillImageScale: 100,
        textFillImageX: 50,
        textFillImageY: 50,
      });
      if (propTextFillMode) propTextFillMode.value = "image";
      updateFillModeInspectorVisibility();
    } catch (error) {
      setStatus(error?.message || "Could not load text fill image.");
    }
  });
  propTextImageClearBtn?.addEventListener("click", () => {
    applyInspectorPatch({ textFillMode: "solid", textFillImageSrc: null });
    if (propTextFillMode) propTextFillMode.value = "solid";
    updateFillModeInspectorVisibility();
  });
  propTextImageScale?.addEventListener("input", () => {
    applyInspectorPatch({ textFillMode: "image", textFillImageScale: getTextImageScale({ textFillImageScale: propTextImageScale.value }) });
    if (propTextFillMode) propTextFillMode.value = "image";
    updateFillModeInspectorVisibility();
  });
  propTextImageX?.addEventListener("input", () => {
    applyInspectorPatch({ textFillMode: "image", textFillImageX: getTextImageX({ textFillImageX: propTextImageX.value }) });
    if (propTextFillMode) propTextFillMode.value = "image";
    updateFillModeInspectorVisibility();
  });
  propTextImageY?.addEventListener("input", () => {
    applyInspectorPatch({ textFillMode: "image", textFillImageY: getTextImageY({ textFillImageY: propTextImageY.value }) });
    if (propTextFillMode) propTextFillMode.value = "image";
    updateFillModeInspectorVisibility();
  });
  propTextAlignLeft?.addEventListener("click", () => {
    applyInspectorPatch({ textAlign: "left" });
    endHistoryGroup("inspector");
  });
  propTextAlignCenter?.addEventListener("click", () => {
    applyInspectorPatch({ textAlign: "center" });
    endHistoryGroup("inspector");
  });
  propTextAlignRight?.addEventListener("click", () => {
    applyInspectorPatch({ textAlign: "right" });
    endHistoryGroup("inspector");
  });
  propTextUnderline?.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "text") return;
    const next = !selected.textUnderline;
    applyInspectorPatch({ textUnderline: next });
    setTextDecorationButtons({ ...selected, textUnderline: next });
    endHistoryGroup("inspector");
  });
  propTextStrikethrough?.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "text") return;
    const next = !selected.textStrikethrough;
    applyInspectorPatch({ textStrikethrough: next });
    setTextDecorationButtons({ ...selected, textStrikethrough: next });
    endHistoryGroup("inspector");
  });
  propTextAllCaps?.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "text") return;
    const current = normalizeTextCase(selected.textCase);
    const next = current === "uppercase" ? "normal" : "uppercase";
    applyInspectorPatch({ textCase: next });
    setTextOpenTypeButtons({ ...selected, textCase: next });
    endHistoryGroup("inspector");
  });
  propTextSmallCaps?.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "text") return;
    const current = normalizeTextCase(selected.textCase);
    const next = current === "small-caps" ? "normal" : "small-caps";
    applyInspectorPatch({ textCase: next });
    setTextOpenTypeButtons({ ...selected, textCase: next });
    endHistoryGroup("inspector");
  });
  propTextSuperscript?.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "text") return;
    const current = normalizeTextScript(selected.textScript);
    const next = current === "superscript" ? "normal" : "superscript";
    applyInspectorPatch({ textScript: next });
    setTextOpenTypeButtons({ ...selected, textScript: next });
    endHistoryGroup("inspector");
  });
  propTextSubscript?.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "text") return;
    const current = normalizeTextScript(selected.textScript);
    const next = current === "subscript" ? "normal" : "subscript";
    applyInspectorPatch({ textScript: next });
    setTextOpenTypeButtons({ ...selected, textScript: next });
    endHistoryGroup("inspector");
  });
  const applyTracking = (value) => {
    const next = normalizeTracking(value);
    syncRangeNumber(propTracking, propTrackingNumber, next);
    applyInspectorPatch({ tracking: next });
  };
  propTracking?.addEventListener("input", () => applyTracking(propTracking.value));
  propTrackingNumber?.addEventListener("input", () => applyTracking(propTrackingNumber.value));
  const applyLineHeight = (value) => {
    const next = clamp(Number(value) || 1.2, 0.8, 3);
    syncRangeNumber(propLineHeight, propLineHeightNumber, next);
    applyInspectorPatch({ lineHeight: next });
  };
  const applyWordSpacing = (value) => {
    const next = clamp(Number(value) || 0, -5, 40);
    syncRangeNumber(propWordSpacing, propWordSpacingNumber, next);
    applyInspectorPatch({ wordSpacing: next });
  };
  propLineHeight?.addEventListener("input", () => applyLineHeight(propLineHeight.value));
  propLineHeightNumber?.addEventListener("input", () => applyLineHeight(propLineHeightNumber.value));
  propWordSpacing?.addEventListener("input", () => applyWordSpacing(propWordSpacing.value));
  propWordSpacingNumber?.addEventListener("input", () => applyWordSpacing(propWordSpacingNumber.value));
  bindRangeReset(propFontSize, 36, () =>
    runWithHistory(
      () => applyFontSize(36),
      "inspector"
    )
  );
  bindRangeReset(propTextGradientAngle, 90, () =>
    runWithHistory(
      () => {
        applyInspectorPatch({ textGradientAngle: normalizeGradientAngle(90, 90), textFillMode: "gradient" });
        if (propTextFillMode) propTextFillMode.value = "gradient";
        updateFillModeInspectorVisibility();
      },
      "inspector"
    )
  );
  bindRangeReset(propTextImageScale, 100, () =>
    runWithHistory(
      () => {
        applyInspectorPatch({ textFillMode: "image", textFillImageScale: getTextImageScale({ textFillImageScale: 100 }) });
        if (propTextFillMode) propTextFillMode.value = "image";
        updateFillModeInspectorVisibility();
      },
      "inspector"
    )
  );
  bindRangeReset(propTextImageX, 50, () =>
    runWithHistory(
      () => {
        applyInspectorPatch({ textFillMode: "image", textFillImageX: getTextImageX({ textFillImageX: 50 }) });
        if (propTextFillMode) propTextFillMode.value = "image";
        updateFillModeInspectorVisibility();
      },
      "inspector"
    )
  );
  bindRangeReset(propTextImageY, 50, () =>
    runWithHistory(
      () => {
        applyInspectorPatch({ textFillMode: "image", textFillImageY: getTextImageY({ textFillImageY: 50 }) });
        if (propTextFillMode) propTextFillMode.value = "image";
        updateFillModeInspectorVisibility();
      },
      "inspector"
    )
  );
  bindRangeReset(propTracking, 0, () =>
    runWithHistory(
      () => applyTracking(0),
      "inspector"
    )
  );
  bindRangeReset(propLineHeight, 1.2, () =>
    runWithHistory(
      () => applyLineHeight(1.2),
      "inspector"
    )
  );
  bindRangeReset(propWordSpacing, 0, () =>
    runWithHistory(
      () => applyWordSpacing(0),
      "inspector"
    )
  );

  propFill.addEventListener("input", () => {
    const next = normalizeHexColor(propFill.value, "#595959");
    propFill.value = next;
    setHexInputValue(propFillHex, next);
    applyInspectorPatch({ fill: next });
  });
  propShapeFillMode?.addEventListener("change", () => {
    const mode = normalizeFillMode(propShapeFillMode.value, "solid");
    applyInspectorPatch({ shapeFillMode: mode });
    updateFillModeInspectorVisibility();
  });
  propShapeGradientFrom?.addEventListener("input", () => {
    applyInspectorPatch({ shapeGradientFrom: normalizeHexColor(propShapeGradientFrom.value, "#595959"), shapeFillMode: "gradient" });
    if (propShapeFillMode) propShapeFillMode.value = "gradient";
    updateFillModeInspectorVisibility();
  });
  propShapeGradientTo?.addEventListener("input", () => {
    applyInspectorPatch({ shapeGradientTo: normalizeHexColor(propShapeGradientTo.value, "#9d9d9d"), shapeFillMode: "gradient" });
    if (propShapeFillMode) propShapeFillMode.value = "gradient";
    updateFillModeInspectorVisibility();
  });
  propShapeGradientAngle?.addEventListener("input", () => {
    applyInspectorPatch({ shapeGradientAngle: normalizeGradientAngle(propShapeGradientAngle.value, 90), shapeFillMode: "gradient" });
    if (propShapeFillMode) propShapeFillMode.value = "gradient";
    updateFillModeInspectorVisibility();
  });
  propShapeGradientPresets.forEach((button) => {
    button.addEventListener("click", () => {
      const from = normalizeHexColor(button.dataset.from, "#595959");
      const to = normalizeHexColor(button.dataset.to, "#9d9d9d");
      const angle = normalizeGradientAngle(button.dataset.angle, 90);
      applyInspectorPatch({
        shapeFillMode: "gradient",
        shapeGradientFrom: from,
        shapeGradientTo: to,
        shapeGradientAngle: angle,
      });
      if (propShapeFillMode) propShapeFillMode.value = "gradient";
      if (propShapeGradientFrom) propShapeGradientFrom.value = from;
      if (propShapeGradientTo) propShapeGradientTo.value = to;
      if (propShapeGradientAngle) propShapeGradientAngle.value = String(angle);
      updateFillModeInspectorVisibility();
    });
  });
  propShapeImageUploadBtn?.addEventListener("click", () => {
    if (!requireEditableStatus()) return;
    propShapeImageInput?.click();
  });
  propShapeImageInput?.addEventListener("change", async () => {
    if (!requireEditableStatus()) {
      if (propShapeImageInput) propShapeImageInput.value = "";
      return;
    }
    const file = propShapeImageInput?.files?.[0];
    if (propShapeImageInput) propShapeImageInput.value = "";
    if (!file) return;
    try {
      const src = await readFileAsDataURL(file);
      applyInspectorPatch({
        shapeFillMode: "image",
        shapeFillImageSrc: src,
        shapeFillImageScale: 100,
        shapeFillImageX: 50,
        shapeFillImageY: 50,
      });
      if (propShapeFillMode) propShapeFillMode.value = "image";
      updateFillModeInspectorVisibility();
    } catch (error) {
      setStatus(error?.message || "Could not load fill image.");
    }
  });
  propShapeImageClearBtn?.addEventListener("click", () => {
    applyInspectorPatch({ shapeFillMode: "solid", shapeFillImageSrc: null });
    if (propShapeFillMode) propShapeFillMode.value = "solid";
    updateFillModeInspectorVisibility();
  });
  propShapeImageScale?.addEventListener("input", () => {
    applyInspectorPatch({ shapeFillMode: "image", shapeFillImageScale: getShapeImageScale({ shapeFillImageScale: propShapeImageScale.value }) });
    if (propShapeFillMode) propShapeFillMode.value = "image";
    updateFillModeInspectorVisibility();
  });
  propShapeImageX?.addEventListener("input", () => {
    applyInspectorPatch({ shapeFillMode: "image", shapeFillImageX: getShapeImageX({ shapeFillImageX: propShapeImageX.value }) });
    if (propShapeFillMode) propShapeFillMode.value = "image";
    updateFillModeInspectorVisibility();
  });
  propShapeImageY?.addEventListener("input", () => {
    applyInspectorPatch({ shapeFillMode: "image", shapeFillImageY: getShapeImageY({ shapeFillImageY: propShapeImageY.value }) });
    if (propShapeFillMode) propShapeFillMode.value = "image";
    updateFillModeInspectorVisibility();
  });
  propStroke.addEventListener("input", () => {
    const next = normalizeHexColor(propStroke.value, "#11131f");
    propStroke.value = next;
    setHexInputValue(propStrokeHex, next);
    applyInspectorPatch({ stroke: next });
  });
  const applyStrokeWidth = (value) => {
    const next = clamp(Number(value) || 0, 0, 80);
    syncRangeNumber(propStrokeWidth, propStrokeWidthNumber, next);
    applyInspectorPatch({
      strokeWidth: next,
      strokeTop: next,
      strokeRight: next,
      strokeBottom: next,
      strokeLeft: next,
    });
  };
  const applyRadius = (value) => {
    const next = clamp(Number(value) || 0, 0, 200);
    syncRangeNumber(propRadius, propRadiusNumber, next);
    applyInspectorPatch({ radius: next });
  };
  propStrokeWidth.addEventListener("input", () => applyStrokeWidth(propStrokeWidth.value));
  propStrokeWidthNumber?.addEventListener("input", () => applyStrokeWidth(propStrokeWidthNumber.value));
  const applyStrokeSide = (key, value) => {
    const next = clamp(Number(value) || 0, 0, 80);
    const selected = getSelected();
    const current = getBorderWidths(selected || {});
    const nextSides = { ...current, [key]: next };
    if (propStrokeTop) propStrokeTop.value = String(nextSides.top);
    if (propStrokeRight) propStrokeRight.value = String(nextSides.right);
    if (propStrokeBottom) propStrokeBottom.value = String(nextSides.bottom);
    if (propStrokeLeft) propStrokeLeft.value = String(nextSides.left);
    const representative = Math.max(nextSides.top, nextSides.right, nextSides.bottom, nextSides.left);
    syncRangeNumber(propStrokeWidth, propStrokeWidthNumber, representative);
    applyInspectorPatch({
      strokeTop: nextSides.top,
      strokeRight: nextSides.right,
      strokeBottom: nextSides.bottom,
      strokeLeft: nextSides.left,
      strokeWidth: representative,
    });
  };
  propStrokeTop?.addEventListener("input", () => applyStrokeSide("top", propStrokeTop.value));
  propStrokeRight?.addEventListener("input", () => applyStrokeSide("right", propStrokeRight.value));
  propStrokeBottom?.addEventListener("input", () => applyStrokeSide("bottom", propStrokeBottom.value));
  propStrokeLeft?.addEventListener("input", () => applyStrokeSide("left", propStrokeLeft.value));
  propShapePreviewFullWidth?.addEventListener("change", () => {
    const selected = getSelected();
    if (!selected || selected.type !== "shape" || selected.shapeKind !== "rectangle") {
      if (propShapePreviewFullWidth) propShapePreviewFullWidth.checked = false;
      return;
    }
    applyInspectorPatch({ previewFullWidth: Boolean(propShapePreviewFullWidth.checked) });
  });
  propRadius.addEventListener("input", () => applyRadius(propRadius.value));
  propRadiusNumber?.addEventListener("input", () => applyRadius(propRadiusNumber.value));
  propImageFit.addEventListener("input", () => applyInspectorPatch({ imageFit: propImageFit.value || "cover" }));
  propImageFocalX.addEventListener("input", () => applyInspectorPatch({ focalX: clamp(Number(propImageFocalX.value) || 50, 0, 100) }));
  propImageFocalY.addEventListener("input", () => applyInspectorPatch({ focalY: clamp(Number(propImageFocalY.value) || 50, 0, 100) }));
  propImageBrightness?.addEventListener("input", () =>
    applyInspectorPatch({ imageBrightness: normalizeImageFilterValue(propImageBrightness.value, "percent") })
  );
  propImageContrast?.addEventListener("input", () =>
    applyInspectorPatch({ imageContrast: normalizeImageFilterValue(propImageContrast.value, "percent") })
  );
  propImageSaturation?.addEventListener("input", () =>
    applyInspectorPatch({ imageSaturation: normalizeImageFilterValue(propImageSaturation.value, "percent") })
  );
  propImageBlur?.addEventListener("input", () =>
    applyInspectorPatch({ imageBlur: normalizeImageFilterValue(propImageBlur.value, "blur") })
  );
  propImageGrayscale?.addEventListener("input", () =>
    applyInspectorPatch({ imageGrayscale: clamp(Number(propImageGrayscale.value) || 0, 0, 100) })
  );
  propImageSepia?.addEventListener("input", () =>
    applyInspectorPatch({ imageSepia: clamp(Number(propImageSepia.value) || 0, 0, 100) })
  );
  propImageHue?.addEventListener("input", () =>
    applyInspectorPatch({ imageHue: normalizeImageFilterValue(propImageHue.value, "hue") })
  );
  bindRangeReset(propImageBrightness, 100, () =>
    runWithHistory(
      () => applyInspectorPatch({ imageBrightness: normalizeImageFilterValue(100, "percent") }),
      "inspector"
    )
  );
  bindRangeReset(propImageContrast, 100, () =>
    runWithHistory(
      () => applyInspectorPatch({ imageContrast: normalizeImageFilterValue(100, "percent") }),
      "inspector"
    )
  );
  bindRangeReset(propImageSaturation, 100, () =>
    runWithHistory(
      () => applyInspectorPatch({ imageSaturation: normalizeImageFilterValue(100, "percent") }),
      "inspector"
    )
  );
  bindRangeReset(propImageBlur, 0, () =>
    runWithHistory(
      () => applyInspectorPatch({ imageBlur: normalizeImageFilterValue(0, "blur") }),
      "inspector"
    )
  );
  bindRangeReset(propImageGrayscale, 0, () =>
    runWithHistory(
      () => applyInspectorPatch({ imageGrayscale: clamp(0, 0, 100) }),
      "inspector"
    )
  );
  bindRangeReset(propImageSepia, 0, () =>
    runWithHistory(
      () => applyInspectorPatch({ imageSepia: clamp(0, 0, 100) }),
      "inspector"
    )
  );
  bindRangeReset(propImageHue, 0, () =>
    runWithHistory(
      () => applyInspectorPatch({ imageHue: normalizeImageFilterValue(0, "hue") }),
      "inspector"
    )
  );
  propIconName?.addEventListener("change", () => applyInspectorPatch({ iconName: resolveSafeIconName(propIconName.value || "star") }));
  propIconColor?.addEventListener("input", () => {
    const next = normalizeHexColor(propIconColor.value, "#1f1f1f");
    propIconColor.value = next;
    setHexInputValue(propIconColorHex, next);
    applyInspectorPatch({ iconColor: next });
  });

  bindHexInputEvents(propTextColorHex, "#11131f", (next) => {
    const normalized = normalizeHexColor(next, "#11131f");
    propTextColor.value = normalized;
    applyInspectorPatch({ textColor: normalized });
  });
  bindHexInputEvents(propFillHex, "#595959", (next) => {
    const normalized = normalizeHexColor(next, "#595959");
    propFill.value = normalized;
    applyInspectorPatch({ fill: normalized });
  });
  bindHexInputEvents(propStrokeHex, "#11131f", (next) => {
    const normalized = normalizeHexColor(next, "#11131f");
    propStroke.value = normalized;
    applyInspectorPatch({ stroke: normalized });
  });
  bindHexInputEvents(propIconColorHex, "#1f1f1f", (next) => {
    const normalized = normalizeHexColor(next, "#1f1f1f");
    if (propIconColor) propIconColor.value = normalized;
    applyInspectorPatch({ iconColor: normalized });
  });
  const applyIconStrokeWidth = (value) => {
    const next = clamp(Number(value) || 1.75, 1, 4);
    syncRangeNumber(propIconStrokeWidth, propIconStrokeWidthNumber, next);
    applyInspectorPatch({ iconStrokeWidth: next });
  };
  propIconStrokeWidth?.addEventListener("input", () => applyIconStrokeWidth(propIconStrokeWidth.value));
  propIconStrokeWidthNumber?.addEventListener("input", () => applyIconStrokeWidth(propIconStrokeWidthNumber.value));

  const historyInputs = [
    canvasWidthInput,
    canvasHeightInput,
    canvasBgColorInput,
    canvasBgColorHexInput,
    propX,
    propY,
    propWidth,
    propHeight,
    propRotation,
    propRotationNumber,
    propOpacity,
    propFontSize,
    propFontSizeNumber,
    propFontFamily,
    propFontWeight,
    propTextColor,
    propTextColorHex,
    propTextFillMode,
    propTextGradientFrom,
    propTextGradientTo,
    propTextGradientAngle,
    propTextImageScale,
    propTextImageX,
    propTextImageY,
    propTracking,
    propTrackingNumber,
    propTextUnderline,
    propTextStrikethrough,
    propTextAllCaps,
    propTextSmallCaps,
    propTextSuperscript,
    propTextSubscript,
    propLineHeight,
    propLineHeightNumber,
    propWordSpacing,
    propWordSpacingNumber,
    propFill,
    propFillHex,
    propShapeFillMode,
    propShapeGradientFrom,
    propShapeGradientTo,
    propShapeGradientAngle,
    propShapeImageScale,
    propShapeImageX,
    propShapeImageY,
    propStroke,
    propStrokeHex,
    propStrokeWidth,
    propStrokeWidthNumber,
    propStrokeTop,
    propStrokeRight,
    propStrokeBottom,
    propStrokeLeft,
    propShapePreviewFullWidth,
    propRadius,
    propRadiusNumber,
    propImageFit,
    propImageFocalX,
    propImageFocalY,
    propImageBrightness,
    propImageContrast,
    propImageSaturation,
    propImageBlur,
    propImageGrayscale,
    propImageSepia,
    propImageHue,
    propIconName,
    propIconColor,
    propIconColorHex,
    propIconStrokeWidth,
    propIconStrokeWidthNumber,
  ];
  historyInputs.forEach((control) => {
    control?.addEventListener("focus", () => beginHistoryGroup("inspector"), true);
    control?.addEventListener("blur", () => endHistoryGroup("inspector"), true);
  });

  window.addEventListener("keydown", (event) => {
    const active = document.activeElement;
    const isTyping = isTypingElement(active);

    if (event.code === "Space" && !isTyping) {
      isSpacePanPressed = true;
      document.body.classList.add("is-pan-mode");
      event.preventDefault();
      return;
    }

    const key = event.key.toLowerCase();
    const withCommand = event.metaKey || event.ctrlKey;

    if (withCommand && !event.shiftKey && key === "g") {
      if (!isTyping) {
        event.preventDefault();
        if (!requireEditableStatus()) return;
        runWithHistory(() => groupSelectedElements(), "group-elements");
      }
      return;
    }
    if (withCommand && event.shiftKey && key === "g") {
      if (!isTyping) {
        event.preventDefault();
        if (!requireEditableStatus()) return;
        runWithHistory(() => ungroupSelectedElements(), "group-elements");
      }
      return;
    }
    if (withCommand && !event.shiftKey && key === "z") {
      if (!isTyping) {
        event.preventDefault();
        undoAction();
      }
      return;
    }
    if ((withCommand && event.shiftKey && key === "z") || (event.ctrlKey && !event.shiftKey && key === "y")) {
      if (!isTyping) {
        event.preventDefault();
        redoAction();
      }
      return;
    }
    if (!withCommand && key.startsWith("arrow")) {
      if (!isTyping && (!exportModal || exportModal.classList.contains("hidden"))) {
        if (!requireEditableStatus()) return;
        const step = event.shiftKey ? 10 : 1;
        const delta = {
          arrowleft: { x: -step, y: 0 },
          arrowright: { x: step, y: 0 },
          arrowup: { x: 0, y: -step },
          arrowdown: { x: 0, y: step },
        }[key];
        if (delta) {
          event.preventDefault();
          runWithHistory(() => nudgeSelectedElements(delta.x, delta.y), "nudge");
        }
      }
      return;
    }

    if (event.key === "Escape" && aiModal && !aiModal.classList.contains("hidden")) {
      closeAiModal();
      return;
    }
    if (event.key === "Escape" && state.textDraw?.active) {
      state.textDraw = null;
      render();
      return;
    }
    if (event.key === "Escape" && aiImageModal && !aiImageModal.classList.contains("hidden")) {
      closeAiImageModal();
      return;
    }
    if (event.key === "Escape" && aiImageEditModal && !aiImageEditModal.classList.contains("hidden")) {
      closeAiImageEditModal();
      return;
    }
    if (event.key === "Escape" && clearCanvasModal && !clearCanvasModal.classList.contains("hidden")) {
      closeClearCanvasModal();
      return;
    }
    if (event.key === "Escape" && exportModal && !exportModal.classList.contains("hidden")) {
      closeExportModal();
      return;
    }
    if (event.key === "Escape" && shareModal && !shareModal.classList.contains("hidden")) {
      closeShareModal();
      return;
    }
    if (event.key === "Escape" && settingsModal && !settingsModal.classList.contains("hidden")) {
      closeSettingsModal();
      return;
    }
    if (event.key === "Escape" && creditsModal && !creditsModal.classList.contains("hidden")) {
      closeCreditsModal();
      return;
    }
    if (event.key === "Escape" && gridFlyout && !gridFlyout.classList.contains("hidden-panel")) {
      closeGridFlyout();
      return;
    }
    if (event.key === "Delete" || event.key === "Backspace") {
      if (!isTyping) {
        event.preventDefault();
        if (!requireEditableStatus()) return;
        runWithHistory(() => removeSelected(), "layer-action");
      }
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.code !== "Space") return;
    isSpacePanPressed = false;
    document.body.classList.remove("is-pan-mode");
  });
  window.addEventListener("blur", () => {
    isSpacePanPressed = false;
    document.body.classList.remove("is-pan-mode");
  });
  window.addEventListener("resize", () => {
    updateCanvasWorkspaceBounds();
    ensureCanvasFitsWorkspace();
    if (state.zoom <= 1) centerCanvasViewport();
  });
}

async function init() {
  loadCredits();
  loadAiImagePrefs();
  removeEditorShareUi();
  populateIconControls();
  updateGridFlyoutOptions();
  updateAiImageRegenerateButton();
  updateCreditsUI();
  setShareLinkValue("");
  setReadOnlyMode(false);
  bindEvents();
  updateToolButtons();
  updateViewButtons();
  updateHistoryButtons();
  updateCanvasSize();
  updateCanvasBackground();
  updateZoomLabel();
  setTextAlignButtons("left");
  applyCanvasTransform();
  render();
  requestAnimationFrame(() => {
    centerCanvasViewport();
  });
  state.undoStack = [];
  state.redoStack = [];
  updateHistoryButtons();
  hydrateIcons();
  try {
    const loaded = await loadSharedProjectFromUrlIfPresent();
    if (!loaded) {
      setStatus("Ready. Add elements and start composing your layout.");
    } else {
      setStatus("Shared project loaded in view-only mode.");
    }
  } catch (error) {
    setStatus(error?.message || "Could not load shared project.");
  }
}

init();
