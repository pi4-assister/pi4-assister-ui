const FiltroCNPJ = (value) => {
  if (value !== '' && value != null && value !== '-') {
    if (value.length === 14) return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return value;
  }
  return value;
};

export { FiltroCNPJ };
