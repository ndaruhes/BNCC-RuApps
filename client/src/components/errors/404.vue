<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 image">
                <img src="@/assets/images/not-found.png" alt="not-found.png" class="w-100">
            </div>
            <div class="col-md-6 text">
                <span class="title">Upss, Page Not Found <i class="uil uil-confused ms-1"></i></span>
                <span class="desc">Halaman yang anda tuju tidak dapat ditemukan atau mungkin sudah kadaluarsa</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.text {
    text-align: center;
    span {
        display: block;
    }
    .title {
        color: #6c63ff;
        font-family: 'RocknRoll One', sans-serif;
        font-size: 45px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .desc {
        font-size: 25px;
    }
}

@media screen and (max-width: 768px) {
    .text {
        margin-top: 20px;
        .title {
            font-size: 25px;
            margin-bottom: 5px;
        }
        .desc {
            font-size: 18px;
        }
    }
}
</style>