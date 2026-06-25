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
      bioSnippet: "Manoj Kumar Keshri, a Fellow Chartered Accountant with over 34 +years of professional excellence, is the Founder & Chairman of ConsultAvenuee. He is a trusted advisor to Co-operative Housing Societies, SMEs, Start-ups, NRIs, HNIs, Senior Citizens, and businesses across Real Estate, FMCG, Hospitality, Healthcare, Media, and Sports sectors.",
      fullBio: "He is known for his practical approach and commitment to client success, he continues to guide businesses and institutions through an evolving regulatory and business landscape. His expertise in governance, regulatory compliance, and strategic advisory has helped organizations build strong foundations for sustainable growth and long-term success.",
      image: "/Team/Manoj.jpeg?v=2"
    },
    {
      name: "Shobhit Gupta",
      role: "CA, CMA (USA)",
      bioSnippet: "Shobhit Gupta is a Chartered Accountant and a Certified Management Accountant (USA) with over 15 + years of post-qualification experience in domestic and international taxation. Having started his career with EY and subsequently worked with multinational organizations across Europe, the Middle East, North Africa, and Asia-Pacific, he brings a strong global perspective to tax and business advisory services.",
      fullBio: "His expertise includes Corporate Tax, International Taxation, GST, Transfer Pricing, Tax Structuring, Cross-Border Transactions, Tax Due Diligence, BEPS, and Regulatory Compliance. He advises businesses on complex tax matters, helping them navigate evolving regulatory landscapes with confidence and efficiency.",
      image: "/Team/Shobbit.jpeg?v=2"
    },
    {
      name: "Pradosh Kumar Roy",
      role: "CA (I), PGDFM, DIM.",
      bioSnippet: "Pradosh Kumar Roy, C.A. (Inter), PGDFM, DIM, is a finance and compliance professional with 25+ years of experience in Accounting, Audit, GST, Income Tax, EPFO, ESIC, MCA Compliances and Business Advisory.",
      fullBio: "He has worked extensively with organizations in the Trading, Export, IT, Education, Healthcare, Hospitality, and Travel sectors, helping them achieve compliance, financial efficiency, and sustainable growth.",
      image: "/Team/Pradosh Roy.jpeg?v=2"
    },
    {
      name: "Asim Bhaumick",
      role: "ICWAI, PGDFM, DIM.",
      bioSnippet: "Asim Bhaumick, M. Com, ICWAI, PGDFM, DIM is a seasoned Finance and Compliance Professional with over 25+ years of experience in Accounting, Taxation, Labour Laws, and Statutory Compliance.",
      fullBio: "He has extensive experience serving organizations in the Education, Healthcare, Hospitality, and Travel sectors, helping them strengthen compliance, improve financial efficiency, and achieve sustainable growth through practical.",
      image: "/Team/Asim.jpeg?v=2"
    },
    {
      name: "Sudhir Gupta",
      role: "B.Com, G.D.C.A.",
      bioSnippet: "Sudhir Gupta is a seasoned Co-operative Housing Society professional with over 16 years of experience in society formation, society handover processes, governance, elections, training programs, administration, accounting, statutory compliances, deemed conveyance, and redevelopment matters. A qualified G.D.C.A. (Government Diploma in Co-operation and Accountancy) professional, he has worked extensively with housing societies, supporting managing committees in addressing regulatory, operational, financial, and member-related challenges.",
      fullBio: "With a deep understanding of the co-operative housing sector, Sudhir provides valuable guidance on society formation, builder-to-society handover, committee management, statutory audits, accounting and financial management, elections, deemed conveyance, redevelopment, and compliance requirements. His practical approach and domain expertise help housing societies strengthen governance, ensure regulatory compliance, and achieve smooth, transparent, and achieve smooth, transparent, and efficient administration.",
      image: "/Team/Sudhir.jpeg?v=2"
    },
    {
      name: "Gauri Ghadi",
      role: "B. Com",
      bioSnippet: "Gauri Ghadi, B. Com, is an experienced Accounts & Taxation Professional with over 10 years of expertise in accounting, financial reporting, GST and TDS compliance, and Income Tax Return filing.",
      fullBio: "She specializes in managing end-to-end accounting functions and statutory compliances with precision and efficiency. Her commitment to accuracy and timely execution helps clients maintain strong financial and regulatory compliance standards.",
      image: "/Team/Gauri.jpeg?v=2"
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder's Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="mb-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#081125] via-[#112444] to-[#081125] p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(8,_17,_37,_0.3)] border border-[#c29b62]/30"
        >
          {/* Decorative glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c29b62] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c29b62] via-[#e8c88f] to-[#c29b62] mb-8 tracking-tight">
              Founder's Message
            </h2>

            <div className="max-w-4xl space-y-6 text-gray-200 text-base md:text-[17px] leading-relaxed font-light">
              <p className="text-lg md:text-xl font-medium text-white">Dear Clients, Partners, and Visitors,</p>

              <p>
                At ConsultAvenuee, we are committed to simplifying compliance, taxation, governance, and advisory matters through professional expertise and client-focused solutions. Our goal is to be a trusted partner for businesses, housing societies, NRIs, and senior citizens by delivering reliable guidance, practical solutions, and exceptional service.
              </p>

              <p>
                I sincerely thank our clients, associates, and well-wishers for their continued confidence and support. We look forward to partnering with you and contributing to your success with integrity, expertise, and dedication.
              </p>

              <p>
                Thank you for your trust. We look forward to supporting your growth, compliance, and long-term success.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center w-full max-w-md mx-auto">
              <p className="text-base font-medium text-gray-300 mb-2 italic">Warm Regards,</p>
              <h3 className="text-2xl font-bold text-white tracking-wide">Manoj Kumar Keshri<span className="text-[#c29b62] text-lg font-medium">, FCA</span></h3>
              <p className="text-sm text-[#c29b62] tracking-wider uppercase mt-1 mb-2">Founder & Chairman</p>
              <div className="h-[2px] w-12 bg-[#c29b62] mb-2"></div>
              <p className="text-sm font-bold text-white tracking-[0.2em] uppercase">ConsultAvenuee</p>
            </div>
          </div>
        </motion.div>

        {/* Header for Team List */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-[44px] font-black text-[#081125] dark:text-white mb-4 tracking-tight">
            Meet Our Leadership Team
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
                  <div className="text-gray-500 dark:text-gray-400 mb-5 flex flex-col gap-1" style={{ fontSize: "14px" }}>
                    <span>{member.role}</span>
                    {member.credentials && <span className="font-semibold text-gray-700 dark:text-gray-300">{member.credentials}</span>}
                  </div>

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
