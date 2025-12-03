// src/api/apiClient.js
import axios from 'axios';
import { BASE_URL } from './config';

const apiClient = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터: 토큰 자동 첨부
apiClient.interceptors.request.use((config) => {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    const token = JSON.parse(savedUser).token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default apiClient;
