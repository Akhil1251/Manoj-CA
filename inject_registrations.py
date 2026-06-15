import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = '''        subSubServices: [
          { slug: "shop-and-establishment-registration", title: "Shop & Establishment Registration" },
          { slug: "startup-india-registration", title: "Startup India Registration" },
          { slug: "msme-udyam-registration", title: "MSME/Udyam Registration" },
          { slug: "pf-registration", title: "PF Registration" },
          { slug: "esic-registration", title: "ESIC Registration" },'''

replacement = '''        subSubServices: [
          {
            slug: "professional-tax-registration",
            title: "Professional Tax Registration & Returns",
            sections: [
              {
                title: "Professional Tax Compliance Made Simple",
                content: `Whether you are a startup, SME, LLP, company, professional, or growing business, ConsultAvenuee provides comprehensive Professional Tax registration, return filing, compliance management, and advisory services to help you remain compliant while focusing on business growth.\\n\\n**Professional Tax Registration, Return Filing & Compliance Support**\\nProfessional Tax (PT) is a state-level levy applicable in certain states on persons engaged in professions, trades, callings, and employments. Employers and eligible businesses may be required to obtain registrations, comply with tax obligations, and file prescribed returns under the applicable State Professional Tax laws.`
              },
              {
                title: "What is Professional Tax?",
                content: `Professional Tax is a tax imposed by certain State Governments on individuals earning income through employment, profession, trade, or business activities.\\n\\nThe applicability, registration requirements, compliance procedures, filing obligations, and tax rates are governed by the respective State laws and may vary across jurisdictions.\\n\\nDepending on the nature of the entity and its activities, businesses and employers may be required to obtain one or more Professional Tax registrations and comply with ongoing statutory requirements.\\n\\nBusinesses may be required to obtain:\\n\\n**Professional Tax Enrolment Certificate (PTEC)**\\nApplicable to:\\n• Proprietorship Firms\\n• Partnership Firms\\n• LLPs\\n• Companies\\n• Professionals and Consultants\\n• Directors and Partners\\n\\n**Professional Tax Registration Certificate (PTRC)**\\nApplicable to employers who:\\n• Employ staff or workers\\n• Deduct Professional Tax from employee salaries\\n• Deposit the deducted tax with the Government`
              },
              {
                title: "Who May Be Required to Obtain Professional Tax Registration?",
                content: `Professional Tax registration requirements may apply to:\\n• Proprietorship Firms\\n• Partnership Firms\\n• Limited Liability Partnerships (LLPs)\\n• Private Limited Companies\\n• Public Limited Companies\\n• Professionals and Consultants\\n• Directors and Partners\\n• Employers engaging employees or workers\\n• Other entities covered under applicable State Professional Tax laws\\n\\nThe exact applicability depends on the provisions of the relevant State legislation.`
              },
              {
                title: "Documents Generally Required for Registration",
                content: `The documentation requirements may vary depending on the constitution of the entity and the applicable State laws.\\n\\nCommonly required documents may include:\\n\\n**Proprietorship Concerns**\\n• PAN Card\\n• Aadhaar Card\\n• Address Proof\\n• Business Address Proof\\n• Bank Account Details\\n• Business Registration Documents, if applicable\\n\\n**Partnership Firms and LLPs**\\n• PAN Card\\n• Partnership Deed or LLP Agreement\\n• Partner Identification Documents\\n• Address Proof\\n• Business Registration Documents\\n\\n**Companies**\\n• Certificate of Incorporation\\n• PAN Card\\n• Constitutional Documents\\n• Registered Office Address Proof\\n• Director Identification Documents\\n• Employee Information, where applicable\\n\\nAdditional documents may be required depending on the nature of the business and State-specific regulations.`
              },
              {
                title: "Professional Tax Compliance Process",
                content: `Step 1: Applicability Review\\nStep 2: Registration\\nStep 3: Tax Computation\\nStep 4: Tax Payment\\nStep 5: Return Filing\\nStep 6: Ongoing Compliance Management`
              },
              {
                title: "Consequences of Non-Compliance",
                content: `Failure to comply with Professional Tax provisions may result in:\\n• Interest on delayed payments\\n• Monetary penalties\\n• Compliance notices\\n• Assessment proceedings\\n• Difficulties during statutory audits and regulatory reviews\\n\\nThe nature and extent of consequences depend upon the applicable State laws.`
              }
            ],
            faqs: [
              { question: "Professional Tax Registration FAQs", answer: "", isHeading: true },
              { question: "Is Professional Tax applicable throughout India?", answer: "No. Professional Tax is governed by State laws and is applicable only in those States that have enacted Professional Tax legislation." },
              { question: "Who is required to obtain Professional Tax registration?", answer: "Registration requirements depend on the nature of the business, profession, employment structure, and the provisions of the applicable State law." },
              { question: "Are employers required to comply with Professional Tax provisions?", answer: "Employers may be required to comply with Professional Tax obligations in relation to their employees, subject to the applicable State regulations." },
              { question: "What happens if Professional Tax compliance is not completed on time?", answer: "Delayed compliance may result in interest, penalties, notices, and other consequences prescribed under the relevant State laws." },
              { question: "Can ConsultAvenuee manage Professional Tax compliance for multiple locations?", answer: "Yes. We assist businesses operating across multiple branches, offices, and jurisdictions with registration, compliance management, and return filing support." }
            ]
          },
          {
            slug: "shop-and-establishment-registration",
            title: "Shop & Establishment Registration",
            sections: [
              {
                title: "What is the Shops & Establishments Act?",
                content: `The Shops & Establishments Act is a state-specific labour legislation that regulates the registration and functioning of commercial establishments, offices, shops, service providers, and other business entities. The Act governs various employment-related matters, including working conditions, employee welfare, maintenance of records, and compliance requirements.\\n\\nRegistration under the applicable State Shops & Establishments Act serves as an important legal recognition of a business establishment and is often required for obtaining various licenses, registrations, and business approvals.`
              },
              {
                title: "Applicability",
                content: `The Act generally applies to various business and commercial establishments, including:\\n• Retail and Wholesale Shops\\n• Offices and Commercial Establishments\\n• Service Providers and Consultancy Firms\\n• Warehouses and Storage Facilities\\n• Restaurants and Food Establishments\\n• Hotels and Lodging Businesses\\n• Educational and Training Institutions\\n• Healthcare and Professional Service Establishments\\n• Entertainment and Recreational Businesses\\n• Other Commercial and Business Premises\\n\\nThe applicability and compliance requirements may vary depending on the state in which the business operates.`
              },
              {
                title: "Our Services",
                content: `We provide end-to-end assistance for:\\n• Shops & Establishments Registration\\n• Registration Amendments and Updates\\n• Change in Business Details\\n• Additional Place of Business Registration\\n• Registration Renewal Support (where applicable)\\n• Compliance Advisory\\n• Labour Law Documentation Support\\n• Maintenance of Statutory Records`
              },
              {
                title: "Documents Generally Required",
                content: `The documents required may vary depending on the nature of the entity and state-specific requirements.\\n\\n**Business Documents**\\n• PAN Card of Proprietor / Entity\\n• Certificate of Incorporation (for Companies)\\n• LLP Incorporation Documents (for LLPs)\\n• Partnership Deed (for Partnership Firms)\\n• Memorandum & Articles of Association (for Companies)\\n\\n**Identity & Address Proof**\\n• PAN Card\\n• Aadhaar Card\\n• Passport / Driving Licence / Voter ID (as applicable)\\n\\n**Business Address Proof**\\n• Electricity Bill / Utility Bill\\n• Property Tax Receipt\\n• Rent Agreement (if premises are rented)\\n• No Objection Certificate from Owner (where required)\\n\\n**Additional Documents**\\n• Photographs of Proprietor / Partners / Directors\\n• Contact Details\\n• Employee Details (if applicable)\\n\\nAdditional documents may be required depending upon the state regulations and business activities.`
              },
              {
                title: "Records & Registers",
                content: `Businesses may be required to maintain prescribed records and registers under the applicable Shops & Establishments Rules, which may include:\\n• Employee Register\\n• Attendance Records\\n• Salary and Wage Records\\n• Leave Records\\n• Employment and Appointment Records\\n• Other Statutory Registers as prescribed\\n\\nThe nature of records to be maintained varies from state to state.`
              }
            ],
            faqs: [
              { question: "Shop & Establishment Registration FAQs", answer: "", isHeading: true },
              { question: "Is Shops & Establishments Registration mandatory?", answer: "Most commercial establishments are required to obtain registration under the applicable state law. Requirements vary from state to state." },
              { question: "Who can apply for Shops & Establishments Registration?", answer: "Proprietorships, Partnership Firms, LLPs, Companies, Professionals, Consultants, and other commercial establishments may be required to obtain registration." },
              { question: "Can registration details be amended later?", answer: "Yes. Changes relating to business address, ownership, business activities, or other particulars can generally be updated through prescribed procedures." },
              { question: "Do compliance requirements differ across states?", answer: "Yes. Registration procedures, documentation requirements, and compliance obligations may vary depending on the state in which the establishment operates." },
              { question: "Can ConsultAvenuee assist with registration and compliance?", answer: "Yes. We provide complete assistance for registration, amendments, compliance advisory, and maintenance of statutory records under the applicable Shops & Establishments laws." }
            ]
          },
          {
            slug: "startup-india-registration",
            title: "Startup India Registration",
            sections: [
              {
                title: "Accelerate Your Startup Growth with Government Recognition",
                content: `Startup India Recognition is an initiative designed to promote innovation, entrepreneurship, and business growth in India. Eligible startups can obtain recognition and access various benefits, support programs, networking opportunities, and regulatory advantages available under the Startup ecosystem.\\n\\nAt ConsultAvenuee, we provide end-to-end assistance for Startup India Recognition, helping entrepreneurs navigate the registration process and build a strong compliance foundation for future growth.`
              },
              {
                title: "What is Startup India Recognition?",
                content: `Startup India Recognition is available to eligible business entities that are engaged in innovation, development, improvement of products or services, or have scalable business models with growth potential.\\n\\nRecognition helps startups establish credibility and access various government-supported initiatives aimed at encouraging entrepreneurship and innovation.\\n\\nEligible entities may include:\\n• Private Limited Companies\\n• Limited Liability Partnerships (LLPs)\\n• Registered Partnership Firms`
              },
              {
                title: "Benefits of Startup India Recognition",
                content: `• Enhanced Credibility\\n• Access to Startup Ecosystem\\n• Intellectual Property Support\\n• Regulatory & Compliance Benefits\\n• Funding & Growth Opportunities\\n• Market Access`
              },
              {
                title: "Eligibility Assessment",
                content: `Eligibility for Startup India Recognition depends upon various factors, including:\\n• Nature of business activities\\n• Innovation and scalability of the business model\\n• Legal structure of the entity\\n• Compliance with applicable regulatory requirements\\n\\nOur team assists in evaluating eligibility before initiating the application process.`
              },
              {
                title: "Documents Generally Required",
                content: `The documentation requirement may vary depending on the type of entity and nature of business.\\n\\n**Entity Documents**\\n• Certificate of Incorporation / Registration\\n• PAN of the Entity\\n• LLP Agreement or Partnership Deed (where applicable)\\n• Constitutional Documents of the Entity\\n\\n**Promoter Details**\\n• Details of Directors, Partners, or Founders\\n• Identity and Address Proofs\\n• Contact Information\\n\\n**Business Information**\\n• Business Profile\\n• Brief Description of Products or Services\\n• Information relating to Innovation or Business Model\\n• Website, Application, or Product Information (if available)\\n\\n**Additional Information**\\n• Funding Details (if applicable)\\n• Incubation Support Details (if available)\\n• Any other supporting documents as may be required`
              },
              {
                title: "Our Process",
                content: `Step 1: Initial Assessment\\nStep 2: Documentation Support\\nStep 3: Application Preparation\\nStep 4: Regulatory Processing\\nStep 5: Recognition & Post-Approval Support`
              }
            ],
            faqs: [
              { question: "Startup India Registration FAQs", answer: "", isHeading: true },
              { question: "Is Startup India Recognition mandatory?", answer: "No. However, eligible startups often seek recognition to access various benefits, support programs, and opportunities available within the startup ecosystem." },
              { question: "Can LLPs and Partnership Firms apply?", answer: "Eligible LLPs and registered partnership firms may apply subject to fulfillment of applicable conditions." },
              { question: "Can newly incorporated businesses apply?", answer: "Yes. Newly established entities may apply if they satisfy the prescribed eligibility requirements." },
              { question: "Does recognition guarantee funding?", answer: "No. Recognition does not guarantee funding but may improve access to investors, incubators, accelerators, and startup support programs." },
              { question: "Can ConsultAvenuee assist with post-recognition compliance?", answer: "Yes. We provide ongoing support for accounting, taxation, corporate compliance, registrations, governance, and business advisory requirements." }
            ]
          },
          {
            slug: "msme-udyam-registration",
            title: "MSME/Udyam Registration",
            sections: [
              {
                title: "Empower Your Business with MSME Recognition",
                content: `Micro, Small and Medium Enterprises (MSMEs) play a vital role in economic growth, employment generation, innovation, and entrepreneurship. MSME Registration (Udyam Registration) enables eligible businesses to obtain official recognition and access various support mechanisms, business opportunities, and government initiatives designed for small and medium enterprises.\\n\\nAt ConsultAvenuee, we provide end-to-end assistance for MSME Registration, documentation support, compliance guidance, and post-registration advisory services.`
              },
              {
                title: "What is MSME Registration?",
                content: `MSME (Micro, Small and Medium Enterprise) Registration is a government-recognized registration available to eligible businesses engaged in manufacturing, trading, or service activities.\\n\\nThe registration provides formal recognition to enterprises and facilitates access to various business support programs, financial assistance opportunities, and regulatory benefits available to eligible MSMEs.\\n\\nMSME Registration is commonly known as Udyam Registration and is issued through the prescribed government registration framework.`
              },
              {
                title: "Who Can Apply?",
                content: `MSME Registration may be obtained by eligible:\\n• Proprietorship Firms\\n• Partnership Firms\\n• Limited Liability Partnerships (LLPs)\\n• Private Limited Companies\\n• Public Limited Companies\\n• One Person Companies (OPCs)\\n• Cooperative Societies\\n• Trusts and Other Eligible Business Entities\\n\\nEligibility is determined based on applicable government criteria and business classifications.`
              },
              {
                title: "Benefits of MSME Registration",
                content: `• Business Recognition\\n• Financial Support Opportunities\\n• Business Growth Support\\n• Government Procurement Opportunities\\n• Legal & Regulatory Support\\n• Market Expansion`
              },
              {
                title: "Documents Generally Required",
                content: `The documentation requirements may vary depending upon the constitution of the business.\\n\\n**Business Information**\\n• Business Name\\n• Business Address\\n• Nature of Business Activities\\n• Contact Details\\n\\n**Identity & Entity Documents**\\n• PAN Card\\n• Aadhaar Details of Proprietor / Partner / Director\\n• Entity Registration Documents (where applicable)\\n\\n**Banking Details**\\n• Bank Account Information\\n• IFSC Details\\n\\n**Business Registration Information**\\n• GST Registration Details (if applicable)\\n• Incorporation or Registration Documents\\n• Partnership Deed / LLP Agreement (where applicable)\\n\\n**Additional Information**\\n• Business Activity Details\\n• Investment and Turnover Information\\n• Other information as may be required under the applicable registration framework`
              },
              {
                title: "Registration Process",
                content: `Step 1: Eligibility Assessment\\nStep 2: Documentation Review\\nStep 3: Application Preparation\\nStep 4: Registration Filing\\nStep 5: Registration Completion\\nStep 6: Ongoing Advisory Support`
              }
            ],
            faqs: [
              { question: "MSME/Udyam Registration FAQs", answer: "", isHeading: true },
              { question: "Is MSME Registration mandatory?", answer: "MSME Registration is generally optional; however, obtaining registration can help eligible businesses access various support programs and opportunities." },
              { question: "Who can obtain MSME Registration?", answer: "Eligible proprietorships, partnership firms, LLPs, companies, and other qualifying business entities may apply for MSME Registration." },
              { question: "Can service businesses obtain MSME Registration?", answer: "Yes. Eligible service providers, consultants, professionals, and other service-oriented businesses may qualify for registration." },
              { question: "Can startups apply for MSME Registration?", answer: "Yes. Eligible startups and newly established businesses may obtain MSME Registration subject to applicable conditions." },
              { question: "Can ConsultAvenuee assist with MSME Registration and compliance?", answer: "Yes. We provide complete assistance for MSME Registration, documentation, advisory services, and ongoing compliance support." }
            ]
          },
          {
            slug: "pf-registration",
            title: "PF Registration",
            sections: [
              {
                title: "Simplifying Workforce Compliance. Protecting Your Business.",
                content: `Managing Provident Fund (PF) compliances is a critical responsibility for every employer. From registrations and employee onboarding to monthly filings and regulatory inspections, maintaining compliance requires accuracy, consistency, and timely execution.\\n\\nOur team helps businesses complete EPF registration quickly and efficiently while ensuring compliance with applicable regulations. Whether you are a startup, SME, LLP, partnership firm, or private limited company, we provide comprehensive support for all EPF-related requirements.`
              },
              {
                title: "What is Provident Fund (EPF)?",
                content: `The Employees' Provident Fund (EPF) is a government-backed retirement savings scheme governed by the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. The scheme is administered by the Employees' Provident Fund Organisation (EPFO) and aims to provide long-term financial security to employees.\\n\\nUnder the EPF scheme, both the employer and employee contribute a prescribed percentage of the employee's salary every month, creating a retirement corpus that can be utilized upon retirement, resignation, or under specified circumstances.`
              },
              {
                title: "Applicability & Contribution Structure",
                content: `EPF registration is mandatory for establishments employing 20 or more employees, including eligible contract workers. Eligible establishments are required to obtain EPF registration within the prescribed time limit.\\n\\n**Who is Covered Under the EPF Act?**\\n• Establishments employing 20 or more employees\\n• Contract employees working in covered establishments\\n• Certain notified establishments employing fewer than 20 employees\\n• Organizations opting for voluntary EPF coverage\\n\\n**EPF Contribution Structure**\\nEmployee Contribution: 12% of Basic Salary + Dearness Allowance\\nEmployer Contribution: 12% of Basic Salary + Dearness Allowance\\n\\nThe employer's contribution is allocated between:\\n• Employees' Provident Fund (EPF)\\n• Employees' Pension Scheme (EPS)`
              },
              {
                title: "Important Points",
                content: `• EPF registration should be obtained within one month of becoming applicable.\\n• Once covered, EPF provisions generally continue even if employee strength subsequently falls below the threshold.\\n• Certain establishments may qualify for exemptions under applicable provisions of the law.`
              },
              {
                title: "Benefits of EPF Registration",
                content: `EPF offers several financial and social security benefits to employees:\\n• Retirement Benefits\\n• Pension Benefits\\n• Insurance Coverage\\n• Tax Benefits\\n• Easy Transfer & Portability\\n• Emergency Withdrawals\\n\\nEligible withdrawals for:\\n• Medical emergencies\\n• Higher education\\n• Marriage expenses\\n• Home purchase or construction\\n• Unemployment and other permitted purposes`
              },
              {
                title: "Documents Required for EPF Registration",
                content: `**Business Documents**\\n• Certificate of Incorporation / Partnership Deed / Registration Certificate\\n• PAN Card of the Entity or Proprietor\\n• Address Proof of Business\\n• Bank Account Proof (Cancelled Cheque or Bank Statement)\\n• Details of Business Activity\\n\\n**Promoter / Director Documents**\\n• PAN Card\\n• Aadhaar Card / Identity Proof\\n• Address Proof\\n• Passport-size Photograph (if required)\\n\\n**Additional Documents**\\n• List of Directors, Partners, or Proprietor Details\\n• Digital Signature Certificate (DSC) of Authorized Signatory\\n• Employee Details (if available)\\n• Contact Details (Mobile Number & Email ID)\\n• GST Registration Certificate (if applicable)\\n• Shop & Establishment Registration (if applicable)\\n• First Sale/Purchase Invoice (where required)`
              },
              {
                title: "Important Compliance Requirements",
                content: `**Monthly Compliance**\\n• EPF contributions must generally be deposited on or before the 15th of the following month.\\n• Monthly electronic return filing is required through the EPFO portal.`
              }
            ],
            faqs: [
              { question: "PF Registration FAQs", answer: "", isHeading: true },
              { question: "What is EPF Registration?", answer: "EPF Registration is the process of enrolling an eligible establishment under the Employees' Provident Fund (EPF) Scheme administered by the Employees' Provident Fund Organisation (EPFO). It enables employers to provide retirement, pension, and insurance benefits to employees." },
              { question: "Is EPF Registration Mandatory?", answer: "Yes. EPF registration is mandatory for establishments employing 20 or more employees. Certain establishments with fewer employees may also opt for voluntary coverage." },
              { question: "Who is Eligible for EPF Membership?", answer: "Generally, employees working in EPF-covered establishments are eligible to become members of the EPF Scheme as per applicable EPFO regulations." },
              { question: "What is UAN (Universal Account Number)?", answer: "UAN is a unique number allotted by EPFO that links all PF accounts of an employee, enabling easy account management, transfers, and online access to EPF services." },
              { question: "Can an Employee Have Multiple UANs?", answer: "No. An employee should have only one UAN throughout their employment career, irrespective of job changes." },
              { question: "What Happens If Employee Strength Falls Below 20?", answer: "Once EPF becomes applicable to an establishment, it generally continues to remain covered even if the employee count subsequently falls below 20." },
              { question: "Is EPF Applicable to Contract Employees?", answer: "Yes. Eligible contract employees working in covered establishments are generally required to be covered under the EPF Scheme." },
              { question: "What Are the Consequences of Non-Compliance?", answer: "Failure to obtain EPF registration or deposit contributions on time may result in interest, penalties, damages, and legal action under the EPF Act." },
              { question: "Why Choose ConsultAvenuee for EPF Registration?", answer: "ConsultAvenuee offers end-to-end assistance for EPF registration, PF code allotment, employee enrollment, UAN support, compliance management, and ongoing advisory services, ensuring seamless compliance with EPFO regulations." }
            ]
          },
          {
            slug: "esic-registration",
            title: "ESIC Registration",
            sections: [
              {
                title: "Employee State Insurance (ESI) Registration",
                content: `Whether you are a startup, SME, factory, shop, LLP, partnership firm, or private limited company, our experts ensure smooth ESIC registration and compliance, helping your organization meet all statutory requirements efficiently and on time.`
              },
              {
                title: "What is Employee State Insurance (ESI)?",
                content: `The Employees' State Insurance (ESI) Scheme is a comprehensive social security and health insurance program governed by the Employees' State Insurance Act, 1948 and administered by the Employees' State Insurance Corporation (ESIC).\\n\\nThe scheme provides medical, financial, and insurance benefits to employees and their families in the event of sickness, maternity, disability, employment injury, or death arising out of employment.`
              },
              {
                title: "Applicability of ESI Registration",
                content: `ESI registration is mandatory for eligible establishments employing 10 or more employees (threshold may vary in certain states as per applicable regulations).\\n\\n**ESI Coverage Applies To:**\\n• Factories and manufacturing units\\n• Shops and commercial establishments\\n• Hotels and restaurants\\n• Road transport undertakings\\n• Cinema theatres\\n• Newspaper establishments\\n• Educational institutions\\n• Private medical institutions\\n• Other notified establishments covered under the ESI Act\\n\\n**Employee Eligibility:**\\nEmployees earning gross wages up to the prescribed wage limit (currently ₹21,000 per month, subject to government amendments) are covered under the ESI Scheme.\\n\\n**ESI Contribution Structure:**\\nEmployee Contribution: 0.75% of Wages*\\nEmployer Contribution: 3.25% of Wages*\\n*Rates are subject to change as notified by ESIC from time to time.`
              },
              {
                title: "Benefits of ESI Registration",
                content: `The ESI Scheme offers a wide range of social security benefits for employees and their dependents.\\n\\n• Medical Benefits\\n• Sickness Benefits\\n• Maternity Benefits\\n• Disablement Benefits\\n• Dependents' Benefits\\n\\n**Additional Benefits:**\\n• Funeral expenses assistance\\n• Vocational rehabilitation support\\n• Unemployment allowance under specified schemes\\n• Confinement and medical benefits in eligible cases`
              },
              {
                title: "Documents Required for ESIC Registration",
                content: `**Business Documents**\\n• Registration Certificate under Factories Act or Shops & Establishments Act\\n• Certificate of Incorporation (for Companies)\\n• Partnership Deed (for Partnership Firms)\\n• LLP Agreement (for LLPs)\\n• Memorandum of Association (MOA) and Articles of Association (AOA), where applicable\\n• PAN Card of the Business Entity\\n• GST Registration Certificate (if available)\\n\\n**Employee Information**\\n• List of Employees with Salary Details\\n• Employee Identity Details\\n• Attendance and Wage Records\\n\\n**Additional Documents**\\n• Bank Account Proof (Cancelled Cheque or Bank Statement)\\n• Address Proof of Establishment\\n• List of Directors, Partners, or Proprietor Details\\n• PAN and Identity Proof of Authorized Signatory\\n• Digital Signature Certificate (DSC), where applicable\\n• Contact Details (Mobile Number and Email ID)`
              },
              {
                title: "Compliance under the ESI Act",
                content: `After obtaining ESI Registration, employers are required to comply with various statutory obligations.\\n\\n**Monthly Compliance:**\\n• Timely payment of ESI contributions\\n• Maintenance of wage and salary records\\n• Employee attendance records\\n• Updating employee details and changes\\n\\n**Periodic Compliance:**\\n• Filing of contribution details as prescribed by ESIC\\n• Maintenance of statutory registers and records\\n• Reporting employee additions, exits, and wage changes\\n\\n**Other Compliance Requirements:**\\n• Maintenance of accident records\\n• Submission of information sought by ESIC authorities\\n• Cooperation during inspections and audits\\n\\nFailure to comply may result in penalties, interest, and legal action under the ESI Act.`
              }
            ],
            faqs: [
              { question: "ESIC Registration FAQs", answer: "", isHeading: true },
              { question: "What is ESI Registration?", answer: "ESI Registration is the process of enrolling an eligible establishment under the Employees' State Insurance (ESI) Scheme administered by ESIC. It provides medical and social security benefits to eligible employees and their dependents." },
              { question: "Is ESI Registration Mandatory?", answer: "Yes. ESI registration is mandatory for eligible establishments employing 10 or more employees (subject to state-specific applicability) and covered under the ESI Act." },
              { question: "Who is Eligible for ESI Benefits?", answer: "Employees earning gross wages up to ₹21,000 per month are generally covered under the ESI Scheme and are entitled to ESI benefits." },
              { question: "How Long Does ESI Registration Take?", answer: "The registration process is generally completed within a few working days, subject to the submission of complete documents and approval by ESIC." },
              { question: "Is ESI Registration Required for Startups and Small Businesses?", answer: "Yes. If the establishment meets the employee threshold and falls under the notified categories, ESI registration becomes mandatory regardless of the type of business." },
              { question: "What Happens If an Employer Fails to Obtain ESI Registration?", answer: "Failure to obtain ESI registration or comply with ESI provisions may result in penalties, interest on delayed payments, and legal action under the ESI Act." },
              { question: "Is ESI Applicable to Contract Employees?", answer: "Yes. Contract employees working in a covered establishment are generally covered under the ESI Scheme, subject to eligibility conditions." },
              { question: "What Is the Due Date for ESI Contribution Payment?", answer: "ESI contributions must be deposited within the prescribed due date as notified by ESIC to avoid interest and penalties." },
              { question: "Why Choose ConsultAvenuee for ESI Registration?", answer: "ConsultAvenuee provides end-to-end assistance for ESIC registration, documentation, employee enrolment, compliance management, return filing support, and ongoing advisory services, ensuring a hassle-free compliance experience." }
            ]
          },'''

if target in content:
    content = content.replace(target, replacement)
    with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS: 6 services added to registrations.")
else:
    print("ERROR: Target text not found.")
