import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserProfileView from './UserProfileView';
import { useFollow } from './useFollow';
import apiClient from '../../api/apiClient'; // ⭐ API 클라이언트 import

export default function UserProfileContainer() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  const { isFollowing, followers, toggleFollow, setInitialFollowers } =
    useFollow(0, false);

  useEffect(() => {
    async function fetchData() {
      try {
        // ⭐ API 호출
        const res = await apiClient(`/users/${userId}`, { method: 'GET' });

        // ⭐ 받아 온 데이터 반영
        setUserData(res);

        // ⭐ 팔로워 초기값 세팅
        setInitialFollowers(res.followers);
      } catch (err) {
        console.error('유저 데이터 불러오기 실패:', err);
      }
    }

    fetchData();
  }, [userId, setInitialFollowers]);

  if (!userData) return null;

  return (
    <UserProfileView
      userData={{ ...userData, followers }}
      isFollowing={isFollowing}
      onToggleFollow={toggleFollow}
    />
  );
}
