"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Mail, Phone, MapPin, Calendar, Clock, Landmark, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function ContactPageContent() {
  const { t } = useApp();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    turnover: "under_20l",
    query: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState("mumbai");

  useEffect(() => {
    const officeParam = searchParams.get("office");
    if (officeParam) {
      const lowerOfficeParam = officeParam.toLowerCase();
      if (["mumbai", "kolkata", "delhi", "siliguri"].includes(lowerOfficeParam)) {
        setActiveOffice(lowerOfficeParam);
      }
    }
  }, [searchParams]);

  const offices = [
    {
      id: "mumbai",
      name: "Mumbai Office",
      image: "/Office%20Picture/Mumbai.jpg",
      mapSrc: "https://maps.google.com/maps?q=Hubtown+Solaris+One,+Unit+1205,+Andheri+East,+Mumbai&output=embed",
      mapLink: "https://maps.app.goo.gl/ovpt6WYj1QbEvKWz5?g_st=aw",
      address: "Hubtown Solaris One, Unit Number -1205, Prof N S Phadke Marg, Opp Teli Gali, Vijay Nagar, Andheri East-Mumbai-400069, Maharashtra.",
      phone: "+91 9076111021 / 9076111813 / 7045348228",
      email: "info@consultavenuee.com",
    },
    {
      id: "kolkata",
      name: "Kolkata Office",
      image: "/Office%20Picture/Kokata.jpg",
      mapSrc: "https://maps.google.com/maps?q=Poddar+Court,+Gate+1,+Rabindra+Sarani,+Kolkata&output=embed",
      mapLink: "https://maps.app.goo.gl/rcYmpno8MA87Kh5j6?g_st=aw",
      address: "Poddar Court, Gate No. 1, Room No. 846, 8th Floor, 18, Rabindra Sarani, Kolkata – 700001, West Bengal.",
      phone: "+91 9836355246 / +91 9830914009",
      email: "info@consultavenuee.com",
    },
    {
      id: "delhi",
      name: "Delhi Office",
      image: "/Office%20Picture/Delhi.jpg",
      mapSrc: "https://maps.google.com/maps?q=46+State+Bank+Colony,+GT+Karnal+Road,+Delhi&output=embed",
      mapLink: "https://maps.app.goo.gl/Zzcjy43tHVZzUeJ96?g_st=aw",
      address: "46 State Bank Colony, GT Karnal Road, Delhi- 110009.",
      phone: "+91 9990230099",
      email: "info@consultavenuee.com",
    },
    {
      id: "siliguri",
      name: "Siliguri Office",
      image: "/Office%20Picture/Siliguri.jpg",
      mapSrc: "https://maps.google.com/maps?q=Bidhan+Road+Auto+Stand,+Near+Kamala+Hardware,+Siliguri&output=embed",
      mapLink: "https://maps.app.goo.gl/j5a28fk6FKa9kX4C6?g_st=aw",
      address: "Bidhan Road Auto Stand, Bidhan Road, Near Kamala Hardware, Siliguri – 734001",
      phone: "+91 9836355246 / +91 9830914009",
      email: "info@consultavenuee.com",
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentOffice = offices.find(o => o.id === activeOffice) || offices[0];

  return (
    <div className="pt-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Our Offices Section */}
      <div className="mb-24">

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-amber-600/30 mb-8 w-full rounded-t-xl overflow-hidden shadow-sm">
          {offices.map(office => (
            <button
              key={office.id}
              onClick={() => setActiveOffice(office.id)}
              className={`flex-1 py-5 text-sm sm:text-base font-extrabold tracking-wide transition-colors ${activeOffice === office.id
                ? "bg-[#0a122a] text-amber-500"
                : "bg-[#cca774] text-slate-900 hover:bg-[#ba955f]"
                }`}
            >
              {office.name}
            </button>
          ))}
        </div>

        {/* Office Content Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Photo */}
          <div className="h-[320px] rounded-xl overflow-hidden shadow-lg border-2 border-slate-200/50 dark:border-slate-800/50">
            <img src={currentOffice.image} alt={currentOffice.name} className="w-full h-full object-cover" />
          </div>

          {/* Map */}
          <div className="h-[320px] rounded-xl overflow-hidden shadow-lg bg-slate-100 border-2 border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center justify-center relative group">
            {currentOffice.mapSrc ? (
              <>
                <iframe
                  src={currentOffice.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {currentOffice.mapLink && (
                  <a
                    href={currentOffice.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 font-bold text-xs px-4 py-2 rounded-lg shadow-lg border border-slate-200 transition-all z-10 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-amber-500" />
                    Open in Maps
                  </a>
                )}
              </>
            ) : (
              <div className="text-center p-6 bg-slate-200/50 rounded-xl">
                <MapPin className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <span className="text-sm text-slate-600 font-bold">Map Embed Placeholder</span>
                <p className="text-xs text-slate-500 mt-2">Please provide a Google Maps embed URL for {currentOffice.name}.</p>
              </div>
            )}
          </div>

          {/* Contact Details Card */}
          <div className="h-[320px] rounded-xl shadow-xl bg-[#0a122a] p-8 flex flex-col justify-between text-white border-2 border-[#0a122a]">
            <div>
              <h3 className="text-xl font-bold mb-6 lowercase tracking-wider text-white">contact details</h3>
              <div className="space-y-5 text-xs sm:text-sm font-semibold text-slate-300">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="leading-relaxed">{currentOffice.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>{currentOffice.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>{currentOffice.email}</span>
                </div>
              </div>
            </div>

            {/* Social Icons (matching Navbar options) */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/prime.consultancy.75#" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white text-[#0a122a] flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" /></svg>
              </a>
              <a href="https://x.com/consultavenuee" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white text-[#0a122a] flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/consult-avenuee-a07536179/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white text-[#0a122a] flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
              </a>
              <a href="https://www.instagram.com/consult_avenuee?igsh=MW1mN3pzdXlld251bw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white text-[#0a122a] flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCsGMvEo1L56O7zUm3Lp7c6w" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white text-[#0a122a] flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="text-center mb-16">
        {/* <span className="text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
          ðŸ“ž Let's Connect
        </span> */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
          Book a Free Consultation
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Reach our specialists for diagnostic guidance. Tell us your business scenario and we'll schedule a callback.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 glass-premium p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="e.g. Ramesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="+91 90761 XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Company / Entity
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                    placeholder="e.g. FinTech Pvt Ltd"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Annual Turnover Slabs
                </label>
                <select
                  value={formData.turnover}
                  onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none"
                >
                  <option value="under_20l">Under ₹20 Lakhs (GST Exempt Limit)</option>
                  <option value="20l_1cr">₹20 Lakhs - ₹1 Crore</option>
                  <option value="1cr_5cr">₹1 Crore - ₹5 Crore (Tax Audit Threshold)</option>
                  <option value="above_5cr">Above ₹5 Crore</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Explain your specific scenario / doubt
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                  placeholder="Tell us what challenge you are facing (e.g. got income tax notice, vendor not uploading GST invoice...)"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold shadow-lg shadow-amber-600/15 transition flex items-center justify-center gap-2"
              >
                <Calendar className="h-4.5 w-4.5" /> Book Consultation Slot
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center h-full"
            >
              <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Consultation Request Received!
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                Thanks, <strong>{formData.name}</strong>. An advisory expert has been assigned to review your query regarding <strong>{formData.company || "your business"}</strong>. We will call you within 4 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 hover:underline"
              >
                Submit another request
              </button>
            </motion.div>
          )}
        </div>

        {/* Right Column: Address Details */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {/* Coordinates */}
          <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Corporate Office Coordinates
            </h3>
            <div className="flex gap-4 items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-zinc-800 dark:text-zinc-300 font-bold mb-1">
                  {currentOffice.name}
                </strong>
                {currentOffice.address}
              </div>
            </div>
            <div className="flex gap-4 items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <Mail className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-zinc-800 dark:text-zinc-300 font-bold mb-1">
                  Client Support & Inquiries
                </strong>
                <a href={`mailto:${currentOffice.email}`} className="hover:text-amber-500 transition-colors">{currentOffice.email}</a>
              </div>
            </div>
            <div className="flex gap-4 items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <Phone className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-zinc-800 dark:text-zinc-300 font-bold mb-1">
                  Direct Line
                </strong>
                <span className="text-zinc-600 dark:text-zinc-400">{currentOffice.phone}</span>
              </div>
            </div>
          </div>

          {/* Operating hours */}
          <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex gap-4 items-start">
            <Clock className="h-5 w-5 text-amber-500 shrink-0" />
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <strong className="block text-zinc-800 dark:text-zinc-300 font-bold mb-1">
                Consultation Hours
              </strong>
              Monday - Saturday: 09:30 AM - 06:30 PM (IST)
              <span className="block mt-1 font-semibold text-amber-500">
                ⚠️ Extended hours active during filing season.
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 font-medium animate-pulse">
        Loading contact details...
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
