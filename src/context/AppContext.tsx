"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationDict, translations } from "./translations";

interface AppContextProps {
  language: Language;
  theme: "light" | "dark";
  isIntroLoading: boolean;
  isTransitioning: boolean;
  setLanguage: (lang: Language) => void;
  toggleTheme: () => void;
  t: TranslationDict;
  finishIntro: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isIntroLoading, setIsIntroLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check if intro has already run this session
    const hasVisited = sessionStorage.getItem("ca_visited");
    if (hasVisited) {
      setIsIntroLoading(false);
    }

    // Force dark theme
    setTheme("dark");
    document.documentElement.classList.add("dark");
    localStorage.setItem("ca_theme", "dark");

    // Check saved lang
    const savedLang = localStorage.getItem("ca_lang") as Language | null;
    if (savedLang) {
      setLanguageState(savedLang);
    }
  }, []);

  const finishIntro = () => {
    setIsIntroLoading(false);
    sessionStorage.setItem("ca_visited", "true");
  };

  const triggerTransition = (action: () => void) => {
    setIsTransitioning(true);
    // Play transition screen for 1.8 seconds (simulating loader video)
    setTimeout(() => {
      action();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 1200);
  };

  const setLanguage = (lang: Language) => {
    triggerTransition(() => {
      setLanguageState(lang);
      localStorage.setItem("ca_lang", lang);
    });
  };

  const toggleTheme = () => {
    // Theme is locked to dark mode
  };

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        language,
        theme,
        isIntroLoading,
        isTransitioning,
        setLanguage,
        toggleTheme,
        t,
        finishIntro,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
