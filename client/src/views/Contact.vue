<template>
    <div>
        <!-- BANNER -->
        <Banner />

        <!-- CONTACT FORM -->
        <div class="container">
            <div class="col-md-5 py-3">
                <form @submit.prevent="submit">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" class="form-control" :class="{'is-invalid': formErrors.email && formErrors.email.length > 0}" placeholder="ex: muhamad.ndaru@gmail.com" v-model="form.email">
                            <small class="text-danger" v-if="formErrors.email">*{{formErrors.email[0]}}</small>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Nama Lengkap</label>
                            <input type="text" class="form-control" :class="{'is-invalid': formErrors.namaLengkap && formErrors.namaLengkap.length > 0}" placeholder="ex: Muhamad Ndaru" v-model="form.namaLengkap">
                            <small class="text-danger" v-if="formErrors.namaLengkap">*{{formErrors.namaLengkap[0]}}</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label>Pesan / Keluhan</label>
                            <textarea class="form-control" :class="{'is-invalid': formErrors.pesan && formErrors.pesan.length > 0}" placeholder="Masukkan pesan disini" rows="5" v-model="form.pesan"></textarea>
                            <small class="text-danger" v-if="formErrors.pesan">*{{formErrors.pesan[0]}}</small>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-dark btn-sm d-flex" :disabled="btnLoading">
                        Send Now
                        <span v-if="btnLoading" class="ms-1">
                            <DualBall />
                        </span>
                        <span v-else class="ms-1"><i class="uil uil-message"></i></span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '@/components/layouts/Banner.vue'
import DualBall from '@/components/loadings/DualBall.vue'

export default {
    data() {
        return {
            form: {
                email: '',
                namaLengkap: '',
                pesan: '',
            },
        }
    },
    computed: {
        ...mapGetters({
            formErrors: 'formErrors',
            btnLoading: 'btnLoading',
        }),
    },
    components: { Banner, DualBall },
    methods: {
        submit() {
            this.$store
                .dispatch('contact/storeMessage', this.form)
                .then((res) => {
                    if (res.status === 200) {
                        this.form.email = ''
                        this.form.namaLengkap = ''
                        this.form.pesan = ''
                    }
                })
        },
    },
}
</script>
