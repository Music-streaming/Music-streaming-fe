import React, { useState } from 'react';
import SearchModal from './SearchModal'; // 모달 컴포넌트 불러오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위해 추가
import styles from './Searchinput.module.css';

export default function SearchInput() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // 🌟 외부에서 입력 상태 관리 시작!

  // 모달을 열고, 입력 필드가 포커스된 상태를 유지
  const handleOpenModal = () => setIsModalOpen(true);

  // 모달을 닫는 함수
  const handleCloseModal = () => setIsModalOpen(false);

  // 🔍 최종 검색 실행 로직 (검색 버튼/Enter 클릭 시)
  const handleFinalSearch = (queryToSearch = searchTerm) => {
    if (queryToSearch.trim() === '') return;
    navigate(`/search?q=${queryToSearch}`);
    handleCloseModal(); // 검색 후 모달 닫기
  };

  // Enter 키 입력 핸들러
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFinalSearch(searchTerm);
    }
  };

  return (
    <div className={styles.searchBox}>
      
      {/* 1. 검색 시작용 Input 박스 - 이제 실제 입력 필드가 됩니다! */}
      <input
        type="text"
        placeholder="Search"
        value={searchTerm} // 🌟 상태와 연결
        onChange={(e) => setSearchTerm(e.target.value)} // 🌟 입력 시 상태 업데이트
        onFocus={handleOpenModal} // 포커스 시 모달 열기
        onKeyPress={handleKeyPress} // Enter 키 입력 처리
        // readOnly={true} 제거!
        className={styles.input}
      />
      
      {/* 2. 모달 컴포넌트 렌더링 */}
      {isModalOpen && (
        <SearchModal
          onClose={handleCloseModal}
          // 🌟 SearchModal이 필요로 하는 모든 Props를 전달
          searchTerm={searchTerm}
          handleSearch={handleFinalSearch}
        />
      )}
    </div>
  );
}