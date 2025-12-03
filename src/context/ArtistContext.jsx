import {createContext, useContext, useState} from "react";
import {
    getArtistDetail,
    getArtistTopTracks,
    getArtistAlbums,
} from "../api/artist";

const ArtistContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useArtist() {
    return useContext(ArtistContext);
}

export function ArtistProvider({children}){
    const [artist, setArtist ] = useState(null);
    const [topTracks, setTopTracks ] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const loadArtist = async (artistId) => {
    setLoading(true);
    try {
      const detail = await getArtistDetail(artistId);
      const tracks = await getArtistTopTracks(artistId);
      const albumList = await getArtistAlbums(artistId);

      setArtist(detail);
      setTopTracks(tracks);
      setAlbums(albumList);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ArtistContext.Provider
      value={{
        artist, //GET / api/artists/{artistsId}로 받아온 Json
        topTracks,  // GET /api/artists/{artistId}/top-tracks
        albums,   // GET /api/artists/{artistId}/albums
        loading,
        loadArtist,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}