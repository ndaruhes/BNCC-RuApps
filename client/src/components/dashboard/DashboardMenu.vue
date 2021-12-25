<template>
    <div class="dashboard-menu">
        <div class="dashboard-menu-panel">
            <router-link to="/profile" class="btn btn-outline-warning btn-sm"><i class="uil uil-user me-1"></i>Profile</router-link>
            <router-link to="/testimoni" class="btn btn-outline-warning btn-sm"><i class="uil uil-laughing me-1"></i>Testimoni</router-link>
            <template v-if="authenticated.role == 'Admin'">
                <a href="" class="btn btn-outline-warning btn-sm"><i class="uil uil-users-alt me-1"></i>Partners</a>
                <router-link to="/messages" class="btn btn-outline-warning btn-sm"><i class="uil uil-envelope me-1"></i>Message</router-link>
            </template>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'

const authenticated = computed(() => store.getters['auth/authenticated'])
</script>