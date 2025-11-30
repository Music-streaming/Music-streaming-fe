import PlaylistCard from '../../common/PlaylistCard';
import CardCarousel from '../../common/CardCarousel';

export default function PlaylistCarousel({ title, playlists }) {
  return (
    <CardCarousel
      title={title}
      items={playlists}
      renderItem={(p) => (
        <PlaylistCard
          key={p.id}
          imageSrc={p.imageSrc}
          title={p.title}
          owner={p.ownerName || ''}
          slug={p.slug}
        />
      )}
    />
  );
}
