<template>
  <section class="section mt-60">
    <div class="container mt-lg-3">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 d-lg-block d-none">
          <div class="sidebar sticky-bar p-4 rounded shadow">
            <div class="widget">
              <div class="row">
                <div class="col-6 mt-4 pt-2">
                  <router-link class="accounts active rounded d-block shadow text-center py-3"
                               to="/account/profile">
                    <span class="pro-icons h3 text-muted"><i class="uil uil-user"></i></span>
                    <h6 class="title text-dark h6 my-0">Perfil</h6>
                  </router-link>
                </div>
                <div class="col-6 mt-4 pt-2">
                  <a href="#" class="accounts rounded d-block shadow text-center py-3">
                    <span class="pro-icons h3 text-muted">
                      <i class="uil uil-star"></i>
                    </span>
                    <h6 class="title text-dark h6 my-0">Avaliações</h6>
                  </a>
                </div>
                <div class="col-6 mt-4 pt-2">
                  <a href="#" class="accounts rounded d-block shadow text-center py-3">
                    <span class="pro-icons h3 text-muted"><i class="uil uil-transaction"></i></span>
                    <h6 class="title text-dark h6 my-0">Pagamentos</h6>
                  </a>
                </div>
                <div class="col-6 mt-4 pt-2">
                  <router-link class="accounts rounded d-block shadow text-center py-3"
                               to="/account/profile/settings">
                    <span class="pro-icons h3 text-muted"><i class="uil uil-setting"></i></span>
                    <h6 class="title text-dark h6 my-0">Configurações</h6>
                  </router-link>
                </div>
                <div class="col-6 mt-4 pt-2">
                  <a href="#" class="accounts rounded d-block shadow text-center py-3">
                    <span class="pro-icons h3 text-muted">
                      <i class="uil uil-sign-out-alt"></i>
                    </span>
                    <h6 class="title text-dark h6 my-0">Logout</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-12">
          <div class="border-bottom pb-4">
            <h5>{{ user.fullName }}</h5>
            <p class="text-muted mb-0">{{ user.bio }}</p>
          </div>
          <div class="border-bottom pb-4">
            <div class="row">
              <div class="col-md-12 mt-4">
                <h5>Informações Pessoais:</h5>
                <div class="mt-4">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">E-mail:</h6>
                      <a href="javascript:void(0)" class="text-muted">client@client.com</a>
                    </div>
                  </div>
                  <div class="media align-items-center mt-3">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">Localização :</h6>
                      <a href="javascript:void(0)" class="text-muted">São Paulo, SP</a>
                    </div>
                  </div>
                  <div class="media align-items-center mt-3">
                    <div class="media-body">
                      <h6 class="text-primary mb-0">Celular:</h6>
                      <a href="javascript:void(0)" class="text-muted">(12) 92546-4896</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccountProfile',
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>

</style>
