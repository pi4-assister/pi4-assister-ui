<template>
  <section class="bg-home d-flex align-items-center">
    <layout-transition />
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-6">
          <div class="mr-lg-5">
            <img :src="Cadeirante" class="img-fluid d-block mx-auto" alt="">
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="card login-page bg-white shadow-md rounded border-0">
            <div class="card-body">
              <h4 class="card-title text-center">Ser Assister!</h4>
              <p class="text-center text-muted">
                Solicitamos que preencha todas as informações!
              </p>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cadeirante from '../../assets/images/index/cadeirante-index.svg';
import LayoutTransition from '../layout/layout-transition.vue';

export default {
  name: 'RegisterWrapper',
  components: { LayoutTransition },
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    Cadeirante,
  }),
};
</script>

<style scoped>

</style>
