import style from './TrackItem.module.css';

function TrackItem({ index, title, duration, isActive, onClick }) {
  return (
    <div
   className={`${style["track-item"]} ${isActive ? style.active : ""}`} onClick={onClick}
    >
      <span className= {style["track-index"]}>{index}</span>
      <span className={style["track-title"]}>{title}</span>
      <span className={style["track-duration"]}>{duration}</span>
    </div>
  );
}

export default TrackItem;

