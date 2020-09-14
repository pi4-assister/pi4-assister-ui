const writtenNumber = require('written-number');

const FiltroNumeroExtenso = (value) => {
  if (!value) return '';
  return writtenNumber(value, { lang: 'pt' });
};

export { FiltroNumeroExtenso };
