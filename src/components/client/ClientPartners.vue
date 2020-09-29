<template>
  <!-- Partners start -->
  <section class="py-4 border-bottom border-top">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-lg-2 col-md-2 col-6 text-center py-4">
          <img
            :src="SenacImage"
            class="avatar avatar-ex-sm"
            alt=""
          >
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Partners End -->
</template>

<script>
import SenacImage from '../../assets/images/client/senac.svg';

export default {
  name: 'ClientPartners',
  data: () => ({
    SenacImage,
  }),
};
</script>

<style scoped></style>
