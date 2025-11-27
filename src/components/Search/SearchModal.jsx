import React, { useState, useEffect } from 'react';
import styles from './SearchModal.module.css';

// 📌 API 호출 시뮬레이션 함수 (이전과 동일)
const fetchCategorizedSuggestions = async (query) => {
    // ... (fetchCategorizedSuggestions 함수 본문은 이전과 동일) ...
    // API 호출 대신 목업 데이터로 시뮬레이션
    if (query.length < 2) return { 아티스트: [], 곡: [] };
    await new Promise(resolve => setTimeout(resolve, 300));
    const artistList = ["르세라핌", "아이브", "뉴진스"];
    const trackList = ["Ditto", "Love wins all", "After LIKE"];
    const lowerQuery = query.toLowerCase();

    return {
        아티스트: artistList.filter(item => item.toLowerCase().includes(lowerQuery)),
        곡: trackList.filter(item => item.toLowerCase().includes(lowerQuery))
    };
};


// 🌟 props 구조 수정: 입력 상태와 검색 실행 함수를 부모로부터 받습니다.
export default function SearchModal({  searchTerm, handleSearch }){ 
  // 이제 useNavigate, inputRef, handleSearch, handleInputChange, handleKeyPress는 필요 없습니다!
  
  const [suggestions, setSuggestions] = useState({ 아티스트: [], 곡: [] }); 
  const [isLoading, setIsLoading] = useState(false); 

  // 1. API 호출 로직 (useEffect 사용)
  useEffect(() => {
    const query = searchTerm.trim();
    let didCancel = false;
    
    const runSearch = async () => {
        setIsLoading(true);
        const results = await fetchCategorizedSuggestions(query);

        if(!didCancel){
            setSuggestions(results);
            setIsLoading(false);
        }
    };
    
    if (query.length >=2 ) { // 2글자 이상일 때만 검색 실행
        runSearch();
    } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLoading(false);
        setSuggestions({ 아티스트: [], 곡: [] });
    }
    
    return () => {
        didCancel = true;
    };

  }, [searchTerm]); // searchTerm이 바뀔 때마다 재실행

  // 렌더링을 위한 헬퍼 변수
  const hasSuggestions = Object.values(suggestions).some(list => list.length > 0);

  return (
    // 모달 배경은 input 위에 뜨도록 조정이 필요할 수 있습니다.

      <div className={styles.modal}>
        <div className={styles.header}>
            {/* 💡 현재 검색어를 시각적으로만 표시 (입력 불가) */}
            <div className={styles.headerText}>
                {searchTerm || "검색어를 입력해주세요..."} 
            </div>
        </div>

        {/* --- 검색 결과 목록 영역 (이전과 동일) --- */}
        <div className={styles.result}>
            
            {/* 💡 로딩 중일 때 로딩 텍스트 표시 */}
            {isLoading && (
                <div className={styles.loadingText}>...로딩 중...</div>
            )}
            
            {/* 로딩이 끝났고, 추천 검색어가 있을 때 목록 표시 */}
            {!isLoading && hasSuggestions ? (
                Object.entries(suggestions).map(([category, items]) => (
                    items.length > 0 && (
                        <div key={category} className={styles.categoryBlock}>
                            <h4 className={styles.categoryTitle}>{category}</h4>
                            <ul className={styles.itemList}>
                                {items.map((item, index) => (
                                    <li 
                                        key={index} 
                                        // 🌟 항목 클릭 시 부모의 검색 실행 함수 호출
                                        onClick={() => handleSearch(item)}
                                        className={styles.item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                ))
            ) : (
                // 로딩이 끝났고, 검색어는 있지만 결과가 없을 때
                !isLoading && searchTerm.trim() && (
                    <div className ={styles.noResult}>
                        "{searchTerm}"에 대한 검색 결과가 없습니다.
                    </div>
                )
            )}
        </div>
        
      </div>
  );
}