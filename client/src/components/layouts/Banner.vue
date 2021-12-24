<template>
    <div class="container bg-light banner">
        <template v-if="$route.path == '/contact'">
            <h1>Feel Free to Contact Us 📞😊</h1>
            <p class="mb-4">Jangan sungkan untuk menghubungi, kami siap untuk merespon masalah dan keluhan anda. Silahkan menghubungi kami melalui whatsapp atau form dibawah</p>
            <a href="#" class="btn btn-contact-wa"><i class="uil uil-whatsapp me-1"></i>Whatsapp Call</a>
        </template>
        <template v-else>
            <h1 v-if="authenticated">Halo {{ authenticated.namaLengkap }} 👋😊</h1>
            <h1 v-else>Halo 👋😊</h1>
            <p class="mb-4">Semoga kamu menyukai layanan dari kami, jika anda puas, silahkan berikan testimoni kamu terhadap layanan yang kami berikan. Semoga bermanfaat :D</p>
            <router-link to="/" class="btn btn-primary"><i class="uil uil-estate me-1"></i>Back to Home</router-link>
        </template>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'

const authenticated = computed(() => store.getters['auth/authenticated'])
</script>

<style lang="scss" scoped>
@import '@/assets/sass/banner.scss';
.btn-contact-wa {
    background: #2bb741;
    color: white;
}
</style>