<template>
  <div ref="container" id="container"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let container = ref(null);
let renderer = new THREE.WebGLRenderer;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(70, 640 / 480, 0.01, 100);
let controls = new THREE.OrbitControls();

const created =  () => {
      if (!(renderer instanceof THREE.WebGLRenderer)) {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.autoClear = false;
        renderer.gammaInput = false;
        renderer.gammaOutput = false;
      }
    }

   const onMounted = () => {
      // Using <div id="container" ... ></div>, access to DOM HTMLElement with $el
      const container =  $el.children.namedItem('container') as HTMLElement;

      if (!container.contains(renderer.domElement)) {
        container.appendChild(renderer.domElement);

        camera.position.set(-10, 10, 10);

        controls = new OrbitControls(camera, container);
        controls.minDistance = 0;
        controls.maxDistance = 500;
        controls.autoRotate = true;
      }
      renderer.setSize(container.clientWidth, container.clientHeight);

      clear(scene);
      initialize(container);
      animate();
    }

</script>