import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSong } from "../../context/SongContext";
import { usePlayer } from "../../context/PlayerContext";

import MediaHeader from "../../components/Header/MediaHeader";
import LyricsSection from "../../components/LyricsSection/LyricsSection";
import AlbumRecommend from "../../components/Album/AlbumRecommend";

import styles from "./Songpage.module.css";

export default function SongPage() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { song, loadSong } = useSong();
  const { startQueue } = usePlayer();

  useEffect(() => {
    loadSong(id);
  }, [id]);

  if (!song) return <div>로딩 중...</div>;

  return (
    <div className={styles.wrapper}>
      <MediaHeader
        cover={song.cover}
        title={song.title}
        subtitle={song.artist}
        extraInfo={`${song.album} · ${song.year}`}
        onPlay={() => startQueue(song.tracks, 0)}
      />

      <LyricsSection lyrics={song.lyrics} />

      <AlbumRecommend albumId={song.albumId} />
    </div>
  );
}
