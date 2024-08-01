<script setup>
import CoinsPicker from '@/components/CoinsPicker.vue'
import { ref } from 'vue'
const coins = ref(0)
function updateCoins(newCoins) {
  coins.value = newCoins
}
</script>

<template>
  <div class="hub">
    <div class="hub__item hub__game">
      <slot :coins="coins" name="game" />
    </div>
    <div class="hub__info">
      <div class="hub__item hub__info-coins">
        <CoinsPicker @update-coins="updateCoins" />
      </div>
      <div class="hub__item hub__info-legend">
        <slot name="legend" />
      </div>
    </div>
  </div>
</template>
