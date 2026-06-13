---
layout: default
title: "Step 2: Per-fandom covers"
subtitle: "Different cover templates for different fandoms, with two lines of config"
---

In step 1 you set up a single cover preset that applies to everything you download. In this step you'll create fandom-specific presets and tell FFF which one to use based on the fic's fandom tags.

## Create a fandom preset

Open Generate Cover and create a new preset for your first fandom — duplicate your Classics preset as a starting point, change the background image or design, and save it with a name like **Classics Sherlock** or **Classics Green**.

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

AO3 crossovers have multiple fandoms in `${category}`. FFF matches against the full string, so a crossover between Sherlock and Good Omens will match whichever fandom appears first in your rule list. This is usually fine — the cover will reflect the primary fandom the author tagged first.

## Other Fandoms
If the fandom doesn't match any of your rules, the default that you set in the FFF preferences will be used. 

## What's next

In step 3 you'll set up custom metadata columns — including ship names — that can feed back into cover selection here, allowing per-ship templates like a dedicated cover for your OTP.


***

<div class="next-step">
  <a href="{{ '/custom-columns/' | relative_url }}">
    <span class="next-label">Next</span>
    <span class="next-title">Step 3: Custom columns →</span>
  </a>
</div>
