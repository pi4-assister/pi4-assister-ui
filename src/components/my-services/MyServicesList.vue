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
                  <p class="text-muted mb-0">Serviços requisitados</p>
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
            <h5 class="mb-0" v-if="user.customerType === 'CLIENT'">Orçamentos Realizados:</h5>
            <h5 class="mb-0" v-else>Orçamentos Solicitados:</h5>
          </div>
        </div>
        <ServiceWrapper v-for="assister in assisters" :key="assister.id">
          <MyServicesCard v-if="user.customerType === 'CLIENT'"
                          :assister="assister.assisterCustomer" :service="assister" />
          <MyServicesCard v-else :assister="assister.clientCustomer" :service="assister" />
        </ServiceWrapper>
      </div>
    </div>
  </section>
</template>

<script>
import { request } from '../../api/request';

import Loading from '../utils/Loading.vue';
import ServiceWrapper from '../services/ServiceWrapper.vue';
import MyServicesCard from './MyServicesCard.vue';

export default {
  name: 'MyServicesList',
  components: {
    MyServicesCard,
    ServiceWrapper,
    Loading,
  },
  mixins: [request],
  data: () => ({
    assisters: [],
    loading: false,
  }),
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.requestServices();
  },
  methods: {
    requestServices() {
      this.loading = true;
      this.getAssister(`api/v1/customer/${this.user.id}/services`)
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
