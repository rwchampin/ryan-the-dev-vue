<template><div id="smoke" class="newbody"></div></template>
<script setup>
import gsap, { ScrollTrigger, InertiaPlugin } from '../libs/gsap-bonus/all.js';
import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { DracoLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DracoLoader.js';


gsap.registerPlugin(ScrollTrigger, InertiaPlugin);

let clock,
  cubeSineDriver,
  camera,
  smokeParticles,
  delta,
  light,
  smokeGeo,
  smokeMaterial,
  smokeTexture,
  // stats,
  scene,
  renderer,
  geometry,
  material,
  mesh,
  text;

init();
animate();

function init() {
  // stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.left = '0px';
  // stats.domElement.style.top = '0px';
  // $('body').append(stats.domElement);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const buildSceneCoreComponents = () => {
    // INIT CLOCK TO TRACK THE START AND END OF ENTIRE
    // SCENE TO TRACK SPEED OF SCENE AND ANIMATION ANALYTICS
    clock = new THREE.Clock();

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

    // APPEND RENDERER TO DOM
    document.body.appendChild(renderer.domElement);

    return {
      renderer,
      scene,
      camera
    };
  };

  const buildSceneLights = () => {
    light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(-1, 0, 1);
    scene.add(light);
  };

  const buildSceneMesh = () => {
    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    mesh = new THREE.Mesh(geometry, material);
    //scene.add(mesh);

    const loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/examples/js/libs/draco/');
    loader.setDRACOLoader(dracoLoader);
    loader.load('../../assets/models/black-ryan.glb', (glb) => {
      scene.add(glb.scene);
    });

    geometry = new THREE.BoxBufferGeometry(200, 200, 200);
    material = new THREE.MeshLambertMaterial({ color: 0xaa6666, wireframe: false });
    mesh = new THREE.Mesh(geometry, material);
    // scene.add( mesh );
    cubeSineDriver = 0;

    const textGeo = new THREE.PlaneGeometry(300, 300);
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    const textTexture = THREE.ImageUtils.loadTexture(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png'
    );
    const textMaterial = new THREE.MeshLambertMaterial({
      color: 0x000000,
      opacity: 1,
      map: textTexture,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    text = new THREE.Mesh(textGeo, textMaterial);
    text.position.z = camera.position.z - 90;
    scene.add(text);

    smokeTexture = THREE.ImageUtils.loadTexture(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'
    );
    smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0x515351,
      opacity: 0.9,
      map: smokeTexture,
      transparent: true
    });
    smokeGeo = new THREE.PlaneGeometry(window.innerHeight * 0.25, window.innerWidth * 0.25);
    smokeParticles = [];
    for (let p = 0; p < 150; p++) {
      var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
      particle.position.set(
        Math.random() * window.innerHeight * 0.25,
        Math.random() * window.innerHeight * 0.25,
        Math.random() * 1000 - 100
      );
      particle.rotation.z = Math.random() * 360;
      scene.add(particle);
      smokeParticles.push(particle);
    }
  };

  buildSceneCoreComponents();
  buildSceneLights();
  buildSceneMesh();
  gsap.fromTo(
    camera.position,
    { y: window.innerHeight },
    {
      y: 0,
      scrollTrigger: {
        trigger: renderer.domElement,
        scrub: true,
        onUpdate: (progress) => {
          // camera.position.z = progress * -1;
        },

        markers: true,
        start: 'top bottom',
        end: window.innerHeight * 5
      },
      ease: 'expo'
    }
  );
}

function animate() {
  // note: three.js includes requestAnimationFrame shim
  //stats.begin();
  delta = clock.getDelta();
  requestAnimationFrame(animate);
  evolveSmoke();
  render();
  //stats.end();
}

const zoom = () => {
  // gsap.to(camera.position, {
  //   z: camera.position.z + 1000,
  //   scrollTrigger: {
  //     trigger: renderer.domElement,
  //     scrub: 10,
  //     pin: 'canvas',
  //     markers: true,
  //     start: 'top top',
  //     end: window.innerHeight * 50}
  // });
};

function evolveSmoke() {
  var sp = smokeParticles.length;
  while (sp--) {
    smokeParticles[sp].rotation.z += delta * 0.2;
  }
}

function render() {
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  cubeSineDriver += 0.01;
  mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
  renderer.render(scene, camera);
}
</script>
<style scoped></style>
