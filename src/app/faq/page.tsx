"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is ConsultAvenuee?",
      answer: "ConsultAvenuee is a professional advisory and compliance firm providing services in business registration, taxation, regulatory compliance, housing society management, NRI services, and senior citizen advisory."
    },
    {
      question: "Who can benefit from ConsultAvenuee's services?",
      answer: "Our services are designed for startups, businesses, MSMEs, cooperative housing societies, NRIs, senior citizens, NGOs, trusts, and individual taxpayers."
    },
    {
      question: "What business registration services do you provide?",
      answer: "We assist with Private Limited Company Registration, LLP Registration, Partnership Firm Registration, Trust Registration, Startup Registration, MSME Registration, and other statutory registrations."
    },
    {
      question: "Do you provide GST and Income Tax services?",
      answer: "Yes. We offer GST registration, GST return filing, income tax return filing, tax audits, tax planning, TDS compliance, and tax advisory services."
    },
    {
      question: "Can you help with regulatory registrations and licenses?",
      answer: "Yes. We assist with MSME/Udyam Registration, Professional Tax Registration, Shop & Establishment Registration, FSSAI Registration, IEC Registration, Trademark Registration, PF, ESIC, and other regulatory approvals."
    },
    {
      question: "What housing society services do you offer?",
      answer: "We provide housing society registration, builder handover support, elections, AGM compliance, statutory audits, taxation, documentation, governance, and redevelopment advisory services."
    },
    {
      question: "Do you provide Virtual CFO (vCFO) services?",
      answer: "Yes. Our Virtual CFO services help businesses with financial planning, budgeting, cash flow management, MIS reporting, profitability analysis, fundraising support, and strategic financial decision-making."
    },
    {
      question: "How do your NRI services help clients living abroad?",
      answer: "We assist NRIs with taxation, property management, legal documentation, Power of Attorney, compliance matters, property transactions, and investment-related advisory services in India."
    },
    {
      question: "What services do you provide for senior citizens?",
      answer: "Our senior citizen services include income tax planning, pension and gratuity assistance, property sale and transfer support, legal documentation, estate planning, and health insurance claim assistance."
    },
    {
      question: "Can services be provided remotely?",
      answer: "Yes. Most of our services can be delivered remotely through secure digital communication, online consultations, and electronic document management."
    },
    {
      question: "Do you assist with tax notices and litigation matters?",
      answer: "Yes. We provide support for tax notices, assessments, appeals, litigation documentation, paper book preparation, and coordination with senior tax counsels."
    },
    {
      question: "Why choose ConsultAvenuee?",
      answer: "We offer comprehensive advisory, compliance, taxation, governance, and documentation services under one roof, providing clients with professional expertise, personalized attention, and reliable support."
    },
    {
      question: "How can I get started?",
      answer: "Simply contact our team through our website, phone, or email. We will understand your requirements and guide you through the appropriate solution."
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
          ❓ FAQ Center
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Quickly search common questions regarding ConsultAvenuee's comprehensive advisory, compliance, and taxation services.
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
                    <span className="text-amber-500 font-extrabold shrink-0 min-w-[1.5rem]">{idx + 1}.</span>
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
