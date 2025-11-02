import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ColorAnalyzer } from "@/components/ColorAnalyzer";
import { ColorblindnessInfo } from "@/components/ColorblindnessInfo";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const analyzerRef = useRef<HTMLDivElement>(null);

  const scrollToAnalyzer = () => {
    analyzerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">ColorSense</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="pt-16">
        <HeroSection onGetStarted={scrollToAnalyzer} />
        
        <div ref={analyzerRef}>
          <ColorAnalyzer />
        </div>
        
        <ColorblindnessInfo />
        <HowItWorks />
        <StatsSection />
        <Footer />
      </div>
    </div>
  );
}
