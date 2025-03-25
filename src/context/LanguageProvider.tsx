import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import ES from "../components/languages/ES.json";
import EN from "../components/languages/EN.json";
import POR from "../components/languages/POR.json";

type Language = "ES" | "EN" | "POR";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ES");
  const [translations, setTranslations] = useState(ES);

  useEffect(() => {
    switch (language) {
      case "EN":
        setTranslations(EN);
        break;
      case "POR":
        setTranslations(POR);
        break;
      default:
        setTranslations(ES);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
