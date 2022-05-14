import { createApp } from 'vue';
import { createPinia } from 'pinia';
import HelloWorld from '@/components/HelloWorld.vue';
import WelcomeView from '@/components/WelcomeView.vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('HelloWorld', HelloWorld);
app.component('welcomeView', WelcomeView);
app.use(createPinia());
app.use(router);
app.mount('#app');
