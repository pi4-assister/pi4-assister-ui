export const ValidationEmail = {
  methods: {
    validationsEmail(email) {
      const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      return regex.test(email);
    },
  },
};
