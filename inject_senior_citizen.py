import re

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_service(content, service_id, longDesc, sections, checklist, faqs):
    pattern = rf'(id:\s*"{service_id}"[\s\S]*?longDesc:\s*")[^"]*?"([\s\S]*?)(?=chartData:)'
    match = re.search(pattern, content)
    if not match:
        print(f"Could not find block for {service_id}")
        return content
    
    start_idx = match.start()
    block_end = match.end()
    
    block = content[start_idx:block_end]
    
    block = re.sub(r'longDesc:\s*".*?",', f'longDesc: `{longDesc}`,', block, count=1, flags=re.DOTALL)
    block = re.sub(r'sections:\s*\[[\s\S]*?\],\s*image:', f'sections: {sections},\n        image:', block, count=1)
    block = re.sub(r'checklist:\s*\[[\s\S]*?\],\s*', f'checklist: {checklist},\n        ', block, count=1)
    
    if 'faqs:' in block:
        block = re.sub(r'faqs:\s*\[[\s\S]*?\],', f'faqs: {faqs},', block, count=1)
    else:
        block = block + f"faqs: {faqs},\n        "
        
    return content[:start_idx] + block + content[block_end:]


# 1. Health Insurance Claims Support
health_longDesc = "ConsultAvenuee Senior Citizen Assistance Services provide trusted support for taxation, health insurance claims, financial documentation, property matters, estate planning, and regulatory compliance, enabling senior citizens and their families to manage life's financial and administrative responsibilities with confidence, convenience, and peace of mind.\\n\\nHelping You Focus on Recovery, Not Paperwork\\nConsultAvenuee provides reliable and professional Health Insurance Claims Support Services to help you navigate the process with confidence and secure the benefits you are entitled to under your policy.\\nLet us handle the claim process while you focus on your health and recovery."
health_sections = """[
          {
            title: "Health Insurance Claims Support Services",
            content: `Simplifying Health Insurance Claims. Maximizing Your Benefits.\\nOur objective is to simplify the process, minimize delays, reduce claim rejections, and help clients secure timely settlement of eligible insurance benefits.\\nAt ConsultAvenuee, we provide comprehensive Health Insurance Claims Support Services.`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Reimbursement Claim Assistance",
            content: `For medical expenses paid directly by the insured, we provide complete support for reimbursement claims.`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Claim Documentation Support",
            content: `Accurate documentation plays a critical role in claim approval.`,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Claim Rejection & Dispute Resolution Support",
            content: `If a claim is rejected or partially settled, we assist clients in pursuing a fair review and resolution.`,
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Benefits of Professional Claims Assistance",
            content: `• Reduced Claim Rejections\\n• Faster Claim Processing\\n• Continuous Claim Tracking\\n• Expert Guidance\\n• Dispute Resolution Support\\n• Improved Settlement Outcomes`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ]"""
health_checklist = """["Health Insurance Policy Details", "Health Insurance Card", "Aadhaar Card or Identity Proof", "Hospital Admission Records", "Discharge Summary", "Medical Prescriptions", "Diagnostic Reports", "Original Medical Bills and Receipts", "Pharmacy Bills", "Bank Account Details", "Cancelled Cheque (for reimbursement claims)"]"""
health_faqs = """[
          { question: "Can you help if my claim has already been rejected?", answer: "Yes. We can review the rejection reasons, evaluate available options, assist with documentation, and support you in pursuing reconsideration or grievance redressal processes." },
          { question: "Can senior citizens avail these services?", answer: "Absolutely. We provide dedicated assistance for senior citizens and their family members throughout the claim process." },
          { question: "Do you sell insurance policies?", answer: "No. Our role is to assist policyholders in managing and processing health insurance claims efficiently and professionally." }
        ]"""


# 2. Income Tax planning & Return Filing Services
tax_longDesc = "Smart Tax Planning. Accurate Compliance. Maximum Savings.\\nEffective tax planning is not just about reducing tax liability—it is about making informed financial decisions, ensuring regulatory compliance, and preserving wealth.\\nAt ConsultAvenuee, we provide comprehensive Income Tax Planning, Compliance, and Return Filing Services.\\nPartner with us for proactive tax planning, accurate compliance, and trusted professional guidance throughout the year."
tax_sections = """[
          {
            title: "Tax Planning & Advisory",
            content: `We help clients develop tax-efficient strategies that align with their financial and business objectives.`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Income Tax Return Filing Services",
            content: `Timely and accurate filing of Income Tax Returns is essential for maintaining compliance and avoiding penalties.`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Tax Compliance Services",
            content: `Our compliance support ensures that all tax obligations are met accurately and on time.\\n• PAN & TAN Services\\n• Advance Tax Computation\\n• Self-Assessment Tax Calculation\\n• TDS Verification & Reconciliation\\n• AIS & Form 26AS Review\\n• Income Tax Portal Assistance\\n• Tax Compliance Review`,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Tax Notice & Assessment Support",
            content: `Receiving a tax notice can be stressful. Our experienced professionals provide practical assistance in responding effectively and protecting your interests.`,
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Benefits of Professional Tax Planning",
            content: `• Maximize Tax Savings\\n• Ensure Accurate Compliance\\n• Minimize Tax Risks\\n• Improve Financial Planning\\n• Expert Guidance\\n• Efficient Refund Processing`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ]"""
