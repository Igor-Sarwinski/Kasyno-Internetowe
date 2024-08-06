<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const name = ref('')
const surname = ref('')
const nickname = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const password = ref('')
const validationErrors = ref({})
const isSubmitting = ref(false)
const router = useRouter()

const registerAction = async () => {
  isSubmitting.value = true
  const payload = {
    name: name.value,
    surname: surname.value,
    nickname: nickname.value,
    email: email.value,
    address: address.value,
    phone: phone.value,
    password: password.value,
    money: 1000,
    wins: 0
  }

  try {
    const response = await axios.post('/api/users', payload)
    localStorage.setItem('token', response.data._id)
    await router.push('/')
  } catch (error) {
    isSubmitting.value = false
    console.error('Error details:', error.response)
    if (error.response && error.response.data) {
      validationErrors.value = error.response.data.errors || {
        message: error.response.data.message
      }
    } else {
      validationErrors.value = { message: 'Błąd serwera' }
    }
  }
}

onMounted(() => {
  if (localStorage.getItem('token')) {
    router.push('/dashboard')
  }
})
</script>

<template>
  <section class="login-container">
    <div class="login-panel">
      <div class="login-panel__image">
        <img
          class="login-panel__image-background"
          src="../../assets/img/login/background.webp"
          alt=""
        />
        <img class="login-panel__image-logo" src="../../assets/img/logo.png" alt="logo" />
      </div>
      <div class="login-panel__form">
        <h5 class="login-panel__form-header">PANEL REJESTRACJI</h5>
        <form class="form" @submit.prevent="registerAction">
          <div class="form-field">
            <label for="name" class="form-field-label">Imię</label>
            <input v-model="name" type="text" class="form-field-input" id="name" name="name" />
            <div v-if="validationErrors.name">
              <small class="">{{ validationErrors?.name[0] }}</small>
            </div>
          </div>

          <div class="form-field">
            <label for="surname" class="form-field-label">Nazwisko</label>
            <input
              v-model="surname"
              type="text"
              class="form-field-input"
              id="surname"
              name="surname"
            />
            <div v-if="validationErrors.surname">
              <small class="">{{ validationErrors?.surname[0] }}</small>
            </div>
          </div>

          <div class="form-field">
            <label for="nickname" class="form-field-label">Nazwa</label>
            <input
              v-model="nickname"
              type="text"
              class="form-field-input"
              id="nickname"
              name="nickname"
            />
            <div v-if="validationErrors.nickname">
              <small class="">{{ validationErrors?.nickname[0] }}</small>
            </div>
          </div>

          <div class="form-field">
            <label for="email" class="form-field-label">Adres email</label>
            <input v-model="email" type="email" class="form-field-input" id="email" name="email" />
            <div v-if="validationErrors.email">
              <small class="">{{ validationErrors?.email[0] }}</small>
            </div>
          </div>
          <div class="form-field">
            <label for="address" class="form-field-label">Adres</label>
            <input
              v-model="address"
              type="text"
              class="form-field-input"
              id="address"
              name="address"
            />
            <div v-if="validationErrors.address">
              <small class="">{{ validationErrors?.address[0] }}</small>
            </div>
          </div>

          <div class="form-field">
            <label for="phone" class="form-field-label">Telefon</label>
            <input
              v-model="phone"
              type="number"
              class="form-field-input form-field-input-number"
              id="phone"
              name="phone"
              minlength="9"
              maxlength="9"
            />
            <div v-if="validationErrors.phone">
              <small class="">{{ validationErrors?.phone[0] }}</small>
            </div>
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
            <div v-if="validationErrors.password">
              <small class="">{{ validationErrors?.password[0] }}</small>
            </div>
          </div>

          <div class="form-field form-field-submit">
            <button :disabled="isSubmitting" type="submit" class="form-field-submit-button">
              Zarejestruj się <font-awesome-icon icon="arrow-right-to-bracket" />
            </button>
          </div>

          <div class="form-field">
            <p class="form-field-text">
              Masz konto?
              <router-link class="form-field-text-link" to="/">Zaloguj się tutaj</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
