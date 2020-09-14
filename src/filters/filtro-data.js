import moment from 'moment';

const FiltroData = (value) => {
  if (value != '' && value != null && value != '-') return moment(value).format('DD/MM/YYYY');
  return value;
};

export { FiltroData };
