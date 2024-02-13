<template>
    <ul class="wear-list">
        <li v-for="wear in wears" :key="wear.id">
            <article class="wear-preview">
                <img :src="wear.imgUrl" alt="">
            </article>
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

// .wear-list li {
//     display: grid;
//     padding: 10px;
// }

img {
    width: 100%;
    cursor: pointer;
}
</style>