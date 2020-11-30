<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="sidebar sticky-bar p-4 rounded shadow">
      <div class="widget">
        <div class="row">
          <div class="col-6 mt-4 pt-2">
            <router-link :class="`accounts rounded d-block shadow text-center py-3
                                ${$route.path === '/account/profile' ? 'active' : ''}`"
                         to="/account/profile">
              <span class="pro-icons h3 text-muted"><i class="uil uil-user"></i></span>
              <h6 class="title text-dark h6 my-0">Perfil</h6>
            </router-link>
          </div>
          <div class="col-6 mt-4 pt-2">
            <router-link :class="`accounts rounded d-block shadow text-center py-3
                                ${$route.path === '/account/payments' ? 'active' : ''}`"
                         to="/account/payments"
            >
              <span class="pro-icons h3 text-muted"><i class="uil uil-transaction"></i></span>
              <h6 class="title text-dark h6 my-0">Pagamentos</h6>
            </router-link>
          </div>
          <div class="col-6 mt-4 pt-2">
            <router-link :class="`accounts rounded d-block shadow text-center py-3
                                ${$route.path === '/account/profile/update' ? 'active' : ''}`"
                         to="/account/profile/update">
              <span class="pro-icons h3 text-muted"><i class="uil uil-setting"></i></span>
              <h6 class="title text-dark h6 my-0">Editar Perfil</h6>
            </router-link>
          </div>
          <div class="col-6 mt-4 pt-2" @click="updateUser(userStore)">
            <router-link class="accounts rounded d-block shadow text-center py-3"
                         to="/client">
                    <span class="pro-icons h3 text-muted">
                      <i class="uil uil-sign-out-alt"></i>
                    </span>
              <h6 class="title text-dark h6 my-0">Sair</h6>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { userStore } from '../../store/modules/auth';

export default {
  name: 'ProfileRoutes',
  data: () => ({
    userStore,
  }),
  methods: {
    ...mapActions(['updateUser']),
  },
};
</script>

<style scoped>

</style>
