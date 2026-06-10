import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/ecommerce-consulting", label: "Ecommerce Consulting" },
      { href: "/services/3pl-logistics", label: "3PL Logistics" },
      { href: "/services/hercommerce", label: "Hercommerce" },
    ],
  },
  { href: "/brands", label: "Brands" },
  { href: "/insights", label: "Insights" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-['Poppins'] tracking-tight">TG</span>
              </div>
              <span className="text-xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight">
                Tilz Group
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link href={link.href}>
                  <span
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-[#1E40AF] bg-blue-50"
                        : "text-[#64748B] hover:text-[#0F172A]"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3" />}
                  </span>
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-slate-100 rounded-lg shadow-lg py-2 min-w-[240px]">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          <span
                            className={`block px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                              isActive(child.href)
                                ? "text-[#1E40AF] bg-blue-50"
                                : "text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50"
                            }`}
                            data-testid={`link-nav-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="https://3pl.tilzgroup.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors" data-testid="link-nav-portal">
              Client Portal
            </a>
            <Link href="/contact">
              <Button data-testid="button-nav-cta">Book a Strategy Call</Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 max-h-[80vh] overflow-y-auto" data-testid="nav-mobile">
          <nav className="flex flex-col gap-1">
            <Link href="/">
              <span
                className={`block px-4 py-3 rounded-md text-sm font-medium cursor-pointer ${
                  location === "/" ? "text-[#1E40AF] bg-blue-50" : "text-[#64748B]"
                }`}
                onClick={() => setMobileOpen(false)}
                data-testid="link-mobile-home"
              >
                Home
              </span>
            </Link>
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium flex items-center justify-between ${
                        isActive(link.href) ? "text-[#1E40AF] bg-blue-50" : "text-[#64748B]"
                      }`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4">
                        <Link href={link.href}>
                          <span
                            className="block px-4 py-2.5 text-sm text-[#64748B] cursor-pointer"
                            onClick={() => setMobileOpen(false)}
                          >
                            All Services
                          </span>
                        </Link>
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}>
                            <span
                              className={`block px-4 py-2.5 text-sm cursor-pointer ${
                                isActive(child.href) ? "text-[#1E40AF]" : "text-[#64748B]"
                              }`}
                              onClick={() => setMobileOpen(false)}
                              data-testid={`link-mobile-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href}>
                    <span
                      className={`block px-4 py-3 rounded-md text-sm font-medium cursor-pointer ${
                        isActive(link.href) ? "text-[#1E40AF] bg-blue-50" : "text-[#64748B]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <div className="border-t border-slate-100 mt-2 pt-3">
              <a href="https://3pl.tilzgroup.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-medium text-[#64748B]" data-testid="link-mobile-portal">
                Client Portal
              </a>
              <Link href="/contact">
                <Button className="w-full mt-2" onClick={() => setMobileOpen(false)} data-testid="button-mobile-cta">
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
