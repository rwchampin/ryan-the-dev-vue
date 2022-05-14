import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { ScrollSmoother } from './libs/gsap-bonus/ScrollSmoother';
import { gsap, ScrollTrigger } from './libs/gsap-bonus/all';
import App from './App.vue';
import router from './router';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// create the smooth scroller FIRST!
// const smoother = ScrollSmoother.create({
//   wrapper: '#wrapper',
//   content: '#content',
//   smooth: 1,
//   normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
//   ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
//   effects: true,
//   preventDefault: true
// });

// new LocomotiveScroll({
//   el: document.body,
//   smooth: true,
//   smoothMobile: true,
//   smoothDesktop: true
// });

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
