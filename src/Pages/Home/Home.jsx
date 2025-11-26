import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/common/IconButton';
import MediaCard from '../../components/common/MediaCard';
import styles from './Home.module.css';

const todayTracks = [
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '입춘',
    artist: '한로로',
    albumId: 1,
    musicId: 101,
    artistId: 1001,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '이상비행',
    artist: '한로로',
    albumId: 2,
    musicId: 102,
    artistId: 1001,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '항해',
    artist: '유다빈밴드',
    albumId: 3,
    musicId: 103,
    artistId: 1002,
  },
];

const recommendedTracks = [
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '추천 트랙 1',
    artist: '아티스트 1',
    albumId: 4,
    musicId: 201,
    artistId: 2001,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: 'New Jeans',
    artist: 'NewJeans',
    albumId: 5,
    musicId: 202,
    artistId: 2002,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '추천 트랙 3',
    artist: '아티스트 3',
    albumId: 6,
    musicId: 203,
    artistId: 2003,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconButton
          size="small"
          onClick={() => navigate('/login')}
          icon={
            <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>
              Login
            </span>
          }
        />
      </div>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>오늘의 트랙</h3>

        <div className={styles.cardRow}>
          {todayTracks.map((track) => (
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

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>추천 트랙</h3>

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
    </div>
  );
}
