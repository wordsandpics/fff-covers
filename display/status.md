---
layout: default
title: "Status"
subtitle: "Show whether a story is complete or still being updated"
section: Cover content
requirements: [Calibre settings, Template code]
guide:
  result: "A compact cover label such as ✔ or WIP."
  needs:
    - {label: "A mapped Status column", url: "/start/metadata/"}
  see: "Check #short_status on a test book, save the cover preset after adding it, and regenerate that cover."
previous: {label: "Word and chapter count", url: "/display/length/", section: "Cover content"}
next: {label: "Ships", url: "/display/ships/", section: "Cover content"}
---

On AO3, a story's **status** tells you whether it is complete or still in progress. This recipe turns that completion status into a short cover label: for example, `Completed` becomes `✔`, and `In-Progress` becomes `WIP` (work in progress). FanFicFare saves the original value in `#status`; the new calculated column makes the shorter version for your cover.

## Create a short status column

1. In **Preferences → Add your own columns**, create **Short status**, with lookup name `short_status`.
2. Choose **Column built from other columns** as the column type.
3. Paste this code into the column's **Template** box:

   ```
   program:
   s = lowercase(field('#status'));
   if contains(s, 'complet', '1', '') then return '✔'
   elif contains(s, 'progress|wip', '1', '') then return 'WIP'
   else return field('#status')
   fi
   ```

4. Save the column and restart Calibre if asked. Check a completed and an in-progress fic: `Completed` should become `✔`, and `In-Progress` should become `WIP`.
5. Add `{#short_status}` to Generate Cover's **Contents → Custom text** field, save the preset, and regenerate a test cover.

## Limitations

This version reports only the saved status. It does not show chapter progress or decide that an unfinished work has been abandoned. For those options, continue to [Chapter-aware and dormant status]({{ '/advanced/status/' | relative_url }}).
