<template>
  <section class="section-two bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="p-4 shadow bg-white rounded">
            <h4 class="mb-3 row justify-content-center">Procurar Serviços!</h4>
            <div class="row justify-content-center">
              <InputDate v-model="rangeDate" custom-class="col-lg-3 col-md-6"
                         message=""
                         label="Selecionar Período:"
                         :invalid="false"
                         mode="range"
              />
              <div class="col-lg-3 col-md-6">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <router-link to="/customer-services" class="searchbtn btn btn-primary btn-block">
                    Buscar
                  </router-link>
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
import InputDate from '../input/InputDate.vue';

export default {
  name: 'LandingForm',
  components: { InputDate },
  data: () => ({
    rangeDate: `${new Date().toISOString()} até ${new Date().toISOString()}`,
  }),
  created() {
    sessionStorage.setItem('rangeDate', this.rangeDate);
  },
  computed: {
    startDate() {
      const startDate = this.rangeDate.split(' até ')[0];
      return new Date(startDate).toISOString();
    },
    endDate() {
      const endDate = this.rangeDate.split(' até ')[1];
      return new Date(endDate).toISOString();
    },
  },
  watch: {
    rangeDate() {
      sessionStorage.setItem('rangeDate', this.rangeDate);
    },
  },
};
</script>

<style scoped>

</style>
