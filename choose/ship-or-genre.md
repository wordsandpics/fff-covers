---
layout: default
title: "Choose by ship or tag"
subtitle: "Use FanFicFare metadata to select a more specific cover preset"
section: Choose a cover
requirements: [personal.ini, Generate Cover]
guide:
  result: "A special cover design for a chosen relationship or AO3 Additional Tag."
  needs:
    - {label: "Fandom cover rules", url: "/choose/fandom/"}
  see: "Save personal.ini and update a matching fic; a matching ship or tag rule should take precedence over a fandom rule."
previous: {label: "By fandom", url: "/choose/fandom/", section: "Choose a cover"}
next: {label: "Original Works", url: "/choose/fallbacks/", section: "Choose a cover"}
---

You can choose a cover based not only on a story's fandom, but also on a specific ship or AO3 Additional Tag. For example, a Sherlock fic could use a **Johnlock** design when its first relationship is Sherlock Holmes/John Watson, or a **Podfic** design when it has that tag. Put these more specific rules before broader fandom rules because FanFicFare uses the first one that matches.

The examples on this page are additions to the `generate_cover_settings:` block you made in [Choose a cover by fandom]({{ '/choose/fandom/' | relative_url }}). Open **FanFicFare → Edit personal.ini**, find that block beneath `[archiveofourown.org]`, and insert only the indented rule you want. First save a separate Generate Cover preset with the exact name used on the right of that rule. Keep the new rule above the broader fandom rule.

## Choose by ship

**You need for this option:** the ordered relationship value from [Anthology-aware ships]({{ '/advanced/anthology-ships/' | relative_url }}). The tag option below does not need it.

After that setup is working, create a ship-specific preset named **Classics Johnlock** and add this line above your Sherlock fandom rule:

```ini
    ${all_slashes} => ^\s*Sherlock Holmes/John Watson(?:\s*,|$) => Classics Johnlock
```

This checks whether that complete relationship is first in the saved list. If it does not match, FanFicFare continues to your Sherlock fandom rule. Save `personal.ini` and update a fic whose first saved relationship is Sherlock Holmes/John Watson to test the result.

## Choose by an AO3 tag

**You need for this option:** a story with the Additional Tag you want to match. You do not need the advanced ship column.

Create a saved preset named **Classics Podfic**, then add this line above your fandom rules:

```ini
    ${freeformtags} => (?i)(?:^|,\s*)podfic(?:,|$) => Classics Podfic
```

On AO3, **Additional Tags** are the freeform tags chosen by the author. FanFicFare reads them into `freeformtags` before it chooses a cover, so this rule can select the **Classics Podfic** preset when one complete Additional Tag is `podfic`.

`freeformtags` is FanFicFare's source metadata, not the calculated `#genre` column in Calibre. Replace `podfic` and **Classics Podfic** with the complete AO3 tag and preset name you want to use. The punctuation around `podfic` makes the rule match a whole tag, so it does not accidentally match the same letters inside a longer tag. Save `personal.ini` and update a fic with that Additional Tag to test the result.

## Limitations

This example is written for AO3. Other sites may not provide `freeformtags`, or may use their metadata differently. Cover-selection rules should use metadata FanFicFare has already read, rather than a calculated Calibre column such as `#genre`.
