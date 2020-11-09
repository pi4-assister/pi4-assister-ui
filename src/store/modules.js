import { moduleCustomer } from './modules/customer';
import { moduleAuth } from './modules/auth';

// eslint-disable-next-line import/prefer-default-export
export const modules = {
  customer: moduleCustomer,
  auth: moduleAuth,
};
