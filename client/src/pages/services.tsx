import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Monitor,
  Package,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export default function Services() {
  useSeoMeta({
    title: "Our Services",
    description:
      "From marketplace consulting to UK 3PL fulfilment and B2B trade platforms — Tilz Group's services are built to scale commerce operations end to end.",
    path: "/services",
  });
  return (
    <div className="pt-20">
      <ServicesHero />
      <EcommerceConsulting />
      <LogisticsSection />
      <HercommerceSection />
      <ServicesCTA />
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28" data-testid="section-services-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-services-hero-headline">
          Comprehensive Commerce Solutions
        </h1>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          From marketplace strategy to warehouse fulfilment and digital trade platforms, Tilz Group delivers end-to-end solutions for brands ready to scale globally.
        </p>
      </div>
    </section>
  );
}

function EcommerceConsulting() {
  const features = [
    { icon: Search, title: "Marketplace Analysis", desc: "Deep-dive into competitive landscape and opportunity identification across Amazon, eBay, and more." },
    { icon: Target, title: "Listing Optimisation", desc: "SEO-driven product listing creation and optimisation for maximum visibility and conversion." },
    { icon: BarChart3, title: "Performance Analytics", desc: "Real-time dashboards tracking sales velocity, ad performance, and market positioning." },
    { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven scaling plans to expand market share and enter new categories and regions." },
    { icon: Settings, title: "Account Management", desc: "End-to-end seller account management including compliance, health monitoring, and issue resolution." },
    { icon: Globe, title: "International Expansion", desc: "Strategic guidance for entering new international marketplaces with localised approaches." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-ecommerce-consulting">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-[#1E40AF]/10 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-[#1E40AF]" />
              <span className="text-[#1E40AF] text-sm font-semibold">Service 01</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-consulting-headline">
              Ecommerce & Marketplace Consulting
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              We help brands and manufacturers build, optimise, and scale their presence on Amazon and global marketplaces. Our team brings deep category knowledge and proven strategies to drive sustainable growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/ecommerce-consulting">
                <Button size="lg" className="font-semibold" data-testid="button-consulting-cta">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold" data-testid="button-consulting-contact">
                  Get a Consultation
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-5 p-6 bg-[#F1F5F9] rounded-xl" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-bold font-['Poppins'] mb-1">{feature.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogisticsSection() {
  const features = [
    "Secure UK-based warehousing facilities",
    "Batch and expiry date management",
    "Product bundling and kitting services",
    "Multi-channel order fulfilment",
    "Digital inventory management systems",
    "Returns processing and quality control",
    "FBA prep and marketplace compliance",
    "Real-time stock level reporting",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-logistics">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Warehouse className="w-6 h-6 text-[#1E40AF]" />
                <span className="font-semibold text-[#0F172A] font-['Poppins']">Logistics Dashboard</span>
              </div>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-3 bg-[#F1F5F9] rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                    <span className="text-[#0F172A] text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#0F172A]/10 rounded-full px-4 py-2 mb-6">
              <Package className="w-4 h-4 text-[#0F172A]" />
              <span className="text-[#0F172A] text-sm font-semibold">Service 02</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-logistics-headline">
              3PL Storage & Logistics
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6">
              Our UK-based warehousing and fulfilment services provide brands with secure, efficient, and technology-driven logistics infrastructure. We handle everything from storage to final-mile delivery.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              With dedicated batch tracking, expiry management, and real-time reporting, your products are always accounted for and ready to ship.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/3pl-logistics">
                <Button size="lg" className="bg-[#0F172A] text-white border-[#0F172A] font-semibold" data-testid="button-logistics-cta">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold" data-testid="button-logistics-contact">
                  Become a 3PL Client
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HercommerceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-hercommerce">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-[#0EA5E9]" />
              <span className="text-[#0EA5E9] text-sm font-semibold">Service 03</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-hercommerce-headline">
              Hercommerce
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6">
              Hercommerce is our innovation-driven digital B2B trade platform, connecting exporters directly to global markets. It represents the future of digital commerce for manufacturers and trade partners.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              By combining marketplace intelligence with trade facilitation technology, Hercommerce removes barriers and accelerates cross-border commerce.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/hercommerce">
                <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold" data-testid="button-hercommerce-cta">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold" data-testid="button-hercommerce-contact">
                  Partner With Hercommerce
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#1E40AF]/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Market Access", value: "20+ Countries" },
                  { icon: Truck, label: "Trade Facilitation", value: "End-to-End" },
                  { icon: Monitor, label: "Digital Platform", value: "Cloud-Based" },
                  { icon: ShieldCheck, label: "Verified Partners", value: "Trusted Network" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-5 text-center shadow-sm" data-testid={`hercommerce-stat-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <item.icon className="w-8 h-8 text-[#0EA5E9] mx-auto mb-3" />
                    <p className="text-[#0F172A] font-bold text-sm">{item.value}</p>
                    <p className="text-[#64748B] text-xs mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9]" data-testid="section-services-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6">
          Let's Build Your Commerce Infrastructure
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Get in touch with our team to discuss how Tilz Group can support your business growth across ecommerce, logistics, and digital trade.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-[#1E40AF] border-white font-semibold px-10" data-testid="button-services-contact">
            Contact Our Team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
