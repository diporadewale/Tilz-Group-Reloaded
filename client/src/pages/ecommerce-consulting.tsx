import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Layers,
  LineChart,
  Monitor,
  Package,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Warehouse,
  X,
  Zap,
} from "lucide-react";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/json-ld";

export default function EcommerceConsulting() {
  useSeoMeta({
    title: "Ecommerce & Marketplace Consulting",
    description:
      "Expert marketplace consulting for Amazon UK, eBay, and beyond. Tilz Group helps brands optimise listings, build advertising strategies, and scale profitably across global channels.",
    path: "/services/ecommerce-consulting",
  });
  return (
    <div className="pt-20">
      <ServiceJsonLd
        name="Ecommerce & Marketplace Consulting"
        description="Expert marketplace consulting for Amazon UK, eBay, and beyond. Tilz Group helps brands optimise listings, build advertising strategies, and scale profitably across global channels."
        path="/services/ecommerce-consulting"
        serviceType="Marketplace Consulting"
      />
      <ConsultingHero />
      <WhoThisIsFor />
      <MarketplaceExpertise />
      <OurApproach />
      <PerformanceDiscipline />
      <IntegratedLogistics />
      <ExperienceSnapshot />
      <EngagementModels />
      <WhoWeAreNot />
      <ConsultingCTA />
    </div>
  );
}

function ConsultingHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28 overflow-hidden" data-testid="section-consulting-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#0EA5E9] rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <BarChart3 className="w-4 h-4 text-[#0EA5E9]" />
            <span className="text-white/80 text-sm font-medium">Ecommerce & Marketplace Consulting</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Poppins'] tracking-tight mb-6" data-testid="text-consulting-hero-headline">
            Structured Marketplace Strategy & Execution
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            Tilz Group supports brands and manufacturers in navigating Amazon and global marketplaces through disciplined account setup, performance optimisation, and international expansion strategy.
          </p>
          <p className="text-slate-400 text-base mb-10">
            Built for manufacturers, scaling brands and trade-focused exporters.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold px-8" data-testid="button-consulting-strategy-call">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 backdrop-blur-sm font-semibold px-8" data-testid="button-consulting-assessment">
                Request Marketplace Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  const clients = [
    { icon: Package, label: "Manufacturers entering Amazon for the first time" },
    { icon: TrendingUp, label: "Established brands seeking structured marketplace growth" },
    { icon: Globe, label: "International exporters entering the UK market" },
    { icon: Settings, label: "Companies needing disciplined account management, not ad-hoc listing uploads" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-who-this-is-for">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Who This Is For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-who-for-headline">
              Designed for Brands Ready to Scale
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              We do not provide short-term hacks. We build structured marketplace systems designed for sustainable, long-term growth.
            </p>
          </div>
          <div className="space-y-4">
            {clients.map((client) => (
              <div key={client.label} className="flex items-start gap-4 p-5 bg-[#F1F5F9] rounded-xl" data-testid={`client-type-${client.label.substring(0, 20).toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <client.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-[#0F172A] font-medium leading-relaxed">{client.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketplaceExpertise() {
  const amazonFeatures = [
    "Seller Central setup & optimisation",
    "Listing structure & keyword strategy",
    "Brand Registry support",
    "FBA and fulfilment strategy",
    "Advertising architecture (not just PPC tweaks)",
    "Compliance & account health management",
  ];

  const internationalFeatures = [
    "UK to EU expansion",
    "UK to USA/AU markets",
    "Multi-marketplace SKU alignment",
    "Cross-border pricing models",
    "Logistics coordination with 3PL",
  ];

  const multiChannelFeatures = [
    "Amazon",
    "eBay",
    "Shopify",
    "Etsy (where relevant)",
    "Wholesale & B2B channel integration",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-marketplace-expertise">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Marketplace Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-expertise-headline">
            Deep Platform Understanding
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Our team brings analytical, systematic expertise across all major marketplace platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-white border-0 p-0 overflow-visible" data-testid="card-amazon-expertise">
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-4">Amazon Marketplace</h3>
              <div className="space-y-3">
                {amazonFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#64748B] text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 p-0 overflow-visible" data-testid="card-international-expertise">
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0F172A] to-[#334155] rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-4">International Expansion</h3>
              <div className="space-y-3">
                {internationalFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#64748B] text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 p-0 overflow-visible" data-testid="card-multichannel-expertise">
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-4">Multi-Channel Strategy</h3>
              <div className="space-y-3">
                {multiChannelFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#64748B] text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  const steps = [
    {
      step: "01",
      title: "Commercial Assessment",
      items: ["Product viability", "Margin modelling", "Competitive landscape", "Logistics feasibility"],
    },
    {
      step: "02",
      title: "Account Infrastructure",
      items: ["Correct account architecture", "Brand setup", "Compliance review", "Catalogue structure"],
    },
    {
      step: "03",
      title: "Optimisation & Launch",
      items: ["Structured listing creation", "Search visibility optimisation", "Advertising structure", "Inventory forecasting alignment"],
    },
    {
      step: "04",
      title: "Performance Governance",
      items: ["KPI tracking", "Account health monitoring", "Inventory coordination", "International expansion planning"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-our-approach">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-approach-headline">
            A Structured Commerce Framework
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            We differentiate from tactical agencies by applying a disciplined, governance-oriented approach to marketplace growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.step} className="relative" data-testid={`approach-step-${step.step}`}>
              <div className="bg-[#F1F5F9] rounded-xl p-8 h-full">
                <div className="text-4xl font-bold text-[#1E40AF]/20 font-['Poppins'] mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-4">{step.title}</h3>
                <div className="space-y-2">
                  {step.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full flex-shrink-0" />
                      <span className="text-[#64748B] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceDiscipline() {
  const themes = [
    { icon: LineChart, label: "Margin-first thinking" },
    { icon: BarChart3, label: "Cost-of-sale analysis" },
    { icon: Target, label: "Advertising efficiency" },
    { icon: TrendingUp, label: "Inventory turnover" },
    { icon: Shield, label: "Avoiding overstock and stockouts" },
    { icon: Zap, label: "Scaling without operational chaos" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A]" data-testid="section-performance-discipline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Performance & Commercial Discipline</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-performance-headline">
              Marketplace Growth with Commercial Control
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We approach marketplace growth with the rigour of a commercial operation, not a marketing campaign. Every decision is measured against profitability and long-term sustainability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {themes.map((theme) => (
                <div key={theme.label} className="flex items-center gap-3">
                  <theme.icon className="w-5 h-5 text-[#0EA5E9]" />
                  <span className="text-white text-sm font-medium">{theme.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Sales Growth (YoY)</span>
                    <span className="text-green-400 text-xs font-bold">+67%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '67%' }} />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">ACOS Optimisation</span>
                    <span className="text-[#0EA5E9] text-xs font-bold">18.4%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-[#0EA5E9] h-2 rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Inventory Health Score</span>
                    <span className="text-[#1E40AF] text-xs font-bold">94/100</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-[#1E40AF] h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegratedLogistics() {
  const benefits = [
    "Accurate forecasting",
    "Coordinated FBA replenishment",
    "Bundle and kitting execution",
    "Expiry-sensitive product handling",
    "Full marketplace-to-warehouse alignment",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-integrated-logistics">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Warehouse className="w-6 h-6 text-[#1E40AF]" />
                <span className="font-semibold text-[#0F172A] font-['Poppins']">Integrated Advantage</span>
              </div>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 p-3 bg-[#F1F5F9] rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                    <span className="text-[#0F172A] text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Integrated Logistics Advantage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-integrated-headline">
              Consulting Backed by Infrastructure
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6">
              Unlike advisory-only agencies, Tilz Group operates warehousing and fulfilment infrastructure. This enables deeper alignment between marketplace strategy and operational execution.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed">
              This is a strong differentiator — your consulting partner and logistics provider working as one integrated team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSnapshot() {
  const cases = [
    {
      category: "Grocery & Spice Products",
      challenge: "Entering Amazon UK with compliance-heavy food products requiring expiry management.",
      approach: "Structured account setup with FBA prep, batch tracking, and seasonal advertising.",
      outcome: "Established marketplace presence with compliant listings and managed inventory turnover.",
    },
    {
      category: "Seasonal & Gifting Products",
      challenge: "Managing inventory peaks and troughs across Q4 gifting season.",
      approach: "Forecasting alignment, bundled SKU creation, and phased advertising ramp.",
      outcome: "Controlled seasonal scaling without overstock or stockout incidents.",
    },
    {
      category: "International Exporter Onboarding",
      challenge: "Non-UK manufacturer needing full marketplace entry support.",
      approach: "End-to-end setup from account creation to 3PL integration and launch.",
      outcome: "Live on Amazon UK within structured timeline with ongoing account management.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-experience-headline">
            Experience Across Consumer Categories
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Structured execution across diverse product categories and market conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <Card key={c.category} className="bg-[#F1F5F9] border-0 p-0 overflow-visible" data-testid={`card-case-${c.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8">
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-4">{c.category}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-[#64748B] text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-1">Approach</p>
                    <p className="text-[#64748B] text-sm leading-relaxed">{c.approach}</p>
                  </div>
                  <div>
                    <p className="text-green-600 text-xs font-bold uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-[#64748B] text-sm leading-relaxed">{c.outcome}</p>
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

function EngagementModels() {
  const models = [
    { icon: Search, title: "Marketplace Setup & Launch", desc: "Complete account creation, listing build, and launch management for new marketplace entrants." },
    { icon: Settings, title: "Ongoing Account Management", desc: "Continuous marketplace operations, optimisation, and performance governance." },
    { icon: Target, title: "Advertising Optimisation", desc: "Structured advertising architecture focused on commercial efficiency, not vanity metrics." },
    { icon: Globe, title: "International Expansion Advisory", desc: "Strategic guidance for entering new international marketplaces with localised approaches." },
    { icon: Warehouse, title: "3PL + Marketplace Hybrid", desc: "Integrated consulting and logistics engagement for end-to-end marketplace operations." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-engagement-models">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-engagement-headline">
            Flexible Engagement Structures
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Each engagement is structured around clear KPIs and commercial milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <Card key={model.title} className="bg-white border-0 p-0 overflow-visible" data-testid={`card-engagement-${model.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8">
                <div className="w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center mb-5">
                  <model.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-2">{model.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{model.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAreNot() {
  const notList = [
    "A listing-only service",
    "A short-term PPC agency",
    "A dropshipping consultancy",
    "A passive Amazon 'guru' model",
  ];

  const areList = [
    "Infrastructure-focused",
    "Commercially disciplined",
    "Growth-aligned",
    "Operationally integrated",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-who-we-are-not">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Positioning</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight" data-testid="text-not-headline">
            Not a Generic Ecommerce Agency
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-red-50 rounded-xl p-8">
            <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-6">We are not:</h3>
            <div className="space-y-4">
              {notList.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-[#64748B] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-6">We are:</h3>
            <div className="space-y-4">
              {areList.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-[#0F172A] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultingCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9]" data-testid="section-consulting-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-consulting-cta-headline">
          Ready to Build Structured Marketplace Growth?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          If your brand requires disciplined strategy, operational alignment, and scalable execution across marketplaces, Tilz Group provides the systems to support that growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#1E40AF] border-white font-semibold px-8" data-testid="button-consulting-cta-strategy">
              Book a Strategy Call
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 font-semibold px-8" data-testid="button-consulting-cta-assessment">
              Request Marketplace Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
