<template>
  <RegisterWrapper :step="step">
    <form class="login-form mt-4" autocomplete="off" @submit.prevent="submit">
      <RegisterStep v-show="step === 0">
        <div class="row">
          <InputMax v-model="customer.fullName" label="Nome Completo"
                    placeholder="ex: Nome Completo"
                    message="Your name must be between 3 and 120 characters"
                    :invalid="false"
                    :counter="false"
                    custom-class="col-lg-12"
          />
        </div>
        <div class="row">
          <InputDefault v-model="customer.birthdate" label="Data de Nascimento"
                        placeholder="ex: 01/01/1990"
                        message="A data de nascimento informada é inválida"
                        :invalid="false"
                        type="text"
                        custom-class="col-lg-12"
          />
        </div>
        <div class="row">
          <InputIdentificador v-model="customer.personIdentifier"
                              type="cpf"
                              label="CPF"
                              custom-class="col-lg-12"
                              :invalid="invalidCPF"
          />
        </div>
      </RegisterStep>
      <RegisterStep v-show="step === 1">
        <div class="row">
          <InputContato v-model="customer.landlineNumber"
                        type="telefone"
                        label="Telefone"
                        custom-class="col-lg-12"
                        :invalid="false"
          />
        </div>
        <div class="row">
          <InputContato v-model="customer.phoneNumber"
                        type="celular"
                        label="Celular"
                        custom-class="col-lg-12"
                        :invalid="false"
          />
        </div>
      </RegisterStep>
      <RegisterStep v-show="step === 2">
        <div class="row">
          <InputCheckbox  label="Deficiências" :list="specialNeeds"
                          text="label" v-model="customer.customerSpecialNeeds" />
        </div>
        <div class="row">
          <InputDefault v-model="customer.bio" label="Descrição"
                        placeholder="ex: Sou deficiente auditivo, tenho dificuldade em..."
                        message=""
                        :invalid="false"
                        type="text"
                        custom-class="col-lg-12"
                        textarea
          />
        </div>
      </RegisterStep>
      <RegisterStep v-show="step === 3">
        <div class="row">
          <InputCEP v-model="customer.zipCode"
                    type="cep"
                    label="CEP"
                    custom-class="col-lg-12"
                    :invalid="false"
                    @click="procurarCEP"
          />
        </div>
        <div class="row">
          <InputDefault v-model="customer.address" label="Endereço"
                        placeholder="ex: Rua José Félix"
                        :invalid="false"
                        type="text"
                        custom-class="col-lg-8"
                        readonly
          />
          <InputDefault v-model="customer.number" label="Número"
                        placeholder="ex: 150"
                        :invalid="false"
                        type="text"
                        custom-class="col-lg-4"
          />
        </div>
        <div class="row">
          <InputDefault v-model="customer.city" label="Cidade"
                        placeholder="ex: Campinas"
                        :invalid="false"
                        type="text"
                        custom-class="col-lg-8"
                        readonly
          />
          <InputDefault v-model="customer.state" label="Estado"
                        placeholder="ex: SP"
                        :invalid="false"
                        type="text"
                        custom-class="col-lg-4"
                        readonly
          />
        </div>
      </RegisterStep>
      <RegisterStep v-show="step === 4">
        <div class="row">
          <InputDefault v-model="customer.email" label="E-mail"
                        placeholder="ex: contato@assister.com.br"
                        message="O e-mail informado é inválido"
                        :invalid="false"
                        type="email"
                        custom-class="col-lg-12"
          />
        </div>
        <div class="row">
          <InputPassword v-model="customer.password"
                         :invalid="false"
                         custom-class="col-lg-12"
          />
        </div>
        <div class="row">
          <InputDefault v-model="customer.password" label="Confirmar Senha"
                        placeholder="ex: **********"
                        message="O e-mail informado é inválido"
                        type="password"
                        custom-class="col-lg-12"
          />
        </div>
      </RegisterStep>
      <div class="row" v-show="step !== 4">
        <div v-show="step !== 0" class="col-lg-6 mb-0">
          <button class="btn btn-light btn-block"
                  type="button"
                  @click="step--">
            Voltar
          </button>
        </div>
        <div :class="['mb-0 ml-auto', step === 0 ? 'col-lg-12' : 'col-lg-6']">
          <button class="btn btn-primary btn-block" :disabled="stepDisabled"
                  type="button"
                  @click="step++">
            Continuar
          </button>
        </div>
      </div>
      <div class="row" v-show="step === 4">
        <div class="mb-3 ml-auto col-lg-12">
          <button class="btn btn-light btn-block" :disabled="false"
                  type="button"
                  @click="step--">
            Voltar
          </button>
        </div>
      </div>
      <div class="row" v-show="step === 4">
        <div class="mb-0 ml-auto col-lg-12">
          <button class="btn btn-primary btn-block" :disabled="false"
                  type="submit">
            Ser Assister!
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="mb-0 mt-3">
            <small class="text-dark mr-2">Já tem uma conta?</small>
            <router-link tag="a" to="/auth-login" class="text-dark font-weight-bold">
              Entre
            </router-link>
          </p>
        </div>
      </div>
    </form>
  </RegisterWrapper>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { validaCPF } from '../../validations/cpf';
import { request } from '../../api/request';
import { redirect } from '../../mixins/redirect';
import { specialNeeds } from '../../config/messages';
import RegisterWrapper from './RegisterWrapper.vue';
import InputMax from '../input/InputMax.vue';
import InputIdentificador from '../input/InputIdentificador.vue';
import RegisterStep from './RegisterStep.vue';
import InputContato from '../input/InputContato.vue';
import InputDefault from '../input/InputDefault.vue';
import InputCEP from '../input/InputCEP.vue';
import InputPassword from '../input/InputPassword.vue';
import InputCheckbox from '../input/InputCheckbox.vue';

export default {
  name: 'RegisterForm',
  components: {
    InputCheckbox,
    InputPassword,
    InputCEP,
    InputDefault,
    InputContato,
    RegisterStep,
    InputIdentificador,
    InputMax,
    RegisterWrapper,
  },
  mixins: [validationMixin, request, redirect],
  data: () => ({
    customer: {
      address: '',
      bio: '',
      birthdate: '2020-10-04T18:47:04.375Z',
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
    stepDisabled() {
      let retorno = true;
      if (this.step === 0) {
        if (this.customer.fullName.length >= 4 && validaCPF(this.customer.personIdentifier)) {
          retorno = false;
        }
      } else if (this.step === 1) {
        if (this.customer.phoneNumber.length >= 11 && this.customer.landlineNumber.length >= 10) {
          retorno = false;
        }
      } else {
        retorno = false;
      }
      return retorno;
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
          this.customer.address = res.logradouro;
          this.customer.city = res.localidade;
          this.customer.state = res.uf;
        });
    },
  },
};
</script>

<style scoped>

</style>
