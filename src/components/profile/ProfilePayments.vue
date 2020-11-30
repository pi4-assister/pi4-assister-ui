<template>
  <div class="col-lg-8 col-12">
    <div class="rounded shadow p-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Formas de Pagamento:</h5>
        <!--<button type="button" class="btn btn-primary">
          Adicionar
        </button>-->
      </div>
      <div class="row">
        <div class="col-md-6 mt-4 pt-2">
          <div class="card rounded shadow bg-light border-0">
            <div class="card-body">
              <img :src="Master" height="60" class="text-right" alt="">
              <div class="mt-4">
                <h5 class="text-dark">•••• •••• •••• 4559</h5>
                <div class="d-flex justify-content-between">
                  <p class="h6 text-muted mb-0">{{ user.fullName }}</p>
                  <h6 class="mb-0 text-dark">Exp: <span class="text-muted">10/22</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4 pt-2">
          <div class="card rounded shadow bg-dark border-0">
            <div class="card-body">
              <img :src="Visa" height="60" class="text-right" alt="">
              <div class="mt-4">
                <h5 class="text-light">•••• •••• •••• 9856</h5>
                <div class="d-flex justify-content-between">
                  <p class="h6 text-muted mb-0">{{ user.fullName }}</p>
                  <h6 class="mb-0 text-muted">Exp: <span class="text-muted">01/24</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!--end col-->
</template>

<script>
import Master from '../../assets/images/payments/payment/master.png';
import Visa from '../../assets/images/payments/payment/visaa.png';

export default {
  name: 'ProfilePayments',
  data: () => ({
    Master,
    Visa,
  }),
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>

</style>
