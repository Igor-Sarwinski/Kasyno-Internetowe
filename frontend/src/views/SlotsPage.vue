<script setup>
import GameHub from '@/components/GameHub.vue'
import SlotsLegend from '@/components/SlotsLegend.vue'
</script>
<template>
  <div class="slots">
    <GameHub>
      <template #game="{ coins }">
        <p>{{coins}}</p>
      </template>
      <template #legend="{coins}">
        <SlotsLegend :coins="coins" />
      </template>
    </GameHub>
  </div>
</template>




