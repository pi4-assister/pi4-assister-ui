<template>
  <section class="bg-half-170 bg-primary d-table w-100" :style="backgroundUrl">
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div class="col-lg-12">
          <div class="title-heading text-center">
            <h1 class="heading title-dark text-white mb-3">Assister</h1>
            <p class="para-desc mx-auto text-white">
              O melhor lugar para solicitar serviços rápidos com os melhores preços do mercado!
            </p>
            <div class="row mt-4 pt-2 justify-content-center">
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="HealthSVG" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <a href="#" class="title text-dark">Deficiência Física</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="HealthSVG" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <a href="#" class="title text-dark">Deficiência Visual</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="HealthSVG" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <a href="#" class="title text-dark">Deficiência Mental</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="TermLife" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <a href="#" class="title text-dark">Deficiência Auditiva</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div><!--end col-->
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="FamilyHealth" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <a href="#" class="title text-dark">Terceira Idade (Idosos)</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BackgroundInsurence from '../../assets/images/insurance/bg.png';
import HealthSVG from '../../assets/images/insurance/health.svg';
import TermLife from '../../assets/images/insurance/term-life.svg';
import FamilyHealth from '../../assets/images/insurance/family-health.svg';

export default {
  name: 'LandingHero',
  data: () => ({
    BackgroundInsurence,
    HealthSVG,
    TermLife,
    FamilyHealth,
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
