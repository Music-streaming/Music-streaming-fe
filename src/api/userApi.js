// src/api/userApi.js
import apiClient from './apiClient';

// 내 기본 정보 조회
export const getMyInfo = () => {
  return apiClient.get('/users/me');
};

// 팔로워 수 조회
export const getFollowerCount = (userId) => {
  return apiClient.get(`/users/${userId}/follow/followers/count`);
};

// 팔로잉 수 조회
export const getFollowingCount = (userId) => {
  return apiClient.get(`/users/${userId}/follow/following/count`);
};
