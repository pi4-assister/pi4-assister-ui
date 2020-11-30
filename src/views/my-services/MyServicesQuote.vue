<template>
  <div id="services-wrapper">
    <MyServicesQuoteHero />
    <MyServicesInfo />
  </div>
</template>

<script>
import MyServicesQuoteHero from '../../components/my-services/MyServicesQuoteHero.vue';
import MyServicesInfo from '../../components/my-services/MyServicesInfo.vue';

export default {
  name: 'MyServicesQuote',
  components: {
    MyServicesInfo,
    MyServicesQuoteHero,
  },
};
</script>

<style scoped>

</style>
