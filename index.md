---
layout: default
title: Advanced covers for your fanfic library
subtitle: A guide for FanFicFare + Calibre users
---

<p>You're already using FanFicFare to download fic and Calibre to manage it. This guide is about making your library look good and give you useful information at a glance: automatically, per fandom, with metadata that actually matters to you.</p>

<p>This is not a guide to setting up FanFicFare from scratch. If you need a more general, but advanced guide without emphasis on covers, I strongly recommend <a href="https://maelstrom.quest/2026/02/24/calibre-fff-guide/">Stormy Crossroads' Calibre + Fanficfare tutorial</a>. For thorough documentation there's the <a href="https://github.com/JimmXinu/FanFicFare/wiki)">FFF wiki</a>. </p>

![Cover samples]({{ '/assets/img/cover_samples.png' | relative_url }})

This is a sample of what my covers look like. I have per-fandom cover designs (even per-ship in some cases!) and I've set it up so I can see at a glance all the information to see what the fic is about: Main ship, genre, length, completion status. You can decide exactly what information you want displayed. the templates available in this guide are slightly different as they don't have per-fandom icons and text, but they're editable, so if you want you can modify them yourself.

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
  <a class="step-card" href="{{ '/advanced-columns/' | relative_url }}">
    <h6 class="step-num">Step 4</h6>
    <h3 class="step-title">Advanced custom columns</h3>
    <p class="step-desc">Creating columns from other columns to process and change metadata.</p>
  </a>
  <a class="step-card" href="{{ '/advanced-ships/' | relative_url }}">
    <h6 class="step-num">Step 5</h6>
    <h3 class="step-title">Advanced ships</h3>
    <p class="step-desc">A better way of figuring out primary & secondary ships.</p>
  </a>
  <a class="step-card" href="{{ '/nerdery/' | relative_url }}">
    <h6 class="step-num">Step 6</h6>
    <h3 class="step-title">Tips & tricks</h3>
    <p class="step-desc">Take it further with these techniques.</p>
  </a>
</div>

## Before you start

<div class="prereqs">
  <h6 class="prereqs-title">You'll need</h6>
  <ul class="prereq-items">
  <li><div class="prereq-dot"></div>Calibre with the FanFicFare plugin installed and working</li>
  <li><div class="prereq-dot"></div>The generate_cover plugin installed</li>
  <li><div class="prereq-dot"></div>Basic comfort editing code. Don't worry, it's all explained and ready to be copy/pasted and modified easily. </li>
  </ul>
</div>



<div class="callout note">
  <h6 class="callout-title">Note</h6>
  <p>This guide is written with AO3 in mind. Settings may need adjustments for other sites.</p>
</div>

***

<div class="next-step">
  <a href="{{ '/per-fandom/' | relative_url }}">
    <span class="next-label">Get Started</span>
    <span class="next-title">Step 1: Basic covers →</span>
  </a>
</div>
