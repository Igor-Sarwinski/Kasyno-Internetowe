<script setup>
import GameHub from '@/components/GameHub.vue'
</script>
<template>
    <div class="roulette">
      <GameHub>
        <template #game="{ coins }">
        <p>{{coins}}</p>
        </template>
      </GameHub>
    </div>
</template>




