const FiltroTelefone = (value) => {
  if (value != '' && value != null && value != '-') {
    if (value.length == 10) return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    if (value.length == 11) return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    if (value.length == 8) return value.replace(/(\d{4})(\d{4})/, '$1-$2');
    if (value.length == 9) return value.replace(/(\d{5})(\d{4})/, '$1-$2');
    return value;
  }
};

export { FiltroTelefone };
