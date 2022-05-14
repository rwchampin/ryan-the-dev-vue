<script setup lang="ts">
import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
// import SmokeScene from '@/components/SmokeScene.vue';
import TheParticleIntro from '@/three-components/TheParticleIntro.js';

new TheParticleIntro(document.getElementById('particle-canvas'), {
  instances per thingy
  nInstances: 2000,
  useCube: false,
  scale: 1
});
</script>

<template>
  <h1>tuts</h1>
  <!--<SmokeScene />
  <canvas id="particle-canvas"></canvas>-->
  <MouseGradientBlobVue></MouseGradientBlobVue>
  <main>
    <TheWelcome />
  </main>
</template>
