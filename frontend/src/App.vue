<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import HeaderPanel from '@/components/HeaderPanel.vue'
import FooterPanel from '@/components/FooterPanel.vue'
import { fetchUser } from '@/utils/utils.js'
const route = useRoute()
const user = ref('')
const isLogged = computed(() => {
  return route.path !== '/' && route.path !== '/register'
});

onMounted(async () => {
  user.value = await fetchUser()
})

const updateUser = async ()=> {
 user.value = await fetchUser();
}
</script>

<template>
  <div id="app" :class="{ app: isLogged }">
    <SideMenu :user="user" v-if="isLogged"/>
    <div class="main-content">
      <HeaderPanel :user="user" v-if="isLogged"/>
      <RouterView :user="user" :class="{ page: isLogged }"
      @updateUser="updateUser"/>
      <FooterPanel v-if="isLogged"/>

    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/main';
</style>
