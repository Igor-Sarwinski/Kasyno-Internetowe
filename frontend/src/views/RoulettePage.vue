<script setup>
import GameHub from '@/components/GameHub.vue'
import RouletteLegend from '@/components/RouletteLegend.vue'
import RouletteGame from '@/components/RouletteGame.vue'

</script>
<template>
  <div class="roulette">
    <GameHub>
      <template #game="{ coins }">
        <RouletteGame :coins="coins" />
      </template>
      <template #legend="{ coins }">
        <RouletteLegend :coins="coins" />
      </template>
    </GameHub>
  </div>
</template>
<style scoped>

</style>
