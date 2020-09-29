<template>
  <!-- Footer Start -->
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-12 mb-0 mb-md-4 pb-0 pb-md-2">
          <a
            href="#"
            class="logo-footer"
          >
            <img
              :src="LogoWhite"
              height="100"
              class="image-center rounded"
              alt=""
            >
          </a>
          <p class="mt-4 text-center">
            Acessibilidade para todos. <br>
            Responsabilidade de cada um.
          </p>
        </div>
        <!--end col-->
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </footer>
  <!--end footer-->
</template>

<script>
import LogoWhite from '../../assets/images/index/logo-500-white.jpg';

export default {
  name: 'LayoutFooter',
  data: () => ({
    LogoWhite,
  }),
};
</script>

<style scoped></style>
