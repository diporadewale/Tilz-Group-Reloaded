import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-20 bg-[#F1F5F9]">
        <div className="text-center px-6">
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">404 Error</p>
          <h1 className="text-5xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-404-headline">
            Page Not Found
          </h1>
          <p className="text-[#64748B] text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button size="lg" className="font-semibold" data-testid="button-go-home">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
