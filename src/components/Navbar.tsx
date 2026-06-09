"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Language } from "@/context/translations";
import { Menu, X, Globe, Sun, Moon, MapPin, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { language, theme, setLanguage, toggleTheme, t } = useApp();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <header className={`${isHome ? "fixed" : "sticky"} top-0 z-[999] w-full transition-all duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
      {/* Top Tier: Logo & Contact Info */}
      <div className={`transition-all duration-300 border-b border-white/10 dark:border-white/5 ${isTransparent ? "bg-transparent text-white" : "bg-white dark:bg-slate-950 text-slate-800 dark:text-white shadow-sm"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img src={isTransparent || theme === "dark" ? "/White_Logo-removebg-preview.png" : "/logo.png"} alt="Manoj CA" className={`w-auto object-contain transition-all origin-left ${isTransparent || theme === "dark" ? "h-10 sm:h-12 scale-110" : "h-8 sm:h-10"}`} />
            </Link>

            {/* Desktop Contact Info */}
            <div className={`hidden lg:flex items-center gap-10 text-[13px] font-semibold ${isTransparent ? "text-white" : "text-slate-800 dark:text-slate-200"}`}>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-amber-500 stroke-[1.5]" />
                <div className="flex flex-col leading-tight">
                  <span>1010 Avenue of the Moon</span>
                  <span className="font-normal opacity-90">New York, NY 10018 US.</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-500 stroke-[1.5]" />
                <div className="flex flex-col leading-tight">
                  <span>Mon - Sat 8.00 - 18.00</span>
                  <span className="font-normal opacity-90">Sunday CLOSED</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-amber-500 stroke-[1.5]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold">212 386 5575</span>
                  <span className="font-normal opacity-90">Free call</span>
                </div>
              </div>
            </div>

            {/* Mobile toggles */}
            <div className="flex lg:hidden items-center gap-2.5">
              <button onClick={toggleTheme} className="p-2 rounded-lg border border-slate-200/20 hover:bg-slate-100/10 transition">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg border border-slate-200/20 hover:bg-slate-100/10 transition">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier: Navigation & Social Icons (Hidden on Mobile) */}
      <div className="hidden lg:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-300 ${isTransparent ? "bg-amber-600/95 backdrop-blur-md" : "bg-amber-600"} shadow-lg px-6`}>
          <div className="flex h-[52px] items-center justify-between">
            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-3 xl:gap-5 flex-wrap md:flex-nowrap">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1 text-[12px] xl:text-[13px] lowercase leading-tight font-bold transition-colors hover:text-white ${
                      isActive ? "text-white/60" : "text-white"
                    }`}
                  >
                    <span className="text-center">{link.label}</span>
                    <span className="text-[8px] opacity-60 mt-0.5 shrink-0">▼</span>
                  </Link>
                );
              })}
            </nav>

            {/* Social Icons & Actions */}
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-5 border-r border-amber-500/30 pr-5">
                <svg className="w-5 h-5 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <svg className="w-5 h-5 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <svg className="w-5 h-5 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center hover:text-white transition"
                  aria-label="Change Language"
                >
                  <Globe className="h-5 w-5" />
                </button>
                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-48 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1 z-[1001]"
                    >
                      {languagesList.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-amber-50 dark:hover:bg-amber-950 hover:text-amber-600 transition-colors ${
                            language === lang.code
                              ? "bg-amber-50/50 dark:bg-amber-950/50 text-amber-600"
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
              <button onClick={toggleTheme} className="hover:text-white transition-colors ml-2">
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[1000] bg-slate-950 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[1001] w-full max-w-sm bg-white dark:bg-slate-950 p-6 shadow-2xl lg:hidden overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <img src={theme === "dark" ? "/White_Logo-removebg-preview.png" : "/logo.png"} alt="Manoj CA" className={`w-auto object-contain transition-all origin-left ${theme === "dark" ? "h-10 scale-110" : "h-8"}`} />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4 mb-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-base font-semibold transition-colors py-2 border-b border-slate-100 dark:border-slate-900 ${
                          isActive ? "text-amber-600" : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

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
                          ? "bg-amber-600 border-amber-600 text-white"
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
                  className="flex w-full h-11 items-center justify-center rounded-xl bg-amber-600 text-sm font-semibold text-white shadow-lg shadow-amber-600/10 hover:bg-amber-500 transition"
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
