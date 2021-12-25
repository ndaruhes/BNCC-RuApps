<template>
    <div>
        <!-- SHOW & DELETE MESSAGE -->
        <ShowMessage :messageId="messageId" />
        <DeleteMessage :messageId="messageId" />

        <!-- SECTION TITLE -->
        <div class="section-title">
            <h1>Messages</h1>
            <div class="line"></div>
        </div>

        <!-- TABLE -->
        <template v-if="messages.length == 0">
            <div class="alert alert-warning"><i class="uil uil-sad-squint me-1"></i>Belum ada pesan</div>
        </template>
        <template v-else>
            <div class="table-wrapper bg-light">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama Lengkap</th>
                            <th>Pesan</th>
                            <th class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(message, index) in messages" :key="message.id">
                            <td class="fw-bold">{{index+1}}</td>
                            <td>
                                <span class="d-block">{{message.namaLengkap}}</span>
                                <small class="d-block">{{message.email}}</small>
                            </td>
                            <td>
                                {{message.pesan.substring(0, 30) + "..."}}
                                <small class="d-block"><i class="uil uil-calendar-alt me-1"></i>{{moment(message.createdAt).locale('id').format('LL')}}</small>
                            </td>
                            <td class="action-btn-table">
                                <span class="text-dark" data-bs-toggle="modal" data-bs-target="#showModal" @click="setId(message.id)" title="Lihat Pesan"><i class="uil uil-eye"></i></span>
                                <a :href="`mailto:${message.email}`" class="text-primary text-decoration-none mx-1" title="Balas Pesan"><i class="uil uil-envelope-upload"></i></a>
                                <span class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="setId(message.id)" title="Hapus Pesan"><i class="uil uil-trash-alt"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShowMessage from '@/components/dashboard/message/ShowMessage.vue'
import DeleteMessage from '@/components/modals/DeleteModal.vue'

export default {
    data() {
        return {
            messageId: null,
        }
    },
    mounted() {
        this.getMessages()
    },
    computed: {
        ...mapGetters({
            messages: 'message/messages',
            user: 'auth/user',
        }),
    },
    components: { ShowMessage, DeleteMessage },
    methods: {
        getMessages() {
            this.$store.dispatch('message/getMessages')
        },
        setId(id) {
            this.messageId = id
        },
    },
}
</script>

<script setup>
import moment from 'moment/min/moment-with-locales'
</script>