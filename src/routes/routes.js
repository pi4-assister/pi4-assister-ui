import LandingClient from '../views/landing-client/LandingClient.vue';
import LayoutWrapper from '../components/layout/layout-wrapper.vue';

import AuthLogin from '../views/auth/AuthLogin.vue';
import AuthRegister from '../views/auth/AuthRegister.vue';

import Services from '../views/services/Services.vue';
import ServicesQuote from '../views/services/ServicesQuote.vue';

import Account from '../views/account/Account.vue';
import AccountUpdate from '../views/account/AccountUpdate.vue';

import MyServices from '../views/my-services/MyServices.vue';
import MyServicesQuote from '../views/my-services/MyServicesQuote.vue';

const routesClient = [
  {
    path: '/client',
    name: 'LandingClient.Index',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: LandingClient,
  },
  {
    path: '/my-services',
    name: 'MyServices.Index',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: MyServices,
  },
  {
    path: '/my-services/:id',
    name: 'MyServices.Quote',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: MyServicesQuote,
  },
  {
    path: '/services',
    name: 'Services.Index',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: Services,
  },
  {
    path: '/services/quote/:id',
    name: 'Services.Quote',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: ServicesQuote,
  },
  {
    path: '/account/profile',
    name: 'Account.Index',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: Account,
  },
  {
    path: '/account/profile/update',
    name: 'Account.Update',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: AccountUpdate,
  },
  {
    path: '/auth-register',
    name: 'Auth.Register',
    meta: {
      title: 'Assister - Cadastre-se :)',
    },
    component: AuthRegister,
  },
];

const RoutesExport = [
  {
    path: '/',
    component: LayoutWrapper,
    children: [...routesClient],
    redirect: {
      name: 'LandingClient.Index',
    },
  },
  {
    path: '*',
    redirect: {
      name: 'LandingClient.Index',
    },
  },
  {
    path: '/auth-login',
    name: 'Auth.Login',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: AuthLogin,
  },
];

export default RoutesExport;
