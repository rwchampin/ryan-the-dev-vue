<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


let renderer = new THREE.WebGLRenderer;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(70, 640 / 480, 0.01, 100);
let controls = new THREE.OrbitControls();

created() {
      if (!(renderer instanceof THREE.WebGLRenderer)) {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.autoClear = false;
        renderer.gammaInput = false;
        renderer.gammaOutput = false;
      }
    }

    onMounted() {
      // Using <div id="container" ... ></div>, access to DOM HTMLElement with $el
      const container = this.$el.children.namedItem('container') as HTMLElement;

      if (!container.contains(this.renderer.domElement)) {
        container.appendChild(this.renderer.domElement);

        this.camera.position.set(-10, 10, 10);

        this.controls = new OrbitControls(this.camera, container);
        this.controls.minDistance = 0;
        this.controls.maxDistance = 500;
        this.controls.autoRotate = true;
      }
</script>