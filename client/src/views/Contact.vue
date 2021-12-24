<template>
    <div>
        <!-- BANNER -->
        <Banner />

        <!-- CONTACT CONTENT -->
        <div class="container">
            <div class="col-md-5 py-3">
                <form>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="">Email</label>
                            <input type="email" class="form-control" placeholder="ex: muhamad.ndaru@gmail.com">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="">Nama Lengkap</label>
                            <input type="text" class="form-control" placeholder="ex: Muhamad Ndaru">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">Pesan / Keluhan</label>
                            <textarea class="form-control" placeholder="Masukkan pesan disini" rows="5"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-dark btn-sm">Send Now<i class="uil uil-message ms-1"></i></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import Banner from '@/components/layouts/Banner.vue'
</script>
