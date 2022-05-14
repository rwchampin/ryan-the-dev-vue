<script setup lang="ts">
import TheWelcomeVue from '@/components/TheWelcome.vue';
import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
import AnimationUtils, { init, gui } from '@/components/AnimationUtils.vue';
// import { ParticleIntro } from '@/three-components/ParticleIntro.js';
init();
// new  ParticleIntro(document.getElementById('particle-canvas'), {
// instances per thingy
//   nInstances: 2000,
//   useCube: false,
//   scale: 1
// });
</script>

<template>
  <h1>tuts</h1>
  <AnimationUtils />
  <canvas id="particle-canvas"></canvas>
  <MouseGradientBlobVue></MouseGradientBlobVue>
  <main>
    <TheWelcomeVue />
  </main>
</template>
