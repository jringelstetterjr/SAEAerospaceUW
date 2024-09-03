import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'
import About from './views/About.vue'
import Team from './views/Team.vue'
import '@fontsource/exo'; // Defaults to weight 400
import Carousel from 'primevue/carousel';
//import VueMeta from 'vue-meta';
import Sponsor from './views/Sponsor.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/team', component: Team },
    { path: '/sponsors', component: Sponsor },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
//app.use(VueMeta);
app.component('Carousel', Carousel);
app.mount('#app');