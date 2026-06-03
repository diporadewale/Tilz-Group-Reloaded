import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

export default function Article() {
  const [, params] = useRoute("/insights/:slug");
  const slug = params?.slug ?? "";
  const article = getArticleBySlug(slug);

  useSeoMeta(
    article
      ? {
          title: article.title,
          description: article.excerpt,
          path: `/insights/${article.slug}`,
          type: "article",
          author: "Tilz Group",
        }
      : { title: "Article Not Found", description: "This article could not be found.", noIndex: true }
  );

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Not Found</p>
          <h1 className="text-4xl font-bold text-[#0F172A] font-['Poppins'] mb-4">Article Not Found</h1>
          <p className="text-[#64748B] text-lg mb-8">This article doesn't exist or may have moved.</p>
          <Link href="/insights">
            <Button className="font-semibold">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Insights
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  return (
    <div className="pt-20">
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        slug={article.slug}
        category={article.category}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
      />

      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/insights">
            <span className="inline-flex items-center gap-2 text-[#0EA5E9] text-sm font-medium mb-8 cursor-pointer hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </span>
          </Link>
          <div className="inline-flex items-center gap-1 bg-white/10 text-white/80 rounded-full px-3 py-1 text-xs font-semibold mb-6">
            <BookOpen className="w-3 h-3" />
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-article-headline">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
            <span>Tilz Group</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xl text-[#64748B] leading-relaxed mb-10 border-l-4 border-[#0EA5E9] pl-6 italic">
            {article.excerpt}
          </p>
          <div className="prose prose-lg max-w-none">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-[#0F172A] leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100">
            <div className="bg-[#F1F5F9] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[#0F172A] font-bold font-['Poppins'] text-lg mb-1">Want to discuss this topic?</p>
                <p className="text-[#64748B] text-sm">Our team is happy to talk through how this applies to your business.</p>
              </div>
              <Link href="/contact">
                <Button size="lg" className="font-semibold whitespace-nowrap" data-testid="button-article-cta">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="py-20 bg-[#F1F5F9]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0F172A] font-['Poppins'] mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/insights/${related.slug}`}>
                  <div className="bg-white rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow group" data-testid={`card-related-${related.slug}`}>
                    <div className="inline-flex items-center gap-1 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full px-3 py-1 text-xs font-semibold mb-4">
                      <BookOpen className="w-3 h-3" />
                      {related.category}
                    </div>
                    <h3 className="text-[#0F172A] font-bold font-['Poppins'] leading-snug mb-2 group-hover:text-[#1E40AF] transition-colors">{related.title}</h3>
                    <p className="text-[#64748B] text-sm">{related.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
