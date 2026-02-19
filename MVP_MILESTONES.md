# MagX MVP Milestones

## Scope Guardrail
Current editor stays unchanged until explicitly approved. Initial work is planning, modeling, and non-invasive scaffolding.

## Phase 0 - Foundation Alignment (Current)
Goal: lock direction and implementation boundaries.

Deliverables:
- Product brief and non-goals documented
- MVP milestone plan documented
- Initial architecture and data contracts documented
- Build checklist agreed

Exit Criteria:
- Shared understanding of what MagX is and is not
- Clear execution order with minimal risk to current editor

## Phase 1 - Project Identity + Baseline Hygiene
Goal: prepare the cloned baseline to operate as MagX without feature churn.

Deliverables:
- Naming alignment in docs and UI labels where safe
- Route and share naming review
- Deployment/environment audit for MagX context
- No editor interaction model changes

Exit Criteria:
- Project can run/deploy as MagX identity
- Existing editor behavior remains stable

## Phase 2 - Page Model Hardening
Goal: make pages/spreads explicit first-class entities in data model.

Deliverables:
- Canonical project schema for page order + spread metadata
- Page CRUD rules (add, duplicate, delete, reorder)
- Thumbnail generation/update strategy
- Backward compatibility with existing saved data

Exit Criteria:
- Stable page sequencing model independent from preview renderer

## Phase 3 - Preview Mode System
Goal: introduce dedicated page-turn preview mode without coupling to editor internals.

Deliverables:
- Separate preview runtime and state adapter
- Spread-aware pagination
- Page-turn interaction (mouse/touch)
- Zoom/pan in preview mode

Exit Criteria:
- User can switch from editor to preview and review full sequence cleanly

## Phase 4 - Publish Mode MVP
Goal: deliver shareable published experience from the same content model.

Deliverables:
- Publish pipeline to immutable/shareable render target
- Link generation and retrieval
- Viewer shell optimized for reading flow

Exit Criteria:
- User can publish and share a working magazine link

## Phase 5 - Performance + Quality Pass
Goal: ensure editorial-grade usability before broader rollout.

Deliverables:
- Large image handling and memory constraints
- Render performance tuning on common desktop/mobile profiles
- QA checklist for interaction regressions

Exit Criteria:
- Stable experience for realistic editorial projects
