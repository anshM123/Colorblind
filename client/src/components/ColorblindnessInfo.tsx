import { Card } from "@/components/ui/card";
import { Eye, Users, Palette } from "lucide-react";

const colorblindnessTypes = [
  {
    icon: Eye,
    name: "Protanopia",
    description: "Reduced sensitivity to red light, making it difficult to distinguish between red and green hues.",
    percentage: "1% of males",
    color: "from-red-500/10 to-red-500/5",
  },
  {
    icon: Palette,
    name: "Deuteranopia",
    description: "Reduced sensitivity to green light, the most common form of color vision deficiency.",
    percentage: "5% of males",
    color: "from-green-500/10 to-green-500/5",
  },
  {
    icon: Users,
    name: "Tritanopia",
    description: "Reduced sensitivity to blue light, affecting the ability to see blue and yellow colors.",
    percentage: "0.001% of people",
    color: "from-blue-500/10 to-blue-500/5",
  },
];

export function ColorblindnessInfo() {
  return (
    <section id="learn-more" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Understanding Colorblindness
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Color vision deficiency affects millions worldwide. Learn about the different types
            and how our tool makes colors more accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colorblindnessTypes.map((type, index) => (
            <Card
              key={index}
              className="p-8 space-y-4 hover-elevate"
              data-testid={`card-colorblindness-${index}`}
            >
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${type.color}`}>
                <type.icon className="h-8 w-8 text-foreground" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{type.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
              
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full bg-secondary">
                  Affects {type.percentage}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
