import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the duplicates at the end.
# They start with `  {\n    id: "nri-services",`
idx = content.rfind('  {\n    id: "nri-services",')
if idx != -1:
    content = content[:idx-4] + '\n];\n' + content[content.find('// Helper images depending on main category'):]

# 2. Flatten NRI Services
old_nri = """  {
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
  },"""

new_nri = """  {
    id: "nri-services",
    title: "NRI Services",
    description: "Trusted NRI solutions for tax, property, and legal matters in India. Expert support. Complete peace of mind.",
    subServices: [
      {
        id: "nri-taxation-services",
        title: "Taxation Services",
        description: "Comprehensive tax planning and compliance services for NRIs.",
        badge: "HOT"
      },
      {
        id: "nri-property-management-services",
        title: "Property Management Services",
        description: "End-to-end property management, sales, and documentation for NRIs."
      },
      {
        id: "nri-legal-services",
        title: "Legal Services",
        description: "Expert legal assistance for NRI property disputes, succession, and FEMA compliance."
      }
    ]
  },"""

content = content.replace(old_nri, new_nri)

# 3. Flatten Senior Citizen Advisory
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
        badge: "SPECIAL"
      },
      {
        id: "senior-income-tax-filing",
        title: "Income Tax planning & Filing",
        description: "Specialized tax planning and ITR filing services for senior citizens."
      },
      {
        id: "pension-gratuity-documentations",
        title: "Pension & Gratuity Documentations",
        description: "Support with documentation and compliance for pension and gratuity."
      },
      {
        id: "property-sale-gift-transfer",
        title: "Property sale, Gift & Transfer",
        description: "Legal assistance for property transactions, gifts, and transfers."
      },
      {
        id: "drafting-of-will",
        title: "Drafting of Will",
        description: "Professional drafting and registration of Wills and succession planning."
      }
    ]
  }"""

content = content.replace(old_senior, new_senior)

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done flattening")
