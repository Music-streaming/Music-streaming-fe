import { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import { Outlet } from 'react-router-dom';
import Playerbar from '../layout/Playerbar';
import SearchModal from '../Search/SearchModal';
import styles from './MainLayout.module.css';

export default function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.sidebarWrapper}>
          <Sidebar setIsOpen={setIsModalOpen} />
        </div>

        <div className={styles.mainArea}>
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>

        {isModalOpen && <SearchModal onColose={() => setIsModalOpen(false)} />}
      </div>

      <Playerbar />
    </>
  );
}
