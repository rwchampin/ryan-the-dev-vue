import Vue from 'vue';
import { createPinia } from 'pinia';
import HelloWorld from '@/components/HelloWorld.vue';
import App from './App.vue';
import router from './router';

const app = Vue.createApp(App).use(createPinia()).use(router).mount('#app');
