import moment from 'moment';

const FiltroDataHora = (value) => {
  if (value != '' && value != null && value != '-') return moment(value).format('DD/MM/YYYY HH:mm');
  return value;
};

export { FiltroDataHora };
