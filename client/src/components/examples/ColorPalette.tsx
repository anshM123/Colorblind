import { ColorPalette } from '../ColorPalette';

export default function ColorPaletteExample() {
  const mockColors = [
    { name: 'Sky Blue', hex: '#87CEEB', percentage: 28 },
    { name: 'Forest Green', hex: '#228B22', percentage: 22 },
    { name: 'Sunset Orange', hex: '#FF6347', percentage: 18 },
    { name: 'Royal Purple', hex: '#6A5ACD', percentage: 15 },
    { name: 'Golden Yellow', hex: '#FFD700', percentage: 10 },
    { name: 'Slate Gray', hex: '#708090', percentage: 7 },
  ];

  return (
    <ColorPalette
      colors={mockColors}
      onDownload={() => console.log('Download clicked')}
      onAnalyzeAnother={() => console.log('Analyze another clicked')}
    />
  );
}
