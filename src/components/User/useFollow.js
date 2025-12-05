// src/hooks/useFollow.js
import { useState } from 'react';

export function useFollow(initialFollowers = 0, initialIsFollowing = false) {
  const [followers, setFollowers] = useState(initialFollowers);
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  // 팔로우 / 언팔 전환 함수
  const toggleFollow = () => {
    setFollowers((prev) => prev + (isFollowing ? -1 : 1));
    setIsFollowing((prev) => !prev);
  };

  // API 또는 mock 데이터에서 처음 followers 값을 넣기 위해 존재
  const setInitialFollowers = (value) => {
    setFollowers(value);
  };

  return {
    followers,
    isFollowing,
    toggleFollow,
    setInitialFollowers,
  };
}
