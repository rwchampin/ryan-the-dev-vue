<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


private renderer!: THREE.WebGLRenderer;
private scene = new THREE.Scene();
private camera = new THREE.PerspectiveCamera(70, 640 / 480, 0.01, 100);
private controls!: OrbitControls;
</script>