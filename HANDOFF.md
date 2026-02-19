# MagX Handoff

## Project Location
- `/Users/kistudioultra/Documents/Clients/MagX`

## Primary Repo / Branch
- Active branch: `main`
- Current HEAD: `316db43`
- Git remote currently points to DarkroomX repo URL: `https://github.com/ON2Interactive/darkroomX.git`

## Current App Surfaces
- Landing page: `/` (`index.html`)
- Editor workspace: `/editor` and `/magx` (`editor.html` + `editor.js` + `editor.css`)
- API backend routes: `server.js`
  - `POST /api/layout-generate`

## Production / Deployment
- Vercel config present in `vercel.json`
- Static assets/routes now target MagX editor files (`editor.html`, `editor.js`, `editor.css`)

## Env Vars (current)
- `ANTHROPIC_API_KEY` (optional; primary if present)
- `GOOGLE_API_KEY` or `GEMINI_API_KEY` (optional fallback/alternative)
- Optional model overrides:
  - `ANTHROPIC_LAYOUT_MODEL`
  - `ANTHROPIC_MODEL`
  - `GOOGLE_LAYOUT_MODEL`
  - `GEMINI_LAYOUT_MODEL`

## Recent Completed Work (latest)
- Separated MagX from DarkroomX content in this folder.
- Removed DarkroomX legacy files from this project:
  - `studio.html`
  - `app.js`
  - `styles.css`
- Reworked `server.js` to MagX scope:
  - removed DarkroomX image-edit/image-generate/Peecho routes
  - kept MagX layout generation route only
- Updated landing `index.html` to MagX-only copy/links.
- Updated `vercel.json` to route/build MagX editor assets.
- Normalized AI style default string in `editor.js` from `darkroomx-inspired` to `magx-inspired`.

## Editor Capabilities Already Implemented
- Multi-page canvas workflow with page drawer and duplicate/delete page controls.
- Desktop/tablet/mobile view presets.
- Tools for selection, upload image, text, shapes, and icon insertion.
- Right-side inspector for transform/text/shape/image/icon properties.
- Layer list with ordering controls.
- Zoom in/out, undo/redo, delete, bring-forward/send-back.
- AI page generation flow in editor using `POST /api/layout-generate`.
- Local fallback page generation if API/provider request fails.
- Export actions for image, HTML zip package, JSON, and copy HTML.

## Current Business Rules (testing state)
- Layout generation accepts 1-5 pages.
- Server attempts Anthropic first when configured, then Gemini/Google.
- Editor uses local fallback generator when remote AI generation fails.

## Important In-Progress / Pending
- Create/use a dedicated MagX git remote (currently still points to DarkroomX remote).
- Confirm deployment target/project is MagX-specific in Vercel.
- Review `.env.example` and docs so they only describe MagX requirements.
- Decide whether to keep or remove any DarkroomX-branded assets in `assets/` if present.

## Current Git Working Tree Notes (important)
Current tree is **not clean**:
- Modified tracked files:
  - `index.html`
  - `server.js`
  - `vercel.json`
- Deleted tracked files (intentional cleanup):
  - `app.js`
  - `studio.html`
  - `styles.css`
- Untracked new files:
  - `editor.css`
  - `editor.html`
  - `editor.js`

Do not discard these changes unless you explicitly want to undo the MagX cleanup/migration.

## Recommended Resume Prompt for Next Thread
Use this exact opener in a new thread:

"Continue MagX from `/Users/kistudioultra/Documents/Clients/MagX`. Read `HANDOFF.md` first, keep existing uncommitted changes intact, and continue from latest `main` state."

## Suggested Immediate Next Steps
1. Point git `origin` to the correct MagX repository.
2. Commit the separation/migration changes (including file deletions and new editor files).
3. Deploy/update Vercel project for MagX and verify `/`, `/editor`, and `/magx` routes.
4. Add a MagX-focused README and environment setup notes.
