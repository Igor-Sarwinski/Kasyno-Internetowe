<script setup>
import { ref } from 'vue'

const menuItems = ref([
  {id: 1, link: '/dashboard', label: 'Strona główna'},
  {id: 2, link: '/profile', label: 'Profil'},
  {id: 3, link: '/roulette', label: 'Ruletka'},
  {id: 4, link: '/blackjack', label: 'Blackjack'},
  {id: 5, link: '/slots', label: 'Sloty'},
  {id: 6, link: '/ranking', label: 'Ranking'},
  {id: 7, link: '/info', label: 'Informacje'}
])
</script>

<template>
  <div class="footer">
      <div class="footer__copyright">
        Copyright © 2024 <a class="footer__copyright-link" href="https://github.com/Igor-Sarwinski" target="_blank">Igor Sarwiński</a>  Wszelkie prawa zastrzeżone.
      </div>
        <ul class="footer__menu">
          <li v-for="item in menuItems" :key="item.id" class="footer__menu-item">
            <router-link :to="item.link" class="footer__menu-item-link"><p>{{ item.label }}</p></router-link>
          </li>
        </ul>

  </div>
</template>

