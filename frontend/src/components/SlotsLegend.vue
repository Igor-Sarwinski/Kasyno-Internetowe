<script setup>
import { ref } from 'vue'

defineProps({
  coins: Number
})
const items = ref([
  { icon: 'lemon', percent: 25, modifier: 2 },
  { icon: 'watermelon', percent: 15, modifier: 3 },
  { icon: 'cherry', percent: 10, modifier: 4 },
  { icon: 'diamond', percent: 5, modifier: 5 },
  { icon: 'coin', percent: 1, modifier: 10 }
])
</script>

<template>
  <div class="slots__legend">
    <table class="slots__legend-table">
      <tr class="slots__legend-table-headers">
        <th class="slots__legend-table-header">Symbol</th>
        <th class="slots__legend-table-header">Szansa</th>
        <th class="slots__legend-table-header">Mnożnik</th>
        <th class="slots__legend-table-header">Możliwa wygrana</th>
      </tr>
      <tr class="slots__legend-table-row" v-for="item in items" :key="item">
        <td class="slots__legend-table-cell">
          <img
            class="slots__legend-table-img"
            :src="`/src/assets/img/slots/slot-${item.icon}.png`"
            :alt="`${item.icon}`"
          />
        </td>
        <td class="slots__legend-table-cell">{{ item.percent }}%</td>
        <td class="slots__legend-table-cell">X {{ item.modifier }}</td>
        <td class="slots__legend-table-cell">{{ item.modifier * coins }}</td>
      </tr>
    </table>
    <span class="slots__legend-text">
      Gracz musi wybrać stawkę, za którą gra, a następnie zacząć losowanie. Każdy symbol ma
      przypisany mnożnik wygranej.
    </span>
  </div>
</template>
