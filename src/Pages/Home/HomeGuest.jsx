import TrackCarousel from '../../components/home/common/TrackCarousel';

const topAlbums = [
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '입춘',
    artist: '한로로',
    albumId: 1,
    musicId: 101,
    artistId: 1001,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSeHFoJ5oDOsz-tI1ZsmnNZBpbTPbQ',
    title: '향해',
    artist: '유다인밴드',
    albumId: 2,
    musicId: 102,
    artistId: 2001,
  },
];

const guestRecommendedTracks = [
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: '추천 트랙 1',
    artist: '아티스트 1',
    albumId: 3,
    musicId: 201,
    artistId: 2002,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: 'New Jeans',
    artist: 'NewJeans',
    albumId: 4,
    musicId: 202,
    artistId: 2003,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: 'New Jeans',
    artist: 'NewJeans',
    albumId: 4,
    musicId: 202,
    artistId: 2003,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s',
    title: 'New Jeans',
    artist: 'NewJeans',
    albumId: 4,
    musicId: 202,
    artistId: 2003,
  },
];

export default function HomeGuest() {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <TrackCarousel title="TOP ALBUM" tracks={topAlbums} />
      <TrackCarousel title="RECOMMENDED" tracks={guestRecommendedTracks} />
    </div>
  );
}
