<template>
    <div>
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Fhero2.ea8d3e64.webp&f=webp" alt="">
        <img class="company-logos" src="https://nonsense.jp/_image?href=%2F_astro%2Flogos.9ea43969.webp&f=webp" alt="">

        <NonsenseBtn :btnTxt="'Discover now'" />
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
img {
    width: 100%;
}

.company-logos {
    position: relative;
    bottom: 650px;
    width: 80%;

    display: block;
    margin: auto;
}

.discover-btn {
    position: relative;
    bottom: 200px;

    img {
        width: 11.5vw;
    }

    p {
        position: relative;
        bottom: 36px;
        font-size: 25px;
        text-align: center;
    }
}
</style>
