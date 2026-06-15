import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ConsultAvenuee',
  description: 'Privacy Policy for ConsultAvenuee.com',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a122a] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-[#210821] dark:text-white mb-6 uppercase tracking-tight">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-[#210821] dark:prose-headings:text-[#c79d62] prose-a:text-[#c79d62] hover:prose-a:text-[#c79d62]/80">
          <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: June 2026</p>
          <p>
            At ConsultAvenuee.com ("we", "our", "us") which has the copyright and ownership of Prime Consultancy Private Limited, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit www.consultavenuee.com ("Website") or engage our services.
          </p>

          <h3 className="text-xl mt-8 mb-4">1. Information We Collect</h3>
          <p>We may collect the following information:</p>
          <h4 className="text-lg mt-4 mb-2">Personal Information</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Name</li>
            <li>Email Address</li>
            <li>Mobile Number</li>
            <li>Company Name</li>
            <li>Address</li>
            <li>PAN, GSTIN, CIN or other business-related details</li>
            <li>Information submitted through enquiry forms</li>
          </ul>
          <h4 className="text-lg mt-4 mb-2">Technical Information</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Device Information</li>
            <li>Website Usage Data</li>
            <li>Cookies and Analytics Data</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">2. How We Use Your Information</h3>
          <p>We may use your information to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Respond to enquiries and consultation requests</li>
            <li>Provide professional advisory and compliance services directly or through associates</li>
            <li>Process registrations, filings, and documentation</li>
            <li>Improve website functionality and user experience</li>
            <li>Communicate service updates and important notices</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">3. Information Sharing</h3>
          <p>We do not sell, rent, or trade personal information.</p>
          <p>Information may be shared with:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Government and regulatory authorities where required</li>
            <li>Professional affiliates, consultants, or service providers assisting in service delivery</li>
            <li>Technology and hosting service providers</li>
            <li>Legal authorities when required under applicable laws</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">4. Data Security</h3>
          <p>
            We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-xl mt-8 mb-4">5. Cookies</h3>
          <p>
            Our Website may use cookies and analytics tools to improve user experience and understand website usage patterns. Users may disable cookies through browser settings; however, certain website features may not function properly.
          </p>

          <h3 className="text-xl mt-8 mb-4">6. Data Retention</h3>
          <p>We retain personal information only for as long as necessary to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Provide services</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Maintain business records</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">7. Your Rights</h3>
          <p>Subject to applicable laws, you may:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Request access to your information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion where legally permissible</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">8. Third-Party Websites</h3>
          <p>
            Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites.
          </p>

          <h3 className="text-xl mt-8 mb-4">9. Children's Privacy</h3>
          <p>
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors.
          </p>

          <h3 className="text-xl mt-8 mb-4">10. Changes to this Policy</h3>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Updated versions will be posted on this page.
          </p>

          <h3 className="text-xl mt-8 mb-4">11. Contact Us</h3>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mt-6">
            <p className="font-bold text-[#210821] dark:text-white mb-2">Prime Consultancy Private Limited</p>
            <p className="text-slate-600 dark:text-slate-300 space-y-1">
              <span className="block">Hubtown Solaris One, Unit Number -1205, Prof N S Phadke Marg,</span>
              <span className="block">Opp Teli Gali, Vijay Nagar, Andheri East-Mumbai-400069, Maharashtra.</span>
              <span className="block mt-2"><strong>Phone:</strong> +91 9076111021 / 9076111813</span>
              <span className="block"><strong>Email:</strong> <a href="mailto:info@consultavenuee.com" className="text-[#c79d62] hover:underline">info@consultavenuee.com</a></span>
              <span className="block"><strong>Website:</strong> <a href="https://www.consultavenuee.com" className="text-[#c79d62] hover:underline">www.consultavenuee.com</a></span>
            </p>
          </div>
          <p className="mt-4">For privacy-related concerns, please contact us at the above email address.</p>
        </div>
      </div>
    </div>
  );
}
