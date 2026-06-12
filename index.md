---
layout: default
title: Automatic covers for your fanfic library
subtitle: A guide for FanFicFare + Calibre users
---

<p>You're already using FanFicFare to download fic and Calibre to manage it. This guide is about making your library look good and give you useful information at a glance: automatically, per fandom, with metadata that actually matters to you.</p>

![Cover samples]({{ '/assets/img/cover_samples.png' | relative_url }})
This is a sample of what my covers look like

<div class="step-grid">
  <a class="step-card" href="{{ '/basic-covers/' | relative_url }}">
    <h6 class="step-num">Step 1</h6>
    <h3 class="step-title">Basic covers</h3>
    <p class="step-desc">Plugin setup, a working SVG template, minimal ini config</p>
  </a>
  <a class="step-card" href="{{ '/per-fandom/' | relative_url }}">
    <h6 class="step-num">Step 2</h6>
    <h3 class="step-title">Per-fandom covers</h3>
    <p class="step-desc">Different cover templates per fandom using generate_cover_settings</p>
  </a>
  <a class="step-card" href="{{ '/custom-columns/' | relative_url }}">
    <h6 class="step-num">Step 3</h6>
    <h3 class="step-title">Custom columns</h3>
    <p class="step-desc">Ship names, genre tags, status — on the cover and in the library</p>
  </a>
  <a class="step-card" href="{{ '/nerdery/' | relative_url }}">
    <h6 class="step-num">Step 4</h6>
    <h3 class="step-title">Advanced nerdery</h3>
    <p class="step-desc">Data normalisation, anthology edge cases, the full pipeline</p>
  </a>
</div>

## Before you start

<div class="prereqs">
  <h6 class="prereqs-title">You'll need</h6>
  <ul class="prereq-items">
  <li><div class="prereq-dot"></div>Calibre with the FanFicFare plugin installed and working</li>
  <li><div class="prereq-dot"></div>The generate_cover plugin installed</li>
  <li><div class="prereq-dot"></div>Basic comfort editing personal.ini</li>
</div>

This is not a guide to setting up FanFicFare from scratch. For that, see the [FFF wiki](https://github.com/JimmXinu/FanFicFare/wiki).

<div class="callout note">
  <h6 class="callout-title">Note</h6>
  <p>All personal.ini snippets in this guide are written for AO3. Settings may need minor adjustments for other sites.</p>
</div>
