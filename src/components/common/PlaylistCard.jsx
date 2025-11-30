import { Link } from 'react-router-dom';
import './PlaylistCard.css';

export default function PlaylistCard({ imageSrc, title, owner, slug }) {
  return (
    <div className="playlist-card">
      <Link to={`/playlist/${slug}`}>
        <img src={imageSrc} alt={title} className="playlist-card-image" />
      </Link>
      <div className="playlist-card-text">
        <Link to={`/playlist/${slug}`} className="playlist-card-title">
          {title}
        </Link>
        <div className="playlist-card-owner">{owner}</div>
      </div>
    </div>
  );
}
