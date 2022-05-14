<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
// import SmokeScene from '@/components/SmokeScene.vue';
import TheParticleIntro from '@/components/TheParticleIntro.vue';

const particleCanvas = ref(null);

onMounted(() => {
  const canvas = document.getElementById('particle-canvas');
  new TheParticleIntro(canvas, {
    // instances per thingy
    nInstances: 2000,
    useCube: false,
    scale: 1
  });
});
</script>

<template>
  <h1>tuts</h1>
  <!--<SmokeScene />-->
  <canvas ref="particleCanvas" id="particle-canvas"></canvas>
  <MouseGradientBlobVue></MouseGradientBlobVue>
  <main>
    <TheWelcome />
  </main>
</template>
