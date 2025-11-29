import { useAlbum } from "../../context/AlbumContext";
import { useNavigate } from "react-router-dom";
import styles from "./AlbumRecommend.module.css";

export default function AlbumRecommend() {
  const { recommendAlbums } = useAlbum();
  const navigate = useNavigate();

  return (
    <div className={styles.recommend}>
      <h2 className={styles.title}>아티스트의 다른 앨범</h2>

      <div className={styles.grid}>
        {recommendAlbums.map((a) => (
          <div
            key={a.id}
            className={styles.card}
            onClick={() => navigate(`/album/${a.id}`)}
          >
            <img src={a.cover} alt={a.title} className={styles.cover} />
            <p className={styles.name}>{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
