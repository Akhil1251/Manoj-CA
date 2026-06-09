"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, Scale, FileText, Settings, Award } from "lucide-react";
import { motion } from "framer-motion";

interface ProblemCase {
  title: string;
  category: string;
  challenge: string;
  background: string;
  legalSections: string[];
  documentsNeeded: string[];
  stepsTaken: string[];
  outcome: string;
}

const casesData: Record<string, ProblemCase> = {
  freelancer: {
    title: "The Freelancer Tax Maze",
    category: "Individual & Presumptive Taxation",
    challenge: "Rohan, an independent software developer, received payments in USD and had no idea how to file taxes or if GST was applicable to exports.",
    background: "Rohan was earning over ₹35 Lakhs annually from US clients. He was advised by peers to register as a regular business, leading to fear of double taxation and complex monthly GSTR filings.",
    legalSections: [
      "Section 44ADA: Presumptive taxation for professionals, allowing tax on only 50% of gross receipts.",
      "Section 2(52) of CGST Act: Export of services rules requiring Letter of Undertaking (LUT) for 0% tax."
    ],
    documentsNeeded: [
      "Foreign Inward Remittance Certificates (FIRC)",
      "Bank statements showing receipt of USD/INR conversion",
      "PAN Card and Aadhaar Card"
    ],
    stepsTaken: [
      "Applied for GST registration under Export category.",
      "Filed Letter of Undertaking (LUT) to enable zero-rated tax invoices.",
      "Structured accounting records under Section 44ADA to optimize deductible expenses."
    ],
    outcome: "Saved Rohan over ₹4.5 Lakhs in annual taxes and eliminated monthly tax filing chores through structured LUT guidelines."
  },
  startup: {
    title: "Startup Funding & Audit Blocks",
    category: "Corporate Compliance",
    challenge: "A tech startup, FinGrowth, raised seed funding but was blocked from using the funds due to compliance backlogs and lack of share valuation certificate.",
    background: "FinGrowth secured ₹2 Crore in seed round but could not allot shares to investors because of a missing Valuation Certificate from a Registered Valuer under Section 56.",
    legalSections: [
      "Section 56(2)(viib) of Income Tax Act: Angel Tax valuation regulations.",
      "Rule 11UA of Income Tax Rules: DCF method verification rules."
    ],
    documentsNeeded: [
      "5-Year Project financial statements",
      "Shareholder agreement draft",
      "Statutory audit reports of preceding years"
    ],
    stepsTaken: [
      "Prepared Discounted Cash Flow (DCF) model signed by certified valuer.",
      "Completed statutory audit backlogs within 72 hours.",
      "Filed Form PAS-3 for allotment of shares with the MCA."
    ],
    outcome: "Funds were released from escrow, and investor shares were allotted on time, avoiding contract violation penalties."
  },
  "tax-notice": {
    title: "Income Tax Notice Representation",
    category: "Tax Litigation",
    challenge: "Sunita, a retired high-school teacher, got a scary tax notice for mismatched high-value savings deposits she made from her life savings.",
    background: "Sunita deposited ₹15 Lakhs cash into her bank account to purchase a house, which triggered a computer-aided notice under Section 143(2) for unexplained money.",
    legalSections: [
      "Section 143(2): Notice of scrutiny assessment.",
      "Section 68: Unexplained cash credits explanation criteria."
    ],
    documentsNeeded: [
      "Pension passbooks and savings ledger",
      "Retirement benefit disbursement proofs",
      "Previous 3 years ITR filings"
    ],
    stepsTaken: [
      "Analyzed the bank statement trail spanning 10 years of savings history.",
      "Drafted digital response with linked proofs of retirement receipts.",
      "Represented her before the virtual assessment cell."
    ],
    outcome: "The tax department accepted the explanation and closed the scrutiny without any tax demand or penalty."
  },
  "gst-trap": {
    title: "GST Compliance & ITC Recovery",
    category: "Indirect Taxation",
    challenge: "Vikram ran a manufacturing unit but his vendors weren't uploading invoices, resulting in massive blocked Input Tax Credit (ITC) and cash flow crunch.",
    background: "Vikram paid ₹12 Lakhs GST to his raw material vendors, but because they failed to upload GSTR-1, the credit did not appear in Vikram's GSTR-2B, blocking his claims.",
    legalSections: [
      "Section 16(4) of CGST Act: Conditions for claiming input tax credit.",
      "Rule 36(4): ITC matching restrictions."
    ],
    documentsNeeded: [
      "Purchase registers",
      "GSTR-2B auto-drafted statements",
      "Vendor purchase tax invoices & payment proofs"
    ],
    stepsTaken: [
      "Deployed auto-reconciliation code to highlight defaulting vendors.",
      "Sent automated legal compliance notices to subcontractor accounts.",
      "Represented Vikram during GST audit reviews to prevent penalty interest."
    ],
    outcome: "Recovered ₹11.2 Lakhs in blocked ITC credits, restoring cash flow margins."
  },
  "nri-tax": {
    title: "NRI Property Sales Tax Pain",
    category: "International Taxation",
    challenge: "Amit, living in the US, sold his ancestral property in Mumbai but was hit with a 20% TDS on the entire sale value.",
    background: "Amit sold his flat for ₹2 Crore. The buyer was required to deduct ₹40 Lakhs TDS. Amit needed liquid capital to purchase another home in the US within a strict timeline.",
    legalSections: [
      "Section 195: TDS on payments to non-residents.",
      "Section 54: Capital gains exemptions on residential property."
    ],
    documentsNeeded: [
      "Ancestral property purchase deeds (1995)",
      "Valuation report as of 2001 for indexation",
      "Form 13 application parameters"
    ],
    stepsTaken: [
      "Calculated indexed cost of acquisition to establish actual capital gains.",
      "Filed Form 13 with the IT department for a Lower TDS Certificate.",
      "Assisted in opening an NRO capital gains account."
    ],
    outcome: "TDS rate was reduced from 20% to just 3.2%, saving ₹33.6 Lakhs from being blocked in tax department refunds."
  },
  "corporate-restructuring": {
    title: "Corporate Demerger Strategy",
    category: "Restructuring Advisory",
    challenge: "A family business wanted to split into two entities but faced heavy stamp duty and capital gains liabilities.",
    background: "The promoters wanted to separate their hospitality division from the retail wing to onboard external investors.",
    legalSections: [
      "Section 2(19AA): Definition and conditions of a tax-neutral demerger.",
      "Section 47(vib): Transfer of capital assets in a demerger scheme."
    ],
    documentsNeeded: [
      "Audited accounts of the undertaking",
      "Valuation of assets of both divisions",
      "Promoter shareholding registry"
    ],
    stepsTaken: [
      "Drafted Scheme of Arrangement satisfying all demerger conditions.",
      "Obtained valuation certificates for assets and liabilities.",
      "Filed application before the National Company Law Tribunal (NCLT)."
    ],
    outcome: "Completed structural split into two entities with 100% tax exemption on capital gains and minimum stamp duty."
  },
  bookkeeping: {
    title: "E-Commerce Ledger Automation",
    category: "Accounting Systems",
    challenge: "An e-commerce seller had accounts scattered across Amazon, Shopify, and bank statements, making it impossible to know actual profit margins.",
    background: "The seller processed over 10,000 monthly transactions but spent 15 days every month manually reconciling accounts, leading to missed tax deadlines.",
    legalSections: [
      "Section 44AA: Maintenance of accounts requirements.",
      "Section 139: Due date compliance rules."
    ],
    documentsNeeded: [
      "Shopify/Amazon sales reports",
      "Payment gateway payout statement sheets",
      "Bank logs"
    ],
    stepsTaken: [
      "Integrated automated cloud bookkeeping syncing Shopify and Amazon APIs.",
      "Built digital rule sets mapping gateway fees and returns.",
      "Created real-time profit and margin dashboard."
    ],
    outcome: "Reduced monthly accounting closing time from 15 days to under 2 hours, boosting profit margin insight by 15%."
  },
  "gst-registration": {
    title: "GST Delayed Registration waiver",
    category: "Regulatory Filings",
    challenge: "A local logistics company crossed the threshold turnover but delayed GST registration, facing penalties and customer business losses.",
    background: "The logistics provider crossed ₹20 Lakhs turnover in November but applied for GST in March, triggering retrospective penalties and tax audits.",
    legalSections: [
      "Section 25: Procedure for GST registration.",
      "Section 122: Penalties for failure to register."
    ],
    documentsNeeded: [
      "Turnover records by month",
      "Director KYC files",
      "Registered office electricity bill & rental deeds"
    ],
    stepsTaken: [
      "Filed for voluntary registration and structured the turnover statement.",
      "Drafted representation showing reasonable cause for the delay.",
      "Represented client before local GST superintendent."
    ],
    outcome: "Obtained GSTIN within 48 hours and successfully secured a full waiver of retrospective late fees."
  }
};

