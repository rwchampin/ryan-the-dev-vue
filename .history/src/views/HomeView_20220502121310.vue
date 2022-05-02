<script setup lang="ts">
import TheWelcomeVue from '@/components/TheWelcome.vue';
import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
import ParticleIntro from '@/three-components/ParticleIntro.js';

new ParticleIntro('#particle-canvas', {});
</script>

<template>
  <h1>tuts</h1>
  <canvas id="particle-canvas"></canvas>
  <MouseGradientBlobVue></MouseGradientBlobVue>
  <main>
    <TheWelcomeVue />
  </main>
</template>
