"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Shield, Sparkles, Scale, Percent, Landmark, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { t } = useApp();
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Statutory & Internal Audits",
      icon: Shield,
      description: "Rigorous compliance checks and financial validations ensuring transparency for banks, stakeholders, and tax authorities.",
      realLifeChallenge: "A mid-sized manufacturing firm was denied a working capital loan of ₹5 Crore due to unsystematic inventory valuation and un-audited historical cash flows.",
      solution: "We deployed a dedicated audit task force, standardized their valuation processes, issued a clean audit report, and secured bank compliance clearance in 14 days.",
      deliverables: ["Statutory Audits", "Tax Audits (Section 44AB)", "Internal & System Controls review", "Stock & Receivable audits"]
    },
    {
      title: "Direct & Indirect Tax Representation",
      icon: Percent,
      description: "Representing you before appellate tribunals and commissioners to resolve discrepancies and minimize penalties.",
      realLifeChallenge: "An independent exporter received an online notice claiming ₹22 Lakhs in outstanding taxes due to mismatched Form 26AS records.",
      solution: "We reconciled TDS data from five corporate clients, submitted structural digital evidence online, and got the tax demand completely dropped.",
      deliverables: ["Income Tax Filing", "TDS and TCS compliance", "Assessments & Appeals representation", "GST litigation support"]
    },
    {
      title: "Startup Advisory & Funding Compliances",
      icon: Sparkles,
      description: "From company incorporation to structural shareholder agreements, ESOP design, and valuation reports.",
      realLifeChallenge: "An early-stage AI startup was about to lose its seed investment because they lacked a validated valuation certificate under Section 56(2)(viib).",
      solution: "Our certified valuation officers generated a discounted cash flow valuation model, filed the necessary forms, and enabled funding in 48 hours.",
      deliverables: ["Company & LLP registration", "Section 80-IAC Tax Exemption", "Share Valuation Reports", "Capital Structure planning"]
    },
    {
      title: "GST Compliance & ITC Recovery",
      icon: Scale,
      description: "Automated reconciliation utility to identify defaulting suppliers and maximize Input Tax Credit (ITC).",
      realLifeChallenge: "A logistics company faced a severe cash flow crunch because ₹18 Lakhs of their GST input tax credit was blocked by defaulting vendors who failed to file GSTR-1.",
      solution: "We installed an automated reconciliation tracker, followed up with vendor accounts, and unlocked ₹16.5 Lakhs in credit within one filing cycle.",
      deliverables: ["GSTR-1 & 3B Filings", "Reconciliation with GSTR-2B", "GST Refund applications", "Department audit assistance"]
    },
    {
      title: "Estate, Legacy & Trust Planning",
      icon: Landmark,
      description: "Structuring Private Family Trusts and succession frameworks to shield assets and minimize future inheritance conflicts.",
      realLifeChallenge: "A second-generation business owner wanted to hand over operations to his children without triggering heavy gift taxes or causing sibling disputes.",
      solution: "We created a private trust holding corporate equity, setting up smooth transfer mechanisms that completely bypassed personal capital gains tax.",
      deliverables: ["Family Trust creation", "Will drafting & probate support", "Asset Protection advisory", "Gift Deed optimizations"]
    }
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3.5 py-1.5 rounded-full border border-indigo-500/20 uppercase tracking-widest">
          💼 Professional Services
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Deep Financial & Regulatory Expertise
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          We combine technical rigor with practical problem-solving to help businesses navigate complexities at every stage.
        </p>
      </div>

      {/* Grid selector layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Service Selector Links */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = selectedService === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedService(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  isSelected
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/15 translate-x-1"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-850"
                }`}
              >
                <Icon className={`h-6 w-6 shrink-0 ${isSelected ? "text-white" : "text-indigo-500"}`} />
                <span className="font-bold text-sm sm:text-base">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column: In-depth Service Details */}
        <div className="lg:col-span-8 flex">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full glass-premium p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest block mb-1">
                Active Category Detail
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                {services[selectedService].title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {services[selectedService].description}
              </p>

              {/* Real-life Case Highlight */}
              <div className="p-5 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 mb-6">
                <span className="text-[10px] font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider block mb-1.5">
                  ⚠️ Real-Life Client Challenge
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold italic">
                  "{services[selectedService].realLifeChallenge}"
                </p>
                <div className="mt-3.5 pt-3.5 border-t border-rose-500/10 text-xs sm:text-sm text-slate-700 dark:text-slate-250 leading-relaxed">
                  <strong className="text-emerald-500 dark:text-emerald-400 font-bold block mb-1">
                    ✓ How We Solved It:
                  </strong>
                  {services[selectedService].solution}
                </div>
              </div>
            </div>

            {/* Scope Deliverables */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3.5">
                Key Scope Offerings
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services[selectedService].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold">
                    <div className="h-4.5 w-4.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
