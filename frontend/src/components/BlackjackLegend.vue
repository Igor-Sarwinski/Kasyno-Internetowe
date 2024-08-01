<script setup>
defineProps({
  coins: Number
})
</script>

<template>
  <div class="blackjack__legend">
    <table class="blackjack__legend-table">
      <tr class="blackjack__legend-table-headers">
        <th class="blackjack__legend-table-header">Wygrana</th>
        <th class="blackjack__legend-table-header">Szansa</th>
        <th class="blackjack__legend-table-header">Mnożnik</th>
        <th class="blackjack__legend-table-header">Możliwa wygrana</th>
      </tr>
      <tr class="blackjack__legend-table-row">
        <td class="blackjack__legend-table-cell">Tak</td>
        <td class="blackjack__legend-table-cell">50%</td>
        <td class="blackjack__legend-table-cell">X 2</td>
        <td class="blackjack__legend-table-cell">{{ 2 * coins }}</td>
      </tr>
    </table>
      <ul class="blackjack__legend-list">
        <span class="blackjack__legend-list-header">Zasady:</span>
        <li class="blackjack__legend-list-item">Na każdy gracz dostaje 2 karty</li>
        <li class="blackjack__legend-list-item">Widzimy tylko pierwsza kartę przeciwnika</li>
        <li class="blackjack__legend-list-item">Każda karta posiada przypisaną wartość, As jest wyjątkiem i może być 1 lub 11</li>
        <li class="blackjack__legend-list-item">Mozna dobrac kartę lub sprawdzić</li>
        <li class="blackjack__legend-list-item">Zwycięża osoba która ma wynik bliższy 21 </li>
        <li class="blackjack__legend-list-item">Osoba która przebije liczbę 21 automatycznie przegrywa</li>
      </ul>
  </div>
</template>
