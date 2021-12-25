import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/store/subscriber'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import aosConfig from "./config/aos"
AOS.init(aosConfig);

// Axios
import axios from 'axios'
import appConfig from "./config/app"
axios.defaults.baseURL = appConfig.apiURL

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@popperjs/core"

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
