<template>
  <!-- Hero Start -->
  <section class="bg-profile d-table w-100 bg-primary pt-0"
           :style="`background: url('${AccountBackground}') center center;`">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="card public-profile border-0 rounded shadow" style="z-index: 1;">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-lg-2 col-md-3 text-md-left text-center">
                  <img :src="user.photoUrl || AccountProfileImage"
                       class="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="">
                </div>
                <div class="col">
                  <div class="row align-items-end">
                    <div class="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                      <h3 class="title mb-0">{{ user.fullName }}</h3>
                      <small class="text-muted h6 mr-2">{{ user.bio }}</small>
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
import AccountBackground from '../../assets/images/bg.png';
import AccountProfileImage from '../../assets/images/user/login.svg';

export default {
  name: 'JobsHero',
  data: () => ({
    AccountBackground,
    AccountProfileImage,
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
