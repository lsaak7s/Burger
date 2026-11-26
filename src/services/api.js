import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:3000' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // <- Apenas o nome da chave aqui!

  if (token) {
    const cleanToken = token.replace(/"/g, '');
    config.headers.authorization = `Bearer ${cleanToken}`;
  }

  return config;
});
