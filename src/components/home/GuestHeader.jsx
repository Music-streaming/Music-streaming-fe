// src/pages/HomeGuest/GuestHeader.jsx
import { useNavigate } from 'react-router-dom';
import IconButton from '../common/IconButton';
import styles from './Header.module.css';

export default function GuestHeader() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <IconButton
        size="small"
        onClick={() => navigate('/login')}
        icon={
          <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>
            Login
          </span>
        }
      />
    </div>
  );
}
