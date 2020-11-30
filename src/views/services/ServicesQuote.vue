<template>
  <div id="services-wrapper">
    <QuoteHero />
    <ServiceAssister />
  </div>
</template>

<script>
import QuoteHero from '../../components/quote/QuoteHero.vue';
import ServiceAssister from '../../components/services/ServiceAssister.vue';

export default {
  name: 'Services',
  components: {
    ServiceAssister,
    QuoteHero,
  },
};
</script>

<style scoped>

</style>
