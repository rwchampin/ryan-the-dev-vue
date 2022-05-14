<script setup lang="ts">
import { onMounted } from 'vue';
import TheSmoke from '@/components/TheSmoke.vue';
import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
// import { ParticleIntro } from '@/three-components/ParticleIntro.js';

onMounted(() => {


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
