import MediaCard from '../components/common/MediaCard';
import MediaListItem from '../components/common/MediaListItem';

function Home() {
  return (
    <div>
      <MediaCard
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s"
        title="입춘"
        artist="한로로"
        albumId={1}
        trackId={10}
        artistid={7}
        onClick={() => console.log('카드 클릭!')}
      />
      <MediaListItem
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSouNG2jOeVTkZrmjtfkx_SeYtpoOjnLLEpQ&s"
        title="입춘"
        artist="한로로"
        onClick={() => console.log('클릭')}
        onOptionsClick={() => console.log('클릭')}
      />
    </div>
  );
}

export default Home;
