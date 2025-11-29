import { useState } from 'react';
import PlaylistCard from '../../common/PlaylistCard';
import styles from './FollowPlaylistSection.module.css';

export default function FollowPlaylistsSection({ playlists = [] }) {
  const [index, setIndex] = useState(0);

  const cardWidth = 245; // 225 width + 20 gap
  const visibleCount = 4;
  const maxIndex = Math.max(0, playlists.length - visibleCount);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const hasPlaylists = playlists.length > 0;

  return (
    <section style={{ marginBottom: '32px' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>
        Following Playlist
      </h3>

      {!hasPlaylists ? (
        <p style={{ color: '#aaa' }}>
          팔로우한 사람의 플레이리스트가 없습니다.
        </p>
      ) : (
        <div className={styles.wrapper}>
          {/* ⬅ 왼쪽 화살표: 4개 이상일 때만 표시 */}
          {playlists.length > visibleCount && (
            <button className={styles.arrowLeft} onClick={prev}>
              ◀
            </button>
          )}

          <div className={styles.carousel}>
            <div
              className={styles.inner}
              style={{ transform: `translateX(-${index * cardWidth}px)` }}
            >
              {playlists.map((p) => (
                <PlaylistCard
                  key={p.id}
                  imageSrc={p.thumbnail}
                  title={p.title}
                  artist={`${p.ownerName}님`}
                  playlistId={p.id}
                />
              ))}
            </div>
          </div>

          {/* ➡ 오른쪽 화살표: 4개 이상일 때만 표시 */}
          {playlists.length > visibleCount && (
            <button className={styles.arrowRight} onClick={next}>
              ▶
            </button>
          )}
        </div>
      )}
    </section>
  );
}
