import Axios from 'axios';

const GET_SUBDOMAIN = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : '';

const serviceUrl = process.env.SERVICE_URL[0].slice(2) || '';

console.log(serviceUrl);

const subdomain = GET_SUBDOMAIN ? `${GET_SUBDOMAIN}.` : '';

const URL_API = `http://${subdomain}${serviceUrl}`;

console.log(URL_API);

const instance = Axios.create({
  baseURL: URL_API,
});

export default { instance };
