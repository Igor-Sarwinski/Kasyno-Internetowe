<template>
  <div class="menu">
    <div class="menu__logo">
      <img class="menu__logo-image" src="@/assets/img/logo.png" alt="logo"/>
    </div>
    <div class="menu__profile">
      <div class="menu__profile-avatar">
        <div class="menu__profile-avatar-background"/>
        <img class="menu__profile-avatar-image" src="@/assets/img/avatar.jpeg" alt="logo"/>
      </div>
      <div class="menu__profile-name">
        <h5 class="login-panel__profile-name-text">Igor Sarwiński</h5>
      </div>
      <div class="menu__profile-money">
        <span class="menu__profile-money-text">Waluta: </span>
      </div>
      <div class="menu__profile-value">
        <span class="menu__profile-value-text">1501555 euro gąbek</span>
      </div>
    </div>
    <div class="menu__separator"/>
    <ul class="menu__nav">
      <li class="menu__nav-item">
        <span class="material-symbols-outlined menu__nav-item-icon">home</span>
        <router-link class="menu__nav-item-link" to="/dashboard"><p>Strona główna</p></router-link>
      </li>
      <li class="menu__nav-item">
        <span class="material-symbols-outlined menu__nav-item-icon">person</span>
        <router-link class="menu__nav-item-link" to="/profile"><p>Profil</p></router-link>
      </li>
      <li class="menu__nav-item">
        <span class="material-symbols-outlined menu__nav-item-icon">poker_chip</span>
        <router-link class="menu__nav-item-link" to="/roulette"><p>Ruletka</p></router-link>
      </li>
      <li class="menu__nav-item">
        <span class="material-symbols-outlined menu__nav-item-icon">playing_cards</span>
        <router-link class="menu__nav-item-link" to="/blackjack"><p>Blackjack</p></router-link>
      </li>
      <li class="menu__nav-item">
        <span class="material-symbols-outlined menu__nav-item-icon">joystick</span>
        <router-link class="menu__nav-item-link" to="/slots"><p>Sloty</p></router-link>
      </li>
      <li class="menu__nav-item">
        <span class="material-symbols-outlined menu__nav-item-icon">leaderboard</span>
        <router-link class="menu__nav-item-link" to="/ranking"><p>Ranking</p></router-link>
      </li>
      <li class="menu__nav-item">
        <span class="material-symbols-outlined menu__nav-item-icon">contract</span>
        <router-link class="menu__nav-item-link" to="/info"><p>Informacje</p></router-link>
      </li>
    </ul>
    <div class="menu__separator"/>
    <div class="menu__logout">
      <a @click="logoutAction" class="menu__logout-link" aria-current="page" href="#">Wyloguj</a>
      <span class="material-symbols-outlined menu__nav-item-icon">logout</span>
    </div>
    <div class="menu__separator"/>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  methods: {
    logoutAction() {
      localStorage.removeItem('id');
      this.$router.push('/');
    }
  }
};
</script>
