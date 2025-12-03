import { api } from './axiosInstance';

export const getArtistDetail = async (artistId) => {
    const res = await api.get(`/api/artists/${artistId}`);
    return res.data;
};

export const getArtistTopTracks = async (artistId) =>{
    const res = await api.get(`/api/artists/${artistId}/top-tracks`)
    return res.data;
};

export const getArtistAlbums = async (artistId) => {
    const res = await api.get(`/api/artists/${artistId}/albums`);
    return res.data;
};