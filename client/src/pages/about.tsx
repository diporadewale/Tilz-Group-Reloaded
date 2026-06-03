import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Globe,
  Lightbulb,
  MapPin,
  Monitor,
  Package,
  Rocket,
  Shield,
  Target,
  Users,
  Warehouse,
} from "lucide-react";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export default function About() {
  useSeoMeta({
    title: "About Us",
    description:
      "Learn how Tilz Group was built to give manufacturers and brands access to enterprise-grade commerce operations — consulting, logistics, and digital trade under one roof.",
    path: "/about",
  });
  return (
    <div className="pt-20">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <LeadershipSection />
      <InfrastructureCapability />
      <GlobalFootprint />
      <ValuesSection />
      <TimelineSection />
      <AboutCTA />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28" data-testid="section-about-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">About Tilz Group</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-about-hero-headline">
          Built in the UK. Designed for Global Markets.
        </h1>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Tilz Group is a multi-vertical commerce company – operating across marketplace consulting, 3PL logistics, and digital trade – built to give brands and manufacturers the infrastructure they need to compete internationally.
        </p>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-our-story">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-story-headline">
              Founded on a Clear Commercial Purpose
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              Tilz Group was founded to solve a specific problem: manufacturers and brands with strong products struggle to reach global markets efficiently. What began as a focused ecommerce consulting practice has grown into a comprehensive commerce infrastructure company.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              We recognised early that marketplace listings alone are not enough. Brands need end-to-end support – from initial strategy and sourcing through to physical storage, fulfilment, and digital trade facilitation.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed">
              Today, Tilz Group operates across three core verticals – Ecommerce Consulting, 3PL Logistics, and Hercommerce – each designed to work as a standalone service or as part of a fully integrated commerce operation.
            </p>
          </div>

          <div className="bg-[#F1F5F9] rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "20+", label: "Global Trade Partners" },
                { value: "3", label: "Core Verticals" },
                { value: "4", label: "Consumer Brands" },
                { value: "Leeds", label: "UK Headquarters" },
              ].map((stat) => (
                <div key={stat.label} className="text-center" data-testid={`about-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <p className="text-3xl font-bold text-[#1E40AF] font-['Poppins'] mb-1">{stat.value}</p>
                  <p className="text-[#64748B] text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-mission-vision">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border-0 p-0 overflow-visible" data-testid="card-mission">
            <div className="p-10">
              <div className="w-14 h-14 bg-[#1E40AF] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] font-['Poppins'] mb-4">Our Mission</h3>
              <p className="text-[#64748B] text-lg leading-relaxed">
                To give brands, manufacturers, and trade partners the infrastructure, expertise, and technology they need to compete and grow in global markets – building scalable commerce systems that create lasting commercial value.
              </p>
            </div>
          </Card>

          <Card className="bg-white border-0 p-0 overflow-visible" data-testid="card-vision">
            <div className="p-10">
              <div className="w-14 h-14 bg-[#0EA5E9] rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] font-['Poppins'] mb-4">Our Vision</h3>
              <p className="text-[#64748B] text-lg leading-relaxed">
                To become a recognised global commerce infrastructure company – known for operational excellence in logistics, innovation in digital trade, and deep marketplace expertise. A platform where manufacturers of any size can access and compete in international markets.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const team = [
    {
      name: "Tilz Group Leadership",
      role: "Executive Team",
      desc: "Our leadership team brings together decades of experience in ecommerce, international trade, logistics, and digital innovation.",
    },
    {
      name: "Commerce Division",
      role: "Ecommerce & Consulting",
      desc: "Expert marketplace strategists with deep knowledge of Amazon, eBay, and global platform dynamics.",
    },
    {
      name: "Logistics Division",
      role: "3PL & Operations",
      desc: "Experienced logistics professionals managing secure warehousing, fulfilment, and supply chain operations across the UK.",
    },
    {
      name: "Technology Division",
      role: "Hercommerce & Digital",
      desc: "Innovation-focused team building the digital trade platforms and tools that power modern B2B commerce.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-leadership">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-leadership-headline">
            The Team Behind Tilz Group
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Our divisions are led by specialists with deep industry knowledge and a shared commitment to excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card key={member.name} className="bg-[#F1F5F9] border-0 p-0 overflow-visible" data-testid={`card-team-${member.role.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-2xl flex items-center justify-center mb-5">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-1">{member.name}</h3>
                <p className="text-[#0EA5E9] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-[#64748B] text-sm leading-relaxed">{member.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfrastructureCapability() {
  const capabilities = [
    { icon: Warehouse, title: "UK Warehousing", desc: "Secure, scalable storage facilities with climate-appropriate zones and 24/7 security coverage." },
    { icon: Monitor, title: "Digital Systems", desc: "Real-time inventory management, automated dispatch notifications, and client portal access." },
    { icon: Package, title: "Fulfilment Operations", desc: "Pick, pack, and dispatch with same-day capability and multi-carrier shipping integration." },
    { icon: Shield, title: "Compliance & Quality", desc: "Batch tracking, expiry management, and quality control processes for regulated products." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-infrastructure-capability">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Infrastructure & Capability</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-infrastructure-capability-headline">
            Built for Operational Excellence
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Our infrastructure combines physical logistics capability with digital technology to deliver reliable, scalable commerce operations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="bg-white border-0 p-0 overflow-visible" data-testid={`card-infrastructure-${cap.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-[#1E40AF] rounded-xl flex items-center justify-center mx-auto mb-5">
                  <cap.icon className="w-7 h-7 text-white" />
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

function GlobalFootprint() {
  const markets = [
    { region: "United Kingdom", desc: "Headquarters, warehousing, and primary marketplace operations.", primary: true },
    { region: "European Union", desc: "Expanding marketplace presence and cross-border trade facilitation.", primary: false },
    { region: "North America", desc: "International expansion advisory and marketplace entry support.", primary: false },
    { region: "Middle East & Africa", desc: "Trade partnership development through Hercommerce platform.", primary: false },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A]" data-testid="section-global-footprint">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Global Footprint</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-global-footprint-headline">
              UK-Based, Globally Connected
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              While headquartered in the United Kingdom, Tilz Group's operations and partnerships extend across international markets. Our infrastructure and expertise support brands wherever they trade.
            </p>
            <div className="space-y-4">
              {markets.map((market) => (
                <div key={market.region} className="flex items-start gap-4" data-testid={`market-${market.region.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className={`w-10 h-10 ${market.primary ? 'bg-[#0EA5E9]' : 'bg-[#1E40AF]/20'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <MapPin className={`w-5 h-5 ${market.primary ? 'text-white' : 'text-[#0EA5E9]'}`} />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-['Poppins']">{market.region}</p>
                    <p className="text-slate-400 text-sm">{market.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
              <Globe className="w-24 h-24 text-[#0EA5E9]/30 mx-auto mb-6" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Trade Partners" },
                  { value: "Multi", label: "Marketplaces" },
                  { value: "UK", label: "HQ & Operations" },
                  { value: "Global", label: "Market Reach" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-800 rounded-xl p-4">
                    <p className="text-[#0EA5E9] font-bold text-xl font-['Poppins']">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
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

function ValuesSection() {
  const values = [
    { icon: Shield, title: "Integrity", desc: "We build trust through transparency, accountability, and honest business practices." },
    { icon: Rocket, title: "Innovation", desc: "We embrace technology and creative thinking to solve complex commerce challenges." },
    { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in every service we deliver." },
    { icon: Globe, title: "Global Perspective", desc: "We think globally while delivering locally, connecting markets across borders." },
    { icon: Users, title: "Partnership", desc: "We succeed when our partners succeed. Collaboration is at our core." },
    { icon: Building2, title: "Scalability", desc: "We build infrastructure designed to grow with our clients' ambitions." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A]" data-testid="section-values">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-4" data-testid="text-values-headline">
            What Drives Us Forward
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our values shape every decision, partnership, and innovation at Tilz Group.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8" data-testid={`value-${value.title.toLowerCase()}`}>
              <value.icon className="w-10 h-10 text-[#0EA5E9] mb-5" />
              <h3 className="text-lg font-bold text-white font-['Poppins'] mb-2">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const milestones = [
    { year: "Foundation", title: "Tilz Group Established", desc: "Founded with a vision to bridge manufacturers to global consumer markets through ecommerce expertise." },
    { year: "Growth", title: "3PL Operations Launched", desc: "Expanded into third-party logistics with UK-based warehousing and fulfilment infrastructure." },
    { year: "Innovation", title: "Hercommerce Platform", desc: "Launched Hercommerce, a digital B2B trade platform connecting exporters to global markets." },
    { year: "Today", title: "Multi-Vertical Operations", desc: "Operating across consulting, logistics, and digital trade with 20+ global trade partners." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-timeline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight" data-testid="text-timeline-headline">
            Key Milestones
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, i) => (
            <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0" data-testid={`milestone-${milestone.year.toLowerCase()}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#1E40AF] rounded-full flex items-center justify-center text-white font-bold text-xs font-['Poppins'] flex-shrink-0">
                  {milestone.year.substring(0, 3)}
                </div>
                {i < milestones.length - 1 && <div className="w-0.5 bg-[#1E40AF]/20 flex-1 mt-2" />}
              </div>
              <div className="pb-8">
                <p className="text-[#0EA5E9] text-sm font-semibold mb-1">{milestone.year}</p>
                <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-2">{milestone.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9]" data-testid="section-about-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6">
          Join the Tilz Group Journey
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you're looking to partner, invest, or explore career opportunities, we'd love to hear from you.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-[#1E40AF] border-white font-semibold px-10" data-testid="button-about-contact">
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
