"use client";

import React, { useState } from "react";
import { Briefcase, Send, CheckCircle, GraduationCap, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "mgr_tax_audit",
    qualification: "ca",
    coverLetter: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const openings = [
    {
      title: "Manager Taxation and Audit",
      type: "Full Time",
      experience: "Fresher / 1-2 Yrs",
      qualification: "Chartered Accountant (2 Positions)",
      desc: "Have knowledge of Tax Audit, Statutory Audit, Internal Audit, preparation of Financial statement, ITR, TDS and GST fillings and registration. Audits and other statutory compliance assignments. Capable of independently handling assignments and client interactions."
    },
    {
      title: "Manager Compliance",
      type: "Full Time",
      experience: "Fresher / 1-2 Yrs",
      qualification: "Company Secretary (2 Positions)",
      desc: "Have experience of Company incorporation, ROC annual compliance, ROC fillings, statutory compliance under various law, Drafting of Agenda, Minutes & Notice. Capable of independently handling assignments and client interactions."
    },
    {
      title: "Asst Manager Taxation",
      type: "Full Time",
      experience: "1-2 Yrs in relevant field",
      qualification: "CA-Inter / MCOM / BCOM (5 Vacancies)",
      desc: "Have knowledge of Audit, registration and filling of ITR, TDS and GST returns. Capable of independently handling assignments and client interactions."
    },
    {
      title: "Asst Manager Compliance",
      type: "Full Time",
      experience: "1-2 Yrs",
      qualification: "CS (Inter) / LLB (2 Positions)",
      desc: "Have experience of ROC compliances, Company incorporation, Drafting of Agenda, Minutes & Notice. Capable of independently handling assignments and client interactions."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const positionNames: Record<string, string> = {
      mgr_tax_audit: "Manager Taxation and Audit",
      mgr_compliance: "Manager Compliance",
      asst_mgr_tax: "Asst Manager Taxation",
      asst_mgr_compliance: "Asst Manager Compliance"
    };
    
    const qualificationNames: Record<string, string> = {
      ca: "Chartered Accountant (CA)",
      cs: "Company Secretary (CS)",
      ca_inter: "CA Inter (Semi-Qualified)",
      cs_inter: "CS Inter",
      llb: "LLB",
      mcom: "M.Com",
      bcom: "B.Com"
    };

    const text = `*New Job Application*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Position:* ${positionNames[formData.position] || formData.position}
*Qualification:* ${qualificationNames[formData.qualification] || formData.qualification}
*Cover Note:* ${formData.coverLetter}`;

    const whatsappUrl = `https://wa.me/919076111021?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          💼 Join Our Team
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Build Your Financial Advisory Career
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Work alongside veteran Chartered Accountants. Gain rigorous exposure to complex cases and state-of-the-art compliance automation tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Job listings */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">
            Active Professional Openings
          </h2>
          {openings.map((job, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-slate-800 dark:border-slate-700 space-y-4 shadow-sm transition-transform hover:-translate-y-1"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {job.title}
              </h3>
              <div className="flex flex-col gap-y-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Clock className="h-4 w-4" /> {job.type}
                </span>
                <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <GraduationCap className="h-4 w-4" /> {job.qualification}
                </span>
                <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <Briefcase className="h-4 w-4" /> {job.experience}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-2 border-t border-slate-100 dark:border-slate-800">
                {job.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-6 glass-premium p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Submit Your Candidacy
              </h2>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                  placeholder="e.g. Radhika Iyer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="name@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="+91 90761 XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Role Applied For
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="mgr_tax_audit">Manager Taxation and Audit</option>
                    <option value="mgr_compliance">Manager Compliance</option>
                    <option value="asst_mgr_tax">Asst Manager Taxation</option>
                    <option value="asst_mgr_compliance">Asst Manager Compliance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Qualifications
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="ca">Chartered Accountant (CA)</option>
                    <option value="cs">Company Secretary (CS)</option>
                    <option value="ca_inter">CA Inter (Semi-Qualified)</option>
                    <option value="cs_inter">CS Inter</option>
                    <option value="llb">LLB</option>
                    <option value="mcom">M.Com</option>
                    <option value="bcom">B.Com</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Summary / Cover Note
                </label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                  placeholder="Outline your background, audit exposures, or training details..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                <Send className="h-4.5 w-4.5" /> Submit Job Application
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center justify-center h-full"
            >
              <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                Application Received!
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed mb-6">
                Thank you, <strong>{formData.name}</strong>. Our human resources coordinator has received your application. We will reach out to you if your qualifications match our interview requirements.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 hover:underline"
              >
                Apply for another opening
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
