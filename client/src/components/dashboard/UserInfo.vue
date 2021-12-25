<template>
    <div>
        <div class="section-title">
            <h1>Profile Anda</h1>
            <div class="line"></div>
        </div>
        <div class="user-info">
            <span class="title"><i class="uil uil-user me-1"></i>Nama Lengkap</span>
            <span class="value">{{authenticated.namaLengkap}}</span>
        </div>
        <div class="user-info">
            <span class="title"><i class="uil uil-envelope me-1"></i>Alamat Email</span>
            <span class="value">{{authenticated.email}}</span>
        </div>
        <div class="user-info">
            <span class="title"><i class="uil uil-user-md me-1"></i>Peran User</span>
            <span class="value">{{authenticated.role}}</span>
        </div>
        <div class="user-info">
            <span class="title"><i class="uil uil-calendar-alt me-1"></i>Terdaftar</span>
            <span class="value">{{moment(authenticated.createdAt).locale('id').format('LL')}}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'
import moment from 'moment/min/moment-with-locales'

const authenticated = computed(() => store.getters['auth/authenticated'])
</script>

<style>
</style>