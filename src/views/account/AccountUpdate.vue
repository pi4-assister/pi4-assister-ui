<template>
  <div class="layout-wrapper">
    <AccountHero />
    <section class="section mt-60">
      <div class="container mt-lg-3">
        <div class="row">
          <ProfileRoutes />
          <ProfileUpdate />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AccountHero from '../../components/account/AccountHero.vue';
import ProfileRoutes from '../../components/profile/ProfileRoutes.vue';
import ProfileUpdate from '../../components/profile/ProfileUpdate.vue';

export default {
  name: 'AccountUpdate',
  components: { ProfileUpdate, ProfileRoutes, AccountHero },
};
</script>

<style scoped>

</style>
