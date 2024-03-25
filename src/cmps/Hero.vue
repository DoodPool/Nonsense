<template>
    <div class="hero-container">
        <!-- <img src="https://nonsense.jp/_image?href=%2F_astro%2Fhero2.ea8d3e64.webp&f=webp" alt=""> -->
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Fhero_mobile.e76a7bd3.webp&f=webp" alt="">
        <div class="sec">
            <div class="third">
                <img class="company-logos" src="https://nonsense.jp/_image?href=%2F_astro%2Flogos.9ea43969.webp&f=webp"
                    alt="">
            </div>
            <router-link to="/wears" class="link-test">
                <NonsenseBtn :btnTxt="'Discover now'" />
            </router-link>
        </div>
    </div>
</template>

<script>
import NonsenseBtn from './NonsenseBtn.vue'

export default {
    components: {
        NonsenseBtn,
    }
}
</script>

<style lang="scss" scoped>
.hero-container {
    display: block;
    position: relative;

    img {
        width: 100%;
        height: auto;
        display: block;
        user-select: none;

    }
}

.sec {
    align-items: center;
    flex-direction: column;
    display: flex;
    inset: 0;
    position: absolute;
}

.third {
    justify-content: center;
    display: flex;
    flex: 1 1 0%;

    img {
        object-fit: contain;
        width: 80%;
        height: auto;
        display: block;
        user-select: none;

    }
}

.link-test {
    padding-block-end: 4rem;
}
</style>
