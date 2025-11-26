// src/pages/HomeGuest/HomeGuest.jsx
import GuestHeader from './GuestHeader';
import GuestTopAlbumSection from './GuestTopAlbumSection';
import RecommendedTracks from './RecommendedTracks';

export default function HomeGuest() {
  return (
    <div style={{ width: '100%', padding: '24px', color: 'white' }}>
      <GuestHeader />
      <GuestTopAlbumSection />
      <RecommendedTracks />
    </div>
  );
}
