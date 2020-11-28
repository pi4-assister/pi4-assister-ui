<template>
  <section class="section mt-60">
    <div class="container mt-lg-3">
      <div class="row">
        <ProfileRoutes />
        <ProfileUpdate />
      </div>
    </div>
  </section>
</template>

<script>
import ProfileRoutes from '../profile/ProfileRoutes.vue';
import ProfileUpdate from '../profile/ProfileUpdate.vue';

export default {
  name: 'AccountProfile',
  components: { ProfileUpdate, ProfileRoutes },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>

</style>
