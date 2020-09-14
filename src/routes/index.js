import Vue from 'vue';
import VueRouter from 'vue-router';
import NPRogress from 'nprogress';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  // base: '/assister/',
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  NPRogress.start();
  document.title = to.meta.title ? to.meta.title : 'Central';
  // Ir para rota
  next();
});

router.afterEach(() => {
  NPRogress.done();
});

export default router;
