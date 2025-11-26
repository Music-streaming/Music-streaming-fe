import { createContext, useContext, useRef, useState } from "react";

const PlayerContext = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export function usePlayer() {
  return useContext(PlayerContext);
}

export function PlayerProvider({ children }) {
  const audioRef = useRef(null);

  // 🔥 재생 상태 관련 State
  const [queue, setQueue] = useState([]);              // 트랙 배열
  const [currentIndex, setCurrentIndex] = useState(-1); // 현재 인덱스
  const [isPlaying, setIsPlaying] = useState(false);

  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState("none"); // none | all | one

  // 현재 재생중인 트랙
  const currentTrack =
    currentIndex >= 0 && currentIndex < queue.length
      ? queue[currentIndex]
      : null;

  // ============================================
  // 🔥 1. 재생목록 시작 (클릭 시 호출)
  // ============================================
  const startQueue = (tracks, startIndex = 0) => {
    if (!tracks || tracks.length === 0) return;

    setQueue(tracks);
    setCurrentIndex(startIndex);
    setIsPlaying(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 50);
  };

  // ============================================
  // 🔥 2. 재생 / 일시정지
  // ============================================
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // ============================================
  // 🔥 3. 이전곡, 다음곡
  // ============================================
  const playNext = () => {
    if (repeatMode === "one") {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    let nextIndex = currentIndex + 1;

    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      if (nextIndex >= queue.length) {
        if (repeatMode === "all") nextIndex = 0;
        else {
          setIsPlaying(false);
          return;
        }
      }
    }

    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  const playPrev = () => {
    let prevIndex = currentIndex - 1;

    if (prevIndex < 0) {
      if (repeatMode === "all") prevIndex = queue.length - 1;
      else return;
    }

    setCurrentIndex(prevIndex);
    setIsPlaying(true);
  };

  // ============================================
  // 🔥 4. 셔플 / 반복
  // ============================================
  const toggleShuffle = () => setIsShuffle(!isShuffle);

  const toggleRepeat = () => {
    if (repeatMode === "none") setRepeatMode("all");
    else if (repeatMode === "all") setRepeatMode("one");
    else setRepeatMode("none");
  };

  return (
    <PlayerContext.Provider
      value={{
        queue,
        currentTrack,
        currentIndex,
        isPlaying,
        isShuffle,
        repeatMode,
        startQueue,
        togglePlay,
        playNext,
        playPrev,
        toggleShuffle,
        toggleRepeat,
        audioRef,
      }}
    >
      {children}

      {/* 🔥 실제 오디오 태그 (전역) */}
      <audio
        ref={audioRef}
        onEnded={playNext}
      />
    </PlayerContext.Provider>
  );
}