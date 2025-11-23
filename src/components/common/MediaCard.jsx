function MediaCard({ imageSrc, title, artist, onClick }) {
  return (
    <div className="media-card" onClick={onClick}>
      <img src={imageSrc} alt={title} className="media-car__image" />
      <div className="media-card__text">
        <div className="media-card__title">{title}</div>
        <div className="media-card__artist">{artist}</div>
      </div>
    </div>
  );
}

export default MediaCard;
