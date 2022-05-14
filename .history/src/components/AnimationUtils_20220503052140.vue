<template>


<div>
<div id="stats"></div>

  </div>
</template>
<script>
import * as dat from 'dat.gui';
import Stats from 'stats.js';
export default {
  name: "CanvasWrapper",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const stats = new Stats();
      const gui = new dat.GUI({
        "name": "Animation Analytics"
      });
    }
  }
}
</script>
<style></style>