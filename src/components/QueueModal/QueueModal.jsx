import { usePlayer } from "../../context/PlayerContext";
import styles from "./QueueModal.module.css";

export default function QueueModal({ onClose }) {
  const { queue, currentIndex, startQueue } = usePlayer();

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2>현재 재생목록</h2>
          <button onClick={onClose}>✖</button>
        </div>

        <div className={styles.list}>
          {queue.map((track, idx) => (
            <div
              key={track.id}
              className={`${styles.item} ${
                idx === currentIndex ? styles.active : ""
              }`}
              onClick={() => startQueue(queue, idx)}
            >
              <img src={track.albumImage} className={styles.thumb} />
              <div>
                <div className={styles.title}>{track.title}</div>
                <div className={styles.artist}>{track.artist}</div>
              </div>
              <span className={styles.year}>{track.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}