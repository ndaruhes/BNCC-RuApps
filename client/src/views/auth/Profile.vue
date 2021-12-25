<template>
    <div>
        <!-- BANNER -->
        <Banner />

        <div class="container">
            <!-- DASHBOARD MENU -->
            <DashboardMenu />

            <!-- PROFILE -->
            <div class="row">
                <div class="col-md-6 content-left">
                    <UserInfo v-if="$route.path == '/profile'" />
                    <Testimoni v-if="$route.path == '/testimoni'" />

                    <template v-if="authenticated.role == 'Admin'">
                        <Messages v-if="$route.path == '/messages'" />
                    </template>
                </div>
                <div class="col-md-6 content-right">
                    <img src="@/assets/images/profile.png" alt="profile.png" class="w-100">
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import Banner from '@/components/layouts/Banner.vue'
import DashboardMenu from '@/components/dashboard/DashboardMenu.vue'
import UserInfo from '@/components/dashboard/UserInfo.vue'
import Testimoni from '@/components/dashboard/testimoni/Testimoni.vue'
import Messages from '@/components/dashboard/Messages.vue'

import { computed } from 'vue'
import store from '@/store'

const authenticated = computed(() => store.getters['auth/authenticated'])
</script>

<style lang="scss">
@import '@/assets/sass/dashboard.scss';
</style>