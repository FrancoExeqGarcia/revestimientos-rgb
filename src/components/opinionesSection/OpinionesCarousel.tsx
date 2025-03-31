import React, { useEffect, useState } from "react";
import styles from "./OpinionesCarousel.module.css";
import { Opinion } from "./types";
import { OpinionCard } from "./OpinionCard";

interface Props {
  opinionsData: Opinion[];
  itemsPerSlide?: number;
  autoSlideInterval?: number;
  title?: string;
}

const chunkArray = (array: Opinion[], size: number): Opinion[][] =>
  array.reduce<Opinion[][]>((acc, _, index) =>
    index % size === 0 ? [...acc, array.slice(index, index + size)] : acc, []);

const OpinionesCarousel: React.FC<Props> = ({
  opinionsData,
  itemsPerSlide = 3,
  autoSlideInterval = 5000,
  title = "¡Clientes felices!"
}) => {
  const [approvedOpinions, setApprovedOpinions] = useState<Opinion[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setApprovedOpinions(opinionsData.filter((op) => op.approved));
  }, [opinionsData]);

  const opinionGroups = chunkArray(approvedOpinions, itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % opinionGroups.length);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [opinionGroups.length, autoSlideInterval]);

  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + opinionGroups.length) % opinionGroups.length);
  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % opinionGroups.length);

  return (
    <section className={styles.opinionesSection}>
      <h2>{title}</h2>
      {opinionGroups.length > 0 ? (
        <div className={styles.carouselContainer}>
          <div className={styles.opinionesGrid}>
            {opinionGroups[currentSlide].map((op) => (
              <OpinionCard key={op.id} opinion={op} onClick={handleNext} />
            ))}
          </div>
          <button className={styles.carouselControlPrev} onClick={handlePrev}>❮</button>
          <button className={styles.carouselControlNext} onClick={handleNext}>❯</button>
        </div>
      ) : (
        <p className="text-center">Aún no hay comentarios.</p>
      )}
    </section>
  );
};

export default OpinionesCarousel;
