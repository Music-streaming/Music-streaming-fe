import api from "./axiosInstance";

export const toggleCommentLike = async(commentId) => {
    const res = await api.post(`/api/comments/${commentId}/like`);
    return res.data;
};

export const getCommentLikeStatus = async (commentId) => {
    const res = await api.get(`/api/comments/${commentId}/like/status`);
    return res.data.liked;
};

export const getCommentLikeCount = async (commentId) =>{
    const res = await api.get(`/api/comments/${commentId}/like/count`);
    return res.data.count;
};
