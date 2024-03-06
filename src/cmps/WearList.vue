<template>
    <ul>
        <li v-for="wear in wears" :key="wear.id">
            <router-link :to="`/wears/${wear.id}`">
                <article>
                    <img :src="wear.imgUrls[0]" alt="">
                </article>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        wears: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;

    list-style: none;

    padding-block: 6rem;
    padding-inline: 2rem;
}

img {
    width: 100%;
    cursor: pointer;
}
</style>