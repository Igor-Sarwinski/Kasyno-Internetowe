<script setup>
import GameHub from '@/components/GameHub.vue'
import BlackjackLegend from '@/views/Blackjack/BlackjackLegend.vue'
import BlackjackGame from '@/views/Blackjack/BlackjackGame.vue'
const emit = defineEmits(['updateUser'])
const updateUser = () =>{
  emit('updateUser');
}
</script>

<template>
  <section class="blackjack">
    <GameHub>
      <template #game="{ coins }">
        <BlackjackGame @updateUser="updateUser" :coins="coins" />
      </template>
      <template #legend="{ coins }">
        <BlackjackLegend :coins="coins" />
      </template>
    </GameHub>
  </section>
</template>




