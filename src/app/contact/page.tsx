"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Mail, Phone, MapPin, Calendar, Clock, Landmark, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function ContactPageContent() {
  const { t } = useApp();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    query: ""
  });
  const [activeOffice, setActiveOffice] = useState("mumbai");

  const services = [
    {
      title: "Housing Society Advisory",
      desc: "Society Compliance & Governance…",
      href: "/services#society-management",
    },
    {
      title: "Business Formation, Registration & Compliance",
      desc: "Build. Comply. Grow…",
      href: "/services#compliance-business-advisory",
    },
    {
      title: "Tax & Litigation Services",
      desc: "Taxation & Litigation Experts…",
      href: "/services#taxation-regulatory-litigation",
    },
    {
      title: "NRI Services",
      desc: "NRI Tax & Property Solutions…",
      href: "/services#nri-services",
    },
    {
      title: "Senior Citizen Advisory Services",
      desc: "Senior Citizen Support Services…",
      href: "/services#senior-citizen-advisory",
    },
  ];

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
    const message = `*📋 Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Location:* ${formData.location || ""}%0A*Query/Services:* ${formData.query}`;
    window.open(`https://wa.me/919076111021?text=${message}`, "_blank");
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-[#0f0a1a]">
        {/* LEFT SIDE: Form */}
        <div className="p-6 sm:p-8 border-r border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
            Schedule Your Consultation
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Fill in your details and we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 2: Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, State"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 3: Query */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Your Query / Services
              </label>
              <textarea
                name="query"
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                rows={4}
                placeholder="Tell us about your requirements…"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-widest shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              Book Consultation Slot
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: Services */}
        <div className="p-6 sm:p-8 bg-slate-50/50 dark:bg-[#120a1e]">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
            Our Services
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Explore our expertise areas
          </p>

          <div className="space-y-3">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#1a1030] border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/30 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    {service.desc}{" "}
                    <span className="text-amber-600 dark:text-amber-400 font-bold">
                      Learn more
                    </span>
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors flex-shrink-0 ml-3 group-hover:translate-x-1 transform duration-200" />
              </Link>
            ))}
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
