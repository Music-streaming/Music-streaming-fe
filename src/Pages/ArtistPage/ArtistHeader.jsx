import styles from "./ArtistHeader.module.css";

export function ArtistHeader({ artist }) {
  if (!artist) return null;

  return (
    <div className={styles.header}>
      <img src={artist.imageUrl} alt={artist.name} className={styles.profile} />

      <div className={styles.info}>
        <h2 className={styles.name}>{artist.name}</h2>
        {artist.genre && <p className={styles.genre}>{artist.genre}</p>}
        {artist.followers !== undefined && (
          <p className={styles.followers}>
            팔로워 {artist.followers.toLocaleString()}명
          </p>
        )}
      </div>
    </div>
  );
}