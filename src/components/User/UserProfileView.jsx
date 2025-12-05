import PlaylistCarousel from '../home/common/PlaylistCarousel';
import TrackCarousel from '../home/common/TrackCarousel';
import styles from './UserProfileContainer.module.css';

export default function UserProfileView({
  userData,
  isFollowing,
  onToggleFollow,
}) {
  // recentTracks가 없을 수도 있으니까 안전하게 기본값 처리
  const recentTracks = userData.recentTracks || [];

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <img src={userData.avatar} alt="profile" className={styles.avatar} />

        <div className={styles.info}>
          <h2 className={styles.nickname}>{userData.nickname}</h2>

          <div className={styles.stats}>
            <span>팔로워 {userData.followers}</span>
            <span>·</span>
            <span>팔로잉 {userData.following}</span>
          </div>

          <button
            className={`${styles.followBtn} ${
              isFollowing ? styles.followingBtn : ''
            }`}
            onClick={onToggleFollow}
          >
            {isFollowing ? '팔로잉' : '팔로우'}
          </button>
        </div>
      </div>

      <PlaylistCarousel title="플레이리스트" playlists={userData.playlists} />

      {recentTracks.length > 0 && (
        <TrackCarousel title="최근 들은 음악" tracks={recentTracks} />
      )}
    </div>
  );
}
