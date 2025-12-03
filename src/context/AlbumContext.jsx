/* eslint-disable react-refresh/only-export-components */
// context/AlbumContext.jsx
import { createContext, useContext, useState } from "react";
import { getAlbumDetail } from "../api/album";
import { 
  getAlbumComment,
  postAlbumComment,
  deleteAlbumComment,
  putAlbumComment
} from "../api/comment";

import { 
  toggleCommentLike,
  getCommentLikeStatus,
  getCommentLikeCount
} from "../api/commentLikeApi";

const AlbumContext = createContext();
export const useAlbum = () => useContext(AlbumContext);

// -----------------------------------------
// 🔥 (A) 여기 바로 정규화 함수 넣어버리면 됨
// -----------------------------------------

// 앨범 내부 트랙 정규화
function normalizeAlbumTrack(t) {
  return {
    id: t.id,
    title: t.name,
    trackNumber: t.trackNumber,
    discNumber: t.discNumber,
    durationMs: t.durationMs,
  };
}

// 앨범 전체 정규화
function normalizeAlbum(album) {
  return {
    id: album.id,
    title: album.name,
    artist: album.artist,
    thumbnailUrl: album.thumbnailUrl,
    releaseDate: album.releaseDate,
    totalTracks: album.totalTracks,
    tracks: (album.tracks || []).map(normalizeAlbumTrack),
  };
}

// 댓글 정규화 (선택사항이지만 넣어주는 게 안정적)
function normalizeComment(c) {
  return {
    id: c.id,
    content: c.content,
    username: c.username,
    createdAt: c.createdAt,
    likes: c.likes ?? 0,
  };
}

// -----------------------------------------

export function AlbumProvider({ children }) {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentLikes, setCommentLikes] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [recommendAlbums, setRecommendAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("latest");

  // -----------------------
  // (1) 앨범 정보 로드
  // -----------------------
  const loadAlbum = async (albumId) => {
    setLoading(true);
    try {
      const data = await getAlbumDetail(albumId);

      // 🔥 여기서 정규화 적용
      const normalized = normalizeAlbum(data);

      setAlbum(normalized);
      setTracks(normalized.tracks);
    } catch (error) {
      console.error("앨범 로딩 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------
  // (2) 댓글 불러오기
  // -----------------------
  const loadComments = async (albumId) => {
    try {
      const data = await getAlbumComment(albumId);

      // 🔥 댓글도 정규화
      const normalized = data.map(normalizeComment);

      setComments(normalized);
    } catch (e) {
      console.error("댓글 로드 실패:", e);
    }
  };

  // -----------------------
  // (3) 댓글 작성
  // -----------------------
  const writeComment = async (albumId, content) => {
    try {
      await postAlbumComment(albumId, content);
      await loadComments(albumId);
    } catch (e) {
      console.error("댓글 작성 실패:", e);
    }
  };

  // -----------------------
  // (4) 댓글 수정
  // -----------------------
  const editComment = async (albumId, commentId, content) => {
    try {
      await putAlbumComment(albumId, commentId, content);
      await loadComments(albumId);
    } catch (e) {
      console.error("댓글 수정 실패:", e);
    }
  };

  // -----------------------
  // (5) 댓글 삭제
  // -----------------------
  const removeComment = async (albumId, commentId) => {
    try {
      await deleteAlbumComment(albumId, commentId);
      await loadComments(albumId);
    } catch (e) {
      console.error("댓글 삭제 실패:", e);
    }
  };

  // -----------------------
  // (6) 댓글 좋아요
  // -----------------------
  const loadCommentLikes = async (commentId) => {
    const liked = await getCommentLikeStatus(commentId);
    const count = await getCommentLikeCount(commentId);

    setCommentLikes((prev) => ({
      ...prev,
      [commentId]: { liked, count },
    }));
  };

  const toggleLike = async (commentId) => {
    await toggleCommentLike(commentId);
    await loadCommentLikes(commentId);
  };

  // -----------------------
  // (7) 댓글 정렬
  // -----------------------
  const changeSort = (order) => {
    setSortOrder(order);

    setComments((prev) => {
      const sorted = [...prev];
      if (order === "latest") {
        sorted.sort((a, b) => b.id - a.id);
      } else {
        sorted.sort((a, b) => b.likes - a.likes);
      }
      return sorted;
    });
  };

  return (
    <AlbumContext.Provider
      value={{
        album,
        tracks,
        comments,
        commentLikes,
        recommendAlbums,
        writeComment,
        editComment,
        removeComment,
        loadComments,
        toggleLike,
        loadAlbum,
        sortOrder,
        changeSort,
        loading,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}
