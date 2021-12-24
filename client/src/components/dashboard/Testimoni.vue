<template>
    <div>
        <!-- ADD MODAL -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addModalLabel"><i class="uil uil-plus me-1"></i>Tambah Testimoni</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalClose"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submit">
                            <div class="form-group">
                                <textarea class="form-control" :class="{'is-invalid': formErrors.quote && formErrors.quote.length > 0}" placeholder="Berikan pendapat atau testimoni anda 😁" v-model="form.quote"></textarea>
                                <small class="text-danger" v-if="formErrors.quote">*{{formErrors.quote[0]}}</small>
                            </div>
                            <button type="submit" class="btn btn-primary btn-sm d-flex">
                                Submit
                                <span v-if="btnLoading" class="ms-1">
                                    <DualBall />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION TITLE -->
        <div class="section-title">
            <h1>Testimoni</h1>
            <div class="line"></div>
            <button class="btn btn-dark btn-sm add-btn" data-bs-toggle="modal" data-bs-target="#addModal">Tambah<i class="uil uil-plus ms-1"></i></button>
        </div>

        <!-- TABLE -->
        <div class="table-wrapper bg-light">
            <table class="table">
                <thead>
                    <tr align="center">
                        <th>#</th>
                        <th>Testimoni</th>
                        <th>Member</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr v-for="(testimoni, index) in allTestimoni" :key="testimoni.id">
                        <th>{{index+1}}</th>
                        <td>{{testimoni.quote}}</td>
                        <td>{{testimoni.user}}</td>
                        <td>
                            <router-link to="" class="btn btn-primary btn-sm me-1"><i class="uil uil-edit me-1"></i>Ubah</router-link>
                            <router-link to="" class="btn btn-danger btn-sm"><i class="uil uil-trash-alt me-1"></i>Hapus</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '@/store'
import DualBall from '@/components/loadings/DualBall.vue'

const getAllTestimoni = () => {
    store.dispatch('testimoni/getAllTestimoni')
}

const submit = () => {
    store.dispatch('testimoni/storeTestimoni', form.value)
    // .then(() => {
    //     this.$refs.modalClose.click()
    // })
}

onMounted(() => {
    getAllTestimoni()
})

const form = ref({
    quote: '',
})

const btnLoading = computed(() => store.getters['btnLoading'])
const formErrors = computed(() => store.getters['formErrors'])
const allTestimoni = computed(() => store.getters['testimoni/allTestimoni'])
</script>

<style lang="scss" scoped>
.add-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
</style>