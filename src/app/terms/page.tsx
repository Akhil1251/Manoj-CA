import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ConsultAvenuee',
  description: 'Terms and Conditions for ConsultAvenuee.com',
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a122a] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-[#210821] dark:text-white mb-6 uppercase tracking-tight">Terms & Conditions</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-[#210821] dark:prose-headings:text-[#c79d62] prose-a:text-[#c79d62] hover:prose-a:text-[#c79d62]/80">
          <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: June 2026</p>
          <p>
            Welcome to ConsultAvenuee.com ("Company", "we", "our", "us"). By accessing or using www.consultavenuee.com ("Website"), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with these Terms, please refrain from using this Website. This website has the copyright and ownership of Prime Consultancy Private Limited.
          </p>

          <h3 className="text-xl mt-8 mb-4">1. About ConsultAvenuee.com</h3>
          <p>ConsultAvenuee.com is a business advisory and compliance platform providing services including but not limited to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Business Registration & Incorporation</li>
            <li>GST, Income Tax & TDS Compliance</li>
            <li>Accounting & Bookkeeping</li>
            <li>ROC & Corporate Compliance</li>
            <li>Audit Support Services</li>
            <li>Housing Society Compliance Services</li>
            <li>NRI Taxation & Property Advisory</li>
            <li>Senior Citizen Advisory Services</li>
            <li>Business Consulting & Regulatory Support</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">2. Acceptance of Terms</h3>
          <p>
            By accessing this Website, submitting an enquiry, requesting a consultation, or engaging our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
          </p>

          <h3 className="text-xl mt-8 mb-4">3. Use of Website</h3>
          <p>You agree to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Use this Website only for lawful purposes.</li>
            <li>Provide accurate and complete information when submitting enquiries.</li>
            <li>Not attempt to gain unauthorized access to any portion of the Website.</li>
            <li>Not misuse, copy, reproduce, distribute, or exploit Website content without written permission.</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">4. No Professional Relationship</h3>
          <p>
            Accessing this Website or submitting an enquiry does not create a client-consultant, legal advisor-client, chartered accountant-client, or any fiduciary relationship unless a formal engagement letter or service agreement has been executed and accepted by both parties.
          </p>

          <h3 className="text-xl mt-8 mb-4">5. Information & Advisory Disclaimer</h3>
          <p>The content available on this Website is provided for general informational purposes only. While we strive to keep information accurate and updated:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>We do not guarantee completeness, accuracy, or suitability for any specific purpose.</li>
            <li>Information should not be construed as legal, tax, accounting, financial, investment, or professional advice.</li>
            <li>Users should seek professional consultation before acting upon any information available on this Website.</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">6. Client Responsibilities</h3>
          <p>Clients engaging our services agree to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Provide complete, accurate, and timely information and documents.</li>
            <li>Verify all information submitted to regulatory authorities.</li>
            <li>Review filings, applications, and reports before approval.</li>
            <li>Cooperate in a timely manner to avoid delays.</li>
          </ul>
          <p>ConsultAvenuee.com shall not be responsible for losses arising from incomplete, inaccurate, delayed, or misleading information provided by clients.</p>

          <h3 className="text-xl mt-8 mb-4">7. Fees & Payments</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Fees quoted are exclusive of government charges, statutory fees, taxes, penalties, and third-party expenses unless specifically stated otherwise.</li>
            <li>Professional fees are payable as per the agreed proposal or engagement letter.</li>
            <li>Fees once paid are generally non-refundable unless otherwise agreed in writing.</li>
            <li>Delays in payment may result in suspension of services.</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">8. Intellectual Property Rights</h3>
          <p>
            All Website content including text, graphics, logos, designs, service descriptions, documents, and materials are the exclusive property of ConsultAvenuee.com unless otherwise stated. No content may be copied, reproduced, distributed, or used for commercial purposes without prior written consent.
          </p>

          <h3 className="text-xl mt-8 mb-4">9. Third-Party Links</h3>
          <p>
            This Website may contain links to third-party websites for informational convenience. ConsultAvenuee.com does not endorse or assume responsibility for the content, policies, services, or practices of such third-party websites.
          </p>

          <h3 className="text-xl mt-8 mb-4">10. Limitation of Liability</h3>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>ConsultAvenuee.com shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from use of this Website.</li>
            <li>We shall not be responsible for business losses, revenue losses, data losses, penalties, or missed opportunities resulting from reliance on Website information.</li>
            <li>Our liability for any professional engagement shall be limited to the professional fees paid for the specific service giving rise to the claim.</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">11. Confidentiality</h3>
          <p>
            We take reasonable measures to maintain confidentiality of information shared by clients. However, information may be disclosed where required by law, regulatory authorities, courts, or governmental agencies.
          </p>

          <h3 className="text-xl mt-8 mb-4">12. Indemnification</h3>
          <p>You agree to indemnify and hold harmless ConsultAvenuee.com, its directors, consultants, employees, affiliates, and partners from any claims, damages, liabilities, costs, or expenses arising from:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Your misuse of the Website.</li>
            <li>Violation of these Terms.</li>
            <li>Submission of inaccurate information.</li>
            <li>Breach of applicable laws.</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">13. Website Availability</h3>
          <p>
            We do not guarantee uninterrupted, secure, or error-free operation of the Website. We reserve the right to modify, suspend, or discontinue any part of the Website without notice.
          </p>

          <h3 className="text-xl mt-8 mb-4">14. Privacy Policy</h3>
          <p>
            Your use of this Website is also governed by our Privacy Policy, which forms an integral part of these Terms & Conditions.
          </p>

          <h3 className="text-xl mt-8 mb-4">15. Governing Law & Jurisdiction</h3>
          <p>
            These Terms & Conditions shall be governed by the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.
          </p>

          <h3 className="text-xl mt-8 mb-4">16. Modifications</h3>
          <p>
            ConsultAvenuee.com reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the Website constitutes acceptance of the revised Terms.
          </p>

          <h3 className="text-xl mt-8 mb-4">17. Contact Information</h3>
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
