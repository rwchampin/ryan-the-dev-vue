import { defineStore } from 'pinia';
import * as THREE from 'three';

export const useThreeStore = defineStore({
  id: 'SceneManager',
  state: () => ({
    GLOBAL_CANVAS_ELEMENT: null,
    GLOBAL_RENDERER: null,
    scene: {
      camera: {},
      mouse: {}
    }

  }),
  getters: {
    getCamera: () => this.getCamera,
    getScene: () => this.getScene,
    getMouse: () => this.getMouse
  },
  actions: {
    createScene() {
      if (!this.GLOBAL_CANVAS_ELEMENT) {
        this.GLOBAL_CANVAS_ELEMENT = document.createElement('canvas')
      }
      if (!this.GLOBAL_RENDERER) {
        this.GLOBAL_RENDERER = new THREE.Renderer();
      }
      return {
        scene: new THREE.Scene(),
      }
    }
  createCamera() {
      this.camera[]
    }
  }
});
