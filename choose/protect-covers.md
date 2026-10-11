---
layout: default
title: "Protect custom covers"
subtitle: "Update a story without replacing artwork you chose by hand"
section: Choose a cover
requirements: [personal.ini]
guide:
  result: "One specified story can keep its hand-chosen cover during FanFicFare updates."
  needs:
    - {label: "Automatic cover rules", url: "/choose/fandom/"}
    - {label: "The AO3 work ID of the story to protect"}
  see: "Save personal.ini and update that story; its existing cover should remain in place."
previous: {label: "Long titles", url: "/choose/long-titles/", section: "Choose a cover"}
next: {label: "Anthology-aware ships", url: "/advanced/anthology-ships/", section: "Advanced options"}
---

If you chose a cover by hand for one fic, you can keep it while FanFicFare updates that fic's metadata. For example, you can protect your custom Sherlock artwork without stopping automatic covers for the rest of your library.

There are two different ways a FanFicFare update can replace a Calibre cover: it can copy a cover from the downloaded EPUB, or it can ask Generate Cover to make a new one. The options in **FanFicFare → Configure FanFicFare → Calibre Cover** control these separately.

- **Set Calibre Cover Only for New Books** prevents an EPUB's cover from replacing the Calibre cover of an existing book during later updates.
- **Generate Covers Only for New Books** prevents automatic Generate Cover runs for *all* existing books. Use this if you want every existing cover left alone, but not if you want most generated covers to keep updating.
- **Generate Calibre Cover → Yes, unless FanFicFare found a cover image** keeps a cover found on the source site instead of generating one. It does not by itself protect artwork you manually assigned to a book already in Calibre. [Step 1]({{ '/start/first-cover/' | relative_url }}) explains the initial choice between this option and **Yes**.

To skip automatic generation for just one story while allowing others to update, open **FanFicFare → Edit personal.ini**. In the existing `generate_cover_settings:` block beneath `[archiveofourown.org]`, add only this indented line before every cover-generating rule, leaving its result empty:

```ini
    ${storyUrl} => works/12345$ =>
```

Replace `12345` with the number at the end of that story's AO3 work URL. The empty first match tells FanFicFare not to run Generate Cover for that story. If **Update Calibre Cover (from EPUB)** is also enabled, use **Set Calibre Cover Only for New Books** as well to keep an EPUB cover update from replacing your hand-chosen Calibre cover. Save `personal.ini`, update the story, and confirm that its cover remains unchanged.

## Limitations

This list is manual. You must add a rule for every protected story and remove it if you later want automatic generated covers again. Manual use of Generate Cover can still replace a cover. Match the numeric work ID at the end of the URL so one ID does not accidentally match another.
