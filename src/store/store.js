import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
import { modules } from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,
});

if (module.hot) {
  module.hot.accept([
    './state',
    './getters',
    './actions',
    './mutations',
  ], () => {
    store.hotUpdate({
      // eslint-disable-next-line global-require
      state: require('./state'),
      // eslint-disable-next-line global-require
      getters: require('./getters'),
      // eslint-disable-next-line global-require
      actions: require('./actions'),
      // eslint-disable-next-line global-require
      mutations: require('./mutations'),
    });
  });
}

// eslint-disable-next-line import/prefer-default-export
export { store };
