<template>
  <section class="section p-0">
    <HomeButton />
    <div class="d-flex flex-wrap align-items-stretch mt-0">
      <div class="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
        <div class="p-4 m-3">
          <router-link to="/client">
            <img :src="logoIndex" alt="logo" class="img-fluid mb-5 mt-2">
          </router-link>
          <h4 class="text-dark font-weight-normal">
            Bem-Vindo a <span class="font-weight-bold">Assister</span>
          </h4>
          <p class="text-muted">Antes de começar, você deve realizar login!</p>
          <form autocomplete="off" name="login" @submit.prevent="submit">
            <input-email v-model="customer.username" :invalid="false" />
            <input-senha v-model="customer.password" :invalid="false" />
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg btn-icon btn-block"
                      :disabled="submitButton">
                Entrar
              </button>
            </div>
          </form>
          <div class="mt-5 text-muted text-center">
            Ainda não tem uma conta? <router-link to="/auth-register">Cadastre-se</router-link>
          </div>
          <div class="text-center mt-5 text-small">
            Copyright © Assister. Feito com 💙 por Alessandro, Pedro e Rafa
          </div>
        </div>
      </div>
      <div :class="cssClass" :style="{backgroundImage: `url(${loginBackground})`}"></div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import loginBackground from '../../assets/images/index/login-cadeirante.jpg';
import logoIndex from '../../assets/images/index/logo-index.jpg';
import { request } from '../../api/request';
import { redirect } from '../../mixins/redirect';
import InputEmail from '../../components/input/InputEmail.vue';
import InputSenha from '../../components/input/InputSenha.vue';
import HomeButton from '../../components/utils/HomeButton.vue';

export default {
  name: 'AuthLogin',
  components: { HomeButton, InputSenha, InputEmail },
  mixins: [request, redirect],
  data: () => ({
    loginBackground,
    logoIndex,
    customer: {
      username: '',
      password: '',
    },
    submitButton: false,
    cssClass: 'col-lg-8 col-12 order-2 min-vh-100 background-walk-y position-relative overlay-gradient-bottom',
  }),
  computed: {
    authPost() {
      return this.$store.state.auth.session.post;
    },
  },
  methods: {
    ...mapActions(['updateUser']),
    submit() {
      const customer = { ...this.customer };
      this.submitButton = true;
      this.authRequest(this.authPost, customer, 'O Usuário logou com Sucesso!')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response, btoa(JSON.stringify(customer)));
          sessionStorage.setItem('auth', btoa(JSON.stringify(customer)));
          this.updateUser(response);
          if (response.customerType === 'CLIENT') {
            this.redirectTo('Services.Index');
          } else {
            this.redirectTo('Account.Index');
          }
        })
        .catch((error) => {
          this.submitButton = false;
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
