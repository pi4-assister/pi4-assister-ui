<template>
  <div class="col">
    <div class="border-bottom pb-4">
      <div class="row">
        <div class="col-md-12 mt-4">
          <h5>Informações Básicas do Assister:</h5>
          <div class="mt-4">
            <div class="media align-items-center">
              <div class="media-body">
                <h6 class="text-primary mb-0">Especialidades:</h6>
                <span class="text-muted" v-for="specialNeed in disability" :key="specialNeed.id">
                  • {{ specialNeed.need.label }} <br>
                </span>
              </div>
            </div>
            <div class="media align-items-center mt-3">
              <div class="media-body">
                <h6 class="text-primary mb-0">Localização:</h6>
                <span class="text-muted">
                  {{ `${assister.city}, ${assister.state}` }}
                </span>
              </div>
            </div>
            <div class="media align-items-center mt-3">
              <div class="media-body">
                <h6 class="text-primary mb-0">Celular:</h6>
                <span class="text-muted">
                  {{ assister.phoneNumber }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form class="pb-4" @submit.prevent="submit">
        <div class="row mt-4">
          <InputDefault v-model="quote.description" textarea custom-class="col-md-12"
                        :invalid="validations.quote.description.$error"
                        message="A descrição deve ter entre 12 e 300 caracteres"
                        label="Descrição" placeholder="ex: Gostaria de solicitar ajuda para..."
          />
        </div>
        <div class="row">
          <InputDate v-model="quote.rangeDate"
                     custom-class="col-4"
                     label="Período" placeholder="ex: xx/xx/xxxx até xx/xx/xxxx"
                     message="O período informado é inválido"
                     :invalid="false"
                     min-date="today"
                     mode="range"
          />
        </div>
        <div class="row">
          <div class="col">
            <router-link class="submitBnt btn btn-outline-light"
                         to="/services">
              Voltar
            </router-link>
            <button class="submitBnt btn btn-primary ml-3"
                    type="submit">
              Solicitar Orçamento!
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';
import InputDefault from '../input/InputDefault.vue';
import InputDate from '../input/InputDate.vue';
import { request } from '../../api/request';
import { redirect } from '../../mixins/redirect';
import { specialNeeds } from '../../config/messages';

export default {
  name: 'AssisterProfile',
  components: { InputDate, InputDefault },
  mixins: [validationMixin, request, redirect],
  data: () => ({
    quote: {
      description: '',
      assisterCustomerId: '',
      finalDate: '',
      startDate: '',
      rangeDate: new Date().toISOString(),
    },
    assister: {
      customerSpecialNeedsList: [],
    },
  }),
  validations: {
    quote: {
      description: {
        required,
        minLength: minLength(12),
        maxLength: maxLength(300),
      },
    },
  },
  created() {
    this.quote.assisterCustomerId = this.$route.params.id;
    this.quote.rangeDate = sessionStorage.getItem('rangeDate');
    const { id } = this.$route.params;
    this.getAssister('/api/v1/customer', id).then((res) => {
      this.assister = { ...res };
    });
  },
  computed: {
    specialNeeds() {
      return this.assister.customerSpecialNeedsList.map((specialNeedType) => specialNeedType);
    },
    disability() {
      return this.specialNeeds.map((need) => ({
        id: need.id,
        need: specialNeeds.find((special) => special.name === need.specialNeedType.name),
      }));
    },
    startDate() {
      const startDate = this.quote.rangeDate.split(' até ')[0];
      return new Date(startDate).toISOString();
    },
    endDate() {
      const endDate = this.quote.rangeDate.split(' até ')[1];
      return new Date(endDate || this.startDate).toISOString();
    },
    validations() {
      return this.$v;
    },
  },
  watch: {
    startDate() {
      this.quote.startDate = this.startDate;
    },
    endDate() {
      this.quote.finalDate = this.endDate;
    },
  },
  methods: {
    submit() {
      this.validations.$touch();
      const invalid = this.validations.$invalid;
      const quote = { ...this.quote };
      if (!invalid) {
        this.quoteRequest('/api/v1/service/quote', quote, 'O orçamento foi enviado com sucesso!')
          .then((res) => {
            this.redirectTo('MyServices.Quote', res.id);
          });
      }
    },
  },
};
</script>

<style scoped>

</style>
