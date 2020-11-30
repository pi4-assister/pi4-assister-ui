import Physic from '../assets/images/disability/physic.svg';
import Eye from '../assets/images/disability/eye.svg';
import Deaf from '../assets/images/disability/deaf.svg';
import Mental from '../assets/images/disability/mental.svg';
import Elderly from '../assets/images/disability/elderly.svg';

export const status = {
  0: 'Hmm... Aconteceu um erro desconhecido :( ... Tente novamente mais tarde. Se o erro persistir, contate nossa equipe de suporte.',
  200: 'Sucesso! Requisição realizada com sucesso',
  401: 'Vish! Você não pode entrar aqui... Certifique-se de ter feito Login! :)',
  404: 'Ops... Algo deu errado em nosso sistema, tente novamente mais tarde. Se o erro persistir, contate nossa equipe de suporte.',
  500: 'Hmm... Aconteceu um erro desconhecido :( ... Tente novamente mais tarde. Se o erro persistir, contate nossa equipe de suporte.',
};

export const specialNeeds = [
  {
    name: 'PHYSICAL_DISABILITY',
    label: 'Deficiência Física',
    img: Physic,
  },
  {
    name: 'VISUAL_DISABILITY',
    label: 'Deficiência Visual',
    img: Eye,
  },
  {
    name: 'MENTAL_DISABILITY',
    label: 'Deficiência Mental',
    img: Mental,
  },
  {
    name: 'HEARING_DISABILITY',
    label: 'Deficiência Auditiva',
    img: Deaf,
  },
  {
    name: 'ELDERLY',
    label: 'Terceira Idade',
    img: Elderly,
  },
];
