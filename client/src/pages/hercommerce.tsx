import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Handshake,
  Layers,
  Monitor,
  Package,
  Shield,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export default function Hercommerce() {
  useSeoMeta({
    title: "Hercommerce – Digital B2B Trade Platform",
    description:
      "Hercommerce by Tilz Group is a digital B2B trade platform connecting manufacturers and independent retailers across the UK and globally. Simplify cross-border wholesale trade.",
    path: "/services/hercommerce",
  });
  return (
    <div className="pt-20">
      <HercommerceHero />
      <WhatIsHercommerce />
      <WhoItsFor />
      <PlatformFeatures />
      <ThreePLIntegration />
      <PartnerSection />
      <HercommerceCTA />
    </div>
  );
}

function HercommerceHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0EA5E9] via-[#0284C7] to-[#1E40AF] py-20 lg:py-28 overflow-hidden" data-testid="section-hercommerce-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white/80 text-sm font-medium">Digital B2B Trade Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Poppins'] tracking-tight mb-6" data-testid="text-hercommerce-hero-headline">
            Hercommerce
          </h1>
          <p className="text-2xl text-white/90 font-['Poppins'] font-semibold mb-4">
            Connecting Exporters to Global Markets
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            A digital B2B trade platform that removes barriers and accelerates cross-border commerce. Hercommerce combines marketplace intelligence with trade facilitation technology to power the future of international trade.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0EA5E9] border-white font-semibold px-8" data-testid="button-hercommerce-partner">
                Partner With Hercommerce
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 font-semibold px-8" data-testid="button-hercommerce-learn">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsHercommerce() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-what-is-hercommerce">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">The Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-what-hercommerce-headline">
              What is Hercommerce?
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              Hercommerce is Tilz Group's innovation-driven digital B2B trade platform. It represents the intersection of marketplace intelligence and trade facilitation technology.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              The platform connects manufacturers and exporters directly to global buyer networks, removing traditional barriers to cross-border commerce and providing the digital infrastructure needed for modern trade.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed">
              As a standalone strategic asset within the Tilz Group portfolio, Hercommerce is positioned for independent growth and represents the future of digital trade facilitation.
            </p>
          </div>
          <div>
            <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#1E40AF]/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Market Access", value: "20+ Countries" },
                  { icon: Truck, label: "Trade Facilitation", value: "End-to-End" },
                  { icon: Monitor, label: "Digital Platform", value: "Cloud-Based" },
                  { icon: ShieldCheck, label: "Verified Partners", value: "Trusted Network" },
                  { icon: Layers, label: "Product Categories", value: "Multi-Sector" },
                  { icon: TrendingUp, label: "Growth Model", value: "Scalable" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-5 text-center shadow-sm" data-testid={`hercommerce-feature-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <item.icon className="w-7 h-7 text-[#0EA5E9] mx-auto mb-3" />
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

function WhoItsFor() {
  const audiences = [
    { icon: Package, title: "Manufacturers", desc: "Access global buyer networks and digital trade channels without building your own platform infrastructure." },
    { icon: Globe, title: "Exporters", desc: "Reach international markets through a facilitated digital platform with logistics integration." },
    { icon: Users, title: "Trade Partners", desc: "Connect with verified suppliers and streamline cross-border procurement processes." },
    { icon: Handshake, title: "Trade Organisations", desc: "Leverage digital infrastructure to support your member businesses in accessing global markets." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-who-its-for">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Who It's For</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-who-its-for-headline">
            Built for the Global Trade Community
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Hercommerce serves businesses at every stage of the international trade journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => (
            <Card key={a.title} className="bg-white border-0 p-0 overflow-visible" data-testid={`card-audience-${a.title.toLowerCase()}`}>
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0EA5E9] to-[#1E40AF] rounded-xl flex items-center justify-center mx-auto mb-5">
                  <a.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-2">{a.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformFeatures() {
  const features = [
    { icon: Globe, title: "Digital Trade Marketplace", desc: "A structured online marketplace connecting verified sellers with international buyers across multiple product categories." },
    { icon: Shield, title: "Verified Partner Network", desc: "All participants are vetted and verified, building trust and reducing risk in cross-border transactions." },
    { icon: Monitor, title: "Intelligent Matching", desc: "Smart algorithms connect sellers with the most relevant buyers based on product category, market, and trade requirements." },
    { icon: TrendingUp, title: "Market Intelligence", desc: "Access to pricing data, demand signals, and market trends to inform your export strategy." },
    { icon: Layers, title: "Multi-Category Support", desc: "Support for diverse product categories from food and beverage to consumer goods and industrial products." },
    { icon: Zap, title: "Streamlined Process", desc: "Digital documentation, communication tools, and transaction management to simplify cross-border trade." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-platform-features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Platform Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-platform-features-headline">
            Digital Trade Marketplace
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Purpose-built technology for modern international trade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-8 bg-[#F1F5F9] rounded-xl" data-testid={`platform-feature-${f.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <f.icon className="w-10 h-10 text-[#0EA5E9] mb-5" />
              <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-2">{f.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThreePLIntegration() {
  const integrations = [
    "Seamless inventory visibility across trade and fulfilment",
    "Coordinated logistics from warehouse to international buyer",
    "Batch tracking and compliance documentation",
    "Integrated shipping and dispatch management",
    "End-to-end supply chain visibility",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A]" data-testid="section-3pl-integration">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Logistics Integration</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-3pl-integration-headline">
              3PL Integration
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Hercommerce is uniquely positioned within the Tilz Group ecosystem, with direct integration into our 3PL logistics infrastructure. This means trade facilitated through the platform can be seamlessly fulfilled through our warehousing operations.
            </p>
            <div className="space-y-3">
              {integrations.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#1E40AF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-bold font-['Poppins']">Hercommerce</p>
                <p className="text-slate-400 text-xs">Digital Trade Platform</p>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="w-0.5 h-8 bg-[#0EA5E9]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <Package className="w-6 h-6 text-[#0EA5E9] mx-auto mb-2" />
                  <p className="text-white text-xs font-semibold">3PL Fulfilment</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <Globe className="w-6 h-6 text-[#0EA5E9] mx-auto mb-2" />
                  <p className="text-white text-xs font-semibold">Global Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-partner">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Partnership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-partner-headline">
              Partner With Us
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              Whether you're a trade organisation looking to provide digital infrastructure to your members, or a business seeking to expand your international reach, Hercommerce offers partnership models designed for growth.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              We welcome conversations with trade bodies, chambers of commerce, export promotion agencies, and technology partners who share our vision of accessible global trade.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold" data-testid="button-partner-enquiry">
                Partnership Enquiry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "Trade Organisations", desc: "Embed Hercommerce as a digital trade tool for your member businesses." },
              { title: "Technology Partners", desc: "Integrate your solutions with our platform to enhance the trade experience." },
              { title: "Export Agencies", desc: "Provide your client businesses with direct access to international buyers." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm" data-testid={`partner-type-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-10 h-10 bg-[#0EA5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-5 h-5 text-white" />
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

function HercommerceCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0EA5E9] to-[#1E40AF]" data-testid="section-hercommerce-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-hercommerce-cta-headline">
          The Future of Digital Trade
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Join the Hercommerce network and be part of the next generation of cross-border commerce facilitation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#0EA5E9] border-white font-semibold px-8" data-testid="button-hercommerce-cta-partner">
              Partner With Hercommerce
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 font-semibold px-8" data-testid="button-hercommerce-cta-contact">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
