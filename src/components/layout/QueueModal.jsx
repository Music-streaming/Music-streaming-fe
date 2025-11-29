import { usePlayer } from '../../context/PlayerContext';
import styles from './QueueModal.module.css';
import Close from '../../assets/close.png';

export default function QueueModal({ onClose }) {
  const { queue, currentIndex , setTrackIndex, deleteTrack} = usePlayer();

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <button onClick={onClose}>
            <img src={Close} alt="close" />
          </button>
        </div>

        <div className={styles.list}>
          {queue.map((track, idx) => (
            <div
              key={track.id}
              className={`${styles.item} ${
                idx === currentIndex ? styles.active : ''
              }`}
              onClick={() => setTrackIndex(idx)}
            >
              <img src={track.cover} className={styles.thumb} />
              <div>
                <div className={styles.title}>{track.title}</div>
                <div className={styles.artist}>{track.artist}</div>
              </div>
             <button
                 className = {styles.deleteBtn}
                  onClick = {()=> deleteTrack(idx)}>
                      <img src={Close} alt="close" />
             </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
