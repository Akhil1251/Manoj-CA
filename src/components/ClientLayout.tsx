"use client";

import React, { useState } from "react";
import BookConsultationModal from "./BookConsultationModal";
import { AppProvider, useApp } from "@/context/AppContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { IntroLoader } from "./IntroLoader";
import { LanguageThemeLoader } from "./LanguageThemeLoader";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isIntroLoading, isTransitioning, finishIntro, language } = useApp();
  const pathname = usePathname();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  React.useEffect(() => {
    // 1. Define global callback for Google Translate initialization
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr,gu,bn,ta,te,kn,ml,pa",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // 2. Add translation script if not already present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. Continuously clean up Google Translate banner and layout shifts
    const cleanTranslateUI = () => {
      const selectors = [
        "iframe.goog-te-banner-frame",
        ".goog-te-banner-frame",
        ".goog-te-banner",
        ".goog-te-menu-frame",
        "iframe.goog-te-menu-frame",
        "#goog-gt-tt",
        ".goog-te-balloon-frame",
        "iframe[class*='goog-te']",
        "[class*='goog-te-banner']"
      ];

      selectors.forEach(selector => {
        const els = document.querySelectorAll(selector);
        els.forEach(el => {
          (el as HTMLElement).style.display = "none";
          (el as HTMLElement).style.visibility = "hidden";
          (el as HTMLElement).style.height = "0px";
        });
      });

      // Override inline shifts added by Google Translate script on html/body elements
      if (document.body && (document.body.style.top !== "0px" && document.body.style.top !== "")) {
        document.body.style.top = "0px";
        document.body.style.position = "static";
      }
      if (document.documentElement && (document.documentElement.style.top !== "0px" && document.documentElement.style.top !== "")) {
        document.documentElement.style.top = "0px";
        document.documentElement.style.position = "static";
      }
    };

    cleanTranslateUI();
    const interval = setInterval(cleanTranslateUI, 150);
    return () => clearInterval(interval);
  }, []);

  // Handle dynamic translation on page change and language change
  React.useEffect(() => {
    const applyTranslation = () => {
      const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectEl && selectEl.value !== language) {
        selectEl.value = language;
        selectEl.dispatchEvent(new Event('change'));
      }
    };

    // Delay slightly to allow Next.js route transition & DOM render to finish
    const timer = setTimeout(applyTranslation, 500);
    return () => clearTimeout(timer);
  }, [pathname, language]);

  if (isIntroLoading) {
    return <IntroLoader onComplete={finishIntro} />;
  }

const FloatingBookConsultation = () => (
  <button
    onClick={() => setIsConsultationOpen(true)}
    className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 hover:scale-110 transition-all duration-300 group cursor-pointer"
    aria-label="Book Consultation"
  >
    <CalendarCheck className="w-7 h-7" />
    <span className="absolute right-full mr-4 bg-[#0a122a] text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-slate-800">
      Book Consultation
    </span>
  </button>
);

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/919076111021"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <Navbar />
      <main className="flex-1 w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {children}
      </main>
      <Footer />
      <FloatingBookConsultation />
      <FloatingWhatsApp />
      <LanguageThemeLoader isVisible={isTransitioning} />
      <BookConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
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
