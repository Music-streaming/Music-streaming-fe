import styles from "./MediaHeader.module.css";
import MoreButton from "../common/MoreButton";

export default function MediaHeader({
  cover,
  title,
  subtitle,
  extraInfo,
  onPlay,
  onMore,
  onShuffle,
}) {
  return (
    <div className={styles.header}>
      <img src={cover} className={styles.cover}/>

      <div className={styles.meta}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.extra}>{extraInfo}</p>

        <div className={styles.buttons}>
          {onPlay && (
            <button onClick={onPlay}>
              <img src="../../../public/playButton.png" />
            </button>
          )}

          {onShuffle && (
            <button onClick={onShuffle}>
              <img src="../../../public/Shuffle.png" />
            </button>
          )}

          <MoreButton
             onClick={onMore}
          />
        </div>
      </div>
    </div>
  );
}