import { useState } from 'react';
import styles from './CardCarousel.module.css';

export default function CardCarousel({
  title,
  items = [],
  renderItem,
  itemWidth = 245, // 카드 225 + gap 20 기준
  visibleCount = 4,
}) {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - visibleCount);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.wrapper}>
        {index > 0 && (
          <button className={styles.arrowLeft} onClick={prev}>
            ◀
          </button>
        )}

        <div className={styles.carousel}>
          <div
            className={styles.inner}
            style={{ transform: `translateX(-${index * itemWidth}px)` }}
          >
            {items.map(renderItem)}
          </div>
        </div>

        {index < maxIndex && (
          <button className={styles.arrowRight} onClick={next}>
            ▶
          </button>
        )}
      </div>
    </section>
  );
}
