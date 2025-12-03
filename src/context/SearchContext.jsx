/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);  // ✔ media → albums 로 이름 통일
  const [tracks, setTracks] = useState([]);

  const search = async (query) => {
    console.log("임시 검색 실행:", query);

    const data = {
      artists: [
        { id: 1, name: "르세라핌", image: "https://picsum.photos/200?1" },
        { id: 2, name: "뉴진스", image: "https://picsum.photos/200?2" },
        { id: 3, name: "아이유", image: "https://picsum.photos/200?3" },
      ],

      // 🔥 앨범 결과는 반드시 id 필드로 통일해야 AlbumPage로 이동 가능
      albums: [
        {
          id: "2yUrwTLHDWBrW74Ewuw6RX",
          name: "SPAGHETTI",
          artist: "르세라핌",
          thumbnailUrl: "https://picsum.photos/300?10",
        },
        {
          id: 11,
          name: "FEARLESS",
          artist: "르세라핌",
          thumbnailUrl: "https://picsum.photos/300?11",
        },
        {
          id: 12,
          name: "UNFORGIVEN",
          artist: "르세라핌",
          thumbnailUrl: "https://picsum.photos/300?12",
        },
      ],

      tracks: [
        {
          id: 100,
          title: "Perfect Night",
          artist: "르세라핌",
          cover: "https://picsum.photos/150?100",
        },
        {
          id: 101,
          title: "이브, 프시케 그리고…",
          artist: "르세라핌",
          cover: "https://picsum.photos/150?101",
        },
        {
          id: 102,
          title: "Blue Flame",
          artist: "르세라핌",
          cover: "https://picsum.photos/150?102",
        },
      ],
    };

    setArtists(data.artists);
    setAlbums(data.albums);
    setTracks(data.tracks);
  };

  return (
    <SearchContext.Provider value={{ artists, albums, tracks, search }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
