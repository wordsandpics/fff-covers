---
layout: default
title: "Original works and fallbacks"
subtitle: "Choose a sensible cover when no fandom-specific rule matches"
section: Choose a cover
requirements: [personal.ini, Generate Cover]
previous: {label: "By ship or genre", url: "/choose/ship-or-genre/", section: "Choose a cover"}
next: {label: "Long titles", url: "/choose/long-titles/", section: "Choose a cover"}
---

Some works use AO3's `Original Work` category, while older or unsupported sources might provide no fandom value. In **FanFicFare → Edit personal.ini**, add these broad rules near the end of the `generate_cover_settings:` block beneath `[archiveofourown.org]`. Keep them after your specific fandom rules.

```
generate_cover_settings:
    ${category} => [Ss]herlock                         => Classics Sherlock
    ${category} => (?:^|,\s*)Original Work(?:,|$)    => Classics Original
    ${category} => ^$                                  => Classics Original
    ${category} => .*                                  => Classics
```

The final rule is the fallback: it matches anything that has not already selected another preset.

## Limitations

An empty category does not always mean original fiction. It can also mean that the source site did not provide fandom metadata, so use a neutral fallback design if that distinction matters to you.
