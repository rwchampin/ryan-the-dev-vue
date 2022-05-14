import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { onMounted } from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
import App from './App.vue';
import router from './router';

onMounted(() => {
  const locoScroll = new LocomotiveScroll();
});
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
