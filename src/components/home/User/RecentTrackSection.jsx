import MediaCard from '../../common/MediaCard';

export default function RecentTracksSection({ tracks }) {
  return (
    <section style={{ marginBottom: '32px' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>최근 들은 음악</h3>

      {tracks?.length === 0 ? (
        <p style={{ color: '#aaa' }}>최근 들은 음악이 없습니다.</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {tracks.map((t) => (
            <MediaCard
              key={t.id}
              imageSrc={t.image}
              title={t.title}
              artist={t.artist}
              albumId={t.albumId}
              musicId={t.id}
              artistId={t.artistId}
            />
          ))}
        </div>
      )}
    </section>
  );
}
