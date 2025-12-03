import apiClient from './apiClient';

export const toggleCommentLike = async (commentId) => {
  const res = await apiClient.post(`/api/comments/${commentId}/like`);
  return res.data;
};

export const getCommentLikeStatus = async (commentId) => {
  const res = await apiClient.get(`/api/comments/${commentId}/like/status`);
  return res.data.liked;
};

export const getCommentLikeCount = async (commentId) => {
  const res = await apiClient.get(`/api/comments/${commentId}/like/count`);
  return res.data.count;
};
