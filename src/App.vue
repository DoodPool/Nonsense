<template>
  <AppHeader :onToggleMenu="onToggleMenu" :isHome="isHome" />
  <AppMenu :shouldHideMenu="shouldHideMenu" :onToggleMenu="onToggleMenu" />
  <main >
    <RouterView />
  </main>
  <AppFooter :isHome="isHome" />
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'
import AppMenu from './cmps/AppMenu.vue'
import AppFooter from './cmps/AppFooter.vue'
// import UserMsg from './cmps/UserMsg.vue'

export default {
  data() {
    return {
      shouldHideMenu: true,
      isHome: false
    }
  },
  watch: {
    '$route'() {
      this.checkIsHome()
    }
  },
  created() {
    this.checkIsHome()
  },
  methods: {
    onToggleMenu() {
      return this.shouldHideMenu = !this.shouldHideMenu
    },
    checkIsHome() {
      const currUrl = window.location.href
      if (currUrl === "http://localhost:5173/#/") {
        this.isHome = true
      } else {
        this.isHome = false
      }
    },
  },
  components: {
    AppHeader,
    AppMenu,
    AppFooter,
    // UserMsg,
  },
}
</script>


<style scoped>
</style>
