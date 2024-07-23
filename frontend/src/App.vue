<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import HeaderPanel from '@/components/HeaderPanel.vue'
import FooterPanel from '@/components/FooterPanel.vue'
const route = useRoute()

const isLogged = computed(() => {
  return route.path !== '/' && route.path !== '/register'
});
</script>

<template>
  <div id="app" :class="{ app: isLogged }">
    <SideMenu v-if="isLogged"/>
    <div class="main-content">
      <HeaderPanel v-if="isLogged"/>
      <RouterView :class="{ page: isLogged }" />
      <FooterPanel v-if="isLogged"/>

    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/main';
</style>
