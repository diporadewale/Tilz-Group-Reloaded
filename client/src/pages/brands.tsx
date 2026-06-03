import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import {
  ArrowRight,
  Boxes,
  Building2,
  Gamepad2,
  Globe,
  Package,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Star,
  Tag,
} from "lucide-react";

export default function Brands() {
  useSeoMeta({
    title: "Our Consumer Brands",
    description:
      "Discover the consumer brands within the Tilz Group portfolio — including Tilz Collection, premium food gifts for all occasions. More brands launching soon.",
    path: "/brands",
  });
  return (
    <div className="pt-20">
      <BrandsHero />
      <BrandsOverview />
      <BrandDetail />
      <MarketplacePresence />
      <BrandsCTA />
    </div>
  );
}

function BrandsHero() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28" data-testid="section-brands-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Our Brands</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-brands-hero-headline">
          Our Consumer & Retail Brands
        </h1>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Tilz Group doesn't just consult — we operate real products across multiple retail categories, demonstrating our marketplace expertise through hands-on brand management.
        </p>
      </div>
    </section>
  );
}

function BrandsOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-brands-overview">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Brand Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6" data-testid="text-brands-overview-headline">
              Marketplace Expertise in Action
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">
              Each Tilz brand represents our commitment to operational excellence and marketplace mastery. We manage every aspect of the brand lifecycle — from product sourcing and quality control to listing optimisation and fulfilment.
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed">
              Our brand portfolio demonstrates the same structured approach we bring to our consulting and logistics clients, proving that our strategies work through real-world execution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "4", label: "Active Brands" },
              { value: "Multi", label: "Categories" },
              { value: "UK+", label: "Market Reach" },
              { value: "Direct", label: "To Consumer" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-[#F1F5F9] rounded-xl" data-testid={`brand-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="text-3xl font-bold text-[#1E40AF] font-['Poppins'] mb-1">{stat.value}</p>
                <p className="text-[#64748B] text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandDetail() {
  const brands = [
    {
      icon: Building2,
      name: "Tilz Collection",
      tagline: "Premium food gifts and artisan products",
      description: "Tilz Collection is a curated premium food gifts brand — artisan hampers, spices, hot sauces, and gourmet food products. Available across major UK marketplaces and via direct channels.",
      categories: ["Premium Food Gifts", "Artisan Hampers", "Gourmet Food"],
      color: "from-[#1E40AF] to-[#3B82F6]",
      href: "https://tilzcollection.co.uk",
    },
    {
      icon: ShieldCheck,
      name: "Tilz Gear",
      tagline: "Quality accessories and equipment",
      description: "Tilz Gear specialises in durable accessories and equipment designed for active lifestyles. Built for reliability with marketplace-optimised product positioning.",
      categories: ["Accessories", "Equipment", "Outdoor"],
      color: "from-[#0F172A] to-[#334155]",
      href: null,
    },
    {
      icon: Boxes,
      name: "TilzMart",
      tagline: "Multi-category retail marketplace brand",
      description: "TilzMart operates across diverse product categories, leveraging Tilz Group's marketplace expertise to deliver competitive products with excellent customer experience.",
      categories: ["Multi-Category", "Value Range", "Essentials"],
      color: "from-[#0EA5E9] to-[#06B6D4]",
      href: null,
    },
    {
      icon: Gamepad2,
      name: "Tilz Toys",
      tagline: "Fun, safe, and innovative toys for children",
      description: "Tilz Toys offers a curated range of children's toys and games, with strict safety compliance and engaging product design. A family-focused brand within the Tilz portfolio.",
      categories: ["Children's Toys", "Games", "Educational"],
      color: "from-[#7C3AED] to-[#A855F7]",
      href: null,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-brand-detail">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Brand Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight" data-testid="text-brand-detail-headline">
            Our Brand Family
          </h2>
        </div>

        <div className="space-y-8">
          {brands.map((brand, i) => (
            <Card key={brand.name} className="bg-white border-0 p-0 overflow-visible" data-testid={`card-brand-detail-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-1 flex justify-center">
                    <div className={`w-24 h-24 bg-gradient-to-br ${brand.color} rounded-2xl flex items-center justify-center`}>
                      <brand.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold text-[#0F172A] font-['Poppins'] mb-1">{brand.name}</h3>
                    <p className="text-[#0EA5E9] font-semibold text-sm mb-3">{brand.tagline}</p>
                    <p className="text-[#64748B] leading-relaxed mb-4">{brand.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {brand.categories.map((cat) => (
                        <span key={cat} className="inline-flex items-center gap-1 bg-[#F1F5F9] text-[#64748B] rounded-full px-3 py-1 text-xs font-medium">
                          <Tag className="w-3 h-3" />
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    {brand.href ? (
                      <a
                        href={brand.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold text-sm hover:gap-3 transition-all"
                        data-testid={`link-visit-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Visit Brand <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[#64748B] text-sm bg-[#F1F5F9] rounded-full px-3 py-1">
                        Coming Soon
                      </span>
                    )}
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

function MarketplacePresence() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-marketplace-presence">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Where We Sell</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-marketplace-presence-headline">
            Marketplace Presence
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Our brands are available across leading UK and international marketplaces.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShoppingCart, name: "Amazon UK", desc: "Primary marketplace with FBA and seller-fulfilled listings." },
            { icon: ShoppingBag, name: "eBay", desc: "Established presence across consumer categories." },
            { icon: Globe, name: "International", desc: "Expanding reach across EU and global marketplaces." },
            { icon: Star, name: "Direct Channels", desc: "Select products available through direct-to-consumer channels." },
          ].map((mp) => (
            <div key={mp.name} className="bg-[#F1F5F9] rounded-xl p-8 text-center" data-testid={`marketplace-${mp.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <mp.icon className="w-10 h-10 text-[#1E40AF] mx-auto mb-4" />
              <h3 className="text-[#0F172A] font-bold font-['Poppins'] mb-2">{mp.name}</h3>
              <p className="text-[#64748B] text-sm">{mp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9]" data-testid="section-brands-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-tight mb-6">
          Interested in Our Brands?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you're a retailer, distributor, or wholesale partner, we'd love to explore how our brands can work with your business.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-[#1E40AF] border-white font-semibold px-10" data-testid="button-brands-contact">
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
