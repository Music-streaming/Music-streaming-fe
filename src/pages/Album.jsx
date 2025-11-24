import { useState } from 'react';
import TrackList from '../components/common/TrackList';

const mockTracks = [
  { id: 1, title: '이상비행', duration: '2:34' },
  { id: 2, title: '해초', duration: '3:45' },
  { id: 3, title: '화홰', duration: '3:41' },
];

function Album() {
  const [currentTrackId, setCurrentTrackId] = useState(null);

  return (
    <TrackList
      tracks={mockTracks}
      currentTrackId={currentTrackId}
      onSelect={(id) => {
        console.log('선택된 트랙 id:', id);
        setCurrentTrackId(id);
      }}
    />
  );
}

export default Album;
