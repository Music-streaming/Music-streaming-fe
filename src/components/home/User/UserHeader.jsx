import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/useAuth';
import ProfileModal from '../../common/ProfileModal';
import styles from '../common/Header.module.css';
import UserIcon from '../../../assets/User.png';
import { getMyInfo } from '../../../api/userApi';

export default function UserHeader() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!open) return;

    async function fetchProfile() {
      try {
        const res = await getMyInfo();
        setProfile(res.data); // ⭐ 최신 데이터 저장
      } catch (e) {
        console.error('프로필 불러오기 실패:', e);
      }
    }

    fetchProfile();
  }, [open]);

  return (
    <div className={styles.header}>
      <span className={styles.username}>{user.username}님</span>

      <button className={styles.profileIcon} onClick={() => setOpen(true)}>
        <img src={UserIcon} alt="프로필" />
      </button>

      {open && profile && (
        <ProfileModal
          username={profile.username}
          followers={profile.followers} // ⭐ API 응답 기준
          following={profile.following}
          onClose={() => setOpen(false)}
          onLogout={logout}
        />
      )}
    </div>
  );
}
