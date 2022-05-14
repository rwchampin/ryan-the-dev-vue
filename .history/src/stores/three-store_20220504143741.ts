import { defineStore } from 'pinia';

export const useThreeStore = defineStore({
  id: 'ThreeStore',
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
    increment() {
      this.counter++;
    }
  }
});
