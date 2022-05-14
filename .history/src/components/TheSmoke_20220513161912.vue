<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


let renderer = new THREE.WebGLRenderer;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(70, 640 / 480, 0.01, 100);
let controls = new THREE.OrbitControls();

created() {
      if (!(this.renderer instanceof THREE.WebGLRenderer)) {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.autoClear = false;
        this.renderer.gammaInput = false;
        this.renderer.gammaOutput = false;
      }
    }
</script>