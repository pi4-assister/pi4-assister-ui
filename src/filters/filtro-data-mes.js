import moment from 'moment';

const FiltroDataMes = (value) => {
  if (value !== '' && value != null && value !== '-') return moment(value).locale('pt-br').format('MMM/YYYY');
  return value;
};

export { FiltroDataMes };
