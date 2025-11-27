import { useState } from 'react';
import { useAuth } from '../../context/useAuth';
import ProfileModal from '../common/ProfileModal';
import styles from './Header.module.css';

export default function UserHeader() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.header}>
      <span className={styles.username}>{user.username}님</span>

      <button className={styles.profileIcon} onClick={() => setOpen(true)}>
        <img src="/icons/user-icon.svg" alt="프로필" />
      </button>

      {open && (
        <ProfileModal
          username={user.username}
          followers={user.followers}
          following={user.following}
          onClose={() => setOpen(false)}
          onGoMyPage={() => (window.location.href = '/myPage')}
          onLogout={logout}
        />
      )}
    </div>
  );
}
