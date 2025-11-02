import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          See Colors
          <span className="block text-primary mt-2">More Clearly</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Upload any image to instantly identify colors with accessible labels, hex codes, and visual patterns. 
          Designed for everyone, especially those with color vision deficiency.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={onGetStarted}
            data-testid="button-get-started"
            className="text-base px-8 py-6 h-auto"
          >
            Analyze Your Image
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-learn-more"
            className="text-base px-8 py-6 h-auto"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Supports 3 types of colorblindness</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Free & Private</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>No account needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
