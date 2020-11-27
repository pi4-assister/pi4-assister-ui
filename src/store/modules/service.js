// eslint-disable-next-line import/prefer-default-export
export const moduleService = {
  state: () => ({
    assisters: '/api/v1/service/assisters',
    service: {
      post: '/api/v1/customer',
      put: '/api/v1/customer',
      delete: '/api/v1/customer',
    },
  }),
};
