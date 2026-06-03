import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  Handshake,
  Monitor,
  Package,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { SiAmazon, SiEbay } from "react-icons/si";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export default function Partnerships() {
  useSeoMeta({
    title: "Partnerships",
    description:
      "Partner with Tilz Group to expand your ecommerce reach, access UK 3PL infrastructure, or list on the Hercommerce B2B trade platform. Strategic partnerships for commerce growth.",
    path: "/partnerships",
  });
  return (
    <div className="pt-20">
      <PartnershipsHero />
      <PartnerTypes />
      <TrustedPartners />
      <PartnerBenefits />
      <PartnershipsCTA />
    </div>
  );
}

function PartnershipsHero() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28" data-testid="section-partnerships-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Partnerships & Networks</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-partnerships-hero-headline">
          Trusted Partnerships, Global Impact
        </h1>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Tilz Group works alongside leading marketplaces, trade bodies, and institutional partners to deliver credible, scalable commerce solutions that create real value.
        </p>
      </div>
    </section>
  );
}

function PartnerTypes() {
  const types = [
    {
      icon: Building2,
      title: "Trade Organisations",
      desc: "We work with trade bodies and chambers of commerce to support their member businesses with marketplace access and logistics infrastructure.",
      details: ["Member business support", "Trade programme participation", "Joint initiatives and events"],
    },
    {
      icon: Package,
      title: "Manufacturers",
      desc: "We partner with manufacturers to bring their products to global consumer markets through structured marketplace strategy and fulfilment.",
      details: ["End-to-end marketplace entry", "Logistics and fulfilment", "Brand building and positioning"],
    },
    {
      icon: Monitor,
      title: "Technology Partners",
      desc: "We collaborate with technology providers to integrate tools and platforms that enhance our service delivery and client experience.",
      details: ["Platform integrations", "Data and analytics tools", "Inventory management systems"],
    },
    {
      icon: ShoppingCart,
      title: "Retail & Distribution",
      desc: "We work with retail and distribution partners to expand the reach of our consumer brands and support supply chain efficiency.",
      details: ["Wholesale partnerships", "Distribution agreements", "Retail placement support"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-partner-types">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">How We Partner</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-partner-types-headline">
            Partnership Models
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            We build long-term relationships across the commerce ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {types.map((type) => (
            <Card key={type.title} className="bg-[#F1F5F9] border-0 p-0 overflow-visible" data-testid={`card-partner-type-${type.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1E40AF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-2">{type.title}</h3>
                    <p className="text-[#64748B] leading-relaxed mb-4">{type.desc}</p>
                    <div className="space-y-2">
                      {type.details.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                          <span className="text-[#0F172A] text-sm font-medium">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedPartners() {
  const partners = [
    { icon: SiAmazon, name: "Amazon", desc: "Primary marketplace partner for brand listings and FBA operations." },
    { icon: SiEbay, name: "eBay", desc: "Established retail channel for consumer brand distribution." },
    { icon: Globe, name: "SheTrades", desc: "Supporting women-led businesses in accessing global trade opportunities." },
    { icon: Building2, name: "UK Trade Bodies", desc: "Working with trade organisations to support business growth." },
    { icon: TrendingUp, name: "University Partners", desc: "Collaborating on commerce research and education programmes." },
    { icon: ShieldCheck, name: "Industry Certifications", desc: "Maintaining operational standards and compliance certifications." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-trusted-partners">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Network</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-trusted-partners-headline">
            Trusted by Trade Organisations and Global Partners
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            We are proud to work alongside leading organisations in the commerce and trade ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-xl p-8 shadow-sm" data-testid={`trusted-partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <partner.icon className="w-10 h-10 text-[#64748B] mb-4" />
              <h3 className="text-[#0F172A] font-bold font-['Poppins'] mb-2">{partner.name}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-[#0F172A]" data-testid="section-partner-benefits">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Work With Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-partner-benefits-headline">
              Why Partner With Tilz Group?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Partnering with Tilz Group means working with a commerce infrastructure company that combines strategic consulting, operational logistics, and digital innovation under one roof.
            </p>
            <div className="space-y-4">
              {[
                "Access to multi-vertical commerce expertise",
                "Integrated consulting and logistics capability",
                "UK-based operations with international reach",
                "Technology-driven approach to commerce",
                "Proven track record across consumer categories",
                "Commitment to long-term partnership value",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                  <span className="text-white text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="text-center mb-8">
                <Handshake className="w-16 h-16 text-[#0EA5E9] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl font-['Poppins']">Partnership Enquiry</h3>
                <p className="text-slate-400 text-sm mt-2">We welcome conversations with organisations that share our vision.</p>
              </div>
              <div className="space-y-3">
                {["Trade Organisation", "Manufacturer", "Technology Provider", "Retail & Distribution"].map((type) => (
                  <div key={type} className="bg-slate-800 rounded-lg px-4 py-3 flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{type}</span>
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

function PartnershipsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9]" data-testid="section-partnerships-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6">
          Interested in Partnering With Us?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you're a trade organisation, manufacturer, technology provider, or retail partner, we'd love to explore how we can create value together.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-[#1E40AF] border-white font-semibold px-10" data-testid="button-partnerships-contact">
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
