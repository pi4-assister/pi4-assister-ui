<template>
  <section class="bg-half-170 bg-primary d-table w-100" :style="backgroundUrl">
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div class="col-lg-12">
          <div class="title-heading text-center">
            <h1 class="heading title-dark text-white mb-3">Meus Serviços</h1>
            <p class="para-desc mx-auto text-white">
              Abaixo será possível visualizar todos os serviços requisitados!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BackgroundInsurence from '../../assets/images/insurance/bg.png';

export default {
  name: 'MyServicesHero',
  data: () => ({
    BackgroundInsurence,
  }),
  computed: {
    backgroundUrl() {
      return `background: url('${this.BackgroundInsurence}') center center;`;
    },
  },
};
</script>

<style scoped>

</style>
