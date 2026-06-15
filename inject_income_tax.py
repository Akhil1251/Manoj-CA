import re
import json

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

data = {
    "income-tax-returns": {
        "sections": [
            {
                "title": "Income Tax Return (ITR) Filing Services",
                "content": """Filing an Income Tax Return (ITR) is an important compliance requirement under the Income-tax Act, 1961. An Income Tax Return is a statement of income earned, deductions claimed, taxes paid, and tax liability for a financial year.

Timely and accurate filing of ITR not only ensures compliance with tax laws but also helps taxpayers claim refunds, carry forward losses, obtain loans, apply for visas, and maintain proper financial records.

At ConsultAvenuee, we provide comprehensive Income Tax Return Filing Services for salaried individuals, professionals, freelancers, business owners, senior citizens, partnership firms, LLPs, companies, trusts, and Non-Resident Indians (NRIs)."""
            },
            {
                "title": "What is an Income Tax Return (ITR)?",
                "content": """An Income Tax Return (ITR) is a prescribed form through which taxpayers report:
• Income earned during the financial year
• Tax deductions and exemptions claimed
• Taxes paid through TDS, advance tax, and self-assessment tax
• Capital gains and other income sources
• Refunds due, if any

The return is filed electronically with the Income Tax Department through the Income Tax Portal."""
            },
            {
                "title": "Who is Required to File an Income Tax Return?",
                "content": """An ITR may be required to be filed by:
• Individuals whose income exceeds the basic exemption limit.
• Businesses and professionals.
• Companies and LLPs.
• Partnership firms.
• Trusts and societies required to file returns.
• Individuals meeting specified conditions under the Income-tax Act.
• Persons claiming refunds.
• Taxpayers wishing to carry forward losses.
• Non-Resident Indians (NRIs) having taxable income in India.

Even where filing is not mandatory, it is often advisable for maintaining financial records and establishing income proof."""
            },
            {
                "title": "Benefits of Filing Income Tax Returns",
                "content": """**Claim Income Tax Refunds**
Taxpayers can claim refunds of excess:
• TDS
• Advance Tax
• Self-Assessment Tax
• Other taxes paid

**Carry Forward Losses**
Timely filing enables eligible taxpayers to carry forward:
• Business losses
• Capital losses
• Certain other eligible losses

**Avoid Penalties and Notices**
Proper and timely filing reduces the risk of:
• Late filing fees
• Interest liabilities
• Compliance notices
• Scrutiny proceedings

**Financial Documentation**
Income Tax Returns serve as recognized proof of income for:
• Government tenders
• Financial transactions
• Investments
• Contract applications

**Easier Loan Approvals**
Most banks and financial institutions require the last 2–3 years' ITRs for:
• Home Loans
• Business Loans
• Personal Loans
• Vehicle Loans
• Education Loans

**Visa Processing**
Many embassies and immigration authorities require ITR acknowledgements as proof of income and financial stability."""
            },
            {
                "title": "Documents Required for Income Tax Return Filing",
                "content": """**Basic Documents**
• PAN Card
• Aadhaar Card
• Mobile Number linked with Aadhaar
• Bank Account Details
• Previous Year's ITR (if available)

**For Salaried Individuals**
• Form 16
• Salary Slips
• Form 26AS
• Annual Information Statement (AIS)
• Taxpayer Information Summary (TIS)

**For Interest Income**
• Bank Statements
• Fixed Deposit Interest Certificates
• Interest Certificates

**For Capital Gains**
• Share Trading Statements
• Mutual Fund Statements
• Property Purchase and Sale Documents
• Capital Gain Statements

**For Business and Professional Income**
• Profit & Loss Account
• Balance Sheet
• Books of Accounts
• GST Returns
• Bank Statements

**For Claiming Deductions**
*Section 80C*
• LIC Premium Receipts
• PPF Contribution Proof
• ELSS Investments
• NSC Certificates
• Tuition Fee Receipts
• Home Loan Principal Repayment Certificate

*Section 80D*
• Health Insurance Premium Receipts

*Section 80E*
• Education Loan Interest Certificate

*Home Loan*
• Interest Certificate issued by the lender"""
            },
            {
                "title": "Important Pre-Filing Requirements",
                "content": """**PAN-Aadhaar Linking**
PAN should be linked with Aadhaar in accordance with applicable Income Tax provisions.

**Verification of Tax Information**
Before filing, taxpayers should reconcile:
• Form 26AS
• AIS (Annual Information Statement)
• TIS (Taxpayer Information Summary)
This helps prevent mismatches and future notices.

**Selection of Correct ITR Form**
Choosing the appropriate ITR form ensures proper reporting of income and faster processing."""
            },
            {
                "title": "Income Tax Refund",
                "content": """**What is an Income Tax Refund?**
An Income Tax Refund arises when taxes paid exceed the actual tax liability of the taxpayer.
The Income Tax Department processes the return and credits the refund directly to the taxpayer's validated bank account.

**Situations Where Refund May Arise**
• Excess TDS deducted by employer.
• Excess TDS deducted by banks.
• Excess Advance Tax paid.
• Excess Self-Assessment Tax paid.
• Tax-saving investments not considered during salary processing.
• Relief available under Double Taxation Avoidance Agreements (DTAA).

**Process for Claiming Refund**
1. File the Income Tax Return.
2. Verify the return electronically.
3. Return is processed by CPC.
4. Refund is credited directly to the registered bank account."""
            },
            {
                "title": "Consequences of Late Filing",
                "content": """**Late Filing Fee – Section 234F**
A late filing fee may be applicable if the return is filed after the prescribed due date, subject to the provisions of the Income-tax Act.

**Interest Liability**
Interest may be levied under:
• Section 234A – Delay in filing return.
• Section 234B – Default in payment of advance tax.
• Section 234C – Deferment of advance tax instalments.

**Other Consequences**
• Delay in receiving tax refunds.
• Loss of certain carry-forward benefits.
• Increased likelihood of compliance notices."""
            }
        ],
        "faqs": [
            {"question": "Income Tax Returns FAQs", "answer": "", "isHeading": True},
            {"question": "Is filing an ITR mandatory if my income is below the taxable limit?", "answer": "In certain specified situations, filing may still be mandatory. Even otherwise, filing is advisable for maintaining financial records and claiming refunds."},
            {"question": "Can I revise my return after filing?", "answer": "Yes. A revised return may be filed within the time permitted under the Income-tax Act if any omission or error is discovered."},
            {"question": "How long does it take to receive an income tax refund?", "answer": "Refund timelines depend upon processing by the Income Tax Department and successful verification of the return."},
            {"question": "Can I claim a refund for excess TDS deducted?", "answer": "Yes. Excess TDS can be claimed through the filing of an Income Tax Return."},
            {"question": "What happens if I do not file my return on time?", "answer": "Late filing may result in fees, interest, delay in refunds, and loss of certain benefits available under the Income-tax Act."}
        ]
    },
    "tax-audit": {
        "sections": [
            {
                "title": "Tax Audit Services",
                "content": """**Tax Audit under the Income-tax Act, 1961**
A Tax Audit is an examination of the books of accounts of a taxpayer conducted by a Chartered Accountant as prescribed under Section 44AB of the Income-tax Act, 1961.

The primary objective of a Tax Audit is to ensure that taxpayers maintain proper books of accounts, accurately report income, and comply with applicable tax provisions. The audit helps the Income Tax Department verify the correctness of income, deductions, and tax liability disclosed in the Income Tax Return.

At ConsultAvenuee, we provide comprehensive Tax Audit Services, including audit planning, verification of books of accounts, preparation of audit reports, compliance review, and filing of audit reports with the Income Tax Department."""
            },
            {
                "title": "Who is Required to Get a Tax Audit Conducted?",
                "content": """A Tax Audit may be applicable to the following categories of taxpayers, subject to the conditions prescribed under the Income-tax Act:

**Business Entities**
Persons carrying on business may be required to undergo a Tax Audit where turnover, gross receipts, or other prescribed conditions exceed the limits specified under Section 44AB.

**Professionals**
Persons carrying on a profession may be required to obtain a Tax Audit where gross professional receipts exceed the prescribed threshold.

**Presumptive Taxation Cases**
Tax Audit may also be applicable in certain situations where taxpayers opt out of presumptive taxation schemes or declare income lower than the prescribed limits while meeting specified conditions under the Income-tax Act.

Since audit applicability depends upon various factors, professional evaluation is recommended to determine compliance requirements."""
            },
            {
                "title": "Documents Required for Tax Audit",
                "content": """The documents required generally include:
• PAN Card
• Aadhaar Details (where applicable)
• Books of Accounts
• Trial Balance
• Profit & Loss Account
• Balance Sheet
• Bank Statements
• GST Returns
• TDS Returns
• Fixed Asset Register
• Loan Statements
• Details of Related Party Transactions
• Previous Year's Tax Audit Report
• Income Tax Return Copies

Additional documents may be required depending on the nature of business or profession."""
            },
            {
                "title": "Tax Audit Report",
                "content": """The Tax Audit Report is furnished electronically by a Chartered Accountant in the prescribed forms:

**Audit Form | Applicability**
Form 3CA | Where accounts are already audited under another law
Form 3CB | Where accounts are not audited under any other law
Form 3CD | Statement of prescribed particulars required under Section 44AB

The audit report is uploaded electronically on the Income Tax Portal."""
            },
            {
                "title": "Due Date for Tax Audit",
                "content": """The due date for furnishing the Tax Audit Report is generally one month prior to the due date for filing the Income Tax Return applicable to audit cases.
The due date may be extended by the Government through notifications issued from time to time.
Taxpayers should ensure timely completion of audits to avoid penalties and compliance issues."""
            },
            {
                "title": "Penalty for Failure to Conduct Tax Audit",
                "content": """**Section 271B**
If a taxpayer liable for Tax Audit fails to get the accounts audited or fails to furnish the Tax Audit Report within the prescribed time, the Assessing Officer may levy a penalty.

The penalty may be:
• 0.5% of total sales, turnover, or gross receipts, or
• ₹1,50,000
whichever is lower."""
            }
        ],
        "faqs": [
            {"question": "Tax Audit FAQs", "answer": "", "isHeading": True},
            {"question": "What is the purpose of a Tax Audit?", "answer": "A Tax Audit ensures that books of accounts and tax records are maintained correctly and comply with the provisions of the Income-tax Act."},
            {"question": "Is Tax Audit mandatory for every business?", "answer": "No. Tax Audit is applicable only when prescribed conditions under Section 44AB are satisfied."},
            {"question": "Who can conduct a Tax Audit?", "answer": "Only a practicing Chartered Accountant can conduct and certify a Tax Audit under the Income-tax Act."},
            {"question": "Can the Tax Audit Report be revised?", "answer": "Yes. In certain circumstances, a revised Tax Audit Report may be issued where required."},
            {"question": "What happens if the Tax Audit Report is not filed on time?", "answer": "Delay may attract penalty under Section 271B and may lead to further compliance issues."}
        ]
    },
    "tds-tcs-returns": {
        "sections": [
            {
                "title": "TDS Return Filing Services",
                "content": """**Tax Deducted at Source (TDS) Return Filing**
Tax Deducted at Source (TDS) is one of the most effective mechanisms adopted by the Government of India to ensure timely collection of taxes. Under the Income-tax Act, specified persons are required to deduct tax at source while making certain payments and deposit the same with the Government within the prescribed timelines.

Businesses, companies, LLPs, partnership firms, professionals, government departments, trusts, societies, and other deductors are required to comply with TDS provisions and file periodic TDS returns reporting the details of tax deducted and deposited.

At ConsultAvenuee, we provide comprehensive TDS compliance services including TAN registration, TDS computation, deposit of TDS, quarterly return filing, correction returns, TDS reconciliation, and refund assistance."""
            },
            {
                "title": "What is TDS?",
                "content": """Tax Deducted at Source (TDS) is a mechanism under which the payer (deductor) deducts tax while making specified payments to the recipient (deductee) and deposits the same with the Income Tax Department on behalf of the recipient.
The deductee can claim credit for the TDS deducted while filing the Income Tax Return (ITR).

**Objectives of TDS**
• Ensures regular collection of taxes.
• Minimizes tax evasion.
• Tracks high-value financial transactions.
• Distributes tax payments throughout the financial year.
• Improves tax compliance and transparency."""
            },
            {
                "title": "Payments Covered Under TDS",
                "content": """TDS is applicable on various types of payments, including:
• Salary
• Interest on Fixed Deposits
• Interest on Securities
• Rent
• Professional Fees
• Technical Service Fees
• Commission and Brokerage
• Contractor and Sub-Contractor Payments
• Dividend Payments
• Purchase of Immovable Property
• Insurance Commission
• Winning from Lottery or Game Shows
• Winning from Horse Races
• E-commerce Transactions
• Certain Payments to Non-Residents

The applicable TDS rate varies depending upon the nature of payment and the relevant provisions of the Income-tax Act."""
            },
            {
                "title": "Common TDS Sections",
                "content": """**Section | Nature of Payment**
192 | Salary
194A | Interest Other Than Securities
194C | Contractor Payments
194H | Commission and Brokerage
194I | Rent
194J | Professional and Technical Fees
194Q | Purchase of Goods
195 | Payments to Non-Residents"""
            },
            {
                "title": "What is a TDS Return?",
                "content": """A TDS Return is a quarterly statement filed with the Income Tax Department containing details of:
• Tax deducted at source
• Tax deposited with the Government
• PAN of deductees
• TAN of deductor
• Challan details
• Nature of payment
• Amount paid and tax deducted

Filing of TDS returns is mandatory for all eligible deductors."""
            },
            {
                "title": "Who is Required to File TDS Returns?",
                "content": """The following persons and entities are required to file TDS returns electronically:
• Central Government Departments
• State Government Departments
• Companies
• Partnership Firms
• LLPs
• Trusts and Societies
• Individuals and HUFs liable for tax audit
• Any person required to deduct TDS under the Income-tax Act"""
            },
            {
                "title": "Due Dates for TDS",
                "content": """**Monthly TDS Payment Due Dates**
• April to February: 7th of the Following Month
• March: 30th April
Failure to deposit TDS within the prescribed due dates attracts interest and penalties.

**Due Dates for Filing TDS Returns**
• Quarter Ending 30 June: 31 July
• Quarter Ending 30 September: 31 October
• Quarter Ending 31 December: 31 January
• Quarter Ending 31 March: 31 May

Timely filing of TDS returns helps avoid late filing fees, penalties, and notices from the Income Tax Department."""
            },
            {
                "title": "TDS Return Forms and Certificates",
                "content": """**TDS Return Forms**
• Form 24Q: TDS on Salary Payments
• Form 26Q: TDS on Payments Other Than Salary to Residents
• Form 27Q: TDS on Payments to Non-Residents
• Form 27EQ: Tax Collection at Source (TCS) Return

**TDS Certificates**
After filing TDS returns, deductors are required to issue TDS certificates:
• Form 16: TDS on Salary
• Form 16A: TDS on Non-Salary Payments
• Form 16B: TDS on Purchase of Immovable Property
• Form 16C: TDS on Rent under Section 194IB
• Form 16D: TDS under Section 194M"""
            },
            {
                "title": "Interest and Penalty for TDS Defaults",
                "content": """**Interest for Non-Deduction or Short Deduction**
If TDS is not deducted or is deducted at a lower rate than prescribed:
• Interest at 1% per month or part thereof.
• Calculated from the date on which tax was deductible to the actual date of deduction.

**Interest for Late Deposit of TDS**
If TDS is deducted but deposited after the due date:
• Interest at 1.5% per month or part thereof.
• Calculated from the date of deduction to the actual date of deposit.

**Late Filing Fee**
Under Section 234E:
• ₹200 per day for delay in filing TDS/TCS returns.
• Maximum fee cannot exceed the amount of TDS/TCS deductible or collectible.

**Penalty for Non-Filing or Incorrect Filing**
Under Section 271H:
• Penalty ranging from ₹10,000 to ₹1,00,000 may be imposed for failure to file returns within the prescribed time or furnishing incorrect information."""
            },
            {
                "title": "TDS Refund",
                "content": """**What is a TDS Refund?**
A TDS refund arises when the tax deducted exceeds the actual tax liability of the taxpayer.

**How to Claim a TDS Refund?**
In most cases, there is no separate application for claiming a TDS refund. The refund can be claimed while filing the Income Tax Return by:
1. Reporting total taxable income.
2. Reporting TDS credits appearing in Form 26AS and AIS.
3. Computing actual tax liability.
4. Claiming excess tax paid as a refund.

**How to Avoid Excess TDS Deduction?**
• Submission of Form 15G (for resident individuals).
• Submission of Form 15H (for senior citizens).
• Furnishing PAN to ensure deduction at normal rates."""
            }
        ],
        "faqs": [
            {"question": "TDS/TCS Returns FAQs", "answer": "", "isHeading": True},
            {"question": "Is TDS return filing mandatory?", "answer": "Yes. Every person required to deduct TDS under the Income-tax Act must file quarterly TDS returns within the prescribed due dates."},
            {"question": "What happens if TDS return is filed late?", "answer": "Late filing attracts a fee of ₹200 per day under Section 234E and may also result in penalties under Section 271H."},
            {"question": "Can a TDS return be revised?", "answer": "Yes. Correction returns can be filed to rectify errors relating to PAN, challan details, deductee information, and other particulars."},
            {"question": "How can I check my TDS credit?", "answer": "TDS credits can be verified through Form 26AS and the Annual Information Statement (AIS) available on the Income Tax Portal."},
            {"question": "Can excess TDS deducted be claimed as a refund?", "answer": "Yes. Excess TDS can be claimed as a refund while filing the Income Tax Return."}
        ]
    },
    "registration-under-12a-80g": {
        "sections": [
            {
                "title": "12A & 80G Registration Services",
                "content": """**Tax Exemption & Donor Benefit Registration for Trusts, Societies, NGOs and Section 8 Companies**
Strengthen Your Organization's Credibility and Fundraising Potential

Tax exemption and donor benefit registrations are among the most important registrations for charitable and non-profit organizations. These registrations help eligible organizations avail income tax benefits while enabling donors to claim eligible tax benefits on donations made to the organization, subject to applicable laws and regulations.

At ConsultAvenuee, we provide end-to-end assistance for obtaining 12A & 80G Registration, including eligibility assessment, documentation support, application filing, regulatory representation, and post-registration compliance assistance."""
            },
            {
                "title": "Why are 12A & 80G Registrations Important?",
                "content": """Charitable and non-profit organizations rely on donations, grants, sponsorships, CSR contributions, and community support to achieve their objectives. Appropriate registrations help establish regulatory recognition, strengthen governance, and enhance stakeholder confidence.

**Benefits for Charitable Organizations**
• Tax benefits on eligible income
• Greater recognition among donors and stakeholders
• Improved access to grants and funding opportunities
• Enhanced governance and compliance standards
• Increased transparency and accountability
• Better prospects for corporate and institutional support
• Improved credibility with government agencies and funding bodies

**Benefits for Donors**
Donors often prefer contributing to organizations possessing valid donor benefit registrations because such registrations may provide:
• Tax benefits on eligible donations
• Greater confidence regarding the utilization of funds
• Enhanced transparency and accountability
• Improved confidence in governance and financial management"""
            },
            {
                "title": "Who Can Apply?",
                "content": """The registration framework is generally available to eligible charitable and non-profit organizations, including:
• Public Charitable Trusts
• Registered Societies
• Section 8 Companies
• Educational Institutions
• Religious and Charitable Organizations
• Welfare Associations
• Foundations
• Social Development Organizations
• Healthcare and Community Service Organizations
• Environmental and Cultural Organizations
• Other Eligible Non-Profit Entities

Eligibility depends upon the nature of activities, organizational structure, objectives, and compliance with applicable regulations."""
            },
            {
                "title": "Documents Generally Required",
                "content": """**Organizational Documents**
• Registration Certificate
• Trust Deed, Memorandum & Articles, Society Bye-Laws, or Governing Documents
• PAN Card of the Organization
• Registered Office Address Proof
• Utility Bills or Occupancy Documents
• Bank Account Details

**Management Details**
• PAN and Aadhaar of Trustees, Directors, Members, or Office Bearers
• Identity and Address Proof of Key Persons
• Governing Body Details
• Contact Details of Authorized Representatives

**Financial Information**
• Financial Statements (where available)
• Income & Expenditure Statements
• Balance Sheet
• Activity Reports
• Details of Charitable and Social Activities Undertaken
• Details of Donations, Grants, and Contributions Received

**Additional Information**
• Existing registrations and approvals, if any
• NGO Darpan Registration details, if applicable
• Details of grants, donations, or funding received
• Any other documents required by the authorities"""
            },
            {
                "title": "Registration Process",
                "content": """**Step 1:** Eligibility Assessment
**Step 2:** Documentation Review
**Step 3:** Application Preparation
**Step 4:** Online Submission
**Step 5:** Regulatory Review
**Step 6:** Registration Approval"""
            },
            {
                "title": "Build a Strong Foundation for Your Non-Profit Organization",
                "content": """Whether you are establishing a new charitable organization or strengthening the compliance framework of an existing entity, ConsultAvenuee provides professional guidance, documentation support, registration assistance, and ongoing compliance services to help your organization operate with transparency, credibility, and confidence.

**Our Support Covers:**
• NGO Registration
• Trust Registration
• Society Registration
• Section 8 Company Incorporation
• NGO Darpan Registration
• 12A Registration
• 80G Registration
• CSR Compliance Advisory
• NGO Accounting & Bookkeeping
• Audit & Compliance Support
• Governance Advisory Services"""
            }
        ],
        "faqs": [
            {"question": "12A & 80G Registration FAQs", "answer": "", "isHeading": True},
            {"question": "Can a newly established organization apply for registration?", "answer": "Yes. Newly formed charitable and non-profit organizations may apply, subject to meeting the prescribed eligibility conditions."},
            {"question": "Can an organization obtain both registrations simultaneously?", "answer": "In many cases, organizations seek both registrations together to strengthen compliance, fundraising capabilities, and donor confidence."},
            {"question": "Are these registrations useful for fundraising?", "answer": "Yes. Appropriate registrations often enhance donor confidence and improve fundraising opportunities."},
            {"question": "What documents are generally required?", "answer": "Requirements vary depending upon the legal structure, activities, compliance status, and operational history of the organization."},
            {"question": "Does registration eliminate all compliance obligations?", "answer": "No. Organizations must continue to comply with applicable accounting, reporting, governance, and regulatory requirements after registration."},
            {"question": "Can ConsultAvenuee assist with post-registration compliance?", "answer": "Yes. We provide ongoing support for accounting, compliance management, filing requirements, governance advisory, and regulatory assistance."}
        ]
    },
    "pan-tan-applications": {
        "sections": [
            {
                "title": "PAN & TAN Registration Services",
                "content": """**Simplify Your Tax Registrations with ConsultAvenuee**
Whether you are an individual, startup, business owner, professional, NGO, trust, society, LLP, or company, ConsultAvenuee provides reliable PAN and TAN registration services along with ongoing compliance support to help you meet your tax obligations efficiently and confidently.

PAN and TAN are among the most important tax registrations under the Indian taxation system. These registrations serve as unique identification numbers for various tax-related transactions and statutory compliances."""
            },
            {
                "title": "What is PAN?",
                "content": """Permanent Account Number (PAN) is a unique identification number issued by the Income Tax Department. It serves as a primary tax identification number for taxpayers and is used for various financial, taxation, and regulatory purposes.

PAN helps authorities track financial transactions and ensures proper tax compliance.

**Benefits of PAN**
PAN is commonly required for:
• Filing Income Tax Returns
• Opening Bank Accounts
• Financial and Investment Transactions
• Property Transactions
• Business Registrations
• Loan Applications
• Tax Deduction and Tax Collection Compliance
• Regulatory and Government Filings"""
            },
            {
                "title": "Who Requires PAN?",
                "content": """PAN may be required by:
• Individuals and Salaried Employees
• Professionals and Consultants
• Proprietorship Businesses
• Partnership Firms and LLPs
• Private and Public Limited Companies
• Trusts, Societies, Section 8 Companies, NGOs
• Foreign Entities carrying out specified transactions in India
• Other persons required under applicable tax laws"""
            },
            {
                "title": "What is TAN?",
                "content": """Tax Deduction and Collection Account Number (TAN) is a unique identification number required by persons responsible for deducting or collecting tax under applicable tax laws.

**Benefits of TAN**
TAN facilitates:
• Tax Deduction and Collection Compliance
• Filing of TDS and TCS Returns
• Issuance of Tax Certificates
• Statutory Reporting Requirements
• Regulatory Compliance"""
            },
            {
                "title": "Who Requires TAN?",
                "content": """TAN may be required by:
• Companies, LLPs, Partnership Firms
• Proprietorship Businesses
• Trusts, Societies, NGOs
• Government Departments
• Educational Institutions
• Employers deducting tax from salaries
• Persons required to deduct or collect tax under applicable laws"""
            },
            {
                "title": "Documents Generally Required",
                "content": """**For PAN Application:**
*Individuals:* Identity Proof, Address Proof, DOB Proof, Passport Size Photo
*Business Entities / NGOs:* Registration Certificate, Constitutional Documents, Address Proof, Authorized Signatory Details, Identity & Address Proof of Key Persons

**For TAN Application:**
*Business Entities / NGOs:* PAN of the Applicant, Registration Documents, Address Proof, Authorized Representative Details"""
            },
            {
                "title": "PAN & TAN Registration Process",
                "content": """**Step 1:** Eligibility Assessment
**Step 2:** Documentation Review
**Step 3:** Application Preparation
**Step 4:** Verification Process
**Step 5:** Allotment"""
            }
        ],
        "faqs": [
            {"question": "PAN & TAN Applications FAQs", "answer": "", "isHeading": True},
            {"question": "Is PAN mandatory for all businesses?", "answer": "Most business entities require PAN for taxation, banking, and regulatory purposes, subject to applicable laws."},
            {"question": "Can an organization obtain PAN and TAN simultaneously?", "answer": "Yes. Depending on the nature of activities and compliance requirements, organizations may apply for both registrations."},
            {"question": "Is TAN required by every business?", "answer": "TAN is generally required by persons responsible for deducting or collecting tax under applicable tax laws."},
            {"question": "Can PAN or TAN details be corrected later?", "answer": "Yes. Correction and update facilities are available for eligible changes in registration details."},
            {"question": "Can ConsultAvenuee assist with PAN and TAN registrations for NGOs and trusts?", "answer": "Yes. We provide complete registration and compliance support for NGOs, Trusts, Societies, Section 8 Companies, LLPs, Firms, and Companies."}
        ]
    },
    "tax-planning-advisory": {
        "sections": [
            {
                "title": "Tax Planning & Advisory Services",
                "content": """**Make Informed Tax Decisions with Confidence**
Whether you are an individual taxpayer, startup, business owner, investor, NGO, or corporate entity, ConsultAvenuee provides strategic tax planning and advisory services designed to help you achieve your financial objectives while maintaining full compliance with applicable tax and regulatory requirements.

**Strategic Tax Planning for Businesses, Professionals & Individuals**
Effective tax planning is an essential component of sound financial management. A well-structured tax strategy helps optimize tax efficiency, improve cash flow, support business growth, and ensure compliance with applicable tax laws and regulations.

Our objective is to help clients make informed financial decisions while maintaining full regulatory compliance."""
            },
            {
                "title": "Our Tax Planning & Advisory Services",
                "content": """• Direct Tax Advisory
• Corporate Tax Advisory
• GST Advisory Services
• Tax Compliance Support
• Startup & Business Advisory"""
            },
            {
                "title": "Benefits of Professional Tax Planning",
                "content": """Professional tax planning can help:
✔ Improve tax efficiency within the framework of applicable laws
✔ Optimize available deductions, exemptions, and tax benefits
✔ Improve cash flow management
✔ Strengthen financial planning and decision-making
✔ Reduce compliance risks and regulatory exposure
✔ Support long-term business growth and wealth creation
✔ Enhance financial transparency and governance
✔ Facilitate better business and investment decisions"""
            },
            {
                "title": "Who Can Benefit from Tax Planning Services?",
                "content": """Our services are suitable for:
• Salaried Individuals
• Professionals and Consultants
• Business Owners
• Startups and Entrepreneurs
• Partnership Firms
• LLPs
• Private Limited Companies
• Public Limited Companies
• Trusts and Societies
• NGOs and Section 8 Companies
• Investors
• Non-Resident Indians (NRIs)
• High-Net-Worth Individuals (HNIs)"""
            }
        ],
        "faqs": [
            {"question": "Tax Planning & Advisory FAQs", "answer": "", "isHeading": True},
            {"question": "What is Tax Planning?", "answer": "Tax planning is the process of organizing financial affairs in a lawful and efficient manner to optimize tax outcomes while complying with applicable laws and regulations."},
            {"question": "Is Tax Planning Legal?", "answer": "Yes. Tax planning is a legitimate and accepted practice when carried out within the framework of applicable tax laws."},
            {"question": "Who should opt for Tax Planning Services?", "answer": "Individuals, professionals, business owners, startups, LLPs, companies, trusts, NGOs, investors, and NRIs can benefit from professional tax planning."},
            {"question": "How often should Tax Planning be reviewed?", "answer": "Tax planning should be reviewed periodically throughout the year and whenever significant financial or business transactions occur."},
            {"question": "Can Tax Planning help growing businesses?", "answer": "Yes. Effective tax planning can support business expansion, investment decisions, cash flow management, and long-term financial efficiency."},
            {"question": "Do you provide advisory for different tax regimes and structures?", "answer": "Yes. We evaluate available options and provide recommendations based on the client's specific financial and business circumstances."}
        ]
    }
}

content = read_file('src/data/servicesData.ts')

for slug, details in data.items():
    sections_str = json.dumps(details['sections'], indent=16)
    faqs_str = json.dumps(details['faqs'], indent=16)
    
    # regex to match: { slug: "slug", title: "Title" }
    # and replace with: { slug: "slug", title: "Title", sections: [...], faqs: [...] }
    # If sections already exists, we will replace the block instead. Let's make it robust:
    
    if "sections:" in content.split(f'slug: "{slug}"')[1].split('}')[0]:
        # already has sections, replace it
        block_pattern = r'({ slug: "' + slug + r'".*?sections:\s*\[).*?(\],\s*faqs:\s*\[).*?(\]\s*})'
        def replacer(match):
            return match.group(1) + sections_str.strip('[]') + match.group(2) + faqs_str.strip('[]') + match.group(3)
        content = re.sub(block_pattern, replacer, content, flags=re.DOTALL)
    else:
        # just replace the closing brace of the specific item
        # wait, the item looks like: { slug: "income-tax-returns", title: "Income Tax Returns" }
        pattern = r'({ slug: "' + slug + r'", title: "([^"]+)" })'
        def replacer2(match):
            return f'{{ slug: "{slug}", title: "{match.group(2)}", sections: {sections_str}, faqs: {faqs_str} }}'
        content = re.sub(pattern, replacer2, content)

write_file('src/data/servicesData.ts', content)
print("Done")
