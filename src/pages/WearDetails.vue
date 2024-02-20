<template>
    <div>
        <h1>wear details</h1>
        <h1>wear details</h1>
        <h1>wear details</h1>
        <h1>wear details</h1>
        <img :src="wear.imgUrl" alt="">
    </div>
</template>
  
<script>
import { wearService } from '../services/wear.service.local'
import WearList from '../cmps/WearList.vue'

export default {
    data() {
        return {
            wear: null,
        }
    },
    async created() {
        try {
            const wearId = this.$route.params.wearId
            console.log('wearId', wearId)
            this.wear = await wearService.get(wearId)
            // this.wear = this.wears.find(wear => wear._id === wearId)
        } catch (err) {
            console.log(`Couldn't get wears...`);
        }
    },
    components: {
        WearList,
    },
}
</script>
  
<style scoped>
div {
    background-color: white;
}
</style>