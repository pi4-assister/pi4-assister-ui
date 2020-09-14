const FiltroHora = (value) => moment.utc(value * 3600 * 1000).format('HH:mm');

export { FiltroHora };
