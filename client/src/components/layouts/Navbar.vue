<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <router-link class="navbar-brand" to="/"><i class="uil uil-robot me-1"></i>RuApps.</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="uil uil-estate me-1"></i>Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="$route == '/' ? '#services' : '/#services'"><i class="uil uil-rocket me-1"></i>Layanan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="$route == '/' ? '#partners' : '/#partners'"><i class="uil uil-users-alt me-1"></i>Partners</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="$route == '/' ? '#testimoni' : '/#testimoni'"><i class="uil uil-laughing me-1"></i>Testimoni</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact"><i class="uil uil-phone-alt me-1"></i>Contact Us</router-link>
                    </li>
                    <template v-if="authenticated">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="uil uil-user-circle me-1"></i>{{ authenticated.namaLengkap }}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="userDropdown">
                                <li>
                                    <router-link class="dropdown-item" to="/profile"><i class="uil uil-external-link-alt me-1"></i>Dashboard</router-link>
                                </li>
                                <li><a class="dropdown-item" href="#" @click="logout"><i class="uil uil-power me-1"></i>Logout</a></li>
                            </ul>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login"><i class="uil uil-sign-in-alt me-1"></i>Login</router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'

const authenticated = computed(() => store.getters['auth/authenticated'])
const logout = () => {
    store.dispatch('auth/logout')
}
</script>

<style lang="scss">
@import '@/assets/sass/navbar.scss';
</style>