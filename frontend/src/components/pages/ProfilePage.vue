 <template>
    <div class="page profile">
      <side-menu/>
      <div>
        <h1>Profil</h1>
      </div>
    </div>
  </template>

  <script>
    import SideMenu from "../SideMenu.vue";

    export default {
      name: 'ProfilePage',
      components: {
        SideMenu,
      },
    };
  </script>


