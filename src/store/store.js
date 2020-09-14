import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import { modules } from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  state,
  // getters,
  // mutations,
  // actions
});

if (module.hot) {
  module.hot.accept([
    './state',
  ], () => {
    store.hotUpdate({
      state,
    });
  });
}

// eslint-disable-next-line import/prefer-default-export
export { store };
