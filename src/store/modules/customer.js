// eslint-disable-next-line import/prefer-default-export
export const moduleCustomer = {
  state: () => ({
    customer: {
      get: '/api/v1/customer',
      post: '/api/v1/customer',
      put: '/api/v1/customer',
      delete: '/api/v1/customer',
    },
  }),
};
