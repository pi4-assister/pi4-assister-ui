import { moduleCustomer } from './modules/customer';
import { moduleAuth } from './modules/auth';
import { moduleService } from './modules/service';

// eslint-disable-next-line import/prefer-default-export
export const modules = {
  customer: moduleCustomer,
  auth: moduleAuth,
  service: moduleService,
};
