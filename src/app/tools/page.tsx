"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Calculator, ArrowRight, CircleHelp, Info } from "lucide-react";
import { motion } from "framer-motion";

type ToolType = "tax" | "gst" | "sip" | "emi";

export default function ToolsPage() {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<ToolType>("tax");

  // Tax Calculator States
  const [income, setIncome] = useState(1200000);
  const [deductions, setDeductions] = useState(150000);
  const [taxResult, setTaxResult] = useState<{ oldTax: number; newTax: number } | null>(null);

  // GST Calculator States
  const [netPrice, setNetPrice] = useState(50000);
  const [gstRate, setGstRate] = useState(18);
  const [gstResult, setGstResult] = useState<{ cgst: number; sgst: number; total: number } | null>(null);

  // SIP States
  const [monthlyInvest, setMonthlyInvest] = useState(10000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(15);
  const [sipResult, setSipResult] = useState<{ invested: number; gain: number; total: number } | null>(null);

  // EMI States
  const [principal, setPrincipal] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20); // in years
  const [emiResult, setEmiResult] = useState<{ emi: number; totalInterest: number; totalPayable: number } | null>(null);

  // Calculations
  const calculateTax = () => {
    // Basic tax calculation logic for demonstration
    const taxableOld = Math.max(0, income - deductions);
    const taxableNew = Math.max(0, income); // New tax regime has fewer deductions

    // Old Regime calculation (simplification)
    let oldTax = 0;
    if (taxableOld > 1000000) {
      oldTax = 112500 + (taxableOld - 1000000) * 0.3;
    } else if (taxableOld > 500000) {
      oldTax = 12500 + (taxableOld - 500000) * 0.2;
    } else if (taxableOld > 250000) {
      oldTax = (taxableOld - 250000) * 0.05;
    }

    // New Regime calculation (simplification)
    let newTax = 0;
    if (taxableNew > 1500000) {
      newTax = 150000 + (taxableNew - 1500000) * 0.3;
    } else if (taxableNew > 1200000) {
      newTax = 90000 + (taxableNew - 1200000) * 0.2;
    } else if (taxableNew > 900000) {
      newTax = 45000 + (taxableNew - 900000) * 0.15;
    } else if (taxableNew > 600000) {
      newTax = 15000 + (taxableNew - 600000) * 0.1;
    } else if (taxableNew > 300000) {
      newTax = (taxableNew - 300000) * 0.05;
    }

    // Rebate under 87A
    if (taxableOld <= 500000) oldTax = 0;
    if (taxableNew <= 700000) newTax = 0;

    setTaxResult({ oldTax: Math.round(oldTax), newTax: Math.round(newTax) });
  };

  const calculateGst = () => {
    const totalGst = (netPrice * gstRate) / 100;
    const cgst = totalGst / 2;
    const sgst = totalGst / 2;
    const total = netPrice + totalGst;
    setGstResult({ cgst, sgst, total });
  };

  const calculateSip = () => {
    const i = returnRate / 12 / 100;
    const n = years * 12;
    const totalValue = monthlyInvest * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = monthlyInvest * n;
    const gain = totalValue - invested;
    setSipResult({ invested: Math.round(invested), gain: Math.round(gain), total: Math.round(totalValue) });
  };

  const calculateEmi = () => {
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - principal;
    setEmiResult({ emi: Math.round(emi), totalInterest: Math.round(totalInterest), totalPayable: Math.round(totalPayable) });
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3.5 py-1.5 rounded-full border border-indigo-500/20 uppercase tracking-widest">
          📊 Calculators & Scenarios
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Financial Advisory Tools
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Simulate real-life financial outcomes instantly. Learn the rationale behind each calculation to make informed financial decisions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 justify-center gap-2 sm:gap-6 mb-12 flex-wrap">
        {[
          { id: "tax", label: "Income Tax Tool" },
          { id: "gst", label: "GST Estimator" },
          { id: "sip", label: "SIP Wealth Planner" },
          { id: "emi", label: "EMI Loan Calculator" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ToolType)}
            className={`py-3.5 px-4 font-bold text-sm border-b-2 transition-colors duration-200 ${
              activeTab === tab.id
                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-indigo-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Inputs + Real-life context */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Tool inputs & results */}
        <div className="lg:col-span-7 glass-premium p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          {activeTab === "tax" && (
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                Income Tax Liability Estimator
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Annual Gross Income (₹)
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Eligible Deductions (₹) - e.g. 80C, 80D
                  </label>
                  <input
                    type="number"
                    value={deductions}
                    onChange={(e) => setDeductions(Number(e.target.value))}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <button
                  onClick={calculateTax}
                  className="w-full h-11 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2"
                >
                  <Calculator className="h-4.5 w-4.5" /> Calculate Tax Slabs
                </button>
              </div>

              {taxResult && (
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-850">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Old Regime Tax
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white block mt-1">
                      ₹{taxResult.oldTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-indigo-600/10 border border-indigo-500/20">
                    <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">
                      New Regime Tax
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 block mt-1">
                      ₹{taxResult.newTax.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "gst" && (
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                GST (Goods & Services Tax) Estimator
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Net Price of Service/Product (₹)
                  </label>
                  <input
                    type="number"
                    value={netPrice}
                    onChange={(e) => setNetPrice(Number(e.target.value))}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Tax Rate (%)
                  </label>
                  <select
                    value={gstRate}
                    onChange={(e) => setGstRate(Number(e.target.value))}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                  >
                    <option value={5}>5% (Basic Essentials)</option>
                    <option value={12}>12% (Standard goods/services)</option>
                    <option value={18}>18% (Standard services - IT/Advisory)</option>
                    <option value={28}>28% (Luxury goods)</option>
                  </select>
                </div>
                <button
                  onClick={calculateGst}
                  className="w-full h-11 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2"
                >
                  <Calculator className="h-4.5 w-4.5" /> Calculate GST Breakdown
                </button>
              </div>

              {gstResult && (
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-850">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      CGST (Half)
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white block mt-1">
                      ₹{gstResult.cgst.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-850">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      SGST (Half)
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white block mt-1">
                      ₹{gstResult.sgst.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-indigo-600/10 border border-indigo-500/20">
                    <span className="text-[9px] uppercase font-bold text-indigo-500 tracking-wider">
                      Gross Total
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-indigo-600 dark:text-indigo-400 block mt-1">
                      ₹{gstResult.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "sip" && (
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                Systematic Investment Plan Wealth Estimator
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Monthly Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyInvest}
                    onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Expected Return (%)
                    </label>
                    <input
                      type="number"
                      value={returnRate}
                      onChange={(e) => setReturnRate(Number(e.target.value))}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Duration (Years)
                    </label>
                    <input
                      type="number"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
                <button
                  onClick={calculateSip}
                  className="w-full h-11 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2"
                >
                  <Calculator className="h-4.5 w-4.5" /> Project Future Wealth
                </button>
              </div>

              {sipResult && (
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-850">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      Invested
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white block mt-1">
                      ₹{sipResult.invested.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-850">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      Wealth Gained
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-500 block mt-1">
                      ₹{sipResult.gain.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-indigo-600/10 border border-indigo-500/20">
                    <span className="text-[9px] uppercase font-bold text-indigo-500 tracking-wider">
                      Future Value
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-indigo-600 dark:text-indigo-400 block mt-1">
                      ₹{sipResult.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "emi" && (
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                Loan EMI & Interest Calculator
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Principal Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Interest Rate (% p.a.)
                    </label>
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Tenure (Years)
                    </label>
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
                <button
                  onClick={calculateEmi}
                  className="w-full h-11 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2"
                >
                  <Calculator className="h-4.5 w-4.5" /> Estimate Monthly EMI
                </button>
              </div>

              {emiResult && (
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="p-3.5 rounded-xl bg-indigo-600/10 border border-indigo-500/20">
                    <span className="text-[9px] uppercase font-bold text-indigo-500 tracking-wider">
                      Monthly EMI
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-indigo-600 dark:text-indigo-400 block mt-1">
                      ₹{emiResult.emi.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-850">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      Total Interest
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white block mt-1">
                      ₹{emiResult.totalInterest.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-850">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      Total Payable
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white block mt-1">
                      ₹{emiResult.totalPayable.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right column: Real life scenario context (Market Need Focus) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {activeTab === "tax" && (
            <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <span className="flex items-center gap-2 text-rose-500 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Info className="h-4.5 w-4.5" /> Real-Life Challenge
              </span>
              <h4 className="text-md font-bold text-slate-900 dark:text-white mb-2">
                Why Compare Regimes?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                "Meet Ananya, a marketing consultant earning ₹12 Lakhs. She has a housing loan (Section 24) and invests in PPF (Section 80C). Unsure which scheme to choose, she paid ₹25,000 extra tax last year by choosing the wrong regime without mathematical simulation."
              </p>
              <div className="p-4 rounded-xl bg-indigo-600/5 border border-indigo-500/10 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Our Solution:</strong> By running automated parameters, we evaluate your specific insurance policies, home loans, and standard deductions to select the optimal regime, saving significant liquid assets.
              </div>
            </div>
          )}

          {activeTab === "gst" && (
            <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <span className="flex items-center gap-2 text-rose-500 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Info className="h-4.5 w-4.5" /> Real-Life Challenge
              </span>
              <h4 className="text-md font-bold text-slate-900 dark:text-white mb-2">
                The Invoicing Trap
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                "Meet Kabir, who imports spare parts and resells them. He charged a flat price to customers without factoring in the 18% GST rate correctly, leading to notices for unpaid taxes and penalties from his regional GST department."
              </p>
              <div className="p-4 rounded-xl bg-indigo-600/5 border border-indigo-500/10 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Our Solution:</strong> We build transparent invoicing compliance rules, separating CGST/SGST/IGST dynamically so businesses avoid audit penalties and recover complete input tax credits.
              </div>
            </div>
          )}

          {activeTab === "sip" && (
            <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <span className="flex items-center gap-2 text-rose-500 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Info className="h-4.5 w-4.5" /> Real-Life Challenge
              </span>
              <h4 className="text-md font-bold text-slate-900 dark:text-white mb-2">
                Compounding Asset Growth
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                "Meet Dr. Sanjay, who kept his surplus income in a traditional savings bank account yielding 3% interest, unaware that inflation of 6% was actively eroding his wealth year on year."
              </p>
              <div className="p-4 rounded-xl bg-indigo-600/5 border border-indigo-500/10 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Our Solution:</strong> We structure wealth planning through disciplined systematic investing in tax-sheltered mutual funds (ELSS) and dynamic bond systems to maintain capital purchasing power.
              </div>
            </div>
          )}

          {activeTab === "emi" && (
            <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <span className="flex items-center gap-2 text-rose-500 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Info className="h-4.5 w-4.5" /> Real-Life Challenge
              </span>
              <h4 className="text-md font-bold text-slate-900 dark:text-white mb-2">
                Long-Term Liability Trap
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                "Meet Shalini, who took a 20-year home loan of ₹50 Lakhs. She did not evaluate the total interest payout over the tenure, which ended up being more than the principal amount itself."
              </p>
              <div className="p-4 rounded-xl bg-indigo-600/5 border border-indigo-500/10 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Our Solution:</strong> We advise clients on pre-payment schemes and loan restructuring options that reduce total interest outflow by up to 40% with minor monthly changes.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
