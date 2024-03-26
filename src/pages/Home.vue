<template>
    <Hero :isMobile="isMobile" />
    <!-- <CanvasHelper /> -->
    <WearIndexMobile v-if="isMobile" />
    <WearIndex v-else />
</template>

<script>
import Hero from '../cmps/Hero.vue'
import WearIndex from '../cmps/WearIndex.vue'
import WearIndexMobile from '../cmps/WearIndexMobile.vue'
// import CanvasHelper from '../cmps/CanvasHelper.vue'

export default {
    data() {
        return {
            isMobile: null,
        }
    },
    watch: {
        '$route'() {
            this.onResize()
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener("resize", this.onResize)
    },
    methods: {
        onResize() {
            (window.innerWidth < 755) ? this.isMobile = true : this.isMobile = false
        },
    },
    components: {
        Hero,
        WearIndex,
        WearIndexMobile,
        // CanvasHelper,
    },
}
</script>

<style scoped></style>