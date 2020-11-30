<template>
  <div class="card job-box rounded shadow border-0 overflow-hidden">
    <div class="border-bottom">
      <div class="position-relative">
        <img :src="Placeholder" class="img-fluid" alt="">
        <div class="job-overlay bg-white"></div>
      </div>
      <h5 class="mb-0 position">
        <span class="text-dark">&nbsp;</span>
        <ul class="list-unstyled h6 mb-0 text-warning" >
          <li v-for="star in assister['rate']" :key="`rate-${star}`" class="list-inline-item mb-0">
            <i class="mdi mdi-star"></i>
          </li>
        </ul>
      </h5>
      <ul class="list-unstyled head mb-0">
        <li class="badge badge-warning badge-pill" v-if="service['serviceStatus'] === ''">
          Pendente
        </li>
        <li class="badge badge-success badge-pill"
            v-if="service['serviceStatus'] === 'IN_PROGRESS'">
          {{ service['serviceStatus'] | FiltroStatusService }}
        </li>
        <li class="badge badge-danger badge-pill" v-else>
          {{ service['serviceStatus'] | FiltroStatusService }}
        </li>
      </ul>
    </div>
    <div class="card-body content position-relative d-flex flex-column card-assister">
      <div class="firm-logo rounded-circle shadow bg-light text-center">
        <img :src="assister['photoUrl']" class="img-fluid rounded-circle" alt="">
      </div>
      <div class="company-detail text-center mt-3">
        <h5 class="mb-0">
          <p class="text-dark company-name mb-0">{{ `${assister['fullName']}` }}</p>
        </h5>
        <p class="text-muted">
          <a href="#" class="video-play-icon text-muted">
            <map-pin-icon class="fea icon-sm"/>
            {{ `${assister['city']}, ${assister['state']}` }}
          </a>
        </p>
      </div>
      <div class="company-detail mt-5">
        <p class="text-muted">
          <a href="#" class="text-muted">
            {{ service['description'] }}
          </a>
        </p>
      </div>
      <div class="company-detail mt-5">
        <p class="text-muted text-center">
          <a href="#" class="text-muted">
            {{ `${new Date(service['startDate'])
            .toLocaleDateString()} - ${new Date(service['finalDate'])
            .toLocaleDateString()}` }}
          </a>
        </p>
      </div>
      <router-link tag="button" :to="{ name: 'MyServices.Quote', params: { id: service.id }}"
                   class="btn btn-outline-primary btn-block mt-auto">
        Mais Informações
      </router-link>
    </div>
  </div>
</template>

<script>
import { MapPinIcon } from 'vue-feather-icons';
import { specialNeeds } from '../../config/messages';
import Placeholder from '../../assets/images/placeholder.png';
import { FiltroStatusService } from '../../filters/filtro-status-service';

export default {
  name: 'MyServicesCard',
  components: {
    MapPinIcon,
  },
  filters: { FiltroStatusService },
  props: {
    assister: {
      type: Object,
    },
    service: {
      type: Object,
    },
    quote: {
      type: Object,
    },
  },
  data: () => ({
    Placeholder,
  }),
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
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
