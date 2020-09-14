<template>
  <div class="layout-wrapper">
    <LayoutTransition />
    <layout-navigation />
    <router-view
      id="routerView"
      class="animated fadeIn"
    />
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavigation from './layout-navigation.vue';
import LayoutFooter from './layout-footer.vue';
import LayoutTransition from './layout-transition.vue';

export default {
  components: {
    LayoutTransition,
    LayoutFooter,
    LayoutNavigation,
  },
  data: () => ({
  }),
};
</script>
<style>

</style>
