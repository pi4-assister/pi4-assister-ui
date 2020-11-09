// eslint-disable-next-line import/named
import { instance, instanceCEP } from './config';

import { errorHandle } from '../mixins/error.handle';
import { notification } from '../mixins/notification';

const request = {
  mixins: [errorHandle],
  methods: {
    // [ GET CEP ]
    async consultaCEP(CEP) {
      const requestTo = `${CEP}/json`;
      try {
        const response = await instanceCEP.get(requestTo);
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
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
        const response = await instance.post(context, data);
        notification(message, 'success');
        return response.data.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
    // AUTH REQUEST
    async authRequest(context, user, message = 'Operação realizada com sucesso!') {
      try {
        const { email, password } = user;
        const response = await instance.post(context, {}, {
          auth: {
            username: email,
            password,
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

// eslint-disable-next-line import/prefer-default-export
export { request };
