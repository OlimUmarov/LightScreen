import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/group',
        component: import("../views/Group.vue")
    },
    {
        path: '/history',
        component: import("../views/History.vue")
    },
    {
        path: '/get-started',
        component: import("../views/Get Started.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router
