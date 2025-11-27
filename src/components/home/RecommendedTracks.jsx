// src/pages/HomeGuest/GuestRecommendedTracks.jsx
import MediaCard from '../common/MediaCard';
import styles from './RecommendedTrack.module.css';

const recommendedTracks = [
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '추천 트랙 1',
    artist: '아티스트 1',
    albumId: 3,
    musicId: 201,
    artistId: 2002,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: 'New Jeans',
    artist: 'NewJeans',
    albumId: 4,
    musicId: 202,
    artistId: 2003,
  },
];

export default function RecommendedTracks() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>RECOMMENDED</h3>
      <div className={styles.cardRow}>
        {recommendedTracks.map((track) => (
          <MediaCard
            key={track.musicId}
            imageSrc={track.imageSrc}
            title={track.title}
            artist={track.artist}
            albumId={track.albumId}
            musicId={track.musicId}
            artistId={track.artistId}
          />
        ))}
      </div>
    </section>
  );
}
