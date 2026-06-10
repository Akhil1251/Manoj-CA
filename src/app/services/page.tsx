"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ChevronDown,
  ChevronRight,
  Download,
  PhoneCall,
  Sparkles
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null);

  const currentTabData = servicesData.find((tab) => tab.id === activeTab) || servicesData[0];

  const handleSubServiceClick = (subServiceId: string) => {
    if (expandedSubService === subServiceId) {
      setExpandedSubService(null);
    } else {
      setExpandedSubService(subServiceId);
    }
  };

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#120412] min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Horizontal Navigation Tab Bar (Size matched to main nav header) */}
        <div className="w-full bg-[#c79d62] rounded-md overflow-hidden flex h-16 mb-6 shadow-md">
          {servicesData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedSubService(null);
                }}
                className={`px-8 h-full flex items-center justify-center text-sm font-extrabold tracking-wider transition-all duration-300 ${isActive
                  ? "bg-[#110311] text-white shadow-inner"
                  : "text-white/85 hover:text-white hover:bg-black/10"
                  }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT COLUMN - SUB SERVICES GRID */}
          <div className="lg:col-span-9 space-y-8 text-left">
            <h2 className="text-2xl font-black text-[#210821] dark:text-white tracking-tight capitalize mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
              {currentTabData.title} offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentTabData.subServices.map((subService) => {
                const isExpanded = expandedSubService === subService.id;
                return (
                  <div
                    key={subService.id}
                    onMouseLeave={() => setExpandedSubService(null)}
                    onClick={() => handleSubServiceClick(subService.id)}
                    className="relative p-6 rounded-2xl bg-white dark:bg-[#180618] border border-slate-100 dark:border-slate-800/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Badge and Title */}
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          {subService.badge && (
                            <span className="bg-[#c79d62] text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                              {subService.badge}
                            </span>
                          )}
                          <h3
                            onMouseEnter={(e) => {
                              e.stopPropagation();
                              setExpandedSubService(subService.id);
                            }}
                            className="font-extrabold text-lg text-[#210821] dark:text-white leading-tight hover:text-[#c79d62] transition-colors"
                          >
                            {subService.title}
                          </h3>
                        </div>
                        {/* Price with Dotted Line Effect */}
                        {subService.price && (
                          <div className="flex items-center gap-2 flex-grow justify-end">
                            <span className="hidden sm:inline border-b border-dotted border-slate-200 dark:border-slate-700 flex-grow max-w-[50px]"></span>
                            <span className="text-[#c79d62] font-black text-sm shrink-0">
                              {subService.price}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal mb-5">
                        {subService.description}
                      </p>
                    </div>

                    {/* Expand/Collapse Button for dropdown list */}
                    <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-auto">
                      <button
                        onClick={() => handleSubServiceClick(subService.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-[#c79d62] hover:text-[#7f6642] transition-colors focus:outline-none"
                      >
                        <span>View Registered Programs ({subService.subSubServices.length})</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                          }`} />
                      </button>

                      {/* Dropdown Lists representing sub-sub-services (Positioned absolutely as overlay) */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 left-0 right-0 top-[95%] bg-white dark:bg-[#1f091f] border border-slate-200 dark:border-slate-800 shadow-2xl rounded-xl overflow-hidden text-left"
                          >
                            <div className="py-2.5 px-3.5 space-y-1.5">
                              {subService.subSubServices.map((subSub) => (
                                <Link
                                  key={subSub.slug}
                                  href={`/services/${subSub.slug}`}
                                  className="group/item flex items-center justify-between py-2 px-2.5 text-xs text-slate-600 dark:text-white hover:text-[#c79d62] dark:hover:text-[#c79d62] hover:bg-slate-50 dark:hover:bg-[#120412] rounded-lg transition-all"
                                >
                                  <span className="font-semibold transition-colors group-hover/item:translate-x-0.5">
                                    {subSub.title}
                                  </span>
                                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-all text-[#c79d62]" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN - SIDEBAR WIDGETS */}
          <div className="lg:col-span-3 space-y-8">

            {/* Company Presentation Box */}
            <a
              href="#"
              className="group flex items-center justify-between bg-[#110311] hover:bg-[#1c061c] text-white p-5 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#c79d62] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider opacity-60">Company</div>
                  <div className="text-xs font-black uppercase tracking-widest">Presentation</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-[#c79d62] opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* How Can We Help You Box */}
            <div className="bg-[#c79d62] text-white p-7 rounded-md relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h4 className="text-base font-bold lowercase tracking-tight mb-2">how can we help you?</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-6 text-left">
                Contact us at the Consulting WP office nearest to you or submit a business inquiry online.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#110311] hover:bg-slate-100 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm w-full"
              >
                <PhoneCall className="w-3 h-3 text-[#c79d62]" />
                Contacts
              </Link>
            </div>

            {/* Testimonial Quote Bubble */}
            <div className="space-y-4">
              <div className="relative bg-white dark:bg-[#180618] border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-lg shadow-sm">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic pr-4 text-left">
                  "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
                </p>
                <div className="absolute right-4 bottom-3 text-amber-600/10 dark:text-amber-500/5 font-serif text-6xl select-none leading-none pointer-events-none">
                  “
                </div>
              </div>
              <div className="flex items-center gap-3.5 px-1">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border border-slate-300/50">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Amanda Seyfried"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">Amanda Seyfried</h5>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                    Sales & Marketing, Allen Ltd.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
