<template>
  <canvas id="exploding-spheres" ref="canvas" />
</template>
<script setup lang="ts">
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

  const container = document.createElement('div');
  const renderer = new THREE.WebGLRenderer({
    canvas: this.$refs.canvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.renderReverseSided = false;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.set(0, 0, 10);
  scene.add(pointLight);

  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true
  });

  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  scene.add(sphere);

  const explode = () => {
    const randomX = Math.random() * 4 - 2;
    const randomY = Math.random() * 4 - 2;
    const randomZ = Math.random() * 4 - 2;
    sphere.position.set(randomX, randomY, randomZ);
    sphere.scale.set(0.1, 0.1, 0.1);
    const tween = new TWEEN.Tween(sphere.scale)
      .to({ x: 1, y: 1, z: 1 }, 1000)
      .easing(TWEEN.Easing.Elastic.Out)
      .start();

    const tween2 = new TWEEN.Tween(sphere.position)
      .to({ x: 0, y: 0, z: 0 }, 1000)
      .easing(TWEEN.Easing.Elastic.Out)
      .start();

    tween.onComplete(explode);

    const randomColor = Math.random() * 0xffffff;
    sphereMaterial.color.set(randomColor);

    const randomScale = Math.random() * 0.5 + 0.5;
    sphere.scale.set(randomScale, randomScale, randomScale);

    const randomRotation = Math.random() * Math.PI * 2;
    sphere.rotation.set(0, randomRotation, 0);

    const randomOpacity = Math.random() * 0.5 + 0.5;
    sphereMaterial.opacity = randomOpacity;

    const randomEmissive = Math.random() * 0.5 + 0.5;
    sphereMaterial.emissive.set(randomEmissive, randomEmissive, randomEmissive);

    const randomSpecular = Math.random() * 0.5 + 0.5;
    sphereMaterial.specular.set(randomSpecular, randomSpecular, randomSpecular);

    const randomReflectivity = Math.random() * 0.5 + 0.5;
    sphereMaterial.reflectivity = randomReflectivity;

    const randomRefractionRatio = Math.random() * 0.5 + 0.5;
    sphereMaterial.refractionRatio = randomRefractionRatio;

    const randomWireframe = Math.random() * 0.5 + 0.5;
    sphereMaterial.wireframe = randomWireframe > 0.5;

    const randomWireframeLinewidth = Math.random() * 0.5 + 0.5;
    sphereMaterial.wireframeLinewidth = randomWireframeLinewidth;

    const randomWireframeLinecap = Math.random() * 0.5 + 0.5;
    sphereMaterial.wireframeLinecap = randomWireframeLinecap > 0.5 ? 'round' : 'butt';

    const randomWireframeLinejoin = Math.random() * 0.5 + 0.5;
    sphereMaterial.wireframeLinejoin = randomWireframeLinejoin > 0.5 ? 'round' : 'bevel';

    const randomVertexColors = Math.random() * 0.5 + 0.5;
    sphereMaterial.vertexColors = randomVertexColors > 0.5 ? 'face' : 'vertex';

    const randomSkinning = Math.random() * 0.5 + 0.5;
    sphereMaterial.skinning = randomSkinning > 0.5;

    const randomMorphTargets = Math.random() * 0.5 + 0.5;
    sphereMaterial.morphTargets = randomMorphTargets > 0.5;

    const randomMorphNormals = Math.random() * 0.5 + 0.5;
    sphereMaterial.morphNormals = randomMorphNormals > 0.5;

    const randomShading = Math.random() * 0.5 + 0.5;
    sphereMaterial.flatShading = randomShading < 0.5;

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('keydown', event => {
      if (event.key === 'r') {
        explode();
      }
    });

    window.addEventListener('click', () => {
      explode();
    });

    window.addEventListener('mousemove', event => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      sphere.position.copy(pos);
    });

    window.addEventListener('wheel', event => {
      const delta = event.deltaY;
      const zoom = Math.pow(0.95, delta);
      camera.position.multiplyScalar(zoom);
    });

    window.addEventListener('dragstart', event => {
      event.preventDefault();
    });

    window.addEventListener('drag', event => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      sphere.position.copy(pos);
    });

    window.addEventListener('dragend', event => {
      event.preventDefault();
    });

    window.addEventListener('contextmenu', event => {
      event.preventDefault();
    });

    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        window.removeEventListener('contextmenu', event => {
          event.preventDefault();
        });
        window.removeEventListener('dragstart', event => {
          event.preventDefault();
        });
        window.removeEventListener('drag', event => {
          event.preventDefault();
        });
        window.removeEventListener('dragend', event => {
          event.preventDefault();
        });
        window.removeEventListener('keydown', event => {
          if (event.key === 'Escape') {
            event.preventDefault();
            window.removeEventListener('contextmenu', event => {
              event.preventDefault();
            });
            window.removeEventListener('dragstart', event => {
              event.preventDefault();
            });
            window.removeEventListener('drag', event => {
              event.preventDefault();
            });
            window.removeEventListener('dragend', event => {
              event.preventDefault();
            });
          }
        });
      }
    });





  };
</script>
<style></style>