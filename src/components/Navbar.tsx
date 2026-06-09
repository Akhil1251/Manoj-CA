"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Language } from "@/context/translations";
import { Menu, X, Globe, Sun, Moon, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { language, theme, setLanguage, toggleTheme, t } = useApp();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { href: "/", label: t.navHome },
    { href: "/tools", label: t.navTools },
    { href: "/services", label: t.navServices },
    { href: "/about", label: t.navAbout },
    { href: "/contact", label: t.navContact },
    { href: "/knowledge", label: t.navKnowledge },
    { href: "/clients", label: t.navClients },
    { href: "/pricing", label: t.navPricing },
    { href: "/careers", label: t.navCareers },
    { href: "/faq", label: t.navFaq },
  ];

  const languagesList: { code: Language; name: string }[] = [
    { code: "en", name: "English (EN)" },
    { code: "hi", name: "हिन्दी (HINDI)" },
    { code: "mr", name: "मराठी (MARATHI)" },
    { code: "gu", name: "ગુજરાતી (GUJARATI)" },
    { code: "bn", name: "বাংলা (BENGALI)" },
    { code: "ta", name: "தமிழ் (TAMIL)" },
    { code: "te", name: "తెలుగు (TELUGU)" },
    { code: "kn", name: "ಕನ್ನಡ (KANNADA)" },
    { code: "ml", name: "മലയാളം (MALAYALAM)" },
    { code: "pa", name: "ਪੰਜਾਬੀ (PUNJABI)" },
  ];

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setIsLangDropdownOpen(false);
  };

  return (
    <header className={`${isHome ? "fixed" : "sticky"} top-0 z-[999] w-full transition-all duration-300 ${isTransparent ? "border-b border-transparent bg-transparent" : "border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-lg shadow-md shadow-indigo-600/20">
              M
            </span>
            <span className={`font-extrabold tracking-wider text-xl transition-colors ${isTransparent ? "text-white" : "text-slate-800 dark:text-white"}`}>
              MANOJ <span className={isTransparent ? "text-indigo-300" : "text-indigo-600 dark:text-indigo-400"}>CA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] xl:text-[13px] whitespace-nowrap font-bold tracking-wide transition-colors ${
                    isTransparent
                      ? isActive ? "text-white font-extrabold" : "text-slate-200 hover:text-white"
                      : isActive ? "text-indigo-600 dark:text-indigo-400 font-extrabold" : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition text-xs font-bold ${
                  isTransparent
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                <Globe className={`h-4 w-4 ${isTransparent ? "text-white" : "text-indigo-500"}`} />
                <span>{languagesList.find((l) => l.code === language)?.name.split(" ")[0]}</span>
              </button>
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1 z-[1001]"
                  >
                    {languagesList.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                          language === lang.code
                            ? "bg-indigo-50/50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition ${
                isTransparent 
                  ? "border-white/20 text-white hover:bg-white/10" 
                  : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
              aria-label={t.themeToggle}
            >
              {theme === "dark" ? (
                <Sun className={`h-4 w-4 ${isTransparent ? "text-white" : "text-amber-400"}`} />
              ) : (
                <Moon className={`h-4 w-4 ${isTransparent ? "text-white" : "text-indigo-650"}`} />
              )}
            </button>

            {/* Quick CTA */}
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-3.5 text-xs font-bold text-white shadow hover:bg-indigo-500 transition"
            >
              {t.heroCTA}
            </Link>
          </div>

          {/* Mobile hamburger & actions toggle */}
          <div className="flex lg:hidden items-center gap-2.5">
            {/* Quick mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition ${
                isTransparent 
                  ? "border-white/20 text-white hover:bg-white/10" 
                  : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              {theme === "dark" ? (
                <Sun className={`h-4 w-4 ${isTransparent ? "text-white" : "text-amber-400"}`} />
              ) : (
                <Moon className={`h-4 w-4 ${isTransparent ? "text-white" : "text-indigo-600"}`} />
              )}
            </button>

            {/* Mobile Lang Button shortcut */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-lg border transition ${
                isTransparent 
                  ? "border-white/20 text-white hover:bg-white/10" 
                  : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[1000] bg-slate-950 backdrop-blur-sm lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[1001] w-full max-w-sm bg-white dark:bg-slate-950 p-6 shadow-2xl lg:hidden overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-extrabold tracking-wider text-slate-800 dark:text-white text-xl">
                    MANOJ <span className="text-indigo-600 dark:text-indigo-400">CA</span>
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4 mb-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-base font-semibold transition-colors py-2 border-b border-slate-100 dark:border-slate-900 ${
                          isActive
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom languages & CTA */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" /> Language / भाषा
                </h4>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left px-3 py-2 text-[11px] font-bold rounded-lg border transition-colors ${
                        language === lang.code
                          ? "bg-indigo-600 border-indigo-600 text-white"
                          : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full h-11 items-center justify-center rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-600/10 hover:bg-indigo-500 transition"
                >
                  {t.heroCTA}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
