<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="login-panel__image">
        <img class="login-panel__image-background" src="../../assets/img/login/background.webp" alt="">
        <img class="login-panel__image-logo" src="@/assets/img/logo.png" alt="logo"/>
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
            <input v-model="surname" type="text" class="form-field-input" id="surname" name="surname" />
            <div v-if="validationErrors.surname">
              <small class="">{{ validationErrors?.surname[0] }}</small>
            </div>
          </div>

          <div class="form-field">
            <label for="nickname" class="form-field-label">Nazwa</label>
            <input v-model="nickname" type="text" class="form-field-input" id="nickname" name="nickname" />
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
            <input v-model="address" type="text" class="form-field-input" id="address" name="address" />
            <div v-if="validationErrors.address">
              <small class="">{{ validationErrors?.address[0] }}</small>
            </div>
          </div>

          <div class="form-field">
            <label for="phone" class="form-field-label">Telefon</label>
            <input v-model="phone" type="number" class="form-field-input form-field-input-number" id="phone" name="phone" minlength="9" maxlength="9" />
            <div v-if="validationErrors.phone">
              <small class="">{{ validationErrors?.phone[0] }}</small>
            </div>
          </div>

          <div class="form-field">
            <label for="password" class="form-field-label">Hasło</label>
            <input v-model="password" type="password" class="form-field-input form-field-input-password" id="password" name="password" />
            <div v-if="validationErrors.password">
              <small class="">{{ validationErrors?.password[0] }}</small>
            </div>
          </div>

          <div class="form-field form-field-submit">
            <button :disabled="isSubmitting" type="submit" class="form-field-submit-button">Zarejestruj się <font-awesome-icon icon="arrow-right-to-bracket"/></button>
          </div>

          <div class="form-field">

            <p class="form-field-text">Masz konto? <router-link class="form-field-text-link" to="/">Zaloguj się tutaj</router-link></p>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RegisterPage',
  components: {
  },
  data() {
    return {
      name:'',
      surname:'',
      nickname:'',
      email:'',
      address:'',
      phone:'',
      password:'',
      validationErrors:{},
      isSubmitting:false,
    }
  },
  created() {
  },
  methods: {
    registerAction(){
      this.isSubmitting = true
      let payload = {
        name:this.name,
        surname:this.surname,
        nickname:this.nickname,
        email: this.email,
        address:this.address,
        phone:this.phone,
        password: this.password,
      }
      axios.post('/api/users', payload)
          .then(response => {
            // localStorage.setItem('token', response.data.token)
            this.$router.push('/')
            return response
          })
          .catch(error => {
            this.isSubmitting = false
            if (error.response.data.errors !== undefined) {
              this.validationErrors = error.response.data.errors
            }
            return error
          });
    }
  },
};
</script>
