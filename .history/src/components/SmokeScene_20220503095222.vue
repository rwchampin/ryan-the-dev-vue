<template><div class="newbody"></div></template>
<script setup>
import * as THREE from 'three';
let clock, camera, delta, stats, scene, renderer, geometry, material, mesh, text;

init();
animate();

function init() {
  // stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.left = '0px';
  // stats.domElement.style.top = '0px';
  // $('body').append(stats.domElement);

  clock = new THREE.Clock();

  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize( window.innerWidth, window.innerHeight );

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;
  scene.add(camera);

  geometry = new THREE.CubeGeometry(200, 200, 200);
  material = new THREE.MeshLambertMaterial({ color: 0xaa6666, wireframe: false });
  mesh = new THREE.Mesh(geometry, material);
  // scene.add( mesh );
  const cubeSineDriver = 0;

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
  const light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(-1, 0, 1);
  scene.add(light);
  const smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
  const smokeMaterial = new THREE.MeshLambertMaterial({color: 0x515351, opacity: 0.9, map: smokeTexture, transparent: true});
  const smokeGeo = new THREE.PlaneGeometry(300, 300);
  let smokeParticles = [];
  for (let p = 0; p < 150; p++) {
    var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    particle.position.set(
      Math.random() * 500 - 250,
      Math.random() * 500 - 250,
      Math.random() * 1000 - 100
    );
    particle.rotation.z = Math.random() * 360;
    scene.add(particle);
    smokeParticles.push(particle);
  }
  document.querySelector('.newbody').appendChild(renderer.domElement);
}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    stats.begin();
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
    stats.end();
}

function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
  cubeSineDriver += 0.01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );

}
</script>
<style scoped></style>