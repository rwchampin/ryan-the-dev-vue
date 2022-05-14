<template>
  <div>
    <div id="stats"></div>
  </div>
</template>
<script setup>
import * as dat from 'dat.gui';
import Stats from 'stats.js';

const props = defineProps({
  initGui: {
    default: true,
    type: Boolean
  },
  initStats: {
    default: true,
    type: Boolean
  }
});

const init = () => {
  const stats = new Stats();
  const div = document.getElementById('stats');
  div.appendChild(stats.domElement);

  const gui = new dat.GUI({
    name: 'Animation Analytics'
  });
};
init();

export { stats, gui };
</script>
