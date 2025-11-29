import { Link } from 'react-router-dom';
import './PlaylistCard.css';

export default function PlaylistCard({ thumbnail, title, owner, playlistId }) {
  return (
    <div className="playlist-card">
      <Link to={`/playlist/${playlistId}`}>
        <img src={thumbnail} alt={title} className="playlist-card-image" />
      </Link>
      <div className="playlist-card-text">
        <Link to={`/playlist/${playlistId}`} className="playlist-card-title">
          {title}
        </Link>
        <div className="playlist-card-owner">{owner}</div>
      </div>
    </div>
  );
}
