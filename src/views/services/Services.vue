<template>
  <div id="services-wrapper">
    <ServicesHero />
    <ServicesList />
  </div>
</template>

<script>
import ServicesList from '../../components/services/ServicesList.vue';
import ServicesHero from '../../components/services/ServicesHero.vue';

export default {
  name: 'Services',
  components: {
    ServicesHero,
    ServicesList,
  },
};
</script>

<style scoped>

</style>
