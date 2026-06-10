"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { servicesData, SubSubService } from "@/data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  PhoneCall,
  ArrowLeft,
  Briefcase,
  ChevronDown
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  // Search for the sub-sub-service in the database
  let foundService: SubSubService | null = null;
  let parentCategoryTitle = "";
  let parentCategoryId = "";
  let parentSubId = "";

  for (const tab of servicesData) {
    for (const sub of tab.subServices) {
      const match = sub.subSubServices.find((s) => s.slug === slug);
      if (match) {
        foundService = match;
        parentCategoryTitle = tab.title;
        parentCategoryId = tab.id;
        parentSubId = sub.id;
        break;
      }
    }
    if (foundService) break;
  }

  // Active step state for the interactive timeline
  const [activeStep, setActiveStep] = useState(0);

  // Expanded directory nodes
  const [openCategory, setOpenCategory] = useState<string | null>(parentCategoryId);
  const [openSub, setOpenSub] = useState<string | null>(parentSubId);

  if (!foundService) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#120412] p-4 text-center">
        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white mb-2">Service Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md">
          The requested service compliance path does not exist or has been relocated.
        </p>
        <button
          onClick={() => router.push("/services")}
          className="inline-flex h-10 items-center justify-center px-6 rounded-xl bg-[#c79d62] text-white font-bold text-xs uppercase tracking-wider transition-transform hover:-translate-y-0.5"
        >
          Return to Services
        </button>
      </div>
    );
  }

  const steps = foundService.timelineSteps;

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#120412] min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* LEFT COLUMN - SERVICE CONTENT */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* Service Featured Banner Image (At the very top, aligned with sidebar menu) */}
            <div className="relative h-64 sm:h-96 rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-slate-850/50 shadow-md">
              <img
                src={foundService.image}
                alt={foundService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Back to Services navigation link */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#c79d62] hover:text-[#7f6642]">
              <Link href="/services" className="flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
              </Link>
            </div>

            {/* Title Block */}
            <div className="space-y-3">
              <div className="text-[10px] font-black uppercase text-[#c79d62] tracking-widest">
                {parentCategoryTitle}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#210821] dark:text-white tracking-tight leading-tight">
                {foundService.title}
              </h1>
              <div className="w-16 h-[3px] bg-[#c79d62] rounded" />
              <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-semibold">
                {foundService.shortDesc}
              </p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <h3 className="text-xl font-extrabold text-[#210821] dark:text-white">
                Detailed Implementation Scope
              </h3>
              <p>{foundService.longDesc}</p>
            </div>

            <hr className="border-slate-200/50 dark:border-slate-800/80" />

            {/* DYNAMIC COMPLIANCE JOURNEY PROCESS TIMELINE */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-extrabold text-[#210821] dark:text-white tracking-tight">
                  Our Processing Roadmap
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  We execute your compliance using the following structured stages:
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
                   {steps.map((step, i) => {
                     const isActive = activeStep === i;
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
                                 ? "bg-[#210821] dark:bg-[#321232] border-2 border-[#c79d62] text-white shadow-[0_0_20px_rgba(158,128,85,0.35)] ring-4 ring-[#c79d62]/10" 
                                 : "bg-white dark:bg-[#1a0b1a] border-2 border-[#c79d62]/50 hover:border-[#c79d62] text-[#c79d62]"
                             }`}
                           >
                              <Briefcase className={`h-5 w-5 transition-colors duration-300 ${
                                isActive ? "text-white" : "text-[#c79d62]"
                              }`} />
                           </motion.div>
                           <span className={`text-[10px] font-black tracking-wider transition-colors duration-300 ${
                             isActive ? "text-[#c79d62]" : "text-slate-400 dark:text-slate-500"
                           }`}>{step.num}</span>
                           <h3 className={`font-extrabold text-[9px] sm:text-[11px] tracking-widest uppercase transition-colors duration-300 mt-1 max-w-[90px] text-center ${
                             isActive ? "text-[#210821] dark:text-[#c79d62]" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-650"
                           }`}>{step.title}</h3>
                        </button>
                     );
                   })}
                 </div>
              </div>

              {/* Content Details Display Area */}
              <div className="max-w-3xl mx-auto min-h-[140px] px-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="p-8 sm:p-10 rounded-[24px] bg-white dark:bg-[#160716] border border-slate-100 dark:border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] text-left relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#c79d62]/3 rounded-full blur-2xl pointer-events-none" />
                    <h3 className="font-extrabold text-xl text-[#210821] dark:text-white mb-3 tracking-tight">
                      0{activeStep + 1}. {steps[activeStep].detailTitle}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                      {steps[activeStep].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN - SIDEBAR WIDGETS (STICKY) */}
          <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-28">
            
            {/* Interactive Services Directory Tree */}
            <div className="bg-white dark:bg-[#180618] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#210821] dark:text-[#c79d62] border-b border-slate-100 dark:border-slate-800/50 pb-2">
                Services Directory
              </h4>
              <div className="space-y-2.5">
                {servicesData.map((tab) => {
                  const isCatOpen = openCategory === tab.id;
                  return (
                    <div key={tab.id} className="space-y-1.5">
                      <button
                        onClick={() => setOpenCategory(isCatOpen ? null : tab.id)}
                        className={`w-full flex items-center justify-between text-xs font-black uppercase tracking-wider py-1.5 transition-colors text-left focus:outline-none cursor-pointer ${
                          isCatOpen ? "text-[#c79d62]" : "text-slate-700 dark:text-slate-350 hover:text-[#c79d62]"
                        }`}
                      >
                        <span>{tab.title}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {isCatOpen && (
                        <div className="pl-3 border-l border-slate-100 dark:border-slate-800/80 space-y-2 py-1">
                          {tab.subServices.map((sub) => {
                            const isSubOpen = openSub === sub.id;
                            return (
                              <div key={sub.id} className="space-y-1">
                                <button
                                  onClick={() => setOpenSub(isSubOpen ? null : sub.id)}
                                  className={`w-full flex items-center justify-between text-[11px] font-extrabold py-1 transition-colors text-left focus:outline-none cursor-pointer ${
                                    isSubOpen ? "text-[#c79d62]" : "text-slate-600 dark:text-slate-400 hover:text-[#c79d62]"
                                  }`}
                                >
                                  <span>{sub.title}</span>
                                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSubOpen ? "rotate-180" : ""}`} />
                                </button>
                                
                                {isSubOpen && (
                                  <div className="pl-3 border-l border-[#c79d62]/30 space-y-1 py-1">
                                    {sub.subSubServices.map((subSub) => {
                                      const isCurrent = subSub.slug === slug;
                                      return (
                                        <Link
                                          key={subSub.slug}
                                          href={`/services/${subSub.slug}`}
                                          className={`block text-[10px] font-bold py-1 transition-colors text-left ${
                                            isCurrent
                                              ? "text-[#c79d62] font-black"
                                              : "text-slate-500 dark:text-slate-500 hover:text-[#c79d62]"
                                          }`}
                                        >
                                          {subSub.title}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

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
              <p className="text-xs text-white/80 leading-relaxed mb-6">
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

          </div>

        </div>
      </div>
    </div>
  );
}
