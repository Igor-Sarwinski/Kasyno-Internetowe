<template>
  <layout-div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Panel rejestracji</h5>
            <form >
              <div class="mb-3">
                <label
                    htmlFor="name"
                    class="form-label">Imię
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    v-model="name"
                />
                <div v-if="validationErrors.name" class="flex flex-col">
                  <small  class="text-danger">
                    {{validationErrors?.name[0]}}
                  </small >
                </div>
              </div>
              <div class="mb-3">
                <label
                    htmlFor="surname"
                    class="form-label">Nazwisko
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="surname"
                    name="surname"
                    v-model="surname"
                />
                <div v-if="validationErrors.surname" class="flex flex-col">
                  <small  class="text-danger">
                    {{validationErrors?.surname[0]}}
                  </small >
                </div>
              </div>
              <div class="mb-3">
                <label
                    htmlFor="nickname"
                    class="form-label">Nazwa
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="nickname"
                    name="nickname"
                    v-model="nickname"
                />
                <div v-if="validationErrors.nickname" class="flex flex-col">
                  <small  class="text-danger">
                    {{validationErrors?.nickname[0]}}
                  </small >
                </div>
              </div>
              <div class="mb-3">
                <label
                    htmlFor="email"
                    class="form-label">Adres email
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    v-model="email"
                />
                <div v-if="validationErrors.email" class="flex flex-col">
                  <small  class="text-danger">
                    {{validationErrors?.email[0]}}
                  </small >
                </div>
              </div>
              <div class="mb-3">
                <label
                    htmlFor="address"
                    class="form-label">Adres
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="address"
                    name="address"
                    v-model="address"
                />
                <div v-if="validationErrors.address" class="flex flex-col">
                  <small  class="text-danger">
                    {{validationErrors?.address[0]}}
                  </small >
                </div>
              </div>
              <div class="mb-3">
                <label
                    htmlFor="phone"
                    class="form-label">Telefon
                </label>
                <input
                    type="number"
                    maxlength="9"
                    minlength="9"
                    class="form-control"
                    id="phone"
                    name="phone"
                    v-model="phone"
                />
                <div v-if="validationErrors.phone" class="flex flex-col">
                  <small  class="text-danger">
                    {{validationErrors?.phone[0]}}
                  </small >
                </div>
              </div>
              <div class="mb-3">
                <label
                    htmlFor="password"
                    class="form-label">Hasło
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    v-model="password"
                />
                <div v-if="validationErrors.password" class="flex flex-col">
                  <small  class="text-danger">
                    {{validationErrors?.password[0]}}
                  </small >
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                    :disabled="isSubmitting"
                    @click="registerAction()"
                    type="button"
                    class="btn btn-primary btn-block">Zarejestruj się
                </button>
                <p
                    class="text-center">Masz konto ?  <router-link to="/">Zaloguj się tutaj</router-link>
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
  name: 'RegisterPage',
  components: {
    LayoutDiv,
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
