"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Award,
  Users,
  Calendar,
  Calculator,
  Compass,
  CheckCircle2,
  Sparkles,
  BookOpen,
  CalendarDays,
  FileCheck,
  Check,
  Star,
  Building,
  HeartHandshake,
  Plane,
  Briefcase,
  ShoppingCart,
  Landmark,
  Leaf,
  Truck,
  House
} from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";

export default function HomePage() {
  const { t, theme } = useApp();
  const [activeStep, setActiveStep] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const journeySteps = [
    { num: "01", title: "ASSESSMENT", image: "/we serve/assessment.png", icon: FileCheck, detailTitle: "Assessment", desc: "We evaluate your current compliance position, operational requirements, and potential risk areas to identify challenges, opportunities, and the most effective path forward." },
    { num: "02", title: "ADVISORY", image: "/we serve/advise.png", icon: Calculator, detailTitle: "Advisory", desc: "We provide clear, practical, and result-oriented guidance tailored to your unique requirements. Our experts help you make informed decisions." },
    { num: "03", title: "EXECUTION", image: "/we serve/execution.png", icon: Building, detailTitle: "Execution", desc: "Ideas create possibilities. Execution creates results. We implement every solution with precision, speed, and accountability." },
    { num: "04", title: "COMPLIANCE", icon: ShieldAlert, detailTitle: "Compliance", desc: "Compliance is not a one-time activity. We provide continuous oversight and expert support to keep you ahead of regulatory requirements and potential risks." }
  ];

  const problemsList = [
    {
      id: "society-management",
      title: "Housing Society Advisory",
      // subtitle: "Secretary & Chairman Overburdened",
      // description: "Focus on your community while we manage AGM.SGBM, notices, minutes, compliance, taxation to ensure and protect Managing Committee members from penalties through proper compliance and governance.",
      icon: Building,
      category: "Advisory",
      features: [
        { q: "Secretary & Chairman Overburdened", a: "Focus on your community while we manage AGM.SGBM, notices, minutes, compliance, taxation to ensure and protect Managing Committee members from penalties through proper compliance and governance." },
        { q: "Is Your Housing Society Fully Compliant?", a: "Avoid penalties, notices and audit issues with professional compliance management." },
        { q: "Builder not handing over your society?", a: "We help societies secure legal handover and complete documentation." }
      ]
    },
    {
      id: "compliance-business-advisory",
      title: "Business Formation, Registration & Compliance",
      // subtitle: "Confused About Which Business Structure to Choose?",
      // description: "We help entrepreneurs select the right entity—Private Limited Company, LLP, Partnership or Proprietorship—based on their business goals, taxation and compliance requirements.",
      icon: Briefcase,
      category: "Compliance",
      features: [
        { q: "Confused About Which Business Structure to Choose?", a: "We help entrepreneurs select the right entity—Private Limited Company, LLP, Partnership or Proprietorship—based on their business goals, taxation and compliance requirements." },
        { q: "Worried About Missing Statutory Compliances?", a: "Stay compliant with ROC filings, GST, TDS, Income Tax, Labour Laws and other regulatory requirements to avoid penalties and notices." },
        { q: "Are You Spending Too Much Time on Paperwork Instead of Growing Your Business?", a: "Focus on sales, operations and growth while we manage registrations, filings, taxation and regulatory compliance." }
      ]
    },
    {
      id: "taxation-regulatory-litigation",
      title: "Tax & Litigation",
      // subtitle: "Facing Challenges with Regulatory Registrations and Approvals?",
      // description: "Assistance with GST, PAN, TAN, Professional Tax, MSME and other regulatory registrations and compliances.",
      icon: ShieldAlert,
      category: "Taxation",
      features: [
        { q: "Facing Challenges with Regulatory Registrations and Approvals?", a: "Assistance with GST, PAN, TAN, Professional Tax, MSME and other regulatory registrations and compliances." },
        { q: "Managing Multiple Tax Deadlines and Filings?", a: "Assistance with GST, PAN, TAN, Professional Tax, MSME and other regulatory registrations and compliances." },
        { q: "Need Representation Before Tax Authorities?", a: "End-to-end compliance management ensures timely filings and reduces the risk of penalties and notices." },
        { q: "Need Representation Before Tax Authorities?", a: "Professional representation during assessments, investigations, appeals and hearings helps protect your interests." }
      ]
    },
    {
      id: "nri-services",
      title: "NRI Services",
      // subtitle: "NRI Tax & Property Solutions",
      // description: "Trusted NRI Taxation, Property Management & Compliance Solutions for Global Indians.",
      icon: Plane,
      category: "NRI Solutions",
      features: [
        { q: "Confused About NRI Taxation?", a: "Expert guidance on tax filing, capital gains and compliance requirements." },
        { q: "Unable to Visit India Frequently for Compliance Matters?", a: "Manage taxation, property and legal documentation remotely through our dedicated NRI support services." },
        { q: "Planning to Sell Property in India?", a: "Get assistance with tax planning, TDS compliance, capital gains calculations and repatriation of sale proceeds." },
        { q: "Confused About NRI Taxation?", a: "Expert guidance on tax filing, capital gains and compliance requirements." }
      ]
    },
    {
      id: "senior-citizen-advisory",
      title: "Senior Citizen Advisory",
      // subtitle: "Senior Citizen Support Services",
      // description: "Trusted support for taxation, pension benefits, property matters, estate planning, succession planning and legal documentation for senior citizens and their families.",
      icon: HeartHandshake,
      category: "Senior Citizen Support",
      features: [
        { q: "Confused About Income Tax Compliance After Retirement?", a: "Expert support for income tax filing, tax planning, deductions and compliance tailored to senior citizens." },
        { q: "Experiencing Delays in Pension Benefits or Retirement Claims?", a: "Assistance with pension-related documentation, claims, compliance and grievance resolution." },
        { q: "Concerned About Managing Affairs When Living Alone?", a: "Structured planning and documentation help ensure continuity and ease of decision-making during unforeseen circumstances." },
        { q: "Need Assistance with Will & Estate Planning?", a: "Expert guidance on drafting wills, succession planning, and ensuring smooth transfer of assets to your heirs." }
      ]
    },
  ];

  // Expertise Sections with Professional High-Quality Images
  const expertiseSections = [
    {
      title: "Housing Society Advisory",
      cta: "Learn More",
      desc: "Society Compliance & Governance-Complete Housing Society Compliance, Taxation, Audit & Governance Solutions for Cooperative Housing Societies Across India.",
      href: "/services#society-management",
      image: "/5th home/housing society.png",
    },
    {
      title: "Business Formation, Registration & Compliance",
      cta: "Learn More",
      desc: "Build. Comply. Grow-Comprehensive Company Registration, Regulatory Compliance, Taxation, Accounting and Virtual CFO Services for Startups, SMEs and Growing Businesses.",
      href: "/services#compliance-business-advisory",
      image: "/5th home/business reg.png",
    },
    {
      title: "Tax & Litigation",
      cta: "Learn More",
      desc: "Taxation & Litigation Experts-End-to-end Income Tax, GST, Tax Advisory, Regulatory Registration, Assessments, Appeals and Litigation Support for businesses, professionals and individuals across India.",
      href: "/services#taxation-regulatory-litigation",
      image: "/5th home/tax.png",
    },
    {
      title: "NRI Services",
      cta: "Learn More",
      desc: "NRI Tax & Property Solutions-Trusted NRI Taxation, Property Management & Compliance Solutions for Global Indians.",
      href: "/services#nri-services",
      image: "/5th home/nri service.png",
    },
    {
      title: "Senior Citizen Advisory",
      cta: "Learn More",
      desc: "Senior Citizen Support Services-Trusted support for taxation, pension benefits, property matters, estate planning, succession planning and legal documentation for senior citizens and their families.",
      href: "/services#senior-citizen-advisory",
      image: "/5th home/senior citizen.png",
    }
  ];

  // Active Compliance Deadlines Data
  const dueDates = [
    { task: "GSTR-1 (Monthly Outward Sales)", date: "11th of every month", status: "Active" },
    { task: "GSTR-3B (Monthly Tax Summary)", date: "20th of every month", status: "Active" },
    { task: "Income Tax Return (ITR filing - Non-Audit)", date: "31st July 2026", status: "Critical" },
    { task: "Statutory Tax Audit Report (Section 44AB)", date: "30th September 2026", status: "Upcoming" }
  ];

  const industriesList = [
    {
      title: "HOUSING SOCIETY",
      desc: "Expert Housing Society Registration, Compliance, Taxation & Governance Services Under One Roof.",
      icon: House
    },
    {
      title: "SME",
      desc: "Your Reliable Partner for SME Registration, Compliance, Taxation and Business Growth.",
      icon: Building
    },
    {
      title: "STARTUP",
      desc: "From Idea to Scale—Complete Startup Advisory and Compliance Solutions Under One Roof.",
      icon: ShoppingCart
    },
    {
      title: "NRI",
      desc: "Comprehensive NRI Taxation, Property, Compliance and Wealth Management Solutions for Global Indians.",
      icon: Landmark
    },
    {
      title: "SENIOR CITIZEN",
      desc: "Helping Senior Citizens Manage Tax, Property, Investments and Retirement Affairs with Confidence.",
      icon: Leaf
    },
    {
      title: "Charitable Trust",
      desc: "Empowering Charitable Trusts with Expert Registration, Tax Exemption, Compliance and Governance Solutions.",
      icon: Truck
    }
  ];

  return (
    <>
      <div className="relative w-full">
        {/* 1. HERO SECTION WITH CLEAR HIGH-VISIBILITY BACKGROUND VIDEOS */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              key={theme}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
            >
              <source src={theme === "dark" ? "/Hero1.mp4" : "/Hero.mp4"} type="video/mp4" />
            </video>
            {/* Subtle dark tint to improve contrast for white text */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center pt-28 lg:pt-36">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center max-w-3xl"
            >
              {/* Main Title */}
              <h3 className="text-1xl sm:text-2xl lg:text-2xl font-extrabold tracking-tight text-white mb-2 leading-tight select-none">
                Your Trusted Partner for Compliance, Governance & Advisory Services
              </h3>



              {/* Subtitle */}
              {/* <p className="text-xs sm:text-sm lg:text-base text-slate-100 max-w-xl leading-relaxed mb-8 font-medium">
              India's Trusted Compliance, Taxation & Business Advisory Platform
              Providing business registration, GST, income tax, accounting, legal compliance, audit and strategic advisory services for startups, SMEs, housing societies and individuals across India.
            </p> */}

              {/* CTA Button */}
              <Link
                href="/services"
                className="h-12 inline-flex items-center justify-center px-10 bg-[#c79d62] hover:bg-[#b58c53] text-white font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-2xl border border-white/5 rounded-md"
              >
                our services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* NEW INDUSTRIES SECTION */}
        <section className="py-20 bg-white dark:bg-[#180618] border-b border-slate-100 dark:border-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl uppercase sm:text-4xl font-extrabold text-[#210821] dark:text-white tracking-tight lowercase">
                WE SERVED TO
              </h2>
              <div className="w-10 h-[3px] bg-[#c79d62] mx-auto mt-2 rounded" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
              {(() => {
                const weServeIconMap: Record<string, string> = {
                  "SME": "/we serve/sme.png",
                  "STARTUP": "/we serve/startup.png",
                  "NRI": "/we serve/nri.png",
                  "SENIOR CITIZEN": "/we serve/senior.png",
                  "Charitable Trust": "/we serve/ngo.png",
                };
                
                return industriesList.map((item, idx) => {
                  const IconComponent = item.icon;
                  const imgSrc = weServeIconMap[item.title];
                  return (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        {imgSrc ? (
                          <img
                            src={imgSrc}
                            alt={item.title}
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          <IconComponent className="w-10 h-10 text-[#c79d62] dark:text-[#c79d62]" />
                        )}
                      </div>
                      <div className="flex-grow pt-1">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <div className="w-10 h-[2px] bg-[#c79d62] mt-1 mb-2.5" />
                        <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </section>

        {/* 2. ACCREDITATIONS & TRUST BADGES SECTION */}
        <section className="py-5 bg-[#c79d62] text-center shadow-inner">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-0 items-center">
            <div className="flex justify-center items-center group cursor-pointer py-2">
              <span className="text-white font-bold text-sm sm:text-base uppercase tracking-widest relative overflow-hidden pb-1">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#210821]">Advisory</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#210821] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </span>
            </div>
            <div className="flex justify-center items-center group cursor-pointer py-2 border-l border-white/20">
              <span className="text-white font-bold text-sm sm:text-base uppercase tracking-widest relative overflow-hidden pb-1">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#210821]">Taxation</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#210821] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </span>
            </div>
            <div className="flex justify-center items-center group cursor-pointer py-2 border-l border-white/20">
              <span className="text-white font-bold text-sm sm:text-base uppercase tracking-widest relative overflow-hidden pb-1">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#210821]">Compliance</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#210821] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </span>
            </div>
            <div className="flex justify-center items-center group cursor-pointer py-2 border-l border-white/20">
              <span className="text-white font-bold text-sm sm:text-base uppercase tracking-widest relative overflow-hidden pb-1">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#210821]">Accounting</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#210821] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </span>
            </div>
          </div>
        </section>



        {/* 4. THE 8-9 CORE PROBLEMS CA SOLVES SECTION */}
        <section className="py-24 relative bg-[#1b1c21] border-t border-slate-800/50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c79d62] mb-2 block">
                Clarity. Compliance. Confidence.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-6 drop-shadow-md whitespace-normal">
                Compliance is not a cost, it is an investment in trust
              </h2>
              <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed mb-8 whitespace-normal">
                Helping businesses, housing societies, NRIs overcome compliance challenges, regulatory roadblocks, taxation complexities, governance issues through trusted advisory and strategic guidance.
              </p>
              <button onClick={() => setIsConsultationOpen(true)} className="inline-block px-8 py-3.5 bg-[#c79d62] text-white hover:bg-[#a67d46] transition-colors text-sm font-bold uppercase tracking-widest shadow-lg cursor-pointer">
                Book Free Consultation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {problemsList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`p-8 md:p-10 border border-[#c79d62] bg-black/20 hover:bg-black/50 transition-all duration-300 relative flex flex-col text-left items-start justify-start min-h-[340px] group ${
                      idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                    }`}
                  >
                    <div className="absolute top-5 left-5 right-5 md:top-8 md:left-8 md:right-8 flex items-center justify-between gap-3">
                      <span className="text-xs sm:text-sm font-extrabold text-[#c79d62] uppercase tracking-widest leading-tight text-left pr-4">
                        {item.title}
                      </span>
                      <div className="w-10 h-10 rounded bg-[#c79d62] flex shrink-0 items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white stroke-[2]" />
                      </div>
                    </div>

                    <div className="mb-4 mt-12">
                    </div>

                    {item.features && (
                      <div className="flex flex-col gap-3 mb-8 w-full">
                        {item.features.map((feature, fIdx) => (
                          <div key={fIdx} className="bg-black/40 border border-[#c79d62]/30 p-3.5 rounded shadow-sm text-left w-full">
                            <p className="text-[#c79d62] font-bold text-[13px] mb-1.5 leading-snug">{feature.q}</p>
                            <p className="text-slate-300 text-xs leading-relaxed">{feature.a}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto">
                      <Link
                        href={`/services#${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#c79d62] hover:bg-[#a67d46] px-6 py-2.5 uppercase tracking-widest transition-colors shadow-md"
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. EXPERTISE & SERVICES SECTION (Professional Image-Driven Layout) */}
        < section className="py-24 bg-slate-100/50 dark:bg-slate-950/40 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                One Platform. Multiple Solutions
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mt-3">
                Your Trusted Compliance & Advisory Partner
              </h2>
            </div>

            <div className="space-y-24">
              {expertiseSections.map((section, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      } gap-12 lg:gap-20 items-center`}
                  >
                    {/* Text Container */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="flex-1 max-w-xl"
                    >
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                        {section.desc}
                      </p>
                      <Link
                        href={section.href}
                        className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-1"
                      >
                        {section.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>

                    {/* Image Container */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                      className="flex-1 w-full relative"
                    >
                      {/* Decorative backdrop element */}
                      <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 group aspect-[4/3] bg-slate-200 dark:bg-slate-800">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Glassmorphic overlay for a premium touch */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section >

        {/* 6. WHY CHOOSE US */}
        <section className="py-24 bg-[#16171b] text-white relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=20')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Animated floating elements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 bg-black/40 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] border border-[#c79d62]/20 shadow-2xl relative"
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-6 -right-6 h-20 w-20 bg-[#c79d62]/20 rounded-full blur-2xl"></motion.div>
              <div className="flex items-center gap-5 relative z-10">
                <div className="bg-[#c79d62]/10 p-4 rounded-2xl border border-[#c79d62]/20">
                  <ShieldAlert className="h-8 w-8 text-[#c79d62]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl mb-1 text-white">ICAI member</h3>
                  <p className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#c79d62]" /> Since 1992.
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-[#c79d62]/30 to-transparent my-6 relative z-10"></div>
              <div className="flex items-center gap-5 relative z-10">
                <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                  <Star className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl mb-1 text-white">Founded on Experience </h3>
                  <p className="text-sm font-semibold text-slate-300">Top Rated advisory</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex px-3 py-1 rounded-full bg-[#c79d62]/10 text-[#c79d62] border border-[#c79d62]/20 font-bold text-xs uppercase tracking-widest items-center gap-2 mb-6">
                <TrendingUp className="h-4 w-4" /> Advisory & Compliance
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-white">
                Not Just Accountants.<br />We Are <span className="text-[#c79d62]">compliance and strategic Partners.</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-10 text-lg">
                Led by an ICAI member since 1992, we go beyond filing returns and meeting deadlines. Our expert advisory and compliance solutions empower businesses, housing societies, NRIs, and individuals to achieve sustainable growth while staying fully compliant.
              </p>
              <Link href="/about" className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-[#c79d62] text-white hover:bg-[#a67d46] hover:scale-105 transition-all text-sm font-extrabold tracking-wide shadow-lg">
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 7. OUR ADVISORY JOURNEY - INTERACTIVE TIMELINE */}
        < section className="py-24 bg-slate-50 dark:bg-[#120412]/50 border-t border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-16">
              <span className="text-xs font-bold bg-[#c79d62]/10 text-[#c79d62] px-3.5 py-1.5 rounded-full border border-[#c79d62]/20 uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#210821] dark:text-white mt-4 mb-4">
                Our Advisory Journey
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed font-normal">
                Our proven 4-step process helps businesses, housing societies, NRIs, and individuals navigate compliance requirements and achieve their goals with confidence.
              </p>
            </div>

            {/* Interactive Timeline Bar */}
            <div className="relative mb-16 max-w-4xl mx-auto px-0">
              {/* Background Gold-tinted Line */}
              <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-[#c79d62]/30 dark:bg-[#c79d62]/20 -translate-y-1/2" />

              {/* Dynamic Filling Gold Line */}
              <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] -translate-y-1/2 overflow-hidden">
                <motion.div
                  className="h-full bg-[#c79d62] origin-left"
                  animate={{ width: `${(activeStep / 3) * 100}%` }}
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                />
              </div>

              <div className="grid grid-cols-4 relative z-10">
                {journeySteps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = activeStep === i;
                  const isCompleted = i <= activeStep;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className="flex flex-col items-center focus:outline-none group cursor-pointer"
                    >
                      {/* Circle/Squircle Badge */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.08 : 1.0,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`h-14 w-14 rounded-[18px] flex items-center justify-center mb-4 transition-all duration-300 relative ${isActive
                          ? "bg-[#210821] dark:bg-[#321232] border-2 border-[#c79d62] text-white shadow-[0_0_20px_rgba(158,128,85,0.35)] ring-4 ring-[#c79d62]/10"
                          : "bg-white dark:bg-[#1a0b1a] border-2 border-[#c79d62]/50 hover:border-[#c79d62] text-[#c79d62]"
                          }`}
                      >
                        {step.image ? (
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-7 h-7 object-contain"
                          />
                        ) : (
                          <Icon className={`h-6 w-6 transition-colors duration-300 ${isActive
                            ? "text-white"
                            : "text-[#c79d62]"
                            }`} />
                        )}
                      </motion.div>
                      <span className={`text-[10px] font-black tracking-wider transition-colors duration-300 ${isActive ? "text-[#c79d62]" : "text-slate-400 dark:text-slate-500"
                        }`}>{step.num}</span>
                      <h3 className={`font-extrabold text-[10px] sm:text-[11px] tracking-widest uppercase transition-colors duration-300 mt-1 ${isActive ? "text-[#210821] dark:text-[#c79d62]" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-650 dark:group-hover:text-slate-350"
                        }`}>{step.title}</h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Details Display Area */}
            <div className="max-w-3xl mx-auto min-h-[150px] px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 sm:p-10 rounded-[24px] bg-white dark:bg-[#160716] border border-slate-100 dark:border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] text-left relative overflow-hidden max-w-2xl mx-auto"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c79d62]/3 rounded-full blur-2xl pointer-events-none" />
                  <h3 className="font-extrabold text-xl text-[#210821] dark:text-white mb-3 tracking-tight">
                    0{activeStep + 1}. {journeySteps[activeStep].detailTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {journeySteps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section >





        {/* 7. QUICK CONSULTATION BOOKING WIDGET */}
        <section className="py-24 relative bg-[#0f1014] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=20')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="bg-[#1b1c21]/80 backdrop-blur-2xl p-10 sm:p-14 rounded-[2.5rem] border border-[#c79d62]/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#c79d62]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 relative z-10 leading-tight">
                Ready to Simplify Compliance & Accelerate Growth?
              </h2>
              <p className="text-base text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto relative z-10">
                Schedule a consultation with our experts and discover practical solutions tailored to your business, society, or personal requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center px-10 rounded-full bg-[#c79d62] hover:bg-[#a67d46] hover:scale-105 text-white font-extrabold shadow-[0_0_30px_rgba(199,157,98,0.2)] transition-all tracking-wide relative z-10"
              >
                Schedule a Free Call
              </Link>
            </div>
          </div>
        </section>
      </div >
      <BookConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </>
  );
}
