---
layout: default
title: "2. Set up your artwork"
subtitle: "Use the included backgrounds or make the covers your own"
section: Start here
requirements: [Generate Cover]
guide:
  result: "An optional new colour or your own fandom-specific artwork on a cover."
  needs:
    - {label: "The starter preset from Step 1", url: "/start/first-cover/"}
  see: "Save the changed preset, then generate a test cover. Skip this page if you like the starter artwork."
previous: {label: "Create your first cover", url: "/start/first-cover/", section: "Start here"}
next: {label: "Add AO3 metadata", url: "/start/metadata/", section: "Start here"}
---

The starter preset works as it is. This step is optional: keep the grey cover, choose another included colour, or make your own artwork.

<img src="{{ '/assets/img/cover-colours.png' | relative_url }}" alt="Included cover colours" class="small">

## Choose one of the included backgrounds

1. Download the [background image pack]({{ '/code/wordsandpics_classic_covers.zip' | relative_url }}) and unzip it. This ZIP contains images, not a preset; do not import the ZIP into Generate Cover.
2. Select a fic in Calibre and open **Generate Cover**. Select your **Classics** preset.
3. On the **Settings** tab, find **Select Image**. Add or select one of the extracted SVG files as the background image.
4. Click **Save** to keep the change to this preset, then click **OK** to generate a test cover for the selected fic.

If you want to keep both the grey and coloured versions, use the green **+** beside **Saved Settings** to save the changed design under a new name, such as **Classics Blue**, rather than overwriting **Classics**.

<div class="callout note">
  <div class="callout-title">Want a fandom-specific icon?</div>
  <p>Every image supplied with this guide has the same generic book icon, even when the background colour changes. To show a fandom-specific symbol, you need to edit an SVG or make your own background image, select that image in Generate Cover, and save it as a separate preset. FanFicFare can later choose that preset for the fandom, but it does not find or add the symbol for you.</p>
</div>

## Customize an SVG

SVG files are editable image files. Open one in [Inkscape](https://inkscape.org/) or [Affinity](https://www.affinity.studio/) and replace the generic book icon with artwork you have the right to use. You can also change the colours or layout. Save the edited image under a new filename so the supplied version stays available. Then select your edited SVG in Generate Cover's **Settings → Select Image** area, use the green **+** beside **Saved Settings** to name a new preset such as **Classics Sherlock**, and click **Save**.

## Automatically choose custom covers

You can save several Generate Cover presets with different artwork, colours, or styles. FanFicFare can then use a story's metadata—such as its fandom, relationship, tag, or title length—to choose the appropriate preset automatically whenever it downloads or updates the story. A separate preset alone does not make that choice automatic; you also need a selection rule.

The **Choose a cover** section explains how to create these rules. Start with [Choose a cover by fandom]({{ '/choose/fandom/' | relative_url }}), then add more specific rules only if they are useful for your library.
