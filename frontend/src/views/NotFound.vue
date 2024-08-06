<script setup>
import { onMounted, ref } from 'vue'
import router from '@/router/index.js'
const timer = ref(10)
onMounted(()=>{
  returnHome();
})

const returnHome=()=>{
  const interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    } else {
      clearInterval(interval)
      router.push('/')
    }
  }, 1000)
}


</script>

<template>
<section class="not-found">
  <h1 class="not-found__header">Strony której szukasz nie znaleziono</h1>
  <router-link class="not-found__link" to="/">Powrót do strony głównej</router-link>
  <span class="not-found__timer">Automatyczny powrót za {{timer}}</span>
</section>
</template>
