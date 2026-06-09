"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Check, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  // Wizard States
  const [entityType, setEntityType] = useState("freelancer");
  const [turnover, setTurnover] = useState("under_20l");
  const [transactions, setTransactions] = useState(50);
  const [needGst, setNeedGst] = useState(true);
  const [estimatedPrice, setEstimatedPrice] = useState(2500);

  // Recalculate price dynamically when inputs change
  useEffect(() => {
    let base = 1500;

    // Entity additions
    if (entityType === "partnership") base += 1000;
    if (entityType === "pvt_ltd") base += 2500;
    if (entityType === "nri") base += 1500;

    // Turnover additions
    if (turnover === "20l_1cr") base += 1500;
    if (turnover === "1cr_5cr") base += 3500; // Tax audit required
    if (turnover === "above_5cr") base += 7000;

    // Transaction volume additions
    if (transactions > 200) base += 2000;
    else if (transactions > 100) base += 1000;
    else if (transactions > 50) base += 500;

    // GST Filing addition
    if (needGst) base += 1000;

    setEstimatedPrice(base);
  }, [entityType, turnover, transactions, needGst]);

  const packages = [
    {
      name: "Starter Compliance",
      price: "â‚¹2,499",
      period: "per month",
      desc: "Perfect for independent freelancers, creators, and single-owner consultants.",
      features: [
        "Income tax return (ITR-3 / ITR-4)",
        "LUT GST filing for exports",
        "Quarterly tax advisory session",
        "Presumptive income planning (44ADA)",
        "Email & Whatsapp support"
      ]
    },
    {
      name: "Growth Professional",
      price: "â‚¹5,999",
      period: "per month",
      desc: "Ideal for growing LLPs, private companies, and active retail traders.",
      features: [
        "All Starter features",
        "Monthly GSTR-1 & 3B filings",
        "TDS reconciliation & returns",
        "Monthly Profit & Loss review",
        "Dedicated Chartered Accountant"
      ]
    },
    {
      name: "Enterprise Audit",
      price: "Custom Pricing",
      period: "based on scope",
      desc: "Designed for mid-sized manufacturers, exporters, and corporations.",
      features: [
        "All Growth features",
        "Statutory & Tax Audit (Section 44AB)",
        "Certified Share Valuation Reports",
        "Department tax notice response drafting",
        "Board meeting advisory representation"
      ]
    }
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          ðŸ’³ Transparent Fees
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Estimate Your Compliance Cost
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          No hidden fees or unexpected bills. Use our interactive estimator wizard or choose a fixed compliance tier.
        </p>
      </div>

      {/* Grid: Interactive Wizard + Traditional Packages */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
        {/* Left Column: Interactive Wizard */}
        <div className="lg:col-span-8 glass-premium p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-amber-500" /> Interactive Cost Estimator
          </h2>

          <div className="space-y-6">
            {/* Entity Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                1. What is your legal entity?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "freelancer", label: "Freelancer" },
                  { id: "partnership", label: "LLP / Firm" },
                  { id: "pvt_ltd", label: "Pvt Ltd Co" },
                  { id: "nri", label: "NRI Citizen" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEntityType(item.id)}
                    className={`h-11 rounded-xl text-xs font-bold border transition ${
                      entityType === item.id
                        ? "bg-amber-600 border-amber-600 text-white"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-355 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Turnover Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                2. Annual Gross Turnover
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {[
                  { id: "under_20l", label: "Under â‚¹20 Lakhs" },
                  { id: "20l_1cr", label: "â‚¹20L - â‚¹1 Crore" },
                  { id: "1cr_5cr", label: "â‚¹1Cr - â‚¹5 Crore" },
                  { id: "above_5cr", label: "Above â‚¹5 Crore" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTurnover(item.id)}
                    className={`h-11 rounded-xl text-xs font-bold border transition ${
                      turnover === item.id
                        ? "bg-amber-600 border-amber-600 text-white"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-355 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Transactions Slider */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  3. Monthly Bank Transactions: <span className="text-amber-500 font-extrabold">{transactions}+</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="10"
                  value={transactions}
                  onChange={(e) => setTransactions(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* GST toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  4. Require Monthly GST Filing?
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setNeedGst(true)}
                    className={`flex-1 h-11 rounded-xl text-xs font-bold border transition ${
                      needGst
                        ? "bg-amber-600 border-amber-600 text-white"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-355 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    Yes (Filing Included)
                  </button>
                  <button
                    onClick={() => setNeedGst(false)}
                    className={`flex-1 h-11 rounded-xl text-xs font-bold border transition ${
                      !needGst
                        ? "bg-amber-600 border-amber-600 text-white"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-355 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    No (Advisory only)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Quote Result */}
        <div className="lg:col-span-4 flex">
          <div className="w-full glass-premium p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-amber-600/5 dark:bg-amber-950/20 text-center flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest block mb-1">
                Estimated Subscription
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white my-6">
                â‚¹{estimatedPrice.toLocaleString()}{" "}
                <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold block mt-1">
                  per month (GST extra)
                </span>
              </div>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed mb-6">
                *This is a calculated estimate. Price may vary slightly based on complex audit requirements or multiple state registrations.
              </p>
            </div>

            <button
              onClick={() => {
                window.location.href = `/contact?query=Estimated plan rate calculated: â‚¹${estimatedPrice} for ${entityType}`;
              }}
              className="w-full h-11 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-amber-600/15"
            >
              Request Custom Proposal <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Standard packages table */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-10 text-center">
          Standard Compliance Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            const isFeatured = idx === 1; // Growth Professional
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`glass p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative ${
                  isFeatured
                    ? "border-amber-500/50 bg-amber-600/[0.02] ring-1 ring-amber-500/10 shadow-xl"
                    : "border-slate-200/50 dark:border-slate-800/50"
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest bg-amber-600 text-white shadow">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 my-4">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold">
                      {pkg.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
                    {pkg.desc}
                  </p>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                          <Check className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => {
                      window.location.href = `/contact?query=Interested in package: ${pkg.name}`;
                    }}
                    className={`w-full h-10 rounded-xl text-xs font-bold transition ${
                      isFeatured
                        ? "bg-amber-600 hover:bg-amber-500 text-white"
                        : "border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
