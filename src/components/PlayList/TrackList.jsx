import styles from '../common/TrackItem.module.class';

export default function TrackList({ tracks }) {
  return (
    <div className={styles.list}>
      {tracks.map((t) => (
        <div key={t.id} className={styles.row}>
          <img src={t.cover} className={styles.thumb} />
          <div className={styles.info}>
            <div className={styles.title}>{t.title}</div>
            <div className={styles.artist}>{t.artist}</div>
          </div>
          <button className={styles.more}>
            <img src="/more.png" />
          </button>
        </div>
      ))}
    </div>
  );
}
