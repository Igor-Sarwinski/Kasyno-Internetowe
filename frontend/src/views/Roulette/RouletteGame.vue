<script setup>
import { Roulette } from 'vue3-roulette'
import { onMounted, ref } from 'vue'
import { addUserMoney, fetchUser, removeUserMoney } from '@/utils/utils.js'
import { colors, items, rouletteBackground } from '@/views/Roulette/wheeItems.js'
const wheel = ref(null)
const emit = defineEmits(['updateUser'])
const prop = defineProps({
  coins: Number
})
const user = ref('')
onMounted(async () => {
  user.value = await fetchUser()
})

const winner = ref('')
const selectedColor = ref('')
const isDisabled = ref(false)
const color = ref('')
const game = ref({
  state: '',
  money: 0
})
function runWheel() {
  isDisabled.value = true
  wheel.value.launchWheel()
}
const updateGameResult = async (color) => {
  game.value.state = selectedColor.value === color ? 'plus' : 'minus'
  game.value.money = prop.coins * (selectedColor.value === 'green' ? 36 : 1)
  if (game.value.state === 'plus') {
    await addUserMoney(game.value.money)
  } else {
    await removeUserMoney(prop.coins)
  }
  emit('updateUser')
}

function endWheel(value) {
  winner.value = value
  color.value =
    winner.value?.background === colors.red
      ? 'red'
      : winner.value?.background === colors.black
        ? 'black'
        : 'green'
  updateGameResult(color.value)
  setTimeout(() => {
    color.value = ''
    winner.value = ''
    isDisabled.value = false
  }, 3000)
}
const disableButton = () => {
  return (
    !selectedColor.value || prop.coins === 0 || isDisabled.value || user.value.money < prop.coins
  )
}
</script>

<template>
  <div class="roulette__game">
    <div class="roulette__game-item roulette__game-wheel">
      <Roulette
        ref="wheel"
        :items="items"
        base-display
        :base-size="300"
        :size="400"
        base-background="#EEAA33"
        class="wheel"
        easing="ease"
        :duration="3"
        base-display-shadow
        @wheel-end="endWheel"
      >
        <template #baseContent>
          <div v-html="rouletteBackground"></div>
        </template>
      </Roulette>
    </div>
    <div class="roulette__game-item roulette__game-controlls">
      <label
        v-for="color in ['red', 'black', 'green']"
        :key="color"
        :class="'roulette__game-controlls-input-label'"
      >
        <input
          class="roulette__game-controlls-input"
          type="radio"
          :name="color"
          :id="color"
          :value="color"
          v-model="selectedColor"
        />
        <span :class="'roulette__game-controlls-input-' + color"></span>
        {{ color === 'red' ? 'Czerwony' : color === 'black' ? 'Czarny' : 'Zielony' }}
      </label>
      <button
        class="roulette__game-controlls-button hub__button"
        @click="runWheel()"
        :disabled="disableButton()"
      >
        Losuj kołem <font-awesome-icon icon="spinner" />
      </button>
      <span v-if="selectedColor">Wybrano:</span>
      <span
        :class="[
          'roulette__game-controlls-input-' + selectedColor,
          'roulette__game-controlls-input-' + selectedColor + '--bigger'
        ]"
      ></span>
    </div>
    <div v-if="winner?.name" class="roulette__game-item roulette__game-info">
      <span class="roulette__game-info-item roulette__game-info-winner">
        <p>Wylosowano: {{ winner?.name }} -></p>
        <span
          :class="
            'roulette__game-info-winner-' +
            (winner?.background === colors.red
              ? 'red'
              : winner?.background === colors.black
                ? 'black'
                : 'green')
          "
        >
          {{
            winner?.background === colors.red
              ? 'czerwony'
              : winner?.background === colors.black
                ? 'czarny'
                : 'zielony'
          }}!
        </span>
      </span>
      <span class="roulette__game-info-item roulette__game-info-user">
        <p>Jesteś na</p>
        <span :class="'roulette__game-info-winner-' + (game.state === 'minus' ? 'red' : 'green')"
          >{{ game.state }} {{ game.state === 'plus' ? game.money : coins }}</span
        >
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wheel-container {
  margin: 15px 55px;
}
.wheel-container::after {
  content: '';
  height: 210px;
  width: 5px;
  position: absolute;
  border: 3px solid white;
  top: 0;
  left: calc(50% - 2px);
  border-radius: 50%;
  box-shadow: 0 0 5px white;
  z-index: 1;
}
</style>
