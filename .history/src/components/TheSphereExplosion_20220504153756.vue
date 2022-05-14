<template>
  <canvas id="exploding-spheres" ref="canvas" />
</template>
<script setup lang="ts">
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

  const container = document.createElement('div');
  const renderer = new THREE.WebGLRenderer({
    canvas: this.$refs.canvas,
    antialias: true,
    alpha: true
  });
</script>
<style></style>