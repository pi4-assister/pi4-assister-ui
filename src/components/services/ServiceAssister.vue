<template>
  <section class="section mt-60">
    <div class="container mt-lg-3">
      <div class="row">
        <AssisterProfile />
      </div>
    </div>
  </section>
</template>

<script>
import AssisterProfile from '../assister/AssisterProfile.vue';

export default {
  name: 'ServiceAssister',
  components: { AssisterProfile },
};
</script>

<style scoped>

</style>
