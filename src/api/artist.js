import apiClient from '../api/apiClient';

export const getArtistDetail = async (artistId) => {
  const res = await apiClient.get(`/api/artists/${artistId}`);
  return res.data;
};

export const getArtistTopTracks = async (artistId) => {
  const res = await apiClient.get(`/api/artists/${artistId}/top-tracks`);
  return res.data;
};

export const getArtistAlbums = async (artistId) => {
  const res = await apiClient.get(`/api/artists/${artistId}/albums`);
  return res.data;
};
