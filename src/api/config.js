import Axios from 'axios';

const GET_SUBDOMAIN = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : '';

const serviceUrl = process.env.SERVICE_URL[0].slice(2) || '';

// eslint-disable-next-line no-console
console.log(serviceUrl);

const subdomain = GET_SUBDOMAIN ? `${GET_SUBDOMAIN}.` : '';

const URL_API = `https://${subdomain}${serviceUrl}`;

// eslint-disable-next-line no-console
console.log(URL_API);

const instance = Axios.create({
  baseURL: URL_API,
});

const instanceCEP = Axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

// eslint-disable-next-line import/prefer-default-export
export { instance, instanceCEP };
