import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = '''          { slug: "llp-registration", title: "LLP Registration" },
          { slug: "partnership-firm-registration", title: "Partnership Firm Registration" },
          { slug: "public-limited-company-registration", title: "Public Limited Company Registration" },
          { slug: "trust-registration", title: "Trust Registration" },
          { slug: "indian-subsidiary-foreign-entrepreneurs", title: "Indian Subsidiary for Foreign Entrepreneurs" }'''

replacement = '''          {
            slug: "llp-registration",
            title: "LLP Registration",
            sections: [
              {
                title: "What is a Limited Liability Partnership (LLP)?",
                content: `A Limited Liability Partnership (LLP) is a business structure governed by the Limited Liability Partnership Act, 2008. It combines the advantages of a traditional partnership with the benefits of limited liability.\n\nAn LLP is a separate legal entity from its partners and offers flexibility in management while protecting the personal assets of partners from business liabilities. It is one of the most preferred business structures for professionals, consultants, startups, family-owned businesses, and small and medium enterprises (SMEs).\n\nIn an LLP, partners are not personally liable for the misconduct or negligence of other partners. Their liability is generally limited to the extent of their agreed contribution to the LLP.`
              },
              {
                title: "Advantages of an LLP",
                content: `**Separate Legal Entity**\nAn LLP has a legal identity separate from its partners and can own assets, enter into contracts, sue, and be sued in its own name.\n\n**Limited Liability**\nThe liability of partners is limited to their contribution in the LLP, protecting personal assets from business liabilities.\n\n**Perpetual Succession**\nThe LLP continues to exist irrespective of changes in partners.\n\n**Easy Transferability**\nOwnership interests can be transferred subject to the LLP Agreement.\n\n**Lower Compliance Requirements**\nCompared to companies, LLPs have fewer compliance and regulatory requirements.\n\n**Easy Management**\nLLPs offer flexibility in internal management through the LLP Agreement.\n\n**Ability to Own Property**\nAn LLP can acquire, own, hold, and dispose of property in its own name.\n\n**Easy Closure**\nThe process of winding up an LLP is generally simpler than that of a company.`
              },
              {
                title: "Minimum Requirements for LLP Registration",
                content: `• Minimum 2 Partners\n• No Minimum Capital Requirement\n• At least 2 Designated Partners\n• At least 1 Designated Partner must be a Resident of India\n• Registered Office Address in India\n• Digital Signature Certificate (DSC) for Designated Partners\n\nNote: There is no maximum limit on the number of partners in an LLP.`
              },
              {
                title: "Documents Required",
                content: `**Documents of Partners**\n• PAN Card\n• Aadhaar Card / Voter ID / Passport\n• Passport Size Photograph\n• Mobile Number\n• Email ID\n\n**Registered Office Documents**\nIf the premises are rented:\n• Rent Agreement\n• No Objection Certificate (NOC) from Owner\n• Latest Electricity Bill / Water Bill / Gas Bill\n\nIf the premises are owned:\n• Ownership Document\n• Latest Utility Bill\n\n**Additional Documents for Foreign Nationals / NRIs**\n• Passport\n• Overseas Address Proof\n• Notarized and Apostilled Documents (where applicable)`
              },
              {
                title: "Registration Process",
                content: `Step 1: Obtain DSC\nStep 2: Name Reservation\nStep 3: Filing of LLP Incorporation Application\nStep 4: Issue of LLP Incorporation Certificate\nStep 5: Execution and Filing of LLP Agreement\nStep 6: Apply for PAN and Open Bank Account`
              }
            ],
            faqs: [
              { question: "LLP Registration FAQs", answer: "", isHeading: true },
              { question: "What is the minimum number of partners required to start an LLP?", answer: "A minimum of two partners is required to incorporate an LLP. There is no maximum limit on the number of partners." },
              { question: "Who can become a Partner or Designated Partner in an LLP?", answer: "Any individual, company, LLP, or body corporate can become a partner in an LLP. However, only an individual can act as a Designated Partner." },
              { question: "What is an LLP Agreement?", answer: "An LLP Agreement is a legal document executed between the partners that governs the rights, duties, responsibilities, profit-sharing arrangements, and management of the LLP." },
              { question: "Can an NRI or Foreign National become a Partner in an LLP?", answer: "Yes. NRIs and Foreign Nationals can become partners in an LLP, subject to applicable laws and regulations. However, at least one Designated Partner must be a Resident of India." },
              { question: "Is an LLP cheaper to maintain than a Private Limited Company?", answer: "Generally, yes. LLPs have fewer compliance requirements and lower maintenance costs compared to Private Limited Companies, making them a popular choice for professionals and small businesses." },
              { question: "Can I register an LLP at my residential address?", answer: "Yes. An LLP can be registered at a residential address, provided valid address proof and supporting documents are submitted." },
              { question: "Can a salaried employee become a Partner in an LLP?", answer: "Yes. A salaried employee can become a partner in an LLP, subject to the terms of their employment agreement." },
              { question: "Is audit mandatory for an LLP?", answer: "Audit is mandatory if:\\n• Annual Turnover exceeds ₹40 Lakhs; or\\n• Contribution exceeds ₹25 Lakhs\\nThe accounts must then be audited by a Chartered Accountant." },
              { question: "What is the stamp duty payable on an LLP Agreement?", answer: "Stamp duty on an LLP Agreement varies from state to state and depends on the amount of contribution and applicable state laws." },
              { question: "Can an LLP be incorporated for non-profit activities?", answer: "No. An LLP is formed with the objective of carrying on a lawful business with a view to earning profits. Non-profit activities are generally undertaken through entities such as Trusts, Societies, or Section 8 Companies." },
              { question: "Can an LLP be converted into a Private Limited Company?", answer: "Yes. Subject to compliance with applicable legal provisions and regulatory requirements, an LLP may be converted into a Company. Professional advice should be obtained before undertaking such conversion." }
            ]
          },
          {
            slug: "partnership-firm-registration",
            title: "Partnership Firm Registration",
            sections: [
              {
                title: "What is a Partnership Firm?",
                content: `A Partnership Firm is a business structure formed by two or more persons who agree to carry on a lawful business and share its profits and losses according to mutually agreed terms.\n\nPartnership Firms in India are governed by the Indian Partnership Act, 1932. The relationship between partners is defined through a Partnership Deed, which contains details such as capital contribution, profit-sharing ratio, rights, duties, and responsibilities of the partners.\n\nA Partnership Firm is one of the simplest and most economical forms of business organization and is widely preferred by small and medium-sized businesses, family-owned enterprises, and professional firms.\n\nPartnership Firms may be:\n• Registered Partnership Firm\n• Unregistered Partnership Firm\n\nAlthough registration is not mandatory under the Partnership Act, registration provides several legal advantages and is generally recommended.`
              },
              {
                title: "Advantages of a Partnership Firm",
                content: `**Easy Formation**\nA Partnership Firm can be established quickly with minimal legal formalities.\n\n**Shared Investment**\nPartners contribute capital jointly, reducing the financial burden on a single individual.\n\n**Simple Management**\nDecision-making and business operations can be managed collectively by the partners.\n\n**Minimal Compliance**\nPartnership Firms have fewer compliance requirements compared to companies and LLPs.\n\n**Flexibility**\nPartners can mutually decide the terms and conditions of business operations through the Partnership Deed.\n\n**Cost-Effective Structure**\nFormation and maintenance costs are relatively low.`
              },
              {
                title: "Minimum Requirements for Partnership Registration",
                content: `• Minimum 2 Partners\n• Partnership Deed\n• Registered Business Address\n• PAN and Address Proof of Partners\n\nNote: There is no minimum capital requirement for starting a Partnership Firm.`
              },
              {
                title: "Documents Required",
                content: `**Documents of Partners**\n• PAN Card\n• Aadhaar Card / Voter ID / Passport\n• Passport Size Photograph\n• Mobile Number\n• Email ID\n\n**Business Address Proof**\nIf the premises are rented:\n• Rent Agreement\n• No Objection Certificate (NOC) from Owner\n• Latest Electricity Bill / Water Bill / Gas Bill\n\nIf the premises are owned:\n• Ownership Document\n• Latest Utility Bill\n\n**Additional Documents**\n• Partnership Deed\n• Application for Registration (where registration is sought)`
              },
              {
                title: "Registration Process",
                content: `Step 1: Drafting of Partnership Deed\nStep 2: Registration of Partnership Firm (Optional)\nStep 3: PAN and TAN Application\nStep 4: Opening of Bank Account`
              }
            ],
            faqs: [
              { question: "Partnership Firm FAQs", answer: "", isHeading: true },
              { question: "What is the eligibility criteria for becoming a partner?", answer: "Any person competent to contract under the Indian Contract Act, 1872 can become a partner in a Partnership Firm." },
              { question: "Is there any minimum capital requirement for a Partnership Firm?", answer: "No. There is no minimum capital requirement prescribed for starting a Partnership Firm." },
              { question: "Is a Partnership Firm a separate legal entity?", answer: "No. A Partnership Firm is not a separate legal entity from its partners. The partners are jointly responsible for the obligations and liabilities of the firm." },
              { question: "How many partners can a Partnership Firm have?", answer: "A Partnership Firm must have a minimum of two partners. The maximum number of partners is generally governed by applicable laws and regulatory provisions. Professional advice should be obtained for specific cases." },
              { question: "What is the validity period of a Partnership Firm?", answer: "A Partnership Firm can continue indefinitely unless dissolved by mutual agreement, operation of law, or as provided in the Partnership Deed." },
              { question: "Is a Partnership Deed mandatory?", answer: "Although a written Partnership Deed is not legally mandatory, it is strongly recommended as it clearly defines the rights, duties, responsibilities, and profit-sharing arrangements among partners." },
              { question: "Is registration of a Partnership Firm compulsory?", answer: "No. Registration is optional under the Indian Partnership Act, 1932. However, a registered firm enjoys certain legal benefits and can more effectively enforce its rights in court." },
              { question: "What should be included in a Partnership Deed?", answer: "A Partnership Deed generally contains:\\n• Name and Address of Partners\\n• Firm Name\\n• Nature of Business\\n• Capital Contribution\\n• Profit and Loss Sharing Ratio\\n• Rights and Duties of Partners\\n• Admission and Retirement of Partners\\n• Dispute Resolution Mechanism\\n• Dissolution Clauses" },
              { question: "Can a Partnership Firm be registered at a residential address?", answer: "Yes. A residential address can be used as the business address, subject to submission of valid address proof and supporting documents." },
              { question: "Can a salaried employee become a partner in a Partnership Firm?", answer: "Yes. A salaried employee may become a partner in a Partnership Firm, subject to the terms and conditions of their employment agreement." },
              { question: "Is audit mandatory for a Partnership Firm?", answer: "Audit requirements depend upon the applicable provisions of the Income Tax Act and other relevant laws. Professional advice should be obtained based on the firm's turnover and nature of business." }
            ]
          },
          {
            slug: "public-limited-company-registration",
            title: "Public Limited Company Registration",
            sections: [
              {
                title: "What is a Public Limited Company?",
                content: `A Public Limited Company is a company incorporated under the Companies Act, 2013. It is a company whose shares can be offered to the public and, subject to compliance with applicable laws and regulations, may be listed on a recognized stock exchange.\n\nA Public Limited Company is a separate legal entity from its shareholders and directors. It enjoys perpetual succession and provides limited liability protection to its members.\n\nA Public Limited Company must have:\n• Minimum 7 Shareholders\n• Minimum 3 Directors\n• At least One Resident Director in India\n• No restriction on the maximum number of shareholders\n• Maximum 15 Directors (more can be appointed by passing a special resolution)`
              },
              {
                title: "Why Choose a Public Limited Company?",
                content: `• Separate legal entity\n• Limited liability protection\n• Ability to raise capital from the public\n• Greater business credibility\n• Easy transferability of shares\n• Better access to financial institutions and investors\n• Potential for listing on a recognized stock exchange\n• Perpetual succession`
              },
              {
                title: "Advantages of a Public Limited Company",
                content: `• Separate legal existence from its shareholders\n• Enhanced credibility and public confidence\n• Ability to raise substantial capital through public offerings\n• Free transferability of shares\n• Perpetual succession irrespective of changes in ownership\n• Better opportunities for expansion and growth\n• Improved access to debt and equity financing\n\nA Public Limited Company can own, acquire, transfer, and dispose of property in its own name. Shareholders do not have any direct claim over the company's assets.`
              },
              {
                title: "Minimum Requirements for Public Limited Company Registration",
                content: `• Minimum 7 Shareholders (Members)\n• Minimum 3 Directors\n• At least 1 Director must be a Resident of India\n• Registered Office Address in India\n• Digital Signature Certificate (DSC) for Proposed Directors\n• Director Identification Number (DIN) for Proposed Directors\n• Unique Company Name approved by the Registrar of Companies (ROC)\n• Memorandum of Association (MOA) and Articles of Association (AOA)\n\nNote: There is no minimum paid-up capital requirement prescribed under the Companies Act, 2013 for incorporation of a Public Limited Company. The company may be incorporated with any amount of capital as determined by its business requirements.`
              },
              {
                title: "Documents Required",
                content: `**Documents for Directors and Shareholders**\n• PAN Card\n• Aadhaar Card / Voter ID / Passport\n• Passport Size Photograph\n• Mobile Number\n• Email ID\n\n**Registered Office Documents**\nIf the premises are rented:\n• Rent Agreement\n• No Objection Certificate (NOC) from Owner\n• Latest Electricity Bill / Water Bill / Gas Bill\n\nIf the premises are owned:\n• Ownership Document\n• Latest Utility Bill\n\n**Additional Documents for Foreign Nationals / NRIs**\n• Passport\n• Overseas Address Proof\n• Notarized and Apostilled Documents (where applicable)`
              },
              {
                title: "Registration Process",
                content: `Step 1: Obtain DSC\nStep 2: Company Name Approval\nStep 3: Preparation of Incorporation Documents\nStep 4: Filing of Incorporation Application\nStep 5: Issue of Certificate of Incorporation\nStep 6: Opening of Bank Account`
              }
            ],
            faqs: [
              { question: "Public Limited Company FAQs", answer: "", isHeading: true },
              { question: "Do I need to be physically present during the registration process?", answer: "No. Public Limited Company registration is a completely online process. Physical presence is generally not required, and documents can be submitted electronically." },
              { question: "Is there any limit on the number of shareholders in a Public Limited Company?", answer: "No. There is no maximum limit on the number of shareholders in a Public Limited Company. However, a minimum of seven shareholders is required." },
              { question: "Is there any minimum capital requirement for incorporation?", answer: "No. There is currently no minimum paid-up capital requirement prescribed for incorporating a Public Limited Company." },
              { question: "How many directors are required for a Public Limited Company?", answer: "A minimum of three directors is required. The maximum number of directors is fifteen, unless increased by passing a special resolution." },
              { question: "Can an NRI or Foreign National become a Director?", answer: "Yes. NRIs and Foreign Nationals can become directors or shareholders in a Public Limited Company, subject to applicable laws and regulations. At least one director must be a resident of India." },
              { question: "Can a Public Limited Company be converted into a Private Limited Company?", answer: "Yes. A Public Limited Company may be converted into a Private Limited Company subject to compliance with the provisions of the Companies Act, 2013 and approval from the relevant authorities." },
              { question: "Is it necessary to purchase office premises for company registration?", answer: "No. The registered office can be a rented property, owned property, or residential address, subject to submission of valid supporting documents." },
              { question: "What is a DSC?", answer: "A Digital Signature Certificate (DSC) is an electronic signature issued by authorized Certifying Authorities. It is used for signing and filing documents electronically with government authorities." },
              { question: "What are the annual compliance requirements of a Public Limited Company?", answer: "A Public Limited Company is required to maintain statutory records, conduct audits, hold board and shareholder meetings, and file annual returns and financial statements with the Registrar of Companies (ROC)." },
              { question: "Can a salaried employee become a Director in a Public Limited Company?", answer: "Yes. A salaried individual can serve as a director, subject to the terms of their employment agreement and applicable laws." }
            ]
          },
          {
            slug: "trust-registration",
            title: "Trust Registration",
            sections: [
              {
                title: "What is a Trust?",
                content: `A Trust is a legal arrangement established for charitable, religious, educational, medical, or social welfare purposes. It is created when a settlor transfers assets or property to trustees, who manage them for the benefit of beneficiaries or for achieving specific charitable objectives. Trusts are governed primarily by the Indian Trusts Act, 1882 (for private trusts) and relevant state laws governing public charitable trusts.`
              },
              {
                title: "Advantages of Trust Registration",
                content: `• Establishes legal recognition and credibility.\n• Suitable for charitable, educational, religious, and social welfare activities.\n• Enables receipt of donations and grants.\n• Facilitates tax exemptions subject to applicable laws.\n• Provides perpetual succession and continuity.\n• Enhances public trust and transparency.\n• Enables ownership and management of assets in the name of the Trust.`
              },
              {
                title: "Minimum Requirements",
                content: `• Minimum 2 Trustees (may vary as per state regulations).\n• Settlor (Founder) to establish the Trust.\n• Trust Deed specifying objectives and governance structure.\n• Registered office address.\n• Identity and address proof of Settlor and Trustees.\n• Initial Trust Property or Corpus Fund.`
              },
              {
                title: "Documents Required",
                content: `**For Settlor and Trustees**\n• PAN Card\n• Aadhaar Card / Passport / Voter ID / Driving License\n• Passport-size Photographs\n• Mobile Number and Email ID\n\n**Registered Office Proof**\n• Electricity Bill / Property Tax Receipt / Utility Bill\n• Rent Agreement (if premises are rented)\n• No Objection Certificate (NOC) from the property owner\n\n**Other Documents**\n• Draft Trust Deed\n• Details of Trust Objectives\n• Details of Trustees and Settlor`
              },
              {
                title: "Registration Process",
                content: `Step 1: Consultation & Documentation\nStep 2: Drafting of Trust Deed\nStep 3: Execution of Trust Deed\nStep 4: Registration with Sub-Registrar\nStep 5: PAN Application\nStep 6: Tax Registration (if applicable)`
              }
            ],
            faqs: [
              { question: "Trust Registration FAQs", answer: "", isHeading: true },
              { question: "How many trustees are required to form a Trust?", answer: "Generally, a minimum of two trustees is required, though requirements may vary depending on the state." },
              { question: "Is Trust Registration mandatory?", answer: "While a trust can be created through a deed, registration is recommended to provide legal validity and credibility." },
              { question: "Can a Trust receive donations?", answer: "Yes. Registered trusts can receive donations and may apply for tax exemption registrations such as 12A and 80G." },
              { question: "Can a Trust own property?", answer: "Yes. A Trust can acquire, hold, and manage movable and immovable property in its name." },
              { question: "How long does Trust Registration take?", answer: "Typically, registration may take 7–15 working days, subject to documentation and local authority procedures." },
              { question: "Can foreign citizens become trustees?", answer: "Yes, subject to applicable laws and compliance requirements." },
              { question: "What is the difference between a Trust, Society, and Section 8 Company?", answer: "All are non-profit structures. Trusts are generally easier to form, while Societies and Section 8 Companies have different governance and compliance requirements." },
              { question: "Can the objectives of a Trust be changed later?", answer: "Changes may be possible depending on the provisions of the Trust Deed and applicable legal requirements." }
            ]
          },
          {
            slug: "indian-subsidiary-foreign-entrepreneurs",
            title: "Indian Subsidiary for Foreign Entrepreneurs",
            sections: [
              {
                title: "What is an Indian Subsidiary Company?",
                content: `An Indian Subsidiary Company is a company incorporated in India in which a foreign company or another company holds controlling ownership.\n\nUnder the Companies Act, 2013, a company is considered a subsidiary of another company (holding company) if the holding company:\n• Controls the composition of its Board of Directors; or\n• Exercises or controls more than one-half of the total voting power, either directly or together with its subsidiary companies.\n\nA foreign company can establish an Indian Subsidiary Company to conduct business operations in India, subject to applicable Foreign Direct Investment (FDI) regulations.\n\nAn Indian Subsidiary Company is treated as an Indian company for legal and taxation purposes and enjoys the benefits of a separate legal identity.`
              },
              {
                title: "Advantages of an Indian Subsidiary Company",
                content: `**Separate Legal Entity**\nAn Indian Subsidiary is a separate legal entity distinct from its shareholders and parent company.\n\n**Limited Liability Protection**\nThe liability of shareholders is limited to the extent of their shareholding.\n\n**Eligible for Foreign Direct Investment (FDI)**\nForeign investment is permitted in many sectors under the automatic route, subject to sector-specific regulations.\n\n**Indian Company Status**\nThe subsidiary is treated as an Indian company under applicable laws, including taxation and corporate regulations.\n\n**Ease of Business Operations**\nAn Indian Subsidiary can enter into contracts, own property, hire employees, and conduct business activities in India.\n\n**Dividend Repatriation**\nSubject to applicable laws and taxes, profits may be repatriated to the foreign parent company.`
              },
              {
                title: "Minimum Requirements for Indian Subsidiary Registration",
                content: `• Minimum 2 Shareholders\n• Minimum 2 Directors\n• At least 1 Director must be a Resident of India\n• Registered Office Address in India\n• Digital Signature Certificate (DSC) for Directors\n• Director Identification Number (DIN) for Directors\n• Foreign Parent Company must hold a controlling stake to qualify as a subsidiary\n\nNote: There is currently no minimum paid-up capital requirement for incorporation of an Indian Subsidiary Company.`
              },
              {
                title: "Documents Required",
                content: `**Documents of Indian Directors**\n• PAN Card\n• Aadhaar Card / Voter ID / Passport\n• Passport Size Photograph\n• Mobile Number\n• Email ID\n\n**Documents of Foreign Directors**\n• Passport\n• Overseas Address Proof\n• Passport Size Photograph\n• Email ID\n• Mobile Number\n\nDocuments may require notarization and apostille/legalization depending upon the country of origin.\n\n**Documents of Foreign Parent Company**\n• Certificate of Incorporation\n• Charter Documents (MOA, AOA, Articles, By-laws, etc.)\n• Board Resolution approving investment in the Indian Subsidiary\n• Authorized Signatory Resolution\n• Shareholding Structure of Parent Company\n\n**Registered Office Documents**\nIf the premises are rented:\n• Rent Agreement\n• No Objection Certificate (NOC) from Owner\n• Latest Electricity Bill / Water Bill / Gas Bill\n\nIf the premises are owned:\n• Ownership Document\n• Latest Utility Bill`
              },
              {
                title: "Registration Process",
                content: `Step 1: Obtain DSC\nStep 2: Name Reservation\nStep 3: Preparation of Incorporation Documents\nStep 4: Filing of Incorporation Application\nStep 5: Issue of Certificate of Incorporation\nStep 6: Opening of Bank Account\nStep 7: FEMA and RBI Compliance`
              }
            ],
            faqs: [
              { question: "Indian Subsidiary Registration FAQs", answer: "", isHeading: true },
              { question: "What are the minimum requirements for incorporating an Indian Subsidiary?", answer: "• Minimum 2 Shareholders\n• Minimum 2 Directors\n• At least 1 Resident Director in India\n• Registered Office Address in India\nThere is no minimum paid-up capital requirement." },
              { question: "Can an Indian Company be a 100% subsidiary of a Foreign Company?", answer: "Yes. Subject to applicable FDI regulations and sector-specific restrictions, a foreign company may own up to 100% of an Indian subsidiary in sectors where such investment is permitted." },
              { question: "Can a Foreign Company acquire an Indian Company?", answer: "Yes. Foreign companies can acquire shares in Indian companies subject to FEMA regulations, FDI policy, sectoral caps, and applicable approvals where required." },
              { question: "Can a Foreign Company purchase land in India?", answer: "The ability of foreign entities to acquire immovable property in India is regulated under FEMA and RBI regulations. Specific legal advice should be obtained based on the nature of the entity and transaction." },
              { question: "Can Foreign Investors invest in Indian Real Estate?", answer: "Foreign investment in the real estate sector is permitted subject to applicable FDI regulations and sector-specific conditions issued by the Government of India and the Reserve Bank of India." },
              { question: "What is the Automatic Route under FDI?", answer: "Under the Automatic Route, foreign investment is permitted without prior approval of the Government of India, subject to sector-specific limits and conditions." },
              { question: "What is the Government Approval Route under FDI?", answer: "Under the Government Route, prior approval from the Government of India is required before foreign investment can be made in specified sectors." },
              { question: "Can Foreign Nationals become Directors in an Indian Subsidiary?", answer: "Yes. Foreign nationals can be appointed as directors, subject to compliance with the Companies Act, 2013 and other applicable laws. At least one director must be a resident of India." },
              { question: "How long does it take to register an Indian Subsidiary Company?", answer: "Subject to document availability, foreign document legalization requirements, and regulatory approvals, incorporation generally takes 10–20 working days." },
              { question: "Is RBI approval required for every Indian Subsidiary?", answer: "No. RBI or Government approval is only required in sectors where investment is not permitted under the Automatic Route or where specific approvals are mandated under FDI regulations." }
            ]
          }'''

if target in content:
    content = content.replace(target, replacement)
    with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS! Replaced all 5 remaining Company Formation objects.')
else:
    print('Target not found.')
