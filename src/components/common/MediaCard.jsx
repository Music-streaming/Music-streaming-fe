import { Link } from 'react-router-dom';
import './Mediacard.css';

function MediaCard({
  imageSrc,
  title,
  artist,
  musicId,
  artistId,
  albumId,
}) {
  return (
    <div className="media-card" >
      <Link to={albumId ? `/album/${albumId}` : `/music/${musicId}`}>
        <img src={imageSrc} alt={title} className="card-image" />
        </Link>
      <div className="card-text" >
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
