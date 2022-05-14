<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


private renderer!: THREE.WebGLRenderer;
private scene = new THREE.Scene();
private camera = new THREE.PerspectiveCamera(70, 640 / 480, 0.01, 100);
private controls!: OrbitControls;

private created() {
      if (!(this.renderer instanceof THREE.WebGLRenderer)) {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.autoClear = false;
        this.renderer.gammaInput = false;
        this.renderer.gammaOutput = false;
      }
    }
</script>