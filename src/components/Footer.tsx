"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Mail, Phone, MapPin, Send, HelpCircle, Briefcase, Award, ChevronRight, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  const { t, theme } = useApp();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    const particleCount = 18;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines connecting particles
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      {/* Dynamic Gold Pre-Footer Banner with Animated Connecting Nodes */}
      <div className="w-full bg-[#c79d62] py-8 text-white relative overflow-hidden flex items-center min-h-[90px]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#1b071b] text-center sm:text-left tracking-tight lowercase">
            Looking for Expert Advisory & Compliance Solutions?
          </h3>
          <a
            href="tel:+919076111021"
            className="flex items-center gap-2 px-6 py-3 bg-[#110311] hover:bg-[#1f091f] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Call Us
            <ChevronRight className="w-4 h-4 text-[#c79d62]" />
          </a>
        </div>
      </div>

      <footer className="w-full bg-[#0a0a0f] text-slate-300 font-sans border-t border-[#1a1a24]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

            {/* Column 1: Brand & Mission */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="flex items-center">
                <img src="/White_Logo-removebg-preview.png" alt="ConsultAvenuee" className="w-auto h-[56px] object-contain origin-left" />
              </Link>
              <p className="text-[13px] leading-relaxed text-slate-400 font-medium">
                ConsultAvenuee is a trusted business advisory and compliance firm offering business registration, GST, income tax, TDS, accounting, ROC compliance, audit, legal, and regulatory solutions for startups, SMEs, corporates, housing societies, NRIs, and individuals across India.
              </p>
              <div className="flex flex-col gap-3 text-[13px] font-medium text-slate-400 mt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#c79d62] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-2">
                    <Link href="/contact?office=mumbai" className="group text-[#c79d62] font-semibold hover:text-white transition-colors flex items-center gap-1.5">Mumbai <span className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span></Link>
                    <Link href="/contact?office=kolkata" className="group text-[#c79d62] font-semibold hover:text-white transition-colors flex items-center gap-1.5">Kolkata <span className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span></Link>
                    <Link href="/contact?office=delhi" className="group text-[#c79d62] font-semibold hover:text-white transition-colors flex items-center gap-1.5">Delhi <span className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span></Link>
                    <Link href="/contact?office=siliguri" className="group text-[#c79d62] font-semibold hover:text-white transition-colors flex items-center gap-1.5">Siliguri <span className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span></Link>
                  </div>
                </div>
                <span className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-[#c79d62] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919076111021" className="hover:text-white transition-colors">+91 9076111021</a>
                    <a href="tel:+919076111813" className="hover:text-white transition-colors">+91 9076111813</a>
                  </div>
                </span>
                <span className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#c79d62] shrink-0" />
                  <a href="mailto:info@consultavenuee.com" className="hover:text-white transition-colors">info@consultavenuee.com</a>
                </span>
              </div>
              <div className="flex gap-2.5 mt-2">
                <a href="#" className="w-[34px] h-[34px] rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#c79d62] hover:text-white transition-colors group">
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="w-[34px] h-[34px] rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#c79d62] hover:text-white transition-colors group">
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href="#" className="w-[34px] h-[34px] rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#c79d62] hover:text-white transition-colors group">
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="#" className="w-[34px] h-[34px] rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#c79d62] hover:text-white transition-colors group">
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="#" className="w-[34px] h-[34px] rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#c79d62] hover:text-white transition-colors group">
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.078 0 12 0 12s0 3.922.501 5.814a3.016 3.016 0 002.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 002.122-2.136C24 15.922 24 12 24 12s0-3.922-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links - Services */}
            <div>
              <h3 className="text-[17px] font-medium text-white mb-5 tracking-wide">Services</h3>
              <div className="w-full h-px bg-slate-800 mb-6"></div>
              <ul className="flex flex-col gap-3 text-[13.5px] font-medium">
                <li>
                  <Link href="/services#housing-society-advisory" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    Housing Society Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/services#business-formation-registration-compliance" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    Business Formation, Registration & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/services#taxation-regulatory-litigation" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    Tax & Litigation Services
                  </Link>
                </li>
                <li>
                  <Link href="/services#nri-services" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    NRI Services
                  </Link>
                </li>
                <li>
                  <Link href="/services#senior-citizen-advisory-services" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    Senior Citizen Advisory Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links - Tools */}
            <div>
              <h3 className="text-[17px] font-medium text-white mb-5 tracking-wide">Useful Resources</h3>
              <div className="w-full h-px bg-slate-800 mb-6"></div>
              <ul className="flex flex-col gap-3 text-[13.5px] font-medium">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    Our team
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-400 hover:text-[#c79d62] transition-colors">
                    FAQ centre
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter Subscribe */}
            <div>
              <h3 className="text-[17px] font-medium text-white mb-5 tracking-wide">Stay Compliant</h3>
              <div className="w-full h-px bg-slate-800 mb-6"></div>
              <p className="text-[13px] text-slate-400 mb-5 leading-relaxed font-medium">
                Get monthly updates on tax laws, notifications, and saving tips directly in your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex h-[42px] w-full mb-4 group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 h-full px-4 bg-white text-slate-800 text-[13px] font-medium focus:outline-none placeholder:text-slate-400 placeholder:font-medium"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center h-full w-[46px] bg-[#c79d62] hover:bg-[#b08852] text-[#1b071b] transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {subscribed && (
                <span className="text-[12px] font-bold text-[#c79d62] mt-3 block">
                  ✓ Successfully subscribed!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-800/80 bg-[#07070b]">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-slate-500 font-medium gap-4">
            <span>
              © {new Date().getFullYear()} Prime Consultancy Pvt. Ltd. All rights reserved.
            </span>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <Link href="/privacy" className="hover:text-[#c79d62] transition-colors">
                Privacy policy
              </Link>
              <Link href="/terms" className="hover:text-[#c79d62] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/confidentiality" className="hover:text-[#c79d62] transition-colors">
                Confidentiality Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-[#c79d62] transition-colors">
                Disclaimer Policy
              </Link>
              <Link href="/refund" className="hover:text-[#c79d62] transition-colors">
                Refund & Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
