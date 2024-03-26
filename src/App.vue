<template>
  <AppHeader :onToggleMenu="onToggleMenu" />
  <AppMenu :shouldHideMenu="shouldHideMenu" :onToggleMenu="onToggleMenu" />
  <main>
    <RouterView />
  </main>
  <AppFooter :isHome="isHome" :isMobile="isMobile"/>
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
      isHome: false,
      isMobile: null,
    }
  },
  watch: {
    '$route'() {
      this.checkIsHome()
      this.bodyBcToggle()
      this.onResize()
    }
  },
  mounted() {
    this.checkIsHome()
    this.bodyBcToggle()
    this.onResize()
    window.addEventListener("resize", this.onResize)
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
    bodyBcToggle() {
      if (this.isHome) {
        document.body.classList.add('bg-dark')
        document.body.classList.remove('bg-light')
      } else {
        document.body.classList.add('bg-light')
        document.body.classList.remove('bg-dark')
      }
    },
    onResize() {
      (window.innerWidth < 755) ? this.isMobile = true : this.isMobile = false
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


<style scoped></style>
