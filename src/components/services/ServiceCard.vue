<template>
  <div class="card job-box rounded shadow border-0 overflow-hidden">
    <div class="border-bottom">
      <div class="position-relative">
        <img :src="Placeholder" class="img-fluid" alt="">
        <div class="job-overlay bg-white"></div>
      </div>
      <h5 class="mb-0 position">
        <a href="page-job-detail.html" class="text-dark">Especialista</a>
        <ul class="list-unstyled h6 mb-0 text-warning">
          <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
          <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
          <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
          <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
          <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
        </ul>
      </h5>
      <ul class="list-unstyled head mb-0">
        <li class="badge badge-success badge-pill">Disponível</li>
      </ul>
    </div>
    <div class="card-body content position-relative">
      <div class="firm-logo rounded-circle shadow bg-light text-center">
        <img :src="pit" class="img-fluid rounded-circle" alt="">
      </div>
      <div class="company-detail text-center mt-3">
        <h5 class="mb-0">
          <p class="text-dark company-name mb-0">Pedro Ciambarella</p>
        </h5>
        <p class="text-muted">
          <a href="#" class="video-play-icon text-muted">
            <map-pin-icon class="fea icon-sm"/>
            São Paulo
          </a>
        </p>
      </div>
      <ul class="job-facts list-unstyled">
        <li class="list-inline-item text-muted d-block">
          <check-icon class="fea icon-sm text-success mr-1"/>
          Cuidados de Idosos
        </li>
        <li class="list-inline-item text-muted d-block">
          <check-icon class="fea icon-sm text-success mr-1"/>
          Fisioterapeuta
        </li>
        <li class="list-inline-item text-muted d-block">
          <check-icon class="fea icon-sm text-success mr-1"/>
          Acompanhante de Luxo
        </li>
      </ul>
      <button type="button" class="btn btn-outline-primary btn-block">
        Solicitar Orçamento
      </button>
    </div>
  </div>
</template>

<script>
import { CheckIcon, MapPinIcon } from 'vue-feather-icons';
import Placeholder from '../../assets/images/placeholder.png';

export default {
  name: 'ServiceCard',
  components: { CheckIcon, MapPinIcon },
  data: () => ({
    Placeholder,
    pit: 'https://i.ibb.co/Wv0pmKd/Whats-App-Image-2020-11-09-at-4-28-16-PM.jpg',
  }),
};
</script>

<style scoped>

</style>
