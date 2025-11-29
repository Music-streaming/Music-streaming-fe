/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const dummySongData = [
  {
    id: 1,
    title: "Perfect Night",
    artist: "LE SSERAFIM",
    cover: "https://picsum.photos/300?song1",
    album: "Perfect Night - Single",
    year: 2023,
    lyrics: "가사 가사 가사...",
    audio: "/perfect-night.mp3",  // 🔥 재생할 음원 경로
  },
  {
    id: 2,
    title: "UNFORGIVEN",
    artist: "LE SSERAFIM",
    cover: "https://picsum.photos/300?song2",
    album: "UNFORGIVEN",
    year: 2023,
    lyrics: "I'm a queen...",
    audio: "/unforgiven.mp3",
  },
];

const SongContext = createContext();

export function SongProvider({ children }) {
  const [song, setSong] = useState(null);

  const loadSong = (id) => {
    const found = dummySongData.find((s) => s.id === Number(id));
    setSong(found || null);
  };

  return (
    <SongContext.Provider value={{ song, loadSong }}>
      {children}
    </SongContext.Provider>
  );
}

export const useSong = () => useContext(SongContext);
