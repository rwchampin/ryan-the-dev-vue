<template>
  <canvas ref="particleIntro"></canvas>
<template>
<script setup>
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import gsap from '../libs/gsap-bonus/all';

const particleIntro = ref(null);
  const scene = gltf.scene;
  scene.scale.set(0.1, 0.1, 0.1);
  scene.position.set(0, 0, 0);
  scene.rotation.set(0, 0, 0);
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x000000, 0, 100);
  scene.add(gltf.scene.children[0]);
  particleIntro.value = scene;
});
onMounted(() => {

});

</script>
<style></style>