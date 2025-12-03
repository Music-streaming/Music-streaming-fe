import styles from '../common/TrackItem.module.class';
import { normalizeTrack } from '../../context/PlayerContext';

export default function TrackList({ tracks }) {

  // API 데이터 → 정규화
  const normalized = tracks.map(normalizeTrack);

  return (
    <div className={styles.list}>
      {normalized.map((track) => (
        <div key={track.id} className={styles.row}>
          <img src={track.imageUrl} className={styles.thumb} />

          <div className={styles.info}>
            <div className={styles.title}>{track.title}</div>
            <div className={styles.artist}>{track.artist}</div>
          </div>

          <button className={styles.more}>
            <img src="/more.png" />
          </button>
        </div>
      ))}
    </div>
  );
}
