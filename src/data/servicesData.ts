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
        faqs: sub.faqs,
        features: subSub.features || []
      };
    }) : undefined
  }))
}));
