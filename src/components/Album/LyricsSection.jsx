import styles from "./LyricsSection.module.css"

export default function LyricsSection({ lyrics }) {
  return (
    <div className={styles.lyricsBox}>
      <h3 className={styles.title}>가사</h3>
      <div className={styles.content}>
        {lyrics?.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  );
}
