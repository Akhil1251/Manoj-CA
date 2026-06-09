"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
  category: "tax" | "gst" | "corp";
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: "tax",
      question: "What is the basic difference between the Old and New Income Tax Regimes?",
      answer: "The Old Regime allows you to claim multiple deductions under Section 80C (PPF, LIC, etc.), Section 80D (health insurance), and Section 24 (home loan interest), but has higher tax rates. The New Regime offers lower tax slabs but eliminates almost all deductions. Our Tools page includes a calculator to simulate which scheme is best for you."
    },
    {
      category: "gst",
      question: "What is GSTR-2B reconciliation and why is it important?",
      answer: "GSTR-2B is an auto-drafted, static input tax credit (ITC) statement generated for every registered taxpayer. Monthly reconciliation ensures that the ITC you claim in your GSTR-3B matches the sales invoices actually uploaded by your vendors. Mismatches can lead to legal notices and fines."
    },
    {
      category: "corp",
      question: "What are the requirements for setting up a Private Limited Company?",
      answer: "You need at least 2 directors (one must be an Indian resident), a registered office address in India, and basic identity/address proofs. There is no minimum capital requirement to incorporate a company under current MCA laws."
    },
    {
      category: "tax",
      question: "Are NRI property sales subject to TDS, and how can it be reduced?",
      answer: "Yes, property sales by NRIs are subject to a mandatory 20% TDS on the gross sales value under Section 195. However, the NRI can apply to the Income Tax department for a 'Certificate for Lower/Nil Deductions' (Form 13) to calculate TDS only on the actual capital gains rather than the total price."
    },
    {
      category: "gst",
      question: "What is the threshold limit for mandatory GST registration?",
      answer: "For service providers, GST registration is mandatory if annual turnover crosses â‚¹20 Lakhs (â‚¹10 Lakhs for special hill states). For goods suppliers, the threshold limit is â‚¹40 Lakhs."
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const term = searchTerm.toLowerCase();
    return (
      faq.question.toLowerCase().includes(term) ||
      faq.answer.toLowerCase().includes(term)
    );
  });

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          â“ FAQ Center
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Frequently Answered Queries
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Quickly search common questions regarding Indian taxation, GST registrations, and corporate setup rules.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search questions or answers..."
          className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
        />
        <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
      </div>

      {/* FAQs List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass rounded-2xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-slate-100 dark:border-slate-800/60"
                    >
                      <div className="p-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-slate-400">
            No FAQs match your search terms.
          </div>
        )}
      </div>
    </div>
  );
}
