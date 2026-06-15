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
  image?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  isHeading?: boolean;
}

export interface SubSubService {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  postSectionsDesc?: string;
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
  subSubServices?: SubSubService[];
  longDesc?: string;
  postSectionsDesc?: string;
  sections?: SectionDetail[];
  faqs?: FAQItem[];
  checklist?: string[];
  features?: string[];
  chartData?: ChartDataPoint[];
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
  postSectionsDesc?: string;
  image?: string;
  timelineSteps?: TimelineStep[];
  sections?: SectionDetail[];
  comparison?: ComparisonPoint[];
  checklist?: string[];
  chartData?: ChartDataPoint[];
  faqs?: FAQItem[];
  features?: string[];
}

interface RawSub {
  id: string;
  title: string;
  price?: string;
  badge?: "NEW" | "SPECIAL" | "HOT";
  description: string;
  subSubServices?: RawSubSub[];
  longDesc?: string;
  postSectionsDesc?: string;
  sections?: SectionDetail[];
  faqs?: FAQItem[];
  checklist?: string[];
  features?: string[];
  chartData?: ChartDataPoint[];
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
    title: "Housing Society Advisory",
    description: "At ConsultAvenuee, we provide end-to-end housing society compliance, audit, taxation, and administrative support services.",
    subServices: [
      {
        id: "society-formation",
        title: "Society Formation & Registration",
        price: "₹14,999",
        badge: "NEW",
        description: `Professional support for housing society registration, builder handover procedures, and GBM formalities to establish a compliant and well-governed society.`,
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
        description: "Professional assistance for housing society elections, managing committee formation, and compliance with co-operative society regulations.",
        faqs: [
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
        ],
        longDesc: "Transparent Elections. Strong Leadership. Effective Governance.\nProper election planning, statutory compliance, and accurate documentation ensure that the Managing Committee is constituted in accordance with applicable laws and society bye-laws.\nAt ConsultAvenuee, we provide end-to-end support for Society Elections and Managing Committee Formation, helping societies conduct smooth, compliant, and professionally managed elections while minimizing disputes and procedural challenges.\n\n### Our Services Include\n\n**Managing Committee Elections**\nSociety elections are required to be conducted periodically in accordance with applicable Cooperative Society laws and Bye-laws.\nWe provide complete professional assistance to ensure fair, transparent, and legally compliant elections.",
        checklist: [],
        features: [],
        sections: [
          {
            title: "Society Election Planning",
            content: "We assist societies in planning and organizing the entire election process, including election timelines, statutory requirements, member communication, and procedural compliance to ensure a seamless election experience."
          },
          {
            title: "Election Officer Coordination",
            content: "Our team coordinates with authorized Election Officers and relevant authorities, facilitating the election process in accordance with applicable cooperative housing society regulations and election guidelines."
          },
          {
            title: "Voter List Preparation",
            content: "We provide support in preparing, verifying, and finalizing accurate voter lists based on membership records and statutory requirements."
          },
          {
            title: "Election Documentation",
            content: "We prepare and manage all election-related documentation, including notices, nomination forms, scrutiny records, withdrawal forms, election proceedings, resolutions, and statutory records required during and after the election process."
          },
          {
            title: "Managing Committee Formation",
            content: "Following the election process, we assist in the constitution of the Managing Committee, allocation of office bearers, preparation of committee records, and completion of post-election compliance requirements."
          },
          {
            title: "Election Services Include:",
            content: "• Election planning and compliance review\n• Election schedule preparation\n• Assistance in appointment of Election Officer\n• Preparation & Verification of voter lists\n• Nomination scrutiny support\n• Polling and counting process assistance\n• Result declaration support\n• Election record documentation"
          },
          {
            title: "Documents Required for Elections",
            content: "• Form I\n• Form J\n• Share Register\n• Share Ledger\n• Membership Register\n• Forms E-1, E-2 and E-3\n• Election Proposal Application\n• Nomination Forms\n• Defaulter Member List\n• Committee Resolutions"
          }
        ],
        chartData: []
      },
      {
        id: "society-compliance",
        title: "Statutory Compliance & Governance Services",
        price: "₹7,999",
        description: "Expert support for AGM compliance, committee meeting. statutory records, audits, and regulatory requirements to ensure transparent governance and smooth society operations.",
        faqs: [
          { question: "What are Statutory Compliance & Governance Services for a Housing Society?", answer: "These services help Cooperative Housing Societies comply with legal, regulatory, and governance requirements, including AGM compliance, committee meetings, statutory register maintenance, annual filings, audits, and Registrar compliance." },
          { question: "Is conducting an Annual General Meeting (AGM) mandatory?", answer: "Yes. Every Cooperative Housing Society is required to conduct an AGM within the prescribed timelines and complete all related compliance requirements." },
          { question: "What documents are required for an AGM?", answer: "AGM documentation generally includes:\n• AGM Notice\n• Agenda\n• Audited Financial Statements\n• Secretary's Annual Report\n• Budget\n• Auditor's Report\n• Resolutions\n• Attendance Records\n• AGM Minutes" },
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
        ],
        longDesc: "Comprehensive Society Compliance & Secretarial Services\nSupporting Managing Committees with expert governance, documentation, and statutory compliance solutions.\nCooperative Housing Societies are required to comply with various statutory, administrative, and governance requirements under applicable cooperative laws and society bye-laws.\nProper maintenance of records, timely conduct of meetings, and accurate documentation are essential for transparent administration and smooth functioning of the society.\nAt ConsultAvenuee, we provide comprehensive Statutory Compliance & Governance Services to support Managing Committees, Office Bearers, and Society Members in fulfilling their legal obligations while maintaining high standards of governance and accountability.",
        postSectionsDesc: "Our objective is to ensure that your society remains fully compliant with annual filing requirements while allowing the Managing Committee to focus on effective administration and community development.",
        checklist: [],
        features: [],
        sections: [
          {
            title: "AGM & General Body Meeting Compliance",
            content: "Annual General Meetings (AGMs) and General Body Meetings are critical governance events that require careful planning, proper documentation, and statutory compliance."
          },
          {
            title: "Annual General Meeting (AGM)",
            content: "Our AGM support services include:\n• AGM Notice Drafting\n• Agenda Preparation\n• Budget Preparation\n• Secretary's Annual Report\n• Resolution Drafting\n• AGM Minutes Preparation\n• Compliance Documentation\n• Record Maintenance"
          },
          {
            title: "Special General Body Meeting (SGBM)",
            content: "We assist societies in organizing and documenting Special General Body Meetings, including:\n• Notice Preparation\n• Agenda Drafting\n• Resolution Drafting\n• Minutes Preparation\n• Meeting Documentation\n• Compliance Support"
          },
          {
            title: "Committee Meeting Compliance",
            content: "Effective decision-making begins with properly conducted Managing Committee meetings. We provide end-to-end support for committee meeting compliance and governance documentation.\nOur services include:\n• Committee Meeting Notices\n• Agenda Preparation\n• Resolution Drafting\n• Minutes Recording\n• Compliance Documentation"
          },
          {
            title: "Maintenance of Statutory Registers",
            content: "Housing societies are legally required to maintain various statutory registers and records. Accurate maintenance of these records ensures transparency, compliance, and efficient administration.\nWe assist societies in maintaining and updating:\n• I Register (Register of Members)\n• J Register\n• Share Register\n• Share Certificate Register\n• Nomination Register\n• Associate Member Register\n• Tenant Register\n• Vehicle Register\n• Asset Register\n• Investment Register\n• Sinking Fund Register\n• Lien Register"
          },
          {
            title: "Annual Compliance Management",
            content: "In Maharashtra Cooperative Housing Societies, Form Y and Form O are two important compliance forms filed with the Registrar."
          },
          {
            title: "Form Y – Annual Return",
            content: "Form Y is the annual return submitted to the Registrar under Section 79 and Rule 67 of the Maharashtra Cooperative Societies Rules, 1961. It is the primary annual compliance filing for societies.\nForm Y typically includes:\n• Annual Report of Society Activities\n• Audited Financial Statements (Balance Sheet, Income & Expenditure / Profit & Loss Account)\n• AGM Details\n• Auditor Appointment Details\n• Audit Rectification Status\n• Bye-law Amendments (if any)\n• Cooperative Education Fund Contribution Details\n• Active & Non-Active Member Status Details"
          },
          {
            title: "Form O – Audit Rectification Report",
            content: "Form O is filed after completion of the statutory audit when the auditor raises observations, objections, deficiencies, or irregularities. It is the society's compliance report explaining the action taken to rectify those audit remarks.\nForm O contains:\n• Audit objection number\n• Auditor's observations\n• Society's explanation\n• Corrective action taken\n• Committee Resolution approving rectification\n• Status of compliance against each audit remark"
          },
          {
            title: "Statutory Audit Coordination & Audit Rectification Services",
            content: "At ConsultAvenuee, we provide end-to-end Statutory Audit Coordination and Audit Rectification Services to help societies complete audits efficiently, address audit observations, and maintain ongoing compliance. Many societies struggle with audit completion and audit rectification."
          }
        ],
        chartData: []
      },
      {
        id: "society-taxation",
        title: "Taxation, Audit & Accounting Services",
        price: "₹12,999",
        description: "GST, TDS, income tax filling, Internal audit and accounting support to ensure financial accuracy and regulatory compliance.",
        faqs: [
          { question: "When is GST registration required for a housing society?", answer: "GST registration may become necessary when the society meets the prescribed conditions under GST laws. A compliance review can help determine registration requirements." },
          { question: "What GST returns are required to be filed by a registered society?", answer: "Depending on the registration category and applicable provisions, societies may be required to file monthly, quarterly, and annual GST returns." },
          { question: "What are TDS returns?", answer: "TDS returns are periodic statements filed with the Income Tax Department containing details of taxes deducted and deposited on behalf of vendors and service providers." },
          { question: "Is Income Tax Return filing mandatory for housing societies?", answer: "Yes. Cooperative Housing Societies are generally required to file Income Tax Returns, even if certain receipts may qualify under the principle of mutuality or other applicable provisions." },
          { question: "What types of income may be taxable for a housing society?", answer: "Taxability depends on the nature of income. Certain receipts such as interest income, rental income, advertisement income, mobile tower income, and other non-member income may require tax evaluation." },
          { question: "What is an Internal Audit?", answer: "An Internal Audit is an independent review of the society's financial records, transactions, controls, and compliance practices to identify risks and improve governance." },
          { question: "How is an Internal Audit different from a Statutory Audit?", answer: "A Statutory Audit is a mandatory annual audit conducted under applicable cooperative laws, whereas an Internal Audit focuses on reviewing internal controls, processes, financial management, and risk areas." },
          { question: "What does an Internal Audit cover?", answer: "An Internal Audit may cover:\n• Accounting Records\n• Ledger Scrutiny\n• Expense Verification\n• Maintenance Collections\n• Vendor Payments\n• Bank Reconciliations\n• Fund Utilization\n• Compliance Review\n• Financial Controls" },
          { question: "Why is Bank Reconciliation important?", answer: "Bank reconciliation helps ensure that society accounting records match bank statements and assists in identifying errors, omissions, or unauthorized transactions." },
          { question: "Can housing societies outsource accounting and tax compliance?", answer: "Yes. Many societies engage professional consultants for bookkeeping, GST compliance, TDS compliance, Income Tax filing, internal audits, and financial reviews." },
          { question: "How can ConsultAvenuee assist our housing society?", answer: "ConsultAvenuee provides end-to-end support for GST compliance, TDS compliance, Income Tax filings, accounting reviews, internal audits, financial reporting, tax advisory, and ongoing financial governance support, helping societies maintain transparency, compliance, and financial discipline." }
        ],
        longDesc: "Ensuring Financial Transparency, Regulatory Compliance & Sound Financial Management\nProper accounting, timely tax compliance, accurate record maintenance, and periodic financial reviews help societies maintain transparency, strengthen internal controls, and meet statutory obligations.\nAt ConsultAvenuee, we provide comprehensive Taxation, Audit & Accounting Services to support Managing Committees and Office Bearers in managing the society's financial affairs efficiently while ensuring compliance with applicable tax laws and regulatory requirements.\n\nOur objective is to help Cooperative Housing Societies maintain accurate financial records, achieve full tax compliance, strengthen financial governance, and create confidence among members through transparent and accountable financial management.",
        checklist: [],
        features: [],
        sections: [
          {
            title: "GST Compliance Services",
            content: "Housing societies may be required to comply with GST regulations based on the nature and quantum of collections and services provided. Our GST compliance services help societies remain compliant while minimizing regulatory risks.\nOur Services Include:\n• GST Registration\n• Monthly GST Return Filing\n• Quarterly GST Return Filing\n• Annual GST Return Filing\n• GST Liability Review\n• GST Advisory & Consultation\n• GST Notice & Assessment Support\n• GST Reconciliation & Compliance Review"
          },
          {
            title: "TDS Compliance Services",
            content: "Societies are often required to deduct and deposit Tax Deducted at Source (TDS) on payments made to contractors, professionals, vendors, and service providers. Proper TDS compliance is essential to avoid penalties and interest liabilities.\nOur Services Include:\n• TAN Registration\n• TDS Applicability Review\n• TDS Deduction Compliance\n• Quarterly TDS Return Filing\n• TDS Reconciliation\n• TDS Certificate (Form 16A) Generation\n• Vendor Compliance Support\n• TDS Notice Assistance"
          },
          {
            title: "Income Tax Compliance Services",
            content: "Although Cooperative Housing Societies operate on a mutuality basis for many activities, they are still required to comply with Income Tax provisions applicable to society income.\nOur Services Include:\n• Income Tax Return Filing\n• Tax Notice Assistance\n• Response to Departmental Queries"
          },
          {
            title: "Internal Audit & Book Review Services",
            content: "Periodic review of financial records helps societies identify accounting discrepancies, strengthen controls, improve governance, and ensure financial accountability.\nOur Services Include:\n• Internal Audit of Society Accounts\n• Verification of Accounting Records\n• Ledger Scrutiny & Analysis\n• Expense Verification\n• Maintenance Collection Review\n• Bank Reconciliation Review\n• Vendor Payment Verification\n• Statutory Compliance Review\n• Financial Process Evaluation\n• Recommendations for Improvement"
          },
          {
            title: "Monthly Accounting Review & Monitoring",
            content: "Regular monitoring of society accounts helps Managing Committees maintain financial discipline and identify issues before they become significant concerns.\nOur Services Include:\n• Monthly Account Review\n• Financial Health Check\n• Collection Monitoring\n• Expense Analysis\n• Budget Variance Review\n• Outstanding Dues Review\n• Fund Utilization Review\n• Compliance Monitoring"
          }
        ],
        chartData: []
      },
      {
        id: "society-redevelopment",
        title: "Redevelopment Advisory & Support",
        price: "Custom Pricing",
        description: "Professional redevelopment advisory services for housing societies, including feasibility assessment, compliance support, member coordination, and financial evaluation.",
        faqs: [
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
        ],
        longDesc: "Professional Guidance for Housing Society Redevelopment Projects\nRedevelopment is a major milestone for any housing society and requires careful planning, transparent decision-making, and compliance with applicable regulations.\nOur Redevelopment Advisory & Support Services help societies evaluate redevelopment opportunities, manage documentation, and facilitate smooth communication among stakeholders throughout the process.\n\nOur objective is to help housing societies make informed redevelopment decisions through structured guidance, proper documentation, regulatory compliance, and transparent communication.",
        checklist: [],
        features: [],
        sections: [
          {
            title: "Preliminary Redevelopment Assessment",
            content: "• Evaluation of the society's redevelopment potential\n• Review of existing property records and redevelopment feasibility\n• Identification of key considerations and next steps"
          },
          {
            title: "Compliance Review",
            content: "• Assessment of statutory and regulatory requirements\n• Review of society records, resolutions, and documentation\n• Guidance on compliance with applicable redevelopment procedures"
          },
          {
            title: "Member Communication Support",
            content: "• Assistance in organizing member meetings and discussions\n• Preparation of notices, presentations, and communication materials\n• Support in maintaining transparency and member engagement"
          },
          {
            title: "Documentation Assistance",
            content: "• Review and organization of society records and redevelopment documents\n• Assistance with resolutions, meeting minutes, notices, and member-related documentation\n• Support in maintaining proper records throughout the redevelopment process"
          },
          {
            title: "Financial Evaluation Support",
            content: "• Assistance in reviewing and comparing redevelopment proposals\n• Evaluation of financial benefits, compensation structures, and project-related commercial aspects\n• Support in understanding the financial implications of redevelopment decisions"
          }
        ],
        chartData: []
      },
      {
        id: "society-documentation",
        title: "Society Documentation & Certification Services",
        price: "Custom Pricing",
        description: "Expert support for society NOCs, share certificates, membership transfers, and documentation services to ensure smooth and compliant member transactions.",
        faqs: [
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
        ],
        longDesc: "Efficient Documentation Support for Housing Societies\nProper documentation is essential for the smooth functioning of a co-operative housing society and for facilitating various member transactions.\nOur services help ensure that society records are maintained accurately and that members receive timely documentation support for property transactions, loan applications, membership transfers, and other official requirements.\n\nOur objective is to help housing societies maintain accurate records, comply with statutory requirements, and provide efficient documentation services to members in a timely and professional manner.",
        checklist: [],
        features: [],
        sections: [
          {
            title: "NOC for Flat Transfer",
            content: "• Preparation and issuance of No Objection Certificates for transfer of flats\n• Verification of society records and transfer requirements\n• Documentation support for ownership changes"
          },
          {
            title: "NOC for Sale of Flat",
            content: "• Assistance in processing NOCs required for property sale transactions\n• Review of society dues and compliance requirements\n• Documentation support for smooth sale procedures"
          },
          {
            title: "NOC for Home Loans",
            content: "• Preparation of society NOCs required by banks and financial institutions\n• Verification of property and society records\n• Assistance in meeting lender documentation requirements"
          },
          {
            title: "NOC for Passport Verification",
            content: "• Issuance of address and residence-related confirmations for passport applications\n• Verification of member records and occupancy details"
          },
          {
            title: "Membership Transfer Documentation",
            content: "• Preparation and processing of membership transfer forms\n• Support for admission of new members\n• Maintenance and updating of membership records"
          },
          {
            title: "Share Certificate Documentation",
            content: "• Preparation, issuance, endorsement, and updating of share certificates\n• Recording ownership changes and membership transfers\n• Assistance in maintaining statutory share certificate records"
          },
          {
            title: "Society Certificates & Confirmations",
            content: "• Issuance of various certificates and confirmations required by members, banks, government authorities, and legal professionals\n• Preparation of occupancy, membership, and society-related certifications"
          },
          {
            title: "Duplicate Share Certificate Assistance",
            content: "• Guidance on procedures for obtaining duplicate share certificates\n• Documentation support for lost, misplaced, or damaged share certificates\n• Assistance with statutory declarations and record updates"
          }
        ],
        chartData: []
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
    title: "Business Formation, Registration & Compliance",
    description: "One-stop solution for company registration, Government registration, compliance and Virtual CFO services to support sustainable business growth.",
    subServices: [
      {
        id: "company-formation",
        title: "Company Formation",
        price: "₹4,999",
        badge: "NEW",
        description: "Transform your business idea into a legally registered entity. We provide end-to-end support for business incorporation, business setup services and regulatory compliance.",
        subSubServices: [
          {
            slug: "private-limited-company-registration",
            title: "Private Limited Company Registration",
            sections: [
              {
                title: "What is a Private Limited Company?",
                content: `A Private Limited Company is a company incorporated under the Companies Act, 2013. It is one of the most preferred and widely adopted business structures in India due to its separate legal identity, limited liability protection, credibility, and ease of raising funds.\n\nA Private Limited Company is a separate legal entity from its shareholders and directors. It can own property, enter into contracts, sue, and be sued in its own name.\n\nA Private Limited Company must have:\n• Minimum 2 Shareholders\n• Maximum 200 Shareholders\n• Minimum 2 Directors\n• Maximum 15 Directors (more can be appointed by passing a special resolution)\n• At least one Resident Director in India\n\nIndian residents, NRIs, foreign nationals, and foreign companies can become shareholders or directors, subject to applicable laws and regulations.`
              },
              {
                title: "Advantages of a Private Limited Company",
                content: `• Separate legal entity\n• Limited liability protection for shareholders\n• Better credibility and business image\n• Easy transfer of ownership\n• Perpetual succession\n• Better fundraising opportunities\n• Ability to issue shares and ESOPs\n• Suitable for start-ups and growing businesses\n• Greater acceptance among investors, banks, and financial institutions`
              },
              {
                title: "Minimum Requirements for Company Registration",
                content: `• Minimum 2 Directors\n• Minimum 2 Shareholders\n• Registered Office Address in India\n• Digital Signature Certificate (DSC) for Directors\n• Director Identification Number (DIN) for Directors\n\nNote: There is no minimum paid-up capital requirement for incorporating a Private Limited Company.`
              },
              {
                title: "Documents Required for Company Registration",
                content: `**Documents of Directors/Shareholders**\n• PAN Card\n• Aadhaar Card / Voter ID / Passport\n• Passport Size Photograph\n• Mobile Number\n• Email ID\n\n**Registered Office Documents**\nIf the premises are rented:\n• Rent Agreement\n• No Objection Certificate (NOC) from the Owner\n• Latest Electricity Bill / Water Bill / Gas Bill\n\nIf the premises are owned:\n• Ownership Document\n• Latest Utility Bill\n\n**Additional Documents for Foreign Nationals / NRIs**\n• Passport\n• Address Proof\n• Notarized and Apostilled Documents (where applicable)`
              },
              {
                title: "Steps for Company Registration",
                content: `Step 1: Obtain DSC\nStep 2: Company Name Approval\nStep 3: Preparation of Incorporation Documents\nStep 4: Filing of Incorporation Application\nStep 5: Issue of Certificate of Incorporation\nStep 6: Opening of Bank Account`
              }
            ],
            faqs: [
              { question: "Private Limited Company FAQs", answer: "", isHeading: true },
              { question: "Do I need to be physically present during the registration process?", answer: "No. Company registration is a completely online process. All documents are submitted electronically, and physical presence is generally not required." },
              { question: "How much time is required to register a Private Limited Company?", answer: "Subject to document availability and MCA approval, the registration process generally takes 7 to 15 working days." },
              { question: "Is there any minimum capital requirement?", answer: "No. There is currently no minimum paid-up capital requirement for incorporating a Private Limited Company in India." },
              { question: "Is it necessary to purchase an office premises?", answer: "No. A company can be registered from a rented premise or even a residential address, subject to submission of valid address proof and supporting documents." },
              { question: "Can a Foreign National or NRI become a Director?", answer: "Yes. Foreign Nationals and NRIs can become Directors or Shareholders of a Private Limited Company, subject to applicable laws and regulatory requirements. However, at least one Director must be a Resident Director in India." },
              { question: "What is a DSC?", answer: "A Digital Signature Certificate (DSC) is an electronic signature issued by authorized Certifying Authorities. It is used for signing and filing documents electronically with government departments." },
              { question: "What are the annual compliance requirements?", answer: "A Private Limited Company is required to comply with annual ROC filings, maintenance of statutory records, accounting, auditing, income tax filings, and other applicable regulatory compliances." },
              { question: "Can a salaried employee become a Director in a Private Limited Company?", answer: "Yes. A salaried employee can become a Director, subject to the terms and conditions of their employment agreement." },
              { question: "Can an LLP be converted into a Private Limited Company?", answer: "Conversion of an LLP into a Company involves legal and regulatory procedures. Professional advice should be obtained based on the specific circumstances." },
              { question: "Can I register a Private Limited Company at my residential address?", answer: "Yes. A residential address can be used as the registered office of the company by providing valid address proof and supporting documents." }
            ]
          },
          {
            slug: "llp-registration",
            title: "LLP Registration",
            sections: [
              {
                title: "What is a Limited Liability Partnership (LLP)?",
                content: `A Limited Liability Partnership (LLP) is a business structure governed by the Limited Liability Partnership Act, 2008. It combines the advantages of a traditional partnership with the benefits of limited liability.

An LLP is a separate legal entity from its partners and offers flexibility in management while protecting the personal assets of partners from business liabilities. It is one of the most preferred business structures for professionals, consultants, startups, family-owned businesses, and small and medium enterprises (SMEs).

In an LLP, partners are not personally liable for the misconduct or negligence of other partners. Their liability is generally limited to the extent of their agreed contribution to the LLP.`
              },
              {
                title: "Advantages of an LLP",
                content: `**Separate Legal Entity**
An LLP has a legal identity separate from its partners and can own assets, enter into contracts, sue, and be sued in its own name.

**Limited Liability**
The liability of partners is limited to their contribution in the LLP, protecting personal assets from business liabilities.

**Perpetual Succession**
The LLP continues to exist irrespective of changes in partners.

**Easy Transferability**
Ownership interests can be transferred subject to the LLP Agreement.

**Lower Compliance Requirements**
Compared to companies, LLPs have fewer compliance and regulatory requirements.

**Easy Management**
LLPs offer flexibility in internal management through the LLP Agreement.

**Ability to Own Property**
An LLP can acquire, own, hold, and dispose of property in its own name.

**Easy Closure**
The process of winding up an LLP is generally simpler than that of a company.`
              },
              {
                title: "Minimum Requirements for LLP Registration",
                content: `• Minimum 2 Partners
• No Minimum Capital Requirement
• At least 2 Designated Partners
• At least 1 Designated Partner must be a Resident of India
• Registered Office Address in India
• Digital Signature Certificate (DSC) for Designated Partners

Note: There is no maximum limit on the number of partners in an LLP.`
              },
              {
                title: "Documents Required",
                content: `**Documents of Partners**
• PAN Card
• Aadhaar Card / Voter ID / Passport
• Passport Size Photograph
• Mobile Number
• Email ID

**Registered Office Documents**
If the premises are rented:
• Rent Agreement
• No Objection Certificate (NOC) from Owner
• Latest Electricity Bill / Water Bill / Gas Bill

If the premises are owned:
• Ownership Document
• Latest Utility Bill

**Additional Documents for Foreign Nationals / NRIs**
• Passport
• Overseas Address Proof
• Notarized and Apostilled Documents (where applicable)`
              },
              {
                title: "Registration Process",
                content: `Step 1: Obtain DSC
Step 2: Name Reservation
Step 3: Filing of LLP Incorporation Application
Step 4: Issue of LLP Incorporation Certificate
Step 5: Execution and Filing of LLP Agreement
Step 6: Apply for PAN and Open Bank Account`
              }
            ],
            faqs: [
              { question: "LLP Registration FAQs", answer: "", isHeading: true },
              { question: "What is the minimum number of partners required to start an LLP?", answer: "A minimum of two partners is required to incorporate an LLP. There is no maximum limit on the number of partners." },
              { question: "Who can become a Partner or Designated Partner in an LLP?", answer: "Any individual, company, LLP, or body corporate can become a partner in an LLP. However, only an individual can act as a Designated Partner." },
              { question: "What is an LLP Agreement?", answer: "An LLP Agreement is a legal document executed between the partners that governs the rights, duties, responsibilities, profit-sharing arrangements, and management of the LLP." },
              { question: "Can an NRI or Foreign National become a Partner in an LLP?", answer: "Yes. NRIs and Foreign Nationals can become partners in an LLP, subject to applicable laws and regulations. However, at least one Designated Partner must be a Resident of India." },
              { question: "Is an LLP cheaper to maintain than a Private Limited Company?", answer: "Generally, yes. LLPs have fewer compliance requirements and lower maintenance costs compared to Private Limited Companies, making them a popular choice for professionals and small businesses." },
              { question: "Can I register an LLP at my residential address?", answer: "Yes. An LLP can be registered at a residential address, provided valid address proof and supporting documents are submitted." },
              { question: "Can a salaried employee become a Partner in an LLP?", answer: "Yes. A salaried employee can become a partner in an LLP, subject to the terms of their employment agreement." },
              { question: "Is audit mandatory for an LLP?", answer: "Audit is mandatory if:\n• Annual Turnover exceeds ₹40 Lakhs; or\n• Contribution exceeds ₹25 Lakhs\nThe accounts must then be audited by a Chartered Accountant." },
              { question: "What is the stamp duty payable on an LLP Agreement?", answer: "Stamp duty on an LLP Agreement varies from state to state and depends on the amount of contribution and applicable state laws." },
              { question: "Can an LLP be incorporated for non-profit activities?", answer: "No. An LLP is formed with the objective of carrying on a lawful business with a view to earning profits. Non-profit activities are generally undertaken through entities such as Trusts, Societies, or Section 8 Companies." },
              { question: "Can an LLP be converted into a Private Limited Company?", answer: "Yes. Subject to compliance with applicable legal provisions and regulatory requirements, an LLP may be converted into a Company. Professional advice should be obtained before undertaking such conversion." }
            ]
          },
          {
            slug: "partnership-firm-registration",
            title: "Partnership Firm Registration",
            sections: [
              {
                title: "What is a Partnership Firm?",
                content: `A Partnership Firm is a business structure formed by two or more persons who agree to carry on a lawful business and share its profits and losses according to mutually agreed terms.

Partnership Firms in India are governed by the Indian Partnership Act, 1932. The relationship between partners is defined through a Partnership Deed, which contains details such as capital contribution, profit-sharing ratio, rights, duties, and responsibilities of the partners.

A Partnership Firm is one of the simplest and most economical forms of business organization and is widely preferred by small and medium-sized businesses, family-owned enterprises, and professional firms.

Partnership Firms may be:
• Registered Partnership Firm
• Unregistered Partnership Firm

Although registration is not mandatory under the Partnership Act, registration provides several legal advantages and is generally recommended.`
              },
              {
                title: "Advantages of a Partnership Firm",
                content: `**Easy Formation**
A Partnership Firm can be established quickly with minimal legal formalities.

**Shared Investment**
Partners contribute capital jointly, reducing the financial burden on a single individual.

**Simple Management**
Decision-making and business operations can be managed collectively by the partners.

**Minimal Compliance**
Partnership Firms have fewer compliance requirements compared to companies and LLPs.

**Flexibility**
Partners can mutually decide the terms and conditions of business operations through the Partnership Deed.

**Cost-Effective Structure**
Formation and maintenance costs are relatively low.`
              },
              {
                title: "Minimum Requirements for Partnership Registration",
                content: `• Minimum 2 Partners
• Partnership Deed
• Registered Business Address
• PAN and Address Proof of Partners

Note: There is no minimum capital requirement for starting a Partnership Firm.`
              },
              {
                title: "Documents Required",
                content: `**Documents of Partners**
• PAN Card
• Aadhaar Card / Voter ID / Passport
• Passport Size Photograph
• Mobile Number
• Email ID

**Business Address Proof**
If the premises are rented:
• Rent Agreement
• No Objection Certificate (NOC) from Owner
• Latest Electricity Bill / Water Bill / Gas Bill

If the premises are owned:
• Ownership Document
• Latest Utility Bill

**Additional Documents**
• Partnership Deed
• Application for Registration (where registration is sought)`
              },
              {
                title: "Registration Process",
                content: `Step 1: Drafting of Partnership Deed
Step 2: Registration of Partnership Firm (Optional)
Step 3: PAN and TAN Application
Step 4: Opening of Bank Account`
              }
            ],
            faqs: [
              { question: "Partnership Firm FAQs", answer: "", isHeading: true },
              { question: "What is the eligibility criteria for becoming a partner?", answer: "Any person competent to contract under the Indian Contract Act, 1872 can become a partner in a Partnership Firm." },
              { question: "Is there any minimum capital requirement for a Partnership Firm?", answer: "No. There is no minimum capital requirement prescribed for starting a Partnership Firm." },
              { question: "Is a Partnership Firm a separate legal entity?", answer: "No. A Partnership Firm is not a separate legal entity from its partners. The partners are jointly responsible for the obligations and liabilities of the firm." },
              { question: "How many partners can a Partnership Firm have?", answer: "A Partnership Firm must have a minimum of two partners. The maximum number of partners is generally governed by applicable laws and regulatory provisions. Professional advice should be obtained for specific cases." },
              { question: "What is the validity period of a Partnership Firm?", answer: "A Partnership Firm can continue indefinitely unless dissolved by mutual agreement, operation of law, or as provided in the Partnership Deed." },
              { question: "Is a Partnership Deed mandatory?", answer: "Although a written Partnership Deed is not legally mandatory, it is strongly recommended as it clearly defines the rights, duties, responsibilities, and profit-sharing arrangements among partners." },
              { question: "Is registration of a Partnership Firm compulsory?", answer: "No. Registration is optional under the Indian Partnership Act, 1932. However, a registered firm enjoys certain legal benefits and can more effectively enforce its rights in court." },
              { question: "What should be included in a Partnership Deed?", answer: "A Partnership Deed generally contains:\n• Name and Address of Partners\n• Firm Name\n• Nature of Business\n• Capital Contribution\n• Profit and Loss Sharing Ratio\n• Rights and Duties of Partners\n• Admission and Retirement of Partners\n• Dispute Resolution Mechanism\n• Dissolution Clauses" },
              { question: "Can a Partnership Firm be registered at a residential address?", answer: "Yes. A residential address can be used as the business address, subject to submission of valid address proof and supporting documents." },
              { question: "Can a salaried employee become a partner in a Partnership Firm?", answer: "Yes. A salaried employee may become a partner in a Partnership Firm, subject to the terms and conditions of their employment agreement." },
              { question: "Is audit mandatory for a Partnership Firm?", answer: "Audit requirements depend upon the applicable provisions of the Income Tax Act and other relevant laws. Professional advice should be obtained based on the firm's turnover and nature of business." }
            ]
          },
          {
            slug: "public-limited-company-registration",
            title: "Public Limited Company Registration",
            sections: [
              {
                title: "What is a Public Limited Company?",
                content: `A Public Limited Company is a company incorporated under the Companies Act, 2013. It is a company whose shares can be offered to the public and, subject to compliance with applicable laws and regulations, may be listed on a recognized stock exchange.

A Public Limited Company is a separate legal entity from its shareholders and directors. It enjoys perpetual succession and provides limited liability protection to its members.

A Public Limited Company must have:
• Minimum 7 Shareholders
• Minimum 3 Directors
• At least One Resident Director in India
• No restriction on the maximum number of shareholders
• Maximum 15 Directors (more can be appointed by passing a special resolution)`
              },
              {
                title: "Why Choose a Public Limited Company?",
                content: `• Separate legal entity
• Limited liability protection
• Ability to raise capital from the public
• Greater business credibility
• Easy transferability of shares
• Better access to financial institutions and investors
• Potential for listing on a recognized stock exchange
• Perpetual succession`
              },
              {
                title: "Advantages of a Public Limited Company",
                content: `• Separate legal existence from its shareholders
• Enhanced credibility and public confidence
• Ability to raise substantial capital through public offerings
• Free transferability of shares
• Perpetual succession irrespective of changes in ownership
• Better opportunities for expansion and growth
• Improved access to debt and equity financing

A Public Limited Company can own, acquire, transfer, and dispose of property in its own name. Shareholders do not have any direct claim over the company's assets.`
              },
              {
                title: "Minimum Requirements for Public Limited Company Registration",
                content: `• Minimum 7 Shareholders (Members)
• Minimum 3 Directors
• At least 1 Director must be a Resident of India
• Registered Office Address in India
• Digital Signature Certificate (DSC) for Proposed Directors
• Director Identification Number (DIN) for Proposed Directors
• Unique Company Name approved by the Registrar of Companies (ROC)
• Memorandum of Association (MOA) and Articles of Association (AOA)

Note: There is no minimum paid-up capital requirement prescribed under the Companies Act, 2013 for incorporation of a Public Limited Company. The company may be incorporated with any amount of capital as determined by its business requirements.`
              },
              {
                title: "Documents Required",
                content: `**Documents for Directors and Shareholders**
• PAN Card
• Aadhaar Card / Voter ID / Passport
• Passport Size Photograph
• Mobile Number
• Email ID

**Registered Office Documents**
If the premises are rented:
• Rent Agreement
• No Objection Certificate (NOC) from Owner
• Latest Electricity Bill / Water Bill / Gas Bill

If the premises are owned:
• Ownership Document
• Latest Utility Bill

**Additional Documents for Foreign Nationals / NRIs**
• Passport
• Overseas Address Proof
• Notarized and Apostilled Documents (where applicable)`
              },
              {
                title: "Registration Process",
                content: `Step 1: Obtain DSC
Step 2: Company Name Approval
Step 3: Preparation of Incorporation Documents
Step 4: Filing of Incorporation Application
Step 5: Issue of Certificate of Incorporation
Step 6: Opening of Bank Account`
              }
            ],
            faqs: [
              { question: "Public Limited Company FAQs", answer: "", isHeading: true },
              { question: "Do I need to be physically present during the registration process?", answer: "No. Public Limited Company registration is a completely online process. Physical presence is generally not required, and documents can be submitted electronically." },
              { question: "Is there any limit on the number of shareholders in a Public Limited Company?", answer: "No. There is no maximum limit on the number of shareholders in a Public Limited Company. However, a minimum of seven shareholders is required." },
              { question: "Is there any minimum capital requirement for incorporation?", answer: "No. There is currently no minimum paid-up capital requirement prescribed for incorporating a Public Limited Company." },
              { question: "How many directors are required for a Public Limited Company?", answer: "A minimum of three directors is required. The maximum number of directors is fifteen, unless increased by passing a special resolution." },
              { question: "Can an NRI or Foreign National become a Director?", answer: "Yes. NRIs and Foreign Nationals can become directors or shareholders in a Public Limited Company, subject to applicable laws and regulations. At least one director must be a resident of India." },
              { question: "Can a Public Limited Company be converted into a Private Limited Company?", answer: "Yes. A Public Limited Company may be converted into a Private Limited Company subject to compliance with the provisions of the Companies Act, 2013 and approval from the relevant authorities." },
              { question: "Is it necessary to purchase office premises for company registration?", answer: "No. The registered office can be a rented property, owned property, or residential address, subject to submission of valid supporting documents." },
              { question: "What is a DSC?", answer: "A Digital Signature Certificate (DSC) is an electronic signature issued by authorized Certifying Authorities. It is used for signing and filing documents electronically with government authorities." },
              { question: "What are the annual compliance requirements of a Public Limited Company?", answer: "A Public Limited Company is required to maintain statutory records, conduct audits, hold board and shareholder meetings, and file annual returns and financial statements with the Registrar of Companies (ROC)." },
              { question: "Can a salaried employee become a Director in a Public Limited Company?", answer: "Yes. A salaried individual can serve as a director, subject to the terms of their employment agreement and applicable laws." }
            ]
          },
          {
            slug: "trust-registration",
            title: "Trust Registration",
            sections: [
              {
                title: "What is a Trust?",
                content: `A Trust is a legal arrangement established for charitable, religious, educational, medical, or social welfare purposes. It is created when a settlor transfers assets or property to trustees, who manage them for the benefit of beneficiaries or for achieving specific charitable objectives. Trusts are governed primarily by the Indian Trusts Act, 1882 (for private trusts) and relevant state laws governing public charitable trusts.`
              },
              {
                title: "Advantages of Trust Registration",
                content: `• Establishes legal recognition and credibility.
• Suitable for charitable, educational, religious, and social welfare activities.
• Enables receipt of donations and grants.
• Facilitates tax exemptions subject to applicable laws.
• Provides perpetual succession and continuity.
• Enhances public trust and transparency.
• Enables ownership and management of assets in the name of the Trust.`
              },
              {
                title: "Minimum Requirements",
                content: `• Minimum 2 Trustees (may vary as per state regulations).
• Settlor (Founder) to establish the Trust.
• Trust Deed specifying objectives and governance structure.
• Registered office address.
• Identity and address proof of Settlor and Trustees.
• Initial Trust Property or Corpus Fund.`
              },
              {
                title: "Documents Required",
                content: `**For Settlor and Trustees**
• PAN Card
• Aadhaar Card / Passport / Voter ID / Driving License
• Passport-size Photographs
• Mobile Number and Email ID

**Registered Office Proof**
• Electricity Bill / Property Tax Receipt / Utility Bill
• Rent Agreement (if premises are rented)
• No Objection Certificate (NOC) from the property owner

**Other Documents**
• Draft Trust Deed
• Details of Trust Objectives
• Details of Trustees and Settlor`
              },
              {
                title: "Registration Process",
                content: `Step 1: Consultation & Documentation
Step 2: Drafting of Trust Deed
Step 3: Execution of Trust Deed
Step 4: Registration with Sub-Registrar
Step 5: PAN Application
Step 6: Tax Registration (if applicable)`
              }
            ],
            faqs: [
              { question: "Trust Registration FAQs", answer: "", isHeading: true },
              { question: "How many trustees are required to form a Trust?", answer: "Generally, a minimum of two trustees is required, though requirements may vary depending on the state." },
              { question: "Is Trust Registration mandatory?", answer: "While a trust can be created through a deed, registration is recommended to provide legal validity and credibility." },
              { question: "Can a Trust receive donations?", answer: "Yes. Registered trusts can receive donations and may apply for tax exemption registrations such as 12A and 80G." },
              { question: "Can a Trust own property?", answer: "Yes. A Trust can acquire, hold, and manage movable and immovable property in its name." },
              { question: "How long does Trust Registration take?", answer: "Typically, registration may take 7–15 working days, subject to documentation and local authority procedures." },
              { question: "Can foreign citizens become trustees?", answer: "Yes, subject to applicable laws and compliance requirements." },
              { question: "What is the difference between a Trust, Society, and Section 8 Company?", answer: "All are non-profit structures. Trusts are generally easier to form, while Societies and Section 8 Companies have different governance and compliance requirements." },
              { question: "Can the objectives of a Trust be changed later?", answer: "Changes may be possible depending on the provisions of the Trust Deed and applicable legal requirements." }
            ]
          },
          {
            slug: "indian-subsidiary-foreign-entrepreneurs",
            title: "Indian Subsidiary for Foreign Entrepreneurs",
            sections: [
              {
                title: "What is an Indian Subsidiary Company?",
                content: `An Indian Subsidiary Company is a company incorporated in India in which a foreign company or another company holds controlling ownership.

Under the Companies Act, 2013, a company is considered a subsidiary of another company (holding company) if the holding company:
• Controls the composition of its Board of Directors; or
• Exercises or controls more than one-half of the total voting power, either directly or together with its subsidiary companies.

A foreign company can establish an Indian Subsidiary Company to conduct business operations in India, subject to applicable Foreign Direct Investment (FDI) regulations.

An Indian Subsidiary Company is treated as an Indian company for legal and taxation purposes and enjoys the benefits of a separate legal identity.`
              },
              {
                title: "Advantages of an Indian Subsidiary Company",
                content: `**Separate Legal Entity**
An Indian Subsidiary is a separate legal entity distinct from its shareholders and parent company.

**Limited Liability Protection**
The liability of shareholders is limited to the extent of their shareholding.

**Eligible for Foreign Direct Investment (FDI)**
Foreign investment is permitted in many sectors under the automatic route, subject to sector-specific regulations.

**Indian Company Status**
The subsidiary is treated as an Indian company under applicable laws, including taxation and corporate regulations.

**Ease of Business Operations**
An Indian Subsidiary can enter into contracts, own property, hire employees, and conduct business activities in India.

**Dividend Repatriation**
Subject to applicable laws and taxes, profits may be repatriated to the foreign parent company.`
              },
              {
                title: "Minimum Requirements for Indian Subsidiary Registration",
                content: `• Minimum 2 Shareholders
• Minimum 2 Directors
• At least 1 Director must be a Resident of India
• Registered Office Address in India
• Digital Signature Certificate (DSC) for Directors
• Director Identification Number (DIN) for Directors
• Foreign Parent Company must hold a controlling stake to qualify as a subsidiary

Note: There is currently no minimum paid-up capital requirement for incorporation of an Indian Subsidiary Company.`
              },
              {
                title: "Documents Required",
                content: `**Documents of Indian Directors**
• PAN Card
• Aadhaar Card / Voter ID / Passport
• Passport Size Photograph
• Mobile Number
• Email ID

**Documents of Foreign Directors**
• Passport
• Overseas Address Proof
• Passport Size Photograph
• Email ID
• Mobile Number

Documents may require notarization and apostille/legalization depending upon the country of origin.

**Documents of Foreign Parent Company**
• Certificate of Incorporation
• Charter Documents (MOA, AOA, Articles, By-laws, etc.)
• Board Resolution approving investment in the Indian Subsidiary
• Authorized Signatory Resolution
• Shareholding Structure of Parent Company

**Registered Office Documents**
If the premises are rented:
• Rent Agreement
• No Objection Certificate (NOC) from Owner
• Latest Electricity Bill / Water Bill / Gas Bill

If the premises are owned:
• Ownership Document
• Latest Utility Bill`
              },
              {
                title: "Registration Process",
                content: `Step 1: Obtain DSC
Step 2: Name Reservation
Step 3: Preparation of Incorporation Documents
Step 4: Filing of Incorporation Application
Step 5: Issue of Certificate of Incorporation
Step 6: Opening of Bank Account
Step 7: FEMA and RBI Compliance`
              }
            ],
            faqs: [
              { question: "Indian Subsidiary Registration FAQs", answer: "", isHeading: true },
              { question: "What are the minimum requirements for incorporating an Indian Subsidiary?", answer: "• Minimum 2 Shareholders\n• Minimum 2 Directors\n• At least 1 Resident Director in India\n• Registered Office Address in India\nThere is no minimum paid-up capital requirement." },
              { question: "Can an Indian Company be a 100% subsidiary of a Foreign Company?", answer: "Yes. Subject to applicable FDI regulations and sector-specific restrictions, a foreign company may own up to 100% of an Indian subsidiary in sectors where such investment is permitted." },
              { question: "Can a Foreign Company acquire an Indian Company?", answer: "Yes. Foreign companies can acquire shares in Indian companies subject to FEMA regulations, FDI policy, sectoral caps, and applicable approvals where required." },
              { question: "Can a Foreign Company purchase land in India?", answer: "The ability of foreign entities to acquire immovable property in India is regulated under FEMA and RBI regulations. Specific legal advice should be obtained based on the nature of the entity and transaction." },
              { question: "Can Foreign Investors invest in Indian Real Estate?", answer: "Foreign investment in the real estate sector is permitted subject to applicable FDI regulations and sector-specific conditions issued by the Government of India and the Reserve Bank of India." },
              { question: "What is the Automatic Route under FDI?", answer: "Under the Automatic Route, foreign investment is permitted without prior approval of the Government of India, subject to sector-specific limits and conditions." },
              { question: "What is the Government Approval Route under FDI?", answer: "Under the Government Route, prior approval from the Government of India is required before foreign investment can be made in specified sectors." },
              { question: "Can Foreign Nationals become Directors in an Indian Subsidiary?", answer: "Yes. Foreign nationals can be appointed as directors, subject to compliance with the Companies Act, 2013 and other applicable laws. At least one director must be a resident of India." },
              { question: "How long does it take to register an Indian Subsidiary Company?", answer: "Subject to document availability, foreign document legalization requirements, and regulatory approvals, incorporation generally takes 10–20 working days." },
              { question: "Is RBI approval required for every Indian Subsidiary?", answer: "No. RBI or Government approval is only required in sectors where investment is not permitted under the Automatic Route or where specific approvals are mandated under FDI regulations." }
            ]
          }
        ]
      },
      {
        id: "registrations",
        title: "Registrations",
        price: "₹1,999",
        badge: "SPECIAL",
        description: "Comprehensive Government registration, licensing, and certification services for businesses, startups, MSMEs, and NGOs, ensuring seamless regulatory compliance and operational readiness.",
        subSubServices: [
          {
            slug: "professional-tax-registration",
            title: "Professional Tax Registration & Returns",
            sections: [
              {
                title: "Professional Tax Compliance Made Simple",
                content: `Whether you are a startup, SME, LLP, company, professional, or growing business, ConsultAvenuee provides comprehensive Professional Tax registration, return filing, compliance management, and advisory services to help you remain compliant while focusing on business growth.\n\n**Professional Tax Registration, Return Filing & Compliance Support**\nProfessional Tax (PT) is a state-level levy applicable in certain states on persons engaged in professions, trades, callings, and employments. Employers and eligible businesses may be required to obtain registrations, comply with tax obligations, and file prescribed returns under the applicable State Professional Tax laws.`
              },
              {
                title: "What is Professional Tax?",
                content: `Professional Tax is a tax imposed by certain State Governments on individuals earning income through employment, profession, trade, or business activities.\n\nThe applicability, registration requirements, compliance procedures, filing obligations, and tax rates are governed by the respective State laws and may vary across jurisdictions.\n\nDepending on the nature of the entity and its activities, businesses and employers may be required to obtain one or more Professional Tax registrations and comply with ongoing statutory requirements.\n\nBusinesses may be required to obtain:\n\n**Professional Tax Enrolment Certificate (PTEC)**\nApplicable to:\n• Proprietorship Firms\n• Partnership Firms\n• LLPs\n• Companies\n• Professionals and Consultants\n• Directors and Partners\n\n**Professional Tax Registration Certificate (PTRC)**\nApplicable to employers who:\n• Employ staff or workers\n• Deduct Professional Tax from employee salaries\n• Deposit the deducted tax with the Government`
              },
              {
                title: "Who May Be Required to Obtain Professional Tax Registration?",
                content: `Professional Tax registration requirements may apply to:\n• Proprietorship Firms\n• Partnership Firms\n• Limited Liability Partnerships (LLPs)\n• Private Limited Companies\n• Public Limited Companies\n• Professionals and Consultants\n• Directors and Partners\n• Employers engaging employees or workers\n• Other entities covered under applicable State Professional Tax laws\n\nThe exact applicability depends on the provisions of the relevant State legislation.`
              },
              {
                title: "Documents Generally Required for Registration",
                content: `The documentation requirements may vary depending on the constitution of the entity and the applicable State laws.\n\nCommonly required documents may include:\n\n**Proprietorship Concerns**\n• PAN Card\n• Aadhaar Card\n• Address Proof\n• Business Address Proof\n• Bank Account Details\n• Business Registration Documents, if applicable\n\n**Partnership Firms and LLPs**\n• PAN Card\n• Partnership Deed or LLP Agreement\n• Partner Identification Documents\n• Address Proof\n• Business Registration Documents\n\n**Companies**\n• Certificate of Incorporation\n• PAN Card\n• Constitutional Documents\n• Registered Office Address Proof\n• Director Identification Documents\n• Employee Information, where applicable\n\nAdditional documents may be required depending on the nature of the business and State-specific regulations.`
              },
              {
                title: "Professional Tax Compliance Process",
                content: `Step 1: Applicability Review\nStep 2: Registration\nStep 3: Tax Computation\nStep 4: Tax Payment\nStep 5: Return Filing\nStep 6: Ongoing Compliance Management`
              },
              {
                title: "Consequences of Non-Compliance",
                content: `Failure to comply with Professional Tax provisions may result in:\n• Interest on delayed payments\n• Monetary penalties\n• Compliance notices\n• Assessment proceedings\n• Difficulties during statutory audits and regulatory reviews\n\nThe nature and extent of consequences depend upon the applicable State laws.`
              }
            ],
            faqs: [
              { question: "Professional Tax Registration FAQs", answer: "", isHeading: true },
              { question: "Is Professional Tax applicable throughout India?", answer: "No. Professional Tax is governed by State laws and is applicable only in those States that have enacted Professional Tax legislation." },
              { question: "Who is required to obtain Professional Tax registration?", answer: "Registration requirements depend on the nature of the business, profession, employment structure, and the provisions of the applicable State law." },
              { question: "Are employers required to comply with Professional Tax provisions?", answer: "Employers may be required to comply with Professional Tax obligations in relation to their employees, subject to the applicable State regulations." },
              { question: "What happens if Professional Tax compliance is not completed on time?", answer: "Delayed compliance may result in interest, penalties, notices, and other consequences prescribed under the relevant State laws." },
              { question: "Can ConsultAvenuee manage Professional Tax compliance for multiple locations?", answer: "Yes. We assist businesses operating across multiple branches, offices, and jurisdictions with registration, compliance management, and return filing support." }
            ]
          },
          {
            slug: "shop-and-establishment-registration",
            title: "Shop & Establishment Registration",
            sections: [
              {
                title: "What is the Shops & Establishments Act?",
                content: `The Shops & Establishments Act is a state-specific labour legislation that regulates the registration and functioning of commercial establishments, offices, shops, service providers, and other business entities. The Act governs various employment-related matters, including working conditions, employee welfare, maintenance of records, and compliance requirements.\n\nRegistration under the applicable State Shops & Establishments Act serves as an important legal recognition of a business establishment and is often required for obtaining various licenses, registrations, and business approvals.`
              },
              {
                title: "Applicability",
                content: `The Act generally applies to various business and commercial establishments, including:\n• Retail and Wholesale Shops\n• Offices and Commercial Establishments\n• Service Providers and Consultancy Firms\n• Warehouses and Storage Facilities\n• Restaurants and Food Establishments\n• Hotels and Lodging Businesses\n• Educational and Training Institutions\n• Healthcare and Professional Service Establishments\n• Entertainment and Recreational Businesses\n• Other Commercial and Business Premises\n\nThe applicability and compliance requirements may vary depending on the state in which the business operates.`
              },
              {
                title: "Our Services",
                content: `We provide end-to-end assistance for:\n• Shops & Establishments Registration\n• Registration Amendments and Updates\n• Change in Business Details\n• Additional Place of Business Registration\n• Registration Renewal Support (where applicable)\n• Compliance Advisory\n• Labour Law Documentation Support\n• Maintenance of Statutory Records`
              },
              {
                title: "Documents Generally Required",
                content: `The documents required may vary depending on the nature of the entity and state-specific requirements.\n\n**Business Documents**\n• PAN Card of Proprietor / Entity\n• Certificate of Incorporation (for Companies)\n• LLP Incorporation Documents (for LLPs)\n• Partnership Deed (for Partnership Firms)\n• Memorandum & Articles of Association (for Companies)\n\n**Identity & Address Proof**\n• PAN Card\n• Aadhaar Card\n• Passport / Driving Licence / Voter ID (as applicable)\n\n**Business Address Proof**\n• Electricity Bill / Utility Bill\n• Property Tax Receipt\n• Rent Agreement (if premises are rented)\n• No Objection Certificate from Owner (where required)\n\n**Additional Documents**\n• Photographs of Proprietor / Partners / Directors\n• Contact Details\n• Employee Details (if applicable)\n\nAdditional documents may be required depending upon the state regulations and business activities.`
              },
              {
                title: "Records & Registers",
                content: `Businesses may be required to maintain prescribed records and registers under the applicable Shops & Establishments Rules, which may include:\n• Employee Register\n• Attendance Records\n• Salary and Wage Records\n• Leave Records\n• Employment and Appointment Records\n• Other Statutory Registers as prescribed\n\nThe nature of records to be maintained varies from state to state.`
              }
            ],
            faqs: [
              { question: "Shop & Establishment Registration FAQs", answer: "", isHeading: true },
              { question: "Is Shops & Establishments Registration mandatory?", answer: "Most commercial establishments are required to obtain registration under the applicable state law. Requirements vary from state to state." },
              { question: "Who can apply for Shops & Establishments Registration?", answer: "Proprietorships, Partnership Firms, LLPs, Companies, Professionals, Consultants, and other commercial establishments may be required to obtain registration." },
              { question: "Can registration details be amended later?", answer: "Yes. Changes relating to business address, ownership, business activities, or other particulars can generally be updated through prescribed procedures." },
              { question: "Do compliance requirements differ across states?", answer: "Yes. Registration procedures, documentation requirements, and compliance obligations may vary depending on the state in which the establishment operates." },
              { question: "Can ConsultAvenuee assist with registration and compliance?", answer: "Yes. We provide complete assistance for registration, amendments, compliance advisory, and maintenance of statutory records under the applicable Shops & Establishments laws." }
            ]
          },
          {
            slug: "startup-india-registration",
            title: "Startup India Registration",
            sections: [
              {
                title: "Accelerate Your Startup Growth with Government Recognition",
                content: `Startup India Recognition is an initiative designed to promote innovation, entrepreneurship, and business growth in India. Eligible startups can obtain recognition and access various benefits, support programs, networking opportunities, and regulatory advantages available under the Startup ecosystem.\n\nAt ConsultAvenuee, we provide end-to-end assistance for Startup India Recognition, helping entrepreneurs navigate the registration process and build a strong compliance foundation for future growth.`
              },
              {
                title: "What is Startup India Recognition?",
                content: `Startup India Recognition is available to eligible business entities that are engaged in innovation, development, improvement of products or services, or have scalable business models with growth potential.\n\nRecognition helps startups establish credibility and access various government-supported initiatives aimed at encouraging entrepreneurship and innovation.\n\nEligible entities may include:\n• Private Limited Companies\n• Limited Liability Partnerships (LLPs)\n• Registered Partnership Firms`
              },
              {
                title: "Benefits of Startup India Recognition",
                content: `• Enhanced Credibility\n• Access to Startup Ecosystem\n• Intellectual Property Support\n• Regulatory & Compliance Benefits\n• Funding & Growth Opportunities\n• Market Access`
              },
              {
                title: "Eligibility Assessment",
                content: `Eligibility for Startup India Recognition depends upon various factors, including:\n• Nature of business activities\n• Innovation and scalability of the business model\n• Legal structure of the entity\n• Compliance with applicable regulatory requirements\n\nOur team assists in evaluating eligibility before initiating the application process.`
              },
              {
                title: "Documents Generally Required",
                content: `The documentation requirement may vary depending on the type of entity and nature of business.\n\n**Entity Documents**\n• Certificate of Incorporation / Registration\n• PAN of the Entity\n• LLP Agreement or Partnership Deed (where applicable)\n• Constitutional Documents of the Entity\n\n**Promoter Details**\n• Details of Directors, Partners, or Founders\n• Identity and Address Proofs\n• Contact Information\n\n**Business Information**\n• Business Profile\n• Brief Description of Products or Services\n• Information relating to Innovation or Business Model\n• Website, Application, or Product Information (if available)\n\n**Additional Information**\n• Funding Details (if applicable)\n• Incubation Support Details (if available)\n• Any other supporting documents as may be required`
              },
              {
                title: "Our Process",
                content: `Step 1: Initial Assessment\nStep 2: Documentation Support\nStep 3: Application Preparation\nStep 4: Regulatory Processing\nStep 5: Recognition & Post-Approval Support`
              }
            ],
            faqs: [
              { question: "Startup India Registration FAQs", answer: "", isHeading: true },
              { question: "Is Startup India Recognition mandatory?", answer: "No. However, eligible startups often seek recognition to access various benefits, support programs, and opportunities available within the startup ecosystem." },
              { question: "Can LLPs and Partnership Firms apply?", answer: "Eligible LLPs and registered partnership firms may apply subject to fulfillment of applicable conditions." },
              { question: "Can newly incorporated businesses apply?", answer: "Yes. Newly established entities may apply if they satisfy the prescribed eligibility requirements." },
              { question: "Does recognition guarantee funding?", answer: "No. Recognition does not guarantee funding but may improve access to investors, incubators, accelerators, and startup support programs." },
              { question: "Can ConsultAvenuee assist with post-recognition compliance?", answer: "Yes. We provide ongoing support for accounting, taxation, corporate compliance, registrations, governance, and business advisory requirements." }
            ]
          },
          {
            slug: "msme-udyam-registration",
            title: "MSME/Udyam Registration",
            sections: [
              {
                title: "Empower Your Business with MSME Recognition",
                content: `Micro, Small and Medium Enterprises (MSMEs) play a vital role in economic growth, employment generation, innovation, and entrepreneurship. MSME Registration (Udyam Registration) enables eligible businesses to obtain official recognition and access various support mechanisms, business opportunities, and government initiatives designed for small and medium enterprises.\n\nAt ConsultAvenuee, we provide end-to-end assistance for MSME Registration, documentation support, compliance guidance, and post-registration advisory services.`
              },
              {
                title: "What is MSME Registration?",
                content: `MSME (Micro, Small and Medium Enterprise) Registration is a government-recognized registration available to eligible businesses engaged in manufacturing, trading, or service activities.\n\nThe registration provides formal recognition to enterprises and facilitates access to various business support programs, financial assistance opportunities, and regulatory benefits available to eligible MSMEs.\n\nMSME Registration is commonly known as Udyam Registration and is issued through the prescribed government registration framework.`
              },
              {
                title: "Who Can Apply?",
                content: `MSME Registration may be obtained by eligible:\n• Proprietorship Firms\n• Partnership Firms\n• Limited Liability Partnerships (LLPs)\n• Private Limited Companies\n• Public Limited Companies\n• One Person Companies (OPCs)\n• Cooperative Societies\n• Trusts and Other Eligible Business Entities\n\nEligibility is determined based on applicable government criteria and business classifications.`
              },
              {
                title: "Benefits of MSME Registration",
                content: `• Business Recognition\n• Financial Support Opportunities\n• Business Growth Support\n• Government Procurement Opportunities\n• Legal & Regulatory Support\n• Market Expansion`
              },
              {
                title: "Documents Generally Required",
                content: `The documentation requirements may vary depending upon the constitution of the business.\n\n**Business Information**\n• Business Name\n• Business Address\n• Nature of Business Activities\n• Contact Details\n\n**Identity & Entity Documents**\n• PAN Card\n• Aadhaar Details of Proprietor / Partner / Director\n• Entity Registration Documents (where applicable)\n\n**Banking Details**\n• Bank Account Information\n• IFSC Details\n\n**Business Registration Information**\n• GST Registration Details (if applicable)\n• Incorporation or Registration Documents\n• Partnership Deed / LLP Agreement (where applicable)\n\n**Additional Information**\n• Business Activity Details\n• Investment and Turnover Information\n• Other information as may be required under the applicable registration framework`
              },
              {
                title: "Registration Process",
                content: `Step 1: Eligibility Assessment\nStep 2: Documentation Review\nStep 3: Application Preparation\nStep 4: Registration Filing\nStep 5: Registration Completion\nStep 6: Ongoing Advisory Support`
              }
            ],
            faqs: [
              { question: "MSME/Udyam Registration FAQs", answer: "", isHeading: true },
              { question: "Is MSME Registration mandatory?", answer: "MSME Registration is generally optional; however, obtaining registration can help eligible businesses access various support programs and opportunities." },
              { question: "Who can obtain MSME Registration?", answer: "Eligible proprietorships, partnership firms, LLPs, companies, and other qualifying business entities may apply for MSME Registration." },
              { question: "Can service businesses obtain MSME Registration?", answer: "Yes. Eligible service providers, consultants, professionals, and other service-oriented businesses may qualify for registration." },
              { question: "Can startups apply for MSME Registration?", answer: "Yes. Eligible startups and newly established businesses may obtain MSME Registration subject to applicable conditions." },
              { question: "Can ConsultAvenuee assist with MSME Registration and compliance?", answer: "Yes. We provide complete assistance for MSME Registration, documentation, advisory services, and ongoing compliance support." }
            ]
          },
          {
            slug: "pf-registration",
            title: "PF Registration",
            sections: [
              {
                title: "Simplifying Workforce Compliance. Protecting Your Business.",
                content: `Managing Provident Fund (PF) compliances is a critical responsibility for every employer. From registrations and employee onboarding to monthly filings and regulatory inspections, maintaining compliance requires accuracy, consistency, and timely execution.\n\nOur team helps businesses complete EPF registration quickly and efficiently while ensuring compliance with applicable regulations. Whether you are a startup, SME, LLP, partnership firm, or private limited company, we provide comprehensive support for all EPF-related requirements.`
              },
              {
                title: "What is Provident Fund (EPF)?",
                content: `The Employees' Provident Fund (EPF) is a government-backed retirement savings scheme governed by the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. The scheme is administered by the Employees' Provident Fund Organisation (EPFO) and aims to provide long-term financial security to employees.\n\nUnder the EPF scheme, both the employer and employee contribute a prescribed percentage of the employee's salary every month, creating a retirement corpus that can be utilized upon retirement, resignation, or under specified circumstances.`
              },
              {
                title: "Applicability & Contribution Structure",
                content: `EPF registration is mandatory for establishments employing 20 or more employees, including eligible contract workers. Eligible establishments are required to obtain EPF registration within the prescribed time limit.\n\n**Who is Covered Under the EPF Act?**\n• Establishments employing 20 or more employees\n• Contract employees working in covered establishments\n• Certain notified establishments employing fewer than 20 employees\n• Organizations opting for voluntary EPF coverage\n\n**EPF Contribution Structure**\nEmployee Contribution: 12% of Basic Salary + Dearness Allowance\nEmployer Contribution: 12% of Basic Salary + Dearness Allowance\n\nThe employer's contribution is allocated between:\n• Employees' Provident Fund (EPF)\n• Employees' Pension Scheme (EPS)`
              },
              {
                title: "Important Points",
                content: `• EPF registration should be obtained within one month of becoming applicable.\n• Once covered, EPF provisions generally continue even if employee strength subsequently falls below the threshold.\n• Certain establishments may qualify for exemptions under applicable provisions of the law.`
              },
              {
                title: "Benefits of EPF Registration",
                content: `EPF offers several financial and social security benefits to employees:\n• Retirement Benefits\n• Pension Benefits\n• Insurance Coverage\n• Tax Benefits\n• Easy Transfer & Portability\n• Emergency Withdrawals\n\nEligible withdrawals for:\n• Medical emergencies\n• Higher education\n• Marriage expenses\n• Home purchase or construction\n• Unemployment and other permitted purposes`
              },
              {
                title: "Documents Required for EPF Registration",
                content: `**Business Documents**\n• Certificate of Incorporation / Partnership Deed / Registration Certificate\n• PAN Card of the Entity or Proprietor\n• Address Proof of Business\n• Bank Account Proof (Cancelled Cheque or Bank Statement)\n• Details of Business Activity\n\n**Promoter / Director Documents**\n• PAN Card\n• Aadhaar Card / Identity Proof\n• Address Proof\n• Passport-size Photograph (if required)\n\n**Additional Documents**\n• List of Directors, Partners, or Proprietor Details\n• Digital Signature Certificate (DSC) of Authorized Signatory\n• Employee Details (if available)\n• Contact Details (Mobile Number & Email ID)\n• GST Registration Certificate (if applicable)\n• Shop & Establishment Registration (if applicable)\n• First Sale/Purchase Invoice (where required)`
              },
              {
                title: "Important Compliance Requirements",
                content: `**Monthly Compliance**\n• EPF contributions must generally be deposited on or before the 15th of the following month.\n• Monthly electronic return filing is required through the EPFO portal.`
              }
            ],
            faqs: [
              { question: "PF Registration FAQs", answer: "", isHeading: true },
              { question: "What is EPF Registration?", answer: "EPF Registration is the process of enrolling an eligible establishment under the Employees' Provident Fund (EPF) Scheme administered by the Employees' Provident Fund Organisation (EPFO). It enables employers to provide retirement, pension, and insurance benefits to employees." },
              { question: "Is EPF Registration Mandatory?", answer: "Yes. EPF registration is mandatory for establishments employing 20 or more employees. Certain establishments with fewer employees may also opt for voluntary coverage." },
              { question: "Who is Eligible for EPF Membership?", answer: "Generally, employees working in EPF-covered establishments are eligible to become members of the EPF Scheme as per applicable EPFO regulations." },
              { question: "What is UAN (Universal Account Number)?", answer: "UAN is a unique number allotted by EPFO that links all PF accounts of an employee, enabling easy account management, transfers, and online access to EPF services." },
              { question: "Can an Employee Have Multiple UANs?", answer: "No. An employee should have only one UAN throughout their employment career, irrespective of job changes." },
              { question: "What Happens If Employee Strength Falls Below 20?", answer: "Once EPF becomes applicable to an establishment, it generally continues to remain covered even if the employee count subsequently falls below 20." },
              { question: "Is EPF Applicable to Contract Employees?", answer: "Yes. Eligible contract employees working in covered establishments are generally required to be covered under the EPF Scheme." },
              { question: "What Are the Consequences of Non-Compliance?", answer: "Failure to obtain EPF registration or deposit contributions on time may result in interest, penalties, damages, and legal action under the EPF Act." },
              { question: "Why Choose ConsultAvenuee for EPF Registration?", answer: "ConsultAvenuee offers end-to-end assistance for EPF registration, PF code allotment, employee enrollment, UAN support, compliance management, and ongoing advisory services, ensuring seamless compliance with EPFO regulations." }
            ]
          },
          {
            slug: "esic-registration",
            title: "ESIC Registration",
            sections: [
              {
                title: "Employee State Insurance (ESI) Registration",
                content: `Whether you are a startup, SME, factory, shop, LLP, partnership firm, or private limited company, our experts ensure smooth ESIC registration and compliance, helping your organization meet all statutory requirements efficiently and on time.`
              },
              {
                title: "What is Employee State Insurance (ESI)?",
                content: `The Employees' State Insurance (ESI) Scheme is a comprehensive social security and health insurance program governed by the Employees' State Insurance Act, 1948 and administered by the Employees' State Insurance Corporation (ESIC).\n\nThe scheme provides medical, financial, and insurance benefits to employees and their families in the event of sickness, maternity, disability, employment injury, or death arising out of employment.`
              },
              {
                title: "Applicability of ESI Registration",
                content: `ESI registration is mandatory for eligible establishments employing 10 or more employees (threshold may vary in certain states as per applicable regulations).\n\n**ESI Coverage Applies To:**\n• Factories and manufacturing units\n• Shops and commercial establishments\n• Hotels and restaurants\n• Road transport undertakings\n• Cinema theatres\n• Newspaper establishments\n• Educational institutions\n• Private medical institutions\n• Other notified establishments covered under the ESI Act\n\n**Employee Eligibility:**\nEmployees earning gross wages up to the prescribed wage limit (currently ₹21,000 per month, subject to government amendments) are covered under the ESI Scheme.\n\n**ESI Contribution Structure:**\nEmployee Contribution: 0.75% of Wages*\nEmployer Contribution: 3.25% of Wages*\n*Rates are subject to change as notified by ESIC from time to time.`
              },
              {
                title: "Benefits of ESI Registration",
                content: `The ESI Scheme offers a wide range of social security benefits for employees and their dependents.\n\n• Medical Benefits\n• Sickness Benefits\n• Maternity Benefits\n• Disablement Benefits\n• Dependents' Benefits\n\n**Additional Benefits:**\n• Funeral expenses assistance\n• Vocational rehabilitation support\n• Unemployment allowance under specified schemes\n• Confinement and medical benefits in eligible cases`
              },
              {
                title: "Documents Required for ESIC Registration",
                content: `**Business Documents**\n• Registration Certificate under Factories Act or Shops & Establishments Act\n• Certificate of Incorporation (for Companies)\n• Partnership Deed (for Partnership Firms)\n• LLP Agreement (for LLPs)\n• Memorandum of Association (MOA) and Articles of Association (AOA), where applicable\n• PAN Card of the Business Entity\n• GST Registration Certificate (if available)\n\n**Employee Information**\n• List of Employees with Salary Details\n• Employee Identity Details\n• Attendance and Wage Records\n\n**Additional Documents**\n• Bank Account Proof (Cancelled Cheque or Bank Statement)\n• Address Proof of Establishment\n• List of Directors, Partners, or Proprietor Details\n• PAN and Identity Proof of Authorized Signatory\n• Digital Signature Certificate (DSC), where applicable\n• Contact Details (Mobile Number and Email ID)`
              },
              {
                title: "Compliance under the ESI Act",
                content: `After obtaining ESI Registration, employers are required to comply with various statutory obligations.\n\n**Monthly Compliance:**\n• Timely payment of ESI contributions\n• Maintenance of wage and salary records\n• Employee attendance records\n• Updating employee details and changes\n\n**Periodic Compliance:**\n• Filing of contribution details as prescribed by ESIC\n• Maintenance of statutory registers and records\n• Reporting employee additions, exits, and wage changes\n\n**Other Compliance Requirements:**\n• Maintenance of accident records\n• Submission of information sought by ESIC authorities\n• Cooperation during inspections and audits\n\nFailure to comply may result in penalties, interest, and legal action under the ESI Act.`
              }
            ],
            faqs: [
              { question: "ESIC Registration FAQs", answer: "", isHeading: true },
              { question: "What is ESI Registration?", answer: "ESI Registration is the process of enrolling an eligible establishment under the Employees' State Insurance (ESI) Scheme administered by ESIC. It provides medical and social security benefits to eligible employees and their dependents." },
              { question: "Is ESI Registration Mandatory?", answer: "Yes. ESI registration is mandatory for eligible establishments employing 10 or more employees (subject to state-specific applicability) and covered under the ESI Act." },
              { question: "Who is Eligible for ESI Benefits?", answer: "Employees earning gross wages up to ₹21,000 per month are generally covered under the ESI Scheme and are entitled to ESI benefits." },
              { question: "How Long Does ESI Registration Take?", answer: "The registration process is generally completed within a few working days, subject to the submission of complete documents and approval by ESIC." },
              { question: "Is ESI Registration Required for Startups and Small Businesses?", answer: "Yes. If the establishment meets the employee threshold and falls under the notified categories, ESI registration becomes mandatory regardless of the type of business." },
              { question: "What Happens If an Employer Fails to Obtain ESI Registration?", answer: "Failure to obtain ESI registration or comply with ESI provisions may result in penalties, interest on delayed payments, and legal action under the ESI Act." },
              { question: "Is ESI Applicable to Contract Employees?", answer: "Yes. Contract employees working in a covered establishment are generally covered under the ESI Scheme, subject to eligibility conditions." },
              { question: "What Is the Due Date for ESI Contribution Payment?", answer: "ESI contributions must be deposited within the prescribed due date as notified by ESIC to avoid interest and penalties." },
              { question: "Why Choose ConsultAvenuee for ESI Registration?", answer: "ConsultAvenuee provides end-to-end assistance for ESIC registration, documentation, employee enrolment, compliance management, return filing support, and ongoing advisory services, ensuring a hassle-free compliance experience." }
            ]
          },
          {
            slug: "trade-license",
            title: "Trade License",
            sections: [
              {
                title: "What is a Trade License?",
                content: `A Trade License is an official permission issued by the local Municipal Authority allowing an individual or business entity to carry on a specific trade or business activity at a designated location. It ensures that the business complies with applicable municipal laws, safety standards, and local regulations. It is not a one-time document, it must be renewed periodically, typically on an annual basis.`
              },
              {
                title: "Why is a Trade License Required?",
                content: `A Trade License helps regulate commercial activities and ensures businesses operate legally and responsibly.\n\n**Key Benefits**\n• Legal authorization to conduct business\n• Compliance with municipal regulations\n• Protection of public health and safety\n• Enhanced business credibility\n• Prevention of unauthorized or hazardous activities\n• Smooth and uninterrupted business operations`
              },
              {
                title: "Types of Trade Licenses",
                content: `**Industrial License**\nFor manufacturing units and industrial establishments.\n\n**Shop & Establishment License**\nFor retail shops, offices, service providers, and commercial establishments.\n\n**Food Establishment License**\nFor businesses involved in the preparation, storage, sale, or distribution of food products.\n\n**Advertisement License**\nFor Outdoor advertising\n\n**Hazardous Business License**\nFor dealing with Hazardous Material`
              },
              {
                title: "Eligibility for Trade License",
                content: `To obtain a Trade License:\n• The business activity must be legally permissible.\n• The applicant must be at least 18 years of age.\n• The applicant should not have any criminal record.\n• All required NOCs (No Objection Certificates) must be in place, where applicable\n• The business premises must be legally owned or leased by the applicant\n• The business must comply with safety, health, and hygiene standards`
              },
              {
                title: "Documents Required",
                content: `• Application Form\n• PAN Card of Business / Applicant\n• Aadhaar Card of Applicant\n• Certificate of Incorporation / Partnership Deed / LLP Agreement (as applicable)\n• Property Tax Paid Receipt\n• Rent Agreement or Owner's NOC\n• Occupancy Certificate (OC)\n• Layout Plan of Premises\n• Any additional documents required by the Municipal Authority`
              },
              {
                title: "Trade License Renewal",
                content: `Trade Licenses are generally valid for one year and require annual renewal.\n\n**Documents Required for Renewal**\n• Existing Trade License\n• Previous Renewal Receipts / Challans\n• Latest Property Tax Paid Receipt`
              }
            ],
            faqs: [
              { question: "Trade License FAQs", answer: "", isHeading: true },
              { question: "What is a Trade License?", answer: "A Trade License is an authorization issued by the local Municipal Authority permitting an individual or business entity to carry out a specific trade or business activity at a designated location." },
              { question: "Is a Trade License Mandatory?", answer: "Yes. Many businesses are required to obtain a Trade License before commencing operations to ensure compliance with municipal laws and regulations." },
              { question: "Who Issues a Trade License?", answer: "A Trade License is issued by the concerned Municipal Corporation, Municipal Council, or Local Authority having jurisdiction over the business location." },
              { question: "Who Can Apply for a Trade License?", answer: "Any individual, proprietor, partnership firm, LLP, company, or other legal entity carrying on a permissible business activity can apply for a Trade License." },
              { question: "What Types of Businesses Require a Trade License?", answer: "Trade Licenses are generally required for:\n• Shops and retail establishments\n• Restaurants and food businesses\n• Offices and service providers\n• Manufacturing units\n• Warehouses and storage facilities\n• Advertising businesses\n• Hazardous and regulated businesses" },
              { question: "What is the Validity of a Trade License?", answer: "Trade Licenses are typically valid for one year and must be renewed annually or as prescribed by the local authority." },
              { question: "Is a Trade License Required for Home-Based Businesses?", answer: "Depending on the nature of the activity and local municipal regulations, a Trade License may be required even for certain home-based businesses." },
              { question: "Are Different Trade Licenses Required for Different Activities?", answer: "Yes. The type of Trade License depends on the nature of the business activity, such as industrial, commercial, food-related, advertising, or hazardous business operations." },
              { question: "Why Choose ConsultAvenuee for Trade License Registration?", answer: "ConsultAvenuee provides complete assistance with Trade License registration, documentation, application filing, liaison with municipal authorities, renewals, and ongoing compliance support, ensuring a hassle-free experience for businesses." }
            ]
          },
          {
            slug: "ngo-darpan-registration",
            title: "NGO Darpan Registration",
            sections: [
              {
                title: "Obtain Your NGO Darpan Unique ID with Expert Assistance",
                content: `NGO Darpan Registration is an online registration process administered by NITI Aayog for Trusts, Societies, Section 8 Companies, and other eligible non-profit organizations. Upon registration, the organization receives a unique NGO Darpan ID, which serves as an official identity for interaction with Government Ministries, Departments, funding agencies, and CSR contributors.\n\nNGO Darpan Registration is increasingly required for Government grants, CSR funding, FCRA-related applications, and various regulatory compliances.\n\nAt ConsultAvenuee, we provide end-to-end assistance to help your organization obtain its NGO Darpan ID quickly and efficiently.`
              },
              {
                title: "Why is NGO Darpan Registration Important?",
                content: `NGO Darpan Registration offers several advantages:\n✓ Government-recognized Unique NGO Darpan ID\n✓ Eligibility for Central Government Grants and Schemes\n✓ Enhanced Credibility with Donors and CSR Contributors\n✓ Support for FCRA, 12A, and 80G Applications\n✓ Improved Transparency and Organizational Visibility\n✓ Inclusion in the National NGO Database maintained by NITI Aayog`
              },
              {
                title: "Who Can Apply?",
                content: `The following entities are eligible for NGO Darpan Registration:\n• Public Charitable Trusts\n• Registered Societies\n• Section 8 Companies\n• Voluntary Organizations (VOs)\n• Other legally registered non-profit organizations`
              },
              {
                title: "Documents Required",
                content: `**Organization Documents**\n• Registration Certificate of Trust, Society, or Section 8 Company\n• PAN Card of the Organization\n• Trust Deed / MOA / Bye-Laws\n• Registered Office Address Proof\n• Organization Email ID and Mobile Number\n\n**Office Bearer Documents**\n• PAN Card of President, Secretary, Treasurer, or Key Functionaries\n• Aadhaar Card of Authorized Office Bearers\n• Contact Details of Governing Body Members\n\n**Additional Documents (if available)**\n• 12A Registration Certificate\n• 80G Registration Certificate\n• Activity Report / Annual Report\n• Details of Projects and Social Activities`
              },
              {
                title: "NGO Darpan Registration Process",
                content: `Step 1 – Eligibility Review\nStep 2 – Documentation\nStep 3 – Portal Registration\nStep 4 – Profile Creation\nStep 5 – Document Upload & Verification\nStep 6 – Application Submission\nStep 7 – Darpan ID Generation`
              },
              {
                title: "Our NGO Darpan Registration Services",
                content: `• Registration Advisory\n• Application & Filing Support\n• Registration Assistance\n• Post-Registration Services\n✓ 12A Registration\n✓ 80G Registration\n✓ FCRA Advisory & Compliance\n✓ CSR Compliance Support\n✓ NGO Annual Compliance Services`
              }
            ],
            faqs: [
              { question: "NGO Darpan Registration FAQs", answer: "", isHeading: true },
              { question: "Is NGO Darpan Registration Mandatory?", answer: "While not mandatory for every NGO, it is generally required for Government grants, many CSR funding opportunities, FCRA-related applications, and other regulatory processes." },
              { question: "How Long Does NGO Darpan Registration Take?", answer: "The registration process is generally completed within a few working days, subject to document readiness and successful verification." },
              { question: "Can a Newly Registered NGO Apply?", answer: "Yes. Newly registered Trusts, Societies, and Section 8 Companies can apply provided they possess valid registration and PAN documents." },
              { question: "Does NGO Darpan Registration Provide Tax Exemption?", answer: "No. Tax exemptions are granted separately through 12A and 80G registrations under the Income-tax Act." },
              { question: "Is NGO Darpan Registration Required for CSR Funding?", answer: "Many CSR contributors and corporate donors prefer or require NGOs to have a valid NGO Darpan ID before considering funding proposals." },
              { question: "Need Assistance with NGO Darpan Registration?", answer: "ConsultAvenuee provides complete support for NGO Darpan Registration, 12A Registration, 80G Registration, FCRA Compliance, CSR Advisory, and NGO Annual Compliance Services—helping your organization focus on its mission while we manage the regulatory requirements." }
            ]
          },
          {
            slug: "trademark-registration",
            title: "Trademark Registration",
            sections: [
              {
                title: "Protect Your Brand. Secure Your Business Identity.",
                content: `Whether you are a startup, SME, established business, or entrepreneur, securing your trademark is a critical step in protecting your brand identity and business reputation. Secure your brand today and build a strong foundation for long-term business success.\n\nYour brand is one of your most valuable business assets. Whether it is your business name, logo, tagline, product name, or unique identity, trademark registration provides legal protection and exclusive ownership rights, helping you safeguard your brand from unauthorized use and infringement.\n\nAt ConsultAvenuee, we provide comprehensive trademark registration services, guiding businesses through every stage of the registration process—from trademark search and class selection to application filing, objection handling, and registration support.`
              },
              {
                title: "Why Trademark Registration is Important",
                content: `A registered trademark not only protects your brand but also strengthens your market position and business value.\n\n**Key Benefits of Trademark Registration**\n• Exclusive legal rights over your brand name, logo, and identity\n• Protection against unauthorized use and infringement\n• Enhanced brand recognition and customer trust\n• Creation of a valuable intangible business asset\n• Increased business valuation and goodwill\n• Easier franchising, licensing, and brand expansion\n• Right to use the ® symbol after registration\n• Nationwide protection across India\n• Strong legal support in disputes and enforcement actions`
              },
              {
                title: "What Can Be Registered as a Trademark?",
                content: `The following business assets can be protected through trademark registration:\n• Brand Names\n• Business Names\n• Logos\n• Taglines and Slogans\n• Product Names\n• Labels and Packaging Designs\n• Device Marks\n• Sound Marks\n• Composite Marks (Brand Name and Logo Combined)`
              },
              {
                title: "Who Can Apply for Trademark Registration?",
                content: `Trademark registration can be obtained by:\n• Individuals\n• Proprietorship Firms\n• Partnership Firms\n• Limited Liability Partnerships (LLPs)\n• Private Limited Companies\n• Startups\n• MSMEs\n• Trusts and Societies\n• Foreign Companies and Foreign Nationals`
              },
              {
                title: "Documents Required",
                content: `**For Individuals and Proprietorship Firms**\n• PAN Card\n• Aadhaar Card\n• Address Proof\n• Brand Name or Logo\n• Mobile Number and Email ID\n\n**For Companies and LLPs**\n• Certificate of Incorporation\n• PAN Card of Company/LLP\n• Details of Authorized Signatory\n• Logo (if applicable)\n• Business Address Proof\n\n**Additional Documents (Where Applicable)**\n• Udyam/MSME Registration Certificate\n• Startup India Recognition Certificate\n• User Affidavit for Prior Use Claims\n• Power of Attorney (when filed through an authorized representative)`
              },
              {
                title: "Trademark Registration Process",
                content: `1. Trademark Availability Search\n2. Trademark Class Selection\n3. Application Filing\n4. Examination by Trademark Registry\n5. Objection Handling\n6. Publication in Trademark Journal\n7. Registration Certificate`
              },
              {
                title: "Trademark Validity and Renewal",
                content: `• Trademark registration remains valid for 10 years.\n• Registration can be renewed indefinitely for successive periods of 10 years.\n• Timely renewal ensures continuous protection of your brand rights.`
              }
            ],
            faqs: [
              { question: "Trademark Registration FAQs", answer: "", isHeading: true },
              { question: "Can I use the ™ symbol before registration?", answer: "Yes. Once a trademark application is filed, you may use the ™ symbol. The ® symbol can only be used after successful registration." },
              { question: "How long does trademark registration take?", answer: "The timeline varies depending on examination, objections, and opposition proceedings. Early filing helps secure your priority date." },
              { question: "Is trademark registration mandatory?", answer: "No. However, registration provides stronger legal protection and exclusive rights over your brand identity." },
              { question: "Can I register both my brand name and logo?", answer: "Yes. Separate registrations for the brand name and logo provide broader legal protection." },
              { question: "Can foreign companies register trademarks in India?", answer: "Yes. Foreign individuals, companies, and entities can apply for trademark registration in India." }
            ]
          },
          {
            slug: "import-export-code",
            title: "Import Export Code (IEC)",
            sections: [
              {
                title: "Start Your Global Business Journey",
                content: `Planning to import goods into India or expand your business into international markets through exports? Obtaining an Import Export Code (IEC) is the first and most essential step.\n\nWhether you are a startup, manufacturer, trader, exporter, importer, or service provider, IEC registration is your gateway to global business opportunities.\n\nGet your IEC Registration completed quickly and start your international business journey with ConsultAvenuee. We provide end-to-end IEC Registration Services, helping businesses obtain their Import Export Code quickly and efficiently while ensuring complete compliance with DGFT requirements.`
              },
              {
                title: "What is Import Export Code (IEC)?",
                content: `Import Export Code (IEC) is a unique 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Government of India.\n\nIEC is mandatory for businesses and individuals engaged in the import or export of goods and services. It serves as the primary authorization for conducting international trade from India.\n\n**Key Features of IEC**\n• 10-digit unique identification number\n• Issued by DGFT, Government of India\n• Mandatory for import and export activities\n• PAN-based registration\n• Lifetime validity\n• No renewal requirement\n• No periodic return filing or compliance obligations`
              },
              {
                title: "Who Needs IEC Registration?",
                content: `IEC registration is required for:\n• Proprietorship Firms\n• Partnership Firms\n• LLPs (Limited Liability Partnerships)\n• Private Limited Companies\n• Public Limited Companies\n• Exporters and Importers\n• E-commerce Export Businesses\n• Service Exporters\n• Manufacturers and Traders engaged in international business`
              },
              {
                title: "Benefits of IEC Registration",
                content: `• Access Global Markets\n• Mandatory for International Trade\n• Customs Clearance Support\n• Export Incentives & Benefits\n• Lifetime Validity\n• No Annual Compliance\n• Improved Business Credibility`
              },
              {
                title: "Documents Required for IEC Registration",
                content: `**For Proprietorship Firms**\n• PAN Card\n• Aadhaar Card\n• Passport-size Photograph\n• Business Address Proof\n• Bank Account Details or Cancelled Cheque\n\n**For Partnership Firms**\n• PAN Card\n• Partnership Deed\n• Address Proof\n• Bank Certificate or Cancelled Cheque\n• Identity Proof of Partners\n\n**For LLPs and Companies**\n• PAN Card\n• Certificate of Incorporation\n• Registered Office Address Proof\n• Identity & Address Proof of Directors/Partners\n• Bank Certificate or Cancelled Cheque\n• Digital Signature (where applicable)\n\n**Address Proof Documents**\n• Rent Agreement with NOC\n• Ownership Documents / Sale Deed\n• Electricity Bill\n• Telephone Bill\n• Water Bill`
              },
              {
                title: "IEC Registration Process",
                content: `Step 1 – Document Collection & Verification\nStep 2 – Application Preparation\nStep 3 – Online Filing with DGFT\nStep 4 – Verification & Processing\nStep 5 – IEC Generation`
              }
            ],
            faqs: [
              { question: "Import Export Code (IEC) FAQs", answer: "", isHeading: true },
              { question: "Is IEC mandatory for import-export business?", answer: "Yes. IEC is mandatory for businesses involved in importing or exporting goods and services, except in specified exempt cases." },
              { question: "Is IEC valid for a lifetime?", answer: "Yes. IEC has lifetime validity and does not require renewal." },
              { question: "Is there any annual return filing under IEC?", answer: "No. There are no annual returns or recurring compliance requirements after obtaining IEC." },
              { question: "Can service exporters obtain IEC?", answer: "Yes. Businesses providing services to overseas clients may also require IEC for certain international transactions and foreign remittances." },
              { question: "Can an individual obtain IEC?", answer: "Yes. Individuals engaged in import-export activities can apply for IEC registration." }
            ]
          },
          {
            slug: "iso-certification",
            title: "ISO Certification",
            sections: [
              {
                title: "Achieve Global Standards with Confidence",
                content: `Whether you are a startup, SME, manufacturer, service provider, educational institution, or large enterprise, ISO Certification demonstrates your commitment to quality, compliance, and excellence.\n\n**Build Trust. Improve Quality. Achieve Global Standards.**\nIn today's competitive business environment, organizations must demonstrate their commitment to quality, efficiency, customer satisfaction, and continual improvement. ISO Certification provides internationally recognized validation that your business operates in accordance with globally accepted standards and best practices.\n\nAt ConsultAvenuee, we provide end-to-end ISO Certification support, helping businesses implement the required systems, documentation, and processes to successfully achieve and maintain ISO Certification.`
              },
              {
                title: "What is ISO Certification?",
                content: `ISO Certification is an internationally recognized certification issued by an accredited certification body, confirming that an organization complies with the standards established by the International Organization for Standardization (ISO).\n\nIt demonstrates that a business has implemented structured processes, quality controls, and management systems designed to enhance operational efficiency, customer satisfaction, and continual improvement.\n\nISO Certification strengthens business credibility, improves stakeholder confidence, and creates opportunities for growth in domestic and international markets.`
              },
              {
                title: "Popular ISO Certifications",
                content: `We assist businesses in obtaining various ISO certifications, including:\n• ISO 9001 – Quality Management System (QMS)\n• ISO 14001 – Environmental Management System (EMS)\n• ISO 45001 – Occupational Health & Safety Management System\n• ISO 22000 – Food Safety Management System\n• ISO 27001 – Information Security Management System\n• ISO 50001 – Energy Management System`
              },
              {
                title: "Benefits of ISO Certification",
                content: `• Enhanced Business Credibility\n• Eligibility for Government & Corporate Tenders\n• Improved Customer Satisfaction\n• Operational Efficiency\n• Better Risk Management\n• Competitive Advantage\n• Global Recognition\n• Continuous Improvement`
              },
              {
                title: "Who Should Obtain ISO Certification?",
                content: `ISO Certification is beneficial for:\n• Manufacturing Companies\n• Service Providers\n• Startups & SMEs\n• Educational Institutions\n• Healthcare Organizations\n• Hospitality & Tourism Businesses\n• IT & Technology Companies\n• Construction & Infrastructure Companies\n• Logistics & Supply Chain Businesses\n• Exporters & Importers\n• Government Contractors`
              },
              {
                title: "Documents Required",
                content: `The documentation requirements may vary depending on the ISO standard and nature of business. Generally, the following documents are required:\n• PAN Card\n• Identity Proof of Proprietor/Directors/Partners\n• Business Registration Documents\n• Address Proof of Business Premises\n• Organizational Structure Details\n• Scope of Business Activities\n• Existing Policies and Procedures (if any)\n• Sales or Purchase Invoices\n• Employee Information\n\nAdditional documents may be required based on the applicable ISO standard and business operations.`
              },
              {
                title: "ISO Certification Process & Validity",
                content: `**Process**\nStep 1 – Business Assessment\nStep 2 – Gap Analysis\nStep 3 – Documentation & Implementation\nStep 4 – Internal Review & Readiness Assessment\nStep 5 – Certification Audit\nStep 6 – Certification Approval\nStep 7 – Surveillance & Continuous Compliance\n\n**Certification Validity & Surveillance**\nISO Certification is generally valid for three years, subject to successful completion of periodic surveillance audits conducted by the certification body.\nRegular monitoring ensures that the organization continues to comply with the applicable ISO standards and maintains the effectiveness of its management systems.`
              }
            ],
            faqs: [
              { question: "ISO Certification FAQs", answer: "", isHeading: true },
              { question: "Is ISO Certification mandatory?", answer: "ISO Certification is generally voluntary; however, many customers, government departments, and corporate organizations require it as a business qualification." },
              { question: "How long does it take to obtain ISO Certification?", answer: "The timeline depends on the size, complexity, and preparedness of the organization. Smaller businesses may obtain certification within a few months, while larger organizations may require additional implementation time." },
              { question: "How long is ISO Certification valid?", answer: "ISO Certification is typically valid for three years, subject to periodic surveillance audits." },
              { question: "Can startups obtain ISO Certification?", answer: "Yes. Startups can benefit significantly from ISO Certification by improving credibility, process efficiency, and customer confidence." },
              { question: "Which ISO Certification is best for my business?", answer: "The appropriate certification depends on your industry, business objectives, customer requirements, and regulatory expectations. Our team can help you identify the most suitable ISO standard." }
            ]
          },
          {
            slug: "fssai-registration",
            title: "FSSAI Registration",
            sections: [
              {
                title: "Ensure Food Safety Compliance. Build Consumer Trust.",
                content: `Whether you are a restaurant owner, food manufacturer, cloud kitchen operator, exporter, retailer, or food startup, FSSAI compliance is essential for operating legally and building customer trust.\n\nIf you are engaged in the manufacturing, processing, packaging, storage, distribution, transportation, or sale of food products, obtaining an FSSAI Registration or License is a legal requirement under the Food Safety and Standards Act, 2006.\n\nConsultAvenuee provides reliable and professional support for FSSAI Registration, Licensing, Renewals, Modifications, and Compliance Advisory, helping your business meet regulatory requirements and grow with confidence.`
              },
              {
                title: "What is FSSAI?",
                content: `The Food Safety and Standards Authority of India (FSSAI) is the apex regulatory body established under the Ministry of Health & Family Welfare, Government of India, responsible for regulating and supervising food safety standards across the country.\n\nFSSAI ensures that food products manufactured, distributed, sold, or imported in India meet prescribed safety and quality standards, thereby protecting consumer health and promoting confidence in the food industry.\n\nEvery Food Business Operator (FBO) is required to obtain the appropriate FSSAI Registration or License before commencing food-related business activities.`
              },
              {
                title: "Who Needs FSSAI Registration?",
                content: `FSSAI Registration or License is mandatory for:\n• Food Manufacturers\n• Food Processors\n• Restaurants & Cafés\n• Hotels & Catering Businesses\n• Bakers & Sweet Shops\n• Cloud Kitchens\n• Food Traders & Distributors\n• Food Importers & Exporters\n• E-commerce Food Sellers\n• Dairy & Milk Processing Units\n• Meat & Poultry Businesses\n• Storage & Warehouse Operators\n• Transporters of Food Products\n• Retail Food Businesses`
              },
              {
                title: "Types of FSSAI Licenses",
                content: `**Basic FSSAI Registration**\nSuitable for small food businesses and petty food operators.\nEligibility: Annual turnover up to ₹12 Lakhs\nValidity: 1 to 5 Years\n\n**State FSSAI License**\nApplicable to medium-sized food businesses operating within a state.\nEligibility: Annual turnover above ₹12 Lakhs and up to ₹20 Crores\nValidity: 1 to 5 Years\n\n**Central FSSAI License**\nRequired for large food businesses and entities involved in interstate or international operations.\nApplicable For: Importers and Exporters, Large Manufacturers, Food Processing Units, 100% Export Oriented Units, Airports, Seaports, Railways, Large Food Chain Operators\nEligibility: Annual turnover exceeding ₹20 Crores (subject to applicable regulations)\nValidity: 1 to 5 Years`
              },
              {
                title: "Documents Required",
                content: `**Basic FSSAI Registration**\n• Passport-size Photograph\n• PAN Card\n• Aadhaar Card or Other Identity Proof\n• Business Address Proof\n• Details of Food Business Activities\n\n**State License**\n• Identity and Address Proof of Proprietor/Partners/Directors\n• Business Constitution Documents\n• Address Proof of Business Premises\n• Equipment and Machinery Details\n• Food Product Categories\n• Food Safety Management System (FSMS) Plan\n• Water Analysis Report (where applicable)\n\n**Central License**\n• All documents required for State License\n• Import Export Code (IEC) (if applicable)\n• Layout Plan of Processing Unit\n• Turnover Details\n• NOCs and Regulatory Approvals (where applicable)\n• Transportation and Supply Chain Documents\n\nAdditional documents may be required depending on the nature and scale of operations.`
              },
              {
                title: "FSSAI Registration Process & Labeling",
                content: `**Registration Process**\nStep 1 – Business Assessment\nStep 2 – License Category Determination\nStep 3 – Documentation Support\nStep 4 – Application Filing\nStep 5 – Scrutiny & Verification\nStep 6 – Approval & License Issuance\n\n**FSSAI Labeling Requirements**\nAfter obtaining registration or license, food businesses must comply with FSSAI labeling regulations. Key requirements include:\n• Display of FSSAI Logo\n• Display of 14-digit FSSAI License Number\n• Proper product labeling as per FSSAI guidelines\n• Importer details and license information on imported food products\n\nCompliance with labeling requirements is essential to avoid penalties and ensure regulatory compliance.`
              }
            ],
            faqs: [
              { question: "FSSAI Registration FAQs", answer: "", isHeading: true },
              { question: "Is FSSAI registration mandatory?", answer: "Yes. Any business involved in manufacturing, processing, storage, distribution, transportation, or sale of food products is generally required to obtain FSSAI Registration or License." },
              { question: "How long is an FSSAI License valid?", answer: "FSSAI Registration and Licenses can be obtained for a period ranging from 1 to 5 years and must be renewed before expiry." },
              { question: "Can I operate a food business without FSSAI registration?", answer: "No. Operating a food business without the required registration or license may attract penalties and regulatory action." },
              { question: "Is FSSAI required for cloud kitchens and home-based food businesses?", answer: "Yes. Depending on the scale of operations, cloud kitchens, home-based food businesses, and online food sellers are also required to obtain appropriate FSSAI registration." }
            ]
          }
        ]
      },
      {
        id: "corporate-compliance",
        title: "Corporate Compliance & Secretarial Services",
        price: "₹9,999",
        badge: "HOT",
        description: "End-to-end support for MCA compliance, ROC filings, statutory registers, AGM/EGM compliance, and corporate governance.",
        sections: [
          {
            _parentSlug: "mca-annual-compliance",
            title: "MCA Annual Compliance",
            content: `### MCA Annual Compliance Services
Stay Compliant. Stay Protected. Stay Focused on Growth.
Every company registered under the Companies Act is required to comply with various annual filing and statutory requirements. Timely compliance helps maintain good corporate standing, enhances credibility, and reduces regulatory risks.

At ConsultAvenuee, we provide end-to-end MCA Annual Compliance services, ensuring that your company remains fully compliant with all statutory requirements while you focus on running your business.

---

### ROC Forms Covered Under Annual Compliance

**For Companies**
• **Form AOC-4**: Filing of Financial Statements and related documents with the Registrar of Companies.
• **Form MGT-7 / MGT-7A**: Filing of Annual Return containing details relating to: Shareholders, Directors, Share Capital, Registered Office, Other statutory information.
• **DIR-3 KYC**: Annual KYC compliance for Directors holding Director Identification Number (DIN).
• **DPT-3**: Reporting of deposits and certain outstanding receipts, where applicable.
• **MSME Form-I**: Half-yearly reporting relating to outstanding dues to MSME suppliers, where applicable.

**For LLPs**
• LLP Annual Return (Form 11)
• Statement of Account & Solvency (Form 8)

**Other Event-Based Filings**
Assistance with various ROC filings as may be applicable based on company-specific transactions and events.

---

### Who Can Benefit?
• Private Limited Companies
• One Person Companies (OPCs)
• Section 8 Companies
• Startup Companies
• Group Companies and Holding Structures
• Foreign-Owned Indian Companies

### Consequences of Non-Compliance
Failure to comply with annual filing requirements may result in:
• Additional filing fees
• Regulatory penalties
• Director compliance issues
• Company being treated as non-compliant
• Difficulties in obtaining loans, investments, tenders, and approvals
• Increased regulatory scrutiny

Timely compliance helps safeguard the company's reputation and legal status.`
          },
          {
            _parentSlug: "roc-filings",
            title: "ROC Filings",
            content: `### ROC Filings (Registrar of Companies Filings)

**Overview**
Every company and LLP registered in India is required to comply with various filing requirements prescribed under the Companies Act, 2013, the Limited Liability Partnership Act, 2008, and the rules issued by the Ministry of Corporate Affairs (MCA).

ROC (Registrar of Companies) filings ensure that statutory information relating to the company or LLP is regularly updated with the MCA and remains available in the public domain. Timely compliance helps businesses avoid penalties, maintain good legal standing, and build credibility with investors, lenders, and stakeholders.

---

### Our ROC Filing Services
We provide comprehensive ROC filing and compliance support for:
• Private Limited Companies
• Public Limited Companies
• One Person Companies (OPC)
• Limited Liability Partnerships (LLP)
• Section 8 Companies
• Foreign Subsidiaries in India

**Annual ROC Filings**

**For Companies**
• Filing of Financial Statements (Form AOC-4)
• Filing of Annual Return (Form MGT-7/MGT-7A)
• Director's Report Preparation
• Board Report Drafting
• AGM Compliance Assistance
• Maintenance of Statutory Registers
• Shareholding and Capital Structure Updates

**For LLPs**
• LLP Annual Return (Form 11)
• Statement of Account & Solvency (Form 8)
• Compliance Review and Documentation
• Partner Contribution and Structure Updates

---

### Event-Based ROC Filings
Apart from annual filings, companies are required to file various forms upon occurrence of specific events.

**Director Related Filings**
• Appointment of Director
• Resignation of Director
• Change in Director Designation
• DIN Related Compliances
• Filing of DIR-12 and related forms

**Registered Office Changes**
• Change of Registered Office within City
• Change of Registered Office within State
• Change of Registered Office from one State to another
• Filing of INC-22, MGT-14 and related forms

**Share Capital & Shareholder Changes**
• Increase in Authorized Share Capital
• Issue and Allotment of Shares
• Transfer of Shares
• Private Placement and Rights Issue compliance
• Filing of PAS-3, SH-7, MGT-14 and related forms

**Charge Management**
• Creation of Charge (CHG-1)
• Modification of Charge
• Satisfaction of Charge (CHG-4)

**Other Event-Based Compliances**
• Change in Company Name
• Change in Main Object Clause
• Auditor Appointment and Resignation (ADT-1, ADT-3)
• Filing of Resolutions and Agreements (MGT-14)
• Conversion of Company (e.g., Private to Public, OPC to Private)
• Strike-off / Closure of Company (STK-2)

---

### Value of Timely ROC Filings
• Avoidance of late filing fees and penalties
• Prevention of Director disqualification
• Maintenance of 'Active' status on MCA portal
• Readiness for bank loans, investments, and tenders
• Enhanced corporate governance and stakeholder trust`
          },
          {
            _parentSlug: "maintenance-of-statutory-registers-records",
            title: "Maintenance of Statutory Registers & Records",
            content: `### Maintenance of Statutory Registers & Records

**Overview**
The Companies Act, 2013 mandates every registered company to maintain specific statutory registers and records at its registered office. These registers serve as the official historical record of the company's members, directors, investments, charges, and key administrative actions.

Proper maintenance of statutory registers is not only a strict legal requirement but also crucial for transparency, corporate governance, and smooth business operations.

At ConsultAvenuee, we assist companies in maintaining, updating, and organizing their statutory registers and records in complete compliance with the Companies Act and relevant corporate laws.

---

### Key Statutory Registers to be Maintained

Under the Companies Act, 2013, the common statutory registers required to be maintained include:

**1. Register of Members (MGT-1)**
Maintains details of all shareholders, their shareholding patterns, dates of becoming/ceasing to be a member, and transfer records.

**2. Register of Directors and Key Managerial Personnel (KMP)**
Records details of all past and present Directors and KMPs, their DIN, PAN, residential details, and dates of appointment/resignation.

**3. Register of Directors' Shareholding**
Tracks the shares or securities held by Directors and KMPs in the company, its holding, subsidiary, or associate companies.

**4. Register of Contracts or Arrangements (MBP-4)**
Records contracts or arrangements in which Directors are interested.

**5. Register of Charges (CHG-7)**
Maintains records of all charges created, modified, or satisfied by the company on its assets.

**6. Register of Loans, Guarantees, Securities, and Investments (MBP-2)**
Records details of loans made, guarantees given, securities provided, or investments made by the company.

**7. Register of Renewed and Duplicate Share Certificates (SH-2)**
Maintains a record of all duplicate or renewed share certificates issued.

**8. Register of Employee Stock Options (SH-6)**
Tracks details related to ESOPs granted to employees, if applicable.

---

### Other Important Records & Documents
Apart from statutory registers, companies must also maintain:
• Minutes Books of Board Meetings, AGMs, and EGMs
• Copies of all Annual Returns filed
• Copies of Financial Statements
• Notices of Meetings
• Attendance Registers for Board and General Meetings

---

### Consequences of Non-Maintenance
Failure to maintain statutory registers properly can lead to:
• Heavy penalties on the company and its Directors/officers
• Non-compliance during ROC inspections or audits
• Difficulties during due diligence for funding, mergers, or acquisitions
• Challenges in resolving shareholder disputes

### How We Assist
• Initial setup and formatting of all required statutory registers.
• Regular updation of registers based on corporate events (e.g., share transfers, director changes, creation of charges).
• Review and rectification of past records.
• Digital maintenance of registers where permitted.
• Assistance during statutory audits or regulatory inspections.

Maintain accurate and compliant corporate records with our expert Secretarial Services.`
          },
          {
            _parentSlug: "agm-egm-bm-compliance-minutes-resolutions",
            title: "AGM & EGM, BM Compliance, Minutes & Resolutions",
            content: `### Meetings, Minutes & Resolutions Compliance

**Overview**
Corporate decision-making is formally conducted and recorded through various meetings, primarily Board Meetings and General Meetings (AGM/EGM). The Companies Act, 2013 prescribes strict procedures for convening these meetings, recording minutes, and passing resolutions.

Proper compliance in this area is fundamental to good corporate governance. It ensures that decisions are legally valid, stakeholders are informed, and regulatory requirements are fully met.

Our corporate secretarial team at ConsultAvenuee provides complete support for organizing, documenting, and filing compliances related to AGMs, EGMs, and Board Meetings.

---

### 1. Board Meetings (BM)
Every company must hold a minimum number of Board Meetings each year to discuss and approve key business decisions, financial results, appointments, and operational matters.

**Our Services Include:**
• Preparation and circulation of Board Meeting Notices.
• Drafting of detailed Agendas and Agenda Notes.
• Drafting of Board Resolutions.
• Maintenance of Attendance Registers.
• Recording, drafting, and finalizing Board Meeting Minutes.
• Assisting in conducting meetings via Video Conferencing (VC) where applicable.

---

### 2. Annual General Meetings (AGM)
An AGM is a mandatory yearly gathering of the company's shareholders to adopt financial statements, declare dividends, appoint auditors, and discuss other ordinary or special business.

**Our Services Include:**
• Determining the timeline and scheduling the AGM.
• Drafting the Notice of AGM and Explanatory Statements.
• Preparation of the Director's Report / Board's Report.
• Managing the dispatch of notices and annual reports to shareholders.
• Drafting of Ordinary and Special Resolutions.
• Recording and finalizing AGM Minutes.
• Filing required forms with the ROC post-AGM.

---

### 3. Extra-Ordinary General Meetings (EGM)
EGMs are convened when urgent matters require shareholder approval before the next AGM. This includes changes in share capital, alteration of MOA/AOA, or removal of directors.

**Our Services Include:**
• Drafting EGM Notices and Explanatory Statements.
• Ensuring compliance with notice periods and quorum requirements.
• Drafting relevant resolutions.
• Recording and finalizing EGM Minutes.
• Filing of MGT-14 and other applicable forms with the ROC.

---

### 4. Minutes & Resolutions
Minutes are the official, legally binding written record of the proceedings of a meeting. Resolutions are the formal decisions taken during these meetings.

**Our Services Include:**
• Drafting crisp, accurate, and legally compliant minutes.
• Ensuring minutes are signed and entered in the Minutes Book within the statutory 30-day timeline.
• Drafting of Circular Resolutions for urgent board decisions.
• Ensuring safe custody and proper binding of Minutes Books.

---

### Importance of Proper Meeting Compliance
• Ensures legal validity of corporate actions and decisions.
• Prevents disputes among directors and shareholders.
• Crucial during due diligence by investors, lenders, and buyers.
• Required for statutory audits and ROC inspections.
• Non-compliance can result in heavy penalties and invalidation of decisions.

Ensure your corporate decisions are properly documented and legally compliant with our expert secretarial support.`
          }
        ],
        faqs: [
          { question: "MCA Annual Compliance FAQs", answer: "", isHeading: true },
          { question: "Is annual compliance mandatory even if the company has no business activity?", answer: "Yes. Companies are generally required to complete prescribed annual compliances and filings even if there are limited or no business transactions during the year." },
          { question: "Which are the major annual ROC filing forms?", answer: "The commonly applicable annual compliance forms include:\\n• AOC-4\\n• MGT-7 / MGT-7A\\n• DIR-3 KYC\\n• DPT-3\\n• MSME Form-I (where applicable)" },
          { question: "What happens if annual filings are delayed?", answer: "Delayed filings may attract additional fees, regulatory consequences, and compliance issues for the company and its directors." },
          { question: "Can ConsultAvenuee handle the entire annual compliance process?", answer: "Yes. We provide complete assistance from documentation, drafting, review, and filing of ROC forms to ongoing compliance support." },

          { question: "ROC Filings FAQs", answer: "", isHeading: true },
          { question: "What is ROC filing?", answer: "ROC filing refers to the submission of statutory forms, annual returns, financial statements, and event-based disclosures with the Registrar of Companies through the MCA portal." },
          { question: "Is ROC filing mandatory?", answer: "Yes. Every registered company and LLP is required to comply with applicable ROC filing requirements, even if there is no business activity during the year." },
          { question: "What happens if ROC filings are delayed?", answer: "Delayed filings attract additional fees and penalties. Persistent non-compliance can result in legal action and regulatory restrictions." },
          { question: "Do dormant companies need to file ROC returns?", answer: "Yes. Even companies with no business transactions are generally required to meet prescribed compliance requirements unless specifically exempted under applicable law." },
          { question: "Can you handle complete annual compliance?", answer: "Yes. We provide complete annual compliance services, including ROC filings, board meeting documentation, annual return preparation, statutory register maintenance, and coordination with auditors." },

          { question: "Maintenance of Statutory Registers FAQs", answer: "", isHeading: true },
          { question: "What are statutory registers and records?", answer: "Statutory registers and records are mandatory corporate records that companies are required to maintain under the Companies Act, 2013. These registers contain important information relating to shareholders, directors, share capital, charges, loans, investments, and other corporate matters." },
          { question: "Why is maintenance of statutory registers important?", answer: "Proper maintenance of statutory registers helps ensure legal compliance, supports good corporate governance, facilitates audits and due diligence, and minimizes the risk of regulatory penalties and non-compliance." },
          { question: "Which statutory registers are required to be maintained by a company?", answer: "Depending on the nature of the company and applicable provisions, statutory registers may include:\\n• Register of Members\\n• Register of Directors & KMP\\n• Register of Charges\\n• Register of Loans, Guarantees & Investments\\n• Register of Related Party Transactions\\n• Register of Beneficial Owners\\n• Share Transfer and Allotment Registers\\n• Other registers prescribed under applicable laws" },
          { question: "Are companies required to maintain minutes books?", answer: "Yes. Companies are generally required to maintain minutes of Board Meetings, General Meetings, Committee Meetings, and related corporate proceedings as prescribed under the Companies Act, 2013." },
          { question: "What happens if statutory registers are not maintained properly?", answer: "Failure to maintain statutory records may result in:\\n• Regulatory non-compliance\\n• Penalties and fines\\n• Difficulties during audits and inspections\\n• Delays in corporate transactions\\n• Issues during due diligence and fundraising exercises" },
          { question: "What is included in secretarial record maintenance?", answer: "Secretarial record maintenance typically includes:\\n• Minutes Books\\n• Board and Shareholder Resolutions\\n• Notices and Agendas\\n• Attendance Registers\\n• Directors' Disclosures\\n• Corporate Action Documentation\\n• Secretarial Compliance Records" },
          { question: "Do private limited companies need to maintain statutory registers?", answer: "Yes. Private limited companies are also required to maintain prescribed statutory registers and records under the Companies Act, 2013, subject to applicable provisions and exemptions." },
          { question: "Are statutory records required during audits and due diligence?", answer: "Yes. Statutory registers and corporate records are commonly reviewed during:\\n• Statutory Audits\\n• Secretarial Audits\\n• Due Diligence Exercises\\n• Fundraising Transactions\\n• Mergers & Acquisitions\\n• Investor Reviews" },
          { question: "What documents are required for maintaining statutory records?", answer: "Commonly required documents include:\\n• Certificate of Incorporation\\n• Memorandum & Articles of Association\\n• Shareholding Details\\n• Director Information\\n• Board and Shareholder Resolutions\\n• ROC Filing Records\\n• Share Certificates\\n• Corporate Action Documents" },
          { question: "Can ConsultAvenuee assist with secretarial compliance and documentation?", answer: "Yes. We provide comprehensive support for:\\n• Statutory Register Maintenance\\n• Minutes Book Preparation\\n• Corporate Record Management\\n• Secretarial Documentation\\n• Share Capital Record Maintenance\\n• Compliance Updates Following Corporate Events\\n• Corporate Governance Support" },
          { question: "How can ConsultAvenuee help?", answer: "Our team provides end-to-end support for maintaining statutory registers, corporate records, minutes books, shareholding records, and secretarial documentation. We help companies remain compliant, audit-ready, and well-governed while minimizing compliance risks." },

          { question: "AGM & EGM Compliance FAQs", answer: "", isHeading: true },
          { question: "What is an Annual General Meeting (AGM)?", answer: "An AGM is a mandatory annual meeting of shareholders where the company's financial statements, directors' report, auditor's report, appointment of directors, appointment or ratification of auditors, and other ordinary business matters are considered and approved." },
          { question: "Is conducting an AGM mandatory for every company?", answer: "Most companies are required to hold an AGM in accordance with the provisions of the Companies Act, 2013, subject to applicable exemptions and specific circumstances." },
          { question: "What is an Extraordinary General Meeting (EGM)?", answer: "An EGM is a shareholder meeting convened to consider urgent or special business that cannot wait until the next AGM, such as alteration of constitutional documents, changes in capital structure, appointment or removal of directors, mergers, or other significant corporate actions." },
          { question: "What is the difference between an AGM and an EGM?", answer: "An AGM is a mandatory annual meeting covering routine statutory business, whereas an EGM is convened whenever shareholder approval is required for specific or urgent matters during the year." },
          { question: "Are Board Meetings mandatory?", answer: "Yes. Companies are generally required to hold Board Meetings at prescribed intervals and maintain proper records of discussions, decisions, and resolutions as required under the Companies Act, 2013." },
          { question: "What documents are required for conducting an AGM or EGM?", answer: "Typically, the following documents may be required:\\n• Notice of Meeting\\n• Agenda\\n• Explanatory Statement\\n• Financial Statements\\n• Directors' Report\\n• Auditor's Report\\n• Draft Resolutions\\n• Shareholding Records\\n• Previous Meeting Minutes\\n\\nThe specific documentation depends on the agenda items being considered." },
          { question: "What is an Explanatory Statement?", answer: "An Explanatory Statement provides shareholders with material facts and relevant information relating to special business proposed at a meeting, enabling informed decision-making before voting." },
          { question: "What are Ordinary and Special Resolutions?", answer: "• Ordinary Resolution: Passed by a simple majority of votes cast.\\n• Special Resolution: Requires a higher voting threshold as prescribed under the Companies Act, 2013.\\n\\nThe type of resolution depends on the nature of the business being approved." },
          { question: "Why are meeting minutes important?", answer: "Minutes serve as the official record of discussions, decisions, approvals, and resolutions passed during Board Meetings, AGMs, and EGMs. They are important compliance documents and may be reviewed during audits, inspections, and due diligence exercises." },
          { question: "How soon should minutes be prepared after a meeting?", answer: "Minutes should be prepared, finalized, and maintained within the timelines prescribed under applicable legal and secretarial standards." },
          { question: "What happens if a company fails to maintain proper meeting records?", answer: "Failure to maintain notices, resolutions, minutes, and statutory records may lead to:\\n• Regulatory non-compliance\\n• Penalties and fines\\n• Challenges to corporate decisions\\n• Audit observations\\n• Difficulties during due diligence and fundraising" },
          { question: "Are Board Resolutions required for routine business decisions?", answer: "Many corporate actions require formal Board approval through resolutions, including:\\n• Opening bank accounts\\n• Appointment of directors or key personnel\\n• Borrowings and investments\\n• Approval of financial statements\\n• Share allotments and transfers\\n• Other significant business decisions" },
          { question: "Can meetings be conducted through video conferencing?", answer: "Yes. Subject to applicable legal provisions, many Board Meetings and certain shareholder meetings may be conducted through video conferencing or other permitted electronic modes." },
          { question: "Do meeting resolutions require ROC filings?", answer: "Certain resolutions and corporate actions require filing of prescribed forms with the Ministry of Corporate Affairs (MCA) within specified timelines. The filing requirements depend on the nature of the resolution and transaction." },
          { question: "How can ConsultAvenuee assist with AGM, EGM, and Board Meeting compliance?", answer: "We provide comprehensive support including:\\n• AGM & EGM Planning\\n• Notice & Agenda Drafting\\n• Explanatory Statements\\n• Board & Shareholder Resolutions\\n• Minutes Preparation\\n• Attendance & Statutory Records\\n• ROC Compliance Support\\n• Corporate Documentation\\n• Secretarial Compliance Advisory" },
          { question: "Can you assist startups and private limited companies?", answer: "Yes. We assist startups, private limited companies, closely held companies, and growing businesses in maintaining complete meeting and secretarial compliance throughout their corporate lifecycle." }
        ],
        subSubServices: [
          { slug: "mca-annual-compliance", title: "MCA Annual Compliance", sections: [], faqs: [] },
          { slug: "roc-filings", title: "ROC Filings", sections: [], faqs: [] },
          { slug: "maintenance-of-statutory-registers-records", title: "Maintenance of Statutory Registers & Records", sections: [], faqs: [] },
          { slug: "agm-egm-bm-compliance-minutes-resolutions", title: "AGM & EGM, BM Compliance, Minutes & Resolutions", sections: [], faqs: [] }
        ]
      },
      {
        id: "virtual-cfo",
        title: "Virtual CFO (vCFO) Services",
        price: "₹19,999",
        description: "Our Virtual CFO Services help startups, SMEs, and growing businesses improve cash flow, profitability, financial planning, and strategic decision-making.",
        sections: [
          {
            title: "Virtual CFO (vCFO) Services",
            content: `### Strategic Financial Leadership Without the Cost of a Full-Time CFO
In today's dynamic business environment, informed financial decisions are critical for sustainable growth. Our Virtual CFO (vCFO) Services provide businesses with access to experienced financial leadership on a flexible and cost-effective basis, without the need to hire a full-time Chief Financial Officer.

At ConsultAvenuee, we partner with business owners, startups, SMEs, and growing enterprises to strengthen financial management, improve profitability, optimize cash flows, and support strategic decision-making.

---

### How Our Virtual CFO Services Add Value

**Financial Planning & Business Strategy**
• Budgeting and Financial Forecasting
• Business Planning and Growth Strategy
• Cash Flow Forecasting
• Scenario and Sensitivity Analysis
• Profitability Improvement Initiatives

**Financial Reporting & Performance Monitoring**
• Monthly Management Information Reports (MIS)
• KPI and Business Performance Dashboards
• Financial Health Analysis
• Board and Management Reporting
• Business Performance Reviews

**Cash Flow & Working Capital Management**
• Cash Flow Planning and Monitoring
• Working Capital Optimization
• Cost Control and Expense Management
• Liquidity and Funding Management

**Fundraising & Investor Support**
• Financial Models and Projections
• Investor and Lender Presentations
• Business Valuation Support
• Due Diligence Assistance
• Debt and Equity Funding Advisory

**Risk Management & Compliance**
• Internal Financial Controls
• Financial Process Improvements
• Tax and Regulatory Coordination
• Risk Assessment and Mitigation
• Governance and Compliance Oversight

---

### Who Can Benefit from Virtual CFO Services?
Our Virtual CFO services are ideal for:
• Startups and Emerging Businesses
• Small & Medium Enterprises (SMEs)
• Family-Owned Businesses
• Manufacturing Companies
• Service-Based Businesses
• Real Estate and Construction Companies
• E-commerce Businesses
• Growing Companies Preparing for Expansion or Fundraising

---

### Key Benefits of Virtual CFO Services
• Access to CFO-Level Expertise at a Fraction of the Cost
• Better Financial Visibility and Business Insights
• Improved Cash Flow and Profitability
• Strategic Support for Growth and Expansion
• Enhanced Financial Controls and Risk Management
• Investor and Lender Readiness
• Scalable Financial Leadership as Your Business Grows

**Need Strategic Financial Leadership?**
Partner with ConsultAvenuee's Virtual CFO team to gain expert financial insights, strengthen decision-making, improve profitability, and accelerate business growth—without the overhead of a full-time CFO.`
          }
        ],
        faqs: [
          { question: "Virtual CFO FAQs", answer: "", isHeading: true },
          { question: "What is a Virtual CFO?", answer: "A Virtual CFO is an experienced finance professional who provides strategic financial leadership and advisory services on a part-time, outsourced, or project basis." },
          { question: "How is a Virtual CFO Different from an Accountant?", answer: "An accountant focuses on bookkeeping, compliance, and financial records, whereas a Virtual CFO helps with business strategy, financial planning, cash flow management, profitability, and growth decisions." },
          { question: "Is a Virtual CFO Suitable for Small Businesses?", answer: "Yes. Virtual CFO services are particularly beneficial for startups and SMEs that need expert financial guidance without the cost of a full-time CFO." },
          { question: "How Often Does a Virtual CFO Work with a Business?", answer: "Engagements can be customized based on business requirements, ranging from a few hours per month to ongoing strategic support." },
          { question: "Can a Virtual CFO Help with Fundraising?", answer: "Yes. Virtual CFOs assist with financial modelling, investor presentations, due diligence, valuation support, and interactions with banks, investors, and funding institutions." },
          { question: "What Industries Do You Serve?", answer: "We work with startups, SMEs, service businesses and other growing enterprises." },
          { question: "How Do I Know If My Business Needs a Virtual CFO?", answer: "If your business is experiencing growth, facing cash flow challenges, seeking funding, expanding operations, or requiring better financial visibility, a Virtual CFO can provide significant value." }
        ]
      }
    ]
  },
  {
    id: "taxation-regulatory-litigation",
    title: "Taxation & Litigation",
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
    longDesc: sub.longDesc,
    sections: sub.sections,
    faqs: sub.faqs,
    checklist: sub.checklist,
    features: sub.features,
    chartData: sub.chartData,
    subSubServices: sub.subSubServices ? sub.subSubServices.map(subSub => {
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
        faqs: subSub.faqs || sub.faqs,
        features: subSub.features || []
      };
    }) : undefined
  }))
}));
