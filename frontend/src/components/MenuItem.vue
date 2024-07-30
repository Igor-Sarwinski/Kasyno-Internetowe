<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
defineProps({
  icon: String,
  link: String,
  label: String
})
</script>

<template>
  <li class="menu__nav-item" :class="{ 'menu__nav-item-active': route.path === link }">
    <span class="material-symbols-outlined menu__nav-item-icon">{{ icon }}</span>
    <router-link :to="link" class="menu__nav-item-link"
      ><p>{{ label }}</p></router-link
    >
  </li>
</template>
