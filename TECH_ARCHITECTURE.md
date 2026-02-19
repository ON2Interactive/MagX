# MagX Technical Architecture (Phase Plan)

## Architecture Goals
- Keep editor workflow stable while introducing MagX capabilities in layers.
- Decouple content model from render/output modes.
- Allow future outputs (static, print, physical production) from same source data.

## Mode Separation
1. Editor Mode
- Canvas editing, layer manipulation, page management
- Source-of-truth project state

2. Preview Mode
- Read-only page-turn renderer fed by project snapshot
- Spread logic, turn interaction, zoom/pan

3. Publish Mode
- Shareable runtime build generated from project snapshot
- Viewer-only surface with optimized loading

## Proposed Core Data Model
`Project`
- `id`
- `title`
- `createdAt`, `updatedAt`
- `settings` (units, bleed defaults, theme metadata)
- `pages: Page[]`

`Page`
- `id`
- `index`
- `type` (`single` | `spread`)
- `size` (width, height)
- `background`
- `layers: Layer[]`
- `thumbnail`

`Layer`
- `id`
- `kind` (`image` | `text` | `shape` | `vector` | `embed`)
- `transform` (x, y, width, height, rotation, z)
- `style`
- `content`

`Publication`
- `projectId`
- `version`
- `publishedAt`
- `entryUrl`
- `renderManifest`

## Module Boundaries
- `editor-core`: canvas state, commands, undo/redo, selection
- `page-manager`: page CRUD/reorder/thumbnail contracts
- `preview-runtime`: page-turn rendering and navigation
- `publish-service`: snapshot, package, link lifecycle
- `shared-schema`: versioned contracts + migrations

## State and Data Flow
1. Editor mutates canonical `Project` state.
2. Preview receives normalized read-only snapshot of `Project`.
3. Publish creates versioned artifact from same snapshot.
4. Viewer consumes published artifact independent of editor runtime.

## Compatibility Strategy
- Add schema versioning from start.
- Include migration path for existing MagX data shape.
- Keep adapter layer between current editor state and new canonical schema.

## Performance Strategy (MVP-Aware)
- Progressive image loading and caching
- Thumbnail precompute/update on page change
- Render budget targets per mode (editor vs preview)
- Lazy-load preview renderer dependencies

## Risks and Controls
- Risk: editor regressions while adding preview features
  - Control: strict module boundary + feature flags
- Risk: data coupling blocks future outputs
  - Control: schema-first model, output adapters
- Risk: high-res media memory pressure
  - Control: asset pipeline, decode limits, staged loading

