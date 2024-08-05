<script setup>
defineProps({
  coins: Number
})
</script>

<template>
  <div class="roulette__legend">
    <table class="roulette__legend-table">
      <tr class="roulette__legend-table-headers">
        <th class="roulette__legend-table-header">Kolor</th>
        <th class="roulette__legend-table-header">Szansa</th>
        <th class="roulette__legend-table-header">Mnożnik</th>
        <th class="roulette__legend-table-header">Możliwa wygrana</th>
      </tr>
      <tr class="roulette__legend-table-row">
        <td class="roulette__legend-table-cell"><div class="roulette__legend-table-red"></div></td>
        <td class="roulette__legend-table-cell">48,5%</td>
        <td class="roulette__legend-table-cell">X 2</td>
        <td class="roulette__legend-table-cell">{{ 2 * coins }}</td>
      </tr>
      <tr class="roulette__legend-table-row">
        <td class="roulette__legend-table-cell">
          <div class="roulette__legend-table-black"></div>
        </td>
        <td class="roulette__legend-table-cell">48,5%</td>
        <td class="roulette__legend-table-cell">X 2</td>
        <td class="roulette__legend-table-cell">{{ 2 * coins }}</td>
      </tr>
      <tr class="roulette__legend-table-row">
        <td class="roulette__legend-table-cell">
          <div class="roulette__legend-table-green"></div>
        </td>
        <td class="roulette__legend-table-cell">3%</td>
        <td class="roulette__legend-table-cell">X 36</td>
        <td class="roulette__legend-table-cell">{{ 36 * coins }}</td>
      </tr>
    </table>
    <span class="roulette__legend-text">
      Przed rozpoczęciem losowania gracz musi wybrać stawkę, za którą gra, a następnie przystąpić do
      losowania. Każdy kolor ma przypisany mnożnik wygranej. Po zakończeniu losowania gracz może
      wygrać lub stracić swoje żetony, w zależności od wyniku.
    </span>
  </div>
</template>
