"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { 
  ShieldCheck, 
  Target, 
  HeartHandshake, 
  Briefcase, 
  Building, 
  Globe, 
  Users,
  CheckCircle2,
  TrendingUp,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useApp();

  const values = [
    {
      title: "Our Mission",
      desc: "To be a trusted partner in our clients' growth journey by delivering high-quality advisory, compliance, taxation, and business support services. We strive to provide innovative, practical, and cost-effective solutions while upholding the highest standards of professionalism, ethics, and integrity.",
      icon: Target,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Our Vision",
      desc: "To be the preferred business advisory and compliance platform for entrepreneurs, SMEs, corporates, housing societies, and individuals by delivering trusted expertise, innovative solutions, and long-term value creation.",
      icon: Globe,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      title: "Our Values",
      desc: "We are committed to maintaining integrity in our efforts, excellence in our services, and fulfilling our commitments to our clients. We adhere to the philosophy of mutual respect in all our dealings with clients and stakeholders.",
      icon: HeartHandshake,
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    }
  ];

  const whatWeDo = [
    "Business Registrations",
    "Cooperative Housing Society Management & Compliance",
    "Taxation & GST",
    "Corporate Compliance & Secretarial Services",
    "Government Registrations",
    "HR & Labour Law Compliances",
    "Senior Citizen Advisory Services",
    "NRI Services",
    "Virtual CFO (vCFO) Services"
  ];

  const whyChooseUs = [
    "Experienced Team of Professionals",
    "Personalized Advisory Approach",
    "Dedicated Professional Support",
    "Cost-Effective Solutions",
    "Timely Compliance Management",
    "End-to-End Business Support",
    "Transparent & Ethical Practices",
    "Strong Governance Focus"
  ];

  const team = [
    {
      name: "Shobhit Gupta",
      credentials: "CA, CMA (USA)",
      role: "Taxation & Advisory Professional",
      desc: "Over 15 years of post-qualification experience in domestic and international taxation. Having worked with EY and multinational organizations across Europe, the Middle East, North Africa, and Asia-Pacific, he brings a strong global perspective to tax and business advisory services including Corporate Tax, Transfer Pricing, and BEPS.",
      exp: "15+ Years"
    },
    {
      name: "Pradosh Kumar Roy",
      credentials: "CA (Inter), PGDFM, DIM",
      role: "Finance, Taxation & Compliance Advisor",
      desc: "Over 25 years of experience in accounting, taxation, statutory compliance, and business advisory. He possesses extensive expertise in GST, Income Tax, EPFO, ESIC, and MCA compliances, helping businesses strengthen governance and improve operational efficiency.",
      exp: "25+ Years"
    },
    {
      name: "Asim Bhaumick",
      credentials: "M. Com, ICWAI, PGDFM, DIM",
      role: "Labour Law & Statutory Compliance Advisor",
      desc: "Over 25 years of experience in Accounting, Taxation, Labour Laws, and Statutory Compliance. He provides advisory services enabling businesses in Education, Healthcare, Hospitality, and Travel sectors to operate efficiently while maintaining strong governance standards.",
      exp: "25+ Years"
    },
    {
      name: "Sudhir Gupta",
      credentials: "B. Com, G.D.C.A.",
      role: "Co-operative Housing Society Advisor",
      desc: "Over 16 years of experience in society formation, handover processes, governance, elections, deemed conveyance, and redevelopment matters. He provides practical guidance to help housing societies strengthen governance and ensure regulatory compliance.",
      exp: "16+ Years"
    },
    {
      name: "Gauri Ghadi",
      credentials: "B. Com",
      role: "Accounts & Taxation Professional",
      desc: "Over 10 years of expertise in accounting, financial reporting, GST and TDS compliance, and Income Tax Return filing. Her commitment to accuracy and timely execution helps clients maintain strong financial and regulatory compliance standards.",
      exp: "10+ Years"
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
            Welcome to ConsultAvenuee
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
            Your Business Advisory, Compliance <br className="hidden sm:block" /> & Growth Partner
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Backed by a team of experienced Chartered Accountants, Company Secretaries, Legal Professionals, and Business Advisors, we provide comprehensive solutions that help businesses start, grow, and remain compliant.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
              Who We Are
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                ConsultAvenuee serves Startups, SMEs, Corporates, NRIs, Housing Societies, and Senior Citizens. Founded with the vision of making professional advisory services accessible and affordable, we act as your trusted Advisor and Compliance Partner, delivering personalized solutions tailored to your unique business requirements.
              </p>
              <p>
                At ConsultAvenuee, we believe in building long-term relationships. Our success is closely linked to the success of our clients, and we are committed to creating lasting value through trusted partnerships.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
               <div className="flex items-center gap-3">
                 <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Users className="h-6 w-6" />
                 </div>
                 <div>
                   <div className="font-bold text-slate-900 dark:text-white text-xl">Client-Centric</div>
                   <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Approach</div>
                 </div>
               </div>
               <div className="flex items-center gap-3 ml-8">
                 <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-6 w-6" />
                 </div>
                 <div>
                   <div className="font-bold text-slate-900 dark:text-white text-xl">Ethical</div>
                   <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Practices</div>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`glass p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                  <div className={`h-12 w-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO & WHY CHOOSE US */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* What We Do */}
            <div>
              <div className="mb-8">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">Our Services</span>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">What We Do</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  Our objective is to simplify business operations by providing end-to-end professional support through a single, reliable platform.
                </p>
              </div>
              <ul className="space-y-4">
                {whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <div className="mb-8">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">Our Differentiator</span>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">Why Clients Trust Us</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  Our professionals work closely with clients to understand their requirements and deliver practical, business-oriented solutions that create measurable value.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="glass-premium p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-3">
                    <Award className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUNDER SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-premium rounded-3xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
            <div className="lg:col-span-5 bg-slate-200 dark:bg-slate-800 relative min-h-[400px]">
              {/* Fallback image for the founder if image isn't available */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                alt="Manoj Kumar Keshri"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">Manoj Kumar Keshri</h3>
                  <p className="text-indigo-300 font-bold text-sm tracking-wider uppercase mt-1">Founder & Chairman</p>
                  <p className="text-slate-300 text-xs mt-1">FCA, CS (I), Mini-MBA</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                About Our Founder
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  <strong>Manoj Kumar Keshri</strong> is a seasoned business advisor with over <strong>34+ years</strong> of professional experience. He advises Co-operative Housing Societies, SMEs, Start-ups, Traders, Freelancers, NRIs, HNIs, Senior Citizens, and business enterprises across the Real Estate, FMCG, Hospitality, Healthcare, Media, and Sports sectors.
                </p>
                <p>
                  Known for his practical approach and commitment to client success, he continues to guide businesses and institutions through an evolving regulatory and business landscape. His expertise in governance, regulatory compliance, and strategic advisory has helped organizations build strong foundations for sustainable growth and long-term success.
                </p>
                <p>
                  At ConsultAvenuee, he leads the firm's vision of delivering integrated advisory, compliance, taxation, and governance solutions, empowering clients to navigate an increasingly complex business and regulatory environment with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
              Expert Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Meet Our Senior Professionals
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              A professionally managed platform representing a combination of specialized skills geared to offer quality advisory and personalized proactive services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-premium p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 relative flex flex-col hover-3d"
              >
                <div className="mb-6">
                  {/* Initial Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5">
                    {member.name.split(" ")[0][0]}
                    {member.name.split(" ")[1] ? member.name.split(" ")[1][0] : ""}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-500 mb-2 mt-1">
                    {member.credentials}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                    {member.role}
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {member.desc}
                  </p>
                </div>
                <div className="mt-auto pt-5 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center">
                   <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Experience</span>
                   <span className="text-sm font-bold text-slate-900 dark:text-white">{member.exp}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Partner with ConsultAvenuee for trusted expertise, innovative solutions, and long-term value creation. Let's navigate the complex business and regulatory environment together.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-14 items-center justify-center px-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-transform hover:-translate-y-1"
        >
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}
