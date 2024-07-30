<script setup>
defineProps({
  header: String,
  first: String,
  second: String
})
</script>

<template>
  <li class="info__block-list-item">
    <strong>{{ header }}</strong>
    <p>{{ first }}</p>
    <p>{{ second }}</p>
  </li>
</template>
