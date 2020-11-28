<template>
  <div id="layout-wrapper">
    <LandingHero />
    <LandingForm v-if="user.customerType === 'CLIENT'" />
  </div>
</template>
<script>
import Cadeirante from '../../assets/images/index/cadeirante-index.svg';
import LandingHero from '../../components/landing/LandingHero.vue';
import LandingForm from '../../components/landing/LandingForm.vue';

export default {
  name: 'LandingClient',
  components: { LandingForm, LandingHero },
  data: () => ({
    Cadeirante,
  }),
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>
