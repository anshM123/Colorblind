import { useState } from "react";
import { ColorUploader } from "./ColorUploader";
import { ColorPalette, ExtractedColor } from "./ColorPalette";
import { extractColorsFromImage } from "@/lib/colorUtils";
import { useToast } from "@/hooks/use-toast";

export function ColorAnalyzer() {
  const [colors, setColors] = useState<ExtractedColor[] | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const analyzeImage = async (file: File) => {
    setIsAnalyzing(true);
    
    try {
      const extractedColors = await extractColorsFromImage(file);
      setColors(extractedColors);
      toast({
        title: "Analysis Complete",
        description: `Found ${extractedColors.length} dominant colors in your image.`,
      });
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze the image. Please try another file.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAnalyzeAnother = () => {
    setColors(null);
  };

  const handleDownload = () => {
    if (!colors) return;
    
    const text = colors.map(c => 
      `${c.name}\t${c.hex}\t${c.percentage}%`
    ).join('\n');
    
    const header = 'Color Name\tHex Code\tPercentage\n';
    const csvContent = header + text;
    
    const blob = new Blob([csvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'color-palette.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Palette Downloaded",
      description: "Your color palette has been saved.",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Color Analysis Tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your image to discover its color palette with accessible labels
          </p>
        </div>

        {isAnalyzing ? (
          <div className="flex flex-col items-center justify-center min-h-96 space-y-4">
            <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-lg text-muted-foreground">Analyzing colors...</p>
          </div>
        ) : colors ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ColorUploader onImageUpload={analyzeImage} />
            </div>
            <div>
              <ColorPalette
                colors={colors}
                onDownload={handleDownload}
                onAnalyzeAnother={handleAnalyzeAnother}
              />
            </div>
          </div>
        ) : (
          <ColorUploader onImageUpload={analyzeImage} />
        )}
      </div>
    </section>
  );
}
