import { Link } from "wouter";
import { Linkedin, Mail, MapPin } from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Ecommerce Consulting", href: "/services/ecommerce-consulting" },
      { label: "3PL Logistics", href: "/services/3pl-logistics" },
      { label: "Hercommerce", href: "/services/hercommerce" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Tilz Collection", href: "/brands" },
      { label: "Tilz Gear", href: "/brands" },
      { label: "TilzMart", href: "/brands" },
      { label: "Tilz Toys", href: "/brands" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-['Poppins'] tracking-tight">TG</span>
              </div>
              <span className="text-xl font-bold font-['Poppins'] tracking-tight">
                Tilz Group
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Commerce infrastructure for brands built to scale — marketplace consulting, UK 3PL logistics, and digital B2B trade.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@tilzgroup.com" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors" data-testid="link-footer-email">
                <Mail className="w-4 h-4" />
                info@tilzgroup.com
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Unit 3A, Eagle Industrial Estate, 4 Torre Road, Leeds, LS9 7QL</span>
              </div>
              <a href="https://www.linkedin.com/company/tilzgroup" target="_blank" rel="noopener noreferrer" aria-label="Tilz Group on LinkedIn" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors" data-testid="link-footer-linkedin">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4 text-white font-['Poppins']">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Tilz Group. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Global Ecommerce, Logistics & Digital Trade Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
