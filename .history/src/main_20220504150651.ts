import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { onMounted } from 'vue';
import locomotiveScroll from 'locomotive-scroll';
import App from './App.vue';
import router from './router';

onMounted(() => {
  const locoScroll = new locomotiveScroll();
});
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
