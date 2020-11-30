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
        const response = await instance.get(requestTo);
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
    async getAssister(context, ID) {
      const requestTo = ID ? `${context}/${ID}` : context;
      const { username, password } = JSON.parse(atob(sessionStorage.getItem('auth')));
      try {
        const response = await instance.get(requestTo, {
          auth: {
            username,
            password,
          },
        });
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
    // [ POST ]
    async postRequest(context, data, message = 'Operação realizada com sucesso!') {
      try {
        const response = await instance.post(context, data);
        if (message.length !== 0) notification(message, 'success');
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
    async quoteRequest(context, data, message = 'Operação realizada com sucesso!') {
      const { username, password } = JSON.parse(atob(sessionStorage.getItem('auth')));
      try {
        const response = await instance.post(context, data, {
          auth: {
            username,
            password,
          },
        });
        if (message.length !== 0) notification(message, 'success');
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
    async postProfilePicture(context, data, user, message = 'Operação realizada com sucesso!') {
      const formData = new FormData();
      formData.append('profile-picture', data.profilePictureUrl);
      formData.append('id', data.customerId);
      const { username, password } = user;
      try {
        const response = await instance.post(context, formData, {
          auth: {
            username,
            password,
          },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (message.length !== 0) notification(message, 'success');
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
    // AUTH REQUEST
    async authRequest(context, user, message = 'Operação realizada com sucesso!') {
      try {
        const { username, password } = user;
        const response = await instance.post(context, {}, {
          auth: {
            username,
            password,
          },
        });
        notification(message, 'success');
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },

    //  [ PUT ]
    async putRequest(context, ID, data, message = 'Operação realizada com sucesso!') {
      const requestTo = `${context}/${ID}`;
      try {
        const { username, password } = JSON.parse(atob(sessionStorage.getItem('auth')));
        const response = await instance.put(requestTo, data, {
          auth: {
            username,
            password,
          },
        });
        notification(message, 'success');
        return response.data || [{}];
      } catch (error) {
        this.errorHandle(error);
        throw new Error(error);
      }
    },
  },
};

// eslint-disable-next-line import/prefer-default-export
export { request };
