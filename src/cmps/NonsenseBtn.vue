<template>
    <a class="discover-btn" @click="onTest()">
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Fbutton.ed2ea0e8.svg&f=svg" alt="">
        <span>{{ btnTxt }}</span>
    </a>
</template>

<script>
export default {
    props: {
        btnTxt: {
            type: String,
            required: true,
        },
    },
    methods: {
        onTest() {
            console.log('test')
        }
    },
}
</script>

<style lang="scss" scoped>
.discover-btn {
    display: block;

    height: 3rem;
    max-width: 100%;
    aspect-ratio: 236/50;

    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;

    &.small-btn {
        height: 2.5rem;
        line-height: 2.25rem;

        span {
            right: 0.25rem;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    cursor: pointer;

    span {
        position: relative;
        bottom: 3.0625rem;

        font-size: 1.5rem;
        line-height: 2rem;

        text-transform: uppercase;
    }
}
.btn-center {
    padding-block: 0.5rem;
    padding-inline: 2rem;
    margin-inline: auto;
}
</style>
