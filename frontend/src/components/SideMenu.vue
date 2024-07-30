<script setup>
import {onMounted, ref } from 'vue'
import { useLogout } from '@/utils/utils.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const user = ref('')
onMounted(async () => {
  user.value = JSON.parse(localStorage.getItem('user'))
});
const logoutAction = useLogout();

const menuItems = ref([
  {id: 1, icon: 'home', link: '/dashboard', label: 'Strona główna'},
  {id: 2, icon: 'person', link: '/profile', label: 'Profil'},
  {id: 3, icon: 'poker_chip', link: '/roulette', label: 'Ruletka'},
  {id: 4, icon: 'playing_cards', link: '/blackjack', label: 'Blackjack'},
  {id: 5, icon: 'joystick', link: '/slots', label: 'Sloty'},
  {id: 6, icon: 'leaderboard', link: '/ranking', label: 'Ranking'},
  {id: 7, icon: 'contract', link: '/info', label: 'Informacje'}
])
</script>

<template>
  <div class="menu">
    <div class="menu__logo">
      <img alt="logo" class="menu__logo-image" src="../assets/img/logo.png"/>
    </div>
    <div class="menu__profile">
      <div class="menu__profile-avatar">
        <router-link :to="'/profile'">
        <div class="menu__profile-avatar-background"/>
        <img alt="logo" class="menu__profile-avatar-image" src="../assets/img/avatar.jpeg"/>
        </router-link>
      </div>
      <div class="menu__profile-name">
        <h5 class="login-panel__profile-name-text">{{user?.name || 'Imię' }}</h5>
      </div>
      <div class="menu__profile-money">
        <span class="menu__profile-money-text">Waluta: </span>
      </div>
      <div class="menu__profile-value">
        <span class="menu__profile-value-text">{{user?.money || 0 }} euro gąbek</span>
      </div>
    </div>
    <div class="menu__separator"/>
    <ul class="menu__nav">
      <li v-for="item in menuItems" :key="item.id" class="menu__nav-item" :class="{ 'menu__nav-item-active': route.path === item.link }">
        <span class="material-symbols-outlined menu__nav-item-icon">{{ item.icon }}</span>
        <router-link :to="item.link" class="menu__nav-item-link"><p>{{ item.label }}</p></router-link>
      </li>
    </ul>
    <div class="menu__separator"/>
    <div class="menu__logout">
      <a aria-current="page" class="menu__logout-link" @click="logoutAction">Wyloguj</a>
      <span class="material-symbols-outlined menu__nav-item-icon">logout</span>
    </div>
    <div class="menu__separator"/>

  </div>
</template>


