import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./LanguageSelector.css";

const LanguageSelector: React.FC = () => {
  const { setLanguage } = useContext(LanguageContext)!;

  return (
    <div className="language-selector-flags">
      <div onClick={() => setLanguage("ES")} className="flag-option">
        <img src="/flag/ES.png" alt="Español" />
        <span>Español</span>
      </div>
      <div onClick={() => setLanguage("EN")} className="flag-option">
        <img src="/flag/EN.png" alt="English" />
        <span>English</span>
      </div>
      <div onClick={() => setLanguage("POR")} className="flag-option">
        <img src="/flag/POR.png" alt="Português" />
        <span>Português</span>
      </div>
    </div>
  );
};

export default LanguageSelector;
