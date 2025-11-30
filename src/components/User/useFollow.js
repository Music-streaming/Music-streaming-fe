import { useState, useCallback } from 'react';

export function useFollow(initialFollowers = 0, initialIsFollowing = false) {
  const [followers, setFollowers] = useState(initialFollowers);
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  // 🔥 외부에서 초기 followers를 다시 세팅할 수 있는 함수
  const setInitialFollowers = useCallback((value) => {
    setFollowers(value);
  }, []);

  const toggleFollow = () => {
    setIsFollowing((prev) => {
      const next = !prev;
      setFollowers((count) => count + (next ? 1 : -1));
      return next;
    });
  };

  return {
    isFollowing,
    followers,
    toggleFollow,
    setInitialFollowers,
  };
}
