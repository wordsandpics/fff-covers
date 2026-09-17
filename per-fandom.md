---
layout: default
title: "Choose a cover by fandom"
subtitle: "Different cover templates for different fandoms, with two lines of config"
permalink: /choose/fandom/
section: Choose a cover
requirements: [personal.ini, Generate Cover]
previous: {label: "Put it all together", url: "/display/combining-fields/", section: "Cover content"}
next: {label: "By ship or genre", url: "/choose/ship-or-genre/", section: "Choose a cover"}
---

In Step 1 you set up one cover preset. Here you will create fandom-specific presets and tell FanFicFare which one to use from the story's fandom metadata.

FanFicFare applies these rules whenever it processes a story: on a new download, an update, or a metadata-only refresh. You can also run Generate Cover manually for a selected book, but in that case you choose the preset yourself.

## Generic and personalised covers

The supplied backgrounds are generic so they work for any fandom. [Set up your artwork]({{ '/start/artwork/' | relative_url }}) explains that the SVG files are editable and suggests programs you can use.

For a fandom-specific version, you might add the fandom name, an image, or a recognizable icon. Save the finished SVG under a new name, then use it as the background of a separate Generate Cover preset.

<div class="callout note">
  <div class="callout-title">Fandom symbols are not added automatically</div>
  <p>FanFicFare can choose which saved preset to use based on a fic's fandom metadata, but it does not create or download fandom artwork. The fandom symbols in screenshots of my personal library come from SVG backgrounds I customised myself.</p>
</div>

## Create a fandom preset

Open Generate Cover and duplicate your **Classics** preset as a starting point. On the **Select Image** tab, choose the SVG you customised for your first fandom, then save the preset with a name such as **Classics Sherlock**. If you only want different colours rather than fandom artwork, a name such as **Classics Green** works just as well.

Repeat for each fandom you want to handle. Your existing Classics preset remains the default for anything that doesn't match.

## Add the rule to personal.ini

Open your `personal.ini` (FanFicFare-->Edit personal.ini) and find  `[archiveofourown.org]` . Add a  `generate_cover_settings` block under it: 

```ini
[archiveofourown.org]
generate_cover_settings:
    ${category} => Sherlock => Classics Sherlock
    ${category} => Rivalry    => Classics HR
```

The value on the left (`${category}`) is the fandom metadata field FFF matches against. The middle value is the text or pattern to match. The value on the right is the name of the Generate Cover preset to use — it must match your saved preset name exactly.

That's all the configuration needed.

## How matching works

**First match wins.** FFF reads the rules top to bottom and stops at the first match. Put your most specific rules first.

**Patterns are regular expressions.** You don't need to know regex to use this: simple fandom names or parts of names work as-is. A few useful patterns:

Case-insensitive matching, for fandoms where AO3 tagging is inconsistent:
```ini
${category} => [Ss]herlock => Classics Sherlock
```
This will match "Sherlock" or "sherlock"

Either/or, for fandoms with multiple common tag names:
```ini
${category} => Heated Rivalry|Game Changers => Classics HR
```

Partial match — you don't need the full fandom name. `Sherlock` will match "Sherlock Holmes (1984 TV)", "Sherlock (BBC)", and "Sherlock Holmes & Related Fandoms" without any extra configuration.

## What about crossovers?

AO3 crossovers have multiple fandoms in `${category}`, so a fic may match more than one of your rules. Because FFF checks the rules from top to bottom, the fandom rule you put first decides which preset is used. Put the fandom you prefer above the others.

## Other Fandoms
If the fandom doesn't match any of your rules, the default that you set in the FFF preferences will be used. 
