<script>
import AppHeader from './cmps/AppHeader.vue'
import Hero from './cmps/Hero.vue'
import WearIndex from './pages/WearIndex.vue'
// import UserMsg from './cmps/UserMsg.vue'
// import AppFooter from './cmps/AppFooter.vue'

export default {
  components: {
    AppHeader,
    Hero,
    WearIndex,
    // AppFooter,
    // UserMsg,
  }
}
</script>

<template>
  <AppHeader />
  <Hero />
  <WearIndex />
</template>

<style scoped>
/* img {
  width: 100%;
} */
</style>
