import { createContext } from "react";
import { Translations } from "../types/Translations";

type Language = "ES" | "EN" | "POR";

export interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
