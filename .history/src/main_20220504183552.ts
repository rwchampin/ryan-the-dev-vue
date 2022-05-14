import { createApp } from 'vue';
import { createPinia } from 'pinia';
import LocomotiveScroll from 'locomotive-scroll';
import App from './App.vue';
import router from './router';

const locoScroll = new LocomotiveScroll({
  el: document.body,
  smooth: true,
  smoothMobile: true,
  smoothDesktop: true
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
