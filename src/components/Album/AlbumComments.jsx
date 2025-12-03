import { useEffect, useState } from "react";
import { useAlbum } from "../../context/AlbumContext";
import styles from "./AlbumComments.module.css";

export default function AlbumComments() {
  const {
    comments,
    commentLikes, 
    loadComments,
    loadCommentLikes,
    toggleLike,
    writeComment,
    album,
    sortOrder,
    changeSort,
  } = useAlbum();

  const [text, setText] = useState("");
  const [rating, setRating] = useState("만족");

  // 댓글 불러오기
  useEffect(() => {
    if (album?.id) loadComments(album.id);
  }, [album]);

  // 댓글 좋아요 상태 불러오기
  useEffect(() => {
    comments.forEach((c) => {
      loadCommentLikes(c.id);
    });
  }, [comments]);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    const content = `${text} (${rating})`;

    await writeComment(album.id, content);
    setText("");
  };

  const handleLike = async (commentId) => {
    await toggleLike(commentId);
  };

  return (
    <div className={styles.comments}>
      <h2 className={styles.sectionTitle}>앨범 코멘트</h2>

      {/*  정렬 */}
      <div className={styles.sortBar}>
        <select
          value={sortOrder}
          onChange={(e) => changeSort(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="latest">최신순</option>
          <option value="popular">인기순</option>
        </select>
      </div>

      {/*  댓글 작성 */}
      <div className={styles.inputBox}>
        <textarea
          className={styles.textarea}
          placeholder="댓글을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className={styles.actions}>
          <select
            className={styles.ratingSelect}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="만족">만족</option>
            <option value="보통">보통</option>
            <option value="불만족">불만족</option>
          </select>

          <button className={styles.submitBtn} onClick={handleSubmit}>
            등록
          </button>
        </div>
      </div>

      {/* 댓글 리스트 */}
      {comments.map((c) => {
        const likeInfo = commentLikes[c.id] || { liked: false, count: 0 };

        return (
          <div key={c.id} className={styles.commentCard}>
            <span className={styles.user}>익명</span>

            <span className={styles.text}>{c.content}</span>

            <div className={styles.rightGroup}>
              <span className={styles.rating}>{rating}</span>

              <button
                className={`${styles.likeBtn} ${
                  likeInfo.liked ? styles.active : ""
                }`}
                onClick={() => handleLike(c.id)}
              >
                ❤️ {likeInfo.count}
              </button>
            </div>

            <div className={styles.time}>{c.createdAt?.slice(0, 16)}</div>
          </div>
        );
      })}
    </div>
  );
}
