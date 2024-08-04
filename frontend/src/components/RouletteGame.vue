<script setup>
import { Roulette } from 'vue3-roulette'
import { onMounted, ref } from 'vue'
import { fetchUser, setUserMoney } from '@/utils/utils.js'
const wheel = ref(null)
const colors = {
  green: '#68BB45',
  black: '#000',
  red: '#EE2D2E'
}
const winner = ref('')
const selectedColor = ref('')
const isDisabled = ref(false)
const color = ref('')
const game = ref({
  state: '',
  money: 0
})

const prop = defineProps({
  coins: Number
})
const user = ref('')
onMounted(async () => {
  user.value = await fetchUser()
})

const rouletteBackground = ref(
  '<img src="/src/assets/img/roulette.png" alt="Roulette" class="roulette-icon" />'
)
const items = [
  { id: 1, name: '0', htmlContent: '0', background: colors.green},
  { id: 2, name: '32', htmlContent: '32', background: colors.red},
  { id: 3, name: '15', htmlContent: '15', background: colors.black },
  { id: 4, name: '19', htmlContent: '19', background: colors.red },
  { id: 5, name: '4', htmlContent: '4', background: colors.black },
  { id: 6, name: '21', htmlContent: '21', background: colors.red },
  { id: 7, name: '2', htmlContent: '2', background: colors.black },
  { id: 8, name: '25', htmlContent: '25', background: colors.red },
  { id: 9, name: '17', htmlContent: '17', background: colors.black },
  { id: 10, name: '34', htmlContent: '34', background: colors.red },
  { id: 11, name: '6', htmlContent: '6', background: colors.black },
  { id: 12, name: '27', htmlContent: '27', background: colors.red },
  { id: 13, name: '13', htmlContent: '13', background: colors.black },
  { id: 14, name: '36', htmlContent: '36', background: colors.red },
  { id: 15, name: '11', htmlContent: '11', background: colors.black },
  { id: 16, name: '30', htmlContent: '30', background: colors.red },
  { id: 17, name: '8', htmlContent: '8', background: colors.black },
  { id: 18, name: '23', htmlContent: '23', background: colors.red },
  { id: 19, name: '10', htmlContent: '10', background: colors.black },
  { id: 20, name: '5', htmlContent: '5', background: colors.red },
  { id: 21, name: '24', htmlContent: '24', background: colors.black },
  { id: 22, name: '16', htmlContent: '16', background: colors.red },
  { id: 23, name: '33', htmlContent: '33', background: colors.black },
  { id: 24, name: '1', htmlContent: '1', background: colors.red },
  { id: 25, name: '20', htmlContent: '20', background: colors.black },
  { id: 26, name: '14', htmlContent: '14', background: colors.red },
  { id: 27, name: '31', htmlContent: '31', background: colors.black },
  { id: 28, name: '9', htmlContent: '9', background: colors.red },
  { id: 29, name: '22', htmlContent: '22', background: colors.black },
  { id: 30, name: '18', htmlContent: '18', background: colors.red },
  { id: 31, name: '29', htmlContent: '29', background: colors.black },
  { id: 32, name: '7', htmlContent: '7', background: colors.red },
  { id: 33, name: '28', htmlContent: '28', background: colors.black },
  { id: 34, name: '12', htmlContent: '12', background: colors.red },
  { id: 35, name: '35', htmlContent: '35', background: colors.black },
  { id: 36, name: '3', htmlContent: '3', background: colors.red },
  { id: 37, name: '26', htmlContent: '26', background: colors.black }
]

function runWheel() {
  isDisabled.value = true
  wheel.value.launchWheel()
}
const updateGameResult = async (color) => {
  game.value.state = selectedColor.value === color ? 'plus' : 'minus'
  game.value.money = prop.coins * (selectedColor.value === 'green' ? 36 : 1)
  await setUserMoney(user.value.money + (game.value.state === 'plus' ? game.value.money : -prop.coins))
  console.log(user.value.money)
  user.value = await fetchUser();
  console.log(user.value.money)
}

function endWheel (value) {
  winner.value = value
  color.value =
    winner.value?.background === colors.red
      ? 'red'
      : winner.value?.background === colors.black
        ? 'black'
        : 'green'
  updateGameResult(color.value)
  setTimeout(() => {
    color.value = '';
    winner.value = '';
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
        :base-size=300
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
