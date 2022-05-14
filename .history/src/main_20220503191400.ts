import { createApp } from 'vue';
import { createPinia } from 'pinia';
import HelloWorld from '@/components/HelloWorld.vue';
import TheWelcome from '@/components/TheWelcome.vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('HelloWorld', HelloWorld);
app.component('TheWelcome', TheWelcome);
app.use(createPinia());
app.use(router);
app.mount('#app');
