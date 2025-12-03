import { api } from './axiosInstance';


export const getAlbumComment = async (albumId) => {
    const res = await api.get(`/api/albums/${albumId}/comments`);
    return res.data;
};

export const postAlbumComment = async (albumId) =>{
    const res = await api.post(`/api/albums/${albumId}/comments`,{
        // eslint-disable-next-line no-undef
        content: text
    });
    return res.data;
};

export const putAlbumComment = async (albumId, commentId, text) => {
    const res = await api.put(`/api/albums/${albumId}/comments/${commentId}`,{
        content: text
    });
    return res.data;
};

export const deleteAlbumComment = async (albumId, commentId) => {
    const res = await api.delete(`/api/albums/${albumId}/comments/${commentId}`);
    return res.data;
};