import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Box,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Globe,
  Layers,
  Monitor,
  Package,
  RefreshCw,
  Shield,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export default function Logistics() {
  useSeoMeta({
    title: "3PL Storage & Logistics",
    description:
      "UK-based third-party logistics (3PL) storage and fulfilment from Leeds. Real-time inventory management, same-day dispatch, and full ecommerce integration for brands of all sizes.",
    path: "/services/3pl-logistics",
  });
  return (
    <div className="pt-20">
      <LogisticsHero />
      <WarehousingSection />
      <CapabilitiesGrid />
      <TechnologySection />
      <PricingModel />
      <OnboardingProcess />
      <LogisticsCTA />
    </div>
  );
}

function LogisticsHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] py-20 lg:py-28 overflow-hidden" data-testid="section-logistics-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#0EA5E9] rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Package className="w-4 h-4 text-[#0EA5E9]" />
            <span className="text-white/80 text-sm font-medium">3PL Storage & Logistics</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Poppins'] tracking-tight mb-6" data-testid="text-logistics-hero-headline">
            Secure UK-Based Warehousing & Fulfilment
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            End-to-end logistics infrastructure for brands and manufacturers. From secure storage and batch management to pick, pack, and dispatch — we handle the operational backbone of your commerce business.
          </p>
          <p className="text-slate-400 text-base mb-10">
            Technology-driven operations with real-time visibility and control.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold px-8" data-testid="button-logistics-assessment">
                Request Storage Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 backdrop-blur-sm font-semibold px-8" data-testid="button-logistics-become-client">
                Become a 3PL Client
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarehousingSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-warehousing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Warehousing & Storage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-warehousing-headline">
              Secure, Scalable Storage Infrastructure
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              Our UK-based warehousing facilities are designed for brands that need secure, compliant, and technology-enabled storage solutions. Whether you're storing 100 or 10,000 SKUs, our infrastructure scales with your needs.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              With dedicated batch tracking, expiry date management, and climate-appropriate storage zones, your products are always accounted for and ready to ship.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "99.8%", label: "Inventory Accuracy" },
                { value: "48h", label: "Avg Dispatch Time" },
                { value: "24/7", label: "Security Coverage" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-[#F1F5F9] rounded-xl" data-testid={`logistics-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <p className="text-2xl font-bold text-[#1E40AF] font-['Poppins']">{stat.value}</p>
                  <p className="text-[#64748B] text-xs font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F1F5F9] rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-[#0F172A] text-sm font-['Poppins']">Warehouse Dashboard</span>
                <span className="text-[#0EA5E9] text-xs font-bold">Live</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Storage Zone A", pct: 87, color: "bg-[#1E40AF]" },
                  { label: "Storage Zone B", pct: 62, color: "bg-[#0EA5E9]" },
                  { label: "Dispatch Bay", pct: 34, color: "bg-green-500" },
                ].map((zone) => (
                  <div key={zone.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#64748B] text-xs">{zone.label}</span>
                      <span className="text-[#0F172A] text-xs font-bold">{zone.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className={`${zone.color} h-2 rounded-full`} style={{ width: `${zone.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-[#1E40AF] font-bold text-xl">1,247</p>
                <p className="text-[#64748B] text-xs">Active SKUs</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-green-600 font-bold text-xl">156</p>
                <p className="text-[#64748B] text-xs">Orders This Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesGrid() {
  const capabilities = [
    { icon: ShieldCheck, title: "Expiry & Batch Management", desc: "Full batch tracking with FIFO rotation, expiry alerts, and compliance documentation for food and health products." },
    { icon: Layers, title: "Bundling & Kitting", desc: "Custom product bundling, multi-pack assembly, and gift set creation with quality control at every stage." },
    { icon: Truck, title: "Pick, Pack & Dispatch", desc: "Efficient order processing with same-day dispatch capability and multi-carrier shipping integration." },
    { icon: RefreshCw, title: "Returns Processing", desc: "Structured returns handling with quality inspection, restocking, and detailed reporting." },
    { icon: Box, title: "FBA Prep Services", desc: "Amazon FBA compliance preparation including labelling, poly-bagging, and shipment planning." },
    { icon: ClipboardCheck, title: "Quality Control", desc: "Incoming goods inspection, condition reporting, and photography for inventory documentation." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-capabilities">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Full Service Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-capabilities-headline">
            End-to-End Logistics Services
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Every aspect of your fulfilment operations, managed under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="bg-white border-0 p-0 overflow-visible" data-testid={`card-capability-${cap.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8">
                <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center mb-5">
                  <cap.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-2">{cap.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{cap.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const features = [
    "Real-time stock level reporting",
    "Digital inventory management",
    "Client portal with self-service access",
    "Automated dispatch notifications",
    "Batch and expiry tracking system",
    "Multi-channel order integration",
    "Custom reporting and analytics",
    "API integration capability",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A]" data-testid="section-logistics-technology">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Technology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-logistics-tech-headline">
              Technology-Driven Operations
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Our digital infrastructure provides full visibility and control over your inventory. Access your stock levels, request dispatches, and track performance through our client portal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                  <span className="text-white text-sm">{f}</span>
                </div>
              ))}
            </div>
            <a href="https://3pl.tilzgroup.com" target="_blank" rel="noopener noreferrer" data-testid="link-client-portal-login">
              <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold">
                Log In to Client Portal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-5 h-5 text-[#0EA5E9]" />
                <span className="text-white font-semibold text-sm font-['Poppins']">Client Portal Preview</span>
              </div>
              <div className="space-y-3">
                {["My Inventory", "Download Inventory", "Request Dispatch", "Dispatch History", "Messages", "Support"].map((item) => (
                  <div key={item} className="bg-slate-800/50 rounded-lg px-4 py-3 flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{item}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
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

function PricingModel() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-pricing-headline">
              Transparent & Scalable Pricing
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6">
              Our pricing is structured around storage volume, service requirements, and operational complexity. We provide transparent quotes with no hidden fees.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              Every engagement begins with a storage assessment to ensure we recommend the right solution for your needs and budget.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold" data-testid="button-pricing-assessment">
                Request a Storage Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "Storage", desc: "Per-pallet or per-shelf pricing based on volume and duration", icon: Warehouse },
              { title: "Fulfilment", desc: "Per-order processing fees including pick, pack, and dispatch", icon: Package },
              { title: "Value-Added Services", desc: "Bundling, kitting, FBA prep, and returns processing", icon: Layers },
              { title: "Technology", desc: "Portal access and reporting included in all plans", icon: Monitor },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-[#F1F5F9] rounded-xl" data-testid={`pricing-item-${item.title.toLowerCase()}`}>
                <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#0F172A] font-semibold font-['Poppins']">{item.title}</p>
                  <p className="text-[#64748B] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OnboardingProcess() {
  const steps = [
    { step: "01", title: "Initial Enquiry", desc: "Contact us to discuss your storage and fulfilment requirements." },
    { step: "02", title: "Storage Assessment", desc: "We review your product types, volumes, and operational needs." },
    { step: "03", title: "Proposal & Agreement", desc: "Receive a tailored proposal with transparent pricing and SLAs." },
    { step: "04", title: "Onboarding", desc: "Goods received, catalogued, and integrated into our management system." },
    { step: "05", title: "Live Operations", desc: "Full operational management with portal access and regular reporting." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-onboarding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Getting Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-onboarding-headline">
            Onboarding Process
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            A structured approach to bringing your inventory into our infrastructure.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.step} className="flex gap-6 mb-6 last:mb-0" data-testid={`onboarding-step-${step.step}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-bold text-sm font-['Poppins'] flex-shrink-0">
                  {step.step}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 bg-[#0F172A]/20 flex-1 mt-2" />}
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-1">{step.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogisticsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0F172A] to-[#334155]" data-testid="section-logistics-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-logistics-cta-headline">
          Ready to Streamline Your Logistics?
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Let our team assess your storage and fulfilment requirements. We'll design a solution that scales with your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold px-8" data-testid="button-logistics-cta-assessment">
              Request Storage Assessment
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 font-semibold px-8" data-testid="button-logistics-cta-client">
              Become a 3PL Client
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
