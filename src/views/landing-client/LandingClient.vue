<template>
  <div class="layout-wrapper">
    <ClientHero/>
    <ClientPartners/>
    <ClientContact/>
  </div>
</template>
<script>
import ClientHero from '../../components/client/ClientHero.vue';
import ClientPartners from '../../components/client/ClientPartners.vue';
import ClientContact from '../../components/client/ClientContact.vue';

export default {
  name: 'LandingClient',
  components: {
    ClientContact,
    ClientPartners,
    ClientHero,
  },
  data: () => ({}),

};
</script>
