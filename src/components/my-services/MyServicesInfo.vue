<template>
  <section class="section mt-60">
    <div class="container mt-lg-3">
      <Loading v-if="loading"/>
      <div v-else class="row">
        <div class="col">
          <div class="border-bottom pb-4">
            <div class="row">
              <div class="col-md-12 mt-4">
                <h5>Informações do Serviço: {{ quote.serviceStatus | FiltroStatusService }}</h5>
                <div class="mt-4">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <h6 class="text-primary mb-0" v-if="assister.customerType === 'CLIENT'">
                        Deficiências Especializadas:
                      </h6>
                      <h6 v-else class="text-primary mb-0">Deficiências:</h6>
                      <span v-for="specialNeed in disability" :key="specialNeed.id"
                            class="text-muted"> • {{ specialNeed.need.label }} <br>
                      </span>
                    </div>
                  </div>
                  <div class="media align-items-center mt-3">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">Localização:</h6>
                      <span class="text-muted">{{ `${assister.city}, ${assister.state}` }}</span>
                    </div>
                  </div>
                  <div class="media align-items-center mt-3">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">Celular:</h6>
                      <span class="text-muted"> {{ assister.phoneNumber | FiltroTelefone }} </span>
                    </div>
                  </div>
                  <div class="media align-items-center mt-3">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">Descrição do Serviço:</h6>
                      <span class="text-muted"> {{ quote.description }} </span>
                    </div>
                  </div>
                  <div class="media align-items-center mt-3">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">Período:</h6>
                      <span class="text-muted">
                        {{ rangeDate }}
                      </span>
                    </div>
                  </div>
                  <div class="media align-items-center mt-3">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">Valor do Serviço:</h6>
                      <span class="text-muted">
                       R$ {{ quote.totalPrice | FiltroDinheiro }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4" v-if="!loading">
        <div class="col">
          <router-link class="submitBnt btn btn-outline-light"
                       to="/my-services">
            Voltar
          </router-link>
          <button v-if="assisterCanAccept" class="submitBnt btn btn-primary ml-3"
                  type="button" @click="acceptService">
            Aceitar Serviço!
          </button>
          <button v-if="isServiceInProgress" class="submitBnt btn btn-success ml-3"
                  type="button" @click="finishService">
            Finalizar Serviço!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { request } from '../../api/request';
import { redirect } from '../../mixins/redirect';
import { specialNeeds } from '../../config/messages';
import { FiltroTelefone } from '../../filters/filtro-telefone';
import { FiltroDinheiro } from '../../filters/filtro-dinheiro';
import { FiltroStatusService } from '../../filters/filtro-status-service';
import Loading from '../utils/Loading.vue';

export default {
  name: 'MyServicesInfo',
  components: { Loading },
  filters: { FiltroTelefone, FiltroDinheiro, FiltroStatusService },
  mixins: [request, redirect],
  data: () => ({
    quote: {
      description: '',
      id: '',
      serviceStatus: '',
      finalDate: '',
      startDate: '',
      totalPrice: 0,
    },
    assister: {
      customerSpecialNeedsList: [],
    },
    loading: false,
  }),
  created() {
    this.loading = !this.loading;
    this.quote.assisterCustomerId = this.$route.params.id;
    this.quote.rangeDate = sessionStorage.getItem('rangeDate');
    const { id } = this.$route.params;
    this.getAssister('/api/v1/service', id)
      .then((res) => {
        if (this.user.customerType === 'CLIENT') {
          this.assister = { ...res.assisterCustomer };
        } else {
          this.assister = { ...res.clientCustomer };
        }
        this.quote = {
          description: res.description,
          id: res.id,
          serviceStatus: res.serviceStatus,
          finalDate: res.finalDate,
          startDate: res.startDate,
          totalPrice: res.totalPrice,
        };
        this.loading = !this.loading;
      });
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    specialNeeds() {
      return this.assister.customerSpecialNeedsList.map((specialNeedType) => specialNeedType);
    },
    assisterCanAccept() {
      return this.user.customerType === 'ASSISTER' && this.quote.serviceStatus === 'QUOTED';
    },
    isServiceInProgress() {
      return this.quote.serviceStatus === 'IN_PROGRESS';
    },
    disability() {
      return this.specialNeeds.map((need) => ({
        id: need.id,
        need: specialNeeds.find((special) => special.name === need.specialNeedType.name),
      }));
    },
    rangeDate() {
      return `${new Date(this.quote.startDate).toLocaleDateString()} - ${new Date(this.quote.startDate).toLocaleDateString()}`;
    },
  },
  methods: {
    acceptService() {
      const { id } = this.$route.params;
      this.requestService(`/api/v1/service/assister/accept/${id}`, 'O serviço foi aceito com sucesso!')
        .then(() => {
          this.redirectTo('MyServices.Index');
        });
    },
    finishService() {
      const { id } = this.$route.params;
      this.requestService(`/api/v1/service/finish/${id}`, 'O serviço foi finalizado com sucesso!')
        .then(() => {
          this.redirectTo('MyServices.Index');
        });
    },
  },
};
</script>

<style scoped>

</style>
