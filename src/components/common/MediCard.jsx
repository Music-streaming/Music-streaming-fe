import { Link } from 'react-router-dom';
import '../../style/mediacard.css';


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
      <Link to={`/album/${albumId}`}>
        <img src={imageSrc} alt={title} className="card-image" />
      </Link>
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

export default  MediaCard;