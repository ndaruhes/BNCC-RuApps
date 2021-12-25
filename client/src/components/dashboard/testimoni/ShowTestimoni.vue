<template>
    <div class="modal fade" id="showModal" tabindex="-1" aria-labelledby="showModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="showModalLabel"><i class="uil uil-laughing me-1"></i>Testimoni</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center mb-3">
                        <div class="col-md-2 col-3">
                            <img src="@/assets/images/avatar.png" alt="avatar.png" class="w-100">
                        </div>
                        <div class="col-md-10 col-9 p-0 modal-user-info">
                            <span>{{testimoni.user}}</span>
                            <small class="text-grey">{{testimoni.email}}</small>
                        </div>
                    </div>
                    <small class="badge bg-light text-dark"><i class="uil uil-calendar-alt me-1"></i>{{moment(testimoni.createdAt).locale('id').format('LL')}}</small>
                    <br>
                    <span class="d-block mt-1">{{ testimoni.quote }}</span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Tutup</button>
                    <a :href="`mailto:${testimoni.email}`" class="btn btn-primary btn-sm">Kirim Pesan <i class="uil uil-envelope-upload ms-1"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['testimoniId'],
    watch: {
        testimoniId: function () {
            this.$store.dispatch(
                'testimoni/getTestimoni',
                this.$props.testimoniId
            )
        },
    },
    computed: {
        ...mapGetters({
            testimoni: 'testimoni/testimoni',
        }),
    },
}
</script>

<script setup>
import moment from 'moment/min/moment-with-locales'
</script>