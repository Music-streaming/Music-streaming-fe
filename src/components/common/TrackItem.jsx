import '../../style/TrackItem.css';

function TrackItem({ index, title, duration, isActive, onClick }) {
  return (
    <div className={`track-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <span className="track-index">{index}</span>
      <span className="track-title">{title}</span>
      <span className="track-duration">{duration}</span>
    </div>
  );
}

export default TrackItem;
