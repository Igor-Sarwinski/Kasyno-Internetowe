<script setup>
import { ref } from 'vue'
import DashboardCard from '@/components/DashboardCard.vue'

const items = ref([
  { id: 1, name: 'Ruletka', link: '/roulette', buttonLabel: 'Graj!', background: 'ruletka.webp' },
  {
    id: 2,
    name: 'Blackjack',
    link: '/blackjack',
    buttonLabel: 'Graj!',
    background: 'blackjack.png'
  },
  { id: 3, name: 'Sloty', link: '/slots', buttonLabel: 'Graj!', background: 'slotsy.jpg' },
  { id: 4, name: 'Ranking', link: '/ranking', buttonLabel: 'Zobacz!', background: 'rankingi.jpg' }
])
</script>

<template>
  <div class="dashboard">
    <DashboardCard
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :buttonLabel="item.buttonLabel"
      :background="item.background"
      :link="item.link"
    />
  </div>
</template>
