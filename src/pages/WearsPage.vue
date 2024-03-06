<template>
    <ul class="clean-list">
        <li v-for="wear in wears" :key="wear.id">
            <router-link :to="`/wears/${wear.id}`" class="link-test">
                <article>
                    <img :src="wear.imgUrls[0]" alt="">
                    <p> NØИSENSE x cyberpunk: edgerunners - {{ wear.name }} </p>
                    <p>{{ wear.price }}$</p>
                </article>
            </router-link>
        </li>
    </ul>
</template>
  
<script>
import { wearService } from '../services/wear.service.local'
import WearList from '../cmps/WearList.vue'

export default {
    data() {
        return {
            wears: null,
        }
    },
    async created() {
        try {
            this.wears = await wearService.query()
        } catch (err) {
            // eventBus.emit('user-msg', `Couldn't get wears...`)
            console.log(`Couldn't get wears...`);
        }
    },
    components: {
        WearList,
    },
}
</script>
  
<style scoped>
ul {
    background-color: white;

    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    gap: 10px;

    p {
        text-transform: uppercase;
        text-align: center;
        font-size: 1.25rem;
    }
}

img {
    width: 100%;
}
</style>