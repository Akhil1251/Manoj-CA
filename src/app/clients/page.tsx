"use client";

import React, { useState } from "react";
import { User, Quote, CheckCircle, TrendingUp, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const clientSegments = [
    {
      segment: "Independent Freelancers / Creators",
      risk: "TDS deductions in foreign currency, confusing export GST rules, missed presumptive tax schemes.",
      solution: "LUT creation for exports, income optimization under Section 44ADA (saving 35-50% in tax liabilities)."
    },
    {
      segment: "MSMEs & Local Manufacturers",
      risk: "Stuck Input Tax Credit (ITC) from non-compliant suppliers, delayed GST filings leading to fines.",
      solution: "Auto-ITC matching, regular statutory auditing, and formal response drafting for department tax notices."
    },
    {
      segment: "Funded Startups",
      risk: "Valuation rules under Section 56, statutory auditor changes, shareholder agreement filings.",
      solution: "Certified valuation certificates, capitalization table planning, and speed-track MCA filings."
    },
    {
      segment: "NRIs & Real Estate Sellers",
      risk: "Mandatory 20% TDS on property sales, complex repatriation guidelines (Form 15CA/15CB).",
      solution: "Securing Lower TDS certificates from tax officers (reducing rate to 3-5%), tax-shelter capital gains advisory."
    }
  ];

  const caseStudies = [
    {
      company: "Metatech Solutions (Software Export)",
      challenge: "Metatech was hit with a retroactive â‚¹35 Lakhs GST demand on export services due to incorrect filing of their Letter of Undertaking.",
      impact: "We represented them at appellate levels, proved the export status via FIRC (Foreign Inward Remittance Certificate), and got the complete â‚¹35L demand dropped.",
      metrics: "â‚¹35L Saved | 100% Compliance Recovery"
    },
    {
      company: "Apex Warehousing & Logistics",
      challenge: "Apex discovered that â‚¹24 Lakhs of their Input Tax Credit was mismatched because their primary subcontractors were not uploading GSTR-1 bills.",
      impact: "We deployed our digital reconciliation ledger, traced defaulting subcontractors, and recovered â‚¹21.8 Lakhs in blocked credit inside two months.",
      metrics: "â‚¹21.8L Recovered | 90% ITC reconciled"
    }
  ];

  const testimonials = [
    {
      quote: "Manoj CA solved our tax mismatch notice within a week. Their team didn't just give us template advice; they deep-dived into our bank registers and defended our case online with precision.",
      name: "Suresh Pillai",
      title: "Founder, Apex Logistics"
    },
    {
      quote: "As a freelance game developer, export taxation was a nightmare. Manoj CA set up my zero-rated GST registration and helped me save over â‚¹8 Lakhs in tax using presumptive schemes.",
      name: "Rohan Verma",
      title: "Independent Developer"
    }
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          ðŸ¤ Clients & Case Studies
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Trusted Financial Success Stories
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          From independent consultants to mid-sized corporate entities, we help our clients protect assets and maintain compliance.
        </p>
      </div>

      {/* Grid: Client Profiles / Segments */}
      <div className="mb-24">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-8 text-center">
          Who We Help: Core Client Portfolios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientSegments.map((seg, idx) => (
            <div
              key={idx}
              className="glass-premium p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" /> {seg.segment}
                </h3>
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-rose-500 dark:text-rose-450 uppercase tracking-widest block mb-1">
                    Typical Tax Risk
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {seg.risk}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                  Our Intervention
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-bold">
                  {seg.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real Case Studies */}
      <div className="mb-24 border-t border-slate-200/50 dark:border-slate-800/50 pt-20">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-10 text-center">
          In-Depth Case Studies
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="glass p-6 sm:p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40 space-y-4"
            >
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase tracking-widest">
                {cs.metrics}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4">
                {cs.company}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                <strong>The Challenge:</strong> {cs.challenge}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                <strong>The Outcome:</strong> {cs.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="bg-amber-600/5 dark:bg-amber-950/20 rounded-3xl border border-amber-500/10 dark:border-amber-500/20 p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <Quote className="h-10 w-10 text-amber-500 mx-auto mb-6 opacity-60" />
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed italic font-medium mb-6">
          "{testimonials[activeTestimonial].quote}"
        </p>
        <span className="block font-bold text-slate-900 dark:text-white">
          {testimonials[activeTestimonial].name}
        </span>
        <span className="block text-xs text-slate-400 dark:text-slate-500 mt-1">
          {testimonials[activeTestimonial].title}
        </span>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                activeTestimonial === idx ? "bg-amber-600 w-6" : "bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
