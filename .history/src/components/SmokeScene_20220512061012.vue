<script setup>
import * as THREE from "three";

class SmokwScene {
  constructor() {
    super();

let camera,
  scene,
  renderer,
  geometry,
  delta,
  textGeo,
  textMaterial,
  light,
  text,
  textTexture,
  material,
  smokeTexture,
  cubeSineDriver,
  smokeGeo,
  smokeMaterial,
  smokeParticles,
  mesh;
  }

init();
render();
evolveSmoke();

init = () =>{
  // renderer = new THREE.WebGLRenderer({ alpha: true });
  // renderer.setSize(window.innerWidth, window.innerHeight);

  // scene = new THREE.Scene();

  // camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   10000
  // );
  // camera.position.set(0, 0, 0);
  // scene.add(camera);

  THREE.ImageUtils.crossOrigin = ""; //Need this to pull in crossdomain images from AWS

  light = new THREE.DirectionalLight(0xff0000, 1);
  light.position.set(0, 50, 0);
  // scene.add(light);

  smokeTexture = new THREE.TextureLoader().load(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
  );
  smokeMaterial = new THREE.MeshLambertMaterial({
    color: 0x515351,
    opacity: 0.9,
    map: smokeTexture,
    transparent: true
  });
  smokeGeo = new THREE.PlaneGeometry(500, 500);
  smokeParticles = [];

  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  //const radian = (Math.PI * 2) / 30;

  for (let i = 0; i < 850; i++) {
    const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    particle.position.x = Math.random() + window.innerWidth / 2 + Math.cos(radian * i) * 30;
    particle.position.y = Math.random() + window.innerHeight / 2 + Math.sin(radian * i) * 30;
    particle.rotation.z = 0;
    // scene.add(particle);
    smokeParticles.push(particle);
  }


  cube.position.set(0, 0, 0);
  // document.body.append(renderer.domElement);
}

// note: three.js includes requestAnimationFrame shim

  evolveSmoke = () =>{
  const sp = smokeParticles.length;
  while (sp--) {
    smokeParticles[sp].position.x = Math.sin(Math.PI * 2) * 30;
    smokeParticles[sp].rotation.z += delta * 0.2;
  }
}

 render() {
  console.log("wrd");

  for (let i = 0; i < smokeParticles.length; i++) {
    smokeParticles[i].position.x = Math.sin(Math.PI * 2) * 30;
    smokeParticles[i].rotation.z += delta * 0.2;
  }
  // renderer.render(scene, camera);
  // requestAnimationFrame(render);
}


</script>
<style scoped></style>
