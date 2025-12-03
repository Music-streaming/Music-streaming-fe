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
// eslint-disable-next-line react-refresh/only-export-components
export const useAlbum = () => useContext(AlbumContext);

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

      setAlbum(data);
      setTracks(data.tracks || []);
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
      setComments(data);
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

    setCommentLikes(prev => ({
      ...prev,
      [commentId]: { liked, count }
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
      if (order === "latest") return [...prev].sort((a, b) => b.id - a.id);
      else return [...prev].sort((a, b) => b.likes - a.likes);
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
