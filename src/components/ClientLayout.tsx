"use client";

import React from "react";
import { AppProvider, useApp } from "@/context/AppContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { IntroLoader } from "./IntroLoader";
import { LanguageThemeLoader } from "./LanguageThemeLoader";

const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isIntroLoading, isTransitioning, finishIntro } = useApp();

  if (isIntroLoading) {
    return <IntroLoader onComplete={finishIntro} />;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {children}
      </main>
      <Footer />
      <LanguageThemeLoader isVisible={isTransitioning} />
    </>
  );
};

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      <LayoutContent>{children}</LayoutContent>
    </AppProvider>
  );
};
