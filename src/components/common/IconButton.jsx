import styles from './IconButton.module.css';

export default function IconButton({ icon, onClick, size = 'medium' }) {
  return (
    <button className={`${styles.button} ${styles[size]}`} onClick={onClick}>
      {icon}
    </button>
  );
}
