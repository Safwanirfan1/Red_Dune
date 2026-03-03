"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

type LanguageContextType = {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [direction, setDirection] = useState<Direction>("ltr");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "ar")) {
        setLanguageState(savedLang);
        setDirection(savedLang === "ar" ? "rtl" : "ltr");
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = savedLang;
      }
      setIsHydrated(true);
    });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === "ar" ? "rtl" : "ltr";
    setDirection(dir);
    localStorage.setItem("language", lang);
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let current: unknown = (translations as Record<string, unknown>)[language];

    for (const key of keys) {
      if (
        current &&
        typeof current === "object" &&
        key in (current as Record<string, unknown>)
      ) {
        current = (current as Record<string, unknown>)[key];
      } else {
        console.warn(`Translation missing for key: ${path}`);
        return path;
      }
    }

    return current as string;
  };

  if (!isHydrated) return null;

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      <div
        dir={direction}
        className={direction === "rtl" ? "font-arabic" : "font-sans"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
