import { instance } from './config';

import { errorHandle } from '../mixins/error.handle';
import { notification } from '../mixins/notification';

const request = {
  mixins: [errorHandle],
  methods: {
    // [ GET ]
    async getRequest(context, ID) {
      const requestTo = ID ? `${context}/${ID}` : context;
      try {
        const response = await instance.get(requestTo, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        return response.data.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
    // [ POST ]
    async postRequest(context, data, message = 'Operação realizada com sucesso!') {
      try {
        const response = await instance.post(context, data, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        notification(message, 'success');
        return response.data.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },

    //  [ PUT ]
    async putRequest(context, ID, data, message = 'Operação realizada com sucesso!') {
      const requestTo = `${context}/${ID}`;
      try {
        const response = await instance.put(requestTo, data, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        notification(message, 'success');
        return response.data.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
  },
};

export { request };
