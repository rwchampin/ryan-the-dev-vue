import { defineStore } from 'pinia';
import * as THREE from 'three';

export const useThreeStore = defineStore({
  id: 'SceneManager',
  state: () => ({
    GLOBAL_CONTAINER: null,
    GLOBAL_RENDERER: null,
    scenes: []
  }),
  getters: {
    getCamera: () => this.getCamera,
    getScene: () => this.getScene,
    getMouse: () => this.getMouse
  },
  actions: {
    createScene() {
      if (!this.GLOBAL_CONTAINER) {
        this.GLOBAL_CONTAINER = document.createElement('div');
      }
      if (!this.GLOBAL_RENDERER) {
        this.GLOBAL_RENDERER = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.GLOBAL_RENDERER.setSize(window.innerWidth, window.innerHeight);
        this.GLOBAL_RENDERER.setPixelRatio(Math.max(1.5, window.devicePixelRatio));
        this.GLOBAL_CONTAINER.append(this.GLOBAL_RENDERER.domElement);
      }
      this.scenes.push({
        camera: (this.camera = new THREE.PerspectiveCamera(
          45,
          this.GLOBAL_CONTAINER.offsetWidth / this.GLOBAL_CONTAINER.offsetHeight,
          0.1,
          10000
        ))
      });
      return {
        scene: new THREE.Scene()
      };
    }
  }
});
