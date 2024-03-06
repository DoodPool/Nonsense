<template>
    <header class="app-header" :class="{ 'fixed': !isAbout, 'sticky': isAbout }">
        <button :class="{ 'home': isHome }" @click="onToggleMenu()">Menu</button>
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Flogo.0fcf7e5a.gif&f=webp" alt="">
        <button :class="{ 'home': isHome }">Cart (0)</button>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isAbout: false
        }
    },
    watch: {
    '$route'() {
      this.checkIsAbout()
    }
  },
  created() {
    this.checkIsAbout()
  },
    props: {
        onToggleMenu: {
            required: true,
        },
        isHome: {
            required: true,
        },
    },
    methods: {
        checkIsAbout() {
            const currUrl = window.location.href
            if (currUrl === "http://localhost:5173/#/about") {
                this.isAbout = true
            } else {
                this.isAbout = false
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

    padding-inline: 25px;
    background-color: inherit;
    z-index: 1;

    img {
        width: 70px;
    }

    button {
        // color: white;
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

    .home {
        color: white;
    }
}
</style>
