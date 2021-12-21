<template>
    <div>
        <!-- HERO -->
        <div class="hero-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 hero-image-left">
                        <img src="@/assets/images/hero-opening.png" alt="hero-image" class="w-100">
                    </div>
                    <div class="col-md-7 hero-text">
                        <h1>Kembangkan bisnis anda bersama <span class="text-primary">RuApps <i class="uil uil-robot ms-1"></i></span></h1>
                        <p>Millions of developers use RuApps to ship faster, simplify their workflows, and scale effortlessly.</p>
                        <a href="" class="btn btn-primary hero-btn">Yukk, gas eksplor <i class="uil uil-rocket ms-1"></i></a>
                        <a href="" class="btn btn-outline-dark hero-btn">Hubungi CS</a>
                    </div>
                    <div class="col-md-5 hero-image-right">
                        <img src="@/assets/images/hero-opening.png" alt="hero-image" class="w-100">
                    </div>
                </div>
            </div>
        </div>

        <!-- ABOUT -->
        <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 about-image">
                        <img src="@/assets/images/hero-image.png" alt="hero-image" class="w-100">
                    </div>
                    <div class="col-md-6 about-text">
                        <div class="section-title">
                            <h1>Tentang Kami ✨</h1>
                            <div class="line"></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- SERVICES -->
        <Services />

        <!-- PARTNERS -->
        <Partners />

        <!-- TESTIMONI -->
        <Testimoni />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Services from '@/components/Services.vue'
import Partners from '@/components/Partners.vue'
import Testimoni from '@/components/Testimoni.vue'

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})
</script>

<style lang="scss">
@import '@/assets/sass/home.scss';
</style>