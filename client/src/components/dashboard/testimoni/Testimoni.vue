<template>
    <div>
        <!-- CREATE, SHOW, UPDATE, DELETE TESTIMONI -->
        <CreateTestimoni :user="user" />
        <ShowTestimoni :testimoniId="testimoniId" />
        <UpdateTestimoni :user="user" :testimoniId="testimoniId" />
        <DeleteTestimoni :user="user" :testimoniId="testimoniId" />

        <!-- SECTION TITLE -->
        <div class="section-title">
            <h1>
                <i class="uil uil-laughing"></i>
                Testimoni {{user.role == 'Admin' ? 'Member' : 'Kamu'}}
            </h1>
            <div class="line"></div>
            <button class="btn btn-dark btn-sm add-btn" v-if="user.role == 'Member'" data-bs-toggle="modal" data-bs-target="#addModal">Tambah<i class="uil uil-plus ms-1"></i></button>
        </div>

        <!-- TABLE -->
        <template v-if="allTestimoni.length == 0">
            <div class="alert alert-warning"><i class="uil uil-sad-squint me-1"></i>Belum ada testimoni</div>
        </template>
        <template v-else>
            <div class="table-wrapper bg-light">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Testimoni</th>
                            <th v-if="user.role == 'Admin'">Member</th>
                            <th class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(testimoni, index) in allTestimoni" :key="testimoni.id">
                            <td class="fw-bold">{{index+1}}</td>
                            <td>
                                {{testimoni.quote.substring(0, 30) + "..."}}
                                <small class="d-block"><i class="uil uil-calendar-alt me-1"></i>{{moment(testimoni.createdAt).locale('id').format('LL')}}</small>
                            </td>
                            <td v-if="user.role == 'Admin'">
                                {{testimoni.user}}
                                <small class="d-block">{{testimoni.email}}</small>
                            </td>
                            <td class="action-btn-table">
                                <span class="text-dark" :class="{'me-1': user.role == 'Admin'}" data-bs-toggle="modal" data-bs-target="#showModal" @click="setId(testimoni.id)"><i class="uil uil-eye"></i></span>
                                <span class="text-primary mx-1" data-bs-toggle="modal" data-bs-target="#updateModal" @click="setId(testimoni.id)" v-if="user.role == 'Member'"><i class="uil uil-edit"></i></span>
                                <span class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="setId(testimoni.id)"><i class="uil uil-trash-alt"></i></span>
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
import CreateTestimoni from '@/components/dashboard/testimoni/CreateTestimoni.vue'
import ShowTestimoni from '@/components/dashboard/testimoni/ShowTestimoni.vue'
import UpdateTestimoni from '@/components/dashboard/testimoni/UpdateTestimoni.vue'
import DeleteTestimoni from '@/components/modals/DeleteModal.vue'

export default {
    data() {
        return {
            testimoniId: null,
        }
    },
    mounted() {
        this.getAllTestimoni()
    },
    computed: {
        ...mapGetters({
            allTestimoni: 'testimoni/allTestimoni',
            user: 'auth/user',
        }),
    },
    components: {
        CreateTestimoni,
        ShowTestimoni,
        UpdateTestimoni,
        DeleteTestimoni,
    },
    methods: {
        getAllTestimoni() {
            this.user.role == 'Admin'
                ? this.$store.dispatch(
                      'testimoni/getAllTestimoni',
                      'allTestimoni'
                  )
                : this.$store.dispatch(
                      'testimoni/getAllTestimoni',
                      'userTestimoni'
                  )
        },
        setId(id) {
            this.testimoniId = id
        },
    },
}
</script>

<script setup>
import moment from 'moment/min/moment-with-locales'
</script>

<style lang="scss" scoped>
.add-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
</style>