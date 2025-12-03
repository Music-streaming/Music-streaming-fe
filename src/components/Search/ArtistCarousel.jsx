import { useState } from "react";
import styles from "./ArtistCarousel.module.css";
import { useNavigate } from "react-router-dom";

export default function ArtistCarousel({ artists }) {
  const [index, setIndex] = useState(0);

  const MAX_VISIBLE = 2;
  const lastIndex = Math.max(0, artists.length - MAX_VISIBLE);
  const navigate = useNavigate();

  const handlePrev = () => {
    setIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(lastIndex, prev + 1));
  };

  const visibleArtists = artists.slice(index, index + MAX_VISIBLE);

  return (
    <div className={styles.carouselWrapper}>
      <button
        className={styles.arrowLeft}
        onClick={handlePrev}
        disabled={index === 0}
      >
        ❮
      </button>

      <div className={styles.carousel}>
        {visibleArtists.map((a) => (
          <div key={a.id} className={styles.item}
               onClick = {() => navigate(`/artist/${a.id}`)}>
            <img src={a.image} alt={a.name} />
          </div>
        ))}
      </div>

      <button
        className={styles.arrowRight}
        onClick={handleNext}
        disabled={index === lastIndex}
      >
        ❯
      </button>
    </div>
  );
}
