import axios from 'axios';
const Token = localStorage.getItem('token');

const api = 'http://localhost:4000';

const createAxiosInstance = (token) => {
  return axios.create({
    baseURL: `${api}/`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const instance = createAxiosInstance(Token);

export const updateToken = (newToken) => {
  // Create a new axios instance with the updated token
  instance.defaults.headers['Authorization'] = `Bearer ${newToken.trim()}`;
};

export default instance;