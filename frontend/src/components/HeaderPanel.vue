<script setup>
import { onMounted, ref } from 'vue'

const user = ref('')
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'))
});
</script>
<template>
    <div class="page__header">
      <div class="page__header-info">
        <span class="page__header-info-text">
          To „kasyno” zostało stworzone wyłącznie dla zabawy! To tylko gra i w gre nie wchodzą prawdziwe pieniądze. Jaki jest tego cel? Aby cieszyć się grami w kasynie, grając na fałszywe punkty. Celem tego projektu jest uczynienie tych gier tak satysfakcjonującymi, jak to tylko możliwe i umożliwienie ludziom dobrej zabawy bez utraty pieniędzy. Oraz nauka w ramach tego projektu w celu powiekszenia umiejetnosci zwiazanych z pisaniem aplikacji internetowych.
        </span>
      </div>
      <div class="page__header-profile">
        <div class="page__header-profile-infos">
          <p class="page__header-profile-infos-text">{{user?.nickname || 'Nazwa' }}</p>
          <p class="page__header-profile-infos-text page__header-profile-infos-text--red">{{ user?.money || 0  }} €</p>

        </div>
        <div class="page__header-profile-avatar">
          <img class="page__header-profile-avatar-image" src="../assets/img/avatar.jpeg" alt="logo"/>
        </div>
      </div>
    </div>
</template>


