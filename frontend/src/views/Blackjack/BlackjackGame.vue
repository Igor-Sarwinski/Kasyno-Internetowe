<script setup>
import { onMounted, ref } from 'vue'
import { items } from '../Blackjack/cardItems.js'
import { addUserMoney, fetchUser, removeUserMoney } from '@/utils/utils.js'
import BlackjackCard from '@/components/BlackjackCard.vue'
const emit = defineEmits(['updateUser'])
const isDisabled = ref(false)
const isEnd = ref(true)
const prop = defineProps({
  coins: Number
})
const user = ref('')
const userCards = ref('')
const enemyCards = ref('')
const isChecking = ref(false)
onMounted(async () => {
  user.value = await fetchUser()
})
const game = ref({
  state: ''
})
const player = ref({
  cards: 2,
  points: 0
})
const enemy = ref({
  cards: 1,
  points: 0
})
const updateGameResult = async (points, enemyPoints) => {
  if (points > 21 && enemyPoints < 21) {
    await removeUserMoney(prop.coins)
    game.value.state = 'minus'
  }
  if (points < 21 && enemyPoints > 21) {
    await addUserMoney(prop.coins)
    game.value.state = 'plus'
  }
  if (points < 21 && enemyPoints < 21) {
    if (21 - points < 21 - enemyPoints) {
      await addUserMoney(prop.coins)
      game.value.state = 'plus'
    }
    if (21 - points > 21 - enemyPoints) {
      await removeUserMoney(prop.coins)
      game.value.state = 'minus'
    }
  }
  if (points === enemyPoints) {
    await addUserMoney(prop.coins)
    game.value.state = 'plus'
  }
  emit('updateUser')
}
const checkCards = () => {
  isChecking.value = true
  enemy.value.cards++
  setTimeout(() => {
    enemy.value.points += enemyCards.value[enemy.value.cards - 1].getValue()
  }, 100)

  setTimeout(() => {
    updateGameResult(player.value.points, enemy.value.points)
  }, 1000)
  setTimeout(() => {
    resetCards()
  }, 5000)
}
const startGame = () => {
  player.value.cards = 2
  enemy.value.cards = 1
  player.value.points = 0
  enemy.value.points = 0
  setTimeout(() => {
    userCards.value.forEach((card) => {
      player.value.points += card.getValue()
    })
    enemyCards.value.forEach((card) => {
      enemy.value.points += card.getValue()
    })
  }, 100)

  isEnd.value = false
}

const addCard = () => {
  player.value.cards++
  setTimeout(() => {
    player.value.points += userCards.value[player.value.cards - 1].getValue()
    if (player.value.points > 21) {
      checkCards()
    }
  }, 100)
}
const resetCards = () => {
  player.value.cards = 2
  enemy.value.cards = 1
  player.value.points = 0
  enemy.value.points = 0
  isEnd.value = true
  game.value.state = null
  isChecking.value = false
}

const disableButton = () => {
  return prop.coins === 0 || isDisabled.value || user.value.money < prop.coins || isChecking.value
}
</script>

<template>
  <section class="blackjack__game">
    <div class="blackjack__game-item blackjack__game-cards">
      <div class="blackjack__game-cards-player blackjack__game-cards-enemy">
        <span class="blackjack__game-cards-header">Karty przeciwnika</span>
        <BlackjackCard
          v-if="!isEnd"
          class="blackjack__game-cards-item"
          v-for="(item, index) in enemy.cards"
          :key="item"
          :number="index"
          :items="items"
          ref="enemyCards"
        />
      </div>
      <div class="blackjack__game-cards-separator" />
      <div class="blackjack__game-cards-player blackjack__game-cards-user">
        <span class="blackjack__game-cards-header">Twoje karty</span>
        <BlackjackCard
          v-if="!isEnd"
          class="blackjack__game-cards-item"
          v-for="(item, index) in player.cards"
          :key="item"
          :number="index"
          :items="items"
          ref="userCards"
        />
      </div>
    </div>
    <div class="blackjack__game-item blackjack__game-controlls">
      <span class="blackjack__game-controlls-info"> Przeciwnik ma: {{ enemy.points }} </span>
      <span
        class="blackjack__game-controlls-info"
        :class="{ 'blackjack__game-controlls-info-red': player.points > 21 }"
      >
        Ty masz: {{ player.points }}
      </span>
      <button
        v-if="!isEnd"
        class="blackjack__game-controlls-button hub__button"
        @click="addCard()"
        :disabled="disableButton()"
      >
        Dobierz <font-awesome-icon icon="coins" />
      </button>
      <button
        v-if="!isEnd"
        class="blackjack__game-controlls-button hub__button"
        @click="checkCards()"
        :disabled="disableButton()"
      >
        Sprawdź <font-awesome-icon icon="check-to-slot" />
      </button>
      <button
        v-if="isEnd"
        class="blackjack__game-controlls-button hub__button"
        @click="startGame()"
        :disabled="disableButton()"
      >
        Zagraj <font-awesome-icon icon="play" />
      </button>
    </div>
    <div v-if="game.state" class="blackjack__game-item blackjack__game-info">
      <span class="blackjack__game-info-item blackjack__game-info-winner">
        <p v-if="game.state === 'plus'">Wygrałeś</p>
        <p v-if="game.state === 'minus'">Przegrałeś</p>
      </span>
      <span class="blackjack__game-info-item blackjack__game-info-user">
        <p>Jesteś na</p>
        <span :class="'blackjack__game-info-winner-' + (game.state === 'minus' ? 'red' : 'green')"
          >{{ game.state }} {{ coins }}</span
        >
      </span>
    </div>
  </section>
</template>
