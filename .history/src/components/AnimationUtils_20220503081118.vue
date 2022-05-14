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
let stats, gui;
const init = () => {
  if (props.initGui) {
    gui = new dat.GUI({
      name: 'Animation Analytics'
    });
  }
  if(props.initStats) {
    stats = new Stats();
    stats.showPanel(1);
    const div = document.getElementById('stats');
  div.appendChild(stats.domElement);
  }




};
init();

const addGuiElem = () => {
  alert();
  if (props.initGui) {
    gui.add(props, 'initGui').onChange(() => {
      if (props.initGui) {
        gui.domElement.style.display = 'block';
      } else {
        gui.domElement.style.display = 'none';
      }
    });
  }
};
}
</script>
