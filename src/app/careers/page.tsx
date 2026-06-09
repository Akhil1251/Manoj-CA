"use client";

import React, { useState } from "react";
import { Briefcase, Send, CheckCircle, GraduationCap, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "article_assistant",
    qualification: "ipcc_both",
    coverLetter: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const openings = [
    {
      title: "Chartered Accountant (Associate)",
      type: "Full-Time (On-Site)",
      experience: "1-3 Years post qualification",
      desc: "Looking for an energetic ACA to handle tax representations and internal corporate audits."
    },
    {
      title: "Article Assistant (ICAI)",
      type: "Statutory Internship",
      experience: "IPCC cleared (Single/Both groups)",
      desc: "Gain deep, practical exposure across direct tax representations, audits, and automated bookkeeping."
    },
    {
      title: "GST Operations Executive",
      type: "Full-Time",
      experience: "2+ Years in GST filings",
      desc: "Supervise daily reconciliations, file monthly GSTR-1/3B, and coordinate vendor audits."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          ðŸ’¼ Join Our Team
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
              className="glass p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-3 hover-3d"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {job.title}
              </h3>
              <div className="flex gap-4 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="h-3.5 w-3.5" /> {job.experience}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 leading-relaxed font-medium">
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
                    placeholder="+91 98765 XXXXX"
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
                    <option value="associate_ca">Chartered Accountant (Associate)</option>
                    <option value="article_assistant">Article Assistant (ICAI)</option>
                    <option value="gst_executive">GST Operations Executive</option>
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
                    <option value="ca_final">CA Completed</option>
                    <option value="ipcc_both">IPCC Both Groups Cleared</option>
                    <option value="ipcc_single">IPCC Single Group Cleared</option>
                    <option value="mba_finance">MBA (Finance) / M.Com</option>
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
