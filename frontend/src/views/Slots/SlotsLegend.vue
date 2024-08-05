<script setup>
import {items } from './slotsItems.js'
defineProps({
  coins: Number
})
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
            :src="`${item.image}`"
            :alt="`${item.name}`"
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
