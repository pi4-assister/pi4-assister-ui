<template>
  <!-- Footer Start -->
  <footer class="footer footer-bar">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="text-sm-left">
            <p class="mb-0">&copy; 2020 Assister. Construído com
              <i class="mdi mdi-heart text-danger"></i> por
              Alessandro, Pedro e Rafa.
            </p>
          </div>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </footer><!--end footer-->
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
