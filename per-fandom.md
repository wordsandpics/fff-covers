---
layout: default
title: "Choose a cover by fandom"
subtitle: "Different cover templates for different fandoms, with two lines of config"
permalink: /choose/fandom/
section: Choose a cover
requirements: [personal.ini, Generate Cover]
previous: {label: "Advanced display options", url: "/display/combining-fields/", section: "Cover content"}
next: {label: "By ship or tag", url: "/choose/ship-or-genre/", section: "Choose a cover"}
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

1. Open Generate Cover and select your **Classics** preset.
2. Duplicate it so your original default preset remains unchanged.
3. Open **Select Image** and choose the SVG you customised for your first fandom.
4. Return to **Settings**, give the copy a clear name such as **Classics Sherlock**, and save it.

If you only want different colours rather than fandom artwork, a name such as **Classics Green** works just as well.

Repeat for each fandom you want to handle. Your existing Classics preset remains the default for anything that doesn't match.

## Add the rule to personal.ini

Open your `personal.ini` (**FanFicFare → Edit personal.ini**). It is organised into sections: `[defaults]` applies to every supported site, while `[archiveofourown.org]` applies only to AO3. This guide puts its cover rules in the AO3 section because the examples use AO3 metadata.

A heading such as `generate_cover_settings:` starts a list of rules. The indented lines beneath it belong to that list. Keep one `generate_cover_settings:` heading in each section; when you add another rule later, add an indented line to the existing list instead of creating a second heading.

Find or add `[archiveofourown.org]`, then add this block beneath it:

```ini
[archiveofourown.org]
generate_cover_settings:
    ${category} => Sherlock => Classics Sherlock
    ${category} => Rivalry    => Classics HR
```

The value on the left (`${category}`) is the fandom metadata field FFF matches against. The middle value is the text or pattern to match. The value on the right is the name of the Generate Cover preset to use — it must match your saved preset name exactly.

That's all the configuration needed.

## Read a cover rule

Each rule has three slots, separated by `=>`:

```ini
${category} => Sherlock => Classics Sherlock
```

| Slot | Meaning | In this example |
|---|---|---|
| Left | Which piece of FanFicFare metadata to inspect | `${category}` (the fandom) |
| Middle | What to look for in that metadata | `Sherlock` |
| Right | The saved Generate Cover preset to use | `Classics Sherlock` |

The middle slot uses a **regular expression**—a flexible way to search text. A plain word such as `Sherlock` is already a valid pattern, so you can usually copy a rule and change only the fandom text and preset name. The next examples use a few optional pattern shortcuts; keep their punctuation exactly as shown when you use them.

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
