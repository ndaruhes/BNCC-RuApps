<template>
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel"><i class="uil uil-plus me-1"></i>Tambah Testimoni</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalClose"></button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center mb-3">
                        <div class="col-md-2 col-3">
                            <img src="@/assets/images/avatar.png" alt="avatar.png" class="w-100">
                        </div>
                        <div class="col-md-10 col-9 p-0 modal-user-info">
                            <span>{{user.namaLengkap}}</span>
                            <small class="text-grey">{{user.email}}</small>
                        </div>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="form-group">
                            <textarea rows="4" class="form-control" :class="{'is-invalid': formErrors.quote && formErrors.quote.length > 0}" placeholder="Berikan pendapat atau testimoni anda 😁" v-model="form.quote"></textarea>
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
</template>

<script>
import { mapGetters } from 'vuex'
import DualBall from '@/components/loadings/DualBall.vue'
export default {
    props: ['user'],
    data() {
        return {
            form: {
                quote: '',
            },
        }
    },
    computed: {
        ...mapGetters({
            formErrors: 'formErrors',
            btnLoading: 'btnLoading',
        }),
    },
    components: { DualBall },
    methods: {
        submit() {
            let data = { user: this.$props.user, form: this.form }
            this.$store
                .dispatch('testimoni/storeTestimoni', data)
                .then((res) => {
                    if (res.status === 200) {
                        this.$refs.modalClose.click()
                        this.form.quote = ''
                    }
                })
        },
    },
}
</script>