<template>
  <div>
    <div id="stats"></div>
  </div>
</template>
<script setup>
import * as dat from 'dat.gui';
import Stats from 'stats.js';

const props = defineProps({
  gui:Bool,
  stats:Bool,
});
let stats, gui;
const init = () => {
  stats = new Stats();
  const div = document.getElementById('stats');
  div.appendChild(stats.domElement);

  gui = new dat.GUI({
    name: 'Animation Analytics'
  });
};
init();

export { stats, gui };
</script>
