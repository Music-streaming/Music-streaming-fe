import '../../style/mediacard.css';

function MediaCard({ imageSrc, title, artist, onClick }) {
  return (
    <div className="media-card" onClick={onClick}>
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-text">
        <div className="card-title">{title}</div>
        <div className="card-artist">{artist}</div>
      </div>
    </div>
  );
}

export default MediaCard;
