// src/components/common/ProfileModal.jsx
import styles from './ProfileModal.module.css';

export default function ProfileModal({
  open,
  onClose,
  username,
  followers,
  following,
  onLogout,
}) {
  // ⭐ modal이 열릴 때만 렌더
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h4 className={styles.title}>프로필</h4>

        <p className={styles.user}>{username}</p>

        <div className={styles.stats}>
          <div>
            <span className={styles.number}>{followers}</span>
            <span className={styles.label}>팔로워</span>
          </div>
          <div>
            <span className={styles.number}>{following}</span>
            <span className={styles.label}>팔로잉</span>
          </div>
        </div>

        <button className={styles.logout} onClick={onLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