tax_checklist = """["PAN Card", "Aadhaar Card", "Form 16", "Salary Slips", "Bank Statements", "Investment Proofs", "Home Loan Interest Certificate", "Capital Gain Statements (if applicable)", "PAN & Registration Documents (Business)", "Books of Accounts (Business)", "Financial Statements (Business)", "GST Returns (Business)", "TDS Details (Business)", "Expense Records (Business)", "Audit Reports (where applicable)"]"""
tax_faqs = """[
          { question: "Is tax planning different from tax filing?", answer: "Yes. Tax planning focuses on legally minimizing tax liability through strategic financial decisions, while tax filing involves reporting income and filing returns with the Income Tax Department." },
          { question: "Can you assist with capital gains taxation?", answer: "Yes. We provide comprehensive advisory and return filing support for property, shares, mutual funds, and other capital asset transactions." },
          { question: "Do you handle tax notices?", answer: "Yes. We assist clients in responding to notices, assessments, departmental queries, and rectification matters." },
          { question: "Can NRIs avail your tax services?", answer: "Absolutely. We provide specialized tax planning, compliance, and return filing services for NRIs and overseas Indians." }
        ]"""


# 3. Pension & Gratuity Documentations
pension_longDesc = "Securing Your Retirement Benefits with Confidence\\nRetirement benefits such as pension and gratuity represent years of dedicated service and financial contribution. However, incomplete documentation, procedural complexities, and compliance requirements often lead to delays in claim processing and settlement.\\nAt ConsultAvenuee, we provide comprehensive Pension & Gratuity Documentation Services, assisting employees, retirees, senior citizens, employers, nominees, and legal heirs in preparing, verifying, and processing the documentation required for pension claims, gratuity settlements, and retirement benefit applications.\\nOur objective is to ensure accurate documentation, seamless claim processing, and timely receipt of eligible retirement benefits."
pension_sections = """[
          {
            title: "EPFO & EPS Pension Assistance",
            content: `We assist employees and retirees in navigating pension claim procedures under the Employees' Provident Fund Organisation (EPFO) and Employees' Pension Scheme (EPS).\\nServices include:\\n• Form 10D Preparation (Monthly Pension Claims)\\n• Form 10C Preparation (Pension Withdrawal / Scheme Certificate)\\n• Pension Application Documentation\\n• UAN & KYC Verification\\n• Service History Verification\\n• Pension Eligibility Assessment\\n• Joint Declaration Preparation\\n• Pension Corrections & Revision Applications\\n• Pension Transfer Documentation`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Family Pension Assistance",
            content: `We provide dedicated support to family members and beneficiaries in claiming pension benefits after the demise of a pensioner or employee.`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Gratuity Claim Assistance",
            content: `We assist employees and retirees in preparing and processing gratuity claims under the Payment of Gratuity Act and applicable organizational policies.\\nServices include:\\n• Gratuity Claim Form Preparation\\n• Eligibility Assessment\\n• Service Tenure Verification\\n• Gratuity Calculation Support\\n• Settlement Documentation\\n• Payment Acknowledgement Records\\n• Nomination Verification`,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Nominee & Legal Heir Claims",
            content: `In the event of an employee's demise, we assist nominees and legal heirs in securing eligible gratuity benefits.\\nServices include:\\n• Nominee Claim Documentation\\n• Legal Heir Documentation Support\\n• Death Claim Assistance\\n• Affidavit & Declaration Support\\n• Settlement Coordination & Documentation`,
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Benefits of Professional Assistance",
            content: `• Accurate Documentation\\n• Faster Processing\\n• Reduced Claim Rejection Risk\\n• Compliance Assurance\\n• End-to-End Support\\n• Assistance in Legacy Cases`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ]"""
pension_checklist = """["Aadhaar Card", "PAN Card", "UAN Number", "Bank Account Details", "Passport Size Photographs", "Service Records", "Form 10C / Form 10D", "Pension Payment Order (where applicable)", "Identity Proof (Gratuity)", "Employment Records (Gratuity)", "Salary Details (Gratuity)", "Gratuity Nomination Forms", "Service Certificate", "Retirement / Resignation Documents", "Death Certificate (for death claims)", "Legal Heir Documents (where applicable)"]"""
pension_faqs = """[
          { question: "Can you assist with delayed pension claims?", answer: "Yes. We assist in reviewing records, identifying documentation gaps, and preparing supporting documents required for claim processing." },
          { question: "Do you help with family pension claims?", answer: "Yes. We provide complete support for family pension documentation, nominee verification, and claim submission." },
          { question: "Can you assist with gratuity claims after retirement?", answer: "Absolutely. We assist in gratuity eligibility verification, calculation support, documentation, and claim processing." },
          { question: "Do you handle legacy or unresolved EPFO cases?", answer: "Yes. We provide assistance in complex cases involving service record discrepancies, pension corrections, and claim follow-up." }
        ]"""


