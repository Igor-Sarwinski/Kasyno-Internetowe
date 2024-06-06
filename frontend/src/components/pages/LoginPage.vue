<template>
  <layout-div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Panel logowania</h5>
            <form @submit.prevent="loginAction">
              <p v-if="validationErrors" class='text-center '>
                <small class='text-danger'>{{ validationErrors }}</small>
              </p>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Adres email
                </label>
                <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Hasło</label>
                <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                />
              </div>
              <div class="d-grid gap-2">
                <button
                    :disabled="isSubmitting"
                    type="submit"
                    class="btn btn-primary btn-block">Zaloguj</button>
                <p class="text-center">Nie masz konta?
                  <router-link to="/register">Zarejestruj się</router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </layout-div>
</template>

<script>
import axios from 'axios';
import LayoutDiv from '../LayoutDiv.vue';

export default {
  name: 'LoginPage',
  components: {
    LayoutDiv,
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
