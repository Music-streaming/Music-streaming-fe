/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useSearch } from '../../context/SearchContext';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArtistCarousel from '../../components/Search/ArtistCarousel';
import MediaCard from '../../components/common/MediaCard';
import MediaListItem from '../../components/Search/MediaListItem';

import styles from './SearchPage.module.css';

export default function SearchPage() {
  const { artists, albums, tracks, search } = useSearch();   // ✔ media → albums
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const q = params.get('q');

  useEffect(() => {
    if (q && q.trim() !== '') search(q);
  }, [q]);

  return (
    <div className={styles.wrapper}>
      <div>
        {/* 아티스트 */}
        <section className={styles.section}>
          <h5 className={styles.title}>아티스트</h5>
          <ArtistCarousel artists={artists} />
        </section>

        {/* 앨범 */}
        <section className={styles.section}>
          <h5 className={styles.title}>앨범</h5>
          <div className={styles.row}>

            {albums.slice(0, 4).map((item) => (
              <MediaCard
                key={item.id}                                    // ✔ id
                imageSrc={item.thumbnailUrl}                    // ✔ thumbnailUrl
                title={item.name}                               // ✔ name
                artist={item.artist}                            // ✔ artist
                onClick={() => navigate(`/album/${item.id}`)}   // ✔ album detail 이동
              />
            ))}

          </div>
        </section>
      </div>

      <div>
        {/* 노래 */}
        <section className={styles.right}>
          <h5 className={styles.title}>노래</h5>
          <div className={styles.trackSection}>
            {tracks.map((track) => (
              <MediaListItem
                key={track.id}
                imageSrc={track.cover}
                title={track.title}
                artist={track.artist}
                onClick={() => navigate(`/track/${track.id}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
