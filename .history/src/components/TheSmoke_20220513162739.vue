<template>
  <div ref="container" id="container"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let container = ref(null);
let renderer = new THREE.WebGLRenderer;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(70, 640 / 480, 0.01, 100);
let controls = new THREE.OrbitControls();

const created =  () => {
      if (!(renderer instanceof THREE.WebGLRenderer)) {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.autoClear = false;
        renderer.gammaInput = false;
        renderer.gammaOutput = false;
      }
    }

   const onMounted = () => {
      // Using <div id="container" ... ></div>, access to DOM HTMLElement with $el
      const container =  this.refs.$el.children.namedItem('container');

      if (!container.contains(renderer.domElement)) {
        container.appendChild(renderer.domElement);

        camera.position.set(-10, 10, 10);

        controls = new OrbitControls(camera, container);
        controls.minDistance = 0;
        controls.maxDistance = 500;
        controls.autoRotate = true;
      }
      renderer.setSize(container.clientWidth, container.clientHeight);

      clear(scene);
      initialize(container);
      animate();
    }

    const initialize = (container) => {
      const lights = [];

      lights[ 0 ] = new THREE.PointLight(0xffffff, 1, 0);
      lights[ 1 ] = new THREE.PointLight(0xffffff, 1, 0);
      lights[ 2 ] = new THREE.PointLight(0xffffff, 1, 0);

      lights[ 0 ].position.set(0, 200, 0);
      lights[ 1 ].position.set(100, 200, 100);
      lights[ 2 ].position.set(-100, -200, -100);

      scene.add(lights[ 0 ]);
      scene.add(lights[ 1 ]);
      scene.add(lights[ 2 ]);

      const group = new THREE.Group();
      const geometry = new THREE.TorusGeometry(5, 2, 16, 100);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
      const meshMaterial = new THREE.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, flatShading: true });
      group.add(new THREE.LineSegments(wireframe, lineMaterial));
      group.add(new THREE.Mesh(geometry, meshMaterial));

      scene.add(group);
    }

    private animate(time: any = 0): void {
      time *= 0.001; // convert to seconds

      this.renderer.render(this.scene, this.camera);

      this.controls.update();

      requestAnimationFrame(this.animate);
    }

     const clear = (obj) => {
      while (obj.children.length > 0) {
        clear(obj.children[0]);
        obj.remove(obj.children[0]);
      }

      if (obj.geometry) { obj.geometry.dispose(); }
      if (obj.material) { obj.material.dispose(); }
      if (obj.texture)  { obj.texture.dispose(); }
    }
</script>