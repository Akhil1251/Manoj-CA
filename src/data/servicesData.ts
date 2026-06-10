export interface TimelineStep {
  num: string;
  title: string;
  detailTitle: string;
  desc: string;
}

export interface ComparisonPoint {
  aspect: string;
  manual: string;
  consultAvenuee: string;
}

export interface SectionDetail {
  title: string;
  content: string;
  image: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface SubSubService {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  timelineSteps: TimelineStep[];
  sections: SectionDetail[];
  comparison: ComparisonPoint[];
  checklist: string[];
  chartData: ChartDataPoint[];
}

export interface SubService {
  id: string;
  title: string;
  price?: string;
  badge?: "NEW" | "SPECIAL" | "HOT";
  description: string;
  subSubServices: SubSubService[];
}

export interface ServiceTab {
  id: string;
  title: string;
  subServices: SubService[];
}

// Raw data interface for the builder
interface RawSubSub {
  slug: string;
  title: string;
  shortDesc?: string;
  longDesc?: string;
  image?: string;
  timelineSteps?: TimelineStep[];
}

interface RawSub {
  id: string;
  title: string;
  price?: string;
  badge?: "NEW" | "SPECIAL" | "HOT";
  description: string;
  subSubServices: RawSubSub[];
}

interface RawTab {
  id: string;
  title: string;
  subServices: RawSub[];
}

const rawServicesData: RawTab[] = [
  {
    id: "society-management",
    title: "Housing Society Management",
    subServices: [
      {
        id: "society-formation",
        title: "Society Formation & Registration",
        price: "₹14,999",
        badge: "NEW",
        description: "Professional support for society registration, handovers, and inaugural general body meetings.",
        subSubServices: [
          { slug: "cooperative-housing-society-registration", title: "Co-operative Housing Society Registration" },
          { slug: "builder-handover-assistance", title: "Builder Handover Assistance" },
          { slug: "first-general-body-meeting-gbm", title: "First General Body Meeting (GBM)" }
        ]
      },
      {
        id: "society-elections",
        title: "Society Elections & Committee Formation",
        price: "₹9,999",
        description: "Liaisoning, voting preparation, election planning, and formal committee constitutions.",
        subSubServices: [
          { slug: "society-election-planning", title: "Society Election Planning" },
          { slug: "election-officer-coordination", title: "Election Officer Coordination" },
          { slug: "voter-list-preparation", title: "Voter List Preparation" },
          { slug: "election-documentation", title: "Election Documentation" },
          { slug: "managing-committee-formation", title: "Managing Committee Formation" }
        ]
      },
      {
        id: "society-compliance",
        title: "Society Compliance & Secretarial Services",
        price: "₹7,999",
        description: "Comprehensive secretarial compliance, statutory registers, and audit rectifications.",
        subSubServices: [
          { slug: "agm-general-body-meeting-compliance", title: "AGM & General Body Meeting Compliance" },
          { slug: "committee-meeting-compliance", title: "Committee Meeting Compliance" },
          { slug: "maintenance-of-statutory-registers", title: "Maintenance of Statutory Registers" },
          { slug: "statutory-audit-coordination-rectification", title: "Statutory Audit Coordination & Audit Rectification Services" },
          { slug: "annual-compliance-calendar-management", title: "Annual Compliance Calendar Management" }
        ]
      },
      {
        id: "society-taxation",
        title: "Taxation, Audit & Accounting Services",
        price: "₹4,999/mo",
        badge: "SPECIAL",
        description: "GST, TDS, Income Tax returns, internal audits, and monthly book reviews.",
        subSubServices: [
          { slug: "society-gst-compliance", title: "GST Compliance Services" },
          { slug: "society-tds-compliance", title: "TDS Compliance Services" },
          { slug: "society-income-tax-compliance", title: "Income Tax Compliance Services" },
          { slug: "society-internal-audit-book-review", title: "Internal Audit & Book Review Services" },
          { slug: "society-monthly-accounting-review", title: "Monthly Accounting Review & Monitoring" }
        ]
      },
      {
        id: "society-redevelopment",
        title: "Redevelopment Advisory Support",
        price: "₹49,999",
        description: "Preliminary assessment, PMC coordination, documentation, and member communication.",
        subSubServices: [
          { slug: "preliminary-redevelopment-assessment", title: "Preliminary Redevelopment Assessment" },
          { slug: "redevelopment-compliance-review", title: "Compliance Review" },
          { slug: "member-communication-support", title: "Member Communication Support" },
          { slug: "redevelopment-documentation-assistance", title: "Documentation Assistance" },
          { slug: "redevelopment-financial-evaluation-support", title: "Financial Evaluation Support" }
        ]
      },
      {
        id: "society-docs",
        title: "Society Documentation & Certification Services",
        price: "₹3,999",
        description: "Hassle-free Flat/Sale NOCs, home loans, share certificates, and duplicates.",
        subSubServices: [
          { slug: "noc-flat-transfer", title: "NOC for Flat Transfer" },
          { slug: "noc-sale-flat", title: "NOC for Sale of Flat" },
          { slug: "noc-home-loans", title: "NOC for Home Loans" },
          { slug: "noc-passport-verification", title: "NOC for Passport Verification" },
          { slug: "membership-transfer-documentation", title: "Membership Transfer Documentation" },
          { slug: "share-certificate-documentation", title: "Share Certificate Documentation" },
          { slug: "society-certificates-confirmations", title: "Society Certificates & Confirmations" },
          { slug: "duplicate-share-certificate-assistance", title: "Duplicate Share Certificate Assistance" }
        ]
      }
    ]
  },
  {
    id: "nri-services",
    title: "NRI Services",
    subServices: [
      {
        id: "nri-advisory",
        title: "NRI Support Services",
        price: "₹14,999",
        badge: "HOT",
        description: "Specialized NRI tax filings, property monitoring, FEMA advisory, and legal setups.",
        subSubServices: [
          { slug: "nri-taxation-services", title: "Taxation Services" },
          { slug: "nri-property-management-services", title: "Property Management Services" },
          { slug: "nri-legal-services", title: "Legal Services" }
        ]
      }
    ]
  },
  {
    id: "senior-citizen-advisory",
    title: "Senior Citizen Advisory Services",
    subServices: [
      {
        id: "senior-advisory",
        title: "Senior Citizen Advisory Services",
        price: "₹4,999",
        badge: "SPECIAL",
        description: "Pension paperwork, insurance claim processing, senior tax filing, and estate planning.",
        subSubServices: [
          { slug: "health-insurance-claims-support", title: "Health Insurance Claims Support" },
          { slug: "senior-income-tax-filing", title: "Income Tax planning & Filing" },
          { slug: "pension-gratuity-documentations", title: "Pension & Gratuity Documentations" },
          { slug: "property-sale-gift-transfer", title: "Property sale, Gift & Transfer" },
          { slug: "senior-legal-estate-succession", title: "Legal, Estate & Succession" }
        ]
      }
    ]
  },
  {
    id: "compliance-business-advisory",
    title: "Compliance & Business Advisory",
    subServices: [
      {
        id: "company-formation",
        title: "Company Formation",
        price: "₹4,999",
        badge: "NEW",
        description: "Establish compliant legal entities including Private Limited, LLP, Partnerships, and Trusts.",
        subSubServices: [
          { slug: "private-limited-company-registration", title: "Private Limited Company Registration" },
          { slug: "llp-registration", title: "LLP Registration" },
          { slug: "partnership-firm-registration", title: "Partnership Firm Registration" },
          { slug: "public-limited-company-registration", title: "Public Limited Company Registration" },
          { slug: "trust-registration", title: "Trust Registration" },
          { slug: "indian-subsidiary-foreign-entrepreneurs", title: "Indian Subsidiary for Foreign Entrepreneurs" }
        ]
      },
      {
        id: "registrations",
        title: "Registrations",
        price: "₹1,999",
        badge: "SPECIAL",
        description: "Obtaining mandatory licenses and statutory registrations from federal and state departments.",
        subSubServices: [
          { slug: "shop-and-establishment-registration", title: "Shop & Establishment Registration" },
          { slug: "startup-india-registration", title: "Startup India Registration" },
          { slug: "msme-udyam-registration", title: "MSME/Udyam Registration" },
          { slug: "pf-registration", title: "PF Registration" },
          { slug: "esic-registration", title: "ESIC Registration" },
          { slug: "trade-license", title: "Trade License" },
          { slug: "ngo-darpan-registration", title: "NGO Darpan Registration" },
          { slug: "trademark-registration", title: "Trademark Registration" },
          { slug: "import-export-code", title: "Import Export Code (IEC)" },
          { slug: "iso-certification", title: "ISO Certification" },
          { slug: "fssai-registration", title: "FSSAI Registration" }
        ]
      },
      {
        id: "corporate-compliance",
        title: "Corporate Compliance & Secretarial Services",
        price: "₹9,999",
        badge: "HOT",
        description: "ROC filings, statutory registers, minutes, resolutions, and general AGM compliance.",
        subSubServices: [
          { slug: "mca-annual-compliance", title: "MCA Annual Compliance" },
          { slug: "roc-filings", title: "ROC Filings" },
          { slug: "maintenance-of-statutory-registers-records", title: "Maintenance of Statutory Registers & Records" },
          { slug: "agm-egm-bm-compliance-minutes-resolutions", title: "AGM & EGM, BM Compliance, Minutes & Resolutions" }
        ]
      },
      {
        id: "virtual-cfo",
        title: "Virtual CFO (vCFO) Services",
        price: "₹19,999",
        description: "Part-time strategic financial guidance, dynamic forecasting, and board-level reporting.",
        subSubServices: [
          { slug: "virtual-cfo-services", title: "Virtual CFO (vCFO) Services" }
        ]
      }
    ]
  },
  {
    id: "taxation-regulatory-litigation",
    title: "Taxation, Regulatory compliances & Litigation",
    subServices: [
      {
        id: "income-tax",
        title: "Income Tax",
        price: "₹2,999",
        badge: "HOT",
        description: "Returns filing, auditing reports, TDS filings, 12A/80G status, and strategic advisory.",
        subSubServices: [
          { slug: "income-tax-returns", title: "Income Tax Returns" },
          { slug: "tax-audit", title: "Tax Audit" },
          { slug: "tds-tcs-returns", title: "TDS/TCS Returns" },
          { slug: "registration-under-12a-80g", title: "Registration under 12A & 80G" },
          { slug: "pan-tan-applications", title: "PAN/TAN Applications" },
          { slug: "tax-planning-advisory", title: "Tax Planning & Advisory" }
        ]
      },
      {
        id: "gst",
        title: "GST",
        price: "₹1,499",
        description: "GST registration, monthly returns filing, and optimization advisory.",
        subSubServices: [
          { slug: "gst-registration-returns", title: "GST Registration & Returns" }
        ]
      },
      {
        id: "regulatory-registrations",
        title: "Regulatory Registrations",
        price: "₹1,999",
        description: "State level professional tax returns, shop establishment licenses, and food permits.",
        subSubServices: [
          { slug: "professional-tax-registration-returns", title: "Professional Tax Registration & Returns" },
          { slug: "shop-establishment-regulatory", title: "Shop & Establishment Registration" },
          { slug: "startup-india-regulatory", title: "Startup India Registration" },
          { slug: "msme-udyam-regulatory", title: "MSME/Udyam Registration" },
          { slug: "pf-regulatory", title: "PF Registration" },
          { slug: "esic-regulatory", title: "ESIC Registration" },
          { slug: "trade-license-regulatory", title: "Trade License" },
          { slug: "ngo-darpan-regulatory", title: "NGO Darpan Registration" },
          { slug: "trademark-regulatory", title: "Trademark Registration" },
          { slug: "import-export-regulatory", title: "Import Export Code (IEC)" },
          { slug: "iso-regulatory", title: "ISO Certification" },
          { slug: "fssai-regulatory", title: "FSSAI Registration" }
        ]
      },
      {
        id: "litigation-support",
        title: "Litigation Support",
        price: "₹24,999",
        badge: "SPECIAL",
        description: "Technical briefing, notice replies, appeals preparation, and conferencing with counsels.",
        subSubServices: [
          { slug: "conferencing-senior-tax-counsels-litigation-support", title: "Conferencing with Senior Tax Counsels & Litigation Support" },
          { slug: "preparation-of-paper-books-case-records", title: "Preparation of Paper Books & Case Records" }
        ]
      }
    ]
  }
];

// Helper images depending on main category
const getCategoryImage = (tabId: string): string => {
  switch (tabId) {
    case "society-management":
      return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
    case "nri-services":
      return "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80";
    case "senior-citizen-advisory":
      return "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80";
    case "compliance-business-advisory":
      return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80";
    case "taxation-regulatory-litigation":
    default:
      return "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80";
  }
};

// Builder function to resolve and populate fields dynamically
export const servicesData: ServiceTab[] = rawServicesData.map(tab => ({
  id: tab.id,
  title: tab.title,
  subServices: tab.subServices.map(sub => ({
    id: sub.id,
    title: sub.title,
    price: sub.price,
    badge: sub.badge,
    description: sub.description,
    subSubServices: sub.subSubServices.map(subSub => {
      const defaultShort = `Comprehensive professional support for ${subSub.title}.`;
      const defaultLong = `Manoj CA offers expert guidance and complete handling of ${subSub.title}. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.`;
      
      const defaultTimeline: TimelineStep[] = [
        { num: "01", title: "CONSULTATION", detailTitle: "Initial Briefing & Check", desc: `We discuss details regarding ${subSub.title} and review all checklists.` },
        { num: "02", title: "VERIFICATION", detailTitle: "Document Compilation", desc: "Our specialists check all details to ensure compliance and completeness." },
        { num: "03", title: "SUBMISSION", detailTitle: "Filing and Liaisoning", desc: "We prepare the forms and submit the applications to the regulatory department." },
        { num: "04", title: "COMPLETION", detailTitle: "Final Approval & Support", desc: "We deliver the certificates, resolve queries, and outline next-step requirements." }
      ];

      // Determine dynamic sections (needs 3 extra sections for 3-4 sections total, or let's say sections contains 3 items)
      const defaultSections: SectionDetail[] = [
        {
          title: "Service Scope & Standards",
          content: `Our professionals ensure a thorough audit and preparation process for ${subSub.title}. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.`,
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Regulatory Oversight & Risk Mitigation",
          content: `With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks associated with ${subSub.title}. We actively track timeline calendars, address authority queries, and prevent delay penalties.`,
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Strategic Advisory & Post-Compliance Benefits",
          content: `Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.`,
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
        }
      ];

      // Dynamic Comparison
      let defaultComparison: ComparisonPoint[] = [];
      if (tab.id === "society-management") {
        defaultComparison = [
          { aspect: "Operational Efficiency", manual: "Manual tracking takes weeks, prone to member-managing committee friction.", consultAvenuee: "Structured digital handling by housing society experts." },
          { aspect: "Compliance Accuracy", manual: "High risk of statutory notices or fines due to missed dates.", consultAvenuee: "Zero-error draft verification and active calendar alert monitoring." },
          { aspect: "Government Liaisoning", manual: "Requires multiple physical visits to DDR, cooperative registrar offices.", consultAvenuee: "Complete departmental representation and digital submission handling." }
        ];
      } else if (tab.id === "compliance-business-advisory") {
        defaultComparison = [
          { aspect: "Incorporation Timeline", manual: "30 to 45 days due to name rejection or document query loops.", consultAvenuee: "Swift execution in 7-10 working days with pre-checks." },
          { aspect: "Document Quality", manual: "Drafting complicated MOA/AOA manually or using generic templates.", consultAvenuee: "Custom drafting tailored to business structure by CA/CS professionals." },
          { aspect: "Post-Compliance Support", manual: "Need to separately source PAN/TAN, GST registration, bank setups.", consultAvenuee: "All-in-one bundle including registrations, accounts, and tax calendars." }
        ];
      } else if (tab.id === "taxation-regulatory-litigation") {
        defaultComparison = [
          { aspect: "Audit Safety", manual: "High risk of assessment notices or classification disputes.", consultAvenuee: "Thorough review of books, ledger verification, and pre-audit filters." },
          { aspect: "Penalty Mitigation", manual: "Prone to high interest, late filing fees, and blockages.", consultAvenuee: "Proactive compliance updates, reminders, and structured timelines." },
          { aspect: "Representation Support", manual: "Struggles in drafting replies or conferencing with authorities.", consultAvenuee: "Drafting paper books and representation by senior tax counsels." }
        ];
      } else if (tab.id === "nri-services") {
        defaultComparison = [
          { aspect: "Distance & Time Barrier", manual: "Requires heavy travel, paperwork, and courier delays.", consultAvenuee: "100% remote digital verification and Power of Attorney coordination." },
          { aspect: "Taxation & DTAA Laws", manual: "Double taxation on investments, FEMA non-compliance risks.", consultAvenuee: "Optimized tax structures under Double Taxation Avoidance Agreements." },
          { aspect: "Asset Protection", manual: "Difficult to track tenants, handle flat transfer documents from afar.", consultAvenuee: "Local verification, tenant handling, and registrar representation." }
        ];
      } else {
        defaultComparison = [
          { aspect: "Ease of Access", manual: "Struggle with online portals, complicated document uploads.", consultAvenuee: "Dedicated support team, at-home collection, or assisted calls." },
          { aspect: "Claim & File Veracity", manual: "Minor errors lead to rejection of pension filings or health claims.", consultAvenuee: "Pre-submission audit of medical and estate records." },
          { aspect: "Succession Processing", manual: "Unclear legal drafting leads to dispute loops in flat transfers.", consultAvenuee: "Precise drafting of Wills, gift deeds, and certified registration." }
        ];
      }

      // Dynamic Checklist
      let defaultChecklist: string[] = [];
      if (tab.id === "society-management") {
        defaultChecklist = ["Managing Committee Resolution Copy", "Updated Copy of Registered Bye-Laws", "List of Members with Share Allotments", "Application form signed by Chairman/Secretary", "PAN Card & Registration Certificate of the society"];
      } else if (tab.id === "nri-services") {
        defaultChecklist = ["Valid Indian Passport / OCI / PIO card", "Copy of Visa / Foreign residence permit", "Indian PAN Card copy", "NRO/NRE Bank Account statement (last 6 months)", "Signed Power of Attorney (PoA) document"];
      } else if (tab.id === "senior-citizen-advisory") {
        defaultChecklist = ["Aadhaar Card & PAN Card copy", "Pension Account Booklet / PPO copy", "Original medical insurance policy bond & discharge summaries", "Property ownership title deeds & mutation certificate", "Nomination detail forms"];
      } else if (tab.id === "compliance-business-advisory") {
        defaultChecklist = ["Aadhaar & PAN cards of all directors/partners", "Passport size photographs of promoters", "Proposed business names (2-3 names in order of preference)", "Proof of registered office address (electricity/utility bill)", "NOC from property owner"];
      } else {
        defaultChecklist = ["PAN Card / TAN Certificate copy", "GST Registration certificate (if applicable)", "Bank Account Statements for the full financial year", "Form 16 / Form 16A TDS certificates", "Previous year's ITR acknowledgement file"];
      }

      // Dynamic Chart Data
      let defaultChartData: ChartDataPoint[] = [];
      if (tab.id === "compliance-business-advisory") {
        defaultChartData = [
          { label: "Name & DSC Approval", value: 25, color: "#c79d62" },
          { label: "Document Verification", value: 20, color: "#110311" },
          { label: "Government Filing", value: 35, color: "#e5c595" },
          { label: "Final Certification", value: 20, color: "#c79d62" }
        ];
      } else if (tab.id === "taxation-regulatory-litigation") {
        defaultChartData = [
          { label: "Document Collection", value: 20, color: "#c79d62" },
          { label: "Ledger Reconciliation", value: 30, color: "#110311" },
          { label: "Tax Liability Check", value: 25, color: "#e5c595" },
          { label: "Return Submission", value: 25, color: "#c79d62" }
        ];
      } else if (tab.id === "society-management") {
        defaultChartData = [
          { label: "Bylaw Verification", value: 15, color: "#c79d62" },
          { label: "Member Coordination", value: 25, color: "#110311" },
          { label: "Authority Liaisoning", value: 40, color: "#e5c595" },
          { label: "Registry Execution", value: 20, color: "#c79d62" }
        ];
      } else {
        defaultChartData = [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ];
      }

      return {
        slug: subSub.slug,
        title: subSub.title,
        shortDesc: subSub.shortDesc || defaultShort,
        longDesc: subSub.longDesc || defaultLong,
        image: subSub.image || getCategoryImage(tab.id),
        timelineSteps: subSub.timelineSteps || defaultTimeline,
        sections: defaultSections,
        comparison: defaultComparison,
        checklist: defaultChecklist,
        chartData: defaultChartData
      };
    })
  }))
}));
