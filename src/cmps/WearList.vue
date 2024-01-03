<template>
    <ul class="wear-list">
        <li v-for="wear in wears" :key="wear.id">
            <article class="wear-preview">
                <!-- <p>{{ wear.name }}</p> -->
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
h1, p { 
    color: aqua;
}
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-block-start: 10px;
    list-style: none;
    padding: 0;
}

.wear-list li {
    display: grid;
    padding: 10px;

    button {
        justify-self: end;
    }
}

img {
    width: 100%;
}
</style>