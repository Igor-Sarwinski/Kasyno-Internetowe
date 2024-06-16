<template>
  <div class="menu">
    <div class="menu__logo">
      <img class="menu__logo-image" src="@/assets/img/logo.png" alt="logo"/>
    </div>
    <div class="menu_profile">
      <div class="menu__profile-avatar">
        <div class="menu__profile-avatar-background"/>
        <img class="menu__profile-avatar-image" src="@/assets/img/avatar.jpeg" alt="logo"/>
      </div>
      <div class="menu__profile-name">
        <h5 class="login-panel__profile-name-text">Igor Sarwiński</h5>
      </div>
      <div class="menu__profile-money">
        <p class="menu__profile-money-text">Waluta: </p>
        <p class="menu__profile-money-value">1501555</p>
      </div>
    </div>
    <div class="menu__separator"/>
    <div class="menu__nav">
      <div class="menu__nav-item">
        <img class="menu__nav-item-icon" :src="require('@/assets/img/menu/strona-glowna.svg')" alt="home"/>
        <p><router-link class="menu__nav-item-link" to="/register">Strona główna</router-link></p>
      </div>
      <div class="menu__nav-item">
        <font-awesome-icon class="menu__nav-item-icon" icon="user"/>
        <router-link class="menu__nav-item-link" to="/register">Profil</router-link>
      </div>
      <div class="menu__nav-item">
        <font-awesome-icon class="menu__nav-item-icon" icon="card"/>
        <router-link class="menu__nav-item-link" to="/register">Ruletka</router-link>
      </div>
      <div class="menu__nav-item">
        <font-awesome-icon class="menu__nav-item-icon" icon="house"/>
        <router-link class="menu__nav-item-link" to="/register">Blackjack</router-link>
      </div>
      <div class="menu__nav-item">
        <font-awesome-icon class="menu__nav-item-icon" icon="house"/>
        <router-link class="menu__nav-item-link" to="/register">Sloty</router-link>
      </div>
      <div class="menu__nav-item">
        <font-awesome-icon class="menu__nav-item-icon" icon="house"/>
        <router-link class="menu__nav-item-link" to="/register">Ranking</router-link>
      </div>
      <div class="menu__nav-item">
        <font-awesome-icon class="menu__nav-item-icon" icon="house"/>
        <router-link class="menu__nav-item-link" to="/register">Informacje</router-link>
      </div>
    </div>
    <div class="menu__separator"/>
    <div class="menu__logout">
    </div>
    <div class="menu__separator"/>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
};
</script>
