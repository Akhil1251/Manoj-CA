import re
import json

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

data = {
    "conferencing-senior-tax-counsels-litigation-support": {
        "sections": [
            {
                "title": "Conferencing with Senior Tax Counsels & Litigation Support",
                "content": """**Strategic Support for Complex Income Tax Matters**
Income tax disputes often involve complex legal and factual issues requiring specialized expertise and strategic guidance. At ConsultAvenuee, we assist taxpayers, businesses, professionals, and corporate entities by coordinating conferences with experienced Senior Tax Counsels, Advocates, and subject matter experts for matters relating to assessments, appeals, reassessments, penalties, and high-value tax disputes.

Our team works closely with clients and legal professionals to ensure that cases are properly evaluated, documented, and presented before the appropriate authorities and appellate forums."""
            },
            {
                "title": "Our Services Include",
                "content": """• Conferencing with Senior Tax Counsels
• Litigation Coordination Support"""
            },
            {
                "title": "Income Tax Matters Covered",
                "content": """• Scrutiny Assessments
• Reassessment Proceedings
• Faceless Assessments
• Penalty Proceedings
• TDS and Withholding Tax Matters
• Search and Survey Related Proceedings
• Income Tax Appeals
• Revision and Rectification Matters
• High-Value and Complex Tax Disputes"""
            }
        ],
        "faqs": []
    },
    "preparation-of-paper-books-case-records": {
        "sections": [
            {
                "title": "Preparation of Paper Books & Case Records",
                "content": """**Professional Documentation Support for Income Tax Proceedings**
Proper documentation plays a critical role in the successful handling of income tax disputes and appellate proceedings. Well-prepared paper books and case records help present facts, evidence, and legal submissions in a structured and professional manner before tax authorities and appellate forums.

At ConsultAvenuee, we assist in preparing comprehensive paper books and litigation records for income tax matters."""
            },
            {
                "title": "Our Assistance Includes",
                "content": """• Preparation of Paper Books for appellate proceedings
• Compilation and indexing of supporting documents
• Preparation of statement of facts and case summaries
• Chronology of events and transaction records
• Reconciliation of financial and tax records
• Compilation of judicial precedents and supporting references
• Preparation of written submissions and supporting documentation
• Organization of records for effective presentation before authorities"""
            },
            {
                "title": "Benefits of Professional Case Preparation",
                "content": """• Systematic presentation of facts and evidence
• Better coordination with tax counsels and advocates
• Improved readiness for hearings and appellate proceedings
• Efficient management of large volumes of records
• Stronger support for legal and factual arguments

Whether you are facing an assessment, appeal, penalty proceeding, or complex tax litigation, our team can assist in preparing comprehensive case records and coordinating with experienced tax counsels to support your matter effectively."""
            }
        ],
        "faqs": []
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
