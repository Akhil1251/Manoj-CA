"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Mail, Phone, MapPin, Send, HelpCircle, Briefcase, Award } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useApp();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      {/* Live Regulatory Ticker */}
      <div className="bg-indigo-600/10 dark:bg-indigo-950/30 border-b border-indigo-500/10 dark:border-indigo-500/20 py-2.5 overflow-hidden text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest text-[10px]">
            Live Alert:
          </span>
          <div className="flex-1 whitespace-nowrap overflow-hidden relative">
            <span className="inline-block animate-[marquee_25s_linear_infinite] font-semibold text-slate-700 dark:text-slate-300">
              ⚠️ IT Filing deadline for FY 2025-26 approaching | GST Council updates dynamic Input Tax Credit claims requirements under Section 16(4) | Special lower TDS limits for NRI real estate sales.
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-md shadow">
                M
              </span>
              <span className="font-extrabold tracking-wider text-slate-800 dark:text-white text-lg">
                MANOJ <span className="text-indigo-600 dark:text-indigo-400">CA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Premium Financial Advisory & Chartered Accountancy. We simplify complex regulatory frameworks to secure your legacy and grow your business.
            </p>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-indigo-500" /> Suite 402, FinHeights Plaza, Mumbai, India
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-indigo-500" /> +91 98765 43210
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-indigo-500" /> advisor@manojca.com
              </span>
            </div>
          </div>

          {/* Quick Links - Services */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
              {t.navServices}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-indigo-500 transition-colors">
                  Corporate Advisory & Audits
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-500 transition-colors">
                  Tax Litigation & Representation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-500 transition-colors">
                  GST Invoicing & Reconciliations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-500 transition-colors">
                  NRI Lower TDS Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Tools */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
              Useful Resources
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/tools" className="hover:text-indigo-500 transition-colors">
                  Income Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-indigo-500 transition-colors">
                  GST Estimator Tool
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-indigo-500 transition-colors">
                  Pricing Package Wizard
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-indigo-500 transition-colors flex items-center gap-1">
                  <HelpCircle className="h-3.5 w-3.5 text-slate-400" /> {t.navFaq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
              Stay Compliant
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Get monthly updates on tax laws, notifications, and saving tips directly in your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full h-10 px-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:ring-1 focus:ring-indigo-500 outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center h-10 w-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] font-bold text-emerald-500 mt-2 block animate-pulse">
                ✓ Success! Check your inbox soon.
              </span>
            )}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-semibold gap-4">
          <span>
            © {new Date().getFullYear()} Manoj CA Associates. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/careers" className="hover:text-indigo-500 transition-colors flex items-center gap-1">
              <Briefcase className="h-3 w-3" /> Careers
            </Link>
            <Link href="/about" className="hover:text-indigo-500 transition-colors flex items-center gap-1">
              <Award className="h-3 w-3" /> Certifications
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
