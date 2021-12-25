<template>
    <div>
        <!-- CREATE, UPDATE, DELETE TESTIMONI -->
        <CreateTestimoni :user="user" />
        <UpdateTestimoni :user="user" :id="testimoniId" />
        <DeleteTestimoni :user="user" :id="testimoniId" />

        <!-- SECTION TITLE -->
        <div class="section-title">
            <h1>Testimoni</h1>
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
                                <button class="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#updateModal" @click="setId(testimoni.id)" v-if="user.role == 'Member'"><i class="uil uil-edit me-1"></i>Edit</button>
                                <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="setId(testimoni.id)"><i class="uil uil-trash-alt me-1"></i>Hapus</button>
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
    components: { CreateTestimoni, UpdateTestimoni, DeleteTestimoni },
    methods: {
        getAllTestimoni() {
            this.user.role == 'Admin' ? this.$store.dispatch('testimoni/getAllTestimoni', 'allTestimoni') : this.$store.dispatch('testimoni/getAllTestimoni', 'userTestimoni')
        },
        setId(id) {
            this.testimoniId = id
        },
    },
}
</script>

<style lang="scss" scoped>
.add-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
</style>