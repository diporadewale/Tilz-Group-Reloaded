import { useSeoMeta } from "@/hooks/use-seo-meta";

export default function CookiePolicy() {
  useSeoMeta({
    title: "Cookie Policy",
    description: "Information about cookies used on the Tilz Group website and how to manage them.",
    path: "/cookie-policy",
    noIndex: true,
  });
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-slate-300">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-slate prose-lg max-w-none">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They allow the site to remember information about your visit and preferences, and are widely used to make websites function efficiently and to provide reporting information.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>The tilzgroup.com website uses cookies in the following categories:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function. They include session management and security cookies. You cannot opt out of essential cookies, as the website cannot operate without them.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session</td>
                <td>Maintains your session state across pages</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytics Cookies</h3>
          <p>
            With your consent, we use analytics cookies to understand how visitors interact with our website — which pages are most visited, how long visitors stay, and where they come from. This information is used in aggregate to improve our website. No personally identifiable information is collected through analytics cookies.
          </p>
          <p>
            Analytics cookies are only placed with your consent. You can withdraw consent at any time by clearing your cookies and not accepting them on your next visit.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            Certain third-party services embedded in or linked from our website may set their own cookies. We do not control these cookies. Please refer to the privacy policies of those services for more information.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or to be notified when cookies are being set. Disabling cookies may affect the functionality of certain parts of this website.
          </p>
          <p>Browser-specific guidance:</p>
          <ul>
            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
            <li><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</li>
          </ul>

          <h2>5. UK ePrivacy Compliance</h2>
          <p>
            Our use of cookies complies with the UK Privacy and Electronic Communications Regulations (PECR) and the UK GDPR. Non-essential cookies are only placed following your explicit consent.
          </p>

          <h2>6. Contact</h2>
          <p>
            If you have questions about our use of cookies, contact us at <a href="mailto:info@tilzgroup.com">info@tilzgroup.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
