"use client";

import React from "react";

export default function AboutPage() {
  const sections = [
    {
      title: "Who we are?",
      content: (
        <>
          <p className="mb-3">
            ConsultAvenuee is a "Business Advisory, Compliance & Growth Partner" serving Startups, SMEs, Corporates, NRIs, Housing Societies, and Senior Citizens. Backed by a team of experienced Chartered Accountants, Company Secretaries, Legal Professionals, and Business Advisors, we provide comprehensive solutions that help businesses start, grow, and remain compliant.
          </p>
          <p className="mb-3">
            Founded with the vision of making professional advisory services accessible and affordable, we act as your trusted Advisor and Compliance Partner, delivering personalized solutions tailored to your unique business requirements.
          </p>
          <p>
            At ConsultAvenuee, we believe in building long-term relationships. Our success is closely linked to the success of our clients, and we are committed to creating lasting value through trusted partnerships.
          </p>
        </>
      ),
      // Team meeting / Advisory
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "What We do.",
      content: (
        <>
          <p className="mb-3">We offer a comprehensive range of advisory, compliance, taxation, and business support services, including:</p>
          <ol className="list-decimal pl-5 mb-3 space-y-1 font-medium text-slate-700 dark:text-slate-200">
            <li>Housing Society Management & Compliance</li>
            <li>NRI SERVICES</li>
            <li>Senior Citizen Advisory Services</li>
            <li>Compliance & Business Advisory</li>
            <li>Taxation, Regulatory compliances & Litigation</li>
          </ol>
          <p>Our objective is to simplify business operations by providing end-to-end professional support through a single, reliable platform.</p>
        </>
      ),
      // Calculator and Financial Documents
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Why to Choose Us?",
      content: (
        <>
          <ul className="list-disc pl-5 mb-3 space-y-1 font-medium text-slate-700 dark:text-slate-200">
            <li>Experienced Team of Professionals</li>
            <li>Personalized Advisory Approach</li>
            <li>Dedicated Professional Support</li>
            <li>Cost-Effective Solutions</li>
            <li>Timely Compliance Management</li>
            <li>End-to-End Business Support</li>
          </ul>
          <p>Our professionals work closely with clients to understand their requirements and deliver practical, business-oriented solutions that create measurable value.</p>
        </>
      ),
      // Business Consulting Meeting
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Why Clients Trust Us",
      content: (
        <>
          <ul className="list-disc pl-5 mb-3 space-y-1 font-medium text-slate-700 dark:text-slate-200">
            <li>Client-Centric Approach</li>
            <li>Transparent & Ethical Practices</li>
            <li>Cost & Time Efficiency</li>
            <li>Continuous Professional Support</li>
            <li>Expertise Across Industries</li>
            <li>Strong Governance & Compliance Focus</li>
          </ul>
          <p>ConsultAvenuee is a complete end to end solutions provider and is professionally managed. This platform represents a combination of specialized skills, which are geared to offer quality advisory services and personalized proactive services. The Professionals associates at Consultavenuee.com adopt a customer-centric approach which helps to understand the exact client requirements and providing them with the most effective solutions</p>
        </>
      ),
      // Financial Analysis on Laptop
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OUR CORE VALUE",
      content: (
        <ul className="space-y-3 font-medium text-slate-700 dark:text-slate-200 text-[15px]">
          <li>
            <strong className="text-[#c79d62]">Integrity & Transparency</strong> – Upholding the highest ethical and professional standards.
          </li>
          <li>
            <strong className="text-[#c79d62]">Client-Centric Approach</strong> – Delivering personalized solutions focused on client success.
          </li>
          <li>
            <strong className="text-[#c79d62]">Excellence & Expertise</strong> – Providing high-quality advisory, taxation, and compliance services.
          </li>
          <li>
            <strong className="text-[#c79d62]">Trust & Reliability</strong> – Building long-term relationships through consistent professional support.
          </li>
          <li>
            <strong className="text-[#c79d62]">Timely Compliance & Accountability</strong> – Ensuring accurate, proactive, and timely execution of services.
          </li>
          <li>
            <strong className="text-[#c79d62]">Growth & Value Creation</strong> – Helping clients achieve sustainable growth while minimizing risks and ensuring compliance.
          </li>
        </ul>
      ),
      // Team collaborating
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OUR MISSION",
      content: (
        <p>To be a trusted partner in our clients' growth journey by delivering high-quality advisory, compliance, taxation, and business support services. We strive to provide innovative, practical, and cost-effective solutions while upholding the highest standards of professionalism, ethics, and integrity</p>
      ),
      // Digital charts / Business growth
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OUR VISION",
      content: (
        <p>To be the preferred business advisory and compliance platform for entrepreneurs, SMEs, corporates, housing societies, and individuals by delivering trusted expertise, innovative solutions, and long-term value creation.</p>
      ),
      // Modern Corporate Building
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OUR VALUES",
      content: (
        <p>We are committed in maintaining integrity in our efforts, excellence in our services, commitments to our clients and Committed to the philosophy of mutual respect in all our dealings with clients, and all our stakeholders.</p>
      ),
      // Team hands stacked (Unity/Integrity)
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="w-full h-[400px] md:h-[480px] flex shadow-lg">
          {/* Quote Box - Left Side */}
          <div className="w-full md:w-[45%] lg:w-[42%] bg-[#c79d62] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 text-white">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-bold leading-[1.3] mb-4 tracking-wide">
              Welcome to Consultavenuee.com
            </h2>
            <p className="text-[15px] md:text-base leading-relaxed opacity-95 font-medium">
              Your Business Advisory, Compliance & Growth Partner, backed by a team of experienced Chartered Accountants, Company Secretaries, Legal Professionals, and Business Advisors.
            </p>
          </div>
          
          {/* Background Image - Right Side */}
          <div className="hidden md:block md:w-[55%] lg:w-[58%] h-full">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
              alt="Team Collaborating" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="w-full bg-[#c79d62] py-16 px-4">
        {/* Traits Banner */}
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#1b071b] text-xl md:text-2xl lg:text-3xl font-bold tracking-widest uppercase flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <span>Trusted</span>
            <span className="hidden md:inline-block opacity-50 font-light">|</span> 
            <span>Experienced</span>
            <span className="hidden md:inline-block opacity-50 font-light">|</span> 
            <span>Responsive</span>
            <span className="hidden md:inline-block opacity-50 font-light">|</span> 
            <span>Result-Driven</span>
          </p>
        </div>
      </div>
      
      {/* Spacer before next section */}
      <div className="pt-8"></div>
      {/* HEADER SECTION */}
      <div className="text-center pt-12 pb-12 px-4">
        <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-4 text-sm">About us</h3>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1930] dark:text-white">
          Welcome to Consultavenuee.com
        </h1>
      </div>

      {/* TIMELINE SECTION */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* The Vertical Line (Visible only on desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">
          {sections.map((sec, idx) => {
            const isEven = idx % 2 !== 0;

            return (
              <div key={idx} className={`relative flex flex-col items-stretch w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Timeline Square Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#c29b62] hidden md:block z-10 shadow-[0_0_0_4px_#f8f9fa] dark:shadow-[0_0_0_4px_#020617]" />
                
                {/* Content Side */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:pl-16' : 'md:pr-16'} mb-6 md:mb-0 z-20`}>
                  <div className="bg-white dark:bg-slate-900 p-6 md:p-8 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-slate-800 h-full flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#c79d62]">{sec.title}</h2>
                    <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {sec.content}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`w-full md:w-1/2 flex ${isEven ? 'md:pr-16' : 'md:pl-16'} z-10`}>
                  <img 
                    src={sec.image} 
                    alt={sec.title} 
                    className="w-full h-full min-h-[250px] object-cover shadow-lg"
                  />
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
