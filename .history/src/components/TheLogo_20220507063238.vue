<template>
  <canvas id="logo"></canvas>
</template>
<script setup>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const loader = new GLTFLoader();


    // INIT RENDERER THAT ACTUALLY
    // DOES THE WRITING OF THE FRAMES
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // INIT SCENE
    scene = new THREE.Scene();

    // INIT CAMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    camera.lookAt(scene.position);
    scene.add(camera);



// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
loader.setDRACOLoader(dracoLoader);
loader.load('/three-assets/logo-new-black.gltf', (gltf) => {
scene.add(gltf.scene);


// APPEND RENDERER TO DOM
document.body.appendChild(renderer.domElement);
</script>