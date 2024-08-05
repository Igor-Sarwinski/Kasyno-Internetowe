<script setup>
import GameHub from '@/components/GameHub.vue'
import BlackjackLegend from '@/views/Blackjack/BlackjackLegend.vue'
import RouletteGame from '@/views/Roulette/RouletteGame.vue'
import RouletteLegend from '@/views/Roulette/RouletteLegend.vue'
import BlackjackGame from '@/views/Blackjack/BlackjackGame.vue'
const emit = defineEmits(['updateUser'])
const updateUser = () =>{
  emit('updateUser');
}
</script>

<template>
  <div class="blackjack">
    <GameHub>
      <template #game="{ coins }">
        <BlackjackGame @updateUser="updateUser" :coins="coins" />
      </template>
      <template #legend="{ coins }">
        <BlackjackLegend :coins="coins" />
      </template>
    </GameHub>
  </div>
</template>




