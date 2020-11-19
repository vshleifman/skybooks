import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://2f69814de06f.ngrok.io',
});

export const setReqToken = (token: string) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export default instance;
