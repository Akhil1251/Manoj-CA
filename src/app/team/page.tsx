"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamPage() {
  const [openProfile, setOpenProfile] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Manoj Kumar Keshri",
      role: "Founder & Chairman",
      credentials: "FCA, CS (I) Mini-MBA.",
      bioSnippet: "Manoj Kumar Keshri, a Fellow Chartered Accountant with over 34 +years of professional excellence, is the Founder & Chairman of ConsultAvenuee. He is a trusted advisor to Co-operative Housing Societies, SMEs, Start-ups...",
      fullBio: "He is a trusted advisor to Co-operative Housing Societies, SMEs, Start-ups, NRIs, HNIs, Senior Citizens, and businesses across Real Estate, FMCG, Hospitality, Healthcare, Media, and Sports sectors. He is known for his practical approach and commitment to client success, he continues to guide businesses and institutions through an evolving regulatory and business landscape. His expertise in governance, regulatory compliance, and strategic advisory has helped organizations build strong foundations for sustainable growth and long-term success.",
      image: "/Team/Founder%20&%20Chairman-%20Manoj%20Kumar%20Keshri.jpeg"
    },
    {
      name: "Shobhit Gupta",
      role: "CA, CMA (USA)",
      bioSnippet: "Shobhit Gupta is a Chartered Accountant and a Certified Management Accountant (USA) with over 15 + years of post-qualification experience in domestic and international taxation. Having started his career with EY...",
      fullBio: "Having started his career with EY and subsequently worked with multinational organizations across Europe, the Middle East, North Africa, and Asia-Pacific, he brings a strong global perspective to tax and business advisory services. His expertise includes Corporate Tax, International Taxation, GST, Transfer Pricing, Tax Structuring, Cross-Border Transactions, Tax Due Diligence, BEPS, and Regulatory Compliance. He advises businesses on complex tax matters, helping them navigate evolving regulatory landscapes with confidence and efficiency.",
      image: "/Team/shobhit%20gupta.jpeg"
    },
    {
      name: "Pradosh Kumar Roy",
      role: "CA (I), PGDFM, DIM.",
      bioSnippet: "Pradosh Kumar Roy, C.A. (Inter), PGDFM, DIM, is a finance and compliance professional with 25+ years of experience in Accounting, Audit, GST, Income Tax, EPFO, ESIC, MCA Compliances and Business Advisory...",
      fullBio: "He has worked extensively with organizations in the Trading, Export, IT, Education, Healthcare, Hospitality, and Travel sectors, helping them achieve compliance, financial efficiency, and sustainable growth.",
      image: "/Team/Pradosh%20Roy.jpeg"
    },
    {
      name: "Asim Bhaumick",
      role: "ICWAI, PGDFM, DIM.",
      bioSnippet: "Asim Bhaumick, M. Com, ICWAI, PGDFM, DIM is a seasoned Finance and Compliance Professional with over 25+ years of experience in Accounting, Taxation, Labour Laws, and Statutory Compliance...",
      fullBio: "He has extensive experience serving organizations in the Education, Healthcare, Hospitality, and Travel sectors, helping them strengthen compliance, improve financial efficiency, and achieve sustainable growth through practical.",
      image: "/Team/Asim%20Bhaumick.jpeg"
    },
    {
      name: "Sudhir Gupta",
      role: "B.Com, G.D.C.A.",
      bioSnippet: "Sudhir Gupta is a seasoned Co-operative Housing Society professional with over 16 years of experience in society formation, society handover processes, governance, elections, training programs...",
      fullBio: "A qualified G.D.C.A. (Government Diploma in Co-operation and Accountancy) professional, he has worked extensively with housing societies, supporting managing committees in addressing regulatory, operational, financial, and member-related challenges. With a deep understanding of the co-operative housing sector, Sudhir provides valuable guidance on society formation, builder-to-society handover, committee management, statutory audits, accounting and financial management, elections, deemed conveyance, redevelopment, and compliance requirements. His practical approach and domain expertise help housing societies strengthen governance, ensure regulatory compliance, and achieve smooth, transparent, and efficient administration.",
      image: "/Team/Sudhir.jpeg"
    },
    {
      name: "Gauri Ghadi",
      role: "B. Com",
      bioSnippet: "Gauri Ghadi, B. Com, is an experienced Accounts & Taxation Professional with over 10 years of expertise in accounting, financial reporting, GST and TDS compliance, and Income Tax Return filing...",
      fullBio: "She specializes in managing end-to-end accounting functions and statutory compliances with precision and efficiency. Her commitment to accuracy and timely execution helps clients maintain strong financial and regulatory compliance standards.",
      image: "/Team/Gauri%20Ghadi.jpeg"
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-[44px] font-black text-[#081125] dark:text-white mb-4 tracking-tight">
            Our team list
          </h1>
          <div className="w-16 h-1.5 bg-[#c29b62]"></div>
        </div>

        {/* Team List */}
        <div>
          {teamMembers.map((member, idx) => {
            const isOpen = openProfile === idx;

            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start dark:border-gray-800"
                style={{ margin: "0 0 30px", padding: "0 0 30px", borderBottom: "1px solid #e6e6e6" }}
              >

                {/* Image */}
                <div className="w-full md:w-[350px] lg:w-[380px] shrink-0 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-w-full max-h-full object-contain rounded-sm"
                    style={{ maxHeight: "260px" }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center pt-1 md:pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#081125] dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-5" style={{ fontSize: "14px" }}>
                    {member.role}
                  </p>

                  <div
                    className="text-gray-600 dark:text-gray-400 mb-6 max-w-4xl"
                    style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: "14px", lineHeight: "26px", fontWeight: 400 }}
                  >
                    <p>{member.bioSnippet}</p>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                            <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">{member.credentials}</p>
                            <p>{member.fullBio}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => setOpenProfile(isOpen ? null : idx)}
                    className="w-max px-6 py-3 bg-[#081125] hover:bg-[#152a4f] text-white text-sm font-bold flex items-center transition-colors rounded-md shadow-md"
                  >
                    view profile
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 ml-3 text-[#c29b62]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 ml-3 text-[#c29b62]" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
