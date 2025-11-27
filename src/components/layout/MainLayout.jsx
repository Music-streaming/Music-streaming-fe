import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../layout/Sidebar';
import Playerbar from '../layout/Playerbar';
import SearchModal from '../Search/SearchModal';

import GuestHeader from '../home/GuestHeader';
import UserHeader from '../home/UserHeader';
import { useAuth } from '../../context/useAuth';

import styles from './MainLayout.module.css';

export default function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.sidebarWrapper}>
          <Sidebar setIsOpen={setIsModalOpen} />
        </div>

        <div className={styles.mainArea}>
          <main className={styles.main}>
            {isLoggedIn ? <UserHeader /> : <GuestHeader />}
            <Outlet />
          </main>
        </div>

        {isModalOpen && <SearchModal onColose={() => setIsModalOpen(false)} />}
      </div>

      <Playerbar />
    </>
  );
}
