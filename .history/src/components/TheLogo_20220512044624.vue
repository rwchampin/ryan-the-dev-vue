<template>
</template>
<script setup>
  import {  onMounted } from 'vue';
  import * as THREE from 'three';
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

  import logo from '@/assets/black-logo.gltf';






  let renderer, scene, camera;

  onMounted(() => {



    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 10);
const helper = new THREE.CameraHelper( camera );




// const geometry = new THREE.PlaneBufferGeometry( 10, 10 );
// const material = new THREE.MeshStandardMaterial( {color: 0xff0000, metalness:0, roughness: 0 } );
// const plane = new THREE.Mesh( geometry, material );
// plane.position.set(0, 0, 0);
// plane.rotation.x = -100;
// scene.add( plane );



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
      console.log(gltf.scene);

      gltf.scene.position.set(0, 0, 0);
      gltf.scene.scale.set(100, 10, 100);


scene.add(gltf.scene.children);



    }, () => {
      console.log('progress')
    }, () => {alert('error');});

      scene.add( helper );

    // const controls = new OrbitControls(camera, renderer.domElement);
    // scene.add(controls);
    // APPEND RENDERER TO DOM
    const animate = () => {
      requestAnimationFrame(animate);
      // camera.updateProjectionMatrix();
      // helper.update();
      renderer.render(scene, camera);
    }
animate();

var obj = {
	    string : '0',
	    string : 'abc'
	};




  });


</script>
