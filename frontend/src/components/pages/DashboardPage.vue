<template>
  <side-menu/>
  <layout-div>
    <div>
      <nav>
        <a href="#">Dashboard</a>
        <ul>
          <li>
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
import SideMenu from "../SideMenu.vue";
// import axios from "axios";

export default {
  name: 'DashboardPage',
  components: {
    SideMenu,
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
