"use client";

import React, { useState } from "react";
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
  Truck
} from "lucide-react";

export default function HomePage() {
  const { t, theme } = useApp();
  const [activeStep, setActiveStep] = useState(0);

  const problemsList = [
    { id: "freelancer", title: t.p1Title, problem: t.p1Problem, solution: t.p1Solution, icon: Users, category: "Freelancer" },
    { id: "startup", title: t.p2Title, problem: t.p2Problem, solution: t.p2Solution, icon: TrendingUp, category: "Startup" },
    { id: "tax-notice", title: t.p3Title, problem: t.p3Problem, solution: t.p3Solution, icon: ShieldAlert, category: "Scrutiny Scenarios" },
    { id: "gst-trap", title: t.p4Title, problem: t.p4Problem, solution: t.p4Solution, icon: FileSpreadsheet, category: "GST Audits" },
    { id: "nri-tax", title: t.p5Title, problem: t.p5Problem, solution: t.p5Solution, icon: Compass, category: "NRI Assets" },
    { id: "corporate-restructuring", title: t.p6Title, problem: t.p6Problem, solution: t.p6Solution, icon: Award, category: "Restructuring" },
    { id: "bookkeeping", title: t.p7Title, problem: t.p7Problem, solution: t.p7Solution, icon: Calculator, category: "Automation" },
    { id: "gst-registration", title: t.p8Title, problem: t.p8Problem, solution: t.p8Solution, icon: CheckCircle2, category: "GST Waiver" },
    { id: "succession-trust", title: t.p9Title, problem: t.p9Problem, solution: t.p9Solution, icon: Sparkles, category: "Succession Trust" },
  ];

  // Expertise Sections with Professional High-Quality Images
  const expertiseSections = [
    {
      title: "Industry Specific Expertise",
      cta: "Explore Our Expertise",
      desc: "Specialized advisory for Manufacturing, Real Estate, Tech Startups, and E-commerce. We understand the unique compliance and regulatory frameworks of your sector.",
      href: "/services",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tax Litigation & Dispute Resolution",
      cta: "View Legal Services",
      desc: "Unmatched strength in handling complex department notices, appeals, and tribunal representations to safeguard your business interests.",
      href: "/services",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Modern Tech-Driven Bookkeeping",
      cta: "Discover Automation",
      desc: "Experience real-time financial dashboards, cloud accounting, and automated reconciliation powered by industry-leading software.",
      href: "/services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Wealth, Legacy & Estate Planning",
      cta: "Plan Your Legacy",
      desc: "Comprehensive succession planning, family trusts, and HNI wealth preservation strategies tailored for long-term financial security.",
      href: "/services",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Global Expansion & NRI Advisory",
      cta: "Go Global",
      desc: "Navigating FEMA compliance, cross-border taxation, transfer pricing, and seamless advisory for NRI property sales.",
      href: "/services",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
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
      title: "Travel and Aviation Consulting",
      desc: "Providing specialized tax advisory, regulatory compliance, and audit support for airlines, travel agencies, and hospitality operators.",
      icon: Plane
    },
    {
      title: "Business Services Consulting",
      desc: "Tailored accounting, corporate structuring, and payroll solutions for service-oriented firms and professional consultancies.",
      icon: Briefcase
    },
    {
      title: "Consumer Products Consulting",
      desc: "Assisting retail, e-commerce, and FMCG companies with supply chain tax optimizations, inventory audits, and GST compliance.",
      icon: ShoppingCart
    },
    {
      title: "Financial Services Consulting",
      desc: "Expert financial advisory, internal audits, and risk assessment for banking, insurance, fintech, and investment companies.",
      icon: Landmark
    },
    {
      title: "Energy and Environment Consulting",
      desc: "Navigating carbon credit taxation, regulatory audits, and structured finance projects for green energy and utility initiatives.",
      icon: Leaf
    },
    {
      title: "Surface Transport & Logistics Consulting",
      desc: "Financial strategies, GST optimization on freight services, and operating cost audits for logistics, warehousing, and shipping providers.",
      icon: Truck
    }
  ];

  return (
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
        </div>

        {/* Hero Content - Transparent and Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left"
          >
            <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-amber-600/80 text-white border border-white/20 mb-5 inline-block uppercase tracking-[0.2em]">
              ✨ Certified Advisory Panel
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 leading-snug max-w-[20ch]">
              {t.heroTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed mb-8 font-medium">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-start items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-10 inline-flex items-center justify-center px-6 rounded-xl bg-amber-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-lg hover:bg-amber-500 transition-transform hover:-translate-y-0.5"
              >
                {t.heroCTA}
              </Link>
              <Link
                href="/tools"
                className="w-full sm:w-auto h-10 inline-flex items-center justify-center px-6 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-[11px] uppercase tracking-wider hover:bg-white/20 transition-transform hover:-translate-y-0.5"
              >
                {t.heroCTASecondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW INDUSTRIES SECTION */}
      <section className="py-20 bg-white dark:bg-[#180618] border-b border-slate-100 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#210821] dark:text-white tracking-tight lowercase">
              industries
            </h2>
            <div className="w-10 h-[3px] bg-[#9e8055] mx-auto mt-2 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {industriesList.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1b071b] border border-[#9e8055]/20 flex items-center justify-center shadow-md transition-all duration-300 group-hover:border-[#9e8055]/50 group-hover:scale-105">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[2px] bg-[#9e8055] mt-1 mb-2.5" />
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. ACCREDITATIONS & TRUST BADGES SECTION */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 text-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-amber-600 dark:text-amber-400 font-extrabold text-lg flex items-center gap-1">
              ICAI
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              Practicing Fellowship CA
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-l border-slate-200 dark:border-slate-800">
            <span className="text-slate-800 dark:text-white font-extrabold text-base flex items-center gap-1">
              ISO 27001
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              Secure Data Systems
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-l border-slate-200 dark:border-slate-800">
            <div className="flex text-amber-400 items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              4.9/5 Rating (1500+ Clients)
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-l border-slate-200 dark:border-slate-800">
            <span className="text-slate-800 dark:text-white font-extrabold text-base">
              DISA Certified
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              System Audit Credentials
            </span>
          </div>
        </div>
      </section>

      {/* 3. DUE DATE COMPLIANCE CALENDAR TRACKER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Filing Deadlines
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Active Compliance Calendar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dueDates.map((item, idx) => (
            <div
              key={idx}
              className="glass p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
            >
              <div>
                <span className={`px-2 py-0.5 rounded text-[8px] font-extrabold uppercase tracking-wider inline-block mb-3.5 ${
                  item.status === "Critical"
                    ? "bg-rose-500/10 text-rose-500"
                    : "bg-amber-500/10 text-amber-500"
                }`}>
                  {item.status}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1">
                  {item.task}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-400">
                <CalendarDays className="h-4 w-4 text-amber-500" />
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE 8-9 CORE PROBLEMS CA SOLVES SECTION */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Real Cases, Real Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
            {t.problemsTitle}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.problemsSubtitle}
          </p>
        </div>

        {/* Interactive Problem Explorer (3D perspective / grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-premium p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover-3d relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      {item.category}
                    </span>
                    <Icon className="h-6 w-6 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-rose-500 dark:text-rose-450 uppercase tracking-widest block mb-1">
                      The Challenge
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {item.problem}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto flex flex-col gap-3.5">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                      The Solution
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                      {item.solution.slice(0, 110)}...
                    </p>
                  </div>
                  <Link
                    href={`/problems/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 group"
                  >
                    Explore Case Details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. EXPERTISE & SERVICES SECTION (Professional Image-Driven Layout) */}
      <section className="py-24 bg-slate-100/50 dark:bg-slate-950/40 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Specialized Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Comprehensive Financial Excellence
            </h2>
          </div>

          <div className="space-y-24">
            {expertiseSections.map((section, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
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
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=20')] dark:opacity-20 bg-cover bg-center transition-colors duration-300"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Animated floating elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative"
          >
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-6 -right-6 h-20 w-20 bg-amber-500/20 rounded-full blur-2xl"></motion.div>
             <div className="flex items-center gap-5 relative z-10">
                <div className="bg-amber-100 dark:bg-amber-500/20 p-4 rounded-2xl">
                   <ShieldAlert className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                   <h3 className="font-extrabold text-xl mb-1">Practising ICAI Member</h3>
                   <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                     <TrendingUp className="h-4 w-4 text-amber-500 dark:text-amber-400" /> 15+ years of trust.
                   </p>
                </div>
             </div>
             <div className="h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent my-6 relative z-10"></div>
             <div className="flex items-center gap-5 relative z-10">
                <div className="bg-blue-100 dark:bg-blue-500/20 p-4 rounded-2xl">
                   <Star className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                </div>
                <div>
                   <h3 className="font-extrabold text-xl mb-1">Top Rated Advisory</h3>
                   <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">4.9/5 Average Client Rating</p>
                </div>
             </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="inline-flex px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 font-bold text-xs uppercase tracking-widest items-center gap-2 mb-6">
              <TrendingUp className="h-4 w-4" /> Precision & Growth
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Not Just Accountants.<br/>We Are <span className="text-amber-600 dark:text-amber-400">Strategic Partners.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 text-lg">
              We move beyond traditional number crunching. Whether you are a startup securing funding or an enterprise navigating complex GST frameworks, our personalized solutions drive actual business growth.
            </p>
            <Link href="/about" className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 transition-transform text-sm font-extrabold tracking-wide shadow-lg">
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. OUR ADVISORY JOURNEY - INTERACTIVE TIMELINE */}
      <section className="py-24 bg-slate-50 dark:bg-[#120412]/50 border-t border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="mb-16">
              <span className="text-xs font-bold bg-[#9e8055]/10 text-[#9e8055] px-3.5 py-1.5 rounded-full border border-[#9e8055]/20 uppercase tracking-widest">
                Journey Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#210821] dark:text-white mt-4 mb-4">
                Our Advisory Journey
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed font-normal">
                We execute an agile, 4-step compliance and strategic growth blueprint tailored directly to your operational scale.
              </p>
           </div>

            {/* Interactive Timeline Bar */}
            <div className="relative mb-16 max-w-4xl mx-auto px-0">
               {/* Background Gold-tinted Line */}
               <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-[#9e8055]/30 dark:bg-[#9e8055]/20 -translate-y-1/2" />
               
               {/* Dynamic Filling Gold Line */}
               <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] -translate-y-1/2 overflow-hidden">
                 <motion.div 
                    className="h-full bg-[#9e8055] origin-left"
                    animate={{ width: `${(activeStep / 3) * 100}%` }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                 />
               </div>

               <div className="grid grid-cols-4 relative z-10">
                 {[
                   { num: "01", title: "ASSESSMENT", icon: FileCheck, detailTitle: "Deep Diagnostic Assessment", desc: "We perform a comprehensive audit of your financial records, historical filing patterns, and corporate entities. This allows us to identify structural exposure risks, missed tax credits, and optimization opportunities." },
                   { num: "02", title: "STRATEGY", icon: Calculator, detailTitle: "Bespoke Financial Strategy", desc: "We design legal tax mitigation plans, asset-protection frameworks, and direct/indirect tax strategies. We customize corporate structuring models to minimize future tax liabilities and secure investment compliance." },
                   { num: "03", title: "EXECUTION", icon: Building, detailTitle: "Seamless Implementation", desc: "Our team takes over the paperwork. We set up accounting integrations, file required GST/IT registrations, draft family trust deeds, and establish reliable workflows to operationalize your new structures." },
                   { num: "04", title: "COMPLIANCE", icon: ShieldAlert, detailTitle: "Active Audits & Advisory", desc: "We provide ongoing audit-preparedness, statutory filings, regular GST reconciliation checks, and direct notice representation before regulatory benches to keep your business fully audit-proof." }
                 ].map((step, i) => {
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
                           className={`h-14 w-14 rounded-[18px] flex items-center justify-center mb-4 transition-all duration-300 relative ${
                             isActive 
                               ? "bg-[#210821] dark:bg-[#321232] border-2 border-[#9e8055] text-white shadow-[0_0_20px_rgba(158,128,85,0.35)] ring-4 ring-[#9e8055]/10" 
                               : "bg-white dark:bg-[#1a0b1a] border-2 border-[#9e8055]/50 hover:border-[#9e8055] text-[#9e8055]"
                           }`}
                         >
                            <Icon className={`h-6 w-6 transition-colors duration-300 ${
                              isActive 
                                ? "text-white" 
                                : "text-[#9e8055]"
                            }`} />
                         </motion.div>
                         <span className={`text-[10px] font-black tracking-wider transition-colors duration-300 ${
                           isActive ? "text-[#9e8055]" : "text-slate-400 dark:text-slate-500"
                         }`}>{step.num}</span>
                         <h3 className={`font-extrabold text-[10px] sm:text-[11px] tracking-widest uppercase transition-colors duration-300 mt-1 ${
                           isActive ? "text-[#210821] dark:text-[#9e8055]" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-650 dark:group-hover:text-slate-350"
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
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#9e8055]/3 rounded-full blur-2xl pointer-events-none" />
                 <h3 className="font-extrabold text-xl text-[#210821] dark:text-white mb-3 tracking-tight">
                   0{activeStep + 1}. {[
                     "Deep Diagnostic Assessment",
                     "Bespoke Financial Strategy",
                     "Seamless Implementation",
                     "Active Audits & Advisory"
                   ][activeStep]}
                 </h3>
                 <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                   {[
                     "We perform a comprehensive audit of your financial records, historical filing patterns, and corporate entities. This allows us to identify structural exposure risks, missed tax credits, and optimization opportunities.",
                     "We design legal tax mitigation plans, asset-protection frameworks, and direct/indirect tax strategies. We customize corporate structuring models to minimize future tax liabilities and secure investment compliance.",
                     "Our team takes over the paperwork. We set up accounting integrations, file required GST/IT registrations, draft family trust deeds, and establish reliable workflows to operationalize your new structures.",
                     "We provide ongoing audit-preparedness, statutory filings, regular GST reconciliation checks, and direct notice representation before regulatory benches to keep your business fully audit-proof."
                   ][activeStep]}
                 </p>
               </motion.div>
             </AnimatePresence>
           </div>
        </div>
      </section>

      {/* 8. INDUSTRIES WE SERVE - Infinite Marquee */}
      <section className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
         <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="text-4xl font-extrabold mb-5">Industries We Serve</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Specialized expertise across diverse industry sectors. We tailor our financial and tax strategies to meet your unique market demands.</p>
         </div>

         {/* Infinite Running Marquee */}
         <div className="flex overflow-hidden relative w-full">
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
               className="flex gap-6 w-max items-center"
            >
               {[
                 {title: "Manufacturing", desc: "Audit, GST compliance, and tax planning optimized for capital-intensive enterprises.", icon: TrendingUp},
                 {title: "IT & Software", desc: "Tax advisory, transfer pricing, and compliance specifically designed for global technology companies.", icon: Calculator},
                 {title: "Real Estate", desc: "Strategic GST on construction, capital gains structuring, and strict RERA compliance advisory.", icon: Building},
                 {title: "Healthcare", desc: "Tailored tax planning and strict compliance frameworks for hospitals, clinics, and healthcare providers.", icon: HeartHandshake},
                 {title: "Retail & E-commerce", desc: "Multi-state GST filing, precise inventory valuation, and highly automated compliance for retail scale.", icon: BookOpen},
                 {title: "Banking & Finance", desc: "Uncompromising regulatory compliance, internal tax audits, and rigorous financial reporting for NBFCs.", icon: ShieldAlert},
                 // Duplicate for infinite loop
                 {title: "Manufacturing", desc: "Audit, GST compliance, and tax planning optimized for capital-intensive enterprises.", icon: TrendingUp},
                 {title: "IT & Software", desc: "Tax advisory, transfer pricing, and compliance specifically designed for global technology companies.", icon: Calculator},
                 {title: "Real Estate", desc: "Strategic GST on construction, capital gains structuring, and strict RERA compliance advisory.", icon: Building},
                 {title: "Healthcare", desc: "Tailored tax planning and strict compliance frameworks for hospitals, clinics, and healthcare providers.", icon: HeartHandshake},
                 {title: "Retail & E-commerce", desc: "Multi-state GST filing, precise inventory valuation, and highly automated compliance for retail scale.", icon: BookOpen},
                 {title: "Banking & Finance", desc: "Uncompromising regulatory compliance, internal tax audits, and rigorous financial reporting for NBFCs.", icon: ShieldAlert},
               ].map((ind, i) => (
                 <div 
                    key={i} 
                    className="w-[350px] shrink-0 p-8 rounded-[2rem] text-left border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800/80 transition-colors shadow-lg"
                 >
                    <div className="h-16 w-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                      <ind.icon className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                    </div>
                    <h3 className="font-extrabold text-xl mb-3">{ind.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{ind.desc}</p>
                 </div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 9. STAY AHEAD OF DEADLINES - Auto Scrolling Ticker */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-5">Stay Ahead of Deadlines</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">We track the ever-changing regulatory landscape so you don't have to. Actionable intelligence delivered live.</p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column: Vertical Ticker */}
              <div>
                 <h3 className="text-2xl font-extrabold flex items-center gap-3 mb-8">
                   <FileSpreadsheet className="h-6 w-6 text-amber-600 dark:text-amber-500" /> Live Tax & GST News
                 </h3>
                 <div className="relative h-[480px] overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner p-2">
                    {/* Fade Edges Vertical */}
                    <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white dark:from-slate-950 to-transparent z-10 rounded-t-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10 rounded-b-3xl pointer-events-none"></div>

                    <motion.div 
                       animate={{ y: ["0%", "-50%"] }}
                       transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                       className="flex flex-col gap-4 py-6"
                    >
                       {[
                         {date: "09 JUN", type: "GST", title: "GST Council Proposes Restructuring of Tax Slabs", desc: "The GST Council has initiated discussions to rationalise tax slabs, potentially..."},
                         {date: "08 JUN", type: "Income Tax", title: "CBDT Issues Clarification on Capital Gains Taxation", desc: "New circular resolves ambiguities regarding indexation benefits for properties..."},
                         {date: "07 JUN", type: "Compliance", title: "New E-invoicing Deadlines Announced for Small Businesses", desc: "Taxpayers with turnover exceeding ₹2 Crores must adopt compulsory e-invoicing..."},
                         {date: "05 JUN", type: "MCA", title: "MCA Extends Due Date for Filing Annual Returns", desc: "A grace period of 30 days is announced for corporate filings due to portal upgrades..."},
                         // Duplicate for infinite scroll
                         {date: "09 JUN", type: "GST", title: "GST Council Proposes Restructuring of Tax Slabs", desc: "The GST Council has initiated discussions to rationalise tax slabs, potentially..."},
                         {date: "08 JUN", type: "Income Tax", title: "CBDT Issues Clarification on Capital Gains Taxation", desc: "New circular resolves ambiguities regarding indexation benefits for properties..."},
                         {date: "07 JUN", type: "Compliance", title: "New E-invoicing Deadlines Announced for Small Businesses", desc: "Taxpayers with turnover exceeding ₹2 Crores must adopt compulsory e-invoicing..."},
                         {date: "05 JUN", type: "MCA", title: "MCA Extends Due Date for Filing Annual Returns", desc: "A grace period of 30 days is announced for corporate filings due to portal upgrades..."},
                       ].map((news, i) => (
                         <div key={i} className="flex gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors mx-4 shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="bg-blue-600 text-white rounded-xl h-16 w-16 flex flex-col items-center justify-center shrink-0 shadow-md">
                               <span className="font-extrabold text-xl leading-none">{news.date.split(' ')[0]}</span>
                               <span className="text-[10px] uppercase font-bold mt-0.5 tracking-wider">{news.date.split(' ')[1]}</span>
                            </div>
                            <div className="flex-1">
                               <span className="text-[10px] font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest block mb-1.5">{news.type}</span>
                               <h4 className="font-bold text-base mb-1.5 leading-snug">{news.title}</h4>
                               <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">{news.desc}</p>
                            </div>
                         </div>
                       ))}
                    </motion.div>
                 </div>
              </div>

              {/* Right Column: Static Articles */}
              <div>
                 <h3 className="text-2xl font-extrabold flex items-center gap-3 mb-8">
                   <BookOpen className="h-6 w-6 text-amber-500" /> Expert Articles & Insights
                 </h3>
                 <div className="space-y-4">
                    {[
                      {date: "09 JUN", type: "Income Tax", title: "Strategic Tax Planning Under the New Regime: Is It Really Better?", desc: "A deep dive comparing tax liability under old and new regimes using realistic sala..."},
                      {date: "08 JUN", type: "GST", title: "Demystifying GST Input Tax Credit (ITC) Rules under Section 16(4)", desc: "Understand the strict statutory limits and time horizons for claiming input tax..."},
                      {date: "06 JUN", type: "Company Law", title: "A Startup Guide to Selecting the Right Corporate Entity Structure", desc: "Should you incorporate a Private Limited Company, register an LLP, or stick to a..."},
                      {date: "04 JUN", type: "Audit", title: "Avoiding Common Audit Pitfalls: A Checklist for Small Businesses", desc: "Prepare your financial statements correctly and avoid red flags before statutory..."},
                    ].map((article, i) => (
                      <div key={i} className="flex gap-5 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors shadow-sm cursor-pointer group">
                         <div className="text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 rounded-xl h-16 w-16 flex flex-col items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors">
                            <span className="font-extrabold text-xl leading-none">{article.date.split(' ')[0]}</span>
                            <span className="text-[10px] uppercase font-bold mt-0.5 tracking-wider">{article.date.split(' ')[1]}</span>
                         </div>
                         <div className="flex-1">
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest block mb-1.5">{article.type}</span>
                            <h4 className="font-bold text-base mb-1.5 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{article.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">{article.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. QUICK CONSULTATION BOOKING WIDGET */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-premium p-8 sm:p-12 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Ready to Secure Your Financial Health?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            Schedule a free 15-minute diagnostic call with our senior tax specialists. Let's map your goals together.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold shadow-lg shadow-amber-600/15 transition"
          >
            Schedule Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
