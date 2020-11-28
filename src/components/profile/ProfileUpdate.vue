<template>
  <div class="col">
    <div class="card custom-form border-0">
      <div class="card-body p-0">
        <form class="rounded shadow p-4" @submit.prevent="submit">
          <Accordion label="Informações Básicas" accordion="infoBasic">
            <div class="row">
              <InputMax v-model="customer.fullName" label="Nome Completo"
                        placeholder="ex: Nome Completo"
                        message="O nome precisa ter entre 3 e 300 caracteres"
                        :invalid="validations.customer.fullName.$error"
                        :counter="false"
                        readonly
              />
              <InputDate v-model="customer.birthdate"
                         message="A data de nascimento informada é inválida"
                         :invalid="validations.customer.birthdate.$error"
                         min-date="1901-01-01"
                         max-date="today"
                         readonly
              />
            </div>
            <div class="row">
              <InputIdentificador v-model="customer.personIdentifier"
                                  type="cpf"
                                  label="CPF"
                                  :invalid="validationCPF"
                                  readonly
              />
              <InputContato v-model="customer.landlineNumber"
                            type="telefone"
                            label="Telefone"
                            :invalid="validations.customer.landlineNumber.$error"
              />
            </div>
            <div class="row">
              <InputContato v-model="customer.phoneNumber"
                            type="celular"
                            label="Celular"
                            :invalid="validations.customer.phoneNumber.$error"
              />
            </div>
          </Accordion>
          <Accordion label="Informações Complementares" accordion="infoComplement">
            <div class="row">
              <InputDefault v-model="customer.bio" label="Descrição"
                            placeholder="ex: Sou deficiente auditivo, tenho dificuldade em..."
                            message="A descrição deve ser preenchida"
                            :invalid="validations.customer.bio.$error"
                            type="text"
                            textarea
                            custom-class="col"
              />
            </div>
          </Accordion>
          <Accordion label="Informações de Endereço" accordion="infoAddress">
            <div class="row">
              <InputCEP v-model="customer.zipCode"
                        type="cep"
                        label="CEP"
                        :invalid="validations.customer.zipCode.$error || invalidCEP"
                        @click="procurarCEP"
              />
              <InputDefault v-model="customer.address" label="Endereço"
                            placeholder="ex: Rua José Félix"
                            :invalid="validations.customer.address.$error"
                            type="text"
                            readonly
                            custom-class="col-md-4"
              />
              <InputDefault v-model="customer.number" label="Número"
                            placeholder="ex: 150"
                            message="O número precisa ser informado"
                            :invalid="validations.customer.number.$error"
                            type="text"
                            custom-class="col-md-2"
              />
            </div>
            <div class="row">
              <InputDefault v-model="customer.city" label="Cidade"
                            placeholder="ex: Campinas"
                            :invalid="validations.customer.city.$error"
                            type="text"
                            readonly
              />
              <InputDefault v-model="customer.state" label="Estado"
                            placeholder="ex: SP"
                            :invalid="validations.customer.state.$error"
                            type="text"
                            readonly
              />
            </div>
          </Accordion>
          <div class="row mt-5">
            <div class="col-sm-12">
              <button class="submitBnt btn btn-primary" :disabled="submitButton"
                      type="submit">
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  minLength,
  maxLength,
  email,
} from 'vuelidate/lib/validators';
import { validaCPF } from '../../validations/cpf';
import { request } from '../../api/request';
import { redirect } from '../../mixins/redirect';
import { specialNeeds } from '../../config/messages';
import InputMax from '../input/InputMax.vue';
import InputIdentificador from '../input/InputIdentificador.vue';
import InputContato from '../input/InputContato.vue';
import InputDefault from '../input/InputDefault.vue';
import InputCEP from '../input/InputCEP.vue';
import InputDate from '../input/InputDate.vue';
import Accordion from '../utils/Accordion.vue';

export default {
  name: 'ProfileUpdate',
  components: {
    Accordion,
    InputDate,
    InputCEP,
    InputDefault,
    InputContato,
    InputIdentificador,
    InputMax,
  },
  mixins: [validationMixin, request, redirect],
  data: () => ({
    customer: {
      address: '',
      bio: '',
      birthdate: '',
      city: '',
      customerType: 'CLIENT',
      email: '',
      fullName: '',
      landlineNumber: '',
      legalPerson: true,
      personIdentifier: '',
      phoneNumber: '',
      state: '',
      zipCode: '',
      number: '',
      customerSpecialNeeds: [],
    },
    specialNeeds,
    invalidCEP: false,
    submitButton: false,
  }),
  validations: {
    customer: {
      fullName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(120),
      },
      personIdentifier: {
        required,
        validaCPF,
      },
      address: {
        required,
      },
      bio: {
        required,
      },
      birthdate: {
        required,
      },
      city: {
        required,
      },
      email: {
        required,
        email,
      },
      landlineNumber: {
        required,
        minLength: minLength(10),
      },
      phoneNumber: {
        required,
        minLength: minLength(11),
      },
      state: {
        required,
      },
      zipCode: {
        required,
        minLength: minLength(8),
      },
      number: {
        required,
      },
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    customerPut() {
      return this.$store.state.customer.customer.put;
    },
    customerGet() {
      return this.$store.state.customer.customer.get;
    },
    classClient() {
      return ['media key-feature align-items-center p-3 rounded-md shadow bg-white', this.value === 'CLIENT' ? 'border border-success' : ''];
    },
    classAssister() {
      return ['media key-feature align-items-center p-3 rounded-md shadow bg-white', this.value === 'ASSISTER' ? 'border border-success' : ''];
    },
    invalidCPF() {
      const { personIdentifier } = this.customer;
      return !validaCPF(personIdentifier) && personIdentifier.length === 11;
    },
    validationCPF() {
      return this.validations.customer.personIdentifier.$error || this.invalidCPF;
    },
    specialDisabilities() {
      return this.customer.customerSpecialNeedsList.map((specialNeedType) => specialNeedType);
    },
    validations() {
      return this.$v;
    },
  },
  created() {
    this.customer = { ...this.user };
    this.customer.birthdate = new Date(this.customer.birthdate).toLocaleDateString();
    this.customer.customerSpecialNeeds = this.customer.customerSpecialNeedsList.map(
      (disability) => ({
        name: disability.specialNeedType.name,
      }),
    );
  },
  methods: {
    submit() {
      this.submitButton = true;
      this.validations.$touch();
      const invalid = this.validations.$invalid;
      const customer = { ...this.customer };
      if (customer.birthdate.length !== 0) {
        customer.birthdate = new Date(customer.birthdate).toISOString();
      }
      if (!invalid) {
        this.putRequest(this.customerPut, customer.id, customer, 'O Usuário foi atualizado com Sucesso!')
          .then(() => {
            this.redirectTo('Account.Index');
          });
      }
      this.submitButton = false;
    },
    procurarCEP() {
      this.consultaCEP(this.customer.zipCode)
        .then((res) => {
          if (!res.erro) {
            this.customer.address = res.logradouro;
            this.customer.city = res.localidade;
            this.customer.state = res.uf;
            this.invalidCEP = false;
          } else {
            this.invalidCEP = true;
            this.customer.address = '';
            this.customer.city = '';
            this.customer.state = '';
          }
        });
    },
  },
};
</script>

<style scoped>

</style>
