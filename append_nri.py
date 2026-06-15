import re

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

content = read_file('src/data/servicesData.ts')

new_services = """  },
  {
    id: "nri-services",
    title: "NRI Services",
    description: "End-to-end NRI services covering tax compliance, property management, and legal assistance to help NRIs manage their investments, assets, and obligations in India with confidence.",
    subServices: [
      {
        id: "nri-advisory",
        title: "NRI Services",
        price: "₹14,999",
        badge: "HOT",
        description: "End-to-end NRI services covering tax compliance, property management, and legal assistance to help NRIs manage their investments, assets, and obligations in India with confidence.",
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
          { slug: "drafting-of-will", title: "Drafting of Will" }
        ]
      }
    ]
  }
];"""

content = content.replace("  }\n];", new_services)

write_file('src/data/servicesData.ts', content)
print("Done")
