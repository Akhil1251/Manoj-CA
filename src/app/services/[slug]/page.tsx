"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { servicesData, SubSubService } from "@/data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  PhoneCall,
  ArrowLeft,
  Briefcase,
  ChevronDown,
  Check,
  X,
  FileCheck,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles,
  BarChart3,
  ListTodo
} from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  // Search for the service in the database
  let foundService: SubSubService | null = null;
  let parentCategoryTitle = "";
  let parentCategoryDescription = "";
  let parentCategoryId = "";
  let parentSubId = "";
  let parentSubService: any = null;

  for (const tab of servicesData) {
    for (const sub of tab.subServices) {
      if (sub.id === slug) {
        // Treat the subService as the single page and combine its subSubServices
        const combinedSections: any[] = sub.sections ? [...sub.sections] : [];
        const combinedFeatures: any[] = sub.features ? [...sub.features] : [];
        const combinedChecklist: any[] = sub.checklist ? [...sub.checklist] : [];
        const combinedFaqs: any[] = sub.faqs ? [...sub.faqs] : [];

        if (sub.subSubServices) {
          sub.subSubServices.forEach(sss => {
            if (sss.sections) {
              sss.sections.forEach((sec: any) => {
                combinedSections.push({ ...sec, _parentSlug: sss.slug });
              });
            }
            if (sss.features) combinedFeatures.push(...sss.features);
            if (sss.checklist) combinedChecklist.push(...sss.checklist);
            if (sss.faqs) {
              sss.faqs.forEach((faq: any) => {
                if (!combinedFaqs.some(f => f.question === faq.question)) {
                  combinedFaqs.push(faq);
                }
              });
            }
          });
        }

        // Use the first subSubService for chartData, timeline, etc. if available
        const firstSSS = sub.subSubServices ? (sub.subSubServices[0] || {} as any) : {} as any;

        foundService = {
          slug: sub.id,
          title: sub.title,
          shortDesc: sub.description,
          longDesc: sub.longDesc || (firstSSS.shortDesc ? `${firstSSS.shortDesc}\n\n${firstSSS.longDesc}` : sub.description),
          image: sub.image || firstSSS.image || "",
          timelineSteps: sub.timelineSteps || firstSSS.timelineSteps || [],
          sections: combinedSections,
          comparison: sub.comparison || firstSSS.comparison || [],
          checklist: combinedChecklist,
          chartData: sub.chartData || firstSSS.chartData || [],
          faqs: combinedFaqs,
          features: combinedFeatures,
          postSectionsDesc: sub.postSectionsDesc || firstSSS.postSectionsDesc || ""
        };
        parentCategoryTitle = tab.title;
        parentCategoryDescription = tab.description || "";
        parentCategoryId = tab.id;
        parentSubId = sub.id;
        parentSubService = sub;
        break;
      }

      const match = sub.subSubServices ? sub.subSubServices.find((s) => s.slug === slug) : null;
      if (match) {
        foundService = match;
        parentCategoryTitle = tab.title;
        parentCategoryDescription = tab.description || "";
        parentCategoryId = tab.id;
        parentSubId = sub.id;
        parentSubService = sub;
        break;
      }
    }
    if (foundService) break;
  }

  // Active step state for the interactive timeline
  const [activeStep, setActiveStep] = useState(0);

  // Document checklist checking state
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  // Active FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState<number>(0);

  // Expanded directory nodes
  const [openCategory, setOpenCategory] = useState<string | null>(parentCategoryId);
  const [openSub, setOpenSub] = useState<string | null>(parentSubId);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Helper to find all sub-service slugs in order
  const getSubServiceSlugs = () => {
    const list: string[] = [];
    servicesData.forEach((tab) => {
      tab.subServices.forEach((sub) => {
        if (sub.subSubServices && sub.subSubServices.length > 0 && sub.id !== "society-formation") {
          sub.subSubServices.forEach((sss) => {
            list.push(sss.slug);
          });
        } else {
          list.push(sub.id);
        }
      });
    });
    return list;
  };

  const subServiceSlugs = getSubServiceSlugs();
  const currentIndex = subServiceSlugs.indexOf(slug) !== -1 ? subServiceSlugs.indexOf(slug) : subServiceSlugs.indexOf(parentSubId);
  const nextSlug = currentIndex !== -1 ? subServiceSlugs[(currentIndex + 1) % subServiceSlugs.length] : "";

  // Reset checklist state when service changes
  useEffect(() => {
    setCheckedDocs({});
    setActiveStep(0);
    setActiveFaq(null);
    setActiveFaqCategory(0);
  }, [slug]);

  // Redirect parent sub-services to their first sub-sub-service
  useEffect(() => {
    if (foundService && parentSubId === slug && parentSubService?.subSubServices && parentSubService.subSubServices.length > 0) {
      if (parentSubId !== "society-formation") {
        router.replace(`/services/${parentSubService.subSubServices[0].slug}`);
      }
    }
  }, [slug, foundService, parentSubId, parentSubService, router]);

  // Scroll to hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [slug]);

  if (!foundService) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#120412] p-4 text-center">
        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white mb-2">Service Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md">
          The requested service compliance path does not exist or has been relocated.
        </p>
        <button
          onClick={() => router.push("/services")}
          className="inline-flex h-10 items-center justify-center px-6 rounded-xl bg-[#c79d62] text-white font-bold text-xs uppercase tracking-wider transition-transform hover:-translate-y-0.5"
        >
          Return to Services
        </button>
      </div>
    );
  }

  const steps = foundService.timelineSteps;
  const checklist = foundService.checklist || [];
  const checkedCount = Object.values(checkedDocs).filter(Boolean).length;
  const readinessPercentage = checklist.length > 0 ? Math.round((checkedCount / checklist.length) * 100) : 0;

  const toggleCheck = (idx: number) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const subSubCustomContent: Record<string, {
    title: string;
    summary: string;
  }> = {
    "cooperative-housing-society-registration": {
      title: "Co-operative Housing society registration",
      summary: "Establishing a Cooperative Housing Society involves organizing the promoter body, drafting the society's bye-laws, and preparing the necessary registration forms. We coordinate directly with the Registrar of Cooperative Societies, verify compliance with local statutory rules, and follow up to secure the registration certificate efficiently."
    },
    "builder-handover-assistance": {
      title: "Builder Handover Assistance",
      summary: "Managing the transition of assets and records from the developer to the housing society. We assist the Managing Committee in collecting structural designs, fire approvals, lift certificates, and municipal files, while auditing the builder's accounts, verifying flat allotment registers, and reviewing outstanding statutory obligations."
    },
    "first-general-body-meeting-gbm": {
      title: "First General Body Meeting (GBM)",
      summary: "The First General Body Meeting is the foundation of the society's self-governance. We help organize the meeting within the statutory timeframe, draft the formal notice and agenda, record and document resolutions, and guide the members in constituting the first Managing Committee and selecting its office bearers."
    },
    "society-election-planning": {
      title: "Society Election Planning",
      summary: "We assist societies in planning and organizing the entire election process, including election timelines, statutory requirements, member communication, and procedural compliance to ensure a seamless election experience"
    },
    "election-officer-coordination": {
      title: "Election Officer Coordination",
      summary: "Our team coordinates with authorized Election Officers and relevant authorities, facilitating the election process in accordance with applicable cooperative housing society regulations and election guidelines."
    },
    "voter-list-preparation": {
      title: "Voter List Preparation",
      summary: "A valid and accurate voter list is essential for fair elections. We assist in preparing, verifying, updating, and finalizing voter lists based on membership records and statutory requirements."
    },
    "election-documentation": {
      title: "Election Documentation",
      summary: "We prepare and manage all election-related documentation, including notices, nomination forms, scrutiny records, withdrawal forms, election proceedings, resolutions, and statutory records required during and after the election process."
    },
    "managing-committee-formation": {
      title: "Managing Committee Formation",
      summary: "Following the election process, we assist in the constitution of the Managing Committee, allocation of office bearers, preparation of committee records, and completion of post-election compliance requirements."
    },
    "agm-general-body-meeting-compliance": {
      title: "AGM & General Body Meeting Compliance",
      summary: "Annual General Meetings (AGMs) and Special General Body Meetings (SGBMs) require strict adherence to cooperative bye-laws. We assist the Managing Committee in drafting notices, preparing annual activity reports, compiling budgets, recording minutes, and documenting all general body resolutions."
    },
    "committee-meeting-compliance": {
      title: "Committee Meeting Compliance",
      summary: "Managing Committee meetings drive the day-to-day decisions of a housing society. We provide administrative support to draft monthly notices and agendas, record discussions, draft committee resolutions, and verify that decisions align with the society's bye-laws."
    },
    "maintenance-of-statutory-registers": {
      title: "Maintenance of Statutory Registers",
      summary: "Housing societies are legally mandated to maintain comprehensive registers of their members, assets, and transactions. We assist in auditing, updating, and maintaining critical records, including the Register of Members (I Register), the Register of Share Transfers (J Register), Nomination Registers, and Tenant Logs."
    },
    "statutory-audit-coordination-rectification": {
      title: "Statutory Audit Coordination & Audit Rectification Services",
      summary: "Addressing observations raised in the statutory audit is a vital governance duty. We coordinate with authorized auditors to complete the annual audit, prepare responses for auditor objections, and draft the Form O Audit Rectification Report for approval and submission to the Registrar."
    },
    "annual-compliance-calendar-management": {
      title: "Annual Compliance Calendar Management",
      summary: "We establish a structured calendar to track and manage the society's annual compliance deadlines. Our team handles the compilation and filing of the Annual Return (Form Y) with the Registrar, tracks audit due dates, and sends automated reminders for recurring compliance events."
    },
    "society-gst-compliance": {
      title: "GST Compliance Services",
      summary: "GST registration and filing are required for housing societies meeting specific collection thresholds. We manage the compilation of maintenance collection logs, reconcile input tax credit (ITC) against vendor invoices, and prepare monthly, quarterly, and annual GST returns."
    },
    "society-tds-compliance": {
      title: "TDS Compliance Services",
      summary: "Societies must deduct and deposit Tax Deducted at Source (TDS) on commercial vendor payments. We review contract agreements, compute TDS deductions, execute challan payments, and file quarterly TDS returns (Form 26Q) while generating Form 16A certificates."
    },
    "society-income-tax-compliance": {
      title: "Income Tax Compliance Services",
      summary: "Cooperative societies must comply with annual income tax filing regulations. We evaluate taxable receipts (such as mobile tower rentals, bank FD interest, and commercial incomes) under tax provisions, compute liability, and file the annual Income Tax Returns."
    },
    "society-internal-audit-book-review": {
      title: "Internal Audit & Book Review Services",
      summary: "Internal audits provide an independent health check of the society's financial transactions. We conduct periodic ledger reviews, verify maintenance collections, analyze bank reconciliations, check vendor invoices, and provide recommendations to strengthen financial controls."
    },
    "society-monthly-accounting-review": {
      title: "Monthly Accounting Review & Monitoring",
      summary: "Regular monitoring maintains financial discipline and transparent reporting. We verify monthly bookkeeping logs, track member maintenance collection status, reconcile bank accounts, and analyze budget variances to help the committee manage funds effectively."
    },
    "preliminary-redevelopment-assessment": {
      title: "Preliminary Redevelopment Assessment",
      summary: "Evaluating redevelopment feasibility is the first step in a major building project. We review land cards, conveyance deeds, structural audit reports, and local development rules to assess the building's redevelopment potential and compile initial feasibility checklists."
    },
    "redevelopment-compliance-review": {
      title: "Compliance Review",
      summary: "Redevelopment projects must align with strict statutory guidelines. We audit society registers, resolutions, and meeting minutes to ensure all procedural requirements (such as government directives) are fully satisfied."
    },
    "member-communication-support": {
      title: "Member Communication Support",
      summary: "Transparency is key to a successful redevelopment project. We support committees in organizing general body updates, preparing informational presentations on developer offers, and maintaining a structured log of member queries and consents."
    },
    "redevelopment-documentation-assistance": {
      title: "Documentation Assistance",
      summary: "We manage and catalog the extensive paperwork generated during a redevelopment project. Our team reviews developer bids, compiles project management consultant (PMC) tenders, drafts meeting notices, and updates member registries."
    },
    "redevelopment-financial-evaluation-support": {
      title: "Financial Evaluation Support",
      summary: "Reviewing commercial bids helps members make informed decisions. We prepare comparative sheets comparing corpus fund offers, shifting rents, bank guarantee terms, and commercial terms proposed by competing developers."
    },
    "noc-flat-transfer": {
      title: "NOC for Flat Transfer",
      summary: "We assist the society in processing No Objection Certificates (NOCs) for flat transfers. Our team verifies the transferor's membership files, checks outstanding maintenance collections, and prepares the legal NOC for flat registration."
    },
    "noc-sale-flat": {
      title: "NOC for Sale of Flat",
      summary: "Flat sale transactions require clean society records. We audit member ledger balances to verify no dues remain, draft the clearance certificates, and support the documentation required to execute property sales smoothly."
    },
    "noc-home-loans": {
      title: "NOC for Home Loans",
      summary: "Lenders require specific society NOCs before approving home loans. We verify property ownership files and share folio entries to draft mortgage confirmations and bank-approved NOC formats."
    },
    "noc-passport-verification": {
      title: "NOC for Passport Verification",
      summary: "We draft official residence and occupancy confirmations required by passport authorities, verifying membership registers, flat registries, and utility invoice files to confirm applicant details."
    },
    "membership-transfer-documentation": {
      title: "Membership Transfer Documentation",
      summary: "Admitting a new member requires processing statutory transfer packets. We prepare the transfer forms (such as Form 20A/20B), verify stamp duty payments, and update the society's member books."
    },
    "share-certificate-documentation": {
      title: "Share Certificate Documentation",
      summary: "We assist in updating and endorsing share certificates to reflect membership changes. This includes recording transfer folio numbers, printing certificates, and cross-matching entries against the member books."
    },
    "society-certificates-confirmations": {
      title: "Society Certificates & Confirmations",
      summary: "We prepare various certifications requested by members, banks, or government departments. This includes drafting no-dues confirmations, occupancy letters, and maintenance payout summaries."
    },
    "duplicate-share-certificate-assistance": {
      title: "Duplicate Share Certificate Assistance",
      summary: "Obtaining duplicate share certificates requires following a structured procedure. We guide members in preparing indemnity bonds, drafting newspaper advertisements, filing reports, and securing committee approvals."
    }
  };

  const renderSubSubContent = (hideTitle: boolean = false) => {
    const data = subSubCustomContent[slug];
    const title = data ? data.title : foundService!.title;
    const content = data ? data.summary : (foundService!.longDesc || foundService!.shortDesc);

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-left"
      >
        {!hideTitle && (
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-3">
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight max-w-none">
              {title}
            </h2>
          </div>
        )}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-semibold whitespace-pre-line text-left">
          {content}
        </p>
      </motion.div>
    );
  };

  const renderHeroHeader = () => {
    const isSubSub = slug !== parentSubId;
    const heroTitle = isSubSub ? foundService!.title : (parentSubService ? parentSubService.title : foundService!.title);
    const heroDesc = isSubSub ? foundService!.shortDesc : (parentSubService ? parentSubService.description : foundService!.shortDesc);

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 flex flex-col justify-center text-center space-y-3 sm:space-y-4 items-center"
      >
        <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          <Link href={`/services#${parentCategoryId}`} className="text-base sm:text-lg font-black uppercase text-[#c79d62] tracking-widest hover:text-[#e0b576] transition-colors">
            {parentCategoryTitle}
          </Link>
          {parentCategoryId === "society-management" ? (
            <>
              <h1 className="text-xl sm:text-3.5xl font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight leading-tight max-w-none">
                Your Trusted Partner for Housing Society Management & Compliance
              </h1>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-none whitespace-pre-line text-center">
                Focus on your community while we handle society compliance, governance, taxation, audits, documentation, and regulatory requirements with professional expertise.
              </p>
            </>
          ) : (parentCategoryId === "compliance-business-advisory" || parentCategoryId === "taxation-regulatory-litigation") ? (
            <>
              {parentCategoryDescription && !isSubSub && (
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-none whitespace-pre-line text-center mb-6">
                  {parentCategoryDescription}
                </p>
              )}
              <div className="w-full flex flex-col space-y-4 text-left mt-8">
                <h1 className="text-xl sm:text-3.5xl font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight leading-tight max-w-none border-b border-slate-200 dark:border-slate-800/80 pb-3">
                  {heroTitle}
                </h1>
                <div className="w-full text-left">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold max-w-none whitespace-pre-line">
                    {heroDesc}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full flex flex-col space-y-4 text-left">
              <h1 className="text-xl sm:text-3.5xl font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight leading-tight max-w-none border-b border-slate-200 dark:border-slate-800/80 pb-3">
                {heroTitle}
              </h1>
              <div className="w-full text-left">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold max-w-none whitespace-pre-line">
                  {heroDesc}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const renderComparisonMatrix = (accentColor: string) => {
    return null; // Commented out per user request
    /*
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="text-left">
          <h3 className="text-xl font-extrabold text-[#210821] dark:text-white tracking-tight">
            Comparison Analysis & Compliance Risk Matrix
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Understanding the operational trade-offs of self-management versus our certified advisory service:
          </p>
        </div>

        <div className="overflow-hidden border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-md bg-white dark:bg-[#180618]">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800/60 text-[11px] font-black uppercase text-slate-500 dark:text-slate-400">
                <th className="py-4 px-5">Performance Aspect</th>
                <th className="py-4 px-5 text-red-500 bg-red-50/10 dark:bg-red-950/5">Alternative / Manual</th>
                <th className="py-4 px-5 style={{ color: accentColor }} bg-amber-500/5">ConsultAvenuee Managed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-bold">
              {foundService!.comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/10 transition-colors">
                  <td className="py-4 px-5 text-[#210821] dark:text-white font-extrabold">{row.aspect}</td>
                  <td className="py-4 px-5 text-slate-500 dark:text-slate-400 bg-red-50/5 dark:bg-red-950/2">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{row.manual}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-slate-700 dark:text-slate-250 bg-amber-500/2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.consultAvenuee}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    );
    */
  };

  const renderVisualDataChart = (isRadial: boolean) => {
    return null; // Commented out per user request
    /*
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-[#180618] border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm text-left"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase text-[#c79d62] tracking-widest flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5" /> Service Analytics
          </span>
          <h3 className="text-xl font-extrabold text-[#210821] dark:text-white tracking-tight">
            Execution Workload Breakdown
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
            This data model provides a breakdown of resource allocation, highlighting where strategic focus reduces delays.
          </p>
          <div className="pt-2 space-y-2">
            {foundService!.chartData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-semibold border-b border-slate-100 dark:border-slate-900 pb-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                </div>
                <span className="font-extrabold" style={{ color: item.color }}>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center relative">
          {isRadial ? (
            <>
              {/* Radial Donut Visualization }
              <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 100 100">
                {(() => {
                  let accumulatedPercent = 0;
                  return foundService!.chartData.map((item, idx) => {
                    const strokeDash = `${item.value} ${100 - item.value}`;
                    const strokeOffset = 100 - accumulatedPercent + 25;
                    accumulatedPercent += item.value;
                    return (
                      <circle
                        key={idx}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke={item.color || "#c79d62"}
                        strokeWidth="10"
                        strokeDasharray={strokeDash}
                        strokeDashoffset={strokeOffset}
                        className="transition-all duration-700 ease-out hover:stroke-[11px] cursor-pointer"
                      />
                    );
                  });
                })()}
                <circle cx="50" cy="50" r="30" fill="transparent" className="fill-white dark:fill-[#180618]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-base font-black text-[#210821] dark:text-white">Active</span>
                <span className="text-[7px] font-black uppercase text-slate-400 tracking-widest mt-0.5">Assistance</span>
              </div>
            </>
          ) : (
            /* Stacked Progression Bars Visualization }
            <div className="w-full space-y-4">
              {foundService!.chartData.map((item, idx) => (
                <div key={idx} className="space-y-1 text-left">
                  <div className="flex justify-between text-[11px] font-bold">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-slate-400">{item.value}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color || "#c79d62" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
    */
  };

  const renderTimelineRoadmap = () => {
    return null; // Commented out per user request
    /*
    if (!steps || steps.length === 0) return null;
    return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-left">
        <h3 className="text-xl font-extrabold text-[#210821] dark:text-white tracking-tight">
          Execution Pathway & Milestone Roadmaps
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Our service execution follows these 4 distinct milestones to ensure speed and accuracy:
        </p>
      </div>

      <div className="relative mb-12 max-w-4xl mx-auto px-0">
        <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-[#c79d62]/30 dark:bg-[#c79d62]/20 -translate-y-1/2" />
        <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] -translate-y-1/2 overflow-hidden">
          <motion.div
            className="h-full bg-[#c79d62] origin-left"
            animate={{ width: `${(activeStep / 3) * 100}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          />
        </div>

        <div className="grid grid-cols-4 relative z-10">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex flex-col items-center focus:outline-none group cursor-pointer"
              >
                <motion.div
                  animate={{ scale: isActive ? 1.08 : 1.0 }}
                  transition={{ duration: 0.2 }}
                  className={`h-14 w-14 rounded-[18px] flex items-center justify-center mb-4 transition-all duration-300 relative ${isActive
                    ? "bg-[#210821] dark:bg-[#321232] border-2 border-[#c79d62] text-white shadow-[0_0_20px_rgba(158,128,85,0.35)] ring-4 ring-[#c79d62]/10"
                    : "bg-white dark:bg-[#1a0b1a] border-2 border-[#c79d62]/50 hover:border-[#c79d62] text-[#c79d62]"
                    }`}
                >
                  <Briefcase className={`h-5 w-5 transition-colors duration-300 ${isActive ? "text-white" : "text-[#c79d62]"
                    }`} />
                </motion.div>
                <span className={`text-[10px] font-black tracking-wider transition-colors duration-300 ${isActive ? "text-[#c79d62]" : "text-slate-400 dark:text-slate-500"
                  }`}>{step.num}</span>
                <h3 className={`font-extrabold text-[9px] sm:text-[11px] tracking-widest uppercase transition-colors duration-300 mt-1 max-w-[90px] text-center ${isActive ? "text-[#210821] dark:text-[#c79d62]" : "text-slate-400 dark:text-slate-500 group-hover:text-[#c79d62]"
                  }`}>{step.title}</h3>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-3xl mx-auto min-h-[140px] px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-10 rounded-[24px] bg-white dark:bg-[#160716] border border-slate-100 dark:border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c79d62]/3 rounded-full blur-2xl pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <h3 className="font-extrabold text-xl text-[#210821] dark:text-white mb-3 tracking-tight">
                  0{activeStep + 1}. {steps[activeStep].detailTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {steps[activeStep].desc}
                </p>
              </div>
              <div className="md:col-span-4 rounded-xl overflow-hidden h-24 sm:h-28 border border-slate-200/50 dark:border-slate-800">
                <img
                  src={
                    activeStep === 0 ? "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" :
                      activeStep === 1 ? "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80" :
                        activeStep === 2 ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" :
                          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
                  }
                  alt="Stage Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
  */
  };

  const renderDocumentChecklist = () => {
    return null; // Commented out per user request
    /*
    return (
      checklist.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#180618] border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5 text-left">
            <div>
              <h3 className="text-lg font-black text-[#210821] dark:text-white tracking-tight flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#c79d62]" />
                Prerequisites & Document Checklist
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select the documents you have on hand to verify your compliance readiness level:
              </p>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 rounded-2xl border border-slate-200/50 dark:border-slate-800">
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.91" fill="transparent" stroke="rgba(199, 157, 98, 0.15)" strokeWidth="2.5" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.91"
                    fill="transparent"
                    stroke="#c79d62"
                    strokeWidth="2.5"
                    strokeDasharray={`${readinessPercentage} ${100 - readinessPercentage}`}
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                <span className="absolute text-[10px] font-black text-[#c79d62]">{readinessPercentage}%</span>
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Readiness</span>
                <span className="text-xs font-black text-[#210821] dark:text-white mt-0.5 block">
                  {readinessPercentage === 100 ? "Ready to File!" : `${checkedCount} of ${checklist.length} Checked`}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {checklist.map((doc, idx) => {
              const isChecked = !!checkedDocs[idx];
              return (
                <button
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`flex items-center gap-3.5 p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${isChecked
                    ? "bg-[#c79d62]/5 border-[#c79d62] text-[#c79d62] shadow-[0_4px_20px_rgba(199,157,98,0.05)]"
                    : "bg-slate-50/50 dark:bg-slate-900/20 border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/40"
                    }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${isChecked ? "bg-[#c79d62] border-[#c79d62] text-white" : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950"
                    }`}>
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-xs font-semibold leading-snug">{doc}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )
    );
    */
  };

  const renderDetailedSections = () => {
    const isGrouped = parentCategoryId === "society-management" && parentSubService?.subSubServices;

    return (
      <div className="space-y-16">
        {foundService!.sections && foundService!.sections.length > 0 && (
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-3 text-left">
            <h3 className="text-xl sm:text-2.5xl font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight">
              Our Services Includes
            </h3>
          </div>
        )}
        {isGrouped ? (
          parentSubService.subSubServices.map((subSub: any, groupIdx: number) => {
            return (
              <div key={groupIdx} id={subSub.slug} className="space-y-8 scroll-mt-24">
                {/* Heading for this sub-service group */}
                <div className="border-b border-slate-200 dark:border-slate-800/80 pb-3 text-left">
                  <h3 className="text-xl sm:text-2.5xl font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight">
                    {subSub.title}
                  </h3>
                  {subSub.shortDesc && (
                    <p className="text-sm text-[#c79d62] dark:text-[#c79d62] font-semibold mt-1">
                      {subSub.shortDesc}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-left relative pl-8 sm:pl-12 ml-4 py-4">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-0 top-10 bottom-12 w-[2px] bg-gradient-to-b from-[#c79d62] via-[#c79d62]/50 to-transparent origin-top"
                  />
                  {subSub.sections.map((section: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.2) }}
                      className="relative group"
                    >
                      <div className="absolute left-[-43px] sm:left-[-59px] top-3 w-6 h-6 rounded-full bg-white dark:bg-[#120412] border-4 border-[#c79d62]/30 group-hover:border-[#c79d62] flex items-center justify-center transition-all duration-300 shadow-sm z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c79d62] group-hover:scale-125 transition-transform" />
                      </div>
                      <div className="bg-white dark:bg-[#180618] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#c79d62]/60">
                        <div className="space-y-2">
                          <h4 className="text-lg sm:text-xl font-black text-[#c79d62] leading-tight">
                            {section.title}
                          </h4>
                          {section.content && (
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-white leading-relaxed font-semibold whitespace-pre-line mt-1">
                              {section.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          foundService!.sections && foundService!.sections.length > 0 && (
            <div className="space-y-3 text-left relative pl-8 sm:pl-12 ml-4 py-4 mt-6">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 top-10 bottom-12 w-[2px] bg-gradient-to-b from-[#c79d62] via-[#c79d62]/50 to-transparent origin-top"
              />
              {foundService!.sections.map((section: any, idx: number) => (
                <React.Fragment key={idx}>
                  {section.groupHeader && (
                    <div className="pt-6 pb-2 -ml-8 sm:-ml-12 scroll-mt-24" id={section.groupHeader.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}>
                      <h3 className="text-lg sm:text-xl font-black text-[#c79d62] dark:text-[#c79d62] border-l-4 border-[#c79d62] pl-3">
                        {section.groupHeader}
                      </h3>
                    </div>
                  )}
                  <motion.div
                    id={section._parentSlug || section.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px 100px 0px" }}
                    transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.2) }}
                    className="relative group scroll-mt-24"
                  >
                    <div className="absolute left-[-43px] sm:left-[-59px] top-3 w-6 h-6 rounded-full bg-white dark:bg-[#120412] border-4 border-[#c79d62]/30 group-hover:border-[#c79d62] flex items-center justify-center transition-all duration-300 shadow-sm z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c79d62] group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="bg-white dark:bg-[#180618] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#c79d62]/60">
                      <div className="space-y-2">
                        <h4 className="text-lg sm:text-xl font-black text-[#c79d62] leading-tight">
                          {section.title}
                        </h4>
                        {section.content && (
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-white leading-relaxed font-semibold mt-1">
                            {renderFormattedText(section.content, "text-xs sm:text-sm text-slate-600 dark:text-white font-semibold")}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          )
        )}
        {foundService!.postSectionsDesc && (
          <div className="max-w-4xl text-left mt-8 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            {renderFormattedText(foundService!.postSectionsDesc)}
          </div>
        )}
      </div>
    );
  };

  const renderFeatures = () => {
    return null; // Commented out per user request
    /*
    const isGrouped = parentCategoryId === "society-management" && parentSubService?.subSubServices;

    if (isGrouped) return null;
    if (!foundService!.features || foundService!.features.length === 0) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#180618] border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm text-left space-y-6"
      >
        <div className="border-b border-slate-100 dark:border-slate-800/80 pb-5">
          <h3 className="text-lg font-black text-[#210821] dark:text-white tracking-tight flex items-center gap-2">
            Our Services Includes
          </h3>
        </div>

        <div className="space-y-8">
          {isGrouped ? (
            parentSubService.subSubServices.map((subSub: any, groupIdx: number) => {
              if (!subSub.features || subSub.features.length === 0) return null;
              return (
                <div key={groupIdx} className="space-y-4">
                  <h4 className="text-base font-extrabold text-[#210821] dark:text-white border-l-4 border-[#c79d62] pl-3">
                    {subSub.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subSub.features.map((feat: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200/40 dark:border-slate-800/40">
                        <Check className="w-4 h-4 text-[#c79d62] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {foundService!.features?.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200/40 dark:border-slate-800/40">
                  <Check className="w-4 h-4 text-[#c79d62] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
    */
  };

  const renderFAQs = () => {
    if (!foundService!.faqs || foundService!.faqs.length === 0) return null;

    const groupedFaqs: { heading: string, faqs: any[] }[] = [];
    let currentGroup = { heading: "General", faqs: [] as any[] };

    foundService!.faqs.forEach((faq: any) => {
      if (faq.isHeading) {
        if (currentGroup.faqs.length > 0) {
          groupedFaqs.push(currentGroup);
        }
        currentGroup = { heading: faq.question.replace(' FAQs', ''), faqs: [] };
      } else {
        currentGroup.faqs.push(faq);
      }
    });
    if (currentGroup.faqs.length > 0) {
      groupedFaqs.push(currentGroup);
    }

    const hasTabs = groupedFaqs.length > 1;
    const activeGroupIndex = activeFaqCategory < groupedFaqs.length ? activeFaqCategory : 0;
    const activeGroup = groupedFaqs[activeGroupIndex];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-[#180618] border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6 text-left"
      >
        <div className="border-b border-slate-100 dark:border-slate-800/80 pb-5">
          <h3 className="text-lg font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight flex items-center gap-2">
            Frequently Asked Questions
          </h3>
        </div>

        {hasTabs && (
          <div className="flex overflow-x-auto pb-4 mb-2 gap-2 scrollbar-hide">
            {groupedFaqs.map((group, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveFaqCategory(idx);
                  setActiveFaq(null);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${activeGroupIndex === idx
                    ? "bg-[#c79d62] text-white shadow-md shadow-[#c79d62]/20"
                    : "bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                  }`}
              >
                {group.heading}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {activeGroup.faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/10"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#c79d62] dark:text-[#c79d62] hover:bg-slate-100/50 dark:hover:bg-slate-900/20 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#c79d62] font-black shrink-0">{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="p-5 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#1c081c] text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  const renderFormattedText = (text: string, customClass: string = "text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium") => {
    return text.split('\n').map((line, idx) => {
      if (line.trim() === '') return <br key={idx} />;
      if (line.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-lg sm:text-xl font-extrabold text-[#c79d62] dark:text-[#c79d62] tracking-tight mt-6 mb-2">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('#### ')) {
        return (
          <h4 key={idx} className="text-base sm:text-lg font-bold text-[#c79d62] dark:text-[#c79d62] tracking-tight mt-4 mb-2">
            {line.replace('#### ', '')}
          </h4>
        );
      }

      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className={`${customClass} leading-relaxed text-left`}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-extrabold text-[#210821] dark:text-white">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  const renderCategoryLayout = () => {
    const isSubSub = slug !== parentSubId;
    switch (parentCategoryId) {
      // 1. Housing Society Management -> Layout Type A
      case "society-management":
        const isGroupedLayout = parentSubService && parentSubService.subSubServices && parentSubService.subSubServices.length > 0;
        return (
          <>
            {renderHeroHeader()}
            {isGroupedLayout ? renderSubSubContent() : (
              <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 mb-12 flex flex-col space-y-4 text-left">
                <h2 className="text-2xl sm:text-3.5xl font-black text-[#c79d62] dark:text-[#c79d62] tracking-tight leading-tight mb-2">
                  {foundService!.title}
                </h2>
                {foundService!.longDesc && (
                  <div className="text-left w-full space-y-1">
                    {renderFormattedText(foundService!.longDesc)}
                  </div>
                )}
              </div>
            )}
            {renderDetailedSections()}
            {!isGroupedLayout && (
              <>
                {renderComparisonMatrix("#c79d62")}
                {renderDocumentChecklist()}
                {renderVisualDataChart(false)}
                {renderTimelineRoadmap()}
              </>
            )}
          </>
        );

      // 2. Business Compliance -> Layout Type B (Swapped orders, Radial chart off)
      case "compliance-business-advisory":
        return (
          <>
            {renderHeroHeader()}
            {renderDetailedSections()}
            {(parentSubId !== "company-formation" && parentSubId !== "registrations" && parentSubId !== "corporate-compliance" && parentSubId !== "virtual-cfo" || isSubSub) && (
              <>
                {renderVisualDataChart(false)}
                {renderComparisonMatrix("#110311")}
                {renderDocumentChecklist()}
                {renderTimelineRoadmap()}
              </>
            )}
          </>
        );

      // 3. Taxation & Regulatory -> Layout Type C (Chart first, Table last)
      case "taxation-regulatory-litigation":
        return (
          <>
            {renderHeroHeader()}
            {isSubSub && (subSubCustomContent[slug] || foundService!.longDesc) && renderSubSubContent(true)}
            {renderDetailedSections()}
            {isSubSub && (
              <>
                {renderComparisonMatrix("#c79d62")}
                {renderDocumentChecklist()}
                {renderVisualDataChart(false)}
                {renderTimelineRoadmap()}
              </>
            )}
          </>
        );

      case "nri-services":
      case "senior-citizen-advisory":
        return (
          <>
            {renderHeroHeader()}
            {renderSubSubContent(true)}
            {renderDetailedSections()}
          </>
        );
      default:
        return (
          <>
            {renderHeroHeader()}
            {renderSubSubContent()}
            {renderDetailedSections()}
            {renderComparisonMatrix("#c79d62")}
            {renderDocumentChecklist()}
            {renderVisualDataChart(false)}
            {renderTimelineRoadmap()}
          </>
        );
    }
  };

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#120412] min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Back Bar */}
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#c79d62] dark:text-slate-400 transition-colors group cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
          <span className="text-slate-300 dark:text-slate-800">|</span>
          <Link
            href="/services"
            className="text-xs font-bold text-slate-500 hover:text-[#c79d62] dark:text-slate-400 transition-colors"
          >
            All Services
          </Link>
          <span className="text-slate-300 dark:text-slate-800">|</span>
          <Link
            href="/"
            className="text-xs font-bold text-slate-500 hover:text-[#c79d62] dark:text-slate-400 transition-colors"
          >
            Home
          </Link>
          {nextSlug && (
            <>
              <span className="text-slate-300 dark:text-slate-800">|</span>
              <Link
                href={`/services/${nextSlug}`}
                className="text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <span>Next</span>
                <span className="text-[10px]">➔</span>
              </Link>
            </>
          )}
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">

          {/* LEFT COLUMN - SERVICE CONTENT */}
          <div className="lg:col-span-9 space-y-12">
            {renderCategoryLayout()}
            {(parentSubId !== "company-formation" && parentSubId !== "registrations" || slug !== parentSubId) && (
              <>
                {renderFeatures()}
              </>
            )}
            {renderFAQs()}
          </div>

          {/* RIGHT COLUMN - SIDEBAR WIDGETS (STICKY) */}
          <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-28">

            {/* Interactive Services Directory Tree with fixed inner scroll box */}
            <div className="bg-white dark:bg-[#180618] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm space-y-5">
              <h4 className="text-sm font-black uppercase tracking-widest text-[#210821] dark:text-[#c79d62] border-b border-slate-100 dark:border-slate-800/50 pb-2">
                Services Directory
              </h4>

              <div className="space-y-3 max-h-[calc(100vh-320px)] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-transparent">
                {servicesData.map((tab) => {
                  const isCatOpen = openCategory === tab.id;
                  return (
                    <div key={tab.id} className="space-y-2">
                      <div className="w-full flex items-center justify-between text-[13px] font-black uppercase tracking-wider py-2 transition-colors text-left">
                        <a href={`/services#${tab.id}`} className={`flex-grow ${isCatOpen ? "text-[#c79d62]" : "text-slate-700 dark:text-slate-400 hover:text-[#c79d62]"}`}>
                          {tab.title}
                        </a>
                        <button
                          onClick={() => setOpenCategory(isCatOpen ? null : tab.id)}
                          className={`p-1 focus:outline-none cursor-pointer ${isCatOpen ? "text-[#c79d62]" : "text-slate-700 dark:text-slate-400 hover:text-[#c79d62]"}`}
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {isCatOpen && (
                        <div className="pl-3 border-l border-slate-100 dark:border-slate-800/80 space-y-2.5 py-1.5">
                          {tab.subServices.map((sub) => {
                            const isSubOpen = openSub === sub.id || (parentSubService && parentSubService.id === sub.id);
                            return (
                              <div
                                key={sub.id}
                                className="space-y-1.5"
                                onMouseEnter={() => {
                                  if (sub.subSubServices && sub.subSubServices.length > 0) {
                                    setOpenSub(sub.id);
                                  }
                                }}
                                onMouseLeave={() => setOpenSub(null)}
                              >
                                  <div className="w-full flex items-center justify-between">
                                    <Link
                                      href={`/services/${sub.subSubServices && sub.subSubServices.length > 0 && sub.id !== "society-formation" ? sub.subSubServices[0].slug : sub.id}`}
                                      className={`flex-grow text-[12px] font-extrabold py-1.5 transition-colors text-left focus:outline-none cursor-pointer ${sub.id === slug || (parentSubService && parentSubService.id === sub.id) ? "text-[#c79d62]" : "text-slate-600 dark:text-slate-400 hover:text-[#c79d62]"}`}
                                    >
                                      <span>{sub.title}</span>
                                    </Link>
                                    {(tab.id === 'taxation-regulatory-litigation' || tab.id === 'compliance-business-advisory') && sub.subSubServices && sub.subSubServices.length > 1 && (
                                      <button
                                        onClick={() => setOpenSub(openSub === sub.id ? null : sub.id)}
                                        className={`p-1 focus:outline-none cursor-pointer ${isSubOpen ? "text-[#c79d62]" : "text-slate-600 dark:text-slate-400 hover:text-[#c79d62]"}`}
                                      >
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSubOpen ? "rotate-180" : ""}`} />
                                      </button>
                                    )}
                                  </div>

                                  {(tab.id === 'taxation-regulatory-litigation' || tab.id === 'compliance-business-advisory' || tab.id === 'nri-services' || tab.id === 'senior-citizen-advisory') && isSubOpen && sub.subSubServices && sub.subSubServices.length > 1 && (
                                    <div className="pl-3 border-l border-slate-100 dark:border-slate-800/80 space-y-1.5 py-1">
                                      {sub.subSubServices.map((sss: any) => (
                                        <Link
                                          key={sss.slug}
                                          href={`/services/${sss.slug}`}
                                          className={`block w-full text-[11px] font-bold py-1 transition-colors text-left ${sss.slug === slug ? "text-[#c79d62]" : "text-slate-500 dark:text-slate-500 hover:text-[#c79d62]"}`}
                                        >
                                          {sss.title}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>



            {/* How Can We Help You Box */}
            <div className="bg-[#c79d62] text-white p-7 rounded-md relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h4 className="text-base font-bold lowercase tracking-tight mb-2">how can we help you?</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Looking for expert assistance with housing society matters, GST, Income Tax, ROC compliance or NRI services? Contact ConsultAvenuee today.
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#110311] hover:bg-slate-100 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm w-full cursor-pointer"
              >
                <PhoneCall className="w-3 h-3 text-[#c79d62]" />
                Book Free Consultation
              </button>
            </div>

          </div>

        </div>
      </div>
      <BookConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
