import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export interface ExtractedColor {
  name: string;
  hex: string;
  percentage: number;
}

interface ColorPaletteProps {
  colors: ExtractedColor[];
  onDownload?: () => void;
  onAnalyzeAnother?: () => void;
}

export function ColorPalette({ colors, onDownload, onAnalyzeAnother }: ColorPaletteProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h3 className="text-2xl font-bold">Extracted Colors</h3>
          <p className="text-muted-foreground">{colors.length} dominant colors identified</p>
        </div>
        <div className="flex gap-3">
          {onDownload && (
            <Button variant="outline" onClick={onDownload} data-testid="button-download-palette">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          )}
          {onAnalyzeAnother && (
            <Button onClick={onAnalyzeAnother} data-testid="button-analyze-another">
              Analyze Another
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {colors.map((color, index) => (
          <Card
            key={index}
            className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
            data-testid={`card-color-${index}`}
            onClick={() => {
              navigator.clipboard.writeText(color.hex);
              console.log('Copied to clipboard:', color.hex);
            }}
          >
            <div
              className="h-32 w-full relative group"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-2 right-2 text-xs font-medium px-2 py-1 rounded bg-background/90 backdrop-blur-sm">
                {color.percentage}%
              </div>
            </div>
            <div className="p-4 space-y-1">
              <p className="font-medium text-sm uppercase tracking-wide truncate" title={color.name}>
                {color.name}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {color.hex}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
