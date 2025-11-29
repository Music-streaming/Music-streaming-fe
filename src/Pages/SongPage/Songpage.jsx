import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSong } from "../../context/SongContext";
import { usePlayer } from "../../context/PlayerContext";

import MediaHeader from "../../components/common/MediaHeader";
import LyricsSection from "../../components/Album/LyricsSection";
import AlbumRecommend from "../../components/Album/AlbumRecommend";

import styles from "./SongPage.module.css";

export default function SongPage() {
  const { id } = useParams();
  const { song, loadSong } = useSong();
  const { appendAndPlay } = usePlayer();

  useEffect(() => {
    loadSong(id);
  }, [id]);

  if (!song) return <div>로딩 중...</div>;

  const handlePlaySong = () => {
    appendAndPlay([song], 0); // 단일 곡 재생
  };

  return (
    <div className={styles.wrapper}>
      <MediaHeader
        cover={song.cover}
        title={song.title}
        subtitle={song.artist}
        extraInfo={`${song.album} · ${song.year}`}
        onPlay={handlePlaySong}   // 🔥 클릭하면 PlayerContext로 재생
      />

      <LyricsSection lyrics={song.lyrics} />

      {/* 추천 앨범은 albumId 필요 → dummy 기준으로 제거하거나 유지 */}
      {/* <AlbumRecommend albumId={song.albumId} /> */}
    </div>
  );
}
