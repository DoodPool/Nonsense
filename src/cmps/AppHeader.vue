<template>
    <header class="app-header">
        <button>Menu</button>
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Flogo.0fcf7e5a.gif&f=webp" alt="">
        <button>Cart (0)</button>
    </header>
</template>

<script>
export default {}

import { wearService } from "../services/wear.service.local";
const wears = wearService.query()
console.log('wears', wears);
</script>

<style lang="scss">
.app-header {
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    // height: 5vh;

    padding-inline: 25px;
    background-color: inherit;

    img {
        width: 70px;
    }

    button {
        color: white;
        font-size: 36px;
        text-transform: uppercase;

        background-color: inherit;
        border: none;
        font-family: vt323;

        &:first-child {
            margin-inline-end: 50px;
        }
    }

}
</style>
