import re

with open('src/data/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = '''          { slug: "trade-license", title: "Trade License" },
          { slug: "ngo-darpan-registration", title: "NGO Darpan Registration" },
          { slug: "trademark-registration", title: "Trademark Registration" },
          { slug: "import-export-code", title: "Import Export Code (IEC)" },
          { slug: "iso-certification", title: "ISO Certification" },
          { slug: "fssai-registration", title: "FSSAI Registration" }'''

replacement = '''          {
            slug: "trade-license",
            title: "Trade License",
            sections: [
              {
                title: "What is a Trade License?",
                content: `A Trade License is an official permission issued by the local Municipal Authority allowing an individual or business entity to carry on a specific trade or business activity at a designated location. It ensures that the business complies with applicable municipal laws, safety standards, and local regulations. It is not a one-time document, it must be renewed periodically, typically on an annual basis.`
              },
              {
                title: "Why is a Trade License Required?",
                content: `A Trade License helps regulate commercial activities and ensures businesses operate legally and responsibly.\\n\\n**Key Benefits**\\n• Legal authorization to conduct business\\n• Compliance with municipal regulations\\n• Protection of public health and safety\\n• Enhanced business credibility\\n• Prevention of unauthorized or hazardous activities\\n• Smooth and uninterrupted business operations`
              },
              {
                title: "Types of Trade Licenses",
                content: `**Industrial License**\\nFor manufacturing units and industrial establishments.\\n\\n**Shop & Establishment License**\\nFor retail shops, offices, service providers, and commercial establishments.\\n\\n**Food Establishment License**\\nFor businesses involved in the preparation, storage, sale, or distribution of food products.\\n\\n**Advertisement License**\\nFor Outdoor advertising\\n\\n**Hazardous Business License**\\nFor dealing with Hazardous Material`
              },
              {
                title: "Eligibility for Trade License",
                content: `To obtain a Trade License:\\n• The business activity must be legally permissible.\\n• The applicant must be at least 18 years of age.\\n• The applicant should not have any criminal record.\\n• All required NOCs (No Objection Certificates) must be in place, where applicable\\n• The business premises must be legally owned or leased by the applicant\\n• The business must comply with safety, health, and hygiene standards`
              },
              {
                title: "Documents Required",
                content: `• Application Form\\n• PAN Card of Business / Applicant\\n• Aadhaar Card of Applicant\\n• Certificate of Incorporation / Partnership Deed / LLP Agreement (as applicable)\\n• Property Tax Paid Receipt\\n• Rent Agreement or Owner's NOC\\n• Occupancy Certificate (OC)\\n• Layout Plan of Premises\\n• Any additional documents required by the Municipal Authority`
              },
              {
                title: "Trade License Renewal",
                content: `Trade Licenses are generally valid for one year and require annual renewal.\\n\\n**Documents Required for Renewal**\\n• Existing Trade License\\n• Previous Renewal Receipts / Challans\\n• Latest Property Tax Paid Receipt`
              }
            ],
            faqs: [
              { question: "Trade License FAQs", answer: "", isHeading: true },
              { question: "What is a Trade License?", answer: "A Trade License is an authorization issued by the local Municipal Authority permitting an individual or business entity to carry out a specific trade or business activity at a designated location." },
              { question: "Is a Trade License Mandatory?", answer: "Yes. Many businesses are required to obtain a Trade License before commencing operations to ensure compliance with municipal laws and regulations." },
              { question: "Who Issues a Trade License?", answer: "A Trade License is issued by the concerned Municipal Corporation, Municipal Council, or Local Authority having jurisdiction over the business location." },
              { question: "Who Can Apply for a Trade License?", answer: "Any individual, proprietor, partnership firm, LLP, company, or other legal entity carrying on a permissible business activity can apply for a Trade License." },
              { question: "What Types of Businesses Require a Trade License?", answer: "Trade Licenses are generally required for:\\n• Shops and retail establishments\\n• Restaurants and food businesses\\n• Offices and service providers\\n• Manufacturing units\\n• Warehouses and storage facilities\\n• Advertising businesses\\n• Hazardous and regulated businesses" },
              { question: "What is the Validity of a Trade License?", answer: "Trade Licenses are typically valid for one year and must be renewed annually or as prescribed by the local authority." },
              { question: "Is a Trade License Required for Home-Based Businesses?", answer: "Depending on the nature of the activity and local municipal regulations, a Trade License may be required even for certain home-based businesses." },
              { question: "Are Different Trade Licenses Required for Different Activities?", answer: "Yes. The type of Trade License depends on the nature of the business activity, such as industrial, commercial, food-related, advertising, or hazardous business operations." },
              { question: "Why Choose ConsultAvenuee for Trade License Registration?", answer: "ConsultAvenuee provides complete assistance with Trade License registration, documentation, application filing, liaison with municipal authorities, renewals, and ongoing compliance support, ensuring a hassle-free experience for businesses." }
            ]
          },
          {
            slug: "ngo-darpan-registration",
            title: "NGO Darpan Registration",
            sections: [
              {
                title: "Obtain Your NGO Darpan Unique ID with Expert Assistance",
                content: `NGO Darpan Registration is an online registration process administered by NITI Aayog for Trusts, Societies, Section 8 Companies, and other eligible non-profit organizations. Upon registration, the organization receives a unique NGO Darpan ID, which serves as an official identity for interaction with Government Ministries, Departments, funding agencies, and CSR contributors.\\n\\nNGO Darpan Registration is increasingly required for Government grants, CSR funding, FCRA-related applications, and various regulatory compliances.\\n\\nAt ConsultAvenuee, we provide end-to-end assistance to help your organization obtain its NGO Darpan ID quickly and efficiently.`
              },
              {
                title: "Why is NGO Darpan Registration Important?",
                content: `NGO Darpan Registration offers several advantages:\\n✓ Government-recognized Unique NGO Darpan ID\\n✓ Eligibility for Central Government Grants and Schemes\\n✓ Enhanced Credibility with Donors and CSR Contributors\\n✓ Support for FCRA, 12A, and 80G Applications\\n✓ Improved Transparency and Organizational Visibility\\n✓ Inclusion in the National NGO Database maintained by NITI Aayog`
              },
              {
                title: "Who Can Apply?",
                content: `The following entities are eligible for NGO Darpan Registration:\\n• Public Charitable Trusts\\n• Registered Societies\\n• Section 8 Companies\\n• Voluntary Organizations (VOs)\\n• Other legally registered non-profit organizations`
              },
              {
                title: "Documents Required",
                content: `**Organization Documents**\\n• Registration Certificate of Trust, Society, or Section 8 Company\\n• PAN Card of the Organization\\n• Trust Deed / MOA / Bye-Laws\\n• Registered Office Address Proof\\n• Organization Email ID and Mobile Number\\n\\n**Office Bearer Documents**\\n• PAN Card of President, Secretary, Treasurer, or Key Functionaries\\n• Aadhaar Card of Authorized Office Bearers\\n• Contact Details of Governing Body Members\\n\\n**Additional Documents (if available)**\\n• 12A Registration Certificate\\n• 80G Registration Certificate\\n• Activity Report / Annual Report\\n• Details of Projects and Social Activities`
              },
              {
                title: "NGO Darpan Registration Process",
                content: `Step 1 – Eligibility Review\\nStep 2 – Documentation\\nStep 3 – Portal Registration\\nStep 4 – Profile Creation\\nStep 5 – Document Upload & Verification\\nStep 6 – Application Submission\\nStep 7 – Darpan ID Generation`
              },
              {
                title: "Our NGO Darpan Registration Services",
                content: `• Registration Advisory\\n• Application & Filing Support\\n• Registration Assistance\\n• Post-Registration Services\\n✓ 12A Registration\\n✓ 80G Registration\\n✓ FCRA Advisory & Compliance\\n✓ CSR Compliance Support\\n✓ NGO Annual Compliance Services`
              }
            ],
            faqs: [
              { question: "NGO Darpan Registration FAQs", answer: "", isHeading: true },
              { question: "Is NGO Darpan Registration Mandatory?", answer: "While not mandatory for every NGO, it is generally required for Government grants, many CSR funding opportunities, FCRA-related applications, and other regulatory processes." },
              { question: "How Long Does NGO Darpan Registration Take?", answer: "The registration process is generally completed within a few working days, subject to document readiness and successful verification." },
              { question: "Can a Newly Registered NGO Apply?", answer: "Yes. Newly registered Trusts, Societies, and Section 8 Companies can apply provided they possess valid registration and PAN documents." },
              { question: "Does NGO Darpan Registration Provide Tax Exemption?", answer: "No. Tax exemptions are granted separately through 12A and 80G registrations under the Income-tax Act." },
              { question: "Is NGO Darpan Registration Required for CSR Funding?", answer: "Many CSR contributors and corporate donors prefer or require NGOs to have a valid NGO Darpan ID before considering funding proposals." },
              { question: "Need Assistance with NGO Darpan Registration?", answer: "ConsultAvenuee provides complete support for NGO Darpan Registration, 12A Registration, 80G Registration, FCRA Compliance, CSR Advisory, and NGO Annual Compliance Services—helping your organization focus on its mission while we manage the regulatory requirements." }
            ]
          },
          {
            slug: "trademark-registration",
            title: "Trademark Registration",
            sections: [
              {
                title: "Protect Your Brand. Secure Your Business Identity.",
                content: `Whether you are a startup, SME, established business, or entrepreneur, securing your trademark is a critical step in protecting your brand identity and business reputation. Secure your brand today and build a strong foundation for long-term business success.\\n\\nYour brand is one of your most valuable business assets. Whether it is your business name, logo, tagline, product name, or unique identity, trademark registration provides legal protection and exclusive ownership rights, helping you safeguard your brand from unauthorized use and infringement.\\n\\nAt ConsultAvenuee, we provide comprehensive trademark registration services, guiding businesses through every stage of the registration process—from trademark search and class selection to application filing, objection handling, and registration support.`
              },
              {
                title: "Why Trademark Registration is Important",
                content: `A registered trademark not only protects your brand but also strengthens your market position and business value.\\n\\n**Key Benefits of Trademark Registration**\\n• Exclusive legal rights over your brand name, logo, and identity\\n• Protection against unauthorized use and infringement\\n• Enhanced brand recognition and customer trust\\n• Creation of a valuable intangible business asset\\n• Increased business valuation and goodwill\\n• Easier franchising, licensing, and brand expansion\\n• Right to use the ® symbol after registration\\n• Nationwide protection across India\\n• Strong legal support in disputes and enforcement actions`
              },
              {
                title: "What Can Be Registered as a Trademark?",
                content: `The following business assets can be protected through trademark registration:\\n• Brand Names\\n• Business Names\\n• Logos\\n• Taglines and Slogans\\n• Product Names\\n• Labels and Packaging Designs\\n• Device Marks\\n• Sound Marks\\n• Composite Marks (Brand Name and Logo Combined)`
              },
              {
                title: "Who Can Apply for Trademark Registration?",
                content: `Trademark registration can be obtained by:\\n• Individuals\\n• Proprietorship Firms\\n• Partnership Firms\\n• Limited Liability Partnerships (LLPs)\\n• Private Limited Companies\\n• Startups\\n• MSMEs\\n• Trusts and Societies\\n• Foreign Companies and Foreign Nationals`
              },
              {
                title: "Documents Required",
                content: `**For Individuals and Proprietorship Firms**\\n• PAN Card\\n• Aadhaar Card\\n• Address Proof\\n• Brand Name or Logo\\n• Mobile Number and Email ID\\n\\n**For Companies and LLPs**\\n• Certificate of Incorporation\\n• PAN Card of Company/LLP\\n• Details of Authorized Signatory\\n• Logo (if applicable)\\n• Business Address Proof\\n\\n**Additional Documents (Where Applicable)**\\n• Udyam/MSME Registration Certificate\\n• Startup India Recognition Certificate\\n• User Affidavit for Prior Use Claims\\n• Power of Attorney (when filed through an authorized representative)`
              },
              {
                title: "Trademark Registration Process",
                content: `1. Trademark Availability Search\\n2. Trademark Class Selection\\n3. Application Filing\\n4. Examination by Trademark Registry\\n5. Objection Handling\\n6. Publication in Trademark Journal\\n7. Registration Certificate`
              },
              {
                title: "Trademark Validity and Renewal",
                content: `• Trademark registration remains valid for 10 years.\\n• Registration can be renewed indefinitely for successive periods of 10 years.\\n• Timely renewal ensures continuous protection of your brand rights.`
              }
            ],
            faqs: [
              { question: "Trademark Registration FAQs", answer: "", isHeading: true },
              { question: "Can I use the ™ symbol before registration?", answer: "Yes. Once a trademark application is filed, you may use the ™ symbol. The ® symbol can only be used after successful registration." },
              { question: "How long does trademark registration take?", answer: "The timeline varies depending on examination, objections, and opposition proceedings. Early filing helps secure your priority date." },
              { question: "Is trademark registration mandatory?", answer: "No. However, registration provides stronger legal protection and exclusive rights over your brand identity." },
              { question: "Can I register both my brand name and logo?", answer: "Yes. Separate registrations for the brand name and logo provide broader legal protection." },
              { question: "Can foreign companies register trademarks in India?", answer: "Yes. Foreign individuals, companies, and entities can apply for trademark registration in India." }
            ]
          },
          {
            slug: "import-export-code",
            title: "Import Export Code (IEC)",
            sections: [
              {
                title: "Start Your Global Business Journey",
                content: `Planning to import goods into India or expand your business into international markets through exports? Obtaining an Import Export Code (IEC) is the first and most essential step.\\n\\nWhether you are a startup, manufacturer, trader, exporter, importer, or service provider, IEC registration is your gateway to global business opportunities.\\n\\nGet your IEC Registration completed quickly and start your international business journey with ConsultAvenuee. We provide end-to-end IEC Registration Services, helping businesses obtain their Import Export Code quickly and efficiently while ensuring complete compliance with DGFT requirements.`
              },
              {
                title: "What is Import Export Code (IEC)?",
                content: `Import Export Code (IEC) is a unique 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Government of India.\\n\\nIEC is mandatory for businesses and individuals engaged in the import or export of goods and services. It serves as the primary authorization for conducting international trade from India.\\n\\n**Key Features of IEC**\\n• 10-digit unique identification number\\n• Issued by DGFT, Government of India\\n• Mandatory for import and export activities\\n• PAN-based registration\\n• Lifetime validity\\n• No renewal requirement\\n• No periodic return filing or compliance obligations`
              },
              {
                title: "Who Needs IEC Registration?",
                content: `IEC registration is required for:\\n• Proprietorship Firms\\n• Partnership Firms\\n• LLPs (Limited Liability Partnerships)\\n• Private Limited Companies\\n• Public Limited Companies\\n• Exporters and Importers\\n• E-commerce Export Businesses\\n• Service Exporters\\n• Manufacturers and Traders engaged in international business`
              },
              {
                title: "Benefits of IEC Registration",
                content: `• Access Global Markets\\n• Mandatory for International Trade\\n• Customs Clearance Support\\n• Export Incentives & Benefits\\n• Lifetime Validity\\n• No Annual Compliance\\n• Improved Business Credibility`
              },
              {
                title: "Documents Required for IEC Registration",
                content: `**For Proprietorship Firms**\\n• PAN Card\\n• Aadhaar Card\\n• Passport-size Photograph\\n• Business Address Proof\\n• Bank Account Details or Cancelled Cheque\\n\\n**For Partnership Firms**\\n• PAN Card\\n• Partnership Deed\\n• Address Proof\\n• Bank Certificate or Cancelled Cheque\\n• Identity Proof of Partners\\n\\n**For LLPs and Companies**\\n• PAN Card\\n• Certificate of Incorporation\\n• Registered Office Address Proof\\n• Identity & Address Proof of Directors/Partners\\n• Bank Certificate or Cancelled Cheque\\n• Digital Signature (where applicable)\\n\\n**Address Proof Documents**\\n• Rent Agreement with NOC\\n• Ownership Documents / Sale Deed\\n• Electricity Bill\\n• Telephone Bill\\n• Water Bill`
              },
              {
                title: "IEC Registration Process",
                content: `Step 1 – Document Collection & Verification\\nStep 2 – Application Preparation\\nStep 3 – Online Filing with DGFT\\nStep 4 – Verification & Processing\\nStep 5 – IEC Generation`
              }
            ],
            faqs: [
              { question: "Import Export Code (IEC) FAQs", answer: "", isHeading: true },
              { question: "Is IEC mandatory for import-export business?", answer: "Yes. IEC is mandatory for businesses involved in importing or exporting goods and services, except in specified exempt cases." },
              { question: "Is IEC valid for a lifetime?", answer: "Yes. IEC has lifetime validity and does not require renewal." },
              { question: "Is there any annual return filing under IEC?", answer: "No. There are no annual returns or recurring compliance requirements after obtaining IEC." },
              { question: "Can service exporters obtain IEC?", answer: "Yes. Businesses providing services to overseas clients may also require IEC for certain international transactions and foreign remittances." },
              { question: "Can an individual obtain IEC?", answer: "Yes. Individuals engaged in import-export activities can apply for IEC registration." }
            ]
          },
          {
            slug: "iso-certification",
            title: "ISO Certification",
            sections: [
              {
                title: "Achieve Global Standards with Confidence",
                content: `Whether you are a startup, SME, manufacturer, service provider, educational institution, or large enterprise, ISO Certification demonstrates your commitment to quality, compliance, and excellence.\\n\\n**Build Trust. Improve Quality. Achieve Global Standards.**\\nIn today's competitive business environment, organizations must demonstrate their commitment to quality, efficiency, customer satisfaction, and continual improvement. ISO Certification provides internationally recognized validation that your business operates in accordance with globally accepted standards and best practices.\\n\\nAt ConsultAvenuee, we provide end-to-end ISO Certification support, helping businesses implement the required systems, documentation, and processes to successfully achieve and maintain ISO Certification.`
              },
              {
                title: "What is ISO Certification?",
                content: `ISO Certification is an internationally recognized certification issued by an accredited certification body, confirming that an organization complies with the standards established by the International Organization for Standardization (ISO).\\n\\nIt demonstrates that a business has implemented structured processes, quality controls, and management systems designed to enhance operational efficiency, customer satisfaction, and continual improvement.\\n\\nISO Certification strengthens business credibility, improves stakeholder confidence, and creates opportunities for growth in domestic and international markets.`
              },
              {
                title: "Popular ISO Certifications",
                content: `We assist businesses in obtaining various ISO certifications, including:\\n• ISO 9001 – Quality Management System (QMS)\\n• ISO 14001 – Environmental Management System (EMS)\\n• ISO 45001 – Occupational Health & Safety Management System\\n• ISO 22000 – Food Safety Management System\\n• ISO 27001 – Information Security Management System\\n• ISO 50001 – Energy Management System`
              },
              {
                title: "Benefits of ISO Certification",
                content: `• Enhanced Business Credibility\\n• Eligibility for Government & Corporate Tenders\\n• Improved Customer Satisfaction\\n• Operational Efficiency\\n• Better Risk Management\\n• Competitive Advantage\\n• Global Recognition\\n• Continuous Improvement`
              },
              {
                title: "Who Should Obtain ISO Certification?",
                content: `ISO Certification is beneficial for:\\n• Manufacturing Companies\\n• Service Providers\\n• Startups & SMEs\\n• Educational Institutions\\n• Healthcare Organizations\\n• Hospitality & Tourism Businesses\\n• IT & Technology Companies\\n• Construction & Infrastructure Companies\\n• Logistics & Supply Chain Businesses\\n• Exporters & Importers\\n• Government Contractors`
              },
              {
                title: "Documents Required",
                content: `The documentation requirements may vary depending on the ISO standard and nature of business. Generally, the following documents are required:\\n• PAN Card\\n• Identity Proof of Proprietor/Directors/Partners\\n• Business Registration Documents\\n• Address Proof of Business Premises\\n• Organizational Structure Details\\n• Scope of Business Activities\\n• Existing Policies and Procedures (if any)\\n• Sales or Purchase Invoices\\n• Employee Information\\n\\nAdditional documents may be required based on the applicable ISO standard and business operations.`
              },
              {
                title: "ISO Certification Process & Validity",
                content: `**Process**\\nStep 1 – Business Assessment\\nStep 2 – Gap Analysis\\nStep 3 – Documentation & Implementation\\nStep 4 – Internal Review & Readiness Assessment\\nStep 5 – Certification Audit\\nStep 6 – Certification Approval\\nStep 7 – Surveillance & Continuous Compliance\\n\\n**Certification Validity & Surveillance**\\nISO Certification is generally valid for three years, subject to successful completion of periodic surveillance audits conducted by the certification body.\\nRegular monitoring ensures that the organization continues to comply with the applicable ISO standards and maintains the effectiveness of its management systems.`
              }
            ],
            faqs: [
              { question: "ISO Certification FAQs", answer: "", isHeading: true },
              { question: "Is ISO Certification mandatory?", answer: "ISO Certification is generally voluntary; however, many customers, government departments, and corporate organizations require it as a business qualification." },
              { question: "How long does it take to obtain ISO Certification?", answer: "The timeline depends on the size, complexity, and preparedness of the organization. Smaller businesses may obtain certification within a few months, while larger organizations may require additional implementation time." },
              { question: "How long is ISO Certification valid?", answer: "ISO Certification is typically valid for three years, subject to periodic surveillance audits." },
              { question: "Can startups obtain ISO Certification?", answer: "Yes. Startups can benefit significantly from ISO Certification by improving credibility, process efficiency, and customer confidence." },
              { question: "Which ISO Certification is best for my business?", answer: "The appropriate certification depends on your industry, business objectives, customer requirements, and regulatory expectations. Our team can help you identify the most suitable ISO standard." }
            ]
          },
          {
            slug: "fssai-registration",
            title: "FSSAI Registration",
            sections: [
              {
                title: "Ensure Food Safety Compliance. Build Consumer Trust.",
                content: `Whether you are a restaurant owner, food manufacturer, cloud kitchen operator, exporter, retailer, or food startup, FSSAI compliance is essential for operating legally and building customer trust.\\n\\nIf you are engaged in the manufacturing, processing, packaging, storage, distribution, transportation, or sale of food products, obtaining an FSSAI Registration or License is a legal requirement under the Food Safety and Standards Act, 2006.\\n\\nConsultAvenuee provides reliable and professional support for FSSAI Registration, Licensing, Renewals, Modifications, and Compliance Advisory, helping your business meet regulatory requirements and grow with confidence.`
              },
              {
                title: "What is FSSAI?",
                content: `The Food Safety and Standards Authority of India (FSSAI) is the apex regulatory body established under the Ministry of Health & Family Welfare, Government of India, responsible for regulating and supervising food safety standards across the country.\\n\\nFSSAI ensures that food products manufactured, distributed, sold, or imported in India meet prescribed safety and quality standards, thereby protecting consumer health and promoting confidence in the food industry.\\n\\nEvery Food Business Operator (FBO) is required to obtain the appropriate FSSAI Registration or License before commencing food-related business activities.`
              },
              {
                title: "Who Needs FSSAI Registration?",
                content: `FSSAI Registration or License is mandatory for:\\n• Food Manufacturers\\n• Food Processors\\n• Restaurants & Cafés\\n• Hotels & Catering Businesses\\n• Bakers & Sweet Shops\\n• Cloud Kitchens\\n• Food Traders & Distributors\\n• Food Importers & Exporters\\n• E-commerce Food Sellers\\n• Dairy & Milk Processing Units\\n• Meat & Poultry Businesses\\n• Storage & Warehouse Operators\\n• Transporters of Food Products\\n• Retail Food Businesses`
              },
              {
                title: "Types of FSSAI Licenses",
                content: `**Basic FSSAI Registration**\\nSuitable for small food businesses and petty food operators.\\nEligibility: Annual turnover up to ₹12 Lakhs\\nValidity: 1 to 5 Years\\n\\n**State FSSAI License**\\nApplicable to medium-sized food businesses operating within a state.\\nEligibility: Annual turnover above ₹12 Lakhs and up to ₹20 Crores\\nValidity: 1 to 5 Years\\n\\n**Central FSSAI License**\\nRequired for large food businesses and entities involved in interstate or international operations.\\nApplicable For: Importers and Exporters, Large Manufacturers, Food Processing Units, 100% Export Oriented Units, Airports, Seaports, Railways, Large Food Chain Operators\\nEligibility: Annual turnover exceeding ₹20 Crores (subject to applicable regulations)\\nValidity: 1 to 5 Years`
              },
              {
                title: "Documents Required",
                content: `**Basic FSSAI Registration**\\n• Passport-size Photograph\\n• PAN Card\\n• Aadhaar Card or Other Identity Proof\\n• Business Address Proof\\n• Details of Food Business Activities\\n\\n**State License**\\n• Identity and Address Proof of Proprietor/Partners/Directors\\n• Business Constitution Documents\\n• Address Proof of Business Premises\\n• Equipment and Machinery Details\\n• Food Product Categories\\n• Food Safety Management System (FSMS) Plan\\n• Water Analysis Report (where applicable)\\n\\n**Central License**\\n• All documents required for State License\\n• Import Export Code (IEC) (if applicable)\\n• Layout Plan of Processing Unit\\n• Turnover Details\\n• NOCs and Regulatory Approvals (where applicable)\\n• Transportation and Supply Chain Documents\\n\\nAdditional documents may be required depending on the nature and scale of operations.`
              },
              {
                title: "FSSAI Registration Process & Labeling",
                content: `**Registration Process**\\nStep 1 – Business Assessment\\nStep 2 – License Category Determination\\nStep 3 – Documentation Support\\nStep 4 – Application Filing\\nStep 5 – Scrutiny & Verification\\nStep 6 – Approval & License Issuance\\n\\n**FSSAI Labeling Requirements**\\nAfter obtaining registration or license, food businesses must comply with FSSAI labeling regulations. Key requirements include:\\n• Display of FSSAI Logo\\n• Display of 14-digit FSSAI License Number\\n• Proper product labeling as per FSSAI guidelines\\n• Importer details and license information on imported food products\\n\\nCompliance with labeling requirements is essential to avoid penalties and ensure regulatory compliance.`
              }
            ],
            faqs: [
              { question: "FSSAI Registration FAQs", answer: "", isHeading: true },
              { question: "Is FSSAI registration mandatory?", answer: "Yes. Any business involved in manufacturing, processing, storage, distribution, transportation, or sale of food products is generally required to obtain FSSAI Registration or License." },
              { question: "How long is an FSSAI License valid?", answer: "FSSAI Registration and Licenses can be obtained for a period ranging from 1 to 5 years and must be renewed before expiry." },
              { question: "Can I operate a food business without FSSAI registration?", answer: "No. Operating a food business without the required registration or license may attract penalties and regulatory action." },
              { question: "Is FSSAI required for cloud kitchens and home-based food businesses?", answer: "Yes. Depending on the scale of operations, cloud kitchens, home-based food businesses, and online food sellers are also required to obtain appropriate FSSAI registration." }
            ]
          }'''

if target in content:
    content = content.replace(target, replacement)
    with open('src/data/servicesData.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS: 6 services added to registrations.")
else:
    print("ERROR: Target text not found.")
