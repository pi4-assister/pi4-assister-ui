/* eslint-disable */

import { notification } from './notification';
import { messages } from '../config/messages';

export const redirect = {
  methods: {
    redirectTo(route, id) {
      this.$router.push({
        name: route,
        params: { id },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    },
  },
};
