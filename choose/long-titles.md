---
layout: default
title: "Long titles"
subtitle: "Use a smaller-text preset when a title needs more room"
section: Choose a cover
requirements: [personal.ini, Generate Cover]
previous: {label: "Original works and fallbacks", url: "/choose/fallbacks/", section: "Choose a cover"}
next: {label: "Protect custom covers", url: "/choose/protect-covers/", section: "Choose a cover"}
---

Duplicate your normal Generate Cover preset and reduce its title font size. Then open **FanFicFare → Edit personal.ini** and add a title-length rule near the end of the `generate_cover_settings:` block beneath `[archiveofourown.org]`:

```
    ${title} => .{40,} => Classics Small
```

`40` means forty or more characters. Change it to suit your design.

## Limitations

Character count is only an estimate of the space a title needs. Wide letters and long words can still wrap differently, so test several titles near your chosen limit.
