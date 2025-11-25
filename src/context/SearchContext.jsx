/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

{/*
    const search = async (query) => {
  const res = await fetch(`/api/search?query=${query}`);
  const data = await res.json();

  setArtists(data.artists);
  setAlbums(data.albums);
  setTracks(data.tracks);
};



    */}


const SearchContext = createContext();

export function SearchProvider({children}){
    const [artists, setArtists] = useState([]);
    const [media, setAlbums ] = useState([]);
    const [tracks, setTracks] = useState([]);

    // eslint-disable-next-line no-unused-vars
    const search = async (query) => {
        console.log("임시 검색 실행:", query);

        const data = {
             artists: [
                { id: 1, name: "르세라핌", image: "https://picsum.photos/200?1" },
                { id: 2, name: "뉴진스", image: "https://picsum.photos/200?2" },
                { id: 3, name: "아이유", image: "https://picsum.photos/200?3" },
            ],
            media: [
                { 
                    albumId: 10, 
                    musicId: 100, 
                    artistId: 1,
                    title: "SPAGHETTI", 
                    artist: "르세라핌", 
                    cover: "https://picsum.photos/300?10" 
                  },
                   { 
                    albumId: 11, 
                    musicId: 101, 
                    artistId: 1,
                    title: "FEARLESS", 
                    artist: "르세라핌", 
                    cover: "https://picsum.photos/300?11" 
                  },
                  { 
                    albumId: 12, 
                    musicId: 102, 
                    artistId: 1,
                    title: "UNFORGIVEN", 
                    artist: "르세라핌", 
                    cover: "https://picsum.photos/300?12" 
                  }
                ],
            tracks: [
                { id: 100, title: "Perfect Night", artist: "르세라핌", cover: "https://picsum.photos/150?100" },
                { id: 101, title: "이브, 프시케 그리고…",  artist: "르세라핌", cover: "httpsimm.photos/150?101" },
                { id: 102, title: "Blue Flame", artist: "르세라핌", cover: "httpsimm.photos/150?102" },
            ],
        }

        setArtists(data.artists);
        setAlbums(data.media);
        setTracks(data.tracks);
    }
    return (
    <SearchContext.Provider value={{ artists, media, tracks, search }}>
      {children}
    </SearchContext.Provider>
  );

}

export function useSearch() {
    return useContext(SearchContext);
}
