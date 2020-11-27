<template>
  <section class="section pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <div class="card custom-form border-0">
            <div class="card-body">
              <form class="rounded shadow p-4" @submit.prevent="submit">
                <ClientType v-model="customer.customerType" />
                <Accordion label="Informações Básicas" accordion="infoBasic">
                  <div class="row">
                    <InputMax v-model="customer.fullName" label="Nome Completo"
                              placeholder="ex: Nome Completo"
                              message="Your name must be between 3 and 120 characters"
                              :invalid="false"
                              :counter="false"
                    />
                    <InputDate v-model="customer.birthdate"
                               message="A data de nascimento informada é inválida"
                               :invalid="false"
                               min-date="1901-01-01"
                               max-date="today"
                    />
                  </div>
                  <div class="row">
                    <InputIdentificador v-model="customer.personIdentifier"
                                        type="cpf"
                                        label="CPF"
                                        :invalid="invalidCPF"
                    />
                    <InputContato v-model="customer.landlineNumber"
                                  type="telefone"
                                  label="Telefone"
                                  :invalid="false"
                    />
                  </div>
                  <div class="row">
                    <InputContato v-model="customer.phoneNumber"
                                  type="celular"
                                  label="Celular"
                                  :invalid="false"
                    />
                  </div>
                </Accordion>
                <Accordion label="Informações Complementares" accordion="infoComplement">
                  <div class="row">
                    <InputCheckbox label="Deficiências" :list="specialNeeds"
                                   text="label" v-model="customer.customerSpecialNeeds"
                                   custom-class="col"
                                   image
                    />
                  </div>
                  <div class="row">
                    <InputDefault v-model="customer.bio" label="Descrição"
                                  placeholder="ex: Sou deficiente auditivo, tenho dificuldade em..."
                                  message=""
                                  :invalid="false"
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
                              :invalid="invalidCEP"
                              @click="procurarCEP"
                    />
                    <InputDefault v-model="customer.address" label="Endereço"
                                  placeholder="ex: Rua José Félix"
                                  :invalid="false"
                                  type="text"
                                  readonly
                                  custom-class="col-md-4"
                    />
                    <InputDefault v-model="customer.number" label="Número"
                                  placeholder="ex: 150"
                                  :invalid="false"
                                  type="text"
                                  custom-class="col-md-2"
                    />
                  </div>
                  <div class="row">
                    <InputDefault v-model="customer.city" label="Cidade"
                                  placeholder="ex: Campinas"
                                  :invalid="false"
                                  type="text"
                                  readonly
                    />
                    <InputDefault v-model="customer.state" label="Estado"
                                  placeholder="ex: SP"
                                  :invalid="false"
                                  type="text"
                                  readonly
                    />
                  </div>
                </Accordion>
                <Accordion label="Informações de Acesso" accordion="infoAccount">
                  <div class="row">
                    <InputDefault v-model="customer.email" label="E-mail"
                                  placeholder="ex: contato@assister.com.br"
                                  message="O e-mail informado é inválido"
                                  :invalid="false"
                                  type="email"
                    />
                    <InputPassword v-model="customer.password"
                                   :invalid="false"
                    />
                  </div>
                  <div class="row">
                    <InputDefault v-model="customer.password" label="Confirmar Senha"
                                  placeholder="ex: **********"
                                  message="O e-mail informado é inválido"
                                  type="password"
                    />
                  </div>
                </Accordion>
                <div class="row mt-5">
                  <div class="col-sm-12">
                    <button class="submitBnt btn btn-primary" :disabled="false"
                            type="submit">
                      Ser Assister!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div><!--end custom-form-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { validaCPF } from '../../validations/cpf';
import { request } from '../../api/request';
import { redirect } from '../../mixins/redirect';
import { specialNeeds } from '../../config/messages';
import InputMax from '../input/InputMax.vue';
import InputIdentificador from '../input/InputIdentificador.vue';
import InputContato from '../input/InputContato.vue';
import InputDefault from '../input/InputDefault.vue';
import InputCEP from '../input/InputCEP.vue';
import InputPassword from '../input/InputPassword.vue';
import InputCheckbox from '../input/InputCheckbox.vue';
import InputDate from '../input/InputDate.vue';
import ClientType from '../auth/ClientType.vue';
import Accordion from '../utils/Accordion.vue';

export default {
  name: 'RegisterForm',
  components: {
    Accordion,
    ClientType,
    InputDate,
    InputCheckbox,
    InputPassword,
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
      birthdate: new Date().toISOString(),
      city: '',
      customerType: 'CLIENT',
      email: '',
      fullName: '',
      landlineNumber: '',
      legalPerson: true,
      password: '',
      personIdentifier: '',
      phoneNumber: '',
      state: '',
      zipCode: '',
      number: '',
      customerSpecialNeeds: [],
    },
    specialNeeds,
    invalidCEP: false,
    step: 0,
  }),
  validations: {
    customer: {
      fullName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(120),
      },
    },
  },
  computed: {
    customerPost() {
      return this.$store.state.customer.customer.post;
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
  },
  methods: {
    submit() {
      const customer = { ...this.customer };
      this.postRequest(this.customerPost, customer, 'O Usuário foi cadastrado com Sucesso!')
        .then(() => {
          this.redirectTo('LandingClient.Index');
        })
        .catch(() => {
        });
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
