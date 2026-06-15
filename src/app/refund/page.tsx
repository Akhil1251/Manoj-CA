import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | ConsultAvenuee',
  description: 'Refund & Cancellation Policy for ConsultAvenuee.com',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a122a] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-[#210821] dark:text-white mb-6 uppercase tracking-tight">Refund & Cancellation Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-[#210821] dark:prose-headings:text-[#c79d62] prose-a:text-[#c79d62] hover:prose-a:text-[#c79d62]/80">
          <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: June 2026</p>
          <p>
            At ConsultAvenuee.com ("we", "our", "us"), we strive to provide high-quality advisory, taxation, compliance, and business support services. This Refund & Cancellation Policy outlines the terms governing cancellations, refunds, and service-related payments. This website consultavenuee.com has the copyright and ownership of Prime Consultancy Private Limited.
          </p>

          <h3 className="text-xl mt-8 mb-4">1. Scope</h3>
          <p>This policy applies to all services offered by ConsultAvenuee.com, including but not limited to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Business Registration & Incorporation</li>
            <li>GST Registration & Compliance</li>
            <li>Income Tax & TDS Services</li>
            <li>Accounting & Bookkeeping</li>
            <li>ROC & Corporate Compliance</li>
            <li>Audit Support Services</li>
            <li>Housing Society Compliance Services</li>
            <li>NRI Taxation & Property Advisory</li>
            <li>Senior Citizen Advisory Services</li>
            <li>Business Consulting & Regulatory Services</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">2. Cancellation by Client</h3>
          <p>
            Clients may request cancellation of services by submitting a written request via email. Cancellation requests shall be considered based on the stage of service completion and work already performed.
          </p>

          <h3 className="text-xl mt-8 mb-4">3. Non-Refundable Charges</h3>
          <p>The following amounts are non-refundable:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Government fees</li>
            <li>Statutory filing fees</li>
            <li>Registration charges</li>
            <li>Stamp duty</li>
            <li>Taxes paid to government authorities</li>
            <li>Third-party professional fees</li>
            <li>Out-of-pocket expenses incurred on behalf of the client</li>
          </ul>
          <p>Such amounts are paid to external agencies and cannot be recovered by ConsultAvenuee.com</p>

          <h3 className="text-xl mt-8 mb-4">4. Refund Eligibility</h3>
          <p>Refund requests may be considered under the following circumstances:</p>
          
          <h4 className="text-lg mt-4 mb-2">Eligible for Partial Refund</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Service cancelled before substantial work has commenced.</li>
            <li>Required documents have not been reviewed or processed.</li>
            <li>No filing, application, or submission has been made with any authority.</li>
          </ul>

          <h4 className="text-lg mt-4 mb-2">Not Eligible for Refund</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Service has been completed.</li>
            <li>Filing, registration, application, or submission has already been made.</li>
            <li>Advisory or consultation has been provided.</li>
            <li>Work has commenced based on client instructions.</li>
            <li>Delay or non-completion is caused by the client's failure to provide information, documents, approvals, or payments.</li>
          </ul>

          <h3 className="text-xl mt-8 mb-4">5. Professional Fees</h3>
          <p>
            Professional fees paid for services already rendered, consultations conducted, documents prepared, reviews completed, or advisory provided shall generally be non-refundable.
          </p>
          <p>
            Any refund approved by ConsultAvenuee.com shall be at its sole discretion after considering the nature and extent of work performed.
          </p>

          <h3 className="text-xl mt-8 mb-4">6. Service Delays</h3>
          <p>ConsultAvenuee.com shall not be liable for delays arising due to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Government authorities</li>
            <li>Regulatory bodies</li>
            <li>Technical portal issues</li>
            <li>Third-party service providers</li>
            <li>Incomplete documentation from clients</li>
            <li>Delayed approvals or responses from clients</li>
          </ul>
          <p>Such delays shall not constitute grounds for refund.</p>

          <h3 className="text-xl mt-8 mb-4">7. Cancellation by ConsultAvenuee.com</h3>
          <p>ConsultAvenuee.com reserves the right to decline, suspend, or discontinue services if:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>False or misleading information is provided.</li>
            <li>Required documentation is not furnished.</li>
            <li>Applicable laws or professional standards prohibit continuation.</li>
            <li>Client conduct is abusive, unlawful, or unethical.</li>
          </ul>
          <p>
            In such cases, refunds, if any, shall be determined after deducting charges for work already completed and expenses incurred.
          </p>

          <h3 className="text-xl mt-8 mb-4">8. Refund Processing</h3>
          <p>
            Approved refunds shall be processed within 15 to 30 business days. Refunds will generally be made through the original payment method or any other method deemed appropriate by ConsultAvenuee.com
          </p>

          <h3 className="text-xl mt-8 mb-4">9. Dispute Resolution</h3>
          <p>
            Any disputes relating to cancellations or refunds shall first be addressed through mutual discussion and resolution. The decision of ConsultAvenuee.com regarding refund eligibility shall be final, subject to applicable laws.
          </p>

          <h3 className="text-xl mt-8 mb-4">10. Policy Changes</h3>
          <p>
            ConsultAvenuee.com reserves the right to modify this Refund & Cancellation Policy at any time without prior notice. Updated versions shall be published on the Website.
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
          <p className="mt-4">For refund or cancellation requests, please contact us via email with complete details of your engagement and payment.</p>
        </div>
      </div>
    </div>
  );
}
