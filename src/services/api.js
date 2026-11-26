import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:3000' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Verifique se a chave no localStorage é exatamente 'token'

  if (token) {
    // Remove as aspas caso o token tenha sido salvo com JSON.stringify
    const cleanToken = token.replace(/"/g, '');
    config.headers.authorization = `Bearer ${cleanToken}`;
  }

  return config;
});
