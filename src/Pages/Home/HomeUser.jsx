import { useAuth } from '../../context/useAuth';
import TrackCarousel from '../../components/home/common/TrackCarousel';
import PlaylistCarousel from '../../components/home/common/PlaylistCarousel';
import FollowerCarousel from '../../components/home/common/FollowerCarousel';

export default function HomeUser() {
  const { user } = useAuth();

  const playlists = user?.playlists || [];
  const recommendedTracks = user?.recommendedTracks || [];
  const followers = user?.followers || [];

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <PlaylistCarousel title="FOLLOWING PLAYLISTS" playlists={playlists} />

      <FollowerCarousel title="FOLLOWERS" followers={followers} />

      <TrackCarousel title="RECOMMENDED" tracks={recommendedTracks} />
    </div>
  );
}
