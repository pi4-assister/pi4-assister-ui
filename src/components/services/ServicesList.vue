<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="border-bottom">
            <div class="row">
              <div class="col-lg-6 col-md-8">
                <div class="section-title">
                  <h4 class="title mb-2">Todos os Serviços</h4>
                  <p class="text-muted mb-0">Serviços mais requisitados</p>
                </div>
              </div>
              <InputDate v-model="rangeDate" custom-class="col-lg-3 col-md-6 ml-auto"
                         message=""
                         label="Selecionar Período:"
                         :invalid="false"
                         mode="range"
              />
              <div class="col-lg-3 col-md-6">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <button class="searchbtn btn btn-primary btn-block"
                          type="button" @click="requestServices"
                          :disabled="loading"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div><!--end row-->
          </div>
        </div><!--end col-->
      </div><!--end row-->
      <Loading v-if="loading"/>
      <div v-else class="row">
        <div class="col-12 mt-4 pt-2">
          <div class="section-title">
            <h5 class="mb-0">Assisters Recomendados:</h5>
          </div>
        </div><!--end col-->

        <ServiceWrapper v-for="assister in assisters" :key="assister.id">
          <ServiceCard :assister="assister"/>
        </ServiceWrapper>
        <!-- PAGINATION START -->
        <!--<div class="col-12 mt-4 pt-2">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item"><a class="page-link" href="#" aria-label="Previous">Prev</a></li>
            <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
            <li class="page-item"><a class="page-link" href="#" aria-label="Next">Next</a></li>
          </ul>
        </div>-->
        <!-- PAGINATION END -->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Job List End -->
</template>

<script>
import { request } from '../../api/request';

import ServiceCard from './ServiceCard.vue';
import ServiceWrapper from './ServiceWrapper.vue';
import InputDate from '../input/InputDate.vue';
import Loading from '../utils/Loading.vue';

export default {
  name: 'ServicesList',
  components: {
    Loading,
    InputDate,
    ServiceWrapper,
    ServiceCard,
  },
  mixins: [request],
  data: () => ({
    assisters: [],
    rangeDate: sessionStorage.getItem('rangeDate'),
    loading: false,
  }),
  computed: {
    getAssisters() {
      return this.$store.state.service.assisters;
    },
    startDate() {
      const startDate = this.rangeDate.split(' até ')[0];
      return new Date(startDate).toISOString();
    },
    endDate() {
      const endDate = this.rangeDate.split(' até ')[1];
      return new Date(endDate).toISOString();
    },
  },
  created() {
    this.requestServices();
  },
  methods: {
    requestServices() {
      this.loading = true;
      this.getRequest(`${this.getAssisters}?dateF=${this.endDate}&dateI=${this.startDate}`)
        .then((res) => {
          this.assisters = res;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>

</style>
