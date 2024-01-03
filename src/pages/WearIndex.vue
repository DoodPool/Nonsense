<template>
    <WearList v-if="wears" :wears="slicedWears(0, 4)" />
    <img src="https://nonsense.jp/_image?href=%2F_astro%2Fsmasher_crewneck.65e37ab7.webp&f=webp" alt="">
    <WearList v-if="wears" :wears="slicedWears(4, 8)" />
    <img src="https://nonsense.jp/_image?href=%2F_astro%2Fcorporate_jacket.e7d12d68.webp&f=webp" alt="">
    <WearList v-if="wears" :wears="slicedWears(8, 12)" />
    <img src="https://nonsense.jp/_image?href=%2F_astro%2Fcyberarm_gloves.d622d17a.webp&f=webp" alt="">
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
    methods: {
        slicedWears(startIdx, endIdx) {
            return this.wears.slice(startIdx, endIdx)
        },
    },
    computed: {
    },
    async created() {
        try {
            this.wears = await wearService.query()
            console.log('this.wears', this.wears)
        } catch (err) {
            // eventBus.emit('user-msg', `Couldn't get wears...`)
            console.log(`Couldn't get wears...`);
        }
    },
    components: {
        WearList,
    }
}

</script>

<style lang="scss" scoped>
h1 {
    color: white;
}

img {
    width: 100%;
}
</style>
