<template>
  <div id="layout-wrapper">
    <LandingHero />
    <LandingForm />
    <section class="bg-half-170 d-table w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-7">
            <div class="title-heading">
              <h1 class="heading mb-3">
                <span class="text-primary">Acessibilidade</span>
                é tornar o mundo melhor para <span class="text-primary">Todos</span>
              </h1>
              <p class="para-desc text-muted">
                Deficiente ou restrito nunca foi o indivíduo, e sim tudo
                que impede atendimento igual para casos especiais.
              </p>
              <div class="mt-4">
                <router-link :to="{ name: 'Auth.Register', params: { registerType: 'CLIENT' }}"
                             class="btn btn-primary mt-2 mr-2 btn-ser-assister"
                ><i class="mdi mdi-human-wheelchair"/> Ser Assister
                </router-link>
                <router-link :to="{ name: 'Auth.Register', params: { registerType: 'ASSISTER' }}"
                             class="btn btn-outline-primary mt-2 mr-2 btn-ser-assister"
                ><i class="mdi mdi-human-wheelchair"/> Ser Cliente
                </router-link>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img
              :src="Cadeirante"
              alt=""
            >
          </div>
        </div>
      </div>
    </section>
    <ClientType />
  </div>
</template>
<script>
import Cadeirante from '../../assets/images/index/cadeirante-index.svg';
import LandingHero from '../../components/landing/LandingHero.vue';
import LandingForm from '../../components/landing/LandingForm.vue';
import ClientType from '../../components/auth/ClientType.vue';

export default {
  name: 'LandingClient',
  components: { ClientType, LandingForm, LandingHero },
  data: () => ({
    Cadeirante,
  }),
};
</script>
