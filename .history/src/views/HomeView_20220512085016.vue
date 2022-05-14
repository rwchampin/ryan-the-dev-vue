<script setup lang="ts">
import { onMounted } from 'vue';
import  SmokeScene  from '@/components/SmokeScene';
// import MouseGradientBlobVue from '@/components/MouseGradientBlob.vue';
// import TheLogo from '@/components/TheLogo.vue';

// import SmokeScene from '@/components/SmokeScene.vue';
// import { TheParticleIntro }from '@/components/TheParticleIntro.vue';
live server
// const particleCanvas = ref(null);

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
