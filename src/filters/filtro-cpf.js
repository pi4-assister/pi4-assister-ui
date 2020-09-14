const FiltroCPF = (value) => {
  if (value !== '' && value != null && value !== '-') {
    if (value.length === 11) return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return value;
  }
  return value;
};

export { FiltroCPF };
