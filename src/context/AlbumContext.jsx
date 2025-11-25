// context/AlbumContext.jsx
import { createContext, useContext, useState } from "react";

const AlbumContext = createContext();

export function AlbumProvider({ children }) {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [comments, setComments] = useState([]);
  const [recommendAlbums, setRecommendAlbums] = useState([]);

  const [sortOrder, setSortOrder] = useState("latest"); // latest / popular

  // 앨범로딩
  const loadAlbum = async (albumId) => {
    console.log("앨범 로딩중...", albumId);

    // api대체 임시데이터
    const data = {
      album: {
        id: albumId,
        title: "이상비행 - EP",
        artist: "한로로",
        year: 2023,
        cover: "https://picsum.photos/500?album",
      },

      tracks: [
        { id: 1, title: "이상비행", duration: "2:35" },
        { id: 2, title: "해초", duration: "3:45" },
        { id: 3, title: "화해", duration: "3:41" },
        { id: 4, title: "금붕어", duration: "3:32" },
      ],

      comments: [
        {
          id: 101,
          user: "최연우",
          time: "1시간 전",
          text: "노래 너무 좋아용",
          rating: "만족",
          likes: 8,
        },
        {
          id: 102,
          user: "조은비",
          time: "10분 전",
          text: "이번 앨범도 기대이상이었어요~",
          rating: "만족",
          likes: 10,
        },
      ],

      recommend: [
        {
          id: 900,
          title: "UNFORGIVEN",
          cover: "https://picsum.photos/200?re1",
        },
        {
          id: 901,
          title: "FEARLESS",
          cover: "https://picsum.photos/200?re2",
        },
      ],
    };

    setAlbum(data.album);
    setTracks(data.tracks);
    setComments(data.comments);
    setRecommendAlbums(data.recommend);
  };

  // 댓글 추가, 임시데이터 사용(api x)
  const addComment = (text, rating) => {
    const newComment = {
      id: Date.now(),
      user: "익명 사용자",
      time: "방금 전",
      text,
      rating,
      likes: 0,
    };

    setComments((prev) => [newComment, ...prev]);
  };

  // 댓글 좋아요
  const likeComment = (commentId) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  // 정렬 변경
  const changeSort = (order) => {
    setSortOrder(order);

    setComments((prev) => {
      if (order === "latest") {
        return [...prev].sort((a, b) => b.id - a.id);
      } else {
        return [...prev].sort((a, b) => b.likes - a.likes);
      }
    });
  };

  return (
    <AlbumContext.Provider
      value={{
        album,
        tracks,
        comments,
        recommendAlbums,
        sortOrder,
        loadAlbum,
        addComment,
        likeComment,
        changeSort,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAlbum = () => useContext(AlbumContext);
