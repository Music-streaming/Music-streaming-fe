import '../../style/TrackItem.css';
import MoreButton from '../common/MoreButton';

function TrackItem({
  index,
  title,
  duration,
  isActive,
  onRowClick,
  onMoreClick,
}) {
  return (
    <div
      className={`track-item ${isActive ? 'active' : ''}`}
      onClick={onRowClick}
    >
      <span className="track-index">{index}</span>
      <span className="track-title">{title}</span>
      <div className="track-right">
        <span className="track-duration">{duration}</span>
        <MoreButton
          onClick={(e) => {
            e.stopPropagation();
            onMoreClick();
          }}
        />
      </div>
    </div>
  );
}

export default TrackItem;
