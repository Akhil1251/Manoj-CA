"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Mail, Phone, MapPin, Calendar, Clock, Landmark, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    turnover: "under_20l",
    query: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          ðŸ“ž Let's Connect
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Book a Free Consultation
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Reach our specialists for diagnostic guidance. Tell us your business scenario and we'll schedule a callback.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 glass-premium p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="e.g. Ramesh Kumar"
                  />
                </div>
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
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Company / Entity
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="e.g. FinTech Pvt Ltd"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Annual Turnover Slabs
                </label>
                <select
                  value={formData.turnover}
                  onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                >
                  <option value="under_20l">Under â‚¹20 Lakhs (GST Exempt Limit)</option>
                  <option value="20l_1cr">â‚¹20 Lakhs - â‚¹1 Crore</option>
                  <option value="1cr_5cr">â‚¹1 Crore - â‚¹5 Crore (Tax Audit Threshold)</option>
                  <option value="above_5cr">Above â‚¹5 Crore</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Explain your specific scenario / doubt
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                  placeholder="Tell us what challenge you are facing (e.g. got income tax notice, vendor not uploading GST invoice...)"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold shadow-lg shadow-amber-600/15 transition flex items-center justify-center gap-2"
              >
                <Calendar className="h-4.5 w-4.5" /> Book Consultation Slot
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center h-full"
            >
              <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Consultation Request Received!
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                Thanks, <strong>{formData.name}</strong>. An advisory expert has been assigned to review your query regarding <strong>{formData.company || "your business"}</strong>. We will call you within 4 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 hover:underline"
              >
                Submit another request
              </button>
            </motion.div>
          )}
        </div>

        {/* Right Column: Address Details */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {/* Coordinates */}
          <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Corporate Office Coordinates
            </h3>
            <div className="flex gap-4 items-start text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-slate-700 dark:text-slate-350 font-bold mb-1">
                  Mumbai Headquarters
                </strong>
                Suite 402, FinHeights Plaza, Bandra Kurla Complex (BKC), Mumbai, 400051, India
              </div>
            </div>
            <div className="flex gap-4 items-start text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <Mail className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-slate-700 dark:text-slate-350 font-bold mb-1">
                  Client Support & Inquiries
                </strong>
                advisor@manojca.com
              </div>
            </div>
            <div className="flex gap-4 items-start text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <Phone className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-slate-700 dark:text-slate-350 font-bold mb-1">
                  Direct Line
                </strong>
                +91 98765 43210
              </div>
            </div>
          </div>

          {/* Operating hours */}
          <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex gap-4 items-start">
            <Clock className="h-5 w-5 text-amber-500 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-450">
              <strong className="block text-slate-700 dark:text-slate-350 font-bold mb-1">
                Consultation Hours
              </strong>
              Monday - Saturday: 09:30 AM - 06:30 PM (IST)
              <span className="block mt-1 font-semibold text-amber-500">
                âš ï¸ Extended hours active during filing season.
              </span>
            </div>
          </div>

          {/* Stylized Map Placeholder */}
          <div className="glass h-48 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900 opacity-20 bg-grid-slate-900/[0.1] z-0" />
            <div className="text-center z-10 p-4">
              <Landmark className="h-8 w-8 text-amber-500 mx-auto mb-2 animate-float" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Bandra Kurla Complex Map Grid
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">
                GPS: 19.0607Â° N, 72.8634Â° E
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
