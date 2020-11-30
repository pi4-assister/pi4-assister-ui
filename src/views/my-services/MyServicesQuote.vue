<template>
  <div id="services-wrapper">
    <MyServicesQuoteHero />
    <ServiceAssister />
  </div>
</template>

<script>
import ServiceAssister from '../../components/services/ServiceAssister.vue';
import MyServicesQuoteHero from '../../components/my-services/MyServicesQuoteHero.vue';

export default {
  name: 'MyServicesQuote',
  components: {
    MyServicesQuoteHero,
    ServiceAssister,
  },
};
</script>

<style scoped>

</style>
