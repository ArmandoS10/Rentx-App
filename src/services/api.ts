import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.58.49:3333',
});

export { api };
