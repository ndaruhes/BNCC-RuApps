<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="uil uil-robot me-1"></i>RuApps.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="uil uil-estate me-1"></i>Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services"><i class="uil uil-setting me-1"></i>Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#partners"><i class="uil uil-users-alt me-1"></i>Partners</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimoni"><i class="uil uil-laughing me-1"></i>Testimoni</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact"><i class="uil uil-phone-alt me-1"></i>Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login"><i class="uil uil-sign-in-alt me-1"></i>Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/sass/navbar.scss';
</style>