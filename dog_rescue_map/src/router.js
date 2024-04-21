
import {createRouter as createRouter, createWebHistory } from 'vue-router';

import HomeView from "./views/HomeView.vue";
import LocalAdoptables from './views/LocalAdoptables.vue';


const routes = [
    {
    path: '/',
    name: "home",
    component: HomeView,
    },

    {
    path: '/dogs',
    name: 'dogs',
    component: LocalAdoptables
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router