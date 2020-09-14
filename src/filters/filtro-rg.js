const FiltroRG = (value) => {
  if (value !== '' && value != null && value !== '-') return value.replace(/(\d{2})(\d{3})(\d{3})(\S)/, '$1.$2.$3-$4');
  return value;
};

export { FiltroRG };
