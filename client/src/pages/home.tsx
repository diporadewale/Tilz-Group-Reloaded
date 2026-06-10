import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Warehouse,
  Monitor,
  Package,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Building2,
  ShoppingCart,
  Boxes,
  Gamepad2,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { SiAmazon, SiEbay } from "react-icons/si";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { OrganizationJsonLd } from "@/components/json-ld";

export default function Home() {
  useSeoMeta({
    title: "Commerce Infrastructure for Brands Built to Scale",
    description:
      "Tilz Group delivers end-to-end commerce capability — marketplace consulting, UK 3PL logistics, and digital B2B trade — for manufacturers and brands ready to grow globally.",
    path: "/",
  });
  return (
    <div className="pt-20">
      <OrganizationJsonLd />
      <HeroSection />
      <WhoWeAre />
      <CoreServices />
      <OurBrands />
      <GlobalInfrastructure />
      <PartnershipsSection />
      <InsightsSection />
      <StrategicCTA />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#1E40AF] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Poppins'] tracking-tight mb-6" data-testid="text-hero-headline">
              Commerce Infrastructure for Brands Built to Scale
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl" data-testid="text-hero-subheadline">
              Tilz Group delivers end-to-end commerce capability – from marketplace strategy and UK logistics to digital B2B trade – built for manufacturers and brands ready to grow globally.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold px-8" data-testid="button-hero-contact">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 backdrop-blur-sm font-semibold px-8" data-testid="button-hero-services">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Globe className="w-8 h-8 text-[#0EA5E9] mx-auto mb-3" />
                    <p className="text-white font-semibold text-sm">Global Markets</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Warehouse className="w-8 h-8 text-[#0EA5E9] mx-auto mb-3" />
                    <p className="text-white font-semibold text-sm">UK Warehousing</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Monitor className="w-8 h-8 text-[#0EA5E9] mx-auto mb-3" />
                    <p className="text-white font-semibold text-sm">Digital Platforms</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <BarChart3 className="w-8 h-8 text-[#0EA5E9] mx-auto mb-3" />
                    <p className="text-white font-semibold text-sm">Analytics & Growth</p>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-xs">End-to-End Commerce</span>
                    <span className="text-[#0EA5E9] text-xs font-semibold">3 Verticals</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#1E40AF] to-[#0EA5E9] h-2 rounded-full" style={{ width: '100%' }} />
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

function WhoWeAre() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-who-we-are">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-who-headline">
              Building Scalable Commerce Infrastructure
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              Tilz Group is a multi-vertical commerce company operating across marketplace consulting, third-party logistics, and digital trade platforms.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              With international sourcing and distribution experience, we bridge manufacturers to global markets. Our integrated approach combines digital expertise with physical infrastructure to deliver end-to-end commerce solutions.
            </p>
            <Link href="/about">
              <Button variant="outline" className="font-semibold" data-testid="button-learn-more">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Users, value: "20+", label: "Global Trade Partners", desc: "Established relationships across international markets" },
              { icon: ShoppingCart, value: "Amazon & eBay", label: "Marketplace Expertise", desc: "Proven presence on the UK's leading sales channels" },
              { icon: Warehouse, value: "Leeds, UK", label: "3PL Headquarters", desc: "Secure warehousing with real-time digital inventory systems" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-start gap-5 p-6 bg-[#F1F5F9] rounded-xl" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#1E40AF] font-bold text-lg font-['Poppins']">{stat.value}</p>
                  <p className="text-[#0F172A] font-semibold text-sm">{stat.label}</p>
                  <p className="text-[#64748B] text-sm mt-1">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  const services = [
    {
      icon: BarChart3,
      title: "Ecommerce & Marketplace Consulting",
      description: "Helping brands and manufacturers scale on Amazon and global marketplaces. We provide strategic guidance, listing optimisation, and growth management.",
      cta: "Explore Consulting",
      href: "/services/ecommerce-consulting",
      gradient: "from-[#1E40AF] to-[#3B82F6]",
    },
    {
      icon: Package,
      title: "3PL Storage & Logistics",
      description: "Secure UK-based warehousing with expiry management, bundling, and fulfilment. Complete supply chain solutions for growing brands.",
      cta: "Explore Logistics",
      href: "/services/3pl-logistics",
      gradient: "from-[#0F172A] to-[#334155]",
    },
    {
      icon: Zap,
      title: "Hercommerce",
      description: "A digital B2B trade platform connecting exporters to global markets. Innovation-driven commerce technology for modern trade.",
      cta: "Discover Hercommerce",
      href: "/services/hercommerce",
      gradient: "from-[#0EA5E9] to-[#06B6D4]",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-core-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Core Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-services-headline">
            Three Verticals. One Integrated Capability.
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Strategy, logistics, and digital trade – each vertical operates independently and works better together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group bg-white border-0 shadow-sm p-0 overflow-visible" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-3">{service.title}</h3>
                <p className="text-[#64748B] leading-relaxed mb-6">{service.description}</p>
                <Link href={service.href}>
                  <span className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all" data-testid={`link-service-${service.cta.toLowerCase().replace(/\s+/g, '-')}`}>
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurBrands() {
  const brands = [
    { icon: Building2, name: "Tilz Collection", desc: "Premium food gifts and artisan products", href: "https://tilzcollection.co.uk" },
    { icon: ShieldCheck, name: "Tilz Gear", desc: "Quality accessories and equipment", href: null },
    { icon: Boxes, name: "TilzMart", desc: "Multi-category retail marketplace", href: null },
    { icon: Gamepad2, name: "Tilz Toys", desc: "Fun, safe, and innovative toys for children", href: null },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-brands">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Brands</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-brands-headline">
            Our Consumer & Retail Brands
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Tilz Group operates real products across multiple retail categories, showcasing our marketplace expertise in action.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card key={brand.name} className="bg-[#F1F5F9] border-0 p-0 overflow-visible group" data-testid={`card-brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <brand.icon className="w-8 h-8 text-[#1E40AF]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-2">{brand.name}</h3>
                <p className="text-[#64748B] text-sm mb-4">{brand.desc}</p>
                {brand.href ? (
                  <a href={brand.href} target="_blank" rel="noopener noreferrer" data-testid={`link-visit-${brand.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="inline-flex items-center gap-1 text-[#1E40AF] font-semibold text-sm cursor-pointer group-hover:gap-2 transition-all">
                      Visit Brand <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[#94A3B8] font-semibold text-sm">
                    Coming Soon
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalInfrastructure() {
  const capabilities = [
    { icon: Warehouse, label: "UK Warehousing" },
    { icon: Globe, label: "International Sourcing" },
    { icon: ShoppingCart, label: "Marketplace Distribution" },
    { icon: ShieldCheck, label: "Batch & Expiry Management" },
    { icon: Monitor, label: "Digital Inventory Systems" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A]" data-testid="section-infrastructure">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Global Trade & Infrastructure</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-infrastructure-headline">
              Enterprise-Grade Commerce Infrastructure
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Our infrastructure is designed to support brands at every stage of growth. From secure UK-based warehousing to digital inventory management, we provide the backbone for scalable commerce operations.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {capabilities.map((cap) => (
                <div key={cap.label} className="flex items-center gap-4" data-testid={`capability-${cap.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-10 h-10 bg-[#1E40AF]/20 rounded-lg flex items-center justify-center">
                    <cap.icon className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <span className="text-white font-medium">{cap.label}</span>
                </div>
              ))}
            </div>

            <Link href="/services">
              <Button size="lg" className="bg-[#0EA5E9] text-white border-[#0EA5E9] font-semibold" data-testid="button-infrastructure-cta">
                Learn About Our Infrastructure
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
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
                    <span className="text-slate-400 text-xs">Warehouse Capacity</span>
                    <span className="text-[#0EA5E9] text-xs font-bold">94%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-[#0EA5E9] h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Order Fulfilment Rate</span>
                    <span className="text-green-400 text-xs font-bold">99.2%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '99%' }} />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Inventory Accuracy</span>
                    <span className="text-[#1E40AF] text-xs font-bold">99.8%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-[#1E40AF] h-2 rounded-full" style={{ width: '99.8%' }} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <p className="text-[#0EA5E9] font-bold text-lg">1.2K</p>
                    <p className="text-slate-500 text-xs">SKUs Managed</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <p className="text-green-400 font-bold text-lg">48h</p>
                    <p className="text-slate-500 text-xs">Avg Dispatch</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <p className="text-[#1E40AF] font-bold text-lg">5</p>
                    <p className="text-slate-500 text-xs">Markets</p>
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

function PartnershipsSection() {
  const partners = [
    { icon: SiAmazon, name: "Amazon" },
    { icon: SiEbay, name: "eBay" },
    { icon: Globe, name: "SheTrades" },
    { icon: Building2, name: "UK Trade Bodies" },
    { icon: TrendingUp, name: "University Partners" },
    { icon: ShieldCheck, name: "Certified Operations" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-partnerships">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Partnerships & Networks</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-partnerships-headline">
          Trusted by Trade Organisations and Global Partners
        </h2>
        <p className="text-[#64748B] text-lg max-w-2xl mx-auto mb-16">
          We work alongside leading marketplaces, trade bodies, and institutional partners to deliver credible, scalable commerce solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm" data-testid={`partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <partner.icon className="w-8 h-8 text-[#64748B]" />
              <p className="text-[#0F172A] text-sm font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  const articles = [
    {
      icon: TrendingUp,
      title: "Export Pricing Strategy for Global Markets",
      desc: "How to structure competitive pricing when entering international marketplaces while maintaining healthy margins.",
      tag: "Strategy",
    },
    {
      icon: BarChart3,
      title: "Scaling via Amazon UK: A Practical Guide",
      desc: "Our proven framework for launching and scaling products on Amazon's UK marketplace effectively.",
      tag: "Growth",
    },
    {
      icon: Monitor,
      title: "Digitising 3PL for SME Exporters",
      desc: "How digital inventory and logistics systems are transforming fulfilment for small and medium exporters.",
      tag: "Technology",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-insights">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight" data-testid="text-insights-headline">
              Thought Leadership
            </h2>
          </div>
          <Link href="/insights">
            <span className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold cursor-pointer">
              Read Our Insights <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title} className="bg-[#F1F5F9] border-0 p-0 overflow-visible group" data-testid={`card-insight-${article.tag.toLowerCase()}`}>
              <div className="p-8">
                <div className="inline-flex items-center gap-1 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full px-3 py-1 text-xs font-semibold mb-5">
                  <BookOpen className="w-3 h-3" />
                  {article.tag}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-3 leading-snug">{article.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{article.desc}</p>
                <span className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategicCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9]" data-testid="section-strategic-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-cta-headline">
          Ready to Scale Your Commerce Infrastructure?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you're a manufacturer, brand, or trade partner, Tilz Group provides the systems to help you grow.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#1E40AF] border-white font-semibold px-8" data-testid="button-cta-strategy">
              Book a Strategy Call
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 font-semibold px-8" data-testid="button-cta-3pl">
              Become a 3PL Client
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 font-semibold px-8" data-testid="button-cta-hercommerce">
              Partner With Hercommerce
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
