<template>
    <div>
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Fhero2.ea8d3e64.webp&f=webp" alt="">
        <img class="company-logos" src="https://nonsense.jp/_image?href=%2F_astro%2Flogos.9ea43969.webp&f=webp" alt="">

        <div class="discover-btn">
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fbutton.ed2ea0e8.svg&f=svg" alt="">
            <p>Discover now</p>
        </div>

    </div>
</template>

<script>
export default {}
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
