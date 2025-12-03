import { api } from './axiosInstance';


//앨범 정보
export const getAlbumDetail = async (albumId) => {
    const res = await api.get(`/api/ablums/${albumId}`);
    return res.data;
}

export const getArtistAlbums = async (artistId) => {
    const res = await api.get(`/api/artists/${artistId}/albums`);
    return res.data;
}