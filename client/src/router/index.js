import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

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
        component: () => import(/* webpackChunkName: "Login" */ '@/views/auth/Login.vue'),
        beforeEnter: (to, from, next) => authenticated(next)
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */ '@/views/auth/Register.vue'),
        beforeEnter: (to, from, next) => authenticated(next)
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "Profile" */ '@/views/auth/Profile.vue'),
        beforeEnter: (to, from, next) => notAuthenticated(next)
    },
    {
        path: '/testimoni',
        name: 'Testimoni',
        component: () => import(/* webpackChunkName: "Testimoni" */ '@/views/auth/Profile.vue'),
        beforeEnter: (to, from, next) => notAuthenticated(next)
    },
    {
        path: '/messages',
        name: 'Messages',
        component: () => import(/* webpackChunkName: "Messages" */ '@/views/auth/Profile.vue'),
        beforeEnter: (to, from, next) => authenticatedAdmin(next)
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

function notAuthenticated(next) {
    if(!store.getters['auth/authenticated']){
        return next({
            name : 'Home'
        })
    }
    next()
}

function authenticated(next) {
    if(store.getters['auth/authenticated']){
        return next({
            name : 'Home'
        })
    }
    next()
}

function authenticatedAdmin(next) {
    if(store.getters['auth/authenticated'] && store.getters['auth/user'].role != 'Admin'){
        return next({
            name : 'Home'
        })
    }
    next()
}

export default router