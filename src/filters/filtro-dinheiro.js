const FiltroDinheiro = (value) => {
  if (value != null) return parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return value;
};

export { FiltroDinheiro };
