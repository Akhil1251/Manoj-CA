"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight } from "lucide-react";

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    title: "Housing Society Advisory",
    desc: "Society Compliance & Governance…",
    href: "/services#society-management",
  },
  {
    title: "Business Formation, Registration & Compliance",
    desc: "Build. Comply. Grow…",
    href: "/services#compliance-business-advisory",
  },
  {
    title: "Tax & Litigation Services",
    desc: "Taxation & Litigation Experts…",
    href: "/services#taxation-regulatory-litigation",
  },
  {
    title: "NRI Services",
    desc: "NRI Tax & Property Solutions…",
    href: "/services#nri-services",
  },
  {
    title: "Senior Citizen Advisory Services",
    desc: "Senior Citizen Support Services…",
    href: "/services#senior-citizen-advisory",
  },
];

export default function BookConsultationModal({ isOpen, onClose }: BookConsultationModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    query: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*📋 Consultation Request*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Phone:* ${form.phone}%0A*Location:* ${form.location}%0A*Query/Services:* ${form.query}`;
    window.open(`https://wa.me/919076111021?text=${message}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0f0a1a] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 bg-gradient-to-r from-[#0a122a] to-[#1a2744] rounded-t-2xl relative">
              {/* Title & Call Info (Desktop/Mobile wrapper) */}
              <div className="flex flex-col text-left pr-10 sm:pr-0">
                <h2 className="text-base sm:text-lg font-extrabold text-white tracking-wide uppercase">
                  Book Free Consultation
                </h2>
                
                {/* Mobile Call Info - Below the title */}
                <div className="block sm:hidden mt-2">
                  <a
                    href="tel:+919076111021"
                    className="flex flex-col gap-0.5 text-xs text-white hover:text-amber-400 transition-colors"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">CALL US</span>
                    <span className="text-sm font-bold text-amber-400 underline underline-offset-2">+91 90761 11021</span>
                  </a>
                </div>
              </div>

              {/* Desktop Call Info - Hidden on mobile, shown in middle/right on desktop */}
              <div className="hidden sm:flex items-center gap-6">
                <a
                  href="tel:+919076111021"
                  className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold tracking-wide">CALL US:</span>
                  <span className="text-sm font-bold text-amber-400 underline underline-offset-2">+91 90761 11021</span>
                </a>
              </div>

              {/* Close Button - positioned absolutely on mobile, relative on desktop */}
              <button
                onClick={onClose}
                className="absolute sm:relative right-4 top-4 sm:top-auto sm:right-auto w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Content: Left Form + Right Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* LEFT SIDE: Form */}
              <div className="p-6 sm:p-8 border-r border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
                  Schedule Your Consultation
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Fill in your details and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Query */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Query / Services
                    </label>
                    <textarea
                      name="query"
                      value={form.query}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements…"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-widest shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Book Consultation Slot
                  </button>
                </form>
              </div>

              {/* RIGHT SIDE: Services */}
              <div className="p-6 sm:p-8 bg-slate-50/50 dark:bg-[#120a1e]">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
                  Our Services
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Explore our expertise areas
                </p>

                <div className="space-y-3">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={onClose}
                      className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#1a1030] border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/30 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          {service.desc}{" "}
                          <span className="text-amber-600 dark:text-amber-400 font-bold">
                            Learn more
                          </span>
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors flex-shrink-0 ml-3 group-hover:translate-x-1 transform duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
