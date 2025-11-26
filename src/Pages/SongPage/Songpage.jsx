import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAlbum } from "../../context/AlbumContext";
import { usePlayer } from "../../context/PlayerContext";

import MediaHeader from "../../components/Header/MediaHeader";
import LyricsSection from "../../components/LyricsSection/LyricsSection";
import AlbumRecommend from "../../components/Album/AlbumRecommend";
import styles from "./Songpage.module.css";

export default function SongPagee() {
  const { albumId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { album, loadAlbum } = useAlbum();
  const { startQueue } = usePlayer();

  useEffect(() => {
    loadAlbum(albumId);
  }, [albumId]);

  if (!album) return <div>로딩 중...</div>;

  return (
    <div className={styles.wrapper}>
      <MediaHeader
        cover={album.cover}
        title={album.title}
        subtitle={album.artist}
        extraInfo={album.year}
        onPlay={() => startQueue(album.tracks, 0)}
        onShuffle={() =>
          startQueue([...album.tracks].sort(() => Math.random() - 0.5), 0)
        }
      />

      <LyricsSection lyrics={album.lyrics} />

      <AlbumRecommend albumId={albumId} />
    </div>
  );
}
