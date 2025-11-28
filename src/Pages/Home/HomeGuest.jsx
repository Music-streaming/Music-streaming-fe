// src/pages/HomeGuest/HomeGuest.jsx
import GuestTopAlbumSection from '../../components/home/Guest/GuestTopAlbumSection';
import RecommendedTracks from '../../components/home/Guest/RecommendedTracks';

export default function HomeGuest() {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <GuestTopAlbumSection />
      <RecommendedTracks />
    </div>
  );
}
