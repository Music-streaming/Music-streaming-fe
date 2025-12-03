// src/components/Artist/ArtistTopTracks.jsx

import MediaListItem from "../../components/Search/MediaListItem";
import styles from "./ArtistTopTracks.module.css";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "../../context/PlayerContext";

export  function ArtistTopTracks({ tracks }) {
  const navigate = useNavigate();
  const { startQueue } = usePlayer();

  if (!tracks || tracks.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>인기곡</h3>

      <div className={styles.list}>
        {tracks.map((track, idx) => (
          <MediaListItem
            key={track.id}
            imageSrc={track.imageUrl}
            title={track.name}
            artist={track.artistName}
            onClick={() => startQueue(tracks, idx)}
            onOptionsClick={() => navigate(`/track/${track.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
