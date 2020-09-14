<template>
  <div class="layout-wrapper">
    <section class="section">
      <div class="container">
        <RegisterTitle />
        <RegisterForm />
      </div>
    </section>
  </div>
</template>

<script>
import RegisterTitle from '../../components/register/RegisterTitle.vue';
import RegisterForm from '../../components/register/RegisterForm.vue';

export default {
  name: 'LandingRegister',
  components: { RegisterForm, RegisterTitle },
};
</script>

<style scoped>

</style>
