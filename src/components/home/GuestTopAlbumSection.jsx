import MediaCard from '../common/MediaCard';
import styles from './Guest.module.css';

const topAlbums = [
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSeHFoJ5oDOsz-tI1ZsmnNZBpbTPbQ',
    title: '향해',
    artist: '유다인밴드',
    albumId: 2,
    musicId: 102,
    artistId: 2001,
  },
];

export default function GuestTopAlbumSection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>TOP ALBUM</h3>
      <div className={styles.cardRow}>
        {topAlbums.map((album) => (
          <MediaCard
            key={album.albumId}
            imageSrc={album.imageSrc}
            title={album.title}
            artist={album.artist}
            albumId={album.albumId}
            musicId={album.musicId}
            artistId={album.artistId}
          />
        ))}
      </div>
    </section>
  );
}
