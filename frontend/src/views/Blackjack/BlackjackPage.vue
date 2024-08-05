<script setup>
import GameHub from '@/components/GameHub.vue'
import BlackjackLegend from '@/views/Blackjack/BlackjackLegend.vue'
</script>

<template>
  <div class="blackjack">
  <GameHub>
    <template #game="{ coins }">
      <p>{{coins}}</p>
    </template>
    <template #legend="{coins}">
      <BlackjackLegend :coins="coins" />
    </template>
  </GameHub>
  </div>
</template>




