import PlaylistCard from '../../common/MediaCard';

export default function UserPlaylistsSection({ playlists }) {
  return (
    <section style={{ marginBottom: '32px' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>
        내 플레이리스트
      </h3>

      {playlists?.length === 0 ? (
        <p style={{ color: '#aaa' }}>만든 플레이리스트가 없습니다.</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {playlists.map((p) => (
            <PlaylistCard
              key={p.id}
              imageSrc={p.thumbnail}
              title={p.title}
              playlistId={p.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}
