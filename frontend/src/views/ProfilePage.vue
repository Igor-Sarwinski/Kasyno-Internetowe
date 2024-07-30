<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { fetchUser, setUserMoney, setUserWins } from '@/utils/utils.js'
const user = ref(null)
onMounted(async () => {
  user.value = await fetchUser()
  if (user.value) {
    name.value = user.value.name;
    surname.value = user.value.surname;
    nickname.value = user.value.nickname;
    email.value = user.value.email;
    phone.value = user.value.phone;
    address.value = user.value.address;
    password.value = user.value.password;
    money.value = user.value.money;
    wins.value = user.value.wins;
  }
});

const name = ref('');
const surname = ref('');
const nickname = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const password = ref('');
const money = ref('');
const wins = ref('');

const updateAction =  async () => {
  const payload = {
    name: name.value,
    surname: surname.value,
    nickname: nickname.value,
    email: email.value,
    address: address.value,
    phone: phone.value,
    password: password.value,
    money: money.value,
    wins: wins.value
  };
  try{
    const userId = user.value._id;
    await axios.put(`/api/users/${userId}`, payload)
    alert('Zaktualizowano użytkownika');
  }catch(error){
    console.log(error)
  }
}
const resetStats = () =>{
  setUserMoney(1000);
  setUserWins(0);
  alert('Reset');
  window.location.reload();
}
const editPhoto = () =>{
  alert('Edycja zdjecia');
}

</script>
<template>
  <div class="profile">

    <div class="profile__options">
      <div class="profile__options-item">
        <span class="profile__options-header">Zdjęcie</span>
        <div class="profile__options-avatar">
          <img class="profile__options-avatar-image" src="../assets/img/avatar.jpeg" alt="logo"/>
        </div>
        <button @click="editPhoto" class="profile__options-button">Zmień zdjęcie <font-awesome-icon icon="pen-to-square"/></button>
      </div>

      <div class="profile__options-item">
        <span class="profile__options-header">Waluta:</span>
        <span class="profile__options-money-value">{{user?.money}}</span>
        <span class="profile__options-header">Wygrane:</span>
        <span class="profile__options-money-value">{{user?.wins}}</span>
        <button @click="resetStats" class="profile__options-button">Zresetuj statystyki <font-awesome-icon icon="rotate"/></button>
        </div>
    </div>

    <div class="profile__form login-panel__form">
      <span class="profile__form-header">Zedytuj swój profil</span>
      <form class="profile__form-form form" @submit.prevent="updateAction">
        <div class="form-field">
          <label for="name" class="form-field-label">Imię</label>
          <input v-model="name" type="text" class="form-field-input" id="name" name="name" />
        </div>

        <div class="form-field">
          <label for="surname" class="form-field-label">Nazwisko</label>
          <input v-model="surname" type="text" class="form-field-input" id="surname" name="surname" />
        </div>

        <div class="form-field">
          <label for="nickname" class="form-field-label">Nazwa</label>
          <input v-model="nickname" type="text" class="form-field-input" id="nickname" name="nickname" />
        </div>

        <div class="form-field">
          <label for="email" class="form-field-label">Adres email</label>
          <input v-model="email" type="email" class="form-field-input" id="email" name="email" />
        </div>
        <div class="form-field">
          <label for="address" class="form-field-label">Adres</label>
          <input v-model="address" type="text" class="form-field-input" id="address" name="address" />
        </div>

        <div class="form-field">
          <label for="phone" class="form-field-label">Telefon</label>
          <input v-model="phone" type="number" class="form-field-input form-field-input-number" id="phone" name="phone" minlength="9" maxlength="9" />
        </div>

        <div class="form-field">
          <label for="password" class="form-field-label">Hasło</label>
          <input v-model="password" type="password" class="form-field-input form-field-input-password" id="password" name="password" />
        </div>

        <div class="form-field form-field-submit">
          <button type="submit" class="form-field-submit-button">Zaktualizuj dane <font-awesome-icon icon="pen-to-square"/></button>
        </div>
      </form>
    </div>
  </div>
</template>




