<template>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteModalLabel">Konfirmasi Hapus</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="modalClose"></button>
                </div>
                <div class="modal-body">
                    Kamu yakin mau hapus?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Batal</button>

                    <!-- DELETE TESTIMONI -->
                    <button type="button" class="btn btn-danger btn-sm d-flex" @click="deleteTestimoni(testimoniId)" v-if=" testimoniId != null" :disabled="btnLoading">
                        Yakin
                        <span v-if="btnLoading" class="ms-1">
                            <DualBall />
                        </span>
                    </button>

                    <!-- DELETE MESSAGE -->
                    <button type="button" class="btn btn-danger btn-sm d-flex" @click="deleteMessage(messageId)" v-if=" messageId != null" :disabled="btnLoading">
                        Yakin
                        <span v-if="btnLoading" class="ms-1">
                            <DualBall />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DualBall from '@/components/loadings/DualBall.vue'
export default {
    props: ['user', 'testimoniId', 'messageId'],
    components: { DualBall },
    computed: {
        ...mapGetters({
            btnLoading: 'btnLoading',
        }),
    },
    methods: {
        deleteTestimoni(id) {
            let data = { user: this.$props.user, id: id }
            this.$store.dispatch('testimoni/deleteTestimoni', data).then(() => {
                this.$refs.modalClose.click()
            })
        },
        deleteMessage(id) {
            this.$store.dispatch('message/deleteMessage', id).then(() => {
                this.$refs.modalClose.click()
            })
        },
    },
}
</script>

<style>
</style>