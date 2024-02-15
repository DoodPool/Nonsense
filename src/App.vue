<template>
  <AppHeader :onToggleMenu="onToggleMenu" />
  <AppMenu :shouldHideMenu="shouldHideMenu" :onToggleMenu="onToggleMenu" />
  <Hero />
  <WearIndex />
  <AppFooter />
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'
import AppMenu from './cmps/AppMenu.vue'
import Hero from './cmps/Hero.vue'
import WearIndex from './pages/WearIndex.vue'
import AppFooter from './cmps/AppFooter.vue'
// import UserMsg from './cmps/UserMsg.vue'

export default {
  data() {
    return {
      shouldHideMenu: true,
    }
  },
  methods: {
    onToggleMenu() {
      return this.shouldHideMenu = !this.shouldHideMenu
    },
  },
  components: {
    AppHeader,
    AppMenu,
    Hero,
    WearIndex,
    AppFooter,
    // UserMsg,
  },
}
</script>


<style scoped></style>
