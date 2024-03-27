<template>
    <header class="app-header" :class="{ 'fixed': isHome, 'sticky': !isHome }">
        <button @click="onToggleMenu()">Menu</button>
        <button>Cart (0)</button>
    </header>
    <div>
        <div class="gif-container">
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Flogo.0fcf7e5a.gif&f=webp" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHome: null
        }
    },
    watch: {
        '$route'() {
            this.checkIsHome()
        }
    },
    created() {
        this.checkIsHome()
    },
    props: {
        onToggleMenu: {
            required: true,
        },
    },
    methods: {
        checkIsHome() {
            const currUrl = window.location.href
            if (currUrl === "http://localhost:5173/#/") {
                this.isHome = true
            } else {
                this.isHome = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.app-header {
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;

    padding-inline: 25px;
    background-color: inherit;
    z-index: 1;

    mix-blend-mode: difference;

    button {
        color: white;
        font-size: 36px;
        text-transform: uppercase;

        background-color: inherit;
        border: none;
        font-family: vt323;

        cursor: pointer;

        &:first-child {
            margin-inline-end: 50px;
        }
    }

}

div {
    position: fixed;
    top: 0;
    
    width: 100%;
    height: 4rem;
    z-index: 1;
    pointer-events: none;

    .gif-container {
        position: absolute;
        top: 50%;
        left: 50%;

        width: auto;
        height: 120%;

        transform: translate(-50%, -50%);

        img {
            width: auto;
            height: 100%;
            user-select: none;
        }
    }
}
</style>
