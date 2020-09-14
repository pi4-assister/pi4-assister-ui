// [ ERROR HANDLE ]
import { notification } from './notification';
import { status } from '../config/messages';

export const errorHandle = {
  methods: {
    errorHandle(error) {
      console.table(error);
      console.log(error.request.status);
      notification(status[error.request.status], 'error');
      console.error(`Erro Desconhecido: ${error.request.status} - ${error}`);
    },
  },
};
