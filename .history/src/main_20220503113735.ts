import Vue from 'vue';
import { createPinia } from 'pinia';
import HelloWorld from '@/components/HelloWorld.vue';
import App from './App.vue';
import router from './router';

const app = Vue.createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
