<template>
  <div class="layout-wrapper">
    <HomeButton />
    <LayoutTransition />
    <layout-navigation />
    <layout-navigation-mobile />
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
import LayoutNavigationMobile from './layout-navigation-mobile.vue';
import HomeButton from '../utils/HomeButton.vue';

export default {
  components: {
    HomeButton,
    LayoutNavigationMobile,
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
