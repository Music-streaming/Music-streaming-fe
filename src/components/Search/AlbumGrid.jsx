import styles from "./AlbumGrid.module.css";

export default function AlbumGrid({ albums }) {
  return (
    <div className={styles.grid}>
      {albums.map(a => (
        <div key={a.id} className={styles.item}>
          <img src={a.cover} />
          <div className={styles.name}>{a.title}</div>
          <div className={styles.artist}>{a.artist}</div>
        </div>
      ))}
    </div>
  );
}