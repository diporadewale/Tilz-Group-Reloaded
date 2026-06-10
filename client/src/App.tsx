import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";
import Home from "@/pages/home";
import Services from "@/pages/services";
import EcommerceConsulting from "@/pages/ecommerce-consulting";
import Logistics from "@/pages/logistics";
import Hercommerce from "@/pages/hercommerce";
import About from "@/pages/about";
import Brands from "@/pages/brands";
import Insights from "@/pages/insights";
import Article from "@/pages/article";
import Partnerships from "@/pages/partnerships";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import CookiePolicy from "@/pages/cookie-policy";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[#1E40AF] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/services" component={() => <Layout><Services /></Layout>} />
      <Route path="/services/ecommerce-consulting" component={() => <Layout><EcommerceConsulting /></Layout>} />
      <Route path="/services/3pl-logistics" component={() => <Layout><Logistics /></Layout>} />
      <Route path="/services/hercommerce" component={() => <Layout><Hercommerce /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route path="/brands" component={() => <Layout><Brands /></Layout>} />
      <Route path="/insights" component={() => <Layout><Insights /></Layout>} />
      <Route path="/insights/:slug" component={() => <Layout><Article /></Layout>} />
      <Route path="/partnerships" component={() => <Layout><Partnerships /></Layout>} />
      <Route path="/contact" component={() => <Layout><Contact /></Layout>} />
      <Route path="/privacy-policy" component={() => <Layout><PrivacyPolicy /></Layout>} />
      <Route path="/terms" component={() => <Layout><Terms /></Layout>} />
      <Route path="/cookie-policy" component={() => <Layout><CookiePolicy /></Layout>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
