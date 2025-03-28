import React, { useState, useEffect, useContext } from "react";
import "./FirstSection.css";
import { LanguageContext } from "../../context/LanguageContext";

const slides = [
  { src: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg", alt: "CUMARU" },
  { src: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742920359/firstsection2_vvtaae.jpg", alt: "CUMARU" },
  { src: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742920359/firstsection3_e4au5x.jpg", alt: "TAUARI SOUTH BEACH" },
  { src: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743186986/Imagen_de_WhatsApp_2025-03-28_a_las_15.34.27_0a193ddb_tpcere.jpg", alt: "CUMARU 2" },

];

const FirstSection: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sp-page-title" className="first-section">
      <div className="slideshow">
        {slides.map((slide, i) => (
          <div key={i} className={`slide ${i === current ? "active" : ""}`}>
            <img src={slide.src} alt={slide.alt} />
            <div className="caption">{translations?.SLIDES?.[i]?.caption || slide.alt}</div>
          </div>
        ))}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
