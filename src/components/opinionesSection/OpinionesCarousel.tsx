import React, { useEffect, useState } from 'react';
import './OpinionesCarousel.css';

export interface Opinion {
  id: number;
  name: string;
  comment: string;
  date: string;
  approved: boolean;
}

interface OpinionesCarouselProps {
  opinionsData: Opinion[];
  itemsPerSlide?: number;
  autoSlideInterval?: number;
  title?: string;
}

const chunkArray = (array: Opinion[], size: number): Opinion[][] =>
  array.reduce<Opinion[][]>((acc, _, index) =>
    index % size === 0 ? [...acc, array.slice(index, index + size)] : acc, []);

const OpinionesCarousel: React.FC<OpinionesCarouselProps> = ({
  opinionsData,
  itemsPerSlide = 3,
  autoSlideInterval = 5000,
  title = '¡Clientes felices!'
}) => {
  const [approvedOpinions, setApprovedOpinions] = useState<Opinion[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setApprovedOpinions(opinionsData.filter(op => op.approved));
  }, [opinionsData]);

  const opinionGroups = chunkArray(approvedOpinions, itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % opinionGroups.length);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [opinionGroups.length, autoSlideInterval]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + opinionGroups.length) % opinionGroups.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % opinionGroups.length);
  };

  return (
    <section className="opiniones-section">
      <h2>{title}</h2>
      {opinionGroups.length > 0 ? (
        <div className="carousel-container">
          <div className="opiniones-grid">
            {opinionGroups[currentSlide].map(op => (
              <div
                key={op.id}
                className="opinion-card"
                onClick={handleNext}
                style={{ cursor: 'pointer' }}
              >
                <p>"{op.comment}"</p>
                <div className="opinion-name">{op.name}</div>
                <div className="opinion-date">{op.date}</div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" onClick={handlePrev}>❮</button>
          <button className="carousel-control-next" onClick={handleNext}>❯</button>
        </div>
      ) : (
        <p className="text-center">Aún no hay comentarios.</p>
      )}
    </section>
  );
};

export default OpinionesCarousel;
