import { defineStore } from 'pinia';
import * as THREE from 'three';

export const useThreeStore = defineStore({
  id: 'SceneManager',
  state: () => ({
    GLOBAL_CONTAINER: null,
    GLOBAL_RENDERER: null,
    GLOBAL_SCENE: null,
    scenes: []
  }),
  getters: {
    getCamera: () => {
      if (this.getCamera) {
        return this.getCamera;
      }
    },
    getScene: () => this.getScene,
    getMouse: () => this.getMouse
  },
  actions: {
    createCamera() {
      this.GLOBAL_CAMERA = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        500,
      )
      this.GLOBAL_CAMERA.position.set(0, 0, 100)
      this.GLOBAL_CAMERA.lookAt(0, 0, 0)
    },
    createRenderer() {
      if(this.GLOBAL_RENDERER) {return}
      this.GLOBAL_RENDERER = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      this.GLOBAL_RENDERER.setSize(window.innerWidth, window.innerHeight);
      this.GLOBAL_RENDERER.setPixelRatio(Math.max(1.5, window.devicePixelRatio))
      document.body.appendChild(this.GLOBAL_RENDERER.domElement)
    },
    createScene() {
      if (!this.GLOBAL_SCENE) {
        this.GLOBAL_SCENE = new THREE.Scene();
      }
      this.scenes.push({
        camera: (this.camera = new THREE.PerspectiveCamera(
          45,
          this.GLOBAL_CONTAINER.offsetWidth / this.GLOBAL_CONTAINER.offsetHeight,
          0.1,
          10000
        )),
        container: this.GLOBAL_CONTAINER,
        renderer: this.GLOBAL_RENDERER
      });
      return {
        scene: new THREE.Scene()
      };
    }
  }
});