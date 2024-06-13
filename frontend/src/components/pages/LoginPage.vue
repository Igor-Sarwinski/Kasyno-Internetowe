
<template>
  <div class="login-container">
      <div class="login-panel">
        <div class="login-panel__image">
          <img class="login-panel__image-background" src="../../assets/img/login/background.webp" alt="">
          <img class="login-panel__image-logo" src="@/assets/img/logo.png" alt="logo"/>
        </div>
        <div class="login-panel__form">
          <h5 class="login-panel__form-header">Panel logowania</h5>
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
                  class="form-field-submit-button">Zaloguj</button>
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


<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  components: {

  },
  data() {
    return {
      email: '',
      password: '',
      validationErrors: '',
      isSubmitting: false,
    };
  },
  created() {
    if (localStorage.getItem('token')) {
      this.$router.push('/dashboard');
    }
  },
  methods: {
    loginAction() {
      this.isSubmitting = true;
      const payload = {
        email: this.email,
        password: this.password,
      };
      axios.post('/api/login', payload)
          .then(response => {
            console.log(response);
            localStorage.setItem('id', response.data._id);
            console.log(response.data._id);
            this.$router.push('/dashboard');
          })
          .catch(error => {
            this.isSubmitting = false;
            if (error.response && error.response.data) {
              this.validationErrors = error.response.data.message;
            } else {
              this.validationErrors = 'An error occurred while trying to login';
            }
          });
    }
  },
};
</script>
<style lang="scss">
@import '@/assets/styles/login.scss';
</style>
