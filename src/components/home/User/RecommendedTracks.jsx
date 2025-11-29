import { useState } from 'react';
import MediaCard from '../../common/MediaCard';
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
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: 'New Jeans',
    artist: 'NewJeans',
    albumId: 4,
    musicId: 202,
    artistId: 2003,
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
  const [index, setIndex] = useState(0);

  const cardWidth = 245; // card 225 + gap 20
  const visibleCount = 4;
  const maxIndex = Math.max(0, recommendedTracks.length - visibleCount);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>RECOMMENDED</h3>

      <div className={styles.wrapper}>
        {/* 왼쪽 화살표 (index > 0일 때만 표시) */}
        {index > 0 && (
          <button className={styles.arrowLeft} onClick={prev}>
            ◀
          </button>
        )}

        <div className={styles.carousel}>
          <div
            className={styles.inner}
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
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
        </div>

        {/* 오른쪽 화살표 (index < maxIndex일 때만 표시) */}
        {index < maxIndex && (
          <button className={styles.arrowRight} onClick={next}>
            ▶
          </button>
        )}
      </div>
    </section>
  );
}
