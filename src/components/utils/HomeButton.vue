<template>
  <div id="home-button" v-show="$route.name !== 'LandingClient.Index'">
    <router-link class="media key-feature align-items-center p-3 rounded-md shadow"
                 to="/client"
                 tag="div"
                 role="button"
    >
      <div class="icon text-center rounded-circle">
        <home-icon />
      </div>
    </router-link>
  </div>
</template>

<script>
import { HomeIcon } from 'vue-feather-icons';

export default {
  name: 'HomeButton',
  components: {
    HomeIcon,
  },
};
</script>

<style scoped>
#home-button {
  top: 150px;
  position: fixed;
  margin: 1em;
  right: -14px;
  z-index: 900;
  height: 56px;

  &:hover {
    height: auto;
  }

  &:hover {
    opacity: 1;
    width: 40px;
    height: 40px;
    margin: 15px auto 0;
    visibility: visible;
  }

}

</style>
