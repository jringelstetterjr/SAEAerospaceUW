import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'
import About from './views/About.vue'
import '@fontsource/rajdhani'; // Defaults to weight 400

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true
});
app.use(router);
app.mount('#app');