<template>
  <div class="layout-wrapper">
    <AccountHero />
    <section class="section mt-60">
      <div class="container mt-lg-3">
        <div class="row">
          <ProfileRoutes />
          <ProfilePayments />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AccountHero from '../../components/account/AccountHero.vue';
import ProfileRoutes from '../../components/profile/ProfileRoutes.vue';
import ProfilePayments from '../../components/profile/ProfilePayments.vue';

export default {
  name: 'AccountPayments',
  components: { ProfilePayments, ProfileRoutes, AccountHero },
};
</script>

<style scoped>

</style>
