import { useState } from "react";
import { useAlbum } from "../../context/AlbumContext";
import styles from "./AlbumComments.module.css";

export default function AlbumComments() {
  const { comments, addComment, sortOrder, changeSort, likeComment } = useAlbum();

  const [text, setText] = useState("");
  const [rating, setRating] = useState("만족");
  const likedKey = "LikedComments";
  const [likedComments, setLikedComments] = useState(JSON.parse(localStorage.getItem(likedKey)|| "[]"));

  const handleLike = (id) => {
    if(likedComments.includes(id)){
      alert("이미 좋아요를 눌렀습니다!");
      return;
    }

    likeComment(id);

    const updated = [...likedComments, id];
    setLikedComments(updated);
    localStorage.setItem(likedKey, JSON.stringify(updated));
  }

  const handleSubmit = () => {
    if (!text.trim()) return;
    addComment(text, rating);
    setText("");
  };

  return (
    <div className={styles.comments}>
      <h2 className={styles.sectionTitle}>앨범 코멘트</h2>

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

      {comments.map((c) => (
        <div key={c.id} className={styles.commentCard}>
          <span className = {styles.user}>{c.user}</span>
          <span className = {styles.text}>{c.text}</span>

          <div className = {styles.rightGroup}>
            <span className = {styles.rating}>평가: {c.rating}</span>
            <button className = {styles.likeBtn} onClick = {() => handleLike(c.id)}>
              ❤️ {c.likes}
            </button>
          </div>
             <div className={styles.time}>{c.time}</div>
        </div>
      ))}
      </div>
  );
}

