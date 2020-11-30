<template>
  <div id="services-wrapper">
    <MyServicesHero />
    <MyServicesList />
  </div>
</template>

<script>
import MyServicesHero from '../../components/my-services/MyServicesHero.vue';
import MyServicesList from '../../components/my-services/MyServicesList.vue';

export default {
  name: 'Services',
  components: {
    MyServicesList,
    MyServicesHero,
  },
};
</script>

<style scoped>

</style>
