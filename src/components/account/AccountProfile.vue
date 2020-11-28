<template>
  <section class="section mt-60">
    <div class="container mt-lg-3">
      <div class="row">
        <ProfileRoutes />
        <ProfileBasic :user="user" />
      </div>
    </div>
  </section>
</template>

<script>
import ProfileRoutes from '../profile/ProfileRoutes.vue';
import ProfileBasic from '../profile/ProfileBasic.vue';

export default {
  name: 'AccountProfile',
  components: { ProfileBasic, ProfileRoutes },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>

</style>
