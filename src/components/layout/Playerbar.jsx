/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import styles from './PlayerBar.module.css';
import QueueModal from './QueueModal';

// 이미지 아이콘들
import List from '../../assets/list.png';
import Lyric from '../../assets/lyric.png';
import Next from '../../assets/Next.png';
import Shuffle from '../../assets/Shuffle.png';
import Repeat from '../../assets/Repeat.png';
import PlayButton from '../../assets/PlayButton.png';
import Back from '../../assets/Back.png';
import DefaultImage from '../../assets/image.png';
import Pause from '../../assets/Pause.png';

export default function PlayerBar() {
  const {
    currentTrack,
    isPlaying,
    // eslint-disable-next-line no-unused-vars
    isShuffle,
    repeatMode,
    togglePlay,
    toggleShuffle,
    toggleRepeat,
    playNext,
    playPrev,
    currentTime,
    duration,
    seek,
  } = usePlayer();

  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);

  const isEmpty = !currentTrack;

  return (
    <>
      <div className={styles.playerBar}>
        {/* 🔹 좌측 - 트랙 정보 */}
        <div className={styles.left}>
          <img
            src={isEmpty ? DefaultImage : currentTrack.cover}
            className={styles.thumbnail}
            alt="album"
          />

          <div className={styles.info}>
            <div className={styles.title}>
              {isEmpty ? '재생 중인 곡 없음' : currentTrack.title}
            </div>
            <div className={styles.artist}>
              {isEmpty ? '곡을 선택해주세요' : currentTrack.artist}
            </div>
          </div>
        </div>

        {/* 🔹 중앙 - 재생 컨트롤 */}
        <div className={styles.center}>
          <div className={styles.controls}>
            {/* 셔플 */}
            <button onClick={toggleShuffle}>
              <img src={Shuffle} alt="shuffle" />
            </button>

            {/* 이전곡 */}
            <button onClick={playPrev}>
              <img src={Back} alt="prev" />
            </button>

            {/* 재생 / 일시정지 */}
            <button onClick={togglePlay}>
              {isPlaying ? (
                <img src={Pause} alt="pause" />
              ) : (
                <img src={PlayButton} alt="play" />
              )}
            </button>

            {/* 다음곡 */}
            <button onClick={playNext}>
              <img src={Next} alt="next" />
            </button>

            {/* 반복 */}
            <button onClick={toggleRepeat}>
              <img src={Repeat} alt="repeat" />
            </button>
          </div>

        
        </div>

        {/* 🔹 우측 - 재생목록 / 가사 */}
        <div className={styles.right}>
          <button onClick={() => setIsQueueOpen(true)}>
            <img src={List} alt="list" />
          </button>

          <button onClick={() => setIsLyricsOpen(true)}>
            <img src={Lyric} alt="lyric" />
          </button>
        </div>
      </div>

      {/* 재생목록 펼치기 */}
      {isQueueOpen && <QueueModal onClose={() => setIsQueueOpen(false)} />}
    </>
  );
}
