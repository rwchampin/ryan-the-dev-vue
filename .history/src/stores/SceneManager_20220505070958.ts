import { defineStore } from 'pinia';
import * as THREE from 'three';

export const useThreeStore = defineStore({
  id: 'SceneManager',
  state: () => ({
    scene: {
      container: {},
      renderer: {},
      camera: {},
      mouse: {}
    }

  }),
  getters: {
    getContainer: () => this.container,
    getRenderer: () => this.renderer,
    getCamera: () => this.getCamera,
    getScene: () => this.getScene,
    getMouse: () => this.getMouse
  },
  actions: {
    createScene() {

    }
  createCamera() {
      this.camera[]
    }
  }
});
