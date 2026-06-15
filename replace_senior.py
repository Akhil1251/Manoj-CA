import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

old_senior = """  {
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
          { slug: "drafting-of-will", title: "Drafting of Will" }
        ]
      }
    ]
  }"""

new_senior = """  {
    id: "senior-citizen-advisory",
    title: "Senior Citizen Advisory Services",
    description: "Helping senior citizens manage tax, pension, property, and legal matters with ease.",
    subServices: [
      {
        id: "health-insurance-claims-support",
        title: "Health Insurance Claims Support",
        description: "Assistance with filing and processing health insurance claims efficiently.",
        badge: "SPECIAL",
        longDesc: "Manoj CA offers expert guidance and complete handling of Health Insurance Claims Support. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Aadhaar Card & PAN Card copy", "Pension Account Booklet / PPO copy", "Original medical insurance policy bond & discharge summaries", "Property ownership title deeds & mutation certificate", "Nomination detail forms"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      },
      {
        id: "senior-income-tax-filing",
        title: "Income Tax planning & Filing",
        description: "Specialized tax planning and ITR filing services for senior citizens.",
        longDesc: "Manoj CA offers expert guidance and complete handling of Income Tax planning & Filing. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Aadhaar Card & PAN Card copy", "Pension Account Booklet / PPO copy", "Original medical insurance policy bond & discharge summaries", "Property ownership title deeds & mutation certificate", "Nomination detail forms"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      },
      {
        id: "pension-gratuity-documentations",
        title: "Pension & Gratuity Documentations",
        description: "Support with documentation and compliance for pension and gratuity.",
        longDesc: "Manoj CA offers expert guidance and complete handling of Pension & Gratuity Documentations. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Aadhaar Card & PAN Card copy", "Pension Account Booklet / PPO copy", "Original medical insurance policy bond & discharge summaries", "Property ownership title deeds & mutation certificate", "Nomination detail forms"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      },
      {
        id: "property-sale-gift-transfer",
        title: "Property sale, Gift & Transfer",
        description: "Legal assistance for property transactions, gifts, and transfers.",
        longDesc: "Manoj CA offers expert guidance and complete handling of Property sale, Gift & Transfer. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Aadhaar Card & PAN Card copy", "Pension Account Booklet / PPO copy", "Original medical insurance policy bond & discharge summaries", "Property ownership title deeds & mutation certificate", "Nomination detail forms"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      },
      {
        id: "drafting-of-will",
        title: "Drafting of Will",
        description: "Professional drafting and registration of Wills and succession planning.",
        longDesc: "Manoj CA offers expert guidance and complete handling of Drafting of Will. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Aadhaar Card & PAN Card copy", "Pension Account Booklet / PPO copy", "Original medical insurance policy bond & discharge summaries", "Property ownership title deeds & mutation certificate", "Nomination detail forms"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      }
    ]
  }"""

if old_senior in content:
    content = content.replace(old_senior, new_senior)
else:
    print("WARNING: Could not find old_senior string exactly.")
    # attempt fallback find
    idx = content.find('id: "senior-citizen-advisory",')
    if idx != -1:
        start_idx = content.rfind('  {', 0, idx)
        end_idx = content.find('    ]\n  }', start_idx) + 8
        content = content[:start_idx] + new_senior + content[end_idx:]

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done senior")
