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
      <div class="buy-button">
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
      <!--end login button-->
      <!-- End Logo container-->
      <div id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu nav-right">
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
              to="/client"
              tag="a"
            >
              Sobre nós
            </router-link>
          </li>
          <li :class="$route.name === '' ? 'active' : ''">
            <router-link
              to="/client"
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
import LogoIndex from '../../assets/images/index/logo-index.jpg';

export default {
  name: 'LayoutNavigation',
  data: () => ({
    LogoIndex,
  }),
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
