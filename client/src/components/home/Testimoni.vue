<template>
    <div class="testimoni" id="testimoni">
        <div class="container">
            <div class="row align-items-center">
                <!-- FOUNDER QUOTES -->
                <div class="col-md-4 founder-quotes">
                    <img src="@/assets/images/ndaru.png" alt="Muhamad Ndaru" class="w-75">
                    <span class="name">Muhamad Ndaru Hestiafin</span>
                    <span class="jabatan">Founder RuApps<i class="uil uil-robot ms-1"></i></span>
                </div>
                <div class="col-md-8">
                    <div class="section-title">
                        <h1>Testimoni Klien 😊</h1>
                        <div class="line"></div>
                    </div>
                    <swiper :breakpoints='{
                        "640": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 50
                        }
                    }' :loop="true" :centeredSlides="true" :grabCursor="true" :freeMode="true" :pagination='{"clickable": true}'>
                        <swiper-slide class="testimoni-item" v-for="testimoni in allTestimoni" :key="testimoni.id">
                            <span class="quote">"{{testimoni.quote}}"</span>
                            <span class="member">~ {{testimoni.user}}</span>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import store from '@/store'
import { Swiper, SwiperSlide } from 'swiper/vue'

const getAllTestimoni = () => {
    store.dispatch('testimoni/getAllTestimoni', 'allTestimoni')
}

onMounted(() => {
    getAllTestimoni()
})

const allTestimoni = computed(() => store.getters['testimoni/allTestimoni'])
</script>