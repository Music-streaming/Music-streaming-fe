// src/components/layout/header/UserHeader.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/useAuth';
import ProfileModal from '../../common/ProfileModal';
import styles from '../common/Header.module.css';
import UserIcon from '../../../assets/User.png';
import { getFollowerCount, getFollowingCount } from '../../../api/userApi';

export default function UserHeader() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!open) return;
    if (!user || !user.id) {
      console.warn('⚠️ 로그인 사용자 id가 없습니다.');
      return;
    }

    async function fetchProfile() {
      try {
        // 팔로워/팔로잉 카운트 병렬 요청
        const [followersRes, followingRes] = await Promise.all([
          getFollowerCount(user.id),
          getFollowingCount(user.id),
        ]);

        // 백엔드 응답 형태에 맞춰서 필드 이름 수정해줘야 함
        const followers = followersRes.data.count ?? 0;
        const following = followingRes.data.count ?? 0;

        // 모달에서 쓸 프로필 정보
        setProfile({
          username: user.username,
          followers,
          following,
        });
      } catch (e) {
        console.error('프로필 불러오기 실패:', e);
      }
    }

    fetchProfile();
  }, [open, user]);

  return (
    <div className={styles.header}>
      <span className={styles.username}>{user.username}님</span>

      <button className={styles.profileIcon} onClick={() => setOpen(true)}>
        <img src={UserIcon} alt="프로필" />
      </button>

      {open && profile && (
        <ProfileModal
          username={profile.username}
          followers={profile.followers}
          following={profile.following}
          onClose={() => setOpen(false)}
          onLogout={logout}
        />
      )}
    </div>
  );
}
