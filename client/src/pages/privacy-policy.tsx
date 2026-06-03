import { useSeoMeta } from "@/hooks/use-seo-meta";

export default function PrivacyPolicy() {
  useSeoMeta({
    title: "Privacy Policy",
    description: "How Tilz Group collects, uses, and protects your personal data. UK GDPR compliant.",
    path: "/privacy-policy",
    noIndex: true,
  });
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-slate prose-lg max-w-none">
          <h2>1. Who We Are</h2>
          <p>
            Tilz Group Ltd operates this website at tilzgroup.com. Our registered address is Unit 3A, Eagle Industrial Estate, 4 Torre Road, Leeds, LS9 7QL, United Kingdom. We are the data controller for personal information collected through this website and our services.
          </p>
          <p>For privacy-related enquiries, please contact us at <a href="mailto:info@tilzgroup.com">info@tilzgroup.com</a>.</p>

          <h2>2. What Personal Data We Collect</h2>
          <p>We collect personal data in the following circumstances:</p>
          <ul>
            <li><strong>Contact form submissions:</strong> name, email address, company name, and the content of your message.</li>
            <li><strong>Service enquiries:</strong> information you provide when enquiring about ecommerce consulting, 3PL logistics, or Hercommerce partnership.</li>
            <li><strong>Client portal (3pl.tilzgroup.com):</strong> account credentials, inventory data, and operational information provided as part of the 3PL service relationship.</li>
            <li><strong>Website analytics:</strong> anonymised usage data including pages visited, time on site, and referral source (collected via cookies — see Section 6).</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use the personal data we collect to:</p>
          <ul>
            <li>Respond to enquiries and service requests submitted through our contact form.</li>
            <li>Provide and manage the 3PL logistics services you have engaged us for.</li>
            <li>Send relevant communications about our services where you have provided consent or where we have a legitimate interest.</li>
            <li>Improve our website and services through anonymised analytics.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>We process your personal data under the following legal bases (UK GDPR Article 6):</p>
          <ul>
            <li><strong>Contract:</strong> processing necessary to deliver 3PL and consulting services you have engaged.</li>
            <li><strong>Legitimate interests:</strong> responding to website enquiries and improving our services.</li>
            <li><strong>Consent:</strong> marketing communications and non-essential cookies, where you have provided explicit consent.</li>
            <li><strong>Legal obligation:</strong> compliance with UK tax, employment, and regulatory requirements.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>We retain personal data only for as long as necessary for the purposes for which it was collected:</p>
          <ul>
            <li>Contact form enquiries: 12 months from submission unless a service relationship develops.</li>
            <li>Client service records: 7 years from end of engagement (in line with UK financial record-keeping requirements).</li>
            <li>Website analytics data: 26 months.</li>
          </ul>

          <h2>6. Cookies</h2>
          <p>
            This website uses cookies to support website functionality and analytics. Essential cookies are required for the website to operate. Analytics cookies are only set with your consent. For full details, please see our <a href="/cookie-policy">Cookie Policy</a>.
          </p>

          <h2>7. Third-Party Sharing</h2>
          <p>
            We do not sell personal data. We share data only with third-party service providers who process data on our behalf (such as hosting infrastructure and analytics providers) under data processing agreements that ensure appropriate protection. We may disclose data where required by law.
          </p>

          <h2>8. International Transfers</h2>
          <p>
            Where personal data is transferred outside the UK or European Economic Area, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements, including standard contractual clauses where applicable.
          </p>

          <h2>9. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate or incomplete personal data.</li>
            <li>Request erasure of your personal data in certain circumstances.</li>
            <li>Object to or restrict certain processing activities.</li>
            <li>Data portability (where processing is based on consent or contract).</li>
            <li>Withdraw consent at any time where processing is consent-based.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href="mailto:info@tilzgroup.com">info@tilzgroup.com</a>. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of our website constitutes acceptance of any updated policy.
          </p>
        </div>
      </section>
    </div>
  );
}
