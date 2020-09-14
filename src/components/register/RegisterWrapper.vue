<template>
  <div class="row justify-content-center">
    <div class="col-lg-10 col-md-7">
      <div class="card custom-form border-0">
        <div class="card-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterWrapper',
};
</script>

<style scoped>

</style>
