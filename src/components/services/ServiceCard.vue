<template>
  <div class="card job-box rounded shadow border-0 overflow-hidden">
    <div class="border-bottom">
      <div class="position-relative">
        <img :src="Placeholder" class="img-fluid" alt="">
        <div class="job-overlay bg-white"></div>
      </div>
      <h5 class="mb-0 position">
        <span class="text-dark">Assister</span>
        <ul class="list-unstyled h6 mb-0 text-warning" >
          <li v-for="star in assister['rate']" :key="`rate-${star}`" class="list-inline-item mb-0">
            <i class="mdi mdi-star"></i>
          </li>
        </ul>
      </h5>
      <ul class="list-unstyled head mb-0">
        <li class="badge badge-success badge-pill">Disponível</li>
      </ul>
    </div>
    <div class="card-body content position-relative d-flex flex-column card-assister">
      <div class="firm-logo rounded-circle shadow bg-light text-center">
        <img :src="assister['photoUrl']" class="img-fluid rounded-circle" alt="">
      </div>
      <div class="company-detail text-center mt-3">
        <h5 class="mb-0">
          <p class="text-dark company-name mb-0">{{ assister['fullName'] }}</p>
        </h5>
        <p class="text-muted">
          <a href="#" class="video-play-icon text-muted">
            <map-pin-icon class="fea icon-sm"/>
            {{ `${assister['city']}, ${assister['state']}` }}
          </a>
        </p>
      </div>
      <ul class="job-facts list-unstyled" v-for="specialNeed in disability.slice(0, 3)"
          :key="specialNeed.id">
        <li class="list-inline-item text-muted d-block">
          <check-icon class="fea icon-sm text-success mr-1"/>
          {{ specialNeed.need.label }}
        </li>
      </ul>
      <div v-if="!userAuthenticated" class="mt-auto w-100">
        <router-link to="/auth-register" class="btn btn-outline-light">
          Cadastre-se
        </router-link>
        <router-link to="/auth-login" class="btn btn-primary float-right">
          Entrar
        </router-link>
      </div>
      <router-link v-else tag="button" :to="{ name: 'Services.Quote', params: { id: assister.id }}"
                   class="btn btn-outline-primary btn-block mt-auto">
        Solicitar Orçamento
      </router-link>
    </div>
  </div>
</template>

<script>
import { CheckIcon, MapPinIcon } from 'vue-feather-icons';
import { specialNeeds } from '../../config/messages';
import Placeholder from '../../assets/images/placeholder.png';

export default {
  name: 'ServiceCard',
  components: {
    CheckIcon,
    MapPinIcon,
  },
  props: {
    assister: {
      type: Object,
    },
  },
  data: () => ({
    Placeholder,
    pit: 'https://i.ibb.co/Wv0pmKd/Whats-App-Image-2020-11-09-at-4-28-16-PM.jpg',
  }),
  computed: {
    userAuthenticated() {
      return this.$store.getters.userAuthenticated;
    },
    specialNeeds() {
      return this.assister.specialNeeds.map((specialNeedType) => specialNeedType);
    },
    disability() {
      return this.specialNeeds.map((need) => ({
        id: need.specialNeedType.id,
        type: need.specialNeedType.name,
        need: specialNeeds.find((special) => special.name === need.specialNeedType.name),
      }));
    },
  },
};
</script>

<style scoped>

</style>
