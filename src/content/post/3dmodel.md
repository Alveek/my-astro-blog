---
title: "3D Model test"
description: "3D Model test"
publishDate: 21 Feb 2024
tags:
  - 3d
draft: false
---

Model-viewer test

<div class="boxes">
  <model-viewer alt="alt text" src="/model.glb" 
    ar 
    ar-scale="auto" 
    scale="0.1 0.1 0.1" 
    ar-modes="webxr scene-viewer quick-look"
    shadow-intensity="1" poster="/karyaga.png" 
    camera-controls touch-action="pan-y"></model-viewer>
</div>

<div class="boxes">
  <model-viewer alt="alt text" src="/poly.glb" 
    ar 
    ar-scale="fixed" 
    scale="1 1 1" 
    ar-modes="webxr scene-viewer quick-look"
    shadow-intensity="1"
    camera-controls touch-action="pan-y"></model-viewer>
</div>

<div class="boxes">
  <model-viewer alt="alt text" src="/poly2.glb" 
    ar 
    ar-scale="auto" 
    scale="1 1 1" 
    ar-modes="webxr scene-viewer quick-look"
    shadow-intensity="1"
    camera-controls touch-action="pan-y"></model-viewer>
</div>
