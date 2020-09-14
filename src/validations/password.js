export const validaSenha = (senha) => {
  const result = /.{8,}/.test(senha) * (/* at least 8 characters */
    +/[a-z]/.test(senha) /* a lower letter */
    + /[A-Z]/.test(senha) /* a upper letter */
    + /\d/.test(senha) /* a digit */
    + /[^A-Za-z0-9]/.test(senha) /* a special character */
  );
  return result >= 3;
};
