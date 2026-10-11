---
layout: default
title: "Long titles"
subtitle: "Use a smaller-text preset when a title needs more room"
section: Choose a cover
requirements: [personal.ini, Generate Cover]
guide:
  result: "An optional smaller-title design for long titles that reach this rule."
  needs:
    - {label: "A saved cover preset to copy", url: "/start/first-cover/"}
  see: "Save the small-title preset and personal.ini, then update a long-titled test fic and check the selected design."
previous: {label: "Original Works", url: "/choose/fallbacks/", section: "Choose a cover"}
next: {label: "Protect custom covers", url: "/choose/protect-covers/", section: "Choose a cover"}
---

If a long title crowds your normal cover, this rule can choose a version with smaller title text. For example, a title of 40 or more characters can use **Classics Small** while shorter titles keep your usual design.

In Generate Cover, select your normal preset, reduce its title font size, and use the green **+** beside **Saved Settings** to save a separate copy named **Classics Small**. [Step 2]({{ '/start/artwork/' | relative_url }}) shows the same save-as-new action for artwork. Then open **FanFicFare → Edit personal.ini**. Under `[archiveofourown.org]`, add this indented line to your `generate_cover_settings:` block:

```
    ${title} => .{40,} => Classics Small
```

If you have not made cover-selection rules yet, add the `generate_cover_settings:` heading first, then put the indented rule beneath it. [Choose by fandom]({{ '/choose/fandom/' | relative_url }}) explains the three parts of a rule. If your version shows **Allow generate_cover_settings from personal.ini to override** in FanFicFare's **Calibre Cover** settings, enable it.

`40` means forty or more characters. Change it to suit your design. Where you place the line determines which books can use it:

- Put it before fandom and ship rules if **Classics Small** should take priority for every long title. A protected-story rule should still go above it.
- Put it after those rules if you only want it for long titles that did not already match another design. A long-titled Sherlock fic would keep its Sherlock preset in this arrangement. If you already have a rule that matches every story, keep the long-title rule above it.

Save `personal.ini` and update a fic with a title above your limit. Check that it received the preset you intended.

## Limitations

Character count is only an estimate of the space a title needs. Wide letters and long words can still wrap differently, so test several titles near your chosen limit.
