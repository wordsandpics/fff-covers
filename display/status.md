---
layout: default
title: "Status"
subtitle: "Show whether a story is complete or still being updated"
section: Cover content
requirements: [Calibre settings, Template code]
previous: {label: "Word and chapter count", url: "/display/length/", section: "Cover content"}
next: {label: "Ships", url: "/display/ships/", section: "Cover content"}
---

AO3 supplies the story status. FanFicFare writes it into your `#status` column, and a calculated column can turn that longer value into compact cover text.

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

4. Save the column and restart Calibre if asked.
5. Add `{#short_status}` to Generate Cover's **Contents → Custom text** field.

## Limitations

This version reports only the saved status. It does not show chapter progress or decide that an unfinished work has been abandoned. For those options, continue to [Chapter-aware and dormant status]({{ '/advanced/status/' | relative_url }}).
