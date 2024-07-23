<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const validationErrors = ref('');
const isSubmitting = ref(false);
const router = useRouter();

onMounted(() => {
  // if (localStorage.getItem('token')) {
  //   router.push('/dashboard');
  // }
});

const loginAction =  async () => {
  isSubmitting.value = true;
  const payload = {
    email: email.value,
    password: password.value,
  };
  await axios.post('/api/login', payload)
    .then(response => {
      localStorage.setItem('token', response.data._id)
      localStorage.setItem('user', JSON.stringify(response.data));
      router.push('/dashboard');
    })
    .catch(error => {
      isSubmitting.value = false;
      if (error.response && error.response.data) {
        validationErrors.value = error.response.data.message;
      } else {
        validationErrors.value = 'Błąd serwera';
      }
    });
}
</script>

<template>
  <div class="login-container">
      <div class="login-panel">
        <div class="login-panel__image">
          <img class="login-panel__image-background" src="../assets/img/login/background.webp" alt="">
          <img class="login-panel__image-logo" src="../assets/img/logo.png" alt="logo"/>
        </div>
        <div class="login-panel__form">
          <h5 class="login-panel__form-header">PANEL LOGOWANIA</h5>
          <form class="form" @submit.prevent="loginAction">
            <div class="form-field">
              <label for="email" class="form-field-label">
                Adres email
              </label>
              <input
                  v-model="email"
                  type="email"
                  class="form-field-input"
                  id="email"
                  name="email"
              />
            </div>
            <div class="form-field">
              <label for="password" class="form-field-label">Hasło</label>
              <input
                  v-model="password"
                  type="password"
                  class="form-field-input form-field-input-password"
                  id="password"
                  name="password"
              />
            </div>
            <p v-if="validationErrors" class=''>
              <small class="">{{ validationErrors }}</small>
            </p>
            <div class="form-field form-field-submit">
              <button
                  :disabled="isSubmitting"
                  type="submit"
                  class="form-field-submit-button">Zaloguj <font-awesome-icon icon="arrow-right-to-bracket"/></button>
            </div>
            <div class="form-field">
              <p class="form-field-text">Nie masz konta?
                <router-link class="form-field-text-link" to="/register">Zarejestruj się</router-link>
              </p>
            </div>

          </form>
        </div>
      </div>
  </div>
</template>
