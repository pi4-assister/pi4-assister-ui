<template>
  <nav class="nav d-lg-none">
    <router-link tag="a" to="/client"
                 class="nav__link">
      <home-icon/>
      <span class="nav__text">Início</span>
    </router-link>
    <router-link v-if="user.customerType === 'CLIENT'" tag="a" to="/services"
                 class="nav__link">
      <heart-icon/>
      <span class="nav__text">Serviços</span>
    </router-link>
    <router-link v-else tag="a" to="/services"
                 class="nav__link">
      <message-circle-icon/>
      <span class="nav__text">Notificações</span>
    </router-link>
    <router-link v-if="!userAuthenticated"
                 tag="a" to="/auth-login"
                 class="nav__link">
      <user-icon/>
      <span class="nav__text">Entrar</span>
    </router-link>
    <router-link v-else tag="a" to="/account/profile"
                 class="nav__link">
      <user-icon v-if="!user.photoUrl"/>
      <img v-else class="rounded-circle" :src="user.photoUrl"
           width="30" height="30" :alt="user.fullName">
      <span class="nav__text">Perfil</span>
    </router-link>
  </nav>
</template>

<script>
import {
  UserIcon,
  HomeIcon,
  HeartIcon,
  MessageCircleIcon,
} from 'vue-feather-icons';

export default {
  name: 'layout-navigation-mobile',
  components: {
    UserIcon,
    HomeIcon,
    HeartIcon,
    MessageCircleIcon,
  },
  computed: {
    userAuthenticated() {
      return this.$store.getters.userAuthenticated;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  padding: 10px;
  z-index: 1;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
  color: #444444;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
  background-color: #eeeeee;
}

.nav__link--active {
  color: #0336ff;
}

.router-link-exact-active {
  color: #0336ff;
}

</style>
