import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the builder function to add defaults to subServices that don't have subSubServices

old_map = """// Builder function to resolve and populate fields dynamically
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
    subSubServices: sub.subSubServices ? sub.subSubServices.map(subSub => {"""

new_map = """// Builder function to resolve and populate fields dynamically

const generateDefaults = (title: string, tabId: string) => {
  const defaultShort = `Comprehensive professional support for ${title}.`;
  const defaultLong = `Manoj CA offers expert guidance and complete handling of ${title}. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.`;

  const defaultTimeline: TimelineStep[] = [
    { num: "01", title: "CONSULTATION", detailTitle: "Initial Briefing & Check", desc: `We discuss details regarding ${title} and review all checklists.` },
    { num: "02", title: "VERIFICATION", detailTitle: "Document Compilation", desc: "Our specialists check all details to ensure compliance and completeness." },
    { num: "03", title: "SUBMISSION", detailTitle: "Filing and Liaisoning", desc: "We prepare the forms and submit the applications to the regulatory department." },
    { num: "04", title: "COMPLETION", detailTitle: "Final Approval & Support", desc: "We deliver the certificates, resolve queries, and outline next-step requirements." }
  ];

  const defaultSections: SectionDetail[] = [
    {
      title: "Service Scope & Standards",
      content: `Our professionals ensure a thorough audit and preparation process for ${title}. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.`,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Regulatory Oversight & Risk Mitigation",
      content: `With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks associated with ${title}. We actively track timeline calendars, address authority queries, and prevent delay penalties.`,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Strategic Advisory & Post-Compliance Benefits",
      content: `Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.`,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  let defaultComparison: ComparisonPoint[] = [];
  if (tabId === "society-management") {
    defaultComparison = [
      { aspect: "Operational Efficiency", manual: "Manual tracking takes weeks, prone to member-managing committee friction.", consultAvenuee: "Structured digital handling by housing society experts." },
      { aspect: "Compliance Accuracy", manual: "High risk of statutory notices or fines due to missed dates.", consultAvenuee: "Zero-error draft verification and active calendar alert monitoring." },
      { aspect: "Government Liaisoning", manual: "Requires multiple physical visits to DDR, cooperative registrar offices.", consultAvenuee: "Complete departmental representation and digital submission handling." }
    ];
  } else if (tabId === "compliance-business-advisory") {
    defaultComparison = [
      { aspect: "Incorporation Timeline", manual: "30 to 45 days due to name rejection or document query loops.", consultAvenuee: "Swift execution in 7-10 working days with pre-checks." },
      { aspect: "Document Quality", manual: "Drafting complicated MOA/AOA manually or using generic templates.", consultAvenuee: "Custom drafting tailored to business structure by CA/CS professionals." },
      { aspect: "Post-Compliance Support", manual: "Need to separately source PAN/TAN, GST registration, bank setups.", consultAvenuee: "All-in-one bundle including registrations, accounts, and tax calendars." }
    ];
  } else if (tabId === "taxation-regulatory-litigation") {
    defaultComparison = [
      { aspect: "Audit Safety", manual: "High risk of assessment notices or classification disputes.", consultAvenuee: "Thorough review of books, ledger verification, and pre-audit filters." },
      { aspect: "Penalty Mitigation", manual: "Prone to high interest, late filing fees, and blockages.", consultAvenuee: "Proactive compliance updates, reminders, and structured timelines." },
      { aspect: "Representation Support", manual: "Struggles in drafting replies or conferencing with authorities.", consultAvenuee: "Drafting paper books and representation by senior tax counsels." }
    ];
  } else if (tabId === "nri-services") {
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

  let defaultChecklist: string[] = [];
  if (tabId === "society-management") {
    defaultChecklist = ["Managing Committee Resolution Copy", "Updated Copy of Registered Bye-Laws", "List of Members with Share Allotments", "Application form signed by Chairman/Secretary", "PAN Card & Registration Certificate of the society"];
  } else if (tabId === "nri-services") {
    defaultChecklist = ["Valid Indian Passport / OCI / PIO card", "Copy of Visa / Foreign residence permit", "Indian PAN Card copy", "NRO/NRE Bank Account statement (last 6 months)", "Signed Power of Attorney (PoA) document"];
  } else if (tabId === "senior-citizen-advisory") {
    defaultChecklist = ["Aadhaar Card & PAN Card copy", "Pension Account Booklet / PPO copy", "Original medical insurance policy bond & discharge summaries", "Property ownership title deeds & mutation certificate", "Nomination detail forms"];
  } else if (tabId === "compliance-business-advisory") {
    defaultChecklist = ["Aadhaar & PAN cards of all directors/partners", "Passport size photographs of promoters", "Proposed business names (2-3 names in order of preference)", "Proof of registered office address (electricity/utility bill)", "NOC from property owner"];
  } else {
    defaultChecklist = ["PAN Card / TAN Certificate copy", "GST Registration certificate (if applicable)", "Bank Account Statements for the full financial year", "Form 16 / Form 16A TDS certificates", "Previous year's ITR acknowledgement file"];
  }

  let defaultChartData: ChartDataPoint[] = [];
  if (tabId === "compliance-business-advisory") {
    defaultChartData = [
      { label: "Name & DSC Approval", value: 25, color: "#c79d62" },
      { label: "Document Verification", value: 20, color: "#110311" },
      { label: "Government Filing", value: 35, color: "#e5c595" },
      { label: "Final Certification", value: 20, color: "#c79d62" }
    ];
  } else if (tabId === "taxation-regulatory-litigation") {
    defaultChartData = [
      { label: "Document Collection", value: 20, color: "#c79d62" },
      { label: "Ledger Reconciliation", value: 30, color: "#110311" },
      { label: "Tax Liability Check", value: 25, color: "#e5c595" },
      { label: "Return Submission", value: 25, color: "#c79d62" }
    ];
  } else if (tabId === "society-management") {
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

  return { defaultShort, defaultLong, defaultTimeline, defaultSections, defaultComparison, defaultChecklist, defaultChartData };
};

export const servicesData: ServiceTab[] = rawServicesData.map(tab => ({
  id: tab.id,
  title: tab.title,
  description: tab.description,
  subServices: tab.subServices.map(sub => {
    const defaults = !sub.subSubServices ? generateDefaults(sub.title, tab.id) : null;
    return {
      id: sub.id,
      title: sub.title,
      price: sub.price,
      badge: sub.badge,
      description: sub.description,
      longDesc: sub.longDesc || (defaults ? defaults.defaultLong : undefined),
      sections: sub.sections || (defaults ? defaults.defaultSections : undefined),
      faqs: sub.faqs,
      checklist: sub.checklist || (defaults ? defaults.defaultChecklist : undefined),
      features: sub.features,
      chartData: sub.chartData || (defaults ? defaults.defaultChartData : undefined),
      timelineSteps: (defaults ? defaults.defaultTimeline : undefined),
      comparison: (defaults ? defaults.defaultComparison : undefined),
      subSubServices: sub.subSubServices ? sub.subSubServices.map(subSub => {"""

