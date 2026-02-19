# MagX Product Brief

## One-Line Intent
MagX is a modern editorial publishing tool where users design magazine layouts on a canvas and publish them as elegant, page-turning digital magazines.

## Product Goal
Build a canvas-first editorial design and publishing app for interactive magazines. The editing workflow is design-first; page-turning is an output mode for preview and sharing.

## Core Principles
1. Canvas is the source of truth.
2. Pages and spreads are first-class objects.
3. Page turning is preview/publish output, not the editor.
4. Editorial-first workflow over document-reader metaphors.
5. Clear mode separation: `Editor`, `Preview`, `Publish`.

## Target Use Cases
- Photography editorials
- Fashion lookbooks
- Architecture/art portfolios
- Visual storytelling publications

## Non-Goals
- PDF upload and auto-conversion workflow
- Generic document viewer behavior
- Template-locked editing system
- Over-animated, gimmicky page interactions

## UX Expectations
- Desktop-first editing with high control and precision
- Mobile-friendly magazine viewing
- Clean, minimal, professional interface
- Smooth and restrained interaction design

## Technical Expectations
- Freeform canvas layout system
- Strong page management (add, duplicate, delete, reorder)
- Page-turn preview with spread support and zoom/pan
- High-resolution image handling suitable for editorial content

## Success Criteria (MVP)
- User can create a project and design multiple pages on canvas.
- User can reorder and preview pages in page-turn mode.
- Preview behaves like a magazine (spreads, fluid turn interaction).
- User can publish to a shareable link.

