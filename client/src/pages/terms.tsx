import { useSeoMeta } from "@/hooks/use-seo-meta";

export default function Terms() {
  useSeoMeta({
    title: "Terms of Service",
    description: "Terms and conditions governing use of the Tilz Group website and services.",
    path: "/terms",
    noIndex: true,
  });
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-300">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-slate prose-lg max-w-none">
          <h2>1. About These Terms</h2>
          <p>
            These Terms of Service govern your use of the Tilz Group website at tilzgroup.com, operated by Tilz Group Ltd, registered at Unit 3A, Eagle Industrial Estate, 4 Torre Road, Leeds, LS9 7QL, United Kingdom. By using this website, you agree to these terms. If you do not agree, please do not use the site.
          </p>
          <p>
            These terms govern website use only. Service-specific terms for 3PL logistics, ecommerce consulting, and Hercommerce partnerships are set out in separate service agreements entered at point of engagement.
          </p>

          <h2>2. Use of This Website</h2>
          <p>You may use this website for lawful purposes only. You agree not to:</p>
          <ul>
            <li>Use the site in any way that breaches applicable UK or international laws or regulations.</li>
            <li>Attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
            <li>Transmit unsolicited commercial communications or engage in data harvesting activities.</li>
            <li>Use the site in a way that could damage, disable, or impair its functionality.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and design — is the property of Tilz Group Ltd or its content suppliers and is protected by UK and international intellectual property law. You may not reproduce, distribute, or create derivative works from any site content without our prior written consent.
          </p>

          <h2>4. Website Content</h2>
          <p>
            The information on this website is provided for general informational purposes. While we endeavour to keep it accurate and current, we make no warranties — express or implied — about its completeness, accuracy, or fitness for any particular purpose. Nothing on this website constitutes professional advice.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites, including partner platforms and brand websites. We are not responsible for the content or practices of any third-party website. Links do not constitute endorsement.
          </p>

          <h2>6. Client Portal</h2>
          <p>
            Access to the 3PL client portal at 3pl.tilzgroup.com is subject to separate terms agreed at point of service onboarding. Unauthorised access to the portal or its data is prohibited.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by UK law, Tilz Group Ltd excludes all liability for any loss or damage arising from your use of this website. This includes, without limitation, indirect, consequential, or incidental loss. Our total liability for any claim arising in connection with this website shall not exceed £100.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Updates take effect immediately upon publication on this page. Continued use of the website constitutes acceptance of the revised terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            For any queries regarding these terms, contact us at <a href="mailto:info@tilzgroup.com">info@tilzgroup.com</a> or in writing to Tilz Group Ltd, Unit 3A, Eagle Industrial Estate, 4 Torre Road, Leeds, LS9 7QL.
          </p>
        </div>
      </section>
    </div>
  );
}
