<template>
  <!-- Navbar STart -->
  <header
    id="topnav"
    class="defaultscroll sticky d-none d-lg-block"
  >
    <div class="container">
      <!-- Logo container-->
      <div>
        <router-link
          tag="a"
          class="logo"
          to="/client"
        >
          <img
            :src="LogoIndex"
            height="24"
            alt=""
          >
        </router-link>
      </div>
      <div class="buy-button" v-if="!userAuthenticated">
        <router-link
          tag="button"
          to="/auth-login"
          class="btn btn-outline-primary mr-3"
        >
          Entrar
        </router-link>
        <router-link
          tag="button"
          to="/auth-register"
          class="btn btn-primary"
        >
          Cadastre-se
        </router-link>
      </div>
      <div class="buy-button" v-else>
        <router-link tag="a" to="/account/profile">
          <user-icon />
        </router-link>
      </div>
      <!--end login button-->
      <!-- End Logo container-->
      <div id="navigation">
        <!-- Navigation Menu-->
        <ul :class="['navigation-menu nav-right', navigationClass]">
          <li :class="$route.name === 'LandingClient.Index' ? 'active' : ''">
            <router-link
              to="/client"
              tag="a"
            >
              Início
            </router-link>
          </li>
          <li :class="$route.name === '' ? 'active' : ''">
            <router-link
              to="/customer-services"
              tag="a" >
              Serviços
            </router-link>
          </li>
        </ul>
        <!--end login button-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </header>
  <!--end header-->
</template>

<script>
import { UserIcon } from 'vue-feather-icons';
import LogoIndex from '../../assets/images/index/logo-index.jpg';

export default {
  name: 'LayoutNavigation',
  components: { UserIcon },
  data: () => ({
    LogoIndex,
  }),
  computed: {
    userAuthenticated() {
      return this.$store.getters.userAuthenticated;
    },
    navigationClass() {
      const routesLight = ['LandingClient.Index', 'Account.Index', 'Auth.Register'];
      return routesLight.indexOf(this.$route.name) > -1 ? 'nav-light' : '';
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    $('.navbar-toggle')
      .on('click', () => {
        // eslint-disable-next-line no-undef
        $(this)
          .toggleClass('open');
        // eslint-disable-next-line no-undef
        $('#navigation')
          .slideToggle(400);
      });
  },
};
</script>

<style scoped></style>
