import { useNavigate } from "react-router-dom";
import styles from "./AlbumRecommend.module.css";
import { useEffect, useState } from "react";
import { getArtistAlbums } from "../../api/album";

export default function AlbumRecommend({ artistId, currentAlbumId }) {
  const [albums, setAlbums] = useState([]);  // ← 고침
  const navigate = useNavigate();

  useEffect(() => {
    if (!artistId) return;

    async function load() {
      try {
        const data = await getArtistAlbums(artistId);

        console.log("🔥 아티스트 앨범 API 응답:", data);

        // API는 배열 반환 → 필터링 가능
        const filtered = data.filter((album) => album.id !== currentAlbumId);

        setAlbums(filtered);
      } catch (err) {
        console.error("아티스트 앨범 로드 실패:", err);
      }
    }

    load();
  }, [artistId, currentAlbumId]);

  return (
    <div className={styles.recommend}>
      <h2 className={styles.title}>{artistId} 아티스트의 다른 앨범</h2>

      <div className={styles.grid}>
        {albums.map((a) => (
          <div
            key={a.id}
            className={styles.card}
            onClick={() => navigate(`/album/${a.id}`)}
          >
            <img
              src={a.imageUrl}      // ← API 구조에 맞게 수정
              alt={a.name}          // ← 수정
              className={styles.cover}
            />
            <p className={styles.name}>{a.name}</p>   {/* ← 수정 */}
          </div>
        ))}
      </div>
    </div>
  );
}
