import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './PlaylistPage.module.css';
import { usePlayer } from '../../context/PlayerContext';
import MediaHeader from '../../components/common/MediaHeader';

import MoreIcon from '../../assets/More.png';

const PLAYLISTS = {
  favourites: {
    id: 'favourites',
    title: 'FAVOURITES',
    owner: '최연우',
    updatedAt: '지난 주에 업데이트됨',
    coverImage: 'https://picsum.photos/500/500?f',
    tracks: [
      {
        id: 1,
        title: '흰수염고래',
        artist: 'YB',
        duration: '4:39',
        cover: 'https://picsum.photos/200?1',
        audioUrl: 'https://example.com/audio1.mp3',
      },
      {
        id: 2,
        title: '천년의 사랑',
        artist: '박완규',
        duration: '4:28',
        cover: 'https://picsum.photos/200?2',
        audioUrl: 'https://example.com/audio2.mp3',
      },
    ],
  },
  7080: {
    id: '7080',
    title: '7080',
    owner: '최연우',
    updatedAt: '어제 업데이트됨',
    coverImage: 'https://picsum.photos/500/500?7080',
    tracks: [
      {
        id: 10,
        title: '내 마음의 보석상자',
        artist: '해바라기',
        duration: '3:55',
        cover: 'https://picsum.photos/200?3',
        audioUrl: 'https://example.com/audio3.mp3',
      },
    ],
  },
};

export default function PlaylistPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { appendAndPlay } = usePlayer();

  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const found = PLAYLISTS[slug];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPlaylist(found || null);
  }, [slug]);

  if (!playlist) {
    return (
      <div className={styles.wrapper}>플레이리스트를 찾을 수 없습니다.</div>
    );
  }

  const handlePlayAll = () => {
    appendAndPlay(playlist.tracks);
  };

  const handleShuffle = () => {
    const shuffled = [...playlist.tracks].sort(() => Math.random() - 0.5);
    appendAndPlay(shuffled);
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다!');
  };

  return (
    <div className={styles.wrapper}>
      {/* 상단: 커버 + 정보 + 버튼 */}
      <MediaHeader
        cover={playlist.coverImage}
        title={playlist.title}
        subtitle={playlist.owner}
        extraInfo={playlist.updatedAt}
        onPlay={handlePlayAll}
        onShuffle={handleShuffle}
      />
      <button className={styles.moreBtn} onClick={copyShareLink}>
        <img src={MoreIcon} alt="more" />
      </button>

      {/* 하단: 트랙 리스트 */}
      <table className={styles.trackTable}>
        <thead>
          <tr>
            <th>노래</th>
            <th>아티스트</th>
            <th>시간</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {playlist.tracks.map((track) => (
            <tr key={track.id} className={styles.row}>
              <td
                className={styles.songTitle}
                onClick={() => navigate(`/track/${track.id}`)}
              >
                <img
                  src={track.cover}
                  alt={track.title}
                  className={styles.smallImg}
                />
                {track.title}
              </td>
              <td>{track.artist}</td>
              <td>{track.duration}</td>
              <td>
                <button className={styles.dotBtn} onClick={copyShareLink}>
                  <img src={MoreIcon} alt="more" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
