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

export interface FAQItem {
  question: string;
  answer: string;
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
  faqs?: FAQItem[];
  features?: string[];
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
  description?: string;
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
  sections?: SectionDetail[];
  comparison?: ComparisonPoint[];
  checklist?: string[];
  chartData?: ChartDataPoint[];
  features?: string[];
}

interface RawSub {
  id: string;
  title: string;
  price?: string;
  badge?: "NEW" | "SPECIAL" | "HOT";
  description: string;
  subSubServices: RawSubSub[];
  faqs?: FAQItem[];
}

interface RawTab {
  id: string;
  title: string;
  description?: string;
  subServices: RawSub[];
}

// FAQs lists for society categories
const formationFAQs: FAQItem[] = [
  { question: "What is a Cooperative Housing Society?", answer: "A Cooperative Housing Society is a legally registered body formed by flat owners or property owners for the purpose of managing, maintaining, and administering residential premises and common facilities collectively." },
  { question: "When should a housing society be registered?", answer: "A housing society is generally registered after a prescribed number of purchasers have taken possession of their units and the eligibility conditions under applicable cooperative society laws are fulfilled." },
  { question: "What documents are required for society registration?", answer: "The required documents may include property documents, agreements for sale, occupancy certificates, member details, promoter applications, builder documents, and other statutory records as prescribed by the Registrar of Cooperative Societies." },
  { question: "How long does the society registration process take?", answer: "The timeline depends on the completeness of documents, regulatory approvals, and authority processing. Professional assistance helps expedite the process and avoid delays." },
  { question: "What is builder handover?", answer: "Builder handover is the process through which the developer transfers possession, records, assets, common facilities, contracts, and management responsibilities to the registered housing society." },
  { question: "Why is builder handover important?", answer: "A proper handover ensures that the society receives all essential documents, approvals, financial records, and property-related information required for effective management and future legal protection." },
  { question: "What are society bye-laws?", answer: "Society bye-laws are the rules and regulations governing the administration, maintenance, rights, duties, and conduct of members and office bearers within a cooperative housing society." },
  { question: "Can society bye-laws be amended?", answer: "Yes. Bye-laws can be amended subject to approval by the society members and the relevant cooperative authorities as per applicable regulations." },
  { question: "What is a Managing Committee?", answer: "The Managing Committee is the elected governing body responsible for the day-to-day administration, financial management, maintenance, and compliance activities of the housing society." },
  { question: "How is the Managing Committee formed?", answer: "The Managing Committee is formed through elections conducted in accordance with the applicable cooperative housing society laws, rules, and bye-laws." },
  { question: "Can a newly formed society outsource compliance and management activities?", answer: "Yes. Societies can engage professional consultants for compliance management, accounting, statutory documentation, legal advisory, elections, audits, and governance support." },
  { question: "How can ConsultAvenuee assist our housing society?", answer: "We provide comprehensive support for society registration, builder handover, bye-law advisory, committee formation, compliance management, governance advisory, documentation, and other housing society-related services." }
];

const electionFAQs: FAQItem[] = [
  { question: "How often should society elections be conducted?", answer: "The election schedule depends on the applicable cooperative society laws and the tenure of the Managing Committee prescribed under the society's bye-laws." },
  { question: "Who is eligible to vote in society elections?", answer: "Generally, members whose names are duly recorded in the society's membership register and who meet the eligibility requirements can participate in the voting process." },
  { question: "What is the role of an Election Officer?", answer: "The Election Officer oversees and supervises the election process to ensure transparency, fairness, and compliance with applicable regulations." },
  { question: "Why is voter list preparation important?", answer: "An accurate voter list ensures that only eligible members participate in the election process, reducing disputes and maintaining election integrity." },
  { question: "What documents are required during society elections?", answer: "Documents may include election notices, voter lists, nomination forms, scrutiny records, withdrawal forms, ballot records, election results, and post-election resolutions." },
  { question: "What happens after the election results are declared?", answer: "Following the declaration of results, the Managing Committee is formally constituted, office bearers are appointed, and post-election compliance requirements are completed." },
  { question: "Who can become a Managing Committee member?", answer: "Eligibility depends on the provisions of the applicable cooperative housing society laws, society bye-laws, and statutory regulations." },
  { question: "Can election results be challenged?", answer: "Election disputes may be raised through the appropriate legal or regulatory mechanisms as prescribed under applicable cooperative society laws." },
  { question: "What are the key responsibilities of the Managing Committee?", answer: "The Managing Committee is responsible for administration, maintenance, financial management, statutory compliance, member welfare, vendor management, and overall governance of the society." },
  { question: "How can ConsultAvenuee assist our society?", answer: "We provide comprehensive support for election planning, voter list preparation, election documentation, authority coordination, committee formation, and post-election compliance to ensure a transparent and legally compliant election process." }
];

const complianceFAQs: FAQItem[] = [
  { question: "What are Statutory Compliance & Governance Services for a Housing Society?", answer: "These services help Cooperative Housing Societies comply with legal, regulatory, and governance requirements, including AGM compliance, committee meetings, statutory register maintenance, annual filings, audits, and Registrar compliance." },
  { question: "Is conducting an Annual General Meeting (AGM) mandatory?", answer: "Yes. Every Cooperative Housing Society is required to conduct an AGM within the prescribed timelines and complete all related compliance requirements." },
  { question: "What documents are required for an AGM?", answer: "AGM documentation generally includes AGM Notice, Agenda, Audited Financial Statements, Secretary's Annual Report, Budget, Auditor's Report, Resolutions, Attendance Records, and AGM Minutes." },
  { question: "What is a Special General Body Meeting (SGBM)?", answer: "An SGBM is a meeting called to discuss specific matters requiring approval of members, such as redevelopment, major repairs, policy decisions, or bye-law amendments." },
  { question: "Why are Managing Committee meetings important?", answer: "Managing Committee meetings are essential for decision-making, financial management, maintenance planning, vendor approvals, compliance monitoring, and overall governance of the society." },
  { question: "What are statutory registers?", answer: "Statutory registers are mandatory records maintained by the society to record membership, shareholding, nominations, assets, investments, tenancy details, and other important governance information." },
  { question: "What is Form Y?", answer: "Form Y is the Annual Return filed with the Registrar containing details relating to society activities, financial statements, AGM compliance, membership information, audit details, and governance records." },
  { question: "Is Form Y filing mandatory every year?", answer: "Yes. Eligible Cooperative Housing Societies are required to submit annual returns and prescribed information to the Registrar within the stipulated timelines." },
  { question: "What is Form O?", answer: "Form O is the Audit Rectification Report submitted after the statutory audit, detailing corrective actions taken against audit observations and recommendations." },
  { question: "Why is Form O important?", answer: "Form O demonstrates that the society has reviewed audit observations and taken appropriate corrective actions to improve compliance and governance." },
  { question: "Is a statutory audit mandatory for housing societies?", answer: "Yes. Cooperative Housing Societies are generally required to undergo an annual statutory audit conducted by an authorized auditor." },
  { question: "What is audit rectification?", answer: "Audit rectification is the process of addressing deficiencies, observations, or irregularities identified during the statutory audit and implementing corrective measures." },
  { question: "What happens if audit observations are not rectified?", answer: "Failure to address audit observations may result in compliance issues, governance concerns, Registrar notices, and difficulties during inspections or redevelopment projects." },
  { question: "What is Annual Compliance Management?", answer: "Annual Compliance Management involves tracking and managing all recurring compliance obligations, including AGMs, audits, annual returns, statutory registers, committee meetings, and Registrar filings." },
  { question: "What is a Compliance Calendar?", answer: "A Compliance Calendar helps societies monitor important due dates and statutory obligations, reducing the risk of missed deadlines and regulatory non-compliance." },
  { question: "What are the consequences of non-compliance?", answer: "Non-compliance may lead to penalties, notices from authorities, audit qualifications, governance challenges, member disputes, and regulatory action." },
  { question: "Can societies outsource compliance and governance activities?", answer: "Yes. Many housing societies appoint professional consultants to manage compliance, documentation, audits, Registrar filings, governance records, and statutory requirements." },
  { question: "How can ConsultAvenuee assist our society?", answer: "ConsultAvenuee provides end-to-end support for AGM and SGBM compliance, committee meeting management, statutory register maintenance, Form Y and Form O filing, audit coordination, audit rectification, compliance calendar management, and overall society governance support." }
];

const taxationFAQs: FAQItem[] = [
  { question: "When is GST registration required for a housing society?", answer: "GST registration may become necessary when the society meets the prescribed conditions under GST laws. A compliance review can help determine registration requirements." },
  { question: "What GST returns are required to be filed by a registered society?", answer: "Depending on the registration category and applicable provisions, societies may be required to file monthly, quarterly, and annual GST returns." },
  { question: "What are TDS returns?", answer: "TDS returns are periodic statements filed with the Income Tax Department containing details of taxes deducted and deposited on behalf of vendors and service providers." },
  { question: "Is Income Tax Return filing mandatory for housing societies?", answer: "Yes. Cooperative Housing Societies are generally required to file Income Tax Returns, even if certain receipts may qualify under the principle of mutuality or other applicable provisions." },
  { question: "What types of income may be taxable for a housing society?", answer: "Taxability depends on the nature of income. Certain receipts such as interest income, rental income, advertisement income, mobile tower income, and other non-member income may require tax evaluation." },
  { question: "What is an Internal Audit?", answer: "An Internal Audit is an independent review of the society's financial records, transactions, controls, and compliance practices to identify risks and improve governance." },
  { question: "How is an Internal Audit different from a Statutory Audit?", answer: "A Statutory Audit is a mandatory annual audit conducted under applicable cooperative laws, whereas an Internal Audit focuses on reviewing internal controls, processes, financial management, and risk areas." },
  { question: "What does an Internal Audit cover?", answer: "An Internal Audit may cover Accounting Records, Ledger Scrutiny, Expense Verification, Maintenance Collections, Vendor Payments, Bank Reconciliations, Fund Utilization, Compliance Review, and Financial Controls." },
  { question: "Why is Bank Reconciliation important?", answer: "Bank reconciliation helps ensure that society accounting records match bank statements and assists in identifying errors, omissions, or unauthorized transactions." },
  { question: "Can housing societies outsource accounting and tax compliance?", answer: "Yes. Many societies engage professional consultants for bookkeeping, GST compliance, TDS compliance, Income Tax filing, internal audits, and financial reviews." },
  { question: "How can ConsultAvenuee assist our housing society?", answer: "ConsultAvenuee provides end-to-end support for GST compliance, TDS compliance, Income Tax filings, accounting reviews, internal audits, financial reporting, tax advisory, and ongoing financial governance support, helping societies maintain transparency, compliance, and financial discipline." }
];

const redevelopmentFAQs: FAQItem[] = [
  { question: "What is a redevelopment assessment?", answer: "A redevelopment assessment is a preliminary evaluation of a society's eligibility and potential for redevelopment based on factors such as building age, condition, land potential, and applicable regulations." },
  { question: "Why is compliance review important in redevelopment?", answer: "A compliance review helps identify regulatory requirements, documentation gaps, and procedural obligations to ensure the redevelopment process is carried out smoothly and in accordance with applicable laws." },
  { question: "How can you assist with member communication?", answer: "We help societies prepare notices, presentations, meeting agendas, and communication materials to keep members informed and promote transparency throughout the redevelopment process." },
  { question: "What type of documentation support do you provide?", answer: "We assist in organizing and reviewing society records, resolutions, meeting minutes, notices, member registers, and other documents required during redevelopment." },
  { question: "Do you help evaluate redevelopment proposals?", answer: "Yes. We assist societies in reviewing and comparing redevelopment proposals from a financial and commercial perspective, helping members understand the benefits and implications of each offer." },
  { question: "Can you help societies before appointing a developer?", answer: "Yes. Our advisory services begin at the initial stage, helping societies assess redevelopment feasibility, review documentation, and understand the overall redevelopment process." },
  { question: "Do you provide legal or technical approvals?", answer: "No. We provide advisory and support services. Statutory approvals and technical certifications are obtained through qualified architects, engineers, legal professionals, and other authorized experts." },
  { question: "How do you help maintain transparency during redevelopment?", answer: "We support proper documentation, structured communication, record maintenance, and member engagement to ensure transparency throughout the redevelopment journey." },
  { question: "Can small housing societies also benefit from redevelopment advisory services?", answer: "Yes. Societies of all sizes can benefit from professional guidance in assessing redevelopment opportunities, managing documentation, and making informed decisions." },
  { question: "Why should a society engage a redevelopment advisor?", answer: "A redevelopment advisor helps societies navigate complex redevelopment processes, manage documentation efficiently, evaluate proposals objectively, and ensure that members receive reliable guidance throughout the project." }
];

const docsFAQs: FAQItem[] = [
  { question: "What is a Society NOC?", answer: "A Society No Objection Certificate (NOC) is an official document issued by the society confirming that it has no objection to a particular transaction or activity, subject to applicable rules and requirements." },
  { question: "When is a NOC required for the sale of a flat?", answer: "An NOC may be required by buyers, financial institutions, legal professionals, or other stakeholders during a property transaction, depending on applicable regulations and society procedures." },
  { question: "Can a society issue a NOC for a home loan?", answer: "Yes. Societies may issue NOCs or confirmations required by banks and financial institutions after verifying the member's records and compliance status." },
  { question: "What documents are required for membership transfer?", answer: "Requirements may vary, but generally include transfer forms, sale documents, application forms, identity proof, nomination details, and other documents prescribed by the society." },
  { question: "What is a share certificate?", answer: "A share certificate is a legal document issued by a co-operative housing society that evidences a member's ownership interest and membership in the society." },
  { question: "When should a share certificate be updated?", answer: "Share certificates should be updated whenever there is a transfer of ownership, membership change, correction of details, or other approved modifications in society records." },
  { question: "What should a member do if the share certificate is lost?", answer: "The member should immediately inform the society and follow the prescribed procedure for obtaining a duplicate share certificate, including submission of required declarations and supporting documents." },
  { question: "How long does the duplicate share certificate process take?", answer: "The timeline depends on the society's procedures, verification requirements, and completion of statutory formalities. Proper documentation helps expedite the process." },
  { question: "Can societies issue certificates for passport verification?", answer: "Yes. Subject to verification of records, societies may issue residence or occupancy confirmations required for passport-related applications." },
  { question: "Why is proper society documentation important?", answer: "Accurate documentation helps ensure legal compliance, smooth property transactions, proper record management, and efficient service delivery to society members." },
  { question: "Do you assist societies in maintaining statutory records?", answer: "Yes. We assist societies in maintaining membership records, share certificate registers, transfer records, and other essential documentation required under applicable regulations." },
  { question: "Can you help with old or incomplete society records?", answer: "Yes. We assist societies in reviewing, organizing, updating, and regularizing records wherever possible to improve documentation accuracy and compliance." }
];

