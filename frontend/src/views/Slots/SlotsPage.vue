<script setup>
import GameHub from '@/components/GameHub.vue'
import SlotsLegend from '@/views/Slots/SlotsLegend.vue'
import SlotsGame from '@/views/Slots/SlotsGame.vue'
const emit = defineEmits(['updateUser'])
const updateUser = () =>{
  emit('updateUser');
}
</script>
<template>
  <div class="slots">
    <GameHub>
      <template #game="{ coins }">
        <SlotsGame @updateUser="updateUser" :coins="coins" />
      </template>
      <template #legend="{coins}">
        <SlotsLegend :coins="coins" />
      </template>
    </GameHub>
  </div>
</template>




