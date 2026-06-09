"use client";

import React, { useState } from "react";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function KnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Updates" },
    { id: "tax", label: "Income Tax" },
    { id: "gst", label: "GST (Indirect Tax)" },
    { id: "corp", label: "Corporate Compliance" }
  ];

  const articles = [
    {
      title: "Understanding Section 194R: TDS on Business Promotion Benefits",
      desc: "An in-depth guide on whether company allowances, incentives, or gifts given to dealers trigger TDS liabilities under Section 194R.",
      date: "June 05, 2026",
      category: "tax",
      readTime: "6 min read",
      author: "Manoj CA"
    },
    {
      title: "Common GSTR-3B Filing Pitfalls & How to Avoid Interest Fines",
      desc: "Learn why reconciling GSTR-3B with GSTR-2B monthly is critical under current tax laws to prevent double liability claims.",
      date: "May 28, 2026",
      category: "gst",
      readTime: "8 min read",
      author: "Amit Patel"
    },
    {
      title: "Structuring Foreign Direct Investments (FDI) under FEMA Rules",
      desc: "For startups raising funding from overseas venture funds: key compliance checkpoints and statutory valuation guidelines.",
      date: "May 15, 2026",
      category: "corp",
      readTime: "10 min read",
      author: "Radhika Sharma"
    },
    {
      title: "Securing Lower TDS Certificate (Form 13) for NRI Property Sales",
      desc: "A step-by-step breakdown of how NRIs can avoid the mandatory 20% TDS on real estate transactions by submitting localized income data.",
      date: "April 30, 2026",
      category: "tax",
      readTime: "5 min read",
      author: "Manoj CA"
    },
    {
      title: "E-Invoicing Applicability Limits for Small Business Owners",
      desc: "Is your business crossing the GSTR e-invoicing threshold turnover limit? Review compliance dates and setup steps to avoid fines.",
      date: "April 18, 2026",
      category: "gst",
      readTime: "4 min read",
      author: "Amit Patel"
    }
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          ðŸ“– Regulatory Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Tax Insights & Regulatory Alerts
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Stay informed with analytical guides, compliance updates, and tax tips compiled by our advisory panel.
        </p>
      </div>

      {/* Search & Filter bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        {/* Categories */}
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2 text-xs font-bold rounded-full border transition-all ${
                activeCategory === cat.id
                  ? "bg-amber-600 border-amber-600 text-white shadow-md shadow-amber-600/10"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full h-10 pl-10 pr-4 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:ring-1 focus:ring-amber-500 outline-none"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-premium p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover-3d flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest">
                  <Tag className="h-3 w-3" />
                  <span>{categories.find((c) => c.id === article.category)?.label}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug hover:text-amber-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  {article.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" /> By {article.author}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          No articles matched your search. Try adjusting filters.
        </div>
      )}
    </div>
  );
}
