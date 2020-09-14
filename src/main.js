import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import router from './routes';

// [ Import JavaScripts ]
import 'bootstrap';
import './plugins/app';

// [ Import Styles ]

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import '@mdi/font/css/materialdesignicons.css';
import 'izitoast/dist/css/iziToast.css';
import './assets/scss/style.scss';

// [ Vuex ]
import { store } from './store/store';

Vue.use(VueTheMask);

//  [ Start VueJS ]

// eslint-disable-next-line
new Vue({
  el: '#container',
  store,
  router,
});
