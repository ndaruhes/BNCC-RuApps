<template>
    <div>
        <Navbar />
        <router-view v-slot="{Component}">
            <transition name="route" mode="out-in">
                <component :is='Component'></component>
            </transition>
        </router-view>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<style lang="scss">
@import '@/assets/sass/app.scss';
</style>