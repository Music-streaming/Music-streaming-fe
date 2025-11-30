import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserProfileView from './UserProfileView';
import { useFollow } from './useFollow';

export default function UserProfileContainer() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  // 🟢 훅은 무조건 컴포넌트 최상단에서 호출 (조건문 X)
  const { isFollowing, followers, toggleFollow, setInitialFollowers } =
    useFollow(0, false);

  useEffect(() => {
    async function fetchData() {
      const data = {
        id: userId,
        nickname: 'hanloro',
        avatar:
          'https://i.pinimg.com/736x/fd/cb/68/fdcb68bc189298ae434a7af6bdf5160d.jpg',
        followers: 123,
        following: 55,
        playlists: [
          {
            id: 1,
            slug: 'emotional',
            title: '감성 플레이리스트',
            imageSrc:
              'https://i.pinimg.com/736x/fd/cb/68/fdcb68bc189298ae434a7af6bdf5160d.jpg',
          },
          {
            id: 2,
            slug: 'favourites',
            title: '드라이브용',
            imageSrc:
              'https://i.pinimg.com/736x/fd/cb/68/fdcb68bc189298ae434a7af6bdf5160d.jpg',
          },
        ],
        recentTracks: [],
      };

      setUserData(data);
      setInitialFollowers(data.followers); // 🔥 userData 로딩 후 값 주입
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
