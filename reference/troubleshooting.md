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

Check one test fic at each stage instead of changing several settings at once:

1. **On the source site:** Open the fic's AO3 page and find the value you expect—for example, its fandom, relationship, Additional Tag, word count, or status. If it is not on the source page, FanFicFare cannot save it.
2. **In FanFicFare's settings:** Open **FanFicFare → Configure FanFicFare → Custom Columns**. Confirm that the destination column has the expected lookup name and is mapped to the right source value. Confirm that **New Only** is unchecked if you are testing an existing book.
3. **After FanFicFare updates the book:** Select the test fic and use **FanFicFare → Update Existing FanFiction Books → Update Calibre Metadata from Website**. Wait for the update to finish, then open **Edit metadata** and check the destination custom column. If it is blank or wrong here, the problem is the source data, mapping, or a `personal.ini` rule—not the cover.
4. **After Calibre calculates a column:** If the saved source column is correct but a field such as `#short_words`, `#short_ships`, `#genre`, or `#short_status` is wrong, open that calculated column in **Preferences → Add your own columns**. Check its **Template** box and use Calibre's template editor preview with the same test fic.
5. **On the finished cover:** If the calculated column is correct, open Generate Cover, select the intended preset, and check its **Contents → Custom text** field. Confirm it uses the correct `{#lookup_name}` and save the preset before generating a test cover.
6. **For the wrong preset:** Check the `generate_cover_settings:` rules in `personal.ini`. The preset name must exactly match a saved Generate Cover preset, and the first matching rule wins. Keep the `.*` catch-all rule last.

This isolates the first stage where the value changes or disappears, which tells you where to fix it.

## The column is correct but the wrong cover was selected

Generate Cover selection can happen before Calibre has finished saving and recalculating every column. A value visible after the update was not necessarily available when FanFicFare selected the preset. Prefer FanFicFare metadata for selection rules.

## A generator cannot import my code

The code generators understand tutorial-shaped templates and code previously made by the same generator. They do not promise to reconstruct arbitrary hand-written Calibre code. Keep a copy before replacing a customized template.

## A field is blank

Confirm that the custom column has the correct lookup name and type, then confirm that it is mapped in FanFicFare. Metadata availability differs between source sites.
