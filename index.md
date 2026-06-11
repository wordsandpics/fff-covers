---
layout: default
title: Automatic covers for your fanfic library
subtitle: A guide for FanFicFare + Calibre users
---

<p>You're already using FanFicFare to download fic and Calibre to manage it. This guide is about making your library look good — automatically, per fandom, with metadata that actually matters to you.</p>

<div class="step-grid">
  <a class="step-card" href="{{ '/basic-covers/' | relative_url }}">
    <div class="step-num">Step 1</div>
    <div class="step-title">Basic covers</div>
    <div class="step-desc">Plugin setup, a working SVG template, minimal ini config</div>
  </a>
  <a class="step-card" href="{{ '/per-fandom/' | relative_url }}">
    <div class="step-num">Step 2</div>
    <div class="step-title">Per-fandom covers</div>
    <div class="step-desc">Different cover templates per fandom using generate_cover_settings</div>
  </a>
  <a class="step-card" href="{{ '/custom-columns/' | relative_url }}">
    <div class="step-num">Step 3</div>
    <div class="step-title">Custom columns</div>
    <div class="step-desc">Ship names, genre tags, status — on the cover and in the library</div>
  </a>
  <a class="step-card" href="{{ '/nerdery/' | relative_url }}">
    <div class="step-num">Step 4</div>
    <div class="step-title">Advanced nerdery</div>
    <div class="step-desc">Data normalisation, anthology edge cases, the full pipeline</div>
  </a>
</div>

## Before you start

<div class="prereqs">
  <div class="prereqs-title">You'll need</div>
  <div class="prereq-item"><div class="prereq-dot"></div>Calibre with the FanFicFare plugin installed and working</div>
  <div class="prereq-item"><div class="prereq-dot"></div>The generate_cover plugin installed</div>
  <div class="prereq-item"><div class="prereq-dot"></div>Basic comfort editing personal.ini</div>
</div>

This is not a guide to setting up FanFicFare from scratch. For that, see the [FFF wiki](https://github.com/JimmXinu/FanFicFare/wiki).

<div class="callout note">
  <div class="callout-title">Note</div>
  <p>All personal.ini snippets in this guide are written for AO3. Settings may need minor adjustments for other sites.</p>
</div>
