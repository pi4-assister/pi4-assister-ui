import LandingClient from '../views/landing-client/LandingClient.vue';
import LandingRegister from '../views/landing-client/LandingRegister.vue';
import LayoutWrapper from '../components/layout/layout-wrapper.vue';

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
    path: '/register',
    name: 'LandingClient.Register',
    meta: {
      title: 'Assister - Welcome :)',
    },
    component: LandingRegister,
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
];

export default RoutesExport;
