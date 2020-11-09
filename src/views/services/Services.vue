<template>
  <!-- Job List Start -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="border-bottom">
            <div class="row">
              <div class="col-lg-9 col-md-8">
                <div class="section-title">
                  <h4 class="title mb-2">Todos os Serviços</h4>
                  <p class="text-muted mb-0">Serviços mais requisitados</p>
                </div>
              </div><!--end col-->

              <div class="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="form custom-form">
                  <div class="form-group">
                    <label>Tipos de Serviços:</label>
                    <select class="form-control custom-select" id="Sortbylist-job">
                      <option>Todos</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Remote</option>
                      <option>Work From Home</option>
                    </select>
                  </div>
                </div>
              </div><!--end col-->
            </div><!--end row-->
          </div>
        </div><!--end col-->
      </div><!--end row-->

      <div class="row">
        <div class="col-12 mt-4 pt-2">
          <div class="section-title">
            <h5 class="mb-0">Serviços Recomendados:</h5>
          </div>
        </div><!--end col-->

        <ServiceWrapper v-for="i in 6" :key="i">
          <ServiceCard />
        </ServiceWrapper>
        <!-- PAGINATION START -->
        <!--<div class="col-12 mt-4 pt-2">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item"><a class="page-link" href="#" aria-label="Previous">Prev</a></li>
            <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
            <li class="page-item"><a class="page-link" href="#" aria-label="Next">Next</a></li>
          </ul>
        </div>-->
        <!-- PAGINATION END -->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Job List End -->
</template>

<script>
import ServiceCard from '../../components/services/ServiceCard.vue';
import ServiceWrapper from '../../components/services/ServiceWrapper.vue';

export default {
  name: 'Services',
  components: { ServiceWrapper, ServiceCard },
  data: () => ({}),
};
</script>

<style scoped>

</style>
