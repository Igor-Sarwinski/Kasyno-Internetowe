<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const validationErrors = ref('')
const isSubmitting = ref(false)
const router = useRouter()

onMounted(() => {
  if (localStorage.getItem('token')) {
    router.push('/dashboard')
  }
})

const loginAction = async () => {
  isSubmitting.value = true
  const payload = {
    email: email.value,
    password: password.value
  }
  try {
    const response = await axios.post('/api/login', payload)
    localStorage.setItem('token', response.data._id)
    await router.push('/dashboard')
  } catch (error) {
    isSubmitting.value = false
    if (error.response && error.response.data) {
      validationErrors.value = error.response.data.message
    } else {
      validationErrors.value = 'Błąd serwera'
    }
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="login-panel__image">
        <img
          alt=""
          class="login-panel__image-background"
          src="../../assets/img/login/background.webp"
        />
        <img alt="logo" class="login-panel__image-logo" src="../../assets/img/logo.png" />
      </div>
      <div class="login-panel__form">
        <h5 class="login-panel__form-header">PANEL LOGOWANIA</h5>
        <form class="form" @submit.prevent="loginAction">
          <div class="form-field">
            <label class="form-field-label" for="email"> Adres email </label>
            <input id="email" v-model="email" class="form-field-input" name="email" type="email" />
          </div>
          <div class="form-field">
            <label class="form-field-label" for="password">Hasło</label>
            <input
              id="password"
              v-model="password"
              class="form-field-input form-field-input-password"
              name="password"
              type="password"
            />
          </div>
          <p v-if="validationErrors" class="">
            <small class="">{{ validationErrors }}</small>
          </p>
          <div class="form-field form-field-submit">
            <button :disabled="isSubmitting" class="form-field-submit-button" type="submit">
              Zaloguj <font-awesome-icon icon="arrow-right-to-bracket" />
            </button>
          </div>
          <div class="form-field">
            <p class="form-field-text">
              Nie masz konta?
              <router-link class="form-field-text-link" to="/register">Zarejestruj się</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
