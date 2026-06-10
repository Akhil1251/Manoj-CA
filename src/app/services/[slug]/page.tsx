"use client";

import React, { useState, useEffect } from "react";
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
  ChevronDown,
  Check,
  X,
  FileCheck,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles,
  BarChart3,
  ListTodo
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

  // Document checklist checking state
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  // Expanded directory nodes
  const [openCategory, setOpenCategory] = useState<string | null>(parentCategoryId);
  const [openSub, setOpenSub] = useState<string | null>(parentSubId);

  // Reset checklist state when service changes
  useEffect(() => {
    setCheckedDocs({});
    setActiveStep(0);
  }, [slug]);

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
  const checklist = foundService.checklist || [];
  const checkedCount = Object.values(checkedDocs).filter(Boolean).length;
  const readinessPercentage = checklist.length > 0 ? Math.round((checkedCount / checklist.length) * 100) : 0;

  const toggleCheck = (idx: number) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // ----------------------------------------------------
  // SUB-COMPONENTS FOR FLEXIBLE SECTION LAYOUTS
  // ----------------------------------------------------

  const renderHeroHeader = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-72 sm:h-[400px] rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/50 shadow-2xl group"
    >
      <img
        src={foundService!.image}
        alt={foundService!.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120412] via-slate-950/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120412]/90 via-[#120412]/30 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 space-y-3 sm:space-y-4">
        <span className="text-xs font-black uppercase text-[#c79d62] tracking-widest bg-[#c79d62]/10 backdrop-blur-md px-3.5 py-1.5 rounded-full self-start border border-[#c79d62]/30">
          {parentCategoryTitle}
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight max-w-2xl drop-shadow-md">
          {foundService!.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-semibold max-w-xl drop-shadow-sm">
          {foundService!.shortDesc}
        </p>
      </div>
    </motion.div>
  );

  const renderComparisonMatrix = (accentColor: string) => (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="text-left">
        <h3 className="text-xl font-extrabold text-[#210821] dark:text-white tracking-tight">
          Comparison Analysis & Compliance Risk Matrix
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Understanding the operational trade-offs of self-management versus our certified advisory service:
        </p>
      </div>

      <div className="overflow-hidden border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-md bg-white dark:bg-[#180618]">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800/60 text-[11px] font-black uppercase text-slate-500 dark:text-slate-400">
              <th className="py-4 px-5">Performance Aspect</th>
              <th className="py-4 px-5 text-red-500 bg-red-50/10 dark:bg-red-950/5">Alternative / Manual</th>
              <th className="py-4 px-5 style={{ color: accentColor }} bg-amber-500/5">ConsultAvenuee Managed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-bold">
            {foundService!.comparison.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/10 transition-colors">
                <td className="py-4 px-5 text-[#210821] dark:text-white font-extrabold">{row.aspect}</td>
                <td className="py-4 px-5 text-slate-500 dark:text-slate-400 bg-red-50/5 dark:bg-red-950/2">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.manual}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-slate-700 dark:text-slate-250 bg-amber-500/2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{row.consultAvenuee}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const renderVisualDataChart = (isRadial: boolean) => (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-[#180618] border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm text-left"
    >
      <div className="space-y-4">
        <span className="text-[10px] font-black uppercase text-[#c79d62] tracking-widest flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5" /> Service Analytics
        </span>
        <h3 className="text-xl font-extrabold text-[#210821] dark:text-white tracking-tight">
          Execution Workload Breakdown
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
          This data model provides a breakdown of resource allocation across phases, highlighting where strategic focus reduces delays.
        </p>
        <div className="pt-2 space-y-2">
          {foundService!.chartData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs font-semibold border-b border-slate-100 dark:border-slate-900 pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-600 dark:text-slate-350">{item.label}</span>
              </div>
              <span className="font-extrabold" style={{ color: item.color }}>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center relative">
        {isRadial ? (
          <>
            {/* Radial Donut Visualization */}
            <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 100 100">
              {(() => {
                let accumulatedPercent = 0;
                return foundService!.chartData.map((item, idx) => {
                  const strokeDash = `${item.value} ${100 - item.value}`;
                  const strokeOffset = 100 - accumulatedPercent + 25;
                  accumulatedPercent += item.value;
                  return (
                    <circle
                      key={idx}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke={item.color || "#c79d62"}
                      strokeWidth="10"
                      strokeDasharray={strokeDash}
                      strokeDashoffset={strokeOffset}
                      className="transition-all duration-700 ease-out hover:stroke-[11px] cursor-pointer"
                    />
                  );
                });
              })()}
              <circle cx="50" cy="50" r="30" fill="transparent" className="fill-white dark:fill-[#180618]" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-base font-black text-[#210821] dark:text-white">Active</span>
              <span className="text-[7px] font-black uppercase text-slate-400 tracking-widest mt-0.5">Assistance</span>
            </div>
          </>
        ) : (
          /* Stacked Progression Bars Visualization */
          <div className="w-full space-y-4">
            {foundService!.chartData.map((item, idx) => (
              <div key={idx} className="space-y-1 text-left">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500">{item.label}</span>
                  <span className="text-slate-400">{item.value}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color || "#c79d62" }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderTimelineRoadmap = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-left">
        <h3 className="text-xl font-extrabold text-[#210821] dark:text-white tracking-tight">
          Execution Pathway & Milestone Roadmaps
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Our service execution follows these 4 distinct milestones to ensure speed and accuracy:
        </p>
      </div>

      <div className="relative mb-12 max-w-4xl mx-auto px-0">
         <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-[#c79d62]/30 dark:bg-[#c79d62]/20 -translate-y-1/2" />
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
                   <motion.div 
                     animate={{ scale: isActive ? 1.08 : 1.0 }}
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
                     isActive ? "text-[#210821] dark:text-[#c79d62]" : "text-slate-400 dark:text-slate-500 group-hover:text-[#c79d62]"
                   }`}>{step.title}</h3>
                </button>
             );
           })}
         </div>
      </div>

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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <h3 className="font-extrabold text-xl text-[#210821] dark:text-white mb-3 tracking-tight">
                  0{activeStep + 1}. {steps[activeStep].detailTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                  {steps[activeStep].desc}
                </p>
              </div>
              <div className="md:col-span-4 rounded-xl overflow-hidden h-24 sm:h-28 border border-slate-200/50 dark:border-slate-800">
                <img 
                  src={
                    activeStep === 0 ? "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" :
                    activeStep === 1 ? "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80" :
                    activeStep === 2 ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" :
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
                  }
                  alt="Stage Illustration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );

  const renderDocumentChecklist = () => (
    checklist.length > 0 && (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#180618] border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5 text-left">
          <div>
            <h3 className="text-lg font-black text-[#210821] dark:text-white tracking-tight flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#c79d62]" />
              Prerequisites & Document Checklist
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select the documents you have on hand to verify your compliance readiness level:
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 rounded-2xl border border-slate-200/50 dark:border-slate-800">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.91" fill="transparent" stroke="rgba(199, 157, 98, 0.15)" strokeWidth="2.5" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.91"
                  fill="transparent"
                  stroke="#c79d62"
                  strokeWidth="2.5"
                  strokeDasharray={`${readinessPercentage} ${100 - readinessPercentage}`}
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <span className="absolute text-[10px] font-black text-[#c79d62]">{readinessPercentage}%</span>
            </div>
            <div className="text-left leading-none">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Readiness</span>
              <span className="text-xs font-black text-[#210821] dark:text-white mt-0.5 block">
                {readinessPercentage === 100 ? "Ready to File!" : `${checkedCount} of ${checklist.length} Checked`}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {checklist.map((doc, idx) => {
            const isChecked = !!checkedDocs[idx];
            return (
              <button
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`flex items-center gap-3.5 p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                  isChecked
                    ? "bg-[#c79d62]/5 border-[#c79d62] text-[#c79d62] shadow-[0_4px_20px_rgba(199,157,98,0.05)]"
                    : "bg-slate-50/50 dark:bg-slate-900/20 border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900/40"
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                  isChecked ? "bg-[#c79d62] border-[#c79d62] text-white" : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950"
                }`}>
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-xs font-semibold leading-snug">{doc}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    )
  );

  // ----------------------------------------------------
  // RENDER DYNAMIC LAYOUT CATEGORIES
  // ----------------------------------------------------

  const renderCategoryLayout = () => {
    switch (parentCategoryId) {
      // 1. Housing Society Management -> Layout Type A
      case "society-management":
        return (
          <>
            {renderHeroHeader()}
            {renderComparisonMatrix("#c79d62")}
            {renderTimelineRoadmap()}
            {renderVisualDataChart(true)}
            {renderDocumentChecklist()}
          </>
        );

      // 2. Business Compliance -> Layout Type B (Swapped orders, Radial chart off)
      case "compliance-business-advisory":
        return (
          <>
            {renderHeroHeader()}
            {renderVisualDataChart(false)}
            {renderComparisonMatrix("#110311")}
            {renderDocumentChecklist()}
            {renderTimelineRoadmap()}
          </>
        );

      // 3. Taxation & Regulatory -> Layout Type C (Chart first, Table last)
      case "taxation-regulatory-litigation":
        return (
          <>
            {renderHeroHeader()}
            {renderTimelineRoadmap()}
            {renderDocumentChecklist()}
            {renderVisualDataChart(true)}
            {renderComparisonMatrix("#c79d62")}
          </>
        );

      // 4. NRI & Senior Citizen -> Layout Type D (Timeline last, simplified radial metrics)
      case "nri-services":
      case "senior-citizen-advisory":
      default:
        return (
          <>
            {renderHeroHeader()}
            {renderComparisonMatrix("#c79d62")}
            {renderDocumentChecklist()}
            {renderVisualDataChart(false)}
            {renderTimelineRoadmap()}
          </>
        );
    }
  };

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#120412] min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* LEFT COLUMN - SERVICE CONTENT */}
          <div className="lg:col-span-9 space-y-12">
            {renderCategoryLayout()}
          </div>

          {/* RIGHT COLUMN - SIDEBAR WIDGETS (STICKY) */}
          <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-28">
            
            {/* Interactive Services Directory Tree with fixed inner scroll box */}
            <div className="bg-white dark:bg-[#180618] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#210821] dark:text-[#c79d62] border-b border-slate-100 dark:border-slate-800/50 pb-2">
                Services Directory
              </h4>
              
              {/* Box list height limit and scroll up effect within the box */}
              <div className="max-h-[350px] overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-transparent">
                {servicesData.map((tab) => {
                  const isCatOpen = openCategory === tab.id;
                  return (
                    <div key={tab.id} className="space-y-1.5">
                      <button
                        onClick={() => setOpenCategory(isCatOpen ? null : tab.id)}
                        className={`w-full flex items-center justify-between text-[11px] font-black uppercase tracking-wider py-1.5 transition-colors text-left focus:outline-none cursor-pointer ${
                          isCatOpen ? "text-[#c79d62]" : "text-slate-700 dark:text-slate-355 hover:text-[#c79d62]"
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
                                  className={`w-full flex items-center justify-between text-[10px] font-extrabold py-1 transition-colors text-left focus:outline-none cursor-pointer ${
                                    isSubOpen ? "text-[#c79d62]" : "text-slate-650 dark:text-slate-400 hover:text-[#c79d62]"
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
                                          className={`block text-[9px] font-bold py-1 transition-colors text-left ${
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
