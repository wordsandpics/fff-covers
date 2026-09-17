---
layout: default
title: "Troubleshooting"
subtitle: "Find which part of the cover pipeline is missing information"
section: Reference
previous: {label: "Likeability score", url: "/advanced/likeability/", section: "Advanced options"}
next: {label: "Downloads", url: "/reference/downloads/", section: "Reference"}
---

## Start with the stage that failed

Information passes through several places:

1. AO3 or another source site provides metadata.
2. FanFicFare reads it and can clean or copy it.
3. FanFicFare writes it into Calibre columns.
4. Calibre calculates any template columns.
5. Generate Cover chooses a preset and prints values on the cover.

Check the value at each stage instead of changing several settings at once.

## The column is correct but the wrong cover was selected

Generate Cover selection can happen before Calibre has finished saving and recalculating every column. A value visible after the update was not necessarily available when FanFicFare selected the preset. Prefer FanFicFare metadata for selection rules.

## A generator cannot import my code

The code generators understand tutorial-shaped templates and code previously made by the same generator. They do not promise to reconstruct arbitrary hand-written Calibre code. Keep a copy before replacing a customized template.

## A field is blank

Confirm that the custom column has the correct lookup name and type, then confirm that it is mapped in FanFicFare. Metadata availability differs between source sites.
