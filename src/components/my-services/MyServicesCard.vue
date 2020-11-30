<template>
  <div class="card job-box rounded shadow border-0 overflow-hidden">
    <div class="card-body content position-relative d-flex flex-column card-assister">
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

export default {
  name: 'MyServicesCard',
  components: {
    MapPinIcon,
  },
  props: {
    assister: {
      type: Object,
    },
    service: {
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
