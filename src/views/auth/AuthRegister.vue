<template>
  <div class="layout-wrapper">
    <RegisterHero />
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../../components/register/RegisterForm.vue';
import RegisterHero from '../../components/auth/RegisterHero.vue';

export default {
  name: 'AuthRegister',
  components: { RegisterHero, RegisterForm },
  data: () => ({}),
};
</script>

<style scoped>

</style>
