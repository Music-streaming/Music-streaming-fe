// src/components/User/UserProfileContainer.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserProfileView from './UserProfileView';
import { useFollow } from './useFollow';

// 🔹 mock 유저 데이터
const MOCK_USERS = {
  1: {
    id: 1,
    nickname: '레미파솔',
    avatar:
      'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=360',
    followers: 123,
    following: 55,
    playlists: [
      {
        slug: 7080,
        title: '7080',
        imageSrc:
          'https://img.freepik.com/premium-vector/abstract-grainy-gradient-background-with-vibrant-colors_336924-6082.jpg',
      },
    ],
  },
};

export default function UserProfileContainer() {
  const { userId } = useParams();

  const [userData, setUserData] = useState(null);

  const { followers, isFollowing, toggleFollow, setInitialFollowers } =
    useFollow(0, false);

  useEffect(() => {
    // mock 데이터 불러오기
    const data = MOCK_USERS[userId];

    if (!data) return;
    // eslint-disable-next-line
    setUserData(data);
    setInitialFollowers(data.followers);
  }, [userId, setInitialFollowers]);

  if (!userData) {
    return <div style={{ color: 'white' }}>유저 정보를 불러오는 중...</div>;
  }

  return (
    <UserProfileView
      userData={{ ...userData, followers }}
      isFollowing={isFollowing}
      onToggleFollow={toggleFollow}
    />
  );
}
