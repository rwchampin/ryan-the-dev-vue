<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

var  mesh, renderer, scene, camera, controls;
var rotationY = 0;
var cameraZ = 20;
var perspective = 600;
var div = document.querySelector('div');
var positionX = -100;
var positionZ = -100;

document.body.style.perspective = `${perspective}px`;
div.style;

// renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio); // RESOLUTION
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene
scene = new THREE.Scene();

// camera
const fov = (180 * (2 * Math.atan(innerHeight / 2 / perspective))) / Math.PI;
camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, perspective);

const loader = new GLTFLoader();
const container = document.createElement('div');
container.setAttribute('id', 'r-logo');
// INIT RENDERER THAT ACTUALLY
// DOES THE WRITING OF THE FRAMES
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
document.body.appendChild(container);

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
loader.setDRACOLoader(dracoLoader);
loader.load('/three-assets/black-new-logo.glb', (gltf) => {
  console.log(gltf);
  scene.add(gltf.scene);
  gltf.scene.position.set(0, 0, 0);
  camera.lookAt(gltf.scene);
});

// APPEND RENDERER TO DOM
document.body.appendChild(renderer.domElement);
</script>
