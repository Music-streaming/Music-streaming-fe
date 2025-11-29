import MediaCard from '../../common/MediaCard';
import CardCarousel from '../../common/CardCarousel';

export default function RecentTrackCarousel({
  title = '최근 들은 음악',
  tracks = [],
}) {
  return (
    <CardCarousel
      title={title}
      items={tracks}
      renderItem={(t) => (
        <MediaCard
          key={t.musicId}
          imageSrc={t.image}
          title={t.title}
          artist={t.artist}
          albumId={t.albumId}
          musicId={t.musicId}
          artistId={t.artistId}
        />
      )}
    />
  );
}
