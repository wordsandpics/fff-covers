---
layout: default
title: "Step 1: Basic covers"
subtitle: "Install the plugin, import a preset, generate your first cover"
---

By the end of this step you'll have automatically generated covers appearing on every fic you download — no manual work per fic required.

## 1. Install Generate Cover

Generate Cover is a separate Calibre plugin. Install it from Calibre's preferences:

**Preferences → Plugins → Get new plugins**, search for "Generate Cover", install, and restart Calibre.

## 2. Import your starter preset
To get you started I have prepared a preset and alternate coloured images. The design is very loosely inspired in Penguin Classics. It's meant to be a clean, simple design that prioritizes legibility above all. Feel free to use the images as you wish. 


### Download the files

There are two downloads. They serve different purposes:

1. **[Classics preset]({{ '/code/classics_preset.zip' | relative_url }})**
   Import this ZIP into Generate Cover. It contains the preset settings and the default grey background with a generic book symbol.

2. **[Alternative colour backgrounds]({{ '/code/wordsandpics_classic_covers.zip' | relative_url }})**
   This optional ZIP contains SVG background images in several colours. Extract or unzip it before using the images. Do not try to import this ZIP as a Generate Cover preset.

<div class="callout note">
  <div class="callout-title">Preset or background image?</div>
  <p><code>classics_preset.zip</code> is a complete Generate Cover preset and should be imported from the Settings tab. The files inside <code>wordsandpics_classic_covers.zip</code> are individual background images. Unzip that file and select an SVG from Generate Cover's Select Image tab.</p>
</div>

The supplied backgrounds use a generic book symbol. Fandom symbols shown in screenshots of my personal library are part of my own customised presets; they are not automatically detected or included in the download. Step 2 explains how to make separate presets for different fandoms.

<img src="{{ '/assets/img/cover-colours.png' | relative_url }}" alt="Cover colour options" class="small">

### Import the starter preset

1. Open **Generate Cover** from Calibre's toolbar.
2. Open the **Settings** tab.
3. Next to **Saved Settings**, click the import button—the arrow pointing inward.
4. Select the downloaded file named `classics_preset.zip`.
5. When asked for a name, enter **Classics** or choose another name you will recognise.
6. Confirm that the preset now appears in the Saved Settings list.

![Generate Cover — Settings tab]({{ '/assets/img/gcc-settings.png' | relative_url }})

The preview should now show the grey starter cover with the generic book symbol.

![Imported Classics preset]({{ '/assets/img/gcc-results.png' | relative_url }})

### Use a different background colour

The colour backgrounds are images, not presets:

1. Find `wordsandpics_classic_covers.zip` in your Downloads folder.
2. Extract or unzip it.
3. In Generate Cover, select the **Classics** preset.
4. Open the **Select Image** tab.
5. Add or choose one of the extracted `.svg` files.
6. Return to **Settings** and save the preset.

To keep several colour versions, duplicate or rename the preset before changing its image—for example, **Classics Blue** or **Classics Green**.

### What's in the preset

Here's a brief tour of the four tabs so you know what you're working with.

#### Fonts

<img src="{{ '/assets/img/gcc-fonts.png' | relative_url }}" alt="Generate Cover — Fonts tab" class="small">

This preset uses Tahoma, just for wide availability. Text is white. The **Use the same font family for all text** option is checked, so if you want to change the typeface you only need to change it in one place. You can customise this any way you want, but be aware: there seems to be a bug and not all fonts will appear in the menu or work. Test your way forward.

#### Dimensions

<img src="{{ '/assets/img/gcc-dimensions.png' | relative_url }}" alt="Generate Cover — Dimensions tab" class="small">

Covers are generated at 750 × 1100 pixels, a standard ebook portrait ratio. The background SVG is stretched to fill the cover area. You don't need to change anything here. But you can tweak the margins if needed. 

#### Contents

<img src="{{ '/assets/img/gcc-contents.png' | relative_url }}" alt="Generate Cover — Contents tab" class="small">

Four elements are displayed in this order: title, author, series (only appears if the fic is part of a series),and custom text. The custom text field is set to `{pubdate}`, which pulls the publication date.

This is the minimum useful cover: you know what the fic is, who wrote it, when it was published, and whether it's part of a series. It all uses standard data that every fic already has. In the next parts of the tutorial we'll add more useful information to covers using custom columns and FanFicFare automation.

## 3. Configure FFF to use the preset

In Calibre, open the FanFicFare plugin settings and go to the **Calibre Cover** tab.

![FanFicFare — Calibre Cover tab]({{ '/assets/img/fff-calibre-cover.png' | relative_url }})

Two settings to check:

- **Generate Calibre Cover**: set to "Yes, unless FanFicFare found a cover image"
- Select **Plugin Generate Cover** (not "Calibre Generate Cover")

In the table below, find the **Default** row and select **Classics** from the dropdown.

Click OK.

## 4. Test it

Download any fic from AO3. When it completes, you should see a generated cover in the book details panel — your chosen color background, title, author, publication date.

<div class="callout note">
  <div class="callout-title">Something not working?</div>
  <ul>
    <li><strong>The preset will not import:</strong> make sure you selected <code>classics_preset.zip</code>, not the colour-background ZIP.</li>
    <li><strong>The colour ZIP will not import:</strong> this is expected. Extract it first, then select an individual SVG from the Select Image tab.</li>
    <li><strong>The cover still shows a book symbol:</strong> the supplied backgrounds use that symbol. Fandom symbols require background images that you provide yourself.</li>
    <li><strong>No generated cover appears:</strong> check that the Default row in FanFicFare's Calibre Cover settings points to your saved preset. You can also select a book and run Generate Cover manually to test the preset.</li>
  </ul>
</div>

## What's next

In step 2, you'll set up different cover templates per fandom and have FFF apply them automatically when downloading.

***

<div class="next-step">
  <a href="{{ '/per-fandom/' | relative_url }}">
    <span class="next-label">Next</span>
    <span class="next-title">Step 2: Per-fandom covers →</span>
  </a>
</div>
