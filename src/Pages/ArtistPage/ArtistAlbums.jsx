// src/components/Artist/ArtistAlbums.jsx
import MediaCard from "../../components/common/MediaCard";
import styles from "./ArtistAlbums.module.css";
import { useNavigate } from "react-router-dom";

export function ArtistAlbums({ albums }) {
  const navigate = useNavigate();

  if (!albums || albums.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>앨범</h3>

      <div className={styles.grid}>
        {albums.map((album) => (
          <MediaCard
            key={album.id}
            imageSrc={album.coverUrl}
            title={album.name}
            artist={album.artistName}
            albumId={album.id}
            onClick={() => navigate(`/album/${album.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
