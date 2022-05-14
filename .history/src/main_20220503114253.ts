import vue from 'vue';
import { createPinia } from 'pinia';
import HelloWorld from '@/components/HelloWorld.vue';
import App from './App.vue';
import router from './router';

vue.createApp(App).component('HelloWorld', HelloWorld).use(createPinia()).use(router).mount('#app');
