<template>
    <div class="backToTop d-flex position-fixed justify-content-center rounded-circle shadow bg-darkBlue" title="Back To Top" onclick="window.scrollTo(0, 0)">
        <i class="uil uil-angle-up"></i>
    </div>
</template>

<script>
export default {
    mounted() {
        let BackToTop = document.querySelector('.backToTop')
        window.onscroll = function () {
            var scrollPoint = window.scrollY
            if (scrollPoint > 500) {
                BackToTop.classList.add('show')
            } else {
                BackToTop.classList.remove('show')
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.backToTop {
    width: 50px;
    height: 50px;
    right: 20px;
    bottom: 40px;
    font-size: 30px;
    opacity: 0;
    transition: opacity 0.4s;
    color: white;
    z-index: 1000;
    cursor: pointer;
}

.backToTop.show {
    opacity: 1;
}

@media screen and (max-width: 768px) {
    .backToTop {
        bottom: 30px;
    }
}
</style>