---
layout: default
title: "Original Works"
subtitle: "Give AO3 original fiction its own cover design"
section: Choose a cover
requirements: [personal.ini, Generate Cover]
guide:
  result: "A separate cover design for AO3 stories tagged with the Original Work fandom."
  needs:
    - {label: "At least one saved cover preset", url: "/start/first-cover/"}
    - {label: "An existing cover-rule list", url: "/choose/fandom/"}
  see: "Save personal.ini and update an AO3 Original Work; it should use the new preset."
previous: {label: "By ship or tag", url: "/choose/ship-or-genre/", section: "Choose a cover"}
next: {label: "Long titles", url: "/choose/long-titles/", section: "Choose a cover"}
---

On AO3, **Original Work** is a fandom label for original fiction. You can give stories with that label their own cover—for example, **Classics Original**—instead of your usual design. This is a specific rule for Original Works, not a rule for every story whose fandom is missing or does not match another preset.

If you want distinct artwork for original works, first create and save a Generate Cover preset named **Classics Original**. Then open **FanFicFare → Edit personal.ini** and add this line near the end of the existing `generate_cover_settings:` block, after your specific ship, tag, and fandom rules:

```ini
    ${category} => (?:^|,\s*)Original Work(?:,|$) => Classics Original
```

Save `personal.ini` and update an AO3 Original Work to check that it receives **Classics Original**. Stories that do not match any cover rule still use the **Default** preset you selected in FanFicFare's Calibre Cover tab. You do not need an extra fallback rule for that.

## Limitations

An empty category does not mean original fiction. It can also mean that the source site did not provide fandom metadata. Leave those books on a neutral default preset rather than treating them as Original Works automatically.
