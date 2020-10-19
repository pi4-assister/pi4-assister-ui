/* eslint-disable */
export const validaCPF = (value) => {
  const validLength = value.length >= 11;
  if (!isAllSame(value) && validLength) {
    if (Number(value) % 10 === 0) {
      return somaPonderada(value) % 11 < 2;
    }
    return somaPonderada(value) % 11 === 0;
  }

  return false;
};

const isAllSame = (value) => {
  const valueArray = value.split('');
  const check = (list) => list.every((item) => item === list[0]);
  return check(valueArray);
};

const somaPonderada = (value) => {
  const somaCPF = value.split('');
  let soma = 0;

  for (let i = 0; i < somaCPF.length; i++) {
    soma += Number(somaCPF[i]) * (somaCPF.length - i);
  }
  return soma;
};
