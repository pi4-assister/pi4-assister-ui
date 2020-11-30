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
                      <img :src="Physic" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <span class="title text-dark">Deficiência Física</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="Eye" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <span class="title text-dark">Deficiência Visual</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="Mental" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <span class="title text-dark">Deficiência Mental</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="Deaf" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <span class="title text-dark">Deficiência Auditiva</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                <div class="card explore-feature border-0 rounded text-center bg-white">
                  <div class="card-body">
                    <div class="icon rounded-circle shadow-lg d-inline-block">
                      <img :src="Elderly" class="avatar avatar-md-sm" alt="">
                    </div>
                    <div class="content mt-3">
                      <h6 class="mb-0">
                        <span class="title text-dark">Terceira Idade (Idosos)</span>
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
import Elderly from '../../assets/images/disability/elderly.svg';
import Deaf from '../../assets/images/disability/deaf.svg';
import Eye from '../../assets/images/disability/eye.svg';
import Physic from '../../assets/images/disability/physic.svg';
import Mental from '../../assets/images/disability/mental.svg';

export default {
  name: 'LandingHero',
  data: () => ({
    BackgroundInsurence,
    Elderly,
    Deaf,
    Eye,
    Physic,
    Mental,
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
