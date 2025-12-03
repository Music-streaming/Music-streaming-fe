import styles from './ProfileModal.module.css';

export default function ProfileModal({
  username,
  followers,
  following,
  onClose,
  onLogout,
}) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h4 className={styles.title}>프로필</h4>

        {/* 유저 정보 */}
        <p className={styles.user}>{username}</p>

        {/* 팔로잉/팔로워 */}
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

        <button className={styles.close} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
