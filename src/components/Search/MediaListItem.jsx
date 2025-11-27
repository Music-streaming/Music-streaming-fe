import '../common/Mediacard.css';
import MoreButton from '../common/MoreButton';

function MediaListItem({ imageSrc, title, artist, onClick, onOptionsClick }) {
  return (
    <div className="list-item" onClick={onClick}>
      <img src={imageSrc} alt={title} className="list-thumb" />

      <div className="list-text">
        <div className="list-title">{title}</div>
        <div className="list-artist">{artist}</div>
      </div>

      <button
        className="list-options"
        onClick={(e) => {
          e.stopPropagation();
          onOptionsClick && onOptionsClick();
        }}
      >
        <MoreButton />
      </button>
    </div>
  );
}

export default MediaListItem;
