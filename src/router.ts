// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: Sponsor
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
