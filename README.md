# MagX

MagX is a freeform multi-page layout editor with AI-assisted page generation.

## App Surfaces

- `/` landing page (`index.html`)
- `/editor` editor workspace (`editor.html`, `editor.js`, `editor.css`)
- `/magx` alias route for the editor workspace
- `POST /api/layout-generate` AI layout endpoint (`server.js`)
- `POST /api/image-generate` AI image generation/edit endpoint (`server.js`)

## Requirements

- Node.js 18+ (for built-in `fetch` support)
- At least one API key:
  - `ANTHROPIC_API_KEY`, or
  - `GOOGLE_API_KEY` (or `GEMINI_API_KEY`) for AI layout generation
- `RECRAFT_API_TOKEN` for AI image generation/edit

## Local Setup

1. Copy environment template:
   ```bash
   cp .env.example .env
   ```
2. Set your API key(s) in `.env`.
3. Start the server:
   ```bash
   node server.js
   ```
4. Open:
   - `http://127.0.0.1:4174/`
   - `http://127.0.0.1:4174/editor`

## AI Layout Generation

`POST /api/layout-generate`

Request body:

```json
{
  "prompt": "Landing page for a creative agency",
  "style": "magx-inspired",
  "pageCount": 3
}
```

Behavior:

- `pageCount` is clamped to `1-5`.
- Server tries Anthropic first when configured, then Gemini/Google.
- Editor falls back to local generation if remote AI generation fails.

## AI Image Generation / Edit

`POST /api/image-generate`

Request body:

```json
{
  "prompt": "Cinematic studio portrait with soft rim light",
  "model": "recraftv4",
  "aspectRatio": "1:1",
  "resolution": "1K"
}
```

Behavior:

- `model` is forwarded to Recraft (`recraftv3`, `recraftv4`, `recraftv4_pro`).
- `aspectRatio` supports: `1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `9:16`, `16:9`. `21:9` is normalized to `16:9`.
- `resolution` supports: `1K`, `2K`, `4K`.
- Uses Recraft endpoints:
  - text-to-image: `POST /v1/images/generations`
  - image-to-image edit: `POST /v1/images/imageToImage`
- Requires `RECRAFT_API_TOKEN`.

## Deployment

`vercel.json` is configured for the current MagX routes and static files.

Before deploying, confirm the Vercel project is mapped to the dedicated MagX repository and environment variables are set in Vercel.
