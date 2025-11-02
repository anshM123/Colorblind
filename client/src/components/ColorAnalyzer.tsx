import { useState } from "react";
import { ColorUploader } from "./ColorUploader";
import { ColorPalette, ExtractedColor } from "./ColorPalette";

export function ColorAnalyzer() {
  const [colors, setColors] = useState<ExtractedColor[] | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeImage = async (file: File) => {
    setIsAnalyzing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockColors: ExtractedColor[] = [
      { name: 'Ocean Blue', hex: '#2196F3', percentage: 32 },
      { name: 'Sunset Orange', hex: '#FF5722', percentage: 24 },
      { name: 'Forest Green', hex: '#4CAF50', percentage: 18 },
      { name: 'Royal Purple', hex: '#9C27B0', percentage: 12 },
      { name: 'Golden Yellow', hex: '#FFC107', percentage: 8 },
      { name: 'Charcoal Gray', hex: '#424242', percentage: 6 },
    ];
    
    setColors(mockColors);
    setIsAnalyzing(false);
  };

  const handleAnalyzeAnother = () => {
    setColors(null);
  };

  const handleDownload = () => {
    console.log('Downloading palette...');
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
