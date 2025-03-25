import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./QuienesSomos.css";

const QuienesSomos: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;

  return (
    <section id="quienes-somos">
      <div className="container">
        <div className="row">
          <div className="image-container">
            <img
              src="\img\logo_optimized.png"
              alt="Quienes Somos"
              className="img-responsive"
            />
          </div>
          <div className="text-container">

            {/* Si agregás más bloques en el JSON (como servicios o tipos de piso), podrías hacer algo así: */}
            {translations.QuienesSomos.services && (
              <>
              
                <h2>SERVICIOS:</h2>
                <ul>
                  {translations.QuienesSomos.services.map(
                    (item: string, index: number) => (
                      <li key={index}> {item}</li>
                    )
                  )}
                </ul>
              </>
            )}
            </div>
          <div className="text-container">
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

            {/** 
            {translations.QuienesSomos.floorTypes && (
              <>
                <h3>Tipos de piso</h3>
                <ul>
                  {translations.QuienesSomos.floorTypes.map(
                    (item: string, index: number) => (
                      <li key={index}> {item}</li>
                    )
                  )}
                </ul>
              </>
            )}

            {translations.QuienesSomos.cabinets && (
              <>
                <h3>Gabinetes</h3>
                <ul>
                  {translations.QuienesSomos.cabinets.map(
                    (item: string, index: number) => (
                      <li key={index}> {item}</li>
                    )
                  )}
                </ul>
              </>
            )}

            {translations.QuienesSomos.materials && (
              <>
                <h3>Venta de materiales</h3>
                <ul>
                  {translations.QuienesSomos.materials.map(
                    (item: string, index: number) => (
                      <li key={index}> {item}</li>
                    )
                  )}
                </ul>
              </>
            )}*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
