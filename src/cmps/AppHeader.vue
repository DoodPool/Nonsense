<template>
    <header class="app-header">
        <button @click="onToggleMenu()">Menu</button>
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Flogo.0fcf7e5a.gif&f=webp" alt="">
        <button>Cart (0)</button>
    </header>
</template>

<script>
export default {
    props: {
        onToggleMenu: {
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.app-header {
    position: fixed;

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
}
</style>
