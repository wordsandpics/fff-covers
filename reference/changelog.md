---
layout: default
title: "Changelog"
subtitle: "Notable changes to the tutorial and its downloadable files"
section: Reference
previous: {label: "Downloads", url: "/reference/downloads/", section: "Reference"}
next: {label: "Contact", url: "/contact/", section: "Reference"}
---

## 24 September 2026

- Added an optional AO3 relationship-category fallback to the Ship code generator, with a configurable Calibre column.
- Made generated ship templates compact by evaluating every selected relationship with one translation table, preventing six-ship templates from exceeding Calibre's template-field limit.
- Kept imports compatible with the generator's older repeated-slot template format.
- Updated the manual template and instructions to use the compact structure and clarify that relationship participant order must match the stored AO3 tag.

## 18 September 2026

- Reorganized the guide into a four-step setup with task-focused optional recipes.
- Added cover-selection, advanced metadata and display tools, and code generators.
- Improved navigation, beginner guidance, troubleshooting, downloads, and contact information.

## 15 September 2026

- Added the Genre code generator.
- Added the Ship code generator.
- Corrected generated genre and ship templates so their output keeps the chosen order.
- Reorganized the tutorial into a short setup path followed by optional recipes.

## 14 September 2026

- Reworked anthology relationship extraction around an order-preserving `#all_slashes` column.
- Expanded explanations for presets, background images, and custom SVG artwork.