content = content.replace(old_map, new_map)

# Remove the inline generation inside the subSubServices map
idx_start = content.find('const defaultShort = `Comprehensive professional support for ${subSub.title}.`;')
idx_end = content.find('return {\n        slug: subSub.slug,')

if idx_start != -1 and idx_end != -1:
    content = content[:idx_start] + """      const subDefaults = generateDefaults(subSub.title, tab.id);
      """ + content[idx_end:]

content = content.replace('shortDesc: subSub.shortDesc || defaultShort,', 'shortDesc: subSub.shortDesc || subDefaults.defaultShort,')
content = content.replace('longDesc: subSub.longDesc || defaultLong,', 'longDesc: subSub.longDesc || subDefaults.defaultLong,')
content = content.replace('timelineSteps: subSub.timelineSteps || defaultTimeline,', 'timelineSteps: subSub.timelineSteps || subDefaults.defaultTimeline,')
content = content.replace('sections: subSub.sections || defaultSections,', 'sections: subSub.sections || subDefaults.defaultSections,')
content = content.replace('comparison: subSub.comparison || defaultComparison,', 'comparison: subSub.comparison || subDefaults.defaultComparison,')
content = content.replace('checklist: subSub.checklist || defaultChecklist,', 'checklist: subSub.checklist || subDefaults.defaultChecklist,')
content = content.replace('chartData: subSub.chartData || defaultChartData,', 'chartData: subSub.chartData || subDefaults.defaultChartData,')

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done mapping defaults")
