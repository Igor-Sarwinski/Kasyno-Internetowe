<script setup>
import { onMounted, ref } from 'vue'
import { addUserMoney, fetchUser, removeUserMoney } from '@/utils/utils.js'
import { items } from '@/views/Slots/slotsItems.js'
import SlotComponent from '@/components/SlotComponent.vue'
const emit = defineEmits(['updateUser'])
const prop = defineProps({
  coins: Number
})
const user = ref('')
onMounted(async () => {
  user.value = await fetchUser()
})
const slots = ref('')
const isDisabled = ref(false)
const game = ref({
  state: '',
  money: 0,
  slotsNumber: 3
})
const winner = ref({
  image: ''
})
const tab = ref([])

const spinSlot = () => {
  tab.value.splice(0, 3)
  isDisabled.value = true
  slots.value.forEach((slot) => {
    if (slot.runSpin()) {
      slot.runSpin()
    }
  })
  setTimeout(() => {
    slots.value.forEach((slot) => {
      if (slot.stopSpin) {
        tab.value.push(slot.stopSpin())
      }
    })
    isDisabled.value = false
    let won = tab.value.every((val, i, arr) => val === arr[0])
    updateGameResult(won, tab.value[0])
  }, 2000)
}
const updateGameResult = async (won, index) => {
  if (won) {
    winner.value.image = items[index - 1].image
    game.value.money = prop.coins * (items[index - 1].modifier - 1)
    await addUserMoney(game.value.money)
    game.value.state = 'plus'
  } else {
    game.value.state = 'minus'
    await removeUserMoney(prop.coins)
  }
  emit('updateUser')
  setTimeout(() => {
    game.value.state = null
  }, 5000)
}

const disableButton = () => {
  return prop.coins === 0 || isDisabled.value || user.value.money < prop.coins
}
</script>

<template>
  <div class="slots__game">
    <div class="slots__game-item slots__game-spinner">
      <div class="slots__game-spinner-items">
        <span class="slots__game-spinner-winner">SLOTS 24/7</span>
        <SlotComponent
          class="slots__game-spinner-item"
          v-for="item in game.slotsNumber"
          :key="item"
          :items="items"
          ref="slots"
        />
      </div>
      <button
        class="slots__game-spinner-button hub__button"
        :disabled="disableButton()"
        @click="spinSlot"
      >
        Losuj <font-awesome-icon icon="spinner" />
      </button>
    </div>
    <div v-if="game.state" class="slots__game-item slots__game-info">
      <span class="slots__game-info-item slots__game-info-winner">
        <p v-if="game.state === 'plus'">Wylosowano:</p>
        <img
          v-if="game.state === 'plus'"
          class="slots__game-info-image"
          :src="`${winner?.image}`"
          alt=""
        />
        <p v-if="game.state === 'minus'">Nic nie trafiłeś</p>
      </span>
      <span class="slots__game-info-item slots__game-info-user">
        <p>Jesteś na</p>
        <span :class="'slots__game-info-winner-' + (game.state === 'minus' ? 'red' : 'green')"
          >{{ game.state }} {{ game.state === 'plus' ? game.money : coins }}</span
        >
      </span>
    </div>
  </div>
</template>
