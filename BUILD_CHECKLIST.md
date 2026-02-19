# MagX Build Checklist (From Current Baseline)

## Constraints
- Do not modify editor behavior until explicitly approved.
- Treat current MagX editor as stable baseline.
- Ship in reversible, isolated increments.

## Step 1 - Planning Lock
- [x] Product brief defined
- [x] Milestones documented
- [x] Architecture boundaries documented
- [ ] Confirm phase order with stakeholder

## Step 2 - Identity and Naming Audit
- [ ] Ensure user-facing naming is consistently MagX
- [ ] Review route aliases and decide MagX canonical route(s)
- [ ] Review server/share file naming conventions
- [ ] Keep compatibility aliases where needed

## Step 3 - Data Contract Baseline
- [ ] Document current editor project JSON shape
- [ ] Define target schema version (`v1`)
- [ ] Create adapter from current shape to `v1`
- [ ] Add migration notes and fallback behavior

## Step 4 - Page System Hardening
- [ ] Explicit page/spread metadata in state
- [ ] Stable page reorder contract
- [ ] Thumbnail update triggers on page mutations
- [ ] Regression checks for duplicate/delete operations

## Step 5 - Preview Runtime Introduction
- [ ] Create separate preview module/surface
- [ ] Map project snapshot to preview pagination model
- [ ] Implement page-turn interaction shell
- [ ] Add zoom/pan and keyboard navigation

## Step 6 - Publish MVP
- [ ] Snapshot + version artifact generation
- [ ] Shareable link lifecycle
- [ ] Viewer shell with responsive reading mode
- [ ] Basic analytics/logging hooks (optional)

## Step 7 - Quality Gates
- [ ] Desktop editing smoke tests
- [ ] Mobile viewing smoke tests
- [ ] Performance checks on large image sets
- [ ] Error states for missing/corrupt assets

## Definition of Done (MVP)
- User designs a multi-page magazine in editor.
- User previews as page-turning experience.
- User publishes and shares via link.
- System remains extensible for static/print outputs.
