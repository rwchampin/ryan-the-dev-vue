<template>
</template>
<script setup>
  import {  onMounted } from 'vue';
  import * as THREE from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js';
  import logo from '@/assets/scaled.glb';






  let renderer, scene, camera;

  onMounted(() => {



    // scene
    scene = new THREE.Scene();
    scene.receiveShadow= true;
    scene.castShadow = true;
    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0,250);
    const helper = new THREE.CameraHelper( camera );
    scene.add( new THREE.AxesHelper( 20 ) );



// const geometry = new THREE.PlaneBufferGeometry( 10, 10 );
// const material = new THREE.MeshStandardMaterial( {color: 0xff0000, metalness:0, roughness: 0 } );
// const plane = new THREE.Mesh( geometry, material );
// plane.position.set(0, 0, 0);
// plane.rotation.x = -100;
// scene.add( plane );



    const loader = new GLTFLoader();
    // INIT RENDERER THAT ACTUALLY
    // DOES THE WRITING OF THE FRAMES
    renderer = new THREE.WebGLRenderer({ alpha: true,antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);
    loader.load(logo, (gltf) => {
      console.log(gltf.scene);
      scene.children[0].receiveShadow= true;
      scene.children[0].castShadow = true;
      scene.add(gltf.scene.children[0]);

      const axesHelper = new THREE.AxesHelper( 5* 10 );
      scene.add( axesHelper );


    }, () => {
      console.log('progress')
    }, () => {alert('error');});

      scene.add( helper );

    const controls = new FirstPersonControls(camera, renderer.domElement)
    controls.movementSpeed = 150
    controls.lookSpeed = 0.1
    // APPEND RENDERER TO DOM
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      camera.updateProjectionMatrix();
      helper.update();

      scene.position.z = 0;
      renderer.render(scene, camera);
    }
animate();

var obj = {
	    string : '0',
	    string : 'abc'
	};




  });


</script>
