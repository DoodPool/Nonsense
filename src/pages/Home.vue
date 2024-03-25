<template>
    <Hero />
    <!-- <CanvasHelper /> -->
    <WearIndex />
</template>
  
<script>
import Hero from '../cmps/Hero.vue'
import WearIndex from '../cmps/WearIndex.vue'
import CanvasHelper from '../cmps/CanvasHelper.vue'

export default {
    components: {
        Hero,
        WearIndex,
        CanvasHelper,
    },
}
</script>
  
<style scoped></style>