<template>
    <div>
        <Navbar />
        <router-view v-slot="{Component}">
            <transition name="route" mode="out-in">
                <component :is='Component'></component>
            </transition>
        </router-view>
        <BackToTop />
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'
import BackToTop from '@/components/layouts/BackToTop.vue'
</script>

<style lang="scss">
@import '@/assets/sass/app.scss';
</style>