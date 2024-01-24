<template>
    <a class="discover-btn">
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Fbutton.ed2ea0e8.svg&f=svg" alt="">
        <p>{{btnTxt}}</p>
    </a>
</template>

<script>
export default {
    props: {
        btnTxt: {
            type: String,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
.discover-btn {
    cursor: pointer;

    img {
        width: 11.5vw;
        display: block;
        margin: auto;
    }

    p {
        position: relative;
        bottom: 36px;
        text-align: center;
        font-size: 25px;
        text-transform: uppercase;
    }
}
</style>
