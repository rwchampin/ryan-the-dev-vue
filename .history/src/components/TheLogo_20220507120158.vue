<template><div id="logo-model"></div></template>
<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

var renderer, scene, camera;
var perspective = 600;
// scene
scene = new THREE.Scene();

// camera
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 45);

const loader = new GLTFLoader();
const container = document.createElement('div');
container.setAttribute('id', 'r-logo');
// INIT RENDERER THAT ACTUALLY
// DOES THE WRITING OF THE FRAMES
renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
document.body.appendChild(container);

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
// loader.setDRACOLoader(dracoLoader);
loader.load('/three-assets/black-ryan.glb', (gltf) => {
  console.log(gltf);
  scene.add(gltf.scene);
  gltf.scene.position.set(0, 0, 0);
  camera.lookAt(gltf.scene);
});

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
const controls = new OrbitControls(camera, container);

// APPEND RENDERER TO DOM
document.body.appendChild(renderer.domElement);
</script>
