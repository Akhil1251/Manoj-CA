import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_desc(content, search_id, new_desc):
    pattern = rf'(id:\s*"{search_id}"[\s\S]*?description:\s*").*?(")'
    content = re.sub(pattern, rf'\1{new_desc}\2', content, count=1)
    return content

# 1. Update parent categories descriptions
content = replace_desc(content, "nri-services", "End-to-end NRI services covering tax compliance, property management, and legal assistance to help NRIs manage their investments, assets, and obligations in India with confidence.")
content = replace_desc(content, "senior-citizen-advisory", "Expert assistance for senior citizens in managing taxation, pension benefits, property matters, legal documentation, and succession planning.")

# 2. Update sub-services descriptions
content = replace_desc(content, "health-insurance-claims-support", "Professional support for health insurance reimbursement claims, documentation, and claim rejection matters, ensuring a smooth and efficient claims process.")
content = replace_desc(content, "senior-income-tax-filing", "Comprehensive income tax services covering tax planning, return filing, compliance management, and tax notice support for senior citizens.")
content = replace_desc(content, "pension-gratuity-documentations", "Professional pension and gratuity documentation services for hassle-free retirement benefit claims, family pensions, and legal heir settlements.")
content = replace_desc(content, "property-sale-gift-transfer", "Comprehensive property sale, gift deed, and transfer services to ensure smooth, secure, and legally compliant property transactions.")

with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated descriptions")
