import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Clock,
  Globe,
  Layers,
  Monitor,
  Package,
  TrendingUp,
  Truck,
} from "lucide-react";
import { articles } from "@/data/articles";
import { useSeoMeta } from "@/hooks/use-seo-meta";

const iconMap: Record<string, React.ElementType> = {
  "export-pricing-strategy": TrendingUp,
  "scaling-via-amazon-uk": BarChart3,
  "digitising-3pl-for-sme-exporters": Monitor,
  "batch-expiry-management-3pl": Package,
  "multi-marketplace-strategy": Layers,
  "digital-platforms-cross-border-trade": Globe,
  "fba-vs-seller-fulfilled": Truck,
  "international-market-entry": Globe,
  "tilz-group-commerce-infrastructure": Building2,
};

const categories = ["All", "Ecommerce Strategy", "Logistics & Supply Chain", "Export & Trade", "Marketplace Trends", "Company Updates"];

export default function Insights() {
  useSeoMeta({
    title: "Insights",
    description:
      "Expert commentary on ecommerce strategy, Amazon marketplace trends, 3PL logistics, and cross-border B2B trade from the Tilz Group team.",
    path: "/insights",
  });
  return (
    <div className="pt-20">
      <InsightsHero />
      <InsightsGrid />
      <InsightsCTA />
    </div>
  );
}

function InsightsHero() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28" data-testid="section-insights-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Insights & Thought Leadership</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-insights-hero-headline">
          Commerce Intelligence
        </h1>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Practical thinking on ecommerce strategy, logistics operations, international trade, and digital commerce from the Tilz Group team.
        </p>
      </div>
    </section>
  );
}

function InsightsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-insights-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                i === 0
                  ? "bg-[#1E40AF] text-white"
                  : "bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A]"
              }`}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            const Icon = iconMap[article.slug] ?? BookOpen;
            return (
              <Link key={article.slug} href={`/insights/${article.slug}`}>
                <Card className="bg-[#F1F5F9] border-0 p-0 overflow-visible group cursor-pointer h-full" data-testid={`card-article-${article.slug}`}>
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div className="inline-flex items-center gap-1 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full px-3 py-1 text-xs font-semibold">
                        <BookOpen className="w-3 h-3" />
                        {article.category}
                      </div>
                      <div className="flex items-center gap-1 text-[#64748B] text-xs">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-3 leading-snug flex-1">{article.title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed mb-5">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InsightsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-insights-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-6">
          Want to Discuss a Topic?
        </h2>
        <p className="text-[#64748B] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Our team is always happy to discuss commerce strategy, logistics operations, or digital trade opportunities.
        </p>
        <Link href="/contact">
          <Button size="lg" className="font-semibold px-10" data-testid="button-insights-contact">
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
