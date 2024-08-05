<script setup>
defineProps({
  user: Object
})
</script>
<template>
  <div class="page__header">
    <div class="page__header-info">
      <span class="page__header-info-text">
        To „kasyno” zostało stworzone wyłącznie dla zabawy! To tylko gra i w gre nie wchodzą
        prawdziwe pieniądze. Jaki jest tego cel? Aby cieszyć się grami w kasynie, grając na fałszywe
        punkty. Celem tego projektu jest uczynienie tych gier tak satysfakcjonującymi, jak to tylko
        możliwe i umożliwienie ludziom dobrej zabawy bez utraty pieniędzy. Oraz nauka w ramach tego
        projektu w celu powiekszenia umiejetnosci zwiazanych z pisaniem aplikacji internetowych.
      </span>
    </div>

    <div class="page__header-profile">
      <div class="page__header-profile-infos">
        <span class="page__header-profile-infos-text"
          ><p>{{ user?.nickname || 'Nazwa' }}</p></span
        >
        <span class="page__header-profile-infos-text page__header-profile-infos-text--red"
          ><p>{{ user?.money || 0 }} €</p></span
        >
      </div>
      <router-link :to="'/profile'">
        <div class="page__header-profile-avatar">
          <img
            class="page__header-profile-avatar-image"
            src="../assets/img/avatar.jpeg"
            alt="logo"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>
