// src/layout/common/UserHeader.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/useAuth';
import ProfileModal from '../../common/ProfileModal';
import UserIcon from '../../../assets/User.png';
import { getMyInfo } from '../../../api/userApi';
import styles from '../common/Header.module.css';

export default function UserHeader() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  // 모달 열릴 때 프로필 불러오기
  useEffect(() => {
    if (!open) return;

    async function fetch() {
      try {
        const res = await getMyInfo();
        setProfile(res.data);
      } catch (e) {
        console.error('프로필 불러오기 실패:', e);
      }
    }

    fetch();
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.header}>
      <span className={styles.username}>{user?.username}님</span>

      <button className={styles.profileIcon} onClick={handleOpen}>
        <img src={UserIcon} alt="프로필" />
      </button>

      {/* 모달 렌더 조건 (profile 없어도 모달은 뜨게 변경!) */}
      <ProfileModal
        open={open}
        onClose={() => setOpen(false)}
        username={profile?.username ?? user?.username}
        followers={profile?.followers ?? 0}
        following={profile?.following ?? 0}
        onLogout={logout}
      />
    </div>
  );
}
