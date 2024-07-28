<script setup>
defineProps({
  user: Object,
  visible: Boolean,
})

const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close');
};

</script>

<template>
  <div v-if="visible" class="popup" @click.self="closePopup">
    <div class="popup__content">
    <div class="popup__header">
      <span class="popup__header-title"><p>Szczegóły użytkownika</p></span>
      <span class="popup__header-title-value"><p>{{user.nickname}}</p></span>
      <button class="popup__header-button" @click="closePopup">X</button>
      </div>
    <div class="popup__info">
      <span class="popup__info-name">Imię</span>
      <span class="popup__info-value">{{user.name}}</span>
      <span class="popup__info-name">Nazwisko</span>
      <span class="popup__info-value">{{user.surname}}</span>
      <span class="popup__info-name"><p>Email</p></span>
      <span class="popup__info-value"><p>{{user.email}}</p></span>
      <span class="popup__info-name"><p>Adres</p></span>
      <span class="popup__info-value"><p>{{user.address}}</p></span>
      <span class="popup__info-name"><p>Telefon</p></span>
      <span class="popup__info-value"><p>{{user.phone}}</p></span>
      <span class="popup__info-name"><p>Waluta</p></span>
      <span class="popup__info-value"><p>{{user.money}}</p></span>
      <span class="popup__info-name"><p>Wygrane</p></span>
      <span class="popup__info-value"><p>{{user.wins}}</p></span>
    </div>
    </div>
  </div>
</template>


