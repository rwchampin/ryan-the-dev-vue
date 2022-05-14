<template>
  <div
    ref="logoRef"
    id="logo-model"
  ></div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import logo from '@/assets/scene.glb?url';
window.onload = () => {


  const logoRef = ref(null);


  let renderer, scene, camera;

  onMounted(() => {


    const container = logoRef.value;
    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 50);

    const loader = new GLTFLoader();
    // INIT RENDERER THAT ACTUALLY
    // DOES THE WRITING OF THE FRAMES
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    // loader.setDRACOLoader(dracoLoader);
    loader.load(logo, (gltf) => {
      console.log(gltf);
      scene.add(gltf.scene);
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.scale.set(1, 1, 1);
      camera.lookAt(10,10,10)
      camera.lookAt(gltf.scene);



    });


    const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(controls);
    // APPEND RENDERER TO DOM

  });

};
</script>
