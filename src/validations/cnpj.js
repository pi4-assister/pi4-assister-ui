export const validaCNPJ = (value) => {
  if (!isAllSame(value)) {
    return verificaCNPJ(value);
  }
  return false;
};

const isAllSame = (value) => {
  const valueArray = value.split('');
  const check = (list) => list.every((item) => item === list[0]);
  return check(valueArray);
};

const verificaCNPJ = (value) => {
  let tamanho = value.length - 2;
  let numeros = value.substring(0, tamanho);
  const digitos = value.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== Number(digitos.charAt(0))) return false;

  tamanho += 1;
  numeros = value.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  return resultado === Number(digitos.charAt(1));
};
