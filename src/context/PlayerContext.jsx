import { createContext, useContext, useRef, useState } from "react";
import { getTrackDetail, getTrackPlayback, getTrackLyrics, postTrackPlayback } from "../api/trackApi";
import YouTube from "react-youtube";

const PlayerContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export function usePlayer() {
  return useContext(PlayerContext);
}

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
    youtubeEmbedUrl: p.youtubeEmbedUrl ?? `https://www.youtube.com/embed/${p.youtubeVideoId}`,
    youtubeWatchUrl: p.youtubeWatchUrl ?? `https://www.youtube.com/watch?v=${p.youtubeVideoId}`,

    // 부가 정보
    likeCount: track.likeCount,
    liked: track.liked,
    satisfaction: track.satisfaction,
    recentPlaybacks: track.recentPlaybacks,
    lyrics: track.lyrics
  };
}

export function PlayerProvider({ children }) {
  const audioRef = useRef(null);

  // 재생 상태 관련 State
  const [queue, setQueue] = useState([]);              // 트랙 배열
  const [currentIndex, setCurrentIndex] = useState(-1); // 현재 인덱스
  const [isPlaying, setIsPlaying] = useState(false);

  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState("none"); // none | all | one
  const [audioUrl, setAudioUrl] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [currentTrack, setCurrentTrack] = useState();
  const playerRef = useRef(null);


  const playTrackById = async (trackId)=>{
    const detail = await getTrackDetail(trackId);

    const playback = await getTrackPlayback(trackId);

    postTrackPlayback(trackId);

    setAudioUrl(playback.streamUrl || playback.url || "");
    setLyrics("");
    setIsPlaying(true);

    setTimeout(()=> {
      if(audioRef.current){
        audioRef.current.src = playback.streamUrl || playback.url;
        audioRef.current.play();
        loadLyrics(trackId);

      }
    },30);


    return detail;
  };

  // 현재 재생중인 트랙
  const currentTrack =
    currentIndex >= 0 && currentIndex < queue.length
      ? queue[currentIndex]
      : null;

  //  1. 재생목록 시작 (클릭 시 호출)
  const startQueue = async (tracks, startIndex = 0) => {
    if (!tracks || tracks.length === 0) return;

    setQueue(tracks);
    setCurrentIndex(startIndex);
    
    const track = tracks[startIndex];

    if(track?.id){
      await playTrackById(track.id);
    }
  };

  const setTrackIndex =(idx) => {
    setCurrentIndex(idx);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 50);
  };

 const appendAndPlay = (tracks) => {
  if(!tracks || tracks.length === 0) return;
  setQueue((prevQueue) => {
    const newQueue = [...prevQueue, ...tracks];

    const startIndex = prevQueue.length;

    setCurrentIndex(startIndex);
    setIsPlaying(true);

    setTimeout(()=> {
      if(audioRef.current) audioRef.current.play();
    },50);

    return newQueue;
  });
 } ;

  //  2. 재생 / 일시정지
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

  //  3. 이전곡, 다음곡
  const playNext = async () => {
    if (repeatMode === "one") {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    let nextIndex = currentIndex + 1;

    if (isShuffle) {
      // eslint-disable-next-line react-hooks/purity
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      if (nextIndex >= queue.length) {
        if (repeatMode === "all") nextIndex = 0;
        else 
          return;
        
      }
    }

    setCurrentIndex(nextIndex);
    const nextTrack = queue[nextIndex];
    if(nextTrack.id) await playTrackById(nextTrack.id);
  };

  const playPrev = async () => {
    let prevIndex = currentIndex - 1;

    if (prevIndex < 0) {
      if (repeatMode === "all") prevIndex = queue.length - 1;
      else return;
    }

    setCurrentIndex(prevIndex);

    const prevTrack = queue[prevIndex];
    if(prevTrack?.id) 
      await playTrackById(prevTrack.id);
  };

  // 4. 셔플 / 반복
  const toggleShuffle = () => setIsShuffle(!isShuffle);

  const toggleRepeat = () => {
    if (repeatMode === "none") setRepeatMode("all");
    else if (repeatMode === "all") setRepeatMode("one");
    else setRepeatMode("none");
  };

  const deleteTrack = (index) => {
    setQueue((prev)=> {
      let newQueue = prev.filter((_, i) => i !== index);

      if (index === currentIndex){
        setCurrentIndex((before) => {
          if(before >= newQueue.length) return newQueue.length - 1;
          return before;
        });
      }
      else if (index < currentIndex){
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }

      return newQueue;
    });
  };

  const loadLyrics = async (trackId) => {
    const data = await getTrackLyrics(trackId);
    setLyrics(data.lyrics || "");
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
        audioRef,
        audioUrl,
        lyrics,
        setTrackIndex,
      }}
    >
      {children}

      {/* 실제 오디오 태그 (전역) */}
      <audio
        ref={audioRef}
        onEnded={playNext}
      />
    </PlayerContext.Provider>
  );
}