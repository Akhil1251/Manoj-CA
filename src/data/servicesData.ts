export interface TimelineStep {
  num: string;
  title: string;
  detailTitle: string;
  desc: string;
}

export interface SubSubService {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  timelineSteps: TimelineStep[];
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

export const servicesData: ServiceTab[] = [
  {
    id: "advisory",
    title: "Business Advisory",
    subServices: [
      {
        id: "company-formation",
        title: "Company Formation",
        price: "₹4,999",
        badge: "NEW",
        description: "Assisting startup founders and foreign businesses in establishing compliant legal entities in India.",
        subSubServices: [
          {
            slug: "private-limited-company-registration",
            title: "Private Limited Company Registration",
            shortDesc: "The most popular legal structure for high-growth startups and raising capital.",
            longDesc: "A Private Limited Company registration is the preferred choice for businesses looking to scale rapidly, raise equity capital, and offer stock options to employees. It provides limited liability protection to its shareholders, maintains a separate legal identity, and enhances corporate credibility with customers and lenders.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "DSC & DIN", detailTitle: "Digital Signature & Director ID", desc: "We obtain Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for all proposed directors." },
              { num: "02", title: "NAME APPROVAL", detailTitle: "RUN Name Reservation", desc: "We submit unique name choices to the Ministry of Corporate Affairs (MCA) for official clearance." },
              { num: "03", title: "FILING SPICe+", detailTitle: "SPICe+ Incorporation Form", desc: "We draft and file the Articles of Association (AOA) and Memorandum of Association (MOA) on SPICe+." },
              { num: "04", title: "PAN & TAN", detailTitle: "Final PAN/TAN Delivery", desc: "We retrieve the Certificate of Incorporation alongside your PAN and TAN to set up corporate bank accounts." }
            ]
          },
          {
            slug: "llp-registration",
            title: "LLP Registration",
            shortDesc: "Combining corporate flexibility with partnership simplicity.",
            longDesc: "Limited Liability Partnerships (LLPs) offer the benefits of a corporate structure while retaining the internal operational flexibility of partnership firms. It is an excellent choice for professional consultancies, service providers, and family-owned businesses.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "DSC OBTAINING", detailTitle: "Obtaining Partner DSCs", desc: "We register Digital Signatures for all designated partners." },
              { num: "02", title: "NAME RUN", detailTitle: "LLP Name Clearance", desc: "We secure name approvals through the MCA portal using the RUN-LLP utility." },
              { num: "03", title: "FILLING FiLLiP", detailTitle: "Incorporation Documentation", desc: "We submit the FiLLiP form and pay the statutory registration fees." },
              { num: "04", title: "AGREEMENT", detailTitle: "Filing LLP Agreement", desc: "We draft the LLP agreement outlining partner shares and file Form 3 within 30 days." }
            ]
          },
          {
            slug: "partnership-firm-registration",
            title: "Partnership Firm Registration",
            shortDesc: "Traditional structured partnership model for small scale operations.",
            longDesc: "A Partnership Firm registration is a traditional framework governed by the Indian Partnership Act, 1932. It is ideal for small businesses, retail shops, and local trade operations with minimal compliance overheads.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "DEED DRAFT", detailTitle: "Drafting Partnership Deed", desc: "We draft the partnership deed outlining capital share, profit-sharing ratio, and duties." },
              { num: "02", title: "STAMP DUTY", detailTitle: "Notarization & Stamp Duty", desc: "We execute the partnership deed on statutory stamp paper and notarize it." },
              { num: "03", title: "ROF FILING", detailTitle: "Registrar of Firms Application", desc: "We file the registration forms with the local Registrar of Firms (ROF) in your state." },
              { num: "04", title: "TAX PAN", detailTitle: "PAN Card Issuance", desc: "We apply for the firm's dedicated PAN and TAN cards to initiate operations." }
            ]
          },
          {
            slug: "public-limited-company-registration",
            title: "Public Limited Company Registration",
            shortDesc: "Structured for large scale organizations wishing to raise funds publicly.",
            longDesc: "Public Limited Companies are structured for large-scale operations requiring substantial capital. They have the capability to issue shares to the general public, list on stock exchanges, and have no limit on the maximum number of shareholders.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "7 DIRECTORS", detailTitle: "Assemble Directors & DINs", desc: "Ensure a minimum of 7 shareholders and 3 directors receive DSC and DIN approvals." },
              { num: "02", title: "NAME AUDIT", detailTitle: "Reserve Public Limited Name", desc: "Obtain name reservations ending with 'Limited'." },
              { num: "03", title: "STATUTORY MOA", detailTitle: "File Public SPICe+", desc: "Draft complex Articles of Association and Memorandum of Association matching public offer capabilities." },
              { num: "04", title: "COMMENCE", detailTitle: "Declaration of Commencement", desc: "Obtain the Certificate of Commencement of Business after verifying share subscriptions." }
            ]
          },
          {
            slug: "trust-registration",
            title: "Trust Registration",
            shortDesc: "Setting up private or public charitable trusts for social welfare.",
            longDesc: "Establishing a Trust is the most effective way to secure assets, run educational or religious institutions, and undertake philanthropic activities. We assist with private family trusts for estate planning as well as public charitable trusts.",
            image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "TRUST DEED", detailTitle: "Drafting the Trust Deed", desc: "We draft the trust deed detailing objectives, trustees, and asset allocations." },
              { num: "02", title: "REGISTRATION", detailTitle: "Sub-Registrar Filing", desc: "We coordinate with the local sub-registrar for the registration of the trust deed." },
              { num: "03", title: "PAN CARD", detailTitle: "Trust PAN/TAN Setup", desc: "We apply for a dedicated PAN card for the trust." },
              { num: "04", title: "12A & 80G", detailTitle: "Tax Exempt Approvals", desc: "We process applications for 12A and 80G registrations with the Income Tax department for donation exemptions." }
            ]
          },
          {
            slug: "indian-subsidiary-for-foreign-entrepreneurs",
            title: "Indian Subsidiary for Foreign Entrepreneurs",
            shortDesc: "Complete structural entry for foreign MNCs expanding to India.",
            longDesc: "Expanding operations to India represents a massive market opportunity. We manage compliance, FDI regulations, FEMA rules, and the complete incorporation of your Indian Wholly-Owned Subsidiary.",
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "FDI ADVISORY", detailTitle: "FDI & FEMA Assessment", desc: "We analyze automatic vs approval routes for foreign direct investment." },
              { num: "02", title: "KYC VERIFY", detailTitle: "Apostille & KYC Verification", desc: "We help verify foreign directors' credentials and apostille company charter documents." },
              { num: "03", title: "REGISTRATION", detailTitle: "MCA Incorporation Filing", desc: "We incorporate the Indian entity as a Wholly-Owned Subsidiary." },
              { num: "04", title: "RBI COMPLY", detailTitle: "FC-GPR filing with RBI", desc: "We report the inward remittance of foreign capital to the Reserve Bank of India within 30 days." }
            ]
          }
        ]
      },
      {
        id: "registrations",
        title: "Registrations",
        price: "₹1,999",
        badge: "SPECIAL",
        description: "Obtaining mandatory licenses and statutory registrations from federal and state departments.",
        subSubServices: [
          {
            slug: "shop-and-establishment-registration",
            title: "Shop & Establishment Registration",
            shortDesc: "Basic commercial license for operating physical retail stores or offices.",
            longDesc: "The Shop and Establishment Act license is a mandatory registration for all commercial establishments, shops, and offices. It regulates working hours, employee wages, and working conditions in the commercial sector.",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "DOCS COLLECT", detailTitle: "Document Compilation", desc: "Gather utility bills, rental agreements, and proprietor details." },
              { num: "02", title: "PORTAL APPLY", detailTitle: "State Government Filing", desc: "Submit the registration details on the respective state labor department portal." },
              { num: "03", title: "FEE PAYMENT", detailTitle: "Statutory Fee Clearance", desc: "Pay the government fees according to the number of employees." },
              { num: "04", title: "DELIVERY", detailTitle: "License Issuance", desc: "Retrieve the official certificate within 7-10 working days." }
            ]
          },
          {
            slug: "startup-india-registration",
            title: "Startup India Registration",
            shortDesc: "Unlock DPIIT tax exemptions, capital access, and government tenders.",
            longDesc: "DPIIT recognition under the Startup India initiative unlocks massive benefits including 3 years of income tax holiday (Section 80-IAC), relaxed public procurement rules, self-certification under labor laws, and access to seed funding pools.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "ELIGIBILITY", detailTitle: "Startup Assessment", desc: "We check corporate age, innovation indices, and turnover ceilings." },
              { num: "02", title: "PITCH WRITING", detailTitle: "Write Pitch & Write-up", desc: "We draft the startup business write-up highlighting innovation and job creation." },
              { num: "03", title: "DPIIT PORTAL", detailTitle: "Filing Recognition Form", desc: "We upload company details on the Startup India portal for DPIIT review." },
              { num: "04", title: "TAX SHIELD", detailTitle: "80-IAC Tax Exemption Application", desc: "We coordinate with the Inter-Ministerial Board to obtain tax exemption certificates." }
            ]
          }
        ]
      },
      {
        id: "corporate-compliance",
        title: "Corporate Compliance & Secretarial",
        price: "₹9,999",
        badge: "HOT",
        description: "Year-round company secretarial maintenance, board minutes, and Ministry of Corporate Affairs filings.",
        subSubServices: [
          {
            slug: "mca-annual-compliance",
            title: "MCA Annual Compliance",
            shortDesc: "Mandatory yearly filings to avoid heavy director disqualification penalties.",
            longDesc: "Every registered corporate entity must file financial statements and annual returns with the Registrar of Companies (ROC) under the Ministry of Corporate Affairs. Failure to comply leads to severe daily late fees and risk of active director disqualification.",
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "AUDIT SIGN", detailTitle: "Closing & Auditing Accounts", desc: "We coordinate with auditors to finalize Balance Sheets and Profit & Loss ledgers." },
              { num: "02", title: "AGM MINUTES", detailTitle: "Drafting AGM Resolutions", desc: "We compile minutes of the Annual General Meeting approving financial records." },
              { num: "03", title: "FORM AOC-4", detailTitle: "Filing Financial Statements", desc: "We draft and upload Form AOC-4 within 30 days of the AGM." },
              { num: "04", title: "FORM MGT-7", detailTitle: "Filing Annual Return", desc: "We compile shareholdings and file Form MGT-7 within 60 days of the AGM." }
            ]
          }
        ]
      },
      {
        id: "virtual-cfo",
        title: "Virtual CFO Services",
        price: "₹19,999",
        badge: "SPECIAL",
        description: "Part-time strategic financial guidance, dynamic forecasting, and board-level reporting.",
        subSubServices: [
          {
            slug: "virtual-cfo-services",
            title: "Virtual CFO (vCFO) Services",
            shortDesc: "Boardroom-level financial wisdom without the overhead cost of a full-time CFO.",
            longDesc: "High-growth startups and mid-market companies require seasoned financial leadership to navigate cash flow management, investor reporting, unit economics optimization, and fundraising strategy. Our Virtual CFO package delivers this executive expertise on a flexible, fractional basis.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "DIAGNOSTIC", detailTitle: "Unit Economics Diagnostic", desc: "We analyze operational margins, monthly burn rates, and working capital cycles." },
              { num: "02", title: "FORECASTING", detailTitle: "Dynamic Cash Forecasting", desc: "We build forward-looking scenario models (base, best, and worst-case plans)." },
              { num: "03", title: "DASHBOARDS", detailTitle: "Real-time Dashboard Setup", desc: "We integrate bookkeeping tools into a visual, interactive executive dashboard." },
              { num: "04", title: "BOARD EXEC", detailTitle: "Board Room Representation", desc: "We represent your financial interests directly during investor calls and board presentations." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tax",
    title: "Taxation Services",
    subServices: [
      {
        id: "gst-filing",
        title: "GST Filing & Advisory",
        price: "₹1,499",
        badge: "HOT",
        description: "Monthly and quarterly GST filing, GSTR-2B reconciliation, and input tax credit optimization.",
        subSubServices: [
          {
            slug: "gst-filing-advisory",
            title: "GST Filing & Advisory",
            shortDesc: "Prevent blocked ITC and ensure flawless compliance records.",
            longDesc: "Navigating GST requires strict invoice reconciliation, timely returns filing (GSTR-1, GSTR-3B), and active tracking of supplier compliance. We deploy automated tools to ensure your input tax credit is never lost or disputed by department checks.",
            image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fa98?auto=format&fit=crop&w=800&q=80",
            timelineSteps: [
              { num: "01", title: "DATA RECON", detailTitle: "Sales & Purchase Review", desc: "We reconcile your ERP sales books against active vendor GSTR-2B credit logs." },
              { num: "02", title: "GSTR-1 FILE", detailTitle: "Filing Outward Supplies", desc: "We draft and upload GSTR-1 by the 11th of every month." },
              { num: "03", title: "GSTR-3B FILE", detailTitle: "Filing Tax Return Summary", desc: "We calculate net payable tax and submit GSTR-3B returns by the 20th." },
              { num: "04", title: "ANNUAL AUDIT", detailTitle: "Form GSTR-9 Filing", desc: "We compile and verify the annual GST return for audit assurance." }
            ]
          }
        ]
      }
    ]
  }
];
