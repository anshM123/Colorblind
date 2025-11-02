import { Upload, Palette, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Image",
    description: "Drag and drop any image or click to browse. We support all common image formats.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Instant Analysis",
    description: "Our tool extracts dominant colors and provides accessible labels with hex codes and percentages.",
  },
  {
    icon: Download,
    number: "03",
    title: "Use Your Palette",
    description: "Copy colors, download your palette, or analyze another image. It's that simple.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to accessible color identification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
              
              <div className="relative bg-background rounded-xl p-8 space-y-4 border hover-elevate">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-mono text-muted-foreground">{step.number}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
