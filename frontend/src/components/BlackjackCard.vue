<script setup>
import { ref } from 'vue'

const prop = defineProps({
  number: Number,
  items: Array
})

const card = ref({
  index: 1,
  number: 0
})
card.value.index = Math.floor(Math.random() * 52)
const getValue = () => {
  card.value.number = prop.items[card.value.index].number
  return card.value.number
}
defineExpose({ getValue })
</script>

<template>
  <div class="card">
    <span class="card__name">{{ items[card.index]?.name }}</span>
    <img class="card__symbol" :src="`${items[card.index]?.symbol}`" alt="" />
    <span class="card__name-reversed">{{ items[card.index]?.name }}</span>
  </div>
</template>
