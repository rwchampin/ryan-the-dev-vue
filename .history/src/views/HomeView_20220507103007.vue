<script setup lang="ts">
import { onMounted } from 'vue';
import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
import SmokeScene from '@/components/SmokeScene.vue';
// import { TheParticleIntro }from '@/components/TheParticleIntro.vue';

// const particleCanvas = ref(null);

onMounted(() => {
  //   // instances per thingy
  //   nInstances: 2000,
  //   useCube: false,
  //   scale: 1
  // });
});
</script>

<template>
  <div>
    <h1>tuts</h1>
    <!-- <SmokeScene /> -->
    <!-- <canvas ref="particleCanvas" id="particle-canvas"></canvas> -->
    <MouseGradientBlobVue />
  </div
</template>
