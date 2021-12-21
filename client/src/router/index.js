import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "Contact" */ '@/views/Contact.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

export default router