import TrackItem from './TrackItem';

function TrackList({ tracks, currentTrackId, onSelect }) {
  return (
    <div className="track-list">
      {tracks.map((track, i) => (
        <TrackItem
          key={track.id}
          index={i + 1}
          title={track.title}
          duration={track.duration}
          isActive={track.id === currentTrackId}
          onClick={() => onSelect(track.id)}
        />
      ))}
    </div>
  );
}

export default TrackList;
