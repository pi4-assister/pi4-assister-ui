<template>
  <div class="layout-wrapper">
    <AccountHero />
    <AccountProfile />
  </div>
</template>

<script>
import AccountHero from '../../components/account/AccountHero.vue';
import AccountProfile from '../../components/account/AccountProfile.vue';

export default {
  name: 'AccountUpdate',
  components: { AccountProfile, AccountHero },
};
</script>

<style scoped>

</style>
