import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove duplicates
idx = content.rfind('  {\n    id: "nri-services",')
if idx != -1:
    content = content[:idx-4] + '\n];\n' + content[content.find('// Helper images depending on main category'):]


# 2. Fully populated nri-services
new_nri = """  {
    id: "nri-services",
    title: "NRI Services",
    description: "Trusted NRI solutions for tax, property, and legal matters in India. Expert support. Complete peace of mind.",
    subServices: [
      {
        id: "nri-taxation-services",
        title: "Taxation Services",
        description: "Comprehensive tax planning and compliance services for NRIs.",
        badge: "HOT",
        longDesc: "Manoj CA offers expert guidance and complete handling of Taxation Services. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process for Taxation Services. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks associated with Taxation Services. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Valid Indian Passport / OCI / PIO card", "Copy of Visa / Foreign residence permit", "Indian PAN Card copy", "NRO/NRE Bank Account statement (last 6 months)", "Signed Power of Attorney (PoA) document"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      },
      {
        id: "nri-property-management-services",
        title: "Property Management Services",
        description: "End-to-end property management, sales, and documentation for NRIs.",
        longDesc: "Manoj CA offers expert guidance and complete handling of Property Management Services. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process for Property Management Services. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks associated with Property Management Services. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Valid Indian Passport / OCI / PIO card", "Copy of Visa / Foreign residence permit", "Indian PAN Card copy", "NRO/NRE Bank Account statement (last 6 months)", "Signed Power of Attorney (PoA) document"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      },
      {
        id: "nri-legal-services",
        title: "Legal Services",
        description: "Expert legal assistance for NRI property disputes, succession, and FEMA compliance.",
        longDesc: "Manoj CA offers expert guidance and complete handling of Legal Services. Our experienced team manages all statutory formalities, document verification, and government submissions to ensure full compliance and peace of mind.",
        sections: [
          {
            title: "Service Scope & Standards",
            content: "Our professionals ensure a thorough audit and preparation process for Legal Services. We review all local state parameters, standard bylaws, and relevant central notifications to make sure that the filing is fully aligned with regulatory norms.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Regulatory Oversight & Risk Mitigation",
            content: "With over 34+ years of professional standing, our advisory team helps mitigate any compliance risks associated with Legal Services. We actively track timeline calendars, address authority queries, and prevent delay penalties.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Strategic Advisory & Post-Compliance Benefits",
            content: "Beyond the registration or filing itself, we offer valuable long-term insights. This includes ongoing advisory on tax liabilities, structural governance, and annual filings so you can run operations seamlessly.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ],
        checklist: ["Valid Indian Passport / OCI / PIO card", "Copy of Visa / Foreign residence permit", "Indian PAN Card copy", "NRO/NRE Bank Account statement (last 6 months)", "Signed Power of Attorney (PoA) document"],
        chartData: [
          { label: "Intake Consultation", value: 30, color: "#c79d62" },
          { label: "Record Compilation", value: 30, color: "#110311" },
          { label: "Drafting & Check", value: 20, color: "#e5c595" },
          { label: "Final Execution", value: 20, color: "#c79d62" }
        ]
      }
    ]
  },"""

# 3. Fully populated senior-citizen-advisory
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

idx_nri_start = content.find('  {\n    id: "nri-services",')
idx_nri_end = content.find('  {\n    id: "senior-citizen-advisory",', idx_nri_start)
idx_senior_end = content.find('  {', idx_nri_end + 5) if content.find('  {', idx_nri_end + 5) != -1 else content.rfind(']')

# If the regex doesn't match perfectly, we can just replace exactly what we know is there.
# Let's extract the old text to replace.
old_nri_match = content[idx_nri_start:idx_nri_end]
old_senior_match = content[idx_nri_end:idx_senior_end]

content = content.replace(old_nri_match, new_nri + ",\n")
content = content.replace(old_senior_match, new_senior + "\n")

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done flattening and populating defaults")
