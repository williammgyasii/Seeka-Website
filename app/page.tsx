import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeBand from "./components/MarqueeBand";
import ProductShowcase from "./components/ProductShowcase";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import BlogPreview from "./components/BlogPreview";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand
          texts={[
            "Discover",
            "Qualify",
            "Outreach",
            "Close",
            "Automate",
            "Win",
          ]}
        />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <MarqueeBand
          texts={[
            "Your opportunity pipeline",
            "Streamlined for growth",
            "Powered by AI",
            "Built for seekers",
          ]}
          reverse
          speed={35}
        />
        <AnalyticsDashboard />
        <UseCases />
        <Pricing />
        <FAQ />
        <BlogPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
