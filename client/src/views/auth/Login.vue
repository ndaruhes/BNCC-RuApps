<template>
    <div class="container auth-wrapper">
        <div class="row align-items-center">
            <div class="col-md-5 auth-form bg-light">
                <h3 class="title">Login</h3>
                <p class="desc">Masuk untuk mengakses dan menjelajahi lebih dalam RuApps</p>
                <form action="" @submit.prevent="login">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" :class="{'is-invalid': formErrors.email && formErrors.email.length > 0}" placeholder="ex: ndaru@yourmail.com" v-model="form.email">
                        <small class="text-danger" v-if="formErrors.email">*{{formErrors.email[0]}}</small>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" :class="{'is-invalid': formErrors.password && formErrors.password.length > 0}" placeholder="Your password..." v-model="form.password">
                        <small class="text-danger" v-if="formErrors.password">*{{formErrors.password[0]}}</small>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="rememberCheck">
                        <label class="form-check-label" for="rememberCheck">Remember me</label>
                    </div>
                    <div class="form-group mt-4">
                        Belum punya akun? daftar <router-link to="/register">disini</router-link>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm d-flex px-4" :disabled="btnLoading">
                        Masuk
                        <span v-if="btnLoading" class="ms-1">
                            <DualBall />
                        </span>
                    </button>
                </form>
            </div>
            <div class="col-md-7 auth-image">
                <img src="@/assets/images/login.png" alt="login.png" class="w-100">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import store from '@/store'
import DualBall from '@/components/loadings/DualBall.vue'

const form = ref({
    email: '',
    password: '',
})

const btnLoading = computed(() => store.getters['btnLoading'])
const formErrors = computed(() => store.getters['formErrors'])

const login = () => {
    store.dispatch('auth/login', form.value)
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/auth.scss';
</style>