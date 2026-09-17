---
layout: default
title: "Choose by ship or genre"
subtitle: "Use saved metadata to select a more specific cover preset"
section: Choose a cover
requirements: [personal.ini, Generate Cover]
previous: {label: "By fandom", url: "/choose/fandom/", section: "Choose a cover"}
next: {label: "Original works and fallbacks", url: "/choose/fallbacks/", section: "Choose a cover"}
---

FanFicFare can check metadata before choosing a Generate Cover preset. Put specific ship or genre rules before broader fandom rules because the first matching rule wins.

The examples on this page go inside the `generate_cover_settings:` block in FanFicFare's `personal.ini`. Open **FanFicFare → Edit personal.ini** and add them beneath `[archiveofourown.org]`. If the block already exists, add only the indented rule lines instead of creating a second block.

## Choose by ship

```
generate_cover_settings:
    ${all_slashes} => ^Sherlock Holmes/John Watson(?:,|$) => Classics Johnlock
    ${category}    => [Ss]herlock                         => Classics Sherlock
```

This checks whether Johnlock is the first saved relationship. If not, FanFicFare continues to the Sherlock fandom rule.

## Choose by genre or flag

```
generate_cover_settings:
    ${genre}    => (?i)(?:^|,\s*)meta(?:,|$) => Classics Meta
    ${category} => [Ss]herlock                => Classics Sherlock
```

## Limitations

Cover selection happens during the FanFicFare update. A calculated Calibre column might not yet contain its new value at that moment. Prefer metadata available inside FanFicFare, and see [Troubleshooting]({{ '/reference/troubleshooting/' | relative_url }}) when the finished column looks right but the wrong preset was selected.
