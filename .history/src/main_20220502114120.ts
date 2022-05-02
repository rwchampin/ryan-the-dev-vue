import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
