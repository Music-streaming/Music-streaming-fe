// src/pages/HomeGuest/HomeGuest.jsx
import GuestTopAlbumSection from '../../components/home/GuestTopAlbumSection';
import RecommendedTracks from '../../components/home/RecommendedTracks';

export default function Guest() {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <GuestTopAlbumSection />
      <RecommendedTracks />
    </div>
  );
}
