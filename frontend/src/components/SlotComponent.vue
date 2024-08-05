<script setup>
import { ref } from 'vue'

defineProps({
  items: Array
})
const slot = ref({
  index: 0
})
const interval = ref(null)
const result = ref(null)

const runSpin = () => {
  slot.value.index = Math.floor(Math.random() * 5)
  interval.value = setInterval(() => {
    slot.value.index = Math.floor(Math.random() * 5)
  }, 100)
}

const stopSpin = () => {
  clearInterval(interval.value)
  result.value = slot.value.index
  return result.value + 1
}

defineExpose({ runSpin, stopSpin })
</script>

<template>
  <div class="slot">
    <div class="slot__background">
      <div v-for="(item, index) in items" :key="index" class="slot__item">
        <div class="slot__item-background">
          <img class="slot__item-image" v-if="index === slot.index" :src="`${item.image}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
