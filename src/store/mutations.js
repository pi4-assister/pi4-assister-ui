// eslint-disable-next-line import/prefer-default-export
export const updateUser = (state, payload) => {
  const user = { ...payload };
  user.authenticated = !state.auth.user.authenticated;
  sessionStorage.setItem('user', JSON.stringify(user));
  // eslint-disable-next-line no-param-reassign
  state.auth.user = { ...user };
};
