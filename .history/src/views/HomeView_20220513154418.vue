<script setup lang="ts">
import { onMounted } from 'vue';
import SmokeScene from '@/components/SmokeScene.js';
import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
// import { ParticleIntro } from '@/three-components/ParticleIntro.js';

onMounted(() => {
  const smokeScene = new SmokeScene();

  smokeScene.init();
  smokeScene.evolveSmoke();
  function go() {

    smokeScene.render();
    requestAnimationFrame(go);
  }
  //   // instances per thingy
  //   nInstances: 2000,
  //   useCube: false,
  //   scale: 1
  // });
});
</script>

<template>
  <div>
<TheLogo />
<SmokeScene />
  </div>
</template>
