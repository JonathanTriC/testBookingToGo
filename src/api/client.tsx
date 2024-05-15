import {APIKey, ApplicationID} from '@constants/keys';
import {BASE_URL} from '@constants/url';
import axios, {CreateAxiosDefaults} from 'axios';

const baseConfig: CreateAxiosDefaults<any> = {
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    'X-Parse-Application-Id': ApplicationID,
    'X-Parse-REST-API-Key': APIKey,
  },
  /* other custom settings */
  timeout: 10000,
};

const client = axios.create(baseConfig);
client.interceptors.request.use(async function (config) {
  return config;
});
client.interceptors.response.use(
  async function (response) {
    // dismissLoading();
    return Promise.resolve(response);
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export {client};
