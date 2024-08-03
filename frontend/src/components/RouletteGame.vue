<script setup>
import { Roulette } from 'vue3-roulette'
import { onMounted, ref, watch } from 'vue'
import { fetchUser, setUserMoney } from '@/utils/utils.js'
const wheel = ref(null)
const greenRoulette = '#68BB45'
const blackRoulette = '#000'
const redRoulette = '#EE2D2E'
const winner = ref('')
const selectedColor = ref('')
const isDisabled = ref(false)
const isRed = ref(false)
const isBlack = ref(false)
const isGreen = ref(false)
const game = ref({
  state: String,
  money: Number
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
  { id: 1, name: '0', htmlContent: '0', background: greenRoulette },
  { id: 2, name: '32', htmlContent: '32', background: redRoulette },
  { id: 3, name: '15', htmlContent: '15', background: blackRoulette },
  { id: 4, name: '19', htmlContent: '19', background: redRoulette },
  { id: 5, name: '4', htmlContent: '4', background: blackRoulette },
  { id: 6, name: '21', htmlContent: '21', background: redRoulette },
  { id: 7, name: '2', htmlContent: '2', background: blackRoulette },
  { id: 8, name: '25', htmlContent: '25', background: redRoulette },
  { id: 9, name: '17', htmlContent: '17', background: blackRoulette },
  { id: 10, name: '34', htmlContent: '34', background: redRoulette },
  { id: 11, name: '6', htmlContent: '6', background: blackRoulette },
  { id: 12, name: '27', htmlContent: '27', background: redRoulette },
  { id: 13, name: '13', htmlContent: '13', background: blackRoulette },
  { id: 14, name: '36', htmlContent: '36', background: redRoulette },
  { id: 15, name: '11', htmlContent: '11', background: blackRoulette },
  { id: 16, name: '30', htmlContent: '30', background: redRoulette },
  { id: 17, name: '8', htmlContent: '8', background: blackRoulette },
  { id: 18, name: '23', htmlContent: '23', background: redRoulette },
  { id: 19, name: '10', htmlContent: '10', background: blackRoulette },
  { id: 20, name: '5', htmlContent: '5', background: redRoulette },
  { id: 21, name: '24', htmlContent: '24', background: blackRoulette },
  { id: 22, name: '16', htmlContent: '16', background: redRoulette },
  { id: 23, name: '33', htmlContent: '33', background: blackRoulette },
  { id: 24, name: '1', htmlContent: '1', background: redRoulette },
  { id: 25, name: '20', htmlContent: '20', background: blackRoulette },
  { id: 26, name: '14', htmlContent: '14', background: redRoulette },
  { id: 27, name: '31', htmlContent: '31', background: blackRoulette },
  { id: 28, name: '9', htmlContent: '9', background: redRoulette },
  { id: 29, name: '22', htmlContent: '22', background: blackRoulette },
  { id: 30, name: '18', htmlContent: '18', background: redRoulette },
  { id: 31, name: '29', htmlContent: '29', background: blackRoulette },
  { id: 32, name: '7', htmlContent: '7', background: redRoulette },
  { id: 33, name: '28', htmlContent: '28', background: blackRoulette },
  { id: 34, name: '12', htmlContent: '12', background: redRoulette },
  { id: 35, name: '35', htmlContent: '35', background: blackRoulette },
  { id: 36, name: '3', htmlContent: '3', background: redRoulette },
  { id: 37, name: '26', htmlContent: '26', background: blackRoulette }
]

function runWheel() {
  wheel.value.launchWheel()
  isDisabled.value = true
}
function startWheel() {
  console.log('startWheel')
}
function endWheel(value) {
  winner.value = value

  if (winner.value.background === redRoulette) {
    isRed.value = true
    winner.value.kolor = 'czerwony'
    if (selectedColor.value === 'red') {
      game.value.state = 'plus'
      game.value.money = prop.coins * 2
      setUserMoney(user.value.money + game.value.money)
    } else {
      game.value.state = 'minus'
      game.value.money = prop.coins
      setUserMoney(user.value.money - game.value.money)
    }
  } else if (winner.value.background === blackRoulette) {
    isBlack.value = true
    winner.value.kolor = 'czarny'
    if (selectedColor.value === 'black') {
      game.value.state = 'plus'
      game.value.money = prop.coins * 2
      setUserMoney(user.value.money + game.value.money)
    } else {
      game.value.state = 'minus'
      game.value.money = prop.coins
      setUserMoney(user.value.money - game.value.money)
    }
  } else {
    isGreen.value = true
    winner.value.kolor = 'zielony'
    if (selectedColor.value === 'green') {
      game.value.state = 'plus'
      game.value.money = prop.coins * 14
      setUserMoney(user.value.money + game.value.money)
    } else {
      game.value.state = 'minus'
      game.value.money = prop.coins
      setUserMoney(user.value.money - game.value.money)
    }
  }
  setTimeout(() => {
    wheel.value.reset()
    winner.value.name = null
    setTimeout(() => {
      isDisabled.value = false
    }, 5000)
  }, 5000)
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
        @click="runWheel"
        base-display
        base-size="300"
        :size="400"
        base-background="#EEAA33"
        class="wheel"
        easing="ease"
        result-variation="0"
        :duration="5"
        base-display-shadow
        @wheel-start="startWheel"
        @wheel-end="endWheel"
      >
        <template #baseContent>
          <div v-html="rouletteBackground"></div>
        </template>
      </Roulette>
    </div>
    <div class="roulette__game-item roulette__game-controlls">
      <label class="roulette__game-controlls-input-label" for="red">
        <input
          class="roulette__game-controlls-input"
          type="radio"
          name="color"
          id="red"
          value="red"
          v-model="selectedColor"
        />
        <span class="roulette__game-controlls-input-red"></span>
        Czerwony
      </label>

      <label class="roulette__game-controlls-input-label" for="black">
        <input
          class="roulette__game-controlls-input"
          type="radio"
          name="black"
          id="black"
          value="black"
          v-model="selectedColor"
        />
        <span class="roulette__game-controlls-input-black"></span>
        Czarny</label
      >

      <label class="roulette__game-controlls-input-label" for="green">
        <input
          class="roulette__game-controlls-input"
          type="radio"
          name="green"
          id="green"
          value="green"
          v-model="selectedColor"
        />
        <span class="roulette__game-controlls-input-green"></span>
        Zielony</label
      >

      <button
        class="roulette__game-controlls-button hub__button"
        @click="runWheel(selectedColor)"
        :disabled="disableButton()"
      >
        Losuj kołem <font-awesome-icon icon="spinner" />
      </button>
      <span v-if="selectedColor">Wybrano:</span>
      <span
        v-if="selectedColor === 'green'"
        class="roulette__game-controlls-input-green roulette__game-controlls-input-green--bigger"
      />
      <span
        v-if="selectedColor === 'red'"
        class="roulette__game-controlls-input-red roulette__game-controlls-input-red--bigger"
      />
      <span
        v-if="selectedColor === 'black'"
        class="roulette__game-controlls-input-black roulette__game-controlls-input-black--bigger"
      />
    </div>
    <div v-if="winner.name" class="roulette__game-item roulette__game-info">
      <span class="roulette__game-info-item roulette__game-info-winner" v-if="winner.name"
        ><p>Wylosowano: {{ winner.name }} -></p>
        <span
          :class="{
            'roulette__game-info-winner-red': isRed,
            'roulette__game-info-winner-black': isBlack,
            'roulette__game-info-winner-green': isGreen
          }"
        >
          {{ winner.kolor }}!
        </span>
      </span>
      <span class="roulette__game-info-item roulette__game-info-user"
        ><p>Jesteś na </p><span :class="{
            'roulette__game-info-winner-red': game.state === 'minus',
            'roulette__game-info-winner-green': game.state === 'plus'
          }">{{ game.state }} {{ game.money }}</span>

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
