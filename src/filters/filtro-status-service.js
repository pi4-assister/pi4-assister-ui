/* eslint-disable */
const FiltroStatusService = (value) => {
  if (value === 'QUOTED') {
    return 'Pendente'
  } else if (value === 'IN_PROGRESS') {
    return 'Em Progresso';
  } else {
    return 'Finalizado';
  }
};

export { FiltroStatusService };
