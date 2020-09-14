const FiltroQuantidade = (value, fraction) => {
  if (value != null) return parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: fraction, maximumFractionDigits: fraction });
  return value;
};

export { FiltroQuantidade };
