<template>
  <!-- Navbar STart -->
  <header
    id="topnav"
    class="defaultscroll sticky"
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
            src="../../assets/images/index/logo-index.jpg"
            height="24"
            alt=""
          >
        </router-link>
      </div>
      <div class="buy-button">
        <router-link
          tag="button"
          to="/register"
          class="btn btn-primary"
        >
          Quero ser Assister
        </router-link>
      </div>
      <!--end login button-->
      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle">
            <div class="lines">
              <span />
              <span />
              <span />
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

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
              Sobre Nós
            </router-link>
          </li>
          <li :class="$route.name === '' ? 'active' : ''">
            <router-link
              to="/client"
              tag="a" >
              Blog
            </router-link>
          </li>
        </ul>
        <!--end navigation menu-->
        <div class="buy-menu-btn d-none">
          <router-link
            to="/register"
            class="btn btn-primary"
            tag="button">Quero ser Assister
          </router-link>
        </div>
        <!--end login button-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </header>
  <!--end header-->
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'LayoutNavigation',
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
