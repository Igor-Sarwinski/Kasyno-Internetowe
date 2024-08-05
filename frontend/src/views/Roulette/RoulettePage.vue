<script setup>
import GameHub from '@/components/GameHub.vue'
import RouletteLegend from '@/views/Roulette/RouletteLegend.vue'
import RouletteGame from '@/views/Roulette/RouletteGame.vue'
const emit = defineEmits(['updateUser'])
const updateUser = () =>{
  emit('updateUser');
}
</script>
<template>
  <div class="roulette">
    <GameHub>
      <template #game="{ coins }">
        <RouletteGame @updateUser="updateUser" :coins="coins" />
      </template>
      <template #legend="{ coins }">
        <RouletteLegend :coins="coins" />
      </template>
    </GameHub>
  </div>
</template>
<style scoped>

</style>
