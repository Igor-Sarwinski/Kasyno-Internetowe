<script setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  buttonLabel: String,
  background: String,
  link: String,
})
</script>

<template>
  <router-link :to="link" class="dashboard__card">
  <div class="dashboard__card-info">
    <span class="dashboard__card-info-name"><p>{{ name }}</p></span>
    <span class="dashboard__card-info-button"><p>{{ buttonLabel }}</p></span>
  </div>
    <img class="dashboard__card-background" :src="`src/assets/img/dashboard/${background}`" alt="{{background}}">
  </router-link>
</template>
