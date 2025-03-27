import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./QuienesSomos.css";

const QuienesSomos: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;

  return (
    <section id="quienes-somos">
      <div className="container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/drwacbtjf/image/upload/v1742957260/logo_optimized_kyy3hb.png"
            alt="Quienes Somos"
            className="img-responsive"
          />
        </div>
        <div className="text-container">
          <h2>{translations.QuienesSomos.services.title}</h2>
          <ul>
            {translations.QuienesSomos.services.description.map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          <h2>{translations.QuienesSomos.specialty.title}</h2>
          <p>{translations.QuienesSomos.specialty.description}</p>

          <h2>¿POR QUÉ ELEGIRNOS?</h2>
          <div className="list-columns">
            <ul>
              {translations.QuienesSomos.commitment.description
                .slice(0, 4)
                .map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
            </ul>
            <ul>
              {translations.QuienesSomos.commitment.description
                .slice(4)
                .map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
