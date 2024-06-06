<template>
  <layout-div>
    <div class="col justify-content-md-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Dashboard</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a @click="logoutAction" class="nav-link" aria-current="page" href="#">Logout</a>
          </li>
        </ul>
      </nav>
      <h2 class="text-center mt-5">Welcome, {{ user?.name }}!</h2>
    </div>
  </layout-div>
</template>

<script>

import LayoutDiv from '../LayoutDiv.vue';
// import axios from "axios";

export default {
  name: 'DashboardPage',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    if (!localStorage.getItem('id')) {
      this.$router.push('/');
    } else {
      this.getUser();
    }
  },
  methods: {
    getUser() {
      // axios.get(`/api/users/:${localStorage.getItem('id')}`, {
      // })
      //     .then(response => {
      //       this.user = response.data;
      //     })
      //     .catch(error => {
      //       console.error(error);
      //       this.$router.push('/');
      //     });
    },
    logoutAction() {
      localStorage.removeItem('id');
      this.$router.push('/');
    }
  }
};
</script>
