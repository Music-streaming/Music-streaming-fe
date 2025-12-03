import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAlbum } from '../../context/AlbumContext';
import { usePlayer } from '../../context/PlayerContext';

import MediaHeader from '../../components/common/MediaHeader';
import TrackList from '../../components/Album/TrackList';
import AlbumComments from '../../components/Album/AlbumComments';
import AlbumRecommend from '../../components/Album/AlbumRecommend';

import styles from './Album.module.css';

export default function Album() {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const {
    album,
    tracks,
    loadAlbum,
    loadComments,
  } = useAlbum();

  const {appendAndPlay} = usePlayer();

  useEffect(() => {
      if (!album) return;

      loadAlbum(albumId);
      loadComments(albumId);

  }, [albumId]);

  if(!album) return <div>로딩 중...</div>;



  const handlePlayAllTracks = () => {
    if(!tracks || tracks.length === 0) return;
    appendAndPlay(tracks, 0);
  };

  const handleShuffleTracks = () => {
    if(!tracks || tracks.length === 0) return;

    const shuffled = [...tracks].sort(() => Math.random() - 0.5);
    appendAndPlay(shuffled, 0);
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
        tracks={tracks}
        onSelect={(trackId) => navigate(`/song/${trackId}`)}
      />
      <AlbumComments albumId = {albumId} />
      <AlbumRecommend artistId = {album.artistId} currentAlbumId = {albumId} />
    </div>
  );
}
