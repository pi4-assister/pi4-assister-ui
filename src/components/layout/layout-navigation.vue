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
            :src="LogoIndexWhite"
            height="24"
            alt=""
            class="l-light"
          >
          <img
            :src="LogoIndex"
            height="24"
            alt=""
            class="l-dark"
          >
        </router-link>
      </div>
      <div class="buy-button" v-if="userAuthenticated">
        <router-link tag="a" to="/account/profile" v-if="user.photoUrl === undefined">
          <user-icon />
        </router-link>
        <router-link tag="a" to="/account/profile" v-else>
          <img :src="user.photoUrl" width="30" height="30" :alt="user.fullName">
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
              class="assister-route"
            >
              Início
            </router-link>
          </li>
          <li :class="$route.name === '' ? 'active' : ''">
            <router-link
              v-if="user.customerType === 'CLIENT'"
              to="/services"
              tag="a"
              class="assister-route"
            >
              Serviços
            </router-link>
            <router-link
              v-else
              to="/notifications"
              tag="a"
              class="assister-route"
            >
              Notificações
            </router-link>
          </li>
          <li :class="$route.name === '' ? 'active' : ''" v-if="!userAuthenticated">
            <router-link
              to="/auth-register"
              tag="a"
              class="assister-route"
            >
              Cadastre-se
            </router-link>
          </li>
          <li :class="$route.name === '' ? 'active' : ''" v-if="!userAuthenticated">
            <router-link
              to="/auth-login"
              tag="a"
              class="assister-route"
            >
              Entrar
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
import LogoIndex from '../../assets/images/index/logo-index.png';
import LogoIndexWhite from '../../assets/images/index/logo-index-white.png';

export default {
  name: 'LayoutNavigation',
  components: { UserIcon },
  data: () => ({
    LogoIndex,
    LogoIndexWhite,
  }),
  computed: {
    userAuthenticated() {
      return this.$store.getters.userAuthenticated;
    },
    user() {
      return this.$store.state.auth.user;
    },
    navigationClass() {
      const routesLight = ['LandingClient.Index', 'Account.Index', 'Auth.Register'];
      return routesLight.indexOf(this.$route.name) > -1 ? 'nav-light' : 'nav-light';
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
