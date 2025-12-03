import { createContext, useContext, useRef, useState } from "react";
import {
  getTrackDetail,
  getTrackLyrics,
  postTrackPlayback,
} from "../api/trackApi";
import YouTube from "react-youtube";

const PlayerContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePlayer() {
  return useContext(PlayerContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function normalizeTrack(track) {
  const p = track.playable;

  return {
    id: p.spotifyTrackId,
    title: p.title,
    artist: p.artist,
    album: p.album,
    imageUrl: p.thumbnailUrl,
    durationMs: p.durationMs,

    // 유튜브 재생 관련
    youtubeVideoId: p.youtubeVideoId,
    youtubeEmbedUrl:
      p.youtubeEmbedUrl ?? `https://www.youtube.com/embed/${p.youtubeVideoId}`,
    youtubeWatchUrl:
      p.youtubeWatchUrl ?? `https://www.youtube.com/watch?v=${p.youtubeVideoId}`,

    // 부가 정보
    likeCount: track.likeCount,
    liked: track.liked,
    satisfaction: track.satisfaction,
    recentPlaybacks: track.recentPlaybacks,
    lyrics: track.lyrics,
  };
}

export function PlayerProvider({ children }) {
  // 🔊 재생 상태 관련 State
  const [queue, setQueue] = useState([]); // 정규화된 트랙 배열
  const [currentIndex, setCurrentIndex] = useState(-1); // 현재 인덱스
  const [isPlaying, setIsPlaying] = useState(false);

  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState("none"); // none | all | one
  const [lyrics, setLyrics] = useState("");

  // YouTube Player 인스턴스
  const playerRef = useRef(null);

  // 현재 재생중인 트랙
  const currentTrack =
    currentIndex >= 0 && currentIndex < queue.length
      ? queue[currentIndex]
      : null;

  // 유튜브 옵션 (영상은 숨기고, autoplay + 컨트롤은 우리가 직접)
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
      controls: 0, // 유튜브 기본 컨트롤 숨기기
    },
  };

  // 가사 로드
  const loadLyrics = async (trackId) => {
    try {
      const data = await getTrackLyrics(trackId);
      setLyrics(data.lyrics || "");
    } catch (e) {
      console.error("Failed to load lyrics:", e);
      setLyrics("");
    }
  };

  // 트랙 id로 상세 정보/로그/가사 처리 (실제 재생은 YouTube가 담당)
  const playTrackById = async (trackId) => {
    try {
      const detail = await getTrackDetail(trackId);
      await postTrackPlayback(trackId);
      await loadLyrics(trackId);
      setIsPlaying(true);
      return detail;
    } catch (e) {
      console.error("Failed to play track by id:", e);
    }
  };

  //  1. 재생목록 시작 (클릭 시 호출)
  const startQueue = async (tracks, startIndex = 0) => {
    if (!tracks || tracks.length === 0) return;

    setQueue(tracks);
    setCurrentIndex(startIndex);

    const track = tracks[startIndex];
    if (track?.id) {
      await playTrackById(track.id);
    }
  };

  const setTrackIndex = async (idx) => {
    if (idx < 0 || idx >= queue.length) return;
    setCurrentIndex(idx);

    const track = queue[idx];
    if (track?.id) {
      await playTrackById(track.id);
    }
  };

  const appendAndPlay = (tracks) => {
    if (!tracks || tracks.length === 0) return;

    setQueue((prevQueue) => {
      const newQueue = [...prevQueue, ...tracks];
      const startIndex = prevQueue.length;

      setCurrentIndex(startIndex);
      setIsPlaying(true);

      const track = newQueue[startIndex];
      if (track?.id) {
        // 백엔드 로그/가사 로드
        playTrackById(track.id);
      }

      return newQueue;
    });
  };

  //  2. 재생 / 일시정지
  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  //  3. 이전곡, 다음곡
  const playNext = async () => {
    if (!queue.length) return;

    if (repeatMode === "one") {
      // 같은 곡 처음부터
      if (playerRef.current) {
        playerRef.current.seekTo(0);
        playerRef.current.playVideo();
      }
      return;
    }

    let nextIndex = currentIndex + 1;

    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      if (nextIndex >= queue.length) {
        if (repeatMode === "all") nextIndex = 0;
        else return;
      }
    }

    setCurrentIndex(nextIndex);
    const nextTrack = queue[nextIndex];
    if (nextTrack?.id) {
      await playTrackById(nextTrack.id);
    }
  };

  const playPrev = async () => {
    if (!queue.length) return;

    let prevIndex = currentIndex - 1;

    if (prevIndex < 0) {
      if (repeatMode === "all") prevIndex = queue.length - 1;
      else return;
    }

    setCurrentIndex(prevIndex);
    const prevTrack = queue[prevIndex];
    if (prevTrack?.id) {
      await playTrackById(prevTrack.id);
    }
  };

  // 4. 셔플 / 반복
  const toggleShuffle = () => setIsShuffle((prev) => !prev);

  const toggleRepeat = () => {
    if (repeatMode === "none") setRepeatMode("all");
    else if (repeatMode === "all") setRepeatMode("one");
    else setRepeatMode("none");
  };

  const deleteTrack = (index) => {
    setQueue((prev) => {
      const newQueue = prev.filter((_, i) => i !== index);

      if (index === currentIndex) {
        setCurrentIndex((before) => {
          if (before >= newQueue.length) return newQueue.length - 1;
          return before;
        });
      } else if (index < currentIndex) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }

      return newQueue;
    });
  };

  // YouTube Player 이벤트 핸들러
  const handleReady = (event) => {
    playerRef.current = event.target;
    if (isPlaying) {
      event.target.playVideo();
    }
  };

  const handleStateChange = (event) => {
    const YT_ENDED = 0;
    const YT_PLAYING = 1;
    const YT_PAUSED = 2;

    if (event.data === YT_PLAYING) {
      setIsPlaying(true);
    } else if (event.data === YT_PAUSED) {
      setIsPlaying(false);
    } else if (event.data === YT_ENDED) {
      // 한 곡 끝났을 때 다음 곡
      playNext();
    }
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
        playTrackById,
        appendAndPlay,
        togglePlay,
        deleteTrack,
        playNext,
        playPrev,
        toggleShuffle,
        toggleRepeat,
        lyrics,
        setTrackIndex,
        // YouTube playerRef를 직접 쓰고 싶을 수도 있으니 노출
        playerRef,
      }}
    >
      {children}

      {/* 실제 유튜브 플레이어 (숨김 재생) */}
      {currentTrack && currentTrack.youtubeVideoId && (
        <YouTube
          videoId={currentTrack.youtubeVideoId}
          opts={opts}
          onReady={handleReady}
          onStateChange={handleStateChange}
        />
      )}
    </PlayerContext.Provider>
  );
}
