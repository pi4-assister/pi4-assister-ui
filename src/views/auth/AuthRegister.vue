<template>
  <div class="layout-wrapper">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../../components/register/RegisterForm.vue';

export default {
  name: 'AuthRegister',
  components: { RegisterForm },
  data: () => ({}),
};
</script>

<style scoped>

</style>
