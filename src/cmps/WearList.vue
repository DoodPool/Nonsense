<template>
    <ul>
        <li v-for="wear in wears" :key="wear.id">
            <router-link :to="`/wears/${wear.id}`">
                <article>
                    <PixelatedImg :imgSrc="wear.imgUrls[0]" />
                    <!-- <img :src="wear.imgUrls[0]" alt=""> -->
                </article>
            </router-link>
        </li>
    </ul>
</template>

<script>
import PixelatedImg from '../cmps/PixelatedImg.vue'

export default {
    props: {
        wears: {
            type: Array,
            required: true,
        }
    },
    components: {
        PixelatedImg,
    },
}
</script>

<style lang="scss" scoped>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    
    @media (max-width: 754px) {
        grid-template-columns: repeat(2, 1fr);
    }

    list-style: none;

    padding-block: 6rem;
    padding-inline: 2rem;
}

img {
    width: 100%;
    cursor: pointer;
}
</style>