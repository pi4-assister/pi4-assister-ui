<template>
  <section class="bg-home d-flex align-items-center">
    <layout-transition />
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-6">
          <div class="mr-lg-5">
            <img :src="Cadeirante" class="img-fluid d-block mx-auto" alt="">
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="card login-page bg-white shadow-md rounded border-0">
            <div class="card-body">
              <h4 class="card-title text-center">Entrar</h4>
              <form class="login-form mt-4">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group position-relative">
                      <label>E-mail</label>
                      <input type="email" class="form-control" placeholder="Email">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group position-relative">
                      <label>Senha</label>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex">
                      <p class="forgot-pass ml-auto">
                        <a href="auth-re-password.html" class="text-dark font-weight-bold">
                          Esqueceu sua senha ?
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-0">
                    <button class="btn btn-primary btn-block">Entrar</button>
                  </div>
                  <div class="col-12 text-center">
                    <p class="mb-0 mt-3">
                      <small class="text-dark mr-2">Ainda não tem uma conta?</small>
                      <router-link tag="a" to="/auth-register" class="text-dark font-weight-bold">
                        Cadastre-se
                      </router-link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div><!---->
        </div> <!--end col-->
      </div><!--end row-->
    </div> <!--end container-->
  </section><!--end section-->
</template>

<script>
import Cadeirante from '../../assets/images/index/cadeirante-index.svg';
import LayoutTransition from '../../components/layout/layout-transition.vue';

export default {
  name: 'AuthLogin',
  components: { LayoutTransition },
  data: () => ({
    Cadeirante,
  }),
};
</script>

<style scoped>

</style>
