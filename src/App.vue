<template>
  <AppHeader :onToggleMenu="onToggleMenu" />
  <AppMenu :shouldHideMenu="shouldHideMenu" :onToggleMenu="onToggleMenu" />
  <main>
    <RouterView />
  </main>
  <AppFooter />
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
    AppFooter,
    // UserMsg,
  },
}
</script>


<style scoped></style>
