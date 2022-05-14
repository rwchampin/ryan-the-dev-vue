<template>
  <div>
    <div id="stats"></div>
  </div>
</template>
<script>
import * as dat from 'dat.gui';
import Stats from 'stats.js';

let stats, gui;
const init = () => {
  stats = new Stats();
  const div = document.getElementById('stats');
  div.appendChild(stats.domElement);

  gui = new dat.GUI({
    name: 'Animation Analytics'
  });
};

export { init, stats, gui };

</script>
