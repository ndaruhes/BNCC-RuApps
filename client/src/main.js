import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appConfig from "./config/app"
import '@/store/subscriber'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@popperjs/core"

// Axios
import axios from 'axios'
axios.defaults.baseURL = appConfig.apiURL

// Notyf
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
window.notyf = new Notyf({duration: 4000})

// Swiper
import 'swiper/css'
import SwiperCore, { FreeMode } from 'swiper'
SwiperCore.use([FreeMode])

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    createApp(App).use(router).use(store).mount('#app')
})
