---
layout: default
title: "Choose by ship or tag"
subtitle: "Use FanFicFare metadata to select a more specific cover preset"
section: Choose a cover
requirements: [personal.ini, Generate Cover]
previous: {label: "By fandom", url: "/choose/fandom/", section: "Choose a cover"}
next: {label: "Original works and fallbacks", url: "/choose/fallbacks/", section: "Choose a cover"}
---

FanFicFare can check metadata before choosing a Generate Cover preset. Put specific ship or tag rules before broader fandom rules because the first matching rule wins.

The examples on this page go inside the `generate_cover_settings:` block in FanFicFare's `personal.ini`. Open **FanFicFare → Edit personal.ini** and add them beneath `[archiveofourown.org]`. If the block already exists, add only the indented rule lines instead of creating a second block.

## Choose by ship

```
generate_cover_settings:
    ${all_slashes} => ^Sherlock Holmes/John Watson(?:,|$) => Classics Johnlock
    ${category}    => [Ss]herlock                         => Classics Sherlock
```

This checks whether Johnlock is the first saved relationship. If not, FanFicFare continues to the Sherlock fandom rule.

## Choose by an AO3 tag

```
generate_cover_settings:
    ${freeformtags} => (?i)(?:^|,\s*)podfic(?:,|$) => Classics Podfic
    ${category}     => [Ss]herlock                   => Classics Sherlock
```

On AO3, **Additional Tags** are the freeform tags chosen by the author. FanFicFare reads them into `freeformtags` before it chooses a cover, so this rule can select the **Classics Podfic** preset when one complete Additional Tag is `podfic`.

`freeformtags` is FanFicFare's source metadata, not the calculated `#genre` column created later in Calibre. Replace `podfic` and **Classics Podfic** with the complete AO3 tag and preset name you want to use. The punctuation around `podfic` makes the rule match a whole tag, so it does not accidentally match the same letters inside a longer tag.

## Limitations

This example is written for AO3. Other sites may not provide `freeformtags`, or may use their metadata differently. Cover-selection rules should use metadata FanFicFare has already read, rather than a calculated Calibre column such as `#genre`.
