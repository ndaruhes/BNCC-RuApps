<template>
    <div class="container auth-wrapper">
        <div class="row align-items-center">
            <div class="col-md-5 auth-form bg-light">
                <h3 class="title">Register</h3>
                <p class="desc">Daftar akun untuk mengakses dan menjelajahi lebih dalam RuApps</p>
                <form action="" @submit.prevent="register">
                    <div class="form-group">
                        <label>Nama Lengkap</label>
                        <input type="text" class="form-control" :class="{'is-invalid': formErrors && formErrors.namaLengkap && formErrors.namaLengkap.length > 0}" placeholder="ex: Muhamad Ndaru" v-model="form.namaLengkap">
                        <small class="text-danger" v-if="formErrors && formErrors.namaLengkap">*{{formErrors.namaLengkap[0]}}</small>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" :class="{'is-invalid': formErrors && formErrors.email && formErrors.email.length > 0}" placeholder="ex: ndaru@yourmail.com" v-model="form.email">
                        <small class="text-danger" v-if="formErrors && formErrors.email">*{{formErrors.email[0]}}</small>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" :class="{'is-invalid': formErrors && formErrors.password && formErrors.password.length > 0}" placeholder="Your password..." v-model="form.password">
                        <small class="text-danger" v-if="formErrors && formErrors.password">*{{formErrors.password[0]}}</small>
                    </div>
                    <div class="form-group">
                        <label>Konfirmasi Password</label>
                        <input type="password" class="form-control" :class="{'is-invalid': formErrors && formErrors.confirmPassword && formErrors.confirmPassword.length > 0}" placeholder="Confirm password..." v-model="form.confirmPassword">
                        <small class="text-danger" v-if="formErrors && formErrors.confirmPassword">*{{formErrors.confirmPassword[0]}}</small>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="rememberCheck">
                        <label class="form-check-label" for="rememberCheck">Remember me</label>
                    </div>
                    <div class="form-group mt-4">
                        Sudah punya akun? masuk <router-link to="/login">disini</router-link>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm d-flex px-4" :disabled="btnLoading">
                        Daftar
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
    namaLengkap: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const btnLoading = computed(() => store.getters['btnLoading'])
const formErrors = computed(() => store.getters['formErrors'])

const register = () => {
    store.dispatch('auth/register', form.value)
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/auth.scss';
</style>