import React, { useState, useEffect, useContext } from "react";
import styles from "./FirstSection.module.css";
import { LanguageContext } from "../../context/LanguageContext";
import { SlideData } from "./SlideData";

const FirstSection: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SlideData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    SlideData.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);
  return (
    <section id="sp-page-title" className={styles.firstSection}>
      <div className={styles.slideshow}>
        {SlideData.map((Slide, i) => (
          <div key={i} className={`${styles.slide} ${i === current ? styles.active : ""}`}>
            <img src={Slide.src} alt={Slide.alt} />
            <div className={styles.caption}>
              {translations?.SLIDES?.[i]?.caption || Slide.alt}
            </div>
          </div>
        ))}
        <div className={styles.dots}>
          {SlideData.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === current ? styles.active : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
