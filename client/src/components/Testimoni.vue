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
                        <swiper-slide class="testimoni-item">
                            <span class="quote">"Gokil banget sih ini, website gue langsung peringkat 1 google pake SEO Agency dari RuApps"</span>
                            <span class="member">~ Arya Javas</span>
                        </swiper-slide>
                        <swiper-slide class="testimoni-item">
                            <span class="quote">"Keren sekali sekarang bisnis saya sudah mempunyai website, Terima kasih RuApps, mantapp bangett"</span>
                            <span class="member">~ Rafa Adila</span>
                        </swiper-slide>
                        <swiper-slide class="testimoni-item">
                            <span class="quote">"Keren sekali sekarang bisnis saya sudah mempunyai website, Terima kasih RuApps, mantapp bangett"</span>
                            <span class="member">~ Rabbani Qibar</span>
                        </swiper-slide>
                        <swiper-slide class="testimoni-item">
                            <span class="quote">"Keren sekali sekarang bisnis saya sudah mempunyai website, Terima kasih RuApps, mantapp bangett"</span>
                            <span class="member">~ Anggie Dwi</span>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>