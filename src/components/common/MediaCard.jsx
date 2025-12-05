import { Link } from 'react-router-dom';
import './Mediacard.css';

function MediaCard({
  imageSrc,
  title,
  artist,
  onClick,
  albumId,
  musicId,
  artistId,
}) {
  return (
    <div className="media-card" onClick={onClick}>
        <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-text">
        <Link to={`/music/${musicId}`} className="card-title">
          {title}
        </Link>
        <br />
        <Link to={`/artist/${artistId}`} className="card-artist">
          {artist}
        </Link>
      </div>
    </div>
  );
}

export default MediaCard;
