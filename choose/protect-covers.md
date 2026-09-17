---
layout: default
title: "Protect custom covers"
subtitle: "Update a story without replacing artwork you chose by hand"
section: Choose a cover
requirements: [personal.ini]
previous: {label: "Long titles", url: "/choose/long-titles/", section: "Choose a cover"}
next: {label: "Anthology-aware ships", url: "/advanced/anthology-ships/", section: "Advanced options"}
---

Open **FanFicFare → Edit personal.ini**. In the `generate_cover_settings:` block beneath `[archiveofourown.org]`, add a story-URL rule before every cover-generating rule and leave its result empty:

```
generate_cover_settings:
    ${storyUrl} => works/12345$ =>
    ${category} => [Ss]herlock  => Classics Sherlock
```

The empty first match tells FanFicFare not to run Generate Cover for that story.

## Limitations

This list is manual. You must add a rule for every protected story and remove it if you later want automatic covers again. Match the numeric work ID at the end of the URL so one ID does not accidentally match another.
