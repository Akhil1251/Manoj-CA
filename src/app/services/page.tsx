"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ChevronRight,
  Plus,
  Minus,
  Plane,
  Briefcase,
  ShoppingCart,
  Landmark,
  Leaf,
  Truck,
  Check,
  Download,
  PhoneCall
} from "lucide-react";

export default function ServicesPage() {
  const { t, theme } = useApp();
  const [selectedService, setSelectedService] = useState(1); // Default to Bonds & Commodities to match screenshot selection
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(0);

  const servicesList = [
    {
      id: "turnaround",
      title: "Turnaround Consulting",
      subtitle: "Restructuring and distress management for businesses seeking operational renewal.",
      intro: "As expert consultants, we help companies navigate critical transitions and restructure operations. Our turnaround advisors quickly identify inefficiencies, design emergency capital restructuring, and execute robust plans to return your business to profitability.",
    },
    {
      id: "bonds",
      title: "Bonds & Commodities",
      subtitle: "Securing capital stability through structural asset diversification.",
      intro: "As expert consultants, we understand the intricacies of bonds and commodities. Bonds and commodities are much more stable than stocks and trades; however, the payout is a bit lower in itself. We allow our clients to invest in the right bonds and commodities to establish a strong financial base.",
      bodyExtra: "Bonds and Commodities allow your company to have a financial base which is stable. Your company will be able to take more risks once it has invested in Bonds & Commodities, because it will have a steady source of income already. This is why we help clients invest in structurally sound bonds and non-volatile commodities.",
    },
    {
      id: "audit",
      title: "Audit & Assurance",
      subtitle: "Meticulous internal checks and balance sheets audit for total transparency.",
      intro: "Our statutory and internal audit programs are designed to provide complete security to your stakeholders, lenders, and regulators. We systematically verify your accounts, internal systems controls, and inventory models, ensuring full statutory compliance.",
    },
    {
      id: "trades",
      title: "Trades & Stocks",
      subtitle: "Strategic wealth advisory and risk-hedging stock investment strategies.",
      intro: "Navigating equity markets requires experience and rigorous data analysis. We provide bespoke research, portfolio restructuring, and structural hedging policies for corporate reserves and high-net-worth clients.",
    },
    {
      id: "strategic",
      title: "Strategic Planning",
      subtitle: "Defining long-term competitive advantages and execution roadmaps.",
      intro: "Good strategy is the antidote to competition. Our strategic planning sessions align your leadership team, set clear multi-year financial goals, and create measurable KPIs to track operational performance across all corporate divisions.",
    },
    {
      id: "projections",
      title: "Financial Projections",
      subtitle: "Dynamic cash flow forecasting, debt structuring models, and scenario forecasting.",
      intro: "Forward-looking financial projections form the core of every successful capital raise. We build dynamic, audit-ready financial models that stress-test your revenues, operating costs, and tax liabilities under multiple economic scenarios.",
    },
    {
      id: "international",
      title: "International Business Opportunities",
      subtitle: "FEMA compliances, cross-border corporate structuring, and global tax advisory.",
      intro: "Expanding abroad offers massive scaling opportunities but introduces complex cross-border taxation rules. We structure international holding companies, optimize transfer pricing policies, and manage global compliance reporting.",
    },
    {
      id: "execution",
      title: "Business Planning, Strategy & Execution",
      subtitle: "Converting ideas into detailed business blueprints ready for investor scrutiny.",
      intro: "A great business plan goes beyond vision—it details market research, marketing strategies, capital allocations, and precise execution timelines. We craft premium business plans backed by deep market research.",
    }
  ];

  const industries = [
    { title: "Travel and Aviation Consulting", icon: Plane },
    { title: "Business Services Consulting", icon: Briefcase },
    { title: "Consumer Products Consulting", icon: ShoppingCart },
    { title: "Financial Services Consulting", icon: Landmark },
    { title: "Energy Consulting", icon: Leaf },
    { title: "Transport & Logistics Consulting", icon: Truck }
  ];

  const bulletPoints = [
    "Work fewer hours — and make more money",
    "Attract and retain quality, high-paying customers",
    "Manage your time so you'll get more done in less time",
    "Hone sharp leadership skills to manage your team",
    "Cut expenses without sacrificing quality",
    "Automate your business, so you can leave for days, weeks, or even months at a time"
  ];

  const accordionItems = [
    {
      title: "Strategy Development",
      content: "Good strategy is the antidote to competition. Strategic thinking is the process of developing a strategy that defines your value proposition and your unique value chain. This process includes market research as well as an assessment of the company's capabilities and the industry forces impacting it."
    },
    {
      title: "Strategic Plan Development",
      content: "Once the strategic direction is set, we translate it into an actionable multi-year roadmap. We identify core priorities, assign resources, and set up clear milestone trackers to measure progress across your organization."
    },
    {
      title: "Strategic Plan Execution Management",
      content: "Execution is where strategy succeeds or fails. We provide ongoing management support, monthly performance reviews, and agility adjustments to ensure that your tactical actions remain fully aligned with your long-term goals."
    }
  ];

  // Dummy Chart Data
  const barChartData = [
    { month: "JAN", one: 10, two: 25 },
    { month: "FEB", one: 15, two: 18 },
    { month: "MAR", one: 20, two: 16 },
    { month: "APR", one: 25, two: 17 },
    { month: "MAY", one: 27, two: 20 },
    { month: "JUN", one: 25, two: 25 },
    { month: "JUL", one: 23, two: 30 },
    { month: "AUG", one: 25, two: 38 }
  ];

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#120412] min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Service Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN - SIDEBAR */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Service Menu */}
            <div className="bg-white dark:bg-[#180618] border border-slate-200/60 dark:border-slate-800/60 rounded-md overflow-hidden shadow-sm">
              {servicesList.map((service, idx) => {
                const isSelected = selectedService === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedService(idx)}
                    className={`w-full text-left py-3.5 px-5 text-[13px] font-bold border-b border-slate-100 dark:border-slate-800/40 transition-all duration-300 flex items-center justify-between border-l-4 ${
                      isSelected
                        ? "border-l-[#9e8055] bg-slate-50 dark:bg-[#250d25]/45 text-[#9e8055]"
                        : "border-l-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/60"
                    }`}
                  >
                    <span>{service.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isSelected ? "translate-x-0.5 text-[#9e8055]" : "opacity-30"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Company Presentation Box */}
            <a
              href="#"
              className="group flex items-center justify-between bg-[#110311] hover:bg-[#1c061c] text-white p-5 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#9e8055] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider opacity-60">Company</div>
                  <div className="text-xs font-black uppercase tracking-widest">Presentation</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-[#9e8055] opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* How Can We Help You Box */}
            <div className="bg-[#9e8055] text-white p-7 rounded-md relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h4 className="text-base font-bold lowercase tracking-tight mb-2">how can we help you?</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Contact us at the Consulting WP office nearest to you or submit a business inquiry online.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#110311] hover:bg-slate-100 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm"
              >
                <PhoneCall className="w-3 h-3 text-[#9e8055]" />
                Contacts
              </Link>
            </div>

            {/* Testimonial Quote Bubble */}
            <div className="space-y-4">
              <div className="relative bg-white dark:bg-[#180618] border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-lg shadow-sm">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic pr-4">
                  "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
                </p>
                <div className="absolute right-4 bottom-3 text-amber-600/10 dark:text-amber-500/5 font-serif text-6xl select-none leading-none pointer-events-none">
                  “
                </div>
              </div>
              <div className="flex items-center gap-3.5 px-1">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border border-slate-300/50">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Amanda Seyfried"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">Amanda Seyfried</h5>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                    Sales & Marketing, Allen Ltd.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - CONTENT AREA */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Service Header & Text Content */}
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-left"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#210821] dark:text-white tracking-tight leading-snug">
                {servicesList[selectedService].title}
              </h2>
              
              <div className="w-12 h-[3px] bg-[#9e8055] rounded" />

              <p className="text-[13px] text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                {servicesList[selectedService].intro}
              </p>
              
              {servicesList[selectedService].bodyExtra && (
                <p className="text-[13px] text-slate-600 dark:text-slate-350 leading-relaxed font-normal mt-4">
                  {servicesList[selectedService].bodyExtra}
                </p>
              )}
            </motion.div>

            {/* Range of Industries */}
            <div className="text-left space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#210821] dark:text-white tracking-tight lowercase">
                  Range of industries
                </h3>
                <div className="w-8 h-[2px] bg-[#9e8055] mt-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {industries.map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#1b071b] flex items-center justify-center border border-[#9e8055]/10 shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-tight leading-tight">
                        {ind.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <hr className="border-slate-200/50 dark:border-slate-800/50" />

            {/* Strategic & Tactical Planning & Pie Chart Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Strategic & Tactical Planning List */}
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#210821] dark:text-white tracking-tight">
                    Strategic & tactical planning
                  </h3>
                  <div className="w-8 h-[2px] bg-[#9e8055] mt-1" />
                </div>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                  Our renowned coaching programs will allow you to:
                </p>
                <ul className="space-y-3">
                  {bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      <Check className="w-3.5 h-3.5 text-[#9e8055] shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategy Development Pie Chart */}
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#210821] dark:text-white tracking-tight">
                    Strategy development
                  </h3>
                  <div className="w-8 h-[2px] bg-[#9e8055] mt-1" />
                </div>

                {/* SVG Animated Pie Chart */}
                <div className="flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-[#180618] border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-lg shadow-sm">
                  <div className="relative w-36 h-36">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      {/* One: Red (40%) - Stroke Dasharray calculations */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#f87171"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 150.7 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                      {/* Two: Blue (35%) */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#60a5fa"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 163.28 }}
                        style={{ transformOrigin: "50px 50px", rotate: "144deg" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      />
                      {/* Three: Purple (25%) */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#a78bfa"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 188.4 }}
                        style={{ transformOrigin: "50px 50px", rotate: "270deg" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-3 h-3 bg-[#f87171] rounded-sm shrink-0" />
                      <span className="font-semibold text-slate-500">One (40%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-3 h-3 bg-[#60a5fa] rounded-sm shrink-0" />
                      <span className="font-semibold text-slate-500">Two (35%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-3 h-3 bg-[#a78bfa] rounded-sm shrink-0" />
                      <span className="font-semibold text-slate-500">Three (25%)</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed font-normal">
                  You can transform your business to a revenue-producing asset that lets you work as much or as little as you want.
                </p>
              </div>

            </div>

            <hr className="border-slate-200/50 dark:border-slate-800/50" />

            {/* Strategic Plan Development Bar Chart */}
            <div className="text-left space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#210821] dark:text-white tracking-tight">
                  Strategic plan development
                </h3>
                <div className="w-8 h-[2px] bg-[#9e8055] mt-1" />
              </div>

              {/* Responsive Bar Chart Wrapper */}
              <div className="bg-white dark:bg-[#180618] border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-lg shadow-sm">
                <div className="h-60 w-full flex items-end justify-between gap-2 border-b border-l border-slate-200 dark:border-slate-800 pb-2 pl-2 relative">
                  
                  {/* Y-Axis Grid Lines Helper */}
                  <div className="absolute left-0 right-0 bottom-1/4 border-b border-dashed border-slate-100 dark:border-slate-800/50 pointer-events-none" />
                  <div className="absolute left-0 right-0 bottom-2/4 border-b border-dashed border-slate-100 dark:border-slate-800/50 pointer-events-none" />
                  <div className="absolute left-0 right-0 bottom-3/4 border-b border-dashed border-slate-100 dark:border-slate-800/50 pointer-events-none" />

                  {barChartData.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 z-10">
                      <div className="w-full flex items-end justify-center gap-1.5 h-48">
                        {/* Bar One: Red */}
                        <motion.div
                          className="w-3 bg-[#f87171] rounded-t-sm hover:brightness-95 transition-all duration-300"
                          initial={{ height: 0 }}
                          animate={{ height: `${(bar.one / 40) * 100}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
                        />
                        {/* Bar Two: Blue */}
                        <motion.div
                          className="w-3 bg-[#60a5fa] rounded-t-sm hover:brightness-95 transition-all duration-300"
                          initial={{ height: 0 }}
                          animate={{ height: `${(bar.two / 40) * 100}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 + 0.1 }}
                        />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 tracking-wider">
                        {bar.month}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 justify-center mt-4 text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#f87171] rounded-sm" />
                    <span>One</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#60a5fa] rounded-sm" />
                    <span>Two</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200/50 dark:border-slate-800/50" />

            {/* Accordion: Research beyond the business plan */}
            <div className="text-left space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#210821] dark:text-white tracking-tight">
                  Research beyond the business plan
                </h3>
                <div className="w-8 h-[2px] bg-[#9e8055] mt-1" />
              </div>

              <div className="space-y-3.5">
                {accordionItems.map((item, idx) => {
                  const isExpanded = expandedAccordion === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/60 dark:border-slate-800/60 rounded-md overflow-hidden bg-white dark:bg-[#180618] shadow-sm"
                    >
                      <button
                        onClick={() => setExpandedAccordion(isExpanded ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-[13px] font-bold text-left hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                      >
                        <span className={isExpanded ? "text-[#9e8055]" : "text-slate-800 dark:text-white"}>
                          {item.title}
                        </span>
                        {isExpanded ? (
                          <Minus className="w-3.5 h-3.5 text-[#9e8055]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-4 pt-0 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal border-t border-slate-100 dark:border-slate-850">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
