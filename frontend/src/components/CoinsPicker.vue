<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['update-coins'])
const coins = ref(0)
const chips = ref({
  ten: 0,
  twentyfive: 0,
  fifty: 0,
  hundred: 0
})
const coinsColor = ref('')

watch(coins, () => changeColor())

const addCoin = (value) => {
  coins.value += value
  emit('update-coins', coins.value)
  switch (value) {
    case 10:
      chips.value.ten++
      break
    case 25:
      chips.value.twentyfive++
      break
    case 50:
      chips.value.fifty++
      break
    case 100:
      chips.value.hundred++
      break
    default:
      break
  }
}

const resetCoins = () => {
  coins.value = 0
  emit('update-coins', coins.value)
  chips.value.ten = 0
  chips.value.twentyfive = 0
  chips.value.fifty = 0
  chips.value.hundred = 0
}

const changeColor = () => {
  if (coins.value < 100) {
    coinsColor.value = 'white'
  }
  if (coins.value >= 100 && coins.value < 250) {
    coinsColor.value = 'green'
  }
  if (coins.value >= 250 && coins.value < 500) {
    coinsColor.value = 'orange'
  }
  if (coins.value >= 500) {
    coinsColor.value = 'red'
  }
}
</script>

<template>
  <section class="hub__coins-picker">
    <div class="hub__coins-picker-coins">
      <img class="hub__coins-picker-coins-img" src="@/assets/img/chips/chip-10.png" alt="chip-10" />
      <span class="hub__coins-picker-coins-amount">x</span>
      <span class="hub__coins-picker-coins-amount">{{ chips.ten }}</span>
      <img class="hub__coins-picker-coins-img" src="@/assets/img/chips/chip-25.png" alt="chip-10" />
      <span class="hub__coins-picker-coins-amount">x</span
      ><span class="hub__coins-picker-coins-amount">{{ chips.twentyfive }}</span>
      <img
        class="hub__coins-picker-coins-img"
        src="@/assets/img/chips/chip-50.png"
        alt="chip-10"
      /><span class="hub__coins-picker-coins-amount">x</span
      ><span class="hub__coins-picker-coins-amount">{{ chips.fifty }}</span>
      <img
        class="hub__coins-picker-coins-img"
        src="@/assets/img/chips/chip-100.png"
        alt="chip-10"
      /><span class="hub__coins-picker-coins-amount">x</span
      ><span class="hub__coins-picker-coins-amount">{{ chips.hundred }}</span>
    </div>
    <a class="hub__coins-picker-item" @click="addCoin(10)">
      <img class="hub__coins-picker-item-img" src="@/assets/img/chips/chip-10.png" alt="chip-10" />
    </a>
    <a class="hub__coins-picker-item" @click="addCoin(25)"
      ><img class="hub__coins-picker-item-img" src="@/assets/img/chips/chip-25.png" alt="chip-10"
    /></a>
    <a class="hub__coins-picker-item" @click="addCoin(50)"
      ><img class="hub__coins-picker-item-img" src="@/assets/img/chips/chip-50.png" alt="chip-10"
    /></a>
    <a class="hub__coins-picker-item" @click="addCoin(100)"
      ><img class="hub__coins-picker-item-img" src="@/assets/img/chips/chip-100.png" alt="chip-10"
    /></a>
    <span class="hub__coins-picker-text">Razem:</span>
    <span class="hub__coins-picker-value" :style="{ color: coinsColor }">{{ coins }}</span>
    <button class="hub__coins-picker-button" @click="resetCoins">
      Zresetuj coinsy <font-awesome-icon icon="rotate" />
    </button>
  </section>
</template>
