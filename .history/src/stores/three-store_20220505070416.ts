import { defineStore } from 'pinia';

export const useThreeStore = defineStore({
  id: 'SceneManager',
  state: () => ({
    container: {},
    renderer: {},
    camera: {},
    scenes: {},
    mouse: {}
  }),
  getters: {
    getContainer: () => this.container,
    getRenderer: () => this.renderer,
    getCamera: () => this.getCamera,
    getScene: () => this.getScene,
    getMouse: () => this.getMouse
  },
  actions: {
  createCamera() {
      this.camera[]
    }
  }
});
