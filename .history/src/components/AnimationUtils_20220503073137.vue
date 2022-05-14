<template>
  <div>
    <div id="stats"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import * as dat from 'dat.gui';
import Stats  from 'stats.js';

let stats, gui;
  const init = () => {
    const stats = new Stats();
    const div = document.getElementById('stats');
    div.appendChild(stats.domElement);

    const gui = new dat.GUI({
      name: 'Animation Analytics'
    });
  }

  defineExpose({
    init: init,
    stats: stats,
    gui: gui
  });


</script>
<style></style>
