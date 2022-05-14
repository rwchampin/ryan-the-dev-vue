<template>
  <div ref="widget" id="stats"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import * as dat from 'dat.gui';
import Stats from 'stats.js';

const widget = ref(null);

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
  if (props.initStats) {
    stats = new Stats();
    stats.showPanel(0);
  }
};
init();

onMounted(() => {
  const el = ref(widget).value;
  el.appendChild(stats.domElement);
});

const statsBegin = () => {
  stats.begin();
};

const statsEnd = () => {
  stats.end();
};

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

defineExpose({
  statsBegin,
  statsEnd,
  addGuiElem
});
</script>
