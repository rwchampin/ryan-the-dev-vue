import { createApp } from 'vue';
import { createPinia } from 'pinia';
import LocomotiveScroll from 'locomotive-scroll';
import App from './App.vue';
import router from './router';

const locoScroll = new LocomotiveScroll({
  el: '[data-scroll-container]',
  smooth: true
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