# 4. Property sale, Gift & Transfer
prop_longDesc = "Secure Your Property. Protect Your Legacy. Ensure a Smooth Transfer of Ownership.\\nManaging property matters during retirement can often be complex and time-consuming. Whether you are planning to transfer property to your children, gift assets to family members, sell a property, or organize your estate for future generations, proper documentation and legal compliance are essential to safeguard your interests and avoid future disputes.\\nAt ConsultAvenuee, we provide dedicated Property Sale, Gift, Transfer & Succession Services for Senior Citizens, helping individuals and families manage property-related matters with confidence, clarity, and peace of mind."
prop_sections = """[
          {
            title: "Property Sale Services",
            content: `• Sale Deed Drafting & Documentation Support\\n• Property Transaction Assistance\\n• Registration Coordination`,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Property Gift & Family Transfer Services",
            content: `• Gift Deed Documentation\\n• Transfer of Property to Children and Family Members\\n• Family Settlement Arrangements\\n• Relinquishment & Release Deed Documentation`,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Benefits for Senior Citizens",
            content: `• Hassle-Free Property Transfers\\n• Smooth Transfer of Assets to Family Members\\n• Reduced Risk of Family Disputes\\n• Proper Succession and Inheritance Planning\\n• Legally Compliant Documentation\\n• Protection of Family Wealth and Property\\n• Peace of Mind for Senior Citizens and Their Families`,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Our Commitment",
            content: `We assist senior citizens in managing every stage of property ownership transition—from gifting and transferring property to family members, to succession planning and inheritance matters.`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          }
        ]"""
prop_checklist = """["Property Title Documents", "Previous Sale Deeds", "PAN Card & Aadhaar Card", "Identity & Address Proof", "Property Tax Receipts", "Encumbrance Certificate", "Society NOC (where applicable)", "Revenue Records and Mutation Extracts", "Death Certificate (for succession matters)", "Legal Heir Details", "Existing Will (if available)"]"""
prop_faqs = """[
          { question: "Can I transfer my property to my children during my lifetime?", answer: "Yes. Property can be transferred during your lifetime through various legal methods such as a Gift Deed, Sale Deed, Family Settlement, or other legally recognized transfer mechanisms, depending on your objectives and circumstances." },
          { question: "What is the difference between a Gift Deed and a Will?", answer: "A Gift Deed transfers ownership immediately during the lifetime of the owner, whereas a Will takes effect only after the death of the person making the Will. Both serve different estate planning objectives." },
          { question: "Is registration of a Gift Deed mandatory?", answer: "Yes. In most cases, a Gift Deed relating to immovable property must be properly executed and registered in accordance with applicable laws to be legally valid." },
          { question: "Can I gift property to my son, daughter, spouse, or other family members?", answer: "Yes. Property can generally be gifted to family members, including children, spouse, grandchildren, and other eligible relatives, subject to applicable legal requirements." },
          { question: "What is a Family Settlement?", answer: "A Family Settlement is an arrangement among family members to distribute or resolve ownership rights in family assets and properties, often helping avoid future disputes and litigation." },
          { question: "Can property be transferred without monetary consideration?", answer: "Yes. Transfers through Gift Deeds, Family Settlements, Relinquishment Deeds, or Release Deeds may not necessarily involve monetary consideration, depending on the nature of the transaction." },
          { question: "What happens to property if there is no Will?", answer: "If a person passes away without leaving a valid Will, the property is generally distributed among legal heirs in accordance with the applicable succession laws." },
          { question: "What precautions should senior citizens take before gifting or transferring property?", answer: "Before transferring property, it is advisable to:\\n• Verify ownership records\\n• Understand legal consequences\\n• Review tax implications\\n• Assess future financial needs\\n• Obtain professional advice\\n• Ensure proper documentation and registration" },
          { question: "Can jointly owned property be transferred?", answer: "Yes. However, the consent and participation of all co-owners may be required depending on the ownership structure and nature of the transaction." },
          { question: "Can ConsultAvenuee assist with end-to-end property transfer documentation?", answer: "Yes. We provide assistance with:\\n• Property Sale Documentation\\n• Gift Deeds\\n• Family Settlements\\n• Relinquishment & Release Deeds\\n• Property Transfer Documentation\\n• Succession & Inheritance Support\\n• Registration Coordination\\n• Legal Documentation Review" }
        ]"""


content = replace_service(content, "health-insurance-claims-support", health_longDesc, health_sections, health_checklist, health_faqs)
content = replace_service(content, "senior-income-tax-filing", tax_longDesc, tax_sections, tax_checklist, tax_faqs)
content = replace_service(content, "pension-gratuity-documentations", pension_longDesc, pension_sections, pension_checklist, pension_faqs)
content = replace_service(content, "property-sale-gift-transfer", prop_longDesc, prop_sections, prop_checklist, prop_faqs)

write_file('src/data/servicesData.ts', content)
print("Updated successfully")
