import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | ConsultAvenuee',
  description: 'Disclaimer Policy for ConsultAvenuee.com',
};

export default function DisclaimerPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a122a] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-[#210821] dark:text-white mb-6 uppercase tracking-tight">Disclaimer</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-[#210821] dark:prose-headings:text-[#c79d62] prose-a:text-[#c79d62] hover:prose-a:text-[#c79d62]/80">
          <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: June 2026</p>
          <p>
            The information contained on www.consultavenuee.com ("Website") is for general informational and educational purposes only. This website consultavenuee.com has the copyright and ownership of Prime Consultancy Private Limited.
          </p>

          <h3 className="text-xl mt-8 mb-4">1. No Professional Advice</h3>
          <p>
            The content available on this Website, including any articles, blogs, FAQs, guides, calculators, newsletters, and service descriptions, does not constitute:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Legal Advice</li>
            <li>Tax Advice</li>
            <li>Financial Advice</li>
            <li>Investment Advice</li>
            <li>Accounting Advice</li>
            <li>Professional Opinion</li>
          </ul>
          <p>
            Users should seek specific professional advice before making any decisions based on information available on this Website.
          </p>

          <h3 className="text-xl mt-8 mb-4">2. No Client Relationship</h3>
          <p>
            Accessing this Website, downloading materials, sending enquiries, or communicating through contact forms does not create:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>A Consultant-Client Relationship</li>
            <li>A Chartered Accountant-Client Relationship</li>
            <li>A Legal Advisor-Client Relationship</li>
            <li>Any Fiduciary Relationship</li>
          </ul>
          <p>
            A professional relationship is established only upon execution of a formal engagement letter or service agreement.
          </p>

          <h3 className="text-xl mt-8 mb-4">3. Accuracy of Information</h3>
          <p>
            While we make reasonable efforts to keep information current and accurate, laws, regulations, notifications, judicial decisions, and compliance requirements may change frequently.
          </p>
          <p>
            ConsultAvenuee.com does not warrant that all information on the Website is complete, accurate, current, or suitable for any particular purpose.
          </p>

          <h3 className="text-xl mt-8 mb-4">4. Limitation of Liability</h3>
          <p>
            ConsultAvenuee.com shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Reliance on Website content</li>
            <li>Use of information provided on the Website</li>
            <li>Errors, omissions, inaccuracies, or delays</li>
            <li>Business or financial decisions taken by users</li>
          </ul>
          <p>
            Users assume full responsibility for any actions taken based on Website information.
          </p>

          <h3 className="text-xl mt-8 mb-4">5. External Links Disclaimer</h3>
          <p>
            This Website may contain links to external websites.
          </p>
          <p>
            ConsultAvenuee.com does not control, endorse, or guarantee the accuracy, reliability, or content of third-party websites and shall not be responsible for their practices or policies.
          </p>

          <h3 className="text-xl mt-8 mb-4">6. Professional Services Disclaimer</h3>
          <p>
            Professional services offered by ConsultAvenuee.com are subject to separate engagement terms, service agreements, and applicable professional standards.
          </p>
          <p>
            The scope, timelines, fees, responsibilities, and limitations applicable to a specific engagement shall be governed by the relevant engagement documents.
          </p>

          <h3 className="text-xl mt-8 mb-4">7. Regulatory Compliance</h3>
          <p>
            Users are solely responsible for ensuring compliance with applicable laws, regulations, filing requirements, and deadlines relevant to their circumstances.
          </p>

          <h3 className="text-xl mt-8 mb-4">8. Intellectual Property</h3>
          <p>
            All content, branding, logos, graphics, text, and materials on this Website are the intellectual property of Prime Consultancy Private Limited, which owns the brand ConsultAvenuee.com unless otherwise stated and may not be reproduced without prior written consent.
          </p>

          <h3 className="text-xl mt-8 mb-4">9. Contact Information</h3>
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
        </div>
      </div>
    </div>
  );
}
