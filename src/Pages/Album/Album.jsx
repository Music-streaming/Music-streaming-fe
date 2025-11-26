import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAlbum } from "../../context/AlbumContext";
import { usePlayer } from "../../context/PlayerContext";

import MediaHeader from "../../components/Header/MediaHeader";
import TrackList from "../../components/common/TrackList";
import AlbumComments from "../../components/Album/AlbumComments";
import AlbumRecommend from "../../components/Album/AlbumRecommend";


import styles from "./Album.module.css";

export default function Album(){
  const { albumId } = useParams();
  const { album, tracks,loadAlbum } = useAlbum();
  const { startQueue } = usePlayer();
  const navigate = useNavigate();

  useEffect(() => {
    loadAlbum(albumId);
  }, [albumId]);

  if (!album) return <div>로딩 중...</div>;

   const handlePlayAllTracks = () => {
    startQueue(tracks, 0);
  };

  const handleShuffleTracks = () => {
    const shuffled = [...tracks].sort(() => Math.random() - 0.5);
    startQueue(shuffled, 0);
  };

  return (
    <div className={styles.wrapper}>
        <MediaHeader
        cover={album.cover}
        title={album.title}
        subtitle={album.artist}
        extraInfo={album.year}
        onPlay={handlePlayAllTracks}
        onShuffle={handleShuffleTracks}
        />
      <TrackList 
         tracks= {tracks}
         onSelect={(trackId) => navigate(`/song/${trackId}`)}
      />
      <AlbumComments />
      <AlbumRecommend />
    </div>
  );
}