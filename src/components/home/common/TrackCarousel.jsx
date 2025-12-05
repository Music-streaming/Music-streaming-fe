import MediaCard from '../../common/MediaCard';
import CardCarousel from '../../common/CardCarousel';

export default function TrackCarousel({ title, tracks,onAlbumClick }) {
  return (
    <CardCarousel
      title={title}
      items={tracks}
      renderItem={(track) => (
        <MediaCard
          key={track.musicId}
          imageSrc={track.imageSrc}
          title={track.title}
          artist={track.artist}
          albumId={track.albumId}
          musicId={track.musicId}
          artistId={track.artistId}
          onClick={() => onAlbumClick(track.albumId)}
        />
      )}
    />
  );
}
