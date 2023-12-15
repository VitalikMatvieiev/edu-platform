import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

instance.interceptors.request.use((config: AxiosRequestConfig): any => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken && config.headers) {
    config.headers['Authorization'] = accessToken;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Refresh token
    }
    return error;
  },
);
