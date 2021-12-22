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
        component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
        beforeEnter: (to, from, next) => {
            if(store.getters['auth/authenticated']){
                return next({
                    name : 'Home'
                })
            }
            next()
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue'),
        beforeEnter: (to, from, next) => {
            if(store.getters['auth/authenticated']){
                return next({
                    name : 'Home'
                })
            }
            next()
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

export default router