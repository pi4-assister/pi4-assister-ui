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

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="card job-box rounded shadow border-0 overflow-hidden">
            <div class="border-bottom">
              <div class="position-relative">
                <img :src="Placeholder" class="img-fluid" alt="">
                <div class="job-overlay bg-white"></div>
              </div>
              <h5 class="mb-0 position">
                <a href="page-job-detail.html" class="text-dark">Especialista</a>
                <ul class="list-unstyled h6 mb-0 text-warning">
                  <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                  <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                  <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                  <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                  <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                </ul>
              </h5>
              <ul class="list-unstyled head mb-0">
                <li class="badge badge-success badge-pill">Disponível</li>
              </ul>
            </div>
            <div class="card-body content position-relative">
              <div class="firm-logo rounded-circle shadow bg-light text-center">
                <img :src="pit" class="img-fluid rounded-circle" alt="">
              </div>
              <div class="company-detail text-center mt-3">
                <h5 class="mb-0">
                  <p class="text-dark company-name mb-0">Pedro Ciambarella</p>
                </h5>
                <p class="text-muted">
                  <a href="#" class="video-play-icon text-muted">
                    <map-pin-icon class="fea icon-sm" />
                    São Paulo
                  </a>
                </p>
              </div>
              <ul class="job-facts list-unstyled">
                <li class="list-inline-item text-muted d-block">
                  <check-icon class="fea icon-sm text-success mr-1" />
                  Cuidados de Idosos
                </li>
                <li class="list-inline-item text-muted d-block">
                  <check-icon class="fea icon-sm text-success mr-1" />
                  Fisioterapeuta
                </li>
                <li class="list-inline-item text-muted d-block">
                  <check-icon class="fea icon-sm text-success mr-1" />
                  Acompanhante de Luxo
                </li>
              </ul>
              <button type="button" class="btn btn-outline-primary btn-block">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
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
import { CheckIcon, MapPinIcon } from 'vue-feather-icons';
import Placeholder from '../../assets/images/placeholder.png';

export default {
  name: 'Services',
  components: { CheckIcon, MapPinIcon },
  data: () => ({
    Placeholder,
    pit: 'https://i.ibb.co/Wv0pmKd/Whats-App-Image-2020-11-09-at-4-28-16-PM.jpg',
  }),
};
</script>

<style scoped>

</style>
