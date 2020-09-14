const FiltroCEP = (value) => {
  if (value !== '' && value != null && value !== '-') return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  return value;
};

export { FiltroCEP };
