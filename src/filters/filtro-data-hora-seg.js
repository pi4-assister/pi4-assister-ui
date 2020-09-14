import moment from 'moment';

const FiltroDataHoraSeg = (value) => {
  if (value !== '' && value != null && value != -'-') return moment(value).format('DD/MM/YYYY HH:mm:ss');
  return value;
};

export { FiltroDataHoraSeg };
