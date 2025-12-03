// src/api/userApi.js
import apiClient from './apiClient';

export const getMyInfo = () => {
  return apiClient.get('/users/me');
};
