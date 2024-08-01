<script setup>
import GameHub from '@/components/GameHub.vue'
import RouletteLegend from '@/components/RouletteLegend.vue'
</script>
<template>
    <div class="roulette">
      <GameHub>
        <template #game="{ coins }">
        <p>{{coins}}</p>
        </template>
        <template #legend="{coins}">
        <RouletteLegend :coins="coins" />
        </template>
      </GameHub>
    </div>
</template>




