import FollowerCard from '../../common/CardCarousel';
import CardCarousel from '../../common/CardCarousel';

export default function FollowerCarousel({ title, followers }) {
  return (
    <CardCarousel
      title={title}
      items={followers}
      renderItem={(f) => (
        <FollowerCard
          key={f.id}
          avatar={f.avatar}
          name={f.name}
          followerCount={f.followerCount}
        />
      )}
    />
  );
}
