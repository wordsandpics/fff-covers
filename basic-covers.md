---
layout: default
title: "1. Create your first cover"
subtitle: "Install the plugin, import a preset, generate your first cover"
permalink: /start/first-cover/
section: Start here
requirements: [Calibre settings, FanFicFare, Generate Cover]
guide:
  result: "One working cover design that FanFicFare can use on new downloads."
  needs:
    - {label: "FanFicFare installed and able to download one AO3 fic"}
  see: "Download one test fic after saving the preset and choosing it in FanFicFare."
previous: {label: "Overview", url: "/", section: "Start here"}
next: {label: "Set up your artwork", url: "/start/artwork/", section: "Start here"}
---

By the end of this step, FanFicFare can automatically make a cover from the same starter design whenever you download a fic. Whether it replaces an existing cover depends on the option you choose below.

## 1. Install Generate Cover

Generate Cover is a separate Calibre plugin. Install it from Calibre's preferences:

**Preferences → Plugins → Get new plugins**, search for "Generate Cover", install, and restart Calibre.

## 2. Import your starter preset

A **preset** is a saved cover design: its background image, fonts, layout, and text. Download the [Classics starter preset]({{ '/code/classics_preset.zip' | relative_url }}). This ZIP includes a grey background with a generic book symbol; you do not need to unzip it. [Step 2]({{ '/start/artwork/' | relative_url }}) has optional colours and explains how to add your own artwork.

1. Select a fic in Calibre, then open **Generate Cover** from the toolbar.
2. Open the **Settings** tab.
3. Next to **Saved Settings**, click the import button—the arrow pointing inward.
4. Select the downloaded file named `classics_preset.zip`.
5. When asked for a name, enter **Classics** or choose another name you will recognise.
6. Confirm that the preset now appears in the Saved Settings list.

![Generate Cover — Settings tab]({{ '/assets/img/gcc-settings.png' | relative_url }})

The preview should now show the grey starter cover with the generic book symbol.

![Imported Classics preset]({{ '/assets/img/gcc-results.png' | relative_url }})

The imported preset is enough for a first cover. You can change its artwork later.

### Saving and selecting a preset

**Saving** stores your design changes under a preset name in Generate Cover. **Selecting** chooses which saved preset Generate Cover should use. Select a preset inside Generate Cover when you want to preview or edit it; select it in FanFicFare's **Calibre Cover** table when you want FanFicFare to use it automatically. After editing a preset, return to **Settings** and save it before testing a download.

## 3. Configure automatic cover selection

FanFicFare decides whether to generate a cover each time it downloads or updates a fic. Generate Cover then uses a saved **preset**—your complete design, including its image, fonts, and text—to make that cover. In this first setup, FanFicFare uses one preset, **Classics**, as the default for every fic that needs a generated cover. Later, you can add rules that choose different saved presets for different fandoms or tags.

In Calibre, open the FanFicFare plugin settings and go to the **Calibre Cover** tab.

![FanFicFare — Calibre Cover tab]({{ '/assets/img/fff-calibre-cover.png' | relative_url }})

Two settings to check:

- **Generate Calibre Cover**: choose **Yes** if you want this generated preset to replace every cover, including a cover image FanFicFare finds on the source site. Choose **Yes, unless FanFicFare found a cover image** if you want to keep any source cover image and generate this preset only when the story has no cover.
- Select **Plugin Generate Cover** (not "Calibre Generate Cover")

In the table below, find the **Default** row and select **Classics** from the dropdown.

Click OK.

## 4. Test it

Download a public AO3 fic and check its cover in Calibre's book details panel. If you chose **Yes**, the new cover should show the grey starter background, title, author, and publication date. If you chose **Yes, unless FanFicFare found a cover image**, a cover from AO3 will remain when one is available; try a fic without a source cover to see the generated design.

<div class="callout note">
  <div class="callout-title">Something not working?</div>
  <ul>
    <li><strong>The preset will not import:</strong> make sure you selected <code>classics_preset.zip</code> and did not unzip it.</li>
    <li><strong>The cover still shows a book symbol:</strong> the supplied backgrounds use that symbol. Fandom symbols require background images that you provide yourself.</li>
    <li><strong>No generated cover appears:</strong> check that the Default row in FanFicFare's Calibre Cover settings points to your saved preset. You can also select a book and run Generate Cover manually to test the preset.</li>
  </ul>
</div>

## Explore the preset later (optional)

You can use the starter design without changing these settings. When you are ready to customise it:

- **Fonts:** The [Fonts tab]({{ '/assets/img/gcc-fonts.png' | relative_url }}) sets the typeface and colour. The starter uses white Tahoma text and one font family throughout.
- **Dimensions:** The [Dimensions tab]({{ '/assets/img/gcc-dimensions.png' | relative_url }}) sets the cover size to 750 × 1100 pixels. You do not need to change it for this guide.
- **Contents:** The [Contents tab]({{ '/assets/img/gcc-contents.png' | relative_url }}) displays title, author, series when present, and custom text. The starter's custom text is `{pubdate}`, the publication date. [Step 4]({{ '/start/generate-covers/' | relative_url }}) shows how to replace or add to it.

Save the preset after any change; an already-generated cover will not update until you generate it again.
