<template>
  <div>
    <div id="stats"></div>
  </div>
</template>
<script>
import * as dat from 'dat.gui';
import Stats from 'stats.js';
export default {
  name: 'CanvasWrapper',
  mounted() {
     this.init();
  },
  data() {
    return {
      count: 0
    },
  },
  methods: {
    init() {
      const stats = new Stats();
      const div = document.getElementById('stats');
      div.appendChild(stats.domElement);

      const gui = new dat.GUI({
        name: 'Animation Analytics'
      });
      gui.addFolder('Flow Field');
    },
    beginStats() {
      stats.begin();
    }
  }
}
</script>
<style></style>