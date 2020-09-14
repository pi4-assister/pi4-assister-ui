import swal from 'sweetalert';
import { notification } from './notification';
import { sweetAlertConfig } from '../config/global';
import { messages } from '../config/messages';

export const redirect = {
  methods: {
    redirectTo(route, id) {
      this.$router.push({
        name: route,
        params: { id },
      })
        .then((res) => {
          if (route === 'IdentidadeLogin') {
            notification(messages.login.logout, 'success');
          }
          console.log(res);
        })
        .catch((err) => console.error(err));
    },
    redirectConfirm(route, id) {
      swal({
        ...sweetAlertConfig({
          text: 'Você deseja voltar sem salvar as alterações?',
        }),
      }).then((value) => {
        if (value) {
          this.$router.push({
            name: route,
            params: { id },
          });
        }
      });
    },
  },
};
