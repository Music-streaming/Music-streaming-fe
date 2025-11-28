import { useAuth } from '../../context/useAuth';

import RecentTracksSection from '../../components/home/User/RecentTrackSection';
import UserPlaylistsSection from '../../components/home/User/UserPlaylistSection';
import RecommendedTracks from '../../components/home/User/RecentTrackSection';

export default function HomeUser() {
  const { user } = useAuth();

  // 임시 mock 데이터 (서버 연결 전)
  const recentTracks = user?.recentTracks || [];
  const playlists = user?.playlists || [];

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <RecentTracksSection tracks={recentTracks} />
      <UserPlaylistsSection playlists={playlists} />
      <RecommendedTracks />
    </div>
  );
}
