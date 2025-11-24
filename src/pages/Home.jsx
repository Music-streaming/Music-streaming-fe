import MediaCard from '../components/common/MediaCard';

function Home() {
  return (
    <MediaCard
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s"
      title="입춘"
      artist="한로로"
      albumId={1}
      trackId={10}
      artistid={7}
      onClick={() => console.log('카드 클릭!')}
    />
  );
}

export default Home;
