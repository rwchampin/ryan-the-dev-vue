<script setup lang="ts">
// import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
// import SmokeScene from '@/components/SmokeScene.vue';
// import { ParticleIntro } from '@/three-components/ParticleIntro.js';

// new  ParticleIntro(document.getElementById('particle-canvas'), {
// instances per thingy
//   nInstances: 2000,
//   useCube: false,
//   scale: 1
// });
</script>

<template>
  <h1>tuts</h1>
  <SmokeScene />
  <canvas id="particle-canvas"></canvas>
  <MouseGradientBlobVue></MouseGradientBlobVue>
  <main>
    <TheWelcomeVue />
  </main>
</template>
