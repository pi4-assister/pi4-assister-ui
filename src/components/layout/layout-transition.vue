<template>
  <!-- Loader -->
  <div id="preloader" :key="$route.name">
    <div id="status">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </div>
  <!-- Loader -->
</template>

<script>
export default {
  name: 'layout-transition',
  updated() {
    // eslint-disable-next-line no-undef
    $('#status')
      .fadeOut();
    // eslint-disable-next-line no-undef
    $('#preloader')
      .delay(350)
      .fadeOut('slow');
    // eslint-disable-next-line no-undef
    $('body')
      .delay(350)
      .css({
        overflow: 'visible',
      });
  },
  mounted() {
    // eslint-disable-next-line no-undef
    $('#status')
      .fadeOut();
    // eslint-disable-next-line no-undef
    $('#preloader')
      .delay(350)
      .fadeOut('slow');
    // eslint-disable-next-line no-undef
    $('body')
      .delay(350)
      .css({
        overflow: 'visible',
      });
  },
};
</script>

<style scoped>

</style>