export default function ProblemDetailPage() {
  const params = useParams();
  const caseId = params.id as string;
  const currentCase = casesData[caseId];

  if (!currentCase) {
    return (
      <div className="py-20 text-center text-slate-500 max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Case Scenario Not Found</h1>
        <Link href="/" className="text-indigo-500 hover:underline flex items-center justify-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
      <Link href="/" className="text-indigo-500 hover:underline flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-wider">
        <ArrowLeft className="h-4 w-4" /> Back to Home Scenarios
      </Link>

      <div className="space-y-10">
        {/* Header Section */}
        <div>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
            {currentCase.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            {currentCase.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed italic">
            "{currentCase.challenge}"
          </p>
        </div>

        {/* Deep analysis blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Case Background & Steps */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-premium p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-rose-500" /> Case Background & Context
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-semibold">
                {currentCase.background}
              </p>
            </div>

            <div className="glass-premium p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5 text-indigo-500" /> Detailed Action Steps We Took
              </h2>
              <ul className="space-y-3.5">
                {currentCase.stepsTaken.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal references & Documents */}
          <div className="lg:col-span-4 space-y-6">
            {/* Legal Framework */}
            <div className="glass p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Scale className="h-4 w-4 text-indigo-500" /> Legal Framework
              </h3>
              <ul className="space-y-3.5">
                {currentCase.legalSections.map((sec, idx) => (
                  <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {sec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents needed */}
            <div className="glass p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-indigo-500" /> Documents Evaluated
              </h3>
              <ul className="space-y-2.5">
                {currentCase.documentsNeeded.map((doc, idx) => (
                  <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400" /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome Badge */}
            <div className="p-5 rounded-2xl bg-indigo-600/5 dark:bg-indigo-950/20 border border-indigo-500/20">
              <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Award className="h-4 w-4 text-indigo-500" /> Case Outcome
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-bold leading-relaxed">
                {currentCase.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Free Consultation CTA */}
        <div className="glass-premium p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
            Facing a similar challenge?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            Let's evaluate your business ledger and compliance calendar. Book a callback with our taxation partners today.
          </p>
          <Link
            href={`/contact?query=Enquiry about case: ${currentCase.title}`}
            className="inline-flex h-11 items-center justify-center px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/15"
          >
            Request Case Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
