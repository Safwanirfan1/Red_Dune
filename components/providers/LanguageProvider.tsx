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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [direction, setDirection] = useState<Direction>("ltr");

    useEffect(() => {
        // Load saved language
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "ar")) {
            setLanguageState(savedLang);
            setDirection(savedLang === "ar" ? "rtl" : "ltr");
        }
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
        const keys = path.split('.');
        let current: any = translations[language];

        for (const key of keys) {
            if (current && current[key] !== undefined) {
                current = current[key];
            } else {
                console.warn(`Translation missing for key: ${path}`);
                return path;
            }
        }

        return current as string;
    };

    return (
        <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
            <div dir={direction} className={direction === "rtl" ? "font-arabic" : "font-sans"}>
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
