<template>
  <canvas ref="particleIntro"></canvas>
<template>
<script setup>
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import gsap from '../libs/gsap-bonus/all';

const particleIntro = ref(null);
const loader = new THREE.GLTFLoader()
loader.load();
onMounted(() => {

});

</script>
<style></style>