import re
import json

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

content = read_file('src/data/servicesData.ts')

# 1. NRI Taxation Services
taxation_longDesc = "Simplifying Indian Tax Compliance for Non-Resident Indians Worldwide\\nManaging tax obligations across multiple jurisdictions can be complex and challenging. Whether you earn income in India, own property, invest in Indian assets, or require assistance with tax compliance and repatriation, expert guidance is essential to ensure compliance while optimizing your tax position.\\nAt ConsultAvenuee, we provide comprehensive NRI Taxation Services to Non-Resident Indians (NRIs), Overseas Citizens of India (OCIs), and Persons of Indian Origin (PIOs)."
taxation_sections = """[
          {
            title: "NRI Income Tax Return Filing`,
            content: `• Income Tax Return Filing for NRIs\\n• Revised and Updated Return Filing\\n• Tax Refund Processing\\n• Income Tax Compliance Review\\n• Tax Record Management`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Property Taxation Services`,
            content: `• Tax Advisory on Property Purchase and Sale\\n• Capital Gains Computation\\n• TDS Compliance on Property Transactions\\n• Reinvestment and Exemption Planning\\n• Rental Income Tax Compliance\\n• Repatriation Documentation Support`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Capital Gains & Investment Tax Advisory`,
            content: `• Capital Gains Tax Planning\\n• Property, Shares and Mutual Fund Taxation\\n• Investment Tax Advisory\\n• Exemption and Relief Planning`,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "TDS & Compliance Services`,
            content: `• Property Sale TDS Advisory\\n• Rental Income TDS Compliance\\n• Investment Income TDS Review\\n• Lower or Nil TDS Certificate Assistance\\n• TDS Refund Claims`,
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Tax Notices & Representation`,
            content: `• Income Tax Notice Response Support\\n• Assessment and Reassessment Assistance\\n• Refund and Rectification Matters\\n• Appeal Documentation Support\\n• Representation Before Tax Authorities`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Our Commitment`,
            content: `We help NRIs manage their Indian tax obligations with confidence through proactive planning, accurate compliance, and practical advisory solutions. Our objective is to simplify complex tax matters, minimize tax exposure, ensure regulatory compliance, and protect your financial interests in India and abroad.`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ]"""
taxation_checklist = """["Passport`, "PAN Card`, "Aadhaar Card (if available)`, "Overseas Address Proof`, "Tax Residency Documents`, "Bank Statements`, "Property Documents`, "Form 16 (if applicable)`, "Investment Statements`, "Foreign Income Records`, "TDS Certificates`, "Previous Tax Returns"]"""
taxation_faqs = """[
          { question: "Who can avail NRI Taxation Services?`, answer: "Our NRI Taxation Services are designed for Non-Resident Indians (NRIs), Overseas Citizens of India (OCIs), Persons of Indian Origin (PIOs), and individuals with tax obligations, investments, or income sources in India." },
          { question: "Do NRIs need to file Income Tax Returns in India?`, answer: "Yes. NRIs may be required to file an Income Tax Return (ITR) in India if their taxable income exceeds the prescribed threshold or if they wish to claim tax refunds, carry forward losses, or meet specific compliance requirements." },
          { question: "How is NRI tax residency determined?`, answer: "Tax residency is determined based on the individual's physical presence in India during the relevant financial year and preceding years, as per the provisions of the Income Tax Act." },
          { question: "What types of income earned by NRIs are taxable in India?`, answer: "Generally, income that accrues, arises, or is received in India may be taxable in India. This may include:\\n• Rental Income\\n• Capital Gains\\n• Salary earned in India\\n• Interest Income\\n• Business Income\\n• Investment Income" },
          { question: "Can NRIs claim tax refunds in India?`, answer: "Yes. If excess tax has been deducted or paid, NRIs may claim refunds by filing the appropriate Income Tax Return." },
          { question: "Is rental income from property in India taxable for NRIs?`, answer: "Yes. Rental income earned from property located in India is generally taxable in India and may be subject to TDS requirements." },
          { question: "How is capital gains tax calculated on the sale of property by an NRI?`, answer: "Capital gains tax depends on factors such as the holding period, purchase cost, sale consideration, indexed cost benefits (where applicable), and available exemptions under tax laws." },
          { question: "Can NRIs claim exemptions on capital gains tax?`, answer: "Yes. Subject to eligibility conditions, NRIs may be able to claim exemptions and reliefs through specified reinvestment options and tax planning strategies." },
          { question: "What is TDS on property sale transactions involving NRIs?`, answer: "Property purchases from NRIs may attract specific TDS obligations under Indian tax laws. We assist both buyers and sellers in understanding and complying with these requirements." },
          { question: "Can you assist with lower or nil TDS certificate applications?`, answer: "Yes. We assist eligible taxpayers in preparing and filing applications for lower or nil deduction certificates, subject to approval by the tax authorities." },
          { question: "Can you assist with taxation of shares, mutual funds, and other investments?`, answer: "Yes. We provide advisory and compliance support relating to taxation of shares, mutual funds, bonds, securities, and other investment assets held in India." },
          { question: "What is Double Taxation Avoidance Agreement (DTAA)?`, answer: "DTAA is a tax treaty between two countries that helps taxpayers avoid being taxed twice on the same income. We assist NRIs in evaluating applicable DTAA benefits." },
          { question: "Can NRIs claim DTAA benefits?`, answer: "Yes. Eligible NRIs may claim relief under applicable DTAA provisions, subject to fulfilling prescribed conditions and documentation requirements." },
          { question: "Can you assist with pending tax refunds?`, answer: "Yes. We assist in tracking refund status, resolving discrepancies, responding to departmental queries, and facilitating refund processing." },
          { question: "Do NRIs need to report foreign income in India?`, answer: "Reporting requirements depend on residential status, source of income, and applicable tax provisions. We evaluate individual circumstances and advise accordingly." },
          { question: "Can you assist with tax planning for property investments in India?`, answer: "Yes. We provide advisory services on acquisition, ownership, rental income, sale transactions, capital gains planning, and tax-efficient investment structures." },
          { question: "Is online tax filing and consultation available for overseas clients?`, answer: "Yes. Most of our taxation services can be managed remotely through secure digital communication and document-sharing processes, enabling seamless support worldwide." },
          { question: "Can you assist with taxation of NRO and NRE accounts?`, answer: "Yes. We provide guidance on the tax treatment, compliance requirements, and reporting obligations associated with NRO and NRE accounts." },
          { question: "Can you help obtain Form 15CA and Form 15CB for fund repatriation?`, answer: "Yes. We assist with documentation, certification coordination, and compliance requirements related to overseas remittances and repatriation of funds." },
          { question: "Can you review my overall Indian tax position before I invest or sell assets?`, answer: "Yes. We provide pre-transaction tax reviews to help clients understand tax implications, available exemptions, compliance requirements, and potential tax exposures before making financial decisions." },
          { question: "Can you coordinate with my overseas tax advisors?`, answer: "Yes. We can work alongside your overseas tax consultants, accountants, and financial advisors to facilitate efficient management of cross-border tax matters and compliance requirements." }
        ]"""

# 2. NRI Property Management Services
prop_longDesc = "Protecting, Managing & Maximizing the Value of Your Property in India\\nOwning property in India while living abroad presents unique challenges—from property monitoring and tenant management to maintenance, compliance, and safeguarding against unauthorized occupation. Managing these responsibilities remotely can be time-consuming and stressful.\\nAt ConsultAvenuee, we provide comprehensive NRI Property Management Services designed to help NRIs, OCIs, and PIOs efficiently manage, protect, and optimize their residential, commercial, inherited, and investment properties across India.\\nActing as your trusted local representative, we ensure your property remains secure, compliant, well-maintained, and financially productive."
prop_sections = """[
          {
            title: "Property Inspection & Monitoring`,
            content: `Regular monitoring helps safeguard your property and ensures timely identification of any issues.`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Property Protection & Asset Security`,
            content: `We help protect your property against misuse, encroachment, and unauthorized occupation.`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Tenant Management & Rental Services`,
            content: `Our team assists with the complete rental lifecycle, from tenant onboarding to rent management.\\nServices include:\\n• Property Marketing and Listing Support\\n• Tenant Screening and Verification\\n• Rent Negotiation Assistance\\n• Rent Agreement Documentation\\n• Lease Renewal Coordination\\n• Security Deposit Management\\n• Tenant Exit Documentation\\n• Rental Income Monitoring and Reporting`,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Property Maintenance & Upkeep`,
            content: `We coordinate routine and emergency maintenance to preserve property value and functionality.`,
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Property Sale & Purchase Assistance`,
            content: `Whether acquiring or disposing of property, we assist with documentation and transaction management.\\nServices include:\\n• Property Due Diligence Coordination\\n• Title Verification Support\\n• Property Valuation Coordination\\n• Buyer and Seller Documentation Assistance\\n• Registration Support\\n• Property Handover Coordination\\n• Transaction Documentation Review`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Property Reporting & Advisory`,
            content: `We provide transparent reporting and insights to help you make informed property decisions.`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Our Commitment`,
            content: `We act as your trusted property management partner in India, providing proactive oversight, professional coordination, and comprehensive support to protect your real estate investments. Our goal is to give NRIs complete peace of mind by ensuring their properties remain secure, compliant, well-maintained, and financially productive, regardless of where they reside in the world.`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          }
        ]"""
prop_checklist = """["Passport`, "OCI / PIO Card (if applicable)`, "PAN Card`, "Property Title Documents`, "Previous Sale Deeds`, "Property Tax Receipts`, "Utility Records`, "Existing Lease Agreements`, "Power of Attorney (if applicable)`, "Bank Account Details"]"""
prop_faqs = """[
          { question: "Who can avail NRI Property Management Services?`, answer: "Our services are designed for Non-Resident Indians (NRIs), Overseas Citizens of India (OCIs), Persons of Indian Origin (PIOs), and foreign citizens who own property in India." },
          { question: "What types of properties do you manage?`, answer: "We manage residential apartments, villas, independent houses, commercial properties, and investment properties across India." },
          { question: "How often do you inspect the property?`, answer: "Inspection frequency can be customized based on client requirements. Regular inspections may be conducted monthly, quarterly, half-yearly, or annually." },
          { question: "Can you help prevent unauthorized occupation or encroachment?`, answer: "Yes. We conduct periodic property inspections, monitor occupancy status, coordinate with local authorities when necessary, and provide timely alerts regarding any unauthorized activity." },
          { question: "Do I need to visit India to manage my property?`, answer: "No. Most property management activities can be handled remotely through our authorized representatives and Power of Attorney arrangements, where applicable." },
          { question: "Can you assist in finding tenants for my property?`, answer: "Yes. We assist with property marketing, tenant screening, background verification, rent agreement documentation, lease management, and tenant onboarding." },
          { question: "How do you verify prospective tenants?`, answer: "We conduct identity verification, address verification, employment checks, and reference checks wherever possible before recommending a tenant." },
          { question: "Do you prepare and manage rental agreements?`, answer: "Yes. We coordinate the preparation, execution, renewal, and registration (where required) of rent and lease agreements." },
          { question: "Can you coordinate property maintenance and repairs?`, answer: "Yes. We arrange routine maintenance, emergency repairs, vendor coordination, utility management, and upkeep services to ensure the property remains in good condition." },
          { question: "Can you assist in selling my property in India?`, answer: "Yes. We assist with documentation, title verification coordination, valuation support, buyer coordination, registration assistance, and transaction documentation." },
          { question: "Can you assist in purchasing property in India?`, answer: "Yes. We provide support in due diligence, title verification, document review, valuation coordination, and transaction assistance." },
          { question: "Do I need to provide a Power of Attorney (POA)?`, answer: "A POA may be required for certain activities such as property transactions, legal representation, registration work, or dealing with government authorities. The requirement depends on the scope of services." },
          { question: "Can you assist with property tax and utility bill payments?`, answer: "Yes. We coordinate payment of property taxes, maintenance charges, electricity bills, water bills, and other statutory dues as authorized by the owner." },
          { question: "Why should I choose professional property management services?`, answer: "Professional management helps protect your property, reduce risks of misuse or encroachment, ensure timely maintenance, improve tenant management, maintain legal compliance, and provide peace of mind while you reside abroad." },
          { question: "Can you represent me before housing societies and local authorities?`, answer: "Yes. We can coordinate with housing societies, municipal authorities, utility providers, and other local bodies for routine property-related matters, subject to authorization." },
          { question: "Do you provide property photo and video inspection reports?`, answer: "Yes. Detailed photo and video reports can be provided after inspections to help owners monitor the property's condition remotely." }
        ]"""

# 3. NRI Legal Services
legal_longDesc = "Your Trusted India Partner for Legal, Documentation & Compliance Matters\\nManaging legal, compliance, and documentation requirements in India can be challenging while living overseas.\\nAt ConsultAvenuee, we provide comprehensive NRI Legal & Compliance Services, helping NRIs, OCIs, PIOs, and their families manage legal documentation, retirement benefits, regulatory compliance, and representation matters efficiently and securely from anywhere in the world."
legal_sections = """[
          {
            title: "Power of Attorney (POA) Services`,
            content: `Power of Attorney is often essential for NRIs to authorize trusted representatives to act on their behalf in India.\\nOur services include:\\n• General Power of Attorney (GPA) Drafting\\n• Special Power of Attorney (SPA) Drafting\\n• Banking and Financial POA Documentation\\n• Legal and Administrative Representation POA\\n• POA Review and Legal Vetting\\n• Attestation and Registration Guidance\\n• Revocation and Amendment Documentation`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Documentation & Attestation Services`,
            content: `We assist with preparation, verification, authentication, and management of legal and regulatory documents required in India.\\nServices include:\\n• PAN Application and Corrections\\n• Affidavits and Declarations\\n• Notarization Guidance\\n• Certified Documentation Assistance\\n• Compliance Documentation Support`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Retirement & Financial Documentation Services`,
            content: `We help NRIs manage retirement-related benefits, financial records, and beneficiary matters in India.\\nServices include:\\n• PF Withdrawal Assistance\\n• Pension Documentation Support\\n• Gratuity Claim Documentation\\n• Nomination and Beneficiary Updates\\n• Banking Documentation Assistance\\n• Financial Record Consolidation`,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Business & Corporate Support Services`,
            content: `For NRIs with business interests in India, we provide documentation and compliance assistance.\\nServices include:\\n• Company Incorporation Support\\n• LLP and Partnership Documentation\\n• Startup Advisory Support\\n• ROC and secretarial Compliance Assistance\\n• Share Transfer Documentation\\n• Corporate Documentation Management`,
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Our Commitment`,
            content: `We serve as a trusted India-based advisory partner for NRIs, helping them navigate legal, compliance, documentation, and succession matters with confidence. Our objective is to simplify complex processes, ensure regulatory compliance, protect family interests, and provide seamless support for managing Indian affairs from anywhere in the world.`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ]"""
legal_checklist = """["Passport`, "OCI / PIO Card (if applicable)`, "PAN Card`, "Overseas Address Proof`, "Indian Address Proof (if available)`, "Tax Records and Financial Statements`, "Bank Account Details`, "Existing Legal Documents`, "Family and Beneficiary Information`, "Investment and Compliance Records"]"""
legal_faqs = """[
          { question: "Who can avail NRI Legal & Compliance Services?`, answer: "Our services are designed for Non-Resident Indians (NRIs), Overseas Citizens of India (OCIs), Persons of Indian Origin (PIOs), and their families who require assistance with legal, compliance, documentation, and succession matters in India." },
          { question: "Why do NRIs require legal and compliance support in India?`, answer: "Managing legal and regulatory matters from overseas can be challenging due to evolving laws, documentation requirements, and the need for local coordination. Professional support helps ensure compliance, accuracy, and timely execution of legal processes." },
          { question: "What is a Power of Attorney (POA), and why is it important for NRIs?`, answer: "A Power of Attorney allows an NRI to authorize a trusted individual to act on their behalf in India for property, banking, legal, administrative, and financial matters without requiring frequent travel." },
          { question: "What is the difference between a General Power of Attorney (GPA) and a Special Power of Attorney (SPA)?`, answer: "A GPA grants broad authority to the appointed representative for multiple matters, while an SPA grants authority for a specific transaction or purpose only." },
          { question: "Can you assist with drafting and reviewing Power of Attorney documents?`, answer: "Yes. We assist with drafting, reviewing, vetting, attestation guidance, registration support, amendments, and revocation of Power of Attorney documents." },
          { question: "Can a Power of Attorney executed abroad be used in India?`, answer: "Yes. Subject to applicable legal requirements, a POA executed overseas may need notarization, attestation, apostille, and registration in India before use." },
          { question: "Can you help with PAN card applications and corrections?`, answer: "Yes. We assist with PAN applications, corrections, updates, reissuance, and documentation support for NRIs." },
          { question: "Do you provide document attestation and notarization support?`, answer: "Yes. We provide guidance on notarization, attestation, apostille requirements, certified copies, affidavits, declarations, and other legal documentation processes." },
          { question: "Can you assist with PF withdrawal and pension documentation?`, answer: "Yes. We assist with documentation for Provident Fund withdrawals, pension claims, gratuity settlements, beneficiary updates, and retirement benefit processing." },
          { question: "Can NRIs claim pension and retirement benefits in India?`, answer: "Yes. Eligible NRIs may claim retirement benefits subject to applicable laws, eligibility criteria, and documentation requirements." },
          { question: "Can you assist NRIs with company formation in India?`, answer: "Yes. We provide support for company incorporation, LLP registration, partnership documentation, startup structuring, and related compliance requirements." },
          { question: "Can you help with ROC and corporate compliance matters?`, answer: "Yes. We assist with documentation and compliance support related to corporate filings, secretarial records, share transfers, and regulatory requirements." },
          { question: "Can you represent me before government authorities and institutions?`, answer: "We provide coordination and representation support through authorized processes, documentation management, and liaison assistance, subject to legal requirements and authorization." },
          { question: "Can services be managed remotely from overseas?`, answer: "Yes. Most services can be managed remotely through digital communication, document sharing, and authorized representation, reducing the need for travel to India." },
          { question: "Why should NRIs engage professional legal and compliance support?`, answer: "Professional support helps reduce legal risks, ensure regulatory compliance, streamline documentation, protect family interests, facilitate succession planning, and provide peace of mind while managing affairs in India from abroad." },
          { question: "Can you assist elderly parents or family members in India on behalf of NRIs?`, answer: "Yes. Subject to authorization, we can coordinate documentation, compliance requirements, and administrative support for family members residing in India." },
          { question: "Can you coordinate with lawyers, chartered accountants, and other professionals?`, answer: "Yes. We work closely with legal, tax, and compliance professionals whenever specialized expertise or representation is required." }
        ]"""


def replace_service(content, svc_id, longDesc, sections, checklist, faqs):
    # Regex to find the whole block for a specific subservice ID up to its features or faqs
    # We will search for id: "nri-taxation-services" and replace its longDesc, sections, checklist, faqs
    # Find the start of the service block
    start_idx = content.find(f'id: "{svc_id}"')
    if start_idx == -1: return content
    
    # We find the specific properties inside this block and replace them
    # Because order is strict in servicesData.ts, we can just replace the whole block up to `chartData:`
    # Wait, the structure is:
    # id: "nri-taxation-services`,
    # title: ...,
    # description: ...,
    # badge: ...,
    # longDesc: "...`,
    # sections: [...],
    # image: "...`,
    # timelineSteps: [...],
    # comparison: [...],
    # checklist: [...],
    # chartData: [...]
    # So we replace from `longDesc:` to `image: "..."` (excluding image)
    
    # We'll use re.sub for each property within a reasonable range of start_idx
    block_end = content.find('chartData:', start_idx)
    
    block = content[start_idx:block_end]
    
    # Replace longDesc
    block = re.sub(r'longDesc:\s*".*?`,', f'longDesc: `{longDesc}`,', block, count=1, flags=re.DOTALL)
    
    # Replace sections
    block = re.sub(r'sections:\s*\[.*?\](,\s*image:)', f'sections: {sections}\\1', block, count=1, flags=re.DOTALL)
    
    # Replace checklist
    block = re.sub(r'checklist:\s*\[.*?\],', f'checklist: {checklist},', block, count=1, flags=re.DOTALL)
    
    # For faqs, it may not exist in the block yet (since some didn't have faqs)
    # If not exists, insert before checklist
    if 'faqs:' in block:
        block = re.sub(r'faqs:\s*\[.*?\],', f'faqs: {faqs},', block, count=1, flags=re.DOTALL)
    else:
        # insert faqs before checklist
        block = block.replace(f'checklist: {checklist},', f'faqs: {faqs},\n        checklist: {checklist},')
        
    return content[:start_idx] + block + content[block_end:]


content = replace_service(content, "nri-taxation-services`, taxation_longDesc, taxation_sections, taxation_checklist, taxation_faqs)
content = replace_service(content, "nri-property-management-services`, prop_longDesc, prop_sections, prop_checklist, prop_faqs)
content = replace_service(content, "nri-legal-services`, legal_longDesc, legal_sections, legal_checklist, legal_faqs)

write_file('src/data/servicesData.ts', content)
print("Updated successfully")
