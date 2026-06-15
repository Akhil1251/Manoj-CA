"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Language } from "@/context/translations";
import { Menu, X, Globe, Sun, Moon, MapPin, Clock, Phone, Calculator, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/servicesData";
import BookConsultationModal from "@/components/BookConsultationModal";

const dropdownConfigs: Record<
  string,
  {
    columns: {
      title: string;
      links: { label: string; href: string; subLinks?: { label: string; href: string }[] }[];
    }[];
    image: {
      src: string;
      tag: string;
      title: string;
    };
    banner: {
      text: string;
      btnText: string;
      btnHref: string;
    };
  }
> = {
  services: {
    columns: [
      {
        title: "Housing Society",
        links: [
          { label: "Co-operative Society", href: "/services/cooperative-housing-society-registration" },
          { label: "Election & Committee", href: "/services/society-election-planning" },
          { label: "Compliance & Secretarial", href: "/services/agm-general-body-meeting-compliance" },
          { label: "Taxation & Accounting", href: "/services/society-gst-compliance" },
          { label: "Redevelopment Advisory", href: "/services/preliminary-redevelopment-assessment" },
          { label: "Docs & Certificates", href: "/services/noc-flat-transfer" },
        ],
      },
      {
        title: "Business Formation, Registration & Compliance",
        links: [
          {
            label: "Company Formation", href: "/services/company-formation", subLinks: [
              { label: "Private Limited Company Registration", href: "/services/company-formation#private-limited-company" },
              { label: "LLP Registration", href: "/services/company-formation#llp-registration" },
              { label: "Partnership Firm Registration", href: "/services/company-formation#partnership-firm-registration" },
              { label: "Public Limited Company Registration", href: "/services/company-formation#public-limited-company-registration" },
              { label: "Trust Registration", href: "/services/company-formation#trust-registration" },
              { label: "Indian Subsidiary for Foreign Entrepreneurs", href: "/services/company-formation#indian-subsidiary-foreign-entrepreneurs" }
            ]
          },
          {
            label: "Registrations", href: "/services/registrations", subLinks: [
              { label: "Professional Tax Registration & Returns", href: "/services/registrations#professional-tax" },
              { label: "Shop & Establishment Registration", href: "/services/registrations#shop-establishment" },
              { label: "Startup India Registration", href: "/services/startup-india-registration" },
              { label: "MSME/Udyam Registration", href: "/services/msme-udyam-registration" },
              { label: "PF Registration", href: "/services/registrations#pf-registration" },
              { label: "ESIC Registration", href: "/services/registrations#esic-registration" },
              { label: "Trade License", href: "/services/trade-license" },
              { label: "NGO Darpan Registration", href: "/services/registrations#ngo-darpan" },
              { label: "Trademark Registration", href: "/services/registrations#trademark" },
              { label: "Import Export Code (IEC)", href: "/services/registrations#iec" },
              { label: "ISO Certification", href: "/services/registrations#iso" },
              { label: "FSSAI Registration", href: "/services/fssai-registration" }
            ]
          },
          {
            label: "Corporate Compliance & Secretarial Services", href: "/services/corporate-compliance", subLinks: [
              { label: "MCA Annual Compliance", href: "/services/corporate-compliance#mca-annual" },
              { label: "ROC Filings", href: "/services/corporate-compliance#roc-filings" },
              { label: "Maintenance of Statutory Registers & Records", href: "/services/corporate-compliance#statutory-registers" },
              { label: "AGM & EGM, BM Compliance, Minutes & Resolutions", href: "/services/corporate-compliance#agm-egm" }
            ]
          },
          { label: "Virtual CFO (VCFO) Services", href: "/services/virtual-cfo-services" },
        ],
      },
      {
        title: "Tax & Litigation",
        links: [
          { label: "Income Tax & Auditing", href: "/services/income-tax-returns" },
          { label: "GST & Regulatory", href: "/services/gst-registration-returns" },
          { label: "Tax Litigation Support", href: "/services/conferencing-senior-tax-counsels-litigation-support" },
          { label: "Virtual CFO Services", href: "/services/virtual-cfo-services" },
        ],
      },
      {
        title: "NRI Services",
        links: [
          { label: "NRI Taxation", href: "/services/nri-taxation-services" },
          { label: "NRI Property Management", href: "/services/nri-property-management-services" },
          { label: "NRI Legal Services", href: "/services/nri-legal-services" },
          { label: "Senior Citizen Advisory", href: "/services/health-insurance-claims-support" },
        ],
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
      tag: "Featured",
      title: "Expert Housing Society Compliance",
    },
    banner: {
      text: "Cost Calculator — Estimate your setup and filing compliance costs dynamically.",
      btnText: "Learn More",
      btnHref: "/tools",
    },
  },
  tools: {
    columns: [
      {
        title: "Direct Taxation",
        links: [
          { label: "Income Tax Calculator", href: "/tools" },
          { label: "Advance Tax Estimator", href: "/tools" },
          { label: "Capital Gains Planner", href: "/tools" },
        ],
      },
      {
        title: "Indirect Taxation",
        links: [
          { label: "GST Estimator Tool", href: "/tools" },
          { label: "Composition Scheme Check", href: "/tools" },
        ],
      },
      {
        title: "Corporate Calculators",
        links: [
          { label: "Payroll & EPF Estimator", href: "/tools" },
          { label: "Gratuity Calculator", href: "/tools" },
        ],
      },
      {
        title: "Pricing Packages",
        links: [
          { label: "View Pricing Wizard", href: "/pricing" },
          { label: "Request Custom Quote", href: "/contact" },
        ],
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=300&q=80",
      tag: "Calculators",
      title: "GST & Income Tax Tools",
    },
    banner: {
      text: "Need custom corporate structuring or audit projections?",
      btnText: "Book Free Consultation",
      btnHref: "/contact",
    },
  },
  about: {
    columns: [
      {
        title: "Firm Profile",
        links: [
          { label: "Our Story & Vision", href: "/about" },
          { label: "Managing Partner Message", href: "/about" },
        ],
      },
      {
        title: "Our Team",
        links: [
          { label: "Principal Partners", href: "/team" },
          { label: "Tax Specialists", href: "/team" },
        ],
      },
      {
        title: "Accreditations",
        links: [
          { label: "ICAI Fellowship Records", href: "/about" },
          { label: "ISO 27001 Data Security", href: "/about" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Careers Page", href: "/careers" },
          { label: "FAQ Center", href: "/faq" },
        ],
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
      tag: "Accreditation",
      title: "Fellowship ICAI Members",
    },
    banner: {
      text: "Fully registered Practicing Chartered Accountants fellowship since 2012.",
      btnText: "Read Profile",
      btnHref: "/about",
    },
  },
  knowledge: {
    columns: [
      {
        title: "Tax Alerts",
        links: [
          { label: "CBDT Tax Notifications", href: "/knowledge" },
          { label: "GST Council Circulars", href: "/knowledge" },
        ],
      },
      {
        title: "Insights",
        links: [
          { label: "Tax Planning Guides", href: "/knowledge" },
          { label: "Annual Union Budget Highlights", href: "/knowledge" },
        ],
      },
      {
        title: "Multimedia",
        links: [
          { label: "Video Compliance Guides", href: "/knowledge" },
          { label: "Compliance Podcasts", href: "/knowledge" },
        ],
      },
      {
        title: "Downloads",
        links: [
          { label: "Important Statutory Forms", href: "/knowledge" },
          { label: "Compliance Calendar PDF", href: "/knowledge" },
        ],
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=300&q=80",
      tag: "Daily Alerts",
      title: "Latest Compliance Updates",
    },
    banner: {
      text: "Stay informed of latest regulatory changes. Subscribed to newsletter?",
      btnText: "Browse FAQ",
      btnHref: "/faq",
    },
  },
  clients: {
    columns: [
      {
        title: "Industry Portfolios",
        links: [
          { label: "E-commerce & Retail", href: "/clients" },
          { label: "Manufacturing & Logistics", href: "/clients" },
        ],
      },
      {
        title: "Case Histories",
        links: [
          { label: "Tax Litigation Success", href: "/clients" },
          { label: "Corporate Restructuring", href: "/clients" },
        ],
      },
      {
        title: "Client Operations",
        links: [
          { label: "Secure Client Portal", href: "/clients" },
          { label: "Submit Compliance Ticket", href: "/contact" },
        ],
      },
      {
        title: "Credentials",
        links: [
          { label: "Client Reviews", href: "/clients" },
          { label: "Security Accreditations", href: "/about" },
        ],
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80",
      tag: "Success Cases",
      title: "Corporate Restructuring",
    },
    banner: {
      text: "Empowering corporate growth with complete tax confidentiality.",
      btnText: "View Portfolio",
      btnHref: "/clients",
    },
  },
};



export const Navbar: React.FC = () => {
  const { language, theme, setLanguage, toggleTheme, t } = useApp();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

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
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/services", label: "Services", key: "services" },
    { href: "/careers", label: "Careers" },
    { href: "/faq", label: "FAQ Centre" },
    { href: "/contact", label: "Contact Us" },
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
    <>
      <header className={`${isHome ? "fixed" : "sticky"} z-[999] w-full transition-all duration-300 ${isHidden ? "-top-48" : "top-0"}`}>
        <div className={`transition-all duration-300 ${isTransparent ? "bg-transparent text-white pt-3 lg:pt-4" : "border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white shadow-sm"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 lg:py-5">
              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0">
                <img src={isTransparent || theme === "dark" ? "/White_Logo-removebg-preview.png" : "/logo.png"} alt="ConsultAvenuee" className={`w-auto object-contain transition-all origin-left ${isTransparent || theme === "dark" ? "h-14 sm:h-16" : "h-12 sm:h-14"}`} />
              </Link>

              {/* Desktop Contact Info */}
              <div className={`hidden lg:flex items-center gap-10 text-[13px] font-semibold ${isTransparent ? "text-white" : "text-slate-800 dark:text-slate-200"}`}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-amber-500 stroke-[1.5]" />
                  <div className="flex flex-col leading-tight">
                    <span>Hubtown Solaris one, Unit-1205,</span>
                    <span className="font-normal opacity-90">Andheri (E), Mumbai-400069</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-amber-500 stroke-[1.5]" />
                  <div className="flex flex-col leading-tight">
                    <a href="mailto:info@consultavenuee.com" className="text-sm font-bold hover:text-amber-500 transition-colors">info@consultavenuee.com</a>
                    <span className="font-normal opacity-90">Email Us</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://wa.me/919076111021" target="_blank" rel="noreferrer" className="flex items-center justify-center hover:scale-110 transition-transform" aria-label="Chat on WhatsApp">
                    <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.128.555 4.195 1.611 6.012L.391 23.609l5.719-1.5c1.761.961 3.743 1.468 5.922 1.468 6.634 0 12.031-5.397 12.031-12.031S18.666 0 12.031 0zm3.834 17.275c-.156.447-.905.864-1.282.909-.344.041-.787.126-2.222-.444-1.734-.69-2.855-2.455-2.939-2.565-.084-.11-1.688-2.247-1.688-4.285 0-2.037 1.055-3.041 1.433-3.468.378-.427.822-.497 1.096-.497.274 0 .548.006.772.016.236.011.554-.087.844.605.367.877 1.182 2.894 1.287 3.106.105.211.176.456.035.736-.14.281-.211.457-.422.702-.211.246-.441.539-.633.715-.211.192-.435.402-.2.806.235.405 1.045 1.728 2.248 2.801 1.558 1.389 2.836 1.817 3.238 2.01.402.193.637.158.877-.116.241-.275 1.034-1.205 1.314-1.619.28-.415.56-.345.928-.211.368.134 2.324 1.095 2.721 1.294.397.199.661.298.756.463.095.166.095.961-.061 1.408z" /></svg>
                  </a>
                  <div className="flex flex-col leading-tight gap-1">
                    <a href="tel:+919076111021" className="text-sm font-bold hover:text-amber-500 transition-colors">9076111021</a>
                    <a href="tel:+919076111813" className="text-sm font-bold hover:text-amber-500 transition-colors">9076111813</a>
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

        <div
          className={`hidden lg:block mx-auto max-w-7xl relative z-10 ${isTransparent ? "mt-4 lg:mt-5" : ""}`}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className={`transition-all duration-300 ${isTransparent ? "bg-[#9b7c4f]/80 border-y border-black/10" : "bg-[#d5b68a]"} shadow-lg px-4 sm:px-6 lg:px-8 relative`}>
            <div className="flex h-[64px] items-center justify-center gap-8 xl:gap-16">
              {/* Desktop Navigation Links */}
              <nav className="flex items-center gap-3 xl:gap-5 h-full">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const hasDropdown = !!link.key;
                  return (
                    <div
                      key={link.href}
                      className="relative flex items-center h-full"
                      onMouseEnter={() => {
                        if (hasDropdown) setActiveDropdown(link.key || null);
                        else setActiveDropdown(null);
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setActiveDropdown(null)}
                        className={`flex items-center gap-1 text-sm leading-tight font-bold transition-colors hover:text-white h-full ${isActive ? "text-white/60" : "text-white"
                          }`}
                      >
                        <span className="text-center">{link.label}</span>
                        {hasDropdown && <span className="text-[7px] opacity-60 mt-0.5 shrink-0">▼</span>}
                      </Link>
                    </div>
                  );
                })}
              </nav>

              {/* Social Icons & Actions */}
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-5 border-r border-amber-500/30 pr-5">
                  <a href="https://www.instagram.com/consult_avenuee?igsh=MW1mN3pzdXlld251bw==" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                  <a href="https://www.facebook.com/prime.consultancy.75#" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/consult-avenuee-a07536179/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                  </a>
                  <a href="https://x.com/consultavenuee" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCsGMvEo1L56O7zUm3Lp7c6w" target="_blank" rel="noreferrer" aria-label="YouTube">
                    <svg className="w-4 h-4 hover:text-white/70 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>
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
                            className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-amber-50 dark:hover:bg-amber-950 hover:text-amber-600 transition-colors ${language === lang.code
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

                {/* CTA Button */}
                <button onClick={() => setIsConsultationOpen(true)} className="ml-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded shadow transition-colors whitespace-nowrap cursor-pointer">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Mega Dropdowns */}
          <AnimatePresence>
            {activeDropdown && dropdownConfigs[activeDropdown] && (() => {
              const config = dropdownConfigs[activeDropdown];
              return (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-6 right-6 top-full bg-white dark:bg-[#120412] border border-slate-200/60 dark:border-slate-800/60 shadow-2xl rounded-b-md z-[1000] overflow-hidden text-left"
                  onMouseEnter={() => setActiveDropdown(activeDropdown)}
                >
                  {activeDropdown === "services" ? (
                    (() => {
                      const columns = [
                        {
                          id: "society-management",
                          title: "Housing Society",
                          subServices: servicesData.find(t => t.id === "society-management")?.subServices || []
                        },
                        {
                          id: "compliance-business-advisory",
                          title: "Business Formation, Registration & Compliance",
                          subServices: servicesData.find(t => t.id === "compliance-business-advisory")?.subServices || []
                        },
                        {
                          id: "taxation-regulatory-litigation",
                          title: "Tax & Litigation",
                          subServices: servicesData.find(t => t.id === "taxation-regulatory-litigation")?.subServices || []
                        },
                        {
                          id: "nri-services",
                          title: "NRI Services",
                          subServices: servicesData.find(t => t.id === "nri-services")?.subServices || []
                        },
                        {
                          id: "senior-citizen-advisory",
                          title: "Senior Citizen Advisory",
                          subServices: servicesData.find(t => t.id === "senior-citizen-advisory")?.subServices || []
                        }
                      ];

                      return (
                        <div className="p-8 grid grid-cols-6 gap-8">
                          {columns.map((col, idx) => (
                            <div key={idx} className="space-y-5">
                              <a href={`/services#${col.id}`} onClick={() => setActiveDropdown(null)}>
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#210821] dark:text-[#c79d62] border-b-2 border-[#c79d62]/30 dark:border-slate-800/50 pb-2.5 hover:text-[#c79d62]/80 transition-colors cursor-pointer">
                                  {col.title}
                                </h4>
                              </a>
                              <div className="max-h-[320px] overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-transparent">
                                {col.subServices.map((sub, sIdx) => (
                                  <div key={sIdx} className="group/sub relative text-left">
                                    <Link
                                      href={`/services/${sub.id}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-[11px] font-extrabold tracking-wide text-slate-800 dark:text-white/90 leading-snug cursor-pointer hover:text-[#c79d62] transition-colors capitalize flex items-center justify-between py-1 w-full"
                                    >
                                      <span>{sub.title}</span>
                                      {sub.subSubServices && sub.subSubServices.length > 0 && col.id !== "society-management" && sub.title !== "GST" && <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-2 opacity-60 transition-transform duration-200 group-hover/sub:rotate-90" />}
                                    </Link>
                                    
                                    {sub.subSubServices && sub.subSubServices.length > 0 && col.id !== "society-management" && sub.title !== "GST" && (
                                      <div className="hidden group-hover/sub:block mt-1 animate-in slide-in-from-top-1 duration-200">
                                        <ul className="space-y-2.5 text-xs border-l-2 border-[#c79d62]/30 pl-3 pb-2 pt-1">
                                          {sub.subSubServices.map((subsub: any, ssIdx: number) => (
                                            <li key={ssIdx}>
                                              <Link
                                                href={['company-formation', 'registrations', 'corporate-compliance', 'income-tax', 'litigation-support'].includes(sub.id) ? `/services/${sub.id}#${subsub.slug}` : `/services/${subsub.slug}`}
                                                onClick={() => setActiveDropdown(null)}
                                                className="text-slate-600 dark:text-slate-200 hover:text-[#c79d62] transition-colors block capitalize font-bold leading-tight"
                                              >
                                                {subsub.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}

                          {/* Spotlight column */}
                          <div className="space-y-5">
                            <h4 className="text-sm font-black uppercase tracking-widest text-[#210821] dark:text-[#c79d62] border-b-2 border-[#c79d62]/30 dark:border-slate-800/50 pb-2.5">
                              Spotlight
                            </h4>
                            <div className="relative h-40 rounded-lg overflow-hidden shadow-sm group border border-slate-200/40 dark:border-slate-800/40">
                              <img
                                src={config.image.src}
                                alt={config.image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#210821]/90 via-[#210821]/40 to-transparent flex flex-col justify-end p-3">
                                <span className="text-[9px] font-black uppercase text-[#c79d62] tracking-widest">
                                  {config.image.tag}
                                </span>
                                <h5 className="text-white text-[11px] font-bold leading-tight mt-0.5">
                                  {config.image.title}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="p-8 grid grid-cols-5 gap-8">
                      {config.columns.map((col, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-xs font-black uppercase tracking-widest text-[#210821] dark:text-[#c79d62] border-b border-slate-100 dark:border-slate-800/50 pb-2">
                            {col.title}
                          </h4>
                          <ul className="space-y-2.5 text-xs">
                            {col.links.map((link, lIdx) => (
                              <li key={lIdx} className="relative group/sub">
                                <Link
                                  href={link.href}
                                  onClick={(e) => {
                                    if (link.subLinks) e.preventDefault();
                                    else setActiveDropdown(null);
                                  }}
                                  className="text-slate-600 dark:text-slate-200 hover:text-[#c79d62] dark:hover:text-[#c79d62] transition-colors block font-bold capitalize flex items-center justify-between w-full"
                                >
                                  <span>{link.label}</span>
                                  {link.subLinks && <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
                                </Link>
                                {link.subLinks && (
                                  <div className="absolute left-full top-0 ml-2 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 bg-white dark:bg-[#0a122a] border border-slate-100 dark:border-slate-800 rounded-lg shadow-xl p-3 z-50">
                                    <ul className="space-y-2 text-xs">
                                      {link.subLinks.map((sub, sIdx) => (
                                        <li key={sIdx}>
                                          <Link href={sub.href} onClick={() => setActiveDropdown(null)} className="text-slate-600 dark:text-slate-200 hover:text-[#c79d62] transition-colors block capitalize font-medium leading-snug">
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#210821] dark:text-[#c79d62] border-b border-slate-100 dark:border-slate-800/50 pb-2">
                          Spotlight
                        </h4>
                        <div className="relative h-36 rounded-lg overflow-hidden shadow-sm group border border-slate-200/40 dark:border-slate-800/40">
                          <img
                            src={config.image.src}
                            alt={config.image.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#210821]/90 via-[#210821]/40 to-transparent flex flex-col justify-end p-3">
                            <span className="text-[8px] font-black uppercase text-[#c79d62] tracking-widest">
                              {config.image.tag}
                            </span>
                            <h5 className="text-white text-[10px] font-bold leading-tight mt-0.5">
                              {config.image.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Unified Theme Banner */}
                  <div className="bg-[#c79d62] text-white py-3.5 px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 bg-slate-900/20 rounded-md flex items-center justify-center border border-white/10 shrink-0">
                        <Calculator className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[12px] font-bold tracking-tight block">
                          {config.banner.text}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={config.banner.btnHref}
                      onClick={() => setActiveDropdown(null)}
                      className="px-5 py-2 bg-[#210821] hover:bg-[#110311] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm transition-all"
                    >
                      {config.banner.btnText}
                    </Link>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
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
                    <img src={theme === "dark" ? "/White_Logo-removebg-preview.png" : "/logo.png"} alt="ConsultAvenuee" className={`w-auto object-contain transition-all origin-left ${theme === "dark" ? "h-12" : "h-10"}`} />
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
                          className={`text-base font-semibold transition-colors py-2 border-b border-slate-100 dark:border-slate-900 ${isActive ? "text-amber-600" : "text-slate-700 dark:text-slate-300"
                            }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-6 mb-8 text-slate-400 dark:text-slate-500">
                    <a href="https://www.instagram.com/consult_avenuee?igsh=MW1mN3pzdXlld251bw==" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <svg className="w-4 h-4 hover:text-amber-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                    <a href="https://www.facebook.com/prime.consultancy.75#" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <svg className="w-4 h-4 hover:text-amber-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/consult-avenuee-a07536179/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg className="w-4 h-4 hover:text-amber-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                    </a>
                    <a href="https://x.com/consultavenuee" target="_blank" rel="noreferrer" aria-label="Twitter">
                      <svg className="w-4 h-4 hover:text-amber-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCsGMvEo1L56O7zUm3Lp7c6w" target="_blank" rel="noreferrer" aria-label="YouTube">
                      <svg className="w-4 h-4 hover:text-amber-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    </a>
                  </div>
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
                        className={`text-left px-3 py-2 text-[11px] font-bold rounded-lg border transition-colors ${language === lang.code
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
      <BookConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </>
  );
};
