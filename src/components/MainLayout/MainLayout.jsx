import { useState } from "react"; 
import Sidebar from "../Sidebar/Sidebar"; 
import Playerbar from "../Playerbar/Playerbar"; 
import SearchModal from "../SearchModal/SearchModal"; 
import styles from "./MainLayout.module.css"; 

export default function MainLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className={styles.layout}>
      
      <div className={styles.sidebarWrapper}>
          <Sidebar setIsOpen={setIsModalOpen} />
      </div>
      
      <div className={styles.mainArea}>
        <main className={styles.main}>
          {children}
          </main>
      </div>


      {isModalOpen && (
        <SearchModal onColose={() => setIsModalOpen(false)} />
      )} 

    </div>

     <Playerbar />
     </>
  );
}
