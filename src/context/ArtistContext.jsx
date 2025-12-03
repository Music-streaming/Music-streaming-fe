// context/ArtistContext.jsx
import { createContext, useContext, useState } from "react";
import { 
  getArtistDetail,
  getArtistTopTracks,
  getArtistAlbums
} from "../api/artist";

const ArtistContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useArtist = () => useContext(ArtistContext);

// -------------------------------------------
// 🔥 정규화 함수 3개 (ArtistContext 안에 포함)
// -------------------------------------------

// 1. 아티스트 기본 정보
function normalizeArtist(a) {
  return {
    id: a.id,
    name: a.name,
    genre: a.genre,
    followers: a.followers,
    imageUrl: a.imageUrl,
    genres: a.genres || []
  };
}

// 2. 아티스트의 인기곡 리스트
function normalizeTopTrack(t) {
  return {
    id: t.id,
    title: t.name,
    albumName: t.album,
    previewUrl: t.previewUrl,
    durationMs: t.durationMs
  };
}

// 3. 아티스트의 앨범 목록
function normalizeArtistAlbum(a) {
  return {
    id: a.id,
    title: a.name,
    releaseDate: a.releaseDate,
    imageUrl: a.imageUrl
  };
}

// -------------------------------------------
// 🔥 ArtistContext
// -------------------------------------------

export function ArtistProvider({ children }) {
  const [artist, setArtist] = useState(null);      // 아티스트 정보
  const [topTracks, setTopTracks] = useState([]); // 인기곡
  const [albums, setAlbums] = useState([]);       // 앨범 목록
  const [loading, setLoading] = useState(false);

  // 1) 아티스트 정보 불러오기
  const loadArtist = async (artistId) => {
    setLoading(true);
    try {
      const data = await getArtistDetail(artistId);
      console.log("ARTIST ALBUMS RESPONSE: ", data);
      setArtist(normalizeArtist(data));
    } catch (e) {
      console.error("아티스트 정보 로드 실패:", e);
    } finally {
      setLoading(false);
    }
  };

  // 2) 인기곡 불러오기
  const loadTopTracks = async (artistId) => {
    try {
      const data = await getArtistTopTracks(artistId);

          // 응답이 HTML인지 확인
    if (typeof data === "string" && data.startsWith("<!DOCTYPE")) {
      console.error("❌ top-tracks API 가 JSON이 아니라 HTML 반환함");
      return setTopTracks([]);
    }

    if (!Array.isArray(data)) {
      console.error("❌ top-tracks API 응답이 배열이 아님:", data);
      return setTopTracks([]);
    }
      setTopTracks(data.map(normalizeTopTrack));
    } catch (e) {
      console.error("아티스트 인기곡 로드 실패:", e);
    }
  };

  // 3) 아티스트 앨범 목록 불러오기
  const loadAlbums = async (artistId) => {
    try {
      const data = await getArtistAlbums(artistId);
      setAlbums(data.map(normalizeArtistAlbum));
    } catch (e) {
      console.error("아티스트 앨범 목록 로드 실패:", e);
    }
  };

  return (
    <ArtistContext.Provider
      value={{
        artist,
        topTracks,
        albums,
        loadArtist,
        loadTopTracks,
        loadAlbums,
        loading
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}