const rawServicesData: RawTab[] = [
  {
    id: "society-management",
    title: "Housing Society Management",
    description: "At ConsultAvenuee, we provide end-to-end housing society compliance, audit, taxation, and administrative support services.",
    subServices: [
      {
        id: "society-formation",
        title: "Society Formation & Registration",
        price: "₹14,999",
        badge: "NEW",
        description: `From Registration to Handover- made simple\n\nEstablishing a Cooperative Housing Society requires careful planning, regulatory compliance, and proper documentation.\nFrom society registration to builder handover and governance setup, every stage plays a critical role in ensuring smooth operations and legal compliance.\nAt ConsultAvenuee, we provide end-to-end assistance for the formation and registration of Cooperative Housing Societies and handover from builder.`,
        faqs: formationFAQs,
        subSubServices: [
          {
            slug: "cooperative-housing-society-registration",
            title: "Co-operative Housing Society Registration",
            shortDesc: "From Registration to Handover- made simple",
            longDesc: "Establishing a Cooperative Housing Society requires careful planning, regulatory compliance, and proper documentation. From society registration to builder handover and governance setup, every stage plays a critical role in ensuring smooth operations and legal compliance. At ConsultAvenuee, we provide end-to-end assistance for the formation and registration of Cooperative Housing Societies and handover from builder.",
            checklist: [
              "Property Documents & Agreements for Sale",
              "Occupancy Certificate (OC)",
              "Member Details & Promoter Applications",
              "Proposed Bye-laws copy",
              "Builder Handover records"
            ],
            features: [
              "Formation of Cooperative Housing Societies",
              "Drafting of society bye laws",
              "Preparation and filing of registration documents",
              "Drafting of applications, declarations, and supporting documentation",
              "Coordination with the Registrar of Cooperative Societies",
              "Compliance with statutory requirements",
              "Follow-up for registration approvals"
            ],
            sections: [
              {
                title: "1. Formation of Cooperative Housing Societies",
                content: "We provide comprehensive professional assistance to plan, coordinate, and organize promoters and flat purchasers to form a legal Cooperative Housing Society.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Drafting of Society Bye-laws",
                content: "Bye-laws are the legal rules governing the society. We draft and customize society bye-laws to align with standard state cooperative acts and specific community needs.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Preparation and Filing of Registration Documents",
                content: "We compile and prepare all formal applications, registrations, promoter signatures records, and index layouts, ensuring error-free submissions.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "4. Drafting of Applications, Declarations, and Supporting Documentation",
                content: "Our team drafts all supporting paperwork, including standard declarations, bank authorization letters, and promoter statements.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "5. Coordination with the Registrar of Cooperative Societies",
                content: "We handle physical and digital liaisoning with the Registrar's office, addressing clarifying queries and representing the promoter body.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "6. Compliance with Statutory Requirements",
                content: "Verification of member lists, minimum unit requirements, and title reports to ensure full statutory compliance before final submission.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "7. Follow-up for Registration Approvals",
                content: "Active, structured tracking of the registration file inside the department to expedite approvals and secure the Registration Certificate.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "builder-handover-assistance",
            title: "Builder Handover Assistance",
            shortDesc: "Collection & verification of builder documents, assets transfer, and obligation review.",
            longDesc: "Transfer of property management from developer to the housing society. We assist in collecting and verifying developer documents, reviewing statutory approvals, transferring assets, and verifying flat/member records.",
            checklist: [
              "Original building plan approvals & occupancy certificate (OC)",
              "NOCs from Fire, Lift, and Pollution control boards",
              "All structural designs, electrical layouts, and plumbing schematics",
              "Property tax receipts and water connection details",
              "Handover inventory list of common assets & equipment"
            ],
            features: [
              "Collection and verification of builder documents",
              "Review of statutory approvals and records",
              "Transfer of common areas and society assets",
              "Handover of books of accounts and society records",
              "Verification of member and flat records",
              "Compliance review of builder obligations"
            ],
            sections: [
              {
                title: "1. Collection and Verification of Builder Documents",
                content: "We assist the society in obtaining all structural designs, building approvals, occupancy certificates, and guarantees from the developer.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Review of Statutory Approvals and Records",
                content: "Auditing lift licenses, fire safety certificates, property taxes, electricity, and water approvals to verify their validity.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Transfer of Common Areas and Society Assets",
                content: "Legal and physical transfer of lobbies, terraces, pump rooms, elevators, generators, and recreational facilities to the society's control.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "4. Handover of Books of Accounts and Society Records",
                content: "Obtaining accounting ledgers, balance sheets, invoice histories, and member deposits held by the builder during the construction period.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "5. Verification of Member and Flat Records",
                content: "Cross-checking buyer registries, allotment letters, and carpet areas to identify and resolve any allotment discrepancies.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "6. Compliance Review of Builder Obligations",
                content: "Evaluating the developer's legal covenants and pending works to ensure complete delivery of all promised amenities.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "first-general-body-meeting-gbm",
            title: "First General Body Meeting (GBM)",
            shortDesc: "Notices, agendas, minute drafting, and formal committee formation support.",
            longDesc: "The First General Body Meeting (GBM) marks the formal startup of the society's self-governance. We help you draft meeting notices and agendas, guide you in conducting the meeting smoothly, record and draft minutes, and document the formation of the Managing Committee.",
            checklist: [
              "First GBM Notice with precise 14-day statutory timeline",
              "Agenda copy specifying elections of temporary committee",
              "Member signature records & attendance register",
              "Resolutions template for bank accounts and bye-laws adoption",
              "Managing committee constitution guidelines"
            ],
            features: [
              "Drafting meeting notices and agenda",
              "Guidance on conducting the First General Body Meeting",
              "Recording and drafting meeting minutes",
              "Formation of the Managing Committee",
              "Resolution drafting and documentation"
            ],
            sections: [
              {
                title: "1. Drafting Meeting Notices and Agenda",
                content: "Preparation of the formal notice and agenda structure for the First GBM as per statutory rules, specifying the election of temporary officers.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Guidance on Conducting the First General Body Meeting",
                content: "Advising on procedures, voting methods, handling objections, and maintaining order during the meeting to ensure validity.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Recording and Drafting Meeting Minutes",
                content: "Detailed drafting of the meeting minutes containing the formal records of members present, votes, and approved actions.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "4. Formation of the Managing Committee",
                content: "Documenting the selection of the first ad-hoc committee and distributing temporary portfolios (Chairman, Secretary, Treasurer).",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "5. Resolution Drafting and Documentation",
                content: "Drafting the initial resolutions adopted during the meeting, including banking authorizations and bye-law registrations.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          }
        ]
      },
      {
        id: "society-elections",
        title: "Society Elections & Managing Committee Formation",
        price: "₹9,999",
        description: `Transparent Elections. Strong Leadership. Effective Governance.\n\nProper election planning, statutory compliance, and accurate documentation ensure that the Managing Committee is constituted in accordance with applicable laws and society bye-laws.\nAt ConsultAvenuee, we provide end-to-end support for Society Elections and Managing Committee Formation, helping societies conduct smooth, compliant, and professionally managed elections while minimizing disputes and procedural challenges.`,
        faqs: electionFAQs,
        subSubServices: [
          {
            slug: "society-election-planning",
            title: "Society Election Planning",
            shortDesc: "Complete planning, schedules, timelines, and compliance roadmap for society elections.",
            longDesc: "Proper election planning, statutory compliance, and accurate documentation ensure that the Managing Committee is constituted in accordance with applicable laws and society bye-laws. At ConsultAvenuee, we provide end-to-end support for Society Elections and Managing Committee Formation, helping societies conduct smooth, compliant, and professionally managed elections.",
            checklist: [
              "Form I",
              "Form J",
              "Share Register",
              "Share Ledger",
              "Membership Register",
              "Forms E-1, E-2 and E-3",
              "Election Proposal Application",
              "Nomination Forms",
              "Defaulter Member List",
              "Committee Resolutions"
            ],
            features: [
              "We assist societies in planning and organizing the entire election process, including election timelines, statutory requirements, member communication, and procedural compliance to ensure a seamless election experience.",
              "Election planning and compliance review",
              "Election schedule preparation"
            ],
            sections: [
              {
                title: "1. Election Planning and Compliance Review",
                content: "We audit the society bylaws, list requirements, and draft the initial election planning roadmap.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Election Schedule Preparation",
                content: "Drafting the formal election calendar detailing nomination, scrutiny, withdrawal, and polling dates.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "election-officer-coordination",
            title: "Election Officer Coordination",
            shortDesc: "Liaisoning with authorized Election Officers and registrar departments.",
            longDesc: "Coordination with authorized Election Officers is required under modern state laws. Our team guides you in appointing the Election Officer, submits the proposals, and coordinates logistics throughout the polling cycle.",
            checklist: [
              "Form I",
              "Form J",
              "Share Register",
              "Share Ledger",
              "Membership Register",
              "Forms E-1, E-2 and E-3",
              "Election Proposal Application",
              "Nomination Forms",
              "Defaulter Member List",
              "Committee Resolutions"
            ],
            features: [
              "Our team coordinates with authorized Election Officers and relevant authorities, facilitating the election process in accordance with applicable cooperative housing society regulations and election guidelines.",
              "Assistance in appointment of Election Officer"
            ],
            sections: [
              {
                title: "1. Assistance in Appointment of Election Officer",
                content: "Submitting formal requests to the cooperative registrar for appointing an authorized, independent Election Officer.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Officer Onboarding & Support",
                content: "Providing office space, records directories, and administrative support to the appointed officer for smooth execution.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "voter-list-preparation",
            title: "Voter List Preparation",
            shortDesc: "Compiling, verifying, and publishing the eligible voter directory.",
            longDesc: "A valid and accurate voter list is essential for fair, undisputed elections. We assist in preparing, verifying, updating, and finalizing voter lists based on membership records and statutory requirements.",
            checklist: [
              "Form I",
              "Form J",
              "Share Register",
              "Share Ledger",
              "Membership Register",
              "Forms E-1, E-2 and E-3",
              "Election Proposal Application",
              "Nomination Forms",
              "Defaulter Member List",
              "Committee Resolutions"
            ],
            features: [
              "A valid and accurate voter list is essential for fair elections. We assist in preparing, verifying, updating, and finalizing voter lists based on membership records and statutory requirements.",
              "Preparation & Verification of voter lists"
            ],
            sections: [
              {
                title: "1. Preparation & Verification of Voter Lists",
                content: "Cross-matching membership entries, share registries, flat files, and checking outstanding dues to prepare the voter list.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Provisional and Final Voter Lists",
                content: "Publishing the provisional list (Form E-2), collecting objections, making corrections, and preparing the certified final voter list (Form E-3).",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "election-documentation",
            title: "Election Documentation",
            shortDesc: "Nomination forms, scrutiny sheets, ballots, and statutory election records.",
            longDesc: "We prepare and manage all election-related documentation, including notices, nomination forms, scrutiny records, withdrawal forms, election proceedings, resolutions, and statutory records required during and after the election process.",
            checklist: [
              "Form I",
              "Form J",
              "Share Register",
              "Share Ledger",
              "Membership Register",
              "Forms E-1, E-2 and E-3",
              "Election Proposal Application",
              "Nomination Forms",
              "Defaulter Member List",
              "Committee Resolutions"
            ],
            features: [
              "We prepare and manage all election-related documentation, including notices, nomination forms, scrutiny records, withdrawal forms, election proceedings, resolutions, and statutory records required during and after the election process.",
              "Nomination scrutiny support"
            ],
            sections: [
              {
                title: "1. Nomination Scrutiny Support",
                content: "Verification of candidate nominations against eligibility parameters (bylaw requirements, dues clearances) during the scrutiny period.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Election Notices & Nominations",
                content: "Preparing the official nomination forms, candidate withdrawal files, and setting up ballot files.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "managing-committee-formation",
            title: "Managing Committee Formation",
            shortDesc: "Constitution of the committee, office-bearer allocation, and post-election compliance.",
            longDesc: "Following the election process, we assist in the constitution of the Managing Committee, allocation of office bearers, preparation of committee records, and completion of post-election compliance requirements.",
            checklist: [
              "Form I",
              "Form J",
              "Share Register",
              "Share Ledger",
              "Membership Register",
              "Forms E-1, E-2 and E-3",
              "Election Proposal Application",
              "Nomination Forms",
              "Defaulter Member List",
              "Committee Resolutions"
            ],
            features: [
              "Following the election process, we assist in the constitution of the Managing Committee, allocation of office bearers, preparation of committee records, and completion of post-election compliance requirements.",
              "Polling and counting process assistance",
              "Result declaration support",
              "Election record documentation"
            ],
            sections: [
              {
                title: "1. Polling and Counting Process Assistance",
                content: "Administrative coordination during the polling and counting phases, ensuring transparent procedures.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Result Declaration Support",
                content: "Preparing the result declarations (Form E-18 or similar), publishing lists of winners, and coordinating handovers.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Election Record Documentation",
                content: "Filing and archiving all voter sheets, ballots, nomination records, and submitting the transition returns to the registrar.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          }
        ]
      },
      {
        id: "society-compliance",
        title: "Statutory Compliance & Governance Services",
        price: "₹7,999",
        description: `Comprehensive Society Compliance & Secretarial Services\n\nSupporting Managing Committees with expert governance, documentation, and statutory compliance solutions.\nCooperative Housing Societies are required to comply with various statutory, administrative, and governance requirements under applicable cooperative laws and society bye-laws.\nProper maintenance of records, timely conduct of meetings, and accurate documentation are essential for transparent administration and smooth functioning of the society.\nAt ConsultAvenuee, we provide comprehensive Statutory Compliance & Governance Services to support Managing Committees, Office Bearers, and Society Members in fulfilling their legal obligations while maintaining high standards of governance and accountability.`,
        faqs: complianceFAQs,
        subSubServices: [
          {
            slug: "agm-general-body-meeting-compliance",
            title: "AGM & General Body Meeting Compliance",
            shortDesc: "AGM/SGBM notice drafting, budgets, annual reports, minutes, and resolutions.",
            longDesc: "Annual General Meetings (AGMs) and General Body Meetings are critical governance events that require careful planning, proper documentation, and statutory compliance. We assist societies in organizing and documenting both AGM and Special General Body Meetings (SGBMs).",
            checklist: [
              "AGM notice copy with 14-day clearance window",
              "Annual Secretary's Activity Report",
              "Audited Balance Sheets and Auditor's report copy",
              "Adopted budgets for the upcoming financial year",
              "Attendance logs and draft minutes book"
            ],
            features: [
              "AGM Notice Drafting",
              "Agenda Preparation",
              "Budget Preparation",
              "Secretary's Annual Report",
              "Resolution Drafting",
              "AGM Minutes Preparation",
              "Compliance Documentation",
              "Record Maintenance",
              "Notice Preparation for Special General Body Meeting (SGBM)",
              "SGBM Agenda drafting",
              "SGBM Resolution drafting",
              "SGBM Minutes preparation",
              "SGBM Compliance support"
            ],
            sections: [
              {
                title: "1. AGM Notice & Agenda Drafting",
                content: "Drafting the formal AGM notice containing the agenda, budgets, and resolution sheets as per legal standards.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Budget & Report Preparation",
                content: "Preparing the proposed financial budget, balance sheet schedules, and the Secretary's annual activity report.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Resolution Drafting & Minutes",
                content: "Drafting resolutions and recording meeting minutes for AGMs and SGBMs to ensure legal compliance.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "4. SGBM Notices & Procedures",
                content: "Notice preparation and documentation for Special General Body Meetings called to discuss specific projects or bylaw updates.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "committee-meeting-compliance",
            title: "Committee Meeting Compliance",
            shortDesc: "Notices, agendas, minutes, and resolutions for monthly managing committee meetings.",
            longDesc: "Effective decision-making begins with properly conducted Managing Committee meetings. We provide end-to-end support for committee meeting compliance and governance documentation.",
            checklist: [
              "Monthly committee meeting notice with 3-day window",
              "Meeting agenda items listing maintenance and vendor issues",
              "Attendance log signatures",
              "Elected committee resolutions templates",
              "Action Taken Report (ATR) status updates"
            ],
            features: [
              "Committee Meeting Notices",
              "Agenda Preparation",
              "Resolution Drafting",
              "Minutes Recording",
              "Compliance Documentation"
            ],
            sections: [
              {
                title: "1. Committee Meeting Notices & Agenda Preparation",
                content: "Preparing monthly meeting notices and agendas containing outstanding items, maintenance approvals, and vendor contracts.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Resolution Drafting & Minutes Recording",
                content: "Recording discussions, drafting committee resolutions, and updating the minutes logbook.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Compliance Documentation",
                content: "Filing committee minutes and verifying that all actions taken remain within delegated committee authorities.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "maintenance-of-statutory-registers",
            title: "Maintenance of Statutory Registers",
            shortDesc: "Compiling and updating Registers I, J, Share Register, Nomination Register, and more.",
            longDesc: "Housing societies are legally required to maintain various statutory registers and records. Accurate maintenance of these records ensures transparency, compliance, and efficient administration.",
            checklist: [
              "Register of Members (I Register)",
              "Register of Share Certificates & Transfers (J Register)",
              "Nomination Register (recording nominee details)",
              "Tenant Register (active renting logs)",
              "Asset & Investment Registers"
            ],
            features: [
              "I Register (Register of Members)",
              "J Register",
              "Share Register",
              "Share Certificate Register",
              "Nomination Register",
              "Associate Member Register",
              "Tenant Register",
              "Vehicle Register",
              "Asset Register",
              "Investment Register",
              "Sinking Fund Register",
              "Lien Register"
            ],
            sections: [
              {
                title: "1. Primary Registers (I & J Registers)",
                content: "Compiling, auditing, and updating the statutory Register of Members (I Register) and Register of Share Transfers (J Register).",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Member Details Registers (Share & Nomination Registers)",
                content: "Updating the Nomination Register, Share Certificate Register, and records of Associate Members.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Operational Registers (Tenant, Vehicle, and Asset Registers)",
                content: "Managing the active Tenant Register, Vehicle logs, Lien logs, Sinking Fund registers, and Building Asset files.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "statutory-audit-coordination-rectification",
            title: "Statutory Audit Coordination & Audit Rectification Services",
            shortDesc: "Form O preparation, audit coordination, and objection resolution.",
            longDesc: "Form O is filed after completion of the statutory audit when the auditor raises observations, objections, deficiencies, or irregularities. It is the society's compliance report explaining the action taken to rectify those audit remarks. At ConsultAvenuee, we provide end-to-end Statutory Audit Coordination and Audit Rectification Services.",
            checklist: [
              "Auditor appointment letter and consent copy",
              "Statutory audit reports with audit classification details",
              "Auditor observations listing objections or deficiencies",
              "Draft Form O response sheet for each objection",
              "Committee Resolution adopting the audit rectification"
            ],
            features: [
              "Audit objection number",
              "Auditor's observations mapping",
              "Society's explanation support",
              "Corrective action status explanations",
              "Committee Resolution approving rectification",
              "Status of compliance against each audit remark"
            ],
            sections: [
              {
                title: "1. Audit Objection Review",
                content: "Mapping and auditing each objection number and observation raised in the statutory audit report.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Society's Explanation & Actions",
                content: "Drafting response statements, explaining the society's position, and detailing corrective actions implemented.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Form O Submission & Clearance",
                content: "Securing the committee's resolution approval and filing the Form O Audit Rectification Report with the cooperative department.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "annual-compliance-calendar-management",
            title: "Annual Compliance Calendar Management",
            shortDesc: "Filing Form Y, tracking deadlines, and managing annual compliance schedules.",
            longDesc: "Form Y is the annual return submitted to the Registrar under Section 79 and Rule 67 of the Maharashtra Cooperative Societies Rules, 1961. It is the primary annual compliance filing for societies. We help you stay on track with a comprehensive Compliance Calendar.",
            checklist: [
              "Completed AGM details & date of meeting",
              "Audited financial statements (Balance Sheet, P&L)",
              "Auditor appointment details for current year",
              "Education Fund payment receipt copy",
              "Form Y filing checklist & declaration form"
            ],
            features: [
              "Form Y Annual Return compilation",
              "AGM Due Date Tracking",
              "Audit Due Date Tracking",
              "Registrar Filing Monitoring",
              "Committee Meeting Compliance",
              "Statutory Register Review",
              "Compliance Alerts & Reminders"
            ],
            sections: [
              {
                title: "1. Form Y Preparation & Return Filing",
                content: "Preparing the Annual Return (Form Y) containing details of the society's activities, AGM dates, audits, and member files.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. AGM & Audit Due Date Tracking",
                content: "Monitoring statutory dates for audits and AGM notices, issuing alerts to prevent penalties.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Registrar Filing & Alerts Monitoring",
                content: "Submitting annual returns, monitoring correspondence files, and managing the compliance calendar.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          }
        ]
      },
      {
        id: "society-taxation",
        title: "Taxation, Audit & Accounting Services",
        price: "₹4,999/mo",
        badge: "SPECIAL",
        description: `Ensuring Financial Transparency, Regulatory Compliance & Sound Financial Management\n\nProper accounting, timely tax compliance, accurate record maintenance, and periodic financial reviews help societies maintain transparency, strengthen internal controls, and meet statutory obligations.\nAt ConsultAvenuee, we provide comprehensive Taxation, Audit & Accounting Services to support Managing Committees and Office Bearers in managing the society's financial affairs efficiently while ensuring compliance with applicable tax laws and regulatory requirements.`,
        faqs: taxationFAQs,
        subSubServices: [
          {
            slug: "society-gst-compliance",
            title: "GST Compliance Services",
            shortDesc: "GST registration, monthly/annual returns filing, and advisory.",
            longDesc: "Housing societies may be required to comply with GST regulations based on the nature and quantum of collections and services provided. Our GST compliance services help societies remain compliant while minimizing regulatory risks.",
            checklist: [
              "GST registration certificate (if registered)",
              "Monthly bill register showing member maintenance charges",
              "Non-member income statements (ads, towers, hall rents)",
              "Purchase bills register with ITC tax invoices",
              "Reconciliation logs with GSTR-2B"
            ],
            features: [
              "GST Registration",
              "Monthly GST Return Filing",
              "Quarterly GST Return Filing",
              "Annual GST Return Filing",
              "GST Liability Review",
              "GST Advisory & Consultation",
              "GST Notice & Assessment Support",
              "GST Reconciliation & Compliance Review"
            ],
            sections: [
              {
                title: "1. GST Registrations & Filings",
                content: "Preparing GSTR-1, GSTR-3B, and annual GSTR-9 returns based on member and non-member collections.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. ITC Reconciliation & Reviews",
                content: "Matching GSTR-2B details against vendor bills to reconcile Input Tax Credits.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Notice & Advisory Support",
                content: "Advising on thresholds, commercial rentals, mobile tower liabilities, and replying to tax notices.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "society-tds-compliance",
            title: "TDS Compliance Services",
            shortDesc: "TAN registration, TDS deductions on vendor payments, and quarterly filings.",
            longDesc: "Societies are often required to deduct and deposit Tax Deducted at Source (TDS) on payments made to contractors, professionals, vendors, and service providers. Proper TDS compliance is essential to avoid penalties and interest liabilities.",
            checklist: [
              "TAN registration certificate of the society",
              "Vendor bills log (security, housekeeping, AMC, repairs)",
              "TDS deduction records showing rates applied",
              "Challans paid details",
              "Form 16A certificates checklist"
            ],
            features: [
              "TAN Registration",
              "TDS Applicability Review",
              "TDS Deduction Compliance",
              "Quarterly TDS Return Filing",
              "TDS Reconciliation",
              "TDS Certificate (Form 16A) Generation",
              "Vendor Compliance Support",
              "TDS Notice Assistance"
            ],
            sections: [
              {
                title: "1. TAN Registration & Applicability Reviews",
                content: "Registering the society for TAN and reviewing vendor payments (contractors, AMCs, security, audits) to apply appropriate TDS sections.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. TDS Deductions & Deposits",
                content: "Calculating deductions, executing timely deposits via challans, and reconciling statements.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Quarterly Returns & Form 16A",
                content: "Filing quarterly TDS returns (Form 26Q), resolving PAN mismatches, and generating Form 16A certificates.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "society-income-tax-compliance",
            title: "Income Tax Compliance Services",
            shortDesc: "Annual Income Tax Return filing, mutuality calculations, and advisory.",
            longDesc: "Although Cooperative Housing Societies operate on a mutuality basis for many activities, they are still required to comply with Income Tax provisions applicable to society income.",
            checklist: [
              "Society PAN Card copy",
              "Audited financial accounts for the financial year",
              "Bank FD interest certificates & TDS certificates (Form 26AS)",
              "Rental agreement copies for common property use",
              "Previous years' Income Tax Return filings"
            ],
            features: [
              "Income Tax Return Filing",
              "Tax Notice Assistance",
              "Response to Departmental Queries"
            ],
            sections: [
              {
                title: "1. Income Tax Return Filing",
                content: "Calculating taxable interest from bank deposits, commercial rents, parking, and tower rentals, and filing the annual return.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Notice & Scrutiny Support",
                content: "Reviewing mismatch queries, responding to departmental notices, and clarifying mutuality claims.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "society-internal-audit-book-review",
            title: "Internal Audit & Book Review Services",
            shortDesc: "Independent review of accounts, expense validations, and control checks.",
            longDesc: "Periodic review of financial records helps societies identify accounting discrepancies, strengthen controls, improve governance, and ensure financial accountability.",
            checklist: [
              "General ledger and trial balance records",
              "Receipt books and maintenance collection records",
              "Paid vouchers, bills, and purchase records",
              "Bank statement logs and reconciliation files",
              "Approved annual budget allocations"
            ],
            features: [
              "Internal Audit of Society Accounts",
              "Verification of Accounting Records",
              "Ledger Scrutiny & Analysis",
              "Expense Verification",
              "Maintenance Collection Review",
              "Bank Reconciliation Review",
              "Vendor Payment Verification",
              "Statutory Compliance Review",
              "Financial Process Evaluation",
              "Recommendations for Improvement"
            ],
            sections: [
              {
                title: "1. Ledger Scrutiny & Records Verification",
                content: "Reviewing accounting books, voucher approvals, and ledger transactions for errors or gaps.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Cash & Collections Audit",
                content: "Checking bank statements, reconciliation sheets, cash boxes, and outstanding collections to prevent discrepancy loops.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Compliance & Process Evaluation",
                content: "Verifying statutory compliance against the bylaws, evaluating financial processes, and recommending corrective measures.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "society-monthly-accounting-review",
            title: "Monthly Accounting Review & Monitoring",
            shortDesc: "Ongoing review of accounts, outstanding dues, and budget variances.",
            longDesc: "Regular monitoring of society accounts helps Managing Committees maintain financial discipline and identify issues before they become significant concerns.",
            checklist: [
              "Monthly billing register copy",
              "Maintenance collection logs & online payment status",
              "Monthly expense registers & payments records",
              "Bank reconciliation statements (BRS)",
              "Monthly list of outstanding member dues"
            ],
            features: [
              "Monthly Account Review",
              "Financial Health Check",
              "Collection Monitoring",
              "Expense Analysis",
              "Budget Variance Review",
              "Outstanding Dues Review",
              "Fund Utilization Review",
              "Compliance Monitoring"
            ],
            sections: [
              {
                title: "1. Monthly Ledger Reviews & Reconciliations",
                content: "Checking cash books, general ledgers, and bank statements monthly.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Collections & Variance Analysis",
                content: "Reviewing collections against outstanding lists, checking maintenance bills, and checking budgets against actual expenditures.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Dues & Funds Monitoring",
                content: "Tracking members outstanding lists, computing interest, and checking sinking fund and fixed deposit balances.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          }
        ]
      },
      {
        id: "society-redevelopment",
        title: "Redevelopment Advisory & Support",
        price: "₹49,999",
        description: `Professional Guidance for Housing Society Redevelopment Projects\n\nRedevelopment is a major milestone for any housing society and requires careful planning, transparent decision-making, and compliance with applicable regulations.\nOur Redevelopment Advisory & Support Services help societies evaluate redevelopment opportunities, manage documentation, and facilitate smooth communication among stakeholders throughout the process.`,
        faqs: redevelopmentFAQs,
        subSubServices: [
          {
            slug: "preliminary-redevelopment-assessment",
            title: "Preliminary Redevelopment Assessment",
            shortDesc: "Feasibility studies, property records review, and initial redevelopment potential audits.",
            longDesc: "Redevelopment is a major milestone for any housing society and requires careful planning, transparent decision-making, and compliance with applicable regulations. Our Redevelopment Advisory & Support Services help societies evaluate redevelopment opportunities.",
            checklist: [
              "Copy of property conveyance deed or land registry cards",
              "Approved building plans of the existing structure",
              "Property tax payment receipts (past 3 years)",
              "Structural Audit report copy",
              "List of active members with flat carpet area records"
            ],
            features: [
              "Evaluation of the society's redevelopment potential",
              "Review of existing property records and redevelopment feasibility",
              "Identification of key considerations and next steps"
            ],
            sections: [
              {
                title: "1. Evaluation of the Society's Redevelopment Potential",
                content: "We audit the building's physical structure, check FSI margins under local guidelines, and calculate development boundaries.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Review of Existing Property Records and Feasibility",
                content: "Checking conveyances, land registry cards, mutations, and title clearances to assess overall structural feasibility.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Identification of Key Considerations and Next Steps",
                content: "Compiling checklists, identifying documentation gaps, and drafting initial roadmaps for general body alignments.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "redevelopment-compliance-review",
            title: "Compliance Review",
            shortDesc: "Reviewing statutory guidelines, directives, and procedural obligations.",
            longDesc: "Proper alignment with statutory and regulatory codes is essential for redevelopment safety. We provide detailed guidelines on compliance with applicable redevelopment procedures.",
            checklist: [
              "Bylaws copy specifying redevelopment protocols",
              "Managing committee resolution copies initiating the process",
              "Voter list copy of members eligible for redevelopment votes",
              "Notices sent for special general body meetings",
              "Registry logs of notices served"
            ],
            features: [
              "Assessment of statutory and regulatory requirements",
              "Review of society records, resolutions, and documentation",
              "Guidance on compliance with applicable redevelopment procedures"
            ],
            sections: [
              {
                title: "1. Assessment of Statutory and Regulatory Requirements",
                content: "Reviewing the project details against Section 79A and state-level directives to confirm compliance.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Review of Society Records, Resolutions, and Documentation",
                content: "Auditing meeting minutes, attendance logs, and member consent letters to ensure complete validity.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Guidance on Compliance with Applicable Redevelopment Procedures",
                content: "Instructing the committee on how to organize PMC appointments, tender selections, and developer voting sessions.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "member-communication-support",
            title: "Member Communication Support",
            shortDesc: "Organizing general meetings, presentations, and transparency updates.",
            longDesc: "Promoting transparency and active member engagement throughout the redevelopment process. We assist in preparing presentations, notices, and meeting programs.",
            checklist: [
              "FAQ sheets explaining the redevelopment process for members",
              "Meeting notices and agendas templates",
              "Presentation slides outlining financial benefits",
              "Member query log files",
              "Minutes format for transparency updates"
            ],
            features: [
              "Assistance in organizing member meetings and discussions",
              "Preparation of notices, presentations, and communication materials",
              "Support in maintaining transparency and member engagement"
            ],
            sections: [
              {
                title: "1. Assistance in Organizing Member Meetings and Discussions",
                content: "Structuring the agenda for general body sessions, setting up speaking guidelines, and managing members' query lists.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Preparation of Notices, Presentations, and Communication Materials",
                content: "Preparing clear, visual summaries of feasibility reports, developer bids, and commercial offers for member reviews.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Support in Maintaining Transparency and Member Engagement",
                content: "Establishing record directories and answering member questions regarding carpet area, rents, and guarantees.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "redevelopment-documentation-assistance",
            title: "Documentation Assistance",
            shortDesc: "Compiling and organizing society deeds, records, and project files.",
            longDesc: "We assist in the review and organization of society records, resolutions, meeting minutes, notices, and member-related documentation during the redevelopment process.",
            checklist: [
              "Approved PMC (Project Management Consultant) tender reports",
              "Developer bid documents copy",
              "Draft Development Agreement (DA) checklist",
              "Individual member consent letters copy",
              "Objection clearance certificates"
            ],
            features: [
              "Review and organization of society records and redevelopment documents",
              "Assistance with resolutions, meeting minutes, notices, and member-related documentation",
              "Support in maintaining proper records throughout the redevelopment process"
            ],
            sections: [
              {
                title: "1. Review and Organization of Society Records and Redevelopment Documents",
                content: "We assist the society in obtaining structural designs, property conveyances, and title search files.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Assistance with Resolutions, Meeting Minutes, Notices, and Member-related Documentation",
                content: "Writing SGBM notices, recording minutes, and tracking individual member consent documents.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Support in Maintaining Proper Records Throughout the Redevelopment Process",
                content: "Ensuring all reports, developer bids, contracts, and certificates are cataloged and filed.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "redevelopment-financial-evaluation-support",
            title: "Financial Evaluation Support",
            shortDesc: "Reviewing commercial bids, corpus funds, rents, and financial safety parameters.",
            longDesc: "We assist societies in reviewing and comparing developer proposals, evaluating financial benefits, compensation structures, and project-related commercial aspects.",
            checklist: [
              "Developer financial offer comparison sheet",
              "Corpus fund payout schedules",
              "Alternate rent rates vs local market averages",
              "Bank guarantee terms and validation conditions",
              "Tax implication advisory sheets on corpus received"
            ],
            features: [
              "Assistance in reviewing and comparing redevelopment proposals",
              "Evaluation of financial benefits, compensation structures, and project-related commercial aspects",
              "Support in understanding the financial implications of redevelopment decisions"
            ],
            sections: [
              {
                title: "1. Assistance in Reviewing and Comparing Redevelopment Proposals",
                content: "Preparing clear, comparative matrices showing the financial proposals of competing developer bids.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Evaluation of Financial Benefits, Compensation, and Commercials",
                content: "Evaluating corpus funds, shifting rents, transport allowances, and checking bank guarantees.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Support in Understanding the Financial Implications of Redevelopment",
                content: "Explaining tax structures on benefits and analyzing cash flows during the construction phase.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          }
        ]
      },
      {
        id: "society-docs",
        title: "Society Documentation & Certification Services",
        price: "₹3,999",
        description: `Efficient Documentation Support for Housing Societies\n\nProper documentation is essential for the smooth functioning of a co-operative housing society and for facilitating various member transactions.\nOur services help ensure that society records are maintained accurately and that members receive timely documentation support for property transactions, loan applications, membership transfers, and other official requirements.`,
        faqs: docsFAQs,
        subSubServices: [
          {
            slug: "noc-flat-transfer",
            title: "NOC for Flat Transfer",
            shortDesc: "No Objection Certificates for membership transfers and property registry requirements.",
            longDesc: "Proper documentation is essential for the smooth functioning of a co-operative housing society and for facilitating various member transactions. We provide assistance for flat transfers.",
            checklist: [
              "Written request letter from current member",
              "Draft Sale Agreement or Gift Deed copy",
              "No Dues Clearance certificate from the accountant",
              "Nomination form updates copy",
              "Membership application signed by the buyer"
            ],
            features: [
              "Preparation and issuance of No Objection Certificates for transfer of flats",
              "Verification of society records and transfer requirements",
              "Documentation support for ownership changes"
            ],
            sections: [
              {
                title: "1. Preparation and Issuance of No Objection Certificates for Transfer of Flats",
                content: "Preparing the formal NOC letter, ensuring appropriate terms and conditions as per society rules.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Verification of Society Records and Transfer Requirements",
                content: "Checking the transferor's folders, general ledger sheets, and checking for any outstanding disputes.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Documentation Support for Ownership Changes",
                content: "Drafting the formal letters, membership forms, and updating registers for the transfer.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "noc-sale-flat",
            title: "NOC for Sale of Flat",
            shortDesc: "No Objection Certificates required during flat sale transactions.",
            longDesc: "We provide complete support in processing the necessary No Objection Certificates (NOCs) required during flat sale transactions, checking society records and member clearance accounts.",
            checklist: [
              "Seller request letter for sale clearance NOC",
              "Buyer profile details & KYC documents",
              "Ledger account statement showing zero balances",
              "Share certificate front & back copies",
              "Bylaw compliance confirmation check"
            ],
            features: [
              "Assistance in processing NOCs required for property sale transactions",
              "Review of society dues and compliance requirements",
              "Documentation support for smooth sale procedures"
            ],
            sections: [
              {
                title: "1. Assistance in Processing NOCs Required for Property Sale Transactions",
                content: "Liaisoning between buyers and sellers to compile the clearance applications.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Review of Society Dues and Compliance Requirements",
                content: "Reviewing the member's account history to verify that all maintenance dues, repairs, and interest are paid.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Documentation Support for Smooth Sale Procedures",
                content: "Preparing the formal clearance certificates, signed by the Secretary/Chairman.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "noc-home-loans",
            title: "NOC for Home Loans",
            shortDesc: "Society NOCs required by banks and housing finance institutions.",
            longDesc: "Preparation of society No Objection Certificates (NOCs) required by banks, financial institutions, and home loan providers after verifying the member's files.",
            checklist: [
              "Member request letter specifying Bank/Lender details",
              "Loan application details or bank-issued NOC format",
              "Up-to-date property tax receipts",
              "Share Certificate endorsement records",
              "No Dues Certificate copy"
            ],
            features: [
              "Preparation of society NOCs required by banks and financial institutions",
              "Verification of property and society records",
              "Assistance in meeting lender documentation requirements"
            ],
            sections: [
              {
                title: "1. Preparation of Society NOCs Required by Banks and Financial Institutions",
                content: "Drafting the certificate using specific bank-approved formats containing mortgage clearance and transfer assurances.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Verification of Property and Society Records",
                content: "Checking the society's title files to confirm the owner's share certificate numbers and verifying registered charge entries.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Assistance in Meeting Lender Documentation Requirements",
                content: "Providing copy details, verifying registry references, and supporting member requests.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "noc-passport-verification",
            title: "NOC for Passport Verification",
            shortDesc: "Residence and occupancy verification certificates for passport applications.",
            longDesc: "We assist in the issuance of address, occupancy, and residence-related confirmations required for member passport applications.",
            checklist: [
              "Member request letter listing applicant details",
              "Passport application reference copy",
              "Aadhaar card copy containing flat address",
              "Active utility bill copy (electricity/maintenance)",
              "Occupant verification record log"
            ],
            features: [
              "Issuance of address and residence-related confirmations for passport applications",
              "Verification of member records and occupancy details"
            ],
            sections: [
              {
                title: "1. Issuance of Address and Residence-related Confirmations for Passport Applications",
                content: "Drafting the residence certificates with society seals, signed by the Secretary/Chairman.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Verification of Member Records and Occupancy Details",
                content: "Checking membership registers, rent logs, or flat utility statements to verify the applicant's residence history.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "membership-transfer-documentation",
            title: "Membership Transfer Documentation",
            shortDesc: "Processing transfer forms, buyer onboarding, and updating registers.",
            longDesc: "Ensuring accurate preparation, validation, and processing of membership transfer packets and forms to admit new members.",
            checklist: [
              "Membership transfer application forms (Form 20A/20B)",
              "Registered Sale Deed or Gift Deed copy",
              "Transfer premium receipt (if applicable under bylaws)",
              "Nomination form signed by the new member",
              "Committee resolution approving membership transfer"
            ],
            features: [
              "Preparation and processing of membership transfer forms",
              "Support for admission of new members",
              "Maintenance and updating of membership records"
            ],
            sections: [
              {
                title: "1. Preparation and Processing of Membership Transfer Forms",
                content: "Drafting the statutory applications, declarations, and indemnity bonds required under the cooperative housing bylaws.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Support for Admission of New Members",
                content: "Reviewing the transaction against maximum transfer fee limits and reviewing stamp duty payments.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Maintenance and Updating of Membership Records",
                content: "Updating the membership registers ('I' & 'J') and issuing the welcome packets to the new owner.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "share-certificate-documentation",
            title: "Share Certificate Documentation",
            shortDesc: "Endorsing, printing, and updating share certificate records.",
            longDesc: "We assist in the preparation, issuance, endorsement, and updating of share certificates, ensuring that all membership changes are properly registered.",
            checklist: [
              "Original Share Certificate booklet copy",
              "Approved membership transfer resolution details",
              "Transferor & transferee signatures records",
              "Share Register page entry coordinates",
              "Authorized signature stamps"
            ],
            features: [
              "Preparation, issuance, endorsement, and updating of share certificates",
              "Recording ownership changes and membership transfers",
              "Assistance in maintaining statutory share certificate records"
            ],
            sections: [
              {
                title: "1. Preparation, Issuance, Endorsement, and Updating of Share Certificates",
                content: "Drafting the legal endorsements on the back of the share certificate, listing transfer dates, folio numbers, and officer signatures.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Recording Ownership Changes and Membership Transfers",
                content: "Registering the new owner details on the share certificates and compiling files.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Assistance in Maintaining Statutory Share Certificate Records",
                content: "Cross-checking share certificate numbers against the central registers to resolve discrepancies.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "society-certificates-confirmations",
            title: "Society Certificates & Confirmations",
            shortDesc: "Maintenance confirmations, occupancy certificates, and letters for banks.",
            longDesc: "Issuance of various certificates and confirmations required by members, banks, government authorities, and legal professionals.",
            checklist: [
              "Member request details showing purpose of certificate",
              "Account ledger statement copy",
              "Occupant directory records",
              "Standard letter templates index",
              "Authorized officer sign-off sheets"
            ],
            features: [
              "Issuance of various certificates and confirmations required by members, banks, government authorities, and legal professionals",
              "Preparation of occupancy, membership, and society-related certifications"
            ],
            sections: [
              {
                title: "1. Issuance of Certificates and Confirmations Required by Members and Lenders",
                content: "Drafting occupancy confirmations, no-dues summaries, and flat carpet area verifications.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Preparation of Occupancy, Membership, and Society-related Certifications",
                content: "Preparing letters confirming monthly maintenance payouts, interest statements, and sinking fund allocations.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            slug: "duplicate-share-certificate-assistance",
            title: "Duplicate Share Certificate Assistance",
            shortDesc: "Procedure, notices, and documentation for lost or damaged share certificates.",
            longDesc: "We provide complete guidance on procedures and documentation support for lost, misplaced, or damaged share certificates, including statutory declarations.",
            checklist: [
              "Member request letter detailing loss/damage of certificate",
              "FIR (First Information Report) copy for lost certificate",
              "Indemnity Bond signed by the member (on stamp paper)",
              "Public notice draft published in local newspapers",
              "Committee resolution approving duplicate issuance"
            ],
            features: [
              "Guidance on procedures for obtaining duplicate share certificates",
              "Documentation support for lost, misplaced, or damaged share certificates",
              "Assistance with statutory declarations and record updates"
            ],
            sections: [
              {
                title: "1. Guidance on Procedures for Obtaining Duplicate Share Certificates",
                content: "Guiding the member and society on the legal requirements, including filing FIRs and publishing loss notices in local papers.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "2. Documentation Support for Lost, Misplaced, or Damaged Share Certificates",
                content: "Drafting the legal indemnity bond formats to protect the society from future claims, and preparing committee resolutions.",
                image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "3. Assistance with Statutory Declarations and Record Updates",
                content: "Printing the duplicate share certificate, writing the 'DUPLICATE' endorsement, and updating the share register logs.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nri-services",
    title: "NRI Services",
    description: "Trusted NRI solutions for tax, property, and legal matters in India. Expert support. Complete peace of mind.",
    subServices: [
      {
        id: "nri-advisory",
        title: "NRI Services",
        price: "₹14,999",
        badge: "HOT",
        description: "Trusted NRI solutions for tax, property, and legal matters in India. Expert support. Complete peace of mind.",
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
    description: "Helping senior citizens manage tax, pension, property, and legal matters with ease.",
    subServices: [
      {
        id: "senior-advisory",
        title: "Senior Citizen Advisory Services",
        price: "₹4,999",
        badge: "SPECIAL",
        description: "Helping senior citizens manage tax, pension, property, and legal matters with ease.",
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
    description: "One-stop solution for business setup, statutory registrations, compliance management, and Virtual CFO services.",
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
    description: "Professional solutions for income tax, GST, regulatory registrations, and litigation support. Focused on compliance, efficiency, and effective representation.",
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
  description: tab.description,
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
        sections: subSub.sections || defaultSections,
        comparison: subSub.comparison || defaultComparison,
        checklist: subSub.checklist || defaultChecklist,
        chartData: subSub.chartData || defaultChartData,
        faqs: sub.faqs,
        features: subSub.features || []
      };
    })
  }))
}));
