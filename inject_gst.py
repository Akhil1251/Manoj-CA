import re
import json

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

data = {
    "gst-registration-returns": {
        "sections": [
            {
                "title": "Goods and Services Tax (GST) Return Filing",
                "content": """Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services across India. Every registered taxpayer under GST is required to file periodic GST returns containing details of sales, purchases, tax liability, and Input Tax Credit (ITC) claimed.

GST return filing is a critical compliance requirement that enables tax authorities to assess tax liability and monitor adherence to GST regulations.

At ConsultAvenuee, we provide end-to-end GST compliance services including GST registration, return filing, GST reconciliations, ITC verification, notice handling, annual return filing, and advisory support."""
            },
            {
                "title": "What is a GST Return?",
                "content": """A GST Return is a statement filed with the GST authorities containing details of:
• Outward supplies (sales)
• Inward supplies (purchases)
• Output GST liability
• Input Tax Credit (ITC) claimed
• Tax payments made
• Other prescribed information

GST returns are filed electronically through the GST Portal and form the basis for determining tax liability and eligibility for Input Tax Credit."""
            },
            {
                "title": "Benefits of GST Compliance",
                "content": """Proper GST compliance helps businesses:
• Claim eligible Input Tax Credit (ITC)
• Avoid penalties and late fees
• Improve business credibility
• Maintain smooth vendor and customer relationships
• Reduce the risk of notices and assessments
• Ensure uninterrupted business operations"""
            },
            {
                "title": "Types of GST Returns",
                "content": """Different GST return forms are prescribed depending upon the category of taxpayer.

**GST Return | Applicable To | Frequency**
GSTR-1 | Details of Outward Supplies | Monthly / Quarterly
GSTR-3B | Summary Return and Tax Payment | Monthly / Quarterly
CMP-08 | Composition Scheme Taxpayers | Quarterly
GSTR-4 | Composition Taxpayers | Annually
GSTR-5 | Non-Resident Taxable Persons | Monthly
GSTR-5A | OIDAR Service Providers | Monthly
GSTR-6 | Input Service Distributors (ISD) | Monthly
GSTR-7 | GST TDS Deductors | Monthly
GSTR-8 | E-Commerce Operators Collecting TCS | Monthly
GSTR-9 | Annual Return | Annually
GSTR-9C | Reconciliation Statement (where applicable) | Annually
GSTR-10 | Final Return after Cancellation of Registration | One-Time
GSTR-11 | UIN Holders (Embassies, UN Bodies, etc.) | As Applicable

**Common GST Returns Filed by Businesses**
The following GST returns are most commonly filed:
• GSTR-1 – Details of outward supplies
• GSTR-3B – Monthly/Quarterly summary return
• CMP-08 – Composition Scheme tax payment statement
• GSTR-4 – Annual return for composition taxpayers
• GSTR-9 – Annual GST return
• GSTR-9C – Reconciliation statement, where applicable
• GSTR-10 – Final return upon cancellation of registration"""
            },
            {
                "title": "GST Return Filing Process",
                "content": """**Step 1:** Collection of Sales Data
**Step 2:** Reconciliation of Purchases
**Step 3:** Tax Liability Computation
**Step 4:** Filing of GST Returns
**Step 5:** Payment of GST Liability
**Step 6:** Annual Compliance"""
            },
            {
                "title": "Understanding CGST, SGST and IGST",
                "content": """**Central Goods and Services Tax (CGST)**
CGST is levied by the Central Government on intra-state supplies of goods and services.

**State Goods and Services Tax (SGST)**
SGST is levied by the respective State Government on intra-state supplies.
Revenue collected under SGST is retained by the concerned State Government.

**Integrated Goods and Services Tax (IGST)**
IGST applies to inter-state supplies of goods and services and facilitates seamless flow of Input Tax Credit across states."""
            },
            {
                "title": "HSN Code and SAC Code under GST",
                "content": """**What is HSN Code?**
HSN (Harmonized System of Nomenclature) is an internationally accepted system developed by the World Customs Organization (WCO) for classification of goods.
HSN codes help businesses:
• Classify goods uniformly
• Determine applicable GST rates
• Simplify invoicing
• Improve GST compliance
• Facilitate international trade
HSN code requirements are prescribed under GST laws and may vary based on turnover, nature of supplies, and applicable government notifications.

**What is SAC Code?**
SAC (Services Accounting Code) is used for classification of services under GST.
The SAC system helps in:
• Accurate invoicing
• Proper tax classification
• Determination of GST rates
• Correct GST return filing
• Regulatory compliance"""
            },
            {
                "title": "Common GST Rates on Services",
                "content": """Services are generally taxable at:
• 0%
• 5%
• 12%
• 18%
• 28%
Where no specific rate is prescribed and the service is not exempt, GST is generally levied at 18%."""
            },
            {
                "title": "Consequences of Non-Compliance",
                "content": """Failure to comply with GST provisions may result in:
• Late filing fees
• Interest on delayed tax payment
• Restriction or denial of Input Tax Credit
• GST notices and departmental scrutiny
• Penalties under GST law
• Suspension or cancellation of GST registration in serious cases

Timely filing and reconciliation help businesses avoid these consequences."""
            },
            {
                "title": "Documents Required for GST Return Filing",
                "content": """• GST Registration Certificate
• GSTIN Details
• Sales Register
• Purchase Register
• Tax Invoices
• Debit Notes and Credit Notes
• E-Way Bill Details (if applicable)
• Input Tax Credit Records
• Previous GST Returns
• Bank Statements (if required)"""
            }
        ],
        "faqs": [
            {"question": "GST Registration & Returns FAQs", "answer": "", "isHeading": True},
            {"question": "Is GST return filing mandatory?", "answer": "Yes. Every registered taxpayer is required to file applicable GST returns within the prescribed due dates, even in certain cases where there are no transactions."},
            {"question": "What happens if GST returns are filed late?", "answer": "Late filing may attract late fees, interest, and compliance notices from the GST Department."},
            {"question": "Can GST returns be revised?", "answer": "GST returns generally cannot be revised. Errors are corrected through amendments in subsequent returns, subject to GST provisions."},
            {"question": "Can Input Tax Credit be claimed without supplier compliance?", "answer": "Input Tax Credit is subject to fulfilment of prescribed conditions under GST law, including reporting by suppliers."},
            {"question": "Do businesses with no transactions need to file GST returns?", "answer": "Yes. Registered taxpayers may be required to file Nil Returns where no business transactions have occurred during the tax period."},
            {"question": "How can ConsultAvenuee help?", "answer": "Our GST experts assist with registration, return filing, ITC reconciliation, annual compliance, notice handling, GST refunds, and end-to-end GST advisory services."}
        ]
    }
}

content = read_file('src/data/servicesData.ts')

for slug, details in data.items():
    sections_str = json.dumps(details['sections'], indent=16)
    faqs_str = json.dumps(details['faqs'], indent=16)
    
    if "sections:" in content.split(f'slug: "{slug}"')[1].split('}')[0]:
        block_pattern = r'({ slug: "' + slug + r'".*?sections:\s*\[).*?(\],\s*faqs:\s*\[).*?(\]\s*})'
        def replacer(match):
            return match.group(1) + sections_str.strip('[]') + match.group(2) + faqs_str.strip('[]') + match.group(3)
        content = re.sub(block_pattern, replacer, content, flags=re.DOTALL)
    else:
        pattern = r'({ slug: "' + slug + r'", title: "([^"]+)" })'
        def replacer2(match):
            return f'{{ slug: "{slug}", title: "{match.group(2)}", sections: {sections_str}, faqs: {faqs_str} }}'
        content = re.sub(pattern, replacer2, content)

write_file('src/data/servicesData.ts', content)
print("Done")
