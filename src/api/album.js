import apiClient from '../api/apiClient';


//앨범 정보
export const getAlbumDetail = async (albumId) => {
    const res = await apiClient.get(`/api/ablum/${albumId}`);
    return res.data;
}

export const getArtistAlbums = async (artistId) => {
    const res = await apiClient.get(`/api/artists/${artistId}/albums`);
    return res.data;
}