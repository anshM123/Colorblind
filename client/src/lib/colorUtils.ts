interface RGB {
  r: number;
  g: number;
  b: number;
}

interface NamedColor {
  name: string;
  hex: string;
  rgb: RGB;
}

const commonColors: NamedColor[] = [
  { name: 'Black', hex: '#000000', rgb: { r: 0, g: 0, b: 0 } },
  { name: 'White', hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 } },
  { name: 'Red', hex: '#FF0000', rgb: { r: 255, g: 0, b: 0 } },
  { name: 'Green', hex: '#00FF00', rgb: { r: 0, g: 255, b: 0 } },
  { name: 'Blue', hex: '#0000FF', rgb: { r: 0, g: 0, b: 255 } },
  { name: 'Yellow', hex: '#FFFF00', rgb: { r: 255, g: 255, b: 0 } },
  { name: 'Cyan', hex: '#00FFFF', rgb: { r: 0, g: 255, b: 255 } },
  { name: 'Magenta', hex: '#FF00FF', rgb: { r: 255, g: 0, b: 255 } },
  { name: 'Silver', hex: '#C0C0C0', rgb: { r: 192, g: 192, b: 192 } },
  { name: 'Gray', hex: '#808080', rgb: { r: 128, g: 128, b: 128 } },
  { name: 'Maroon', hex: '#800000', rgb: { r: 128, g: 0, b: 0 } },
  { name: 'Olive', hex: '#808000', rgb: { r: 128, g: 128, b: 0 } },
  { name: 'Lime', hex: '#00FF00', rgb: { r: 0, g: 255, b: 0 } },
  { name: 'Aqua', hex: '#00FFFF', rgb: { r: 0, g: 255, b: 255 } },
  { name: 'Teal', hex: '#008080', rgb: { r: 0, g: 128, b: 128 } },
  { name: 'Navy', hex: '#000080', rgb: { r: 0, g: 0, b: 128 } },
  { name: 'Purple', hex: '#800080', rgb: { r: 128, g: 0, b: 128 } },
  { name: 'Orange', hex: '#FFA500', rgb: { r: 255, g: 165, b: 0 } },
  { name: 'Pink', hex: '#FFC0CB', rgb: { r: 255, g: 192, b: 203 } },
  { name: 'Brown', hex: '#A52A2A', rgb: { r: 165, g: 42, b: 42 } },
  { name: 'Beige', hex: '#F5F5DC', rgb: { r: 245, g: 245, b: 220 } },
  { name: 'Tan', hex: '#D2B48C', rgb: { r: 210, g: 180, b: 140 } },
  { name: 'Peach', hex: '#FFDAB9', rgb: { r: 255, g: 218, b: 185 } },
  { name: 'Lavender', hex: '#E6E6FA', rgb: { r: 230, g: 230, b: 250 } },
  { name: 'Turquoise', hex: '#40E0D0', rgb: { r: 64, g: 224, b: 208 } },
  { name: 'Gold', hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 } },
  { name: 'Indigo', hex: '#4B0082', rgb: { r: 75, g: 0, b: 130 } },
  { name: 'Violet', hex: '#EE82EE', rgb: { r: 238, g: 130, b: 238 } },
  { name: 'Coral', hex: '#FF7F50', rgb: { r: 255, g: 127, b: 80 } },
  { name: 'Salmon', hex: '#FA8072', rgb: { r: 250, g: 128, b: 114 } },
  { name: 'Khaki', hex: '#F0E68C', rgb: { r: 240, g: 230, b: 140 } },
  { name: 'Crimson', hex: '#DC143C', rgb: { r: 220, g: 20, b: 60 } },
  { name: 'Sky Blue', hex: '#87CEEB', rgb: { r: 135, g: 206, b: 235 } },
  { name: 'Forest Green', hex: '#228B22', rgb: { r: 34, g: 139, b: 34 } },
  { name: 'Chocolate', hex: '#D2691E', rgb: { r: 210, g: 105, b: 30 } },
];

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
}

function colorDistance(c1: RGB, c2: RGB): number {
  const rDiff = c1.r - c2.r;
  const gDiff = c1.g - c2.g;
  const bDiff = c1.b - c2.b;
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

export function getColorName(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  const inputColor: RGB = { r, g, b };
  
  let closestColor = commonColors[0];
  let minDistance = Infinity;
  
  for (const color of commonColors) {
    const distance = colorDistance(inputColor, color.rgb);
    
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }
  
  return closestColor.name;
}

export async function extractColorsFromImage(file: File): Promise<{ hex: string; name: string; percentage: number }[]> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      // Resize for faster processing
      const maxSize = 200;
      let width = img.width;
      let height = img.height;
      
      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      
      console.log(`Image loaded: ${width}x${height}, ${pixels.length / 4} pixels`);
      
      // Color quantization using simple clustering
      const colorMap = new Map<string, number>();
      let transparentCount = 0;
      let opaqueCount = 0;
      
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];
        
        // Track pixel transparency for debugging
        if (a < 128) {
          transparentCount++;
          continue;
        }
        
        opaqueCount++;
        
        // Quantize to reduce similar colors (group by 15 instead of 10 for better variation)
        const qR = Math.round(r / 15) * 15;
        const qG = Math.round(g / 15) * 15;
        const qB = Math.round(b / 15) * 15;
        
        const key = `${qR},${qG},${qB}`;
        colorMap.set(key, (colorMap.get(key) || 0) + 1);
      }
      
      console.log(`Pixel analysis: ${opaqueCount} opaque, ${transparentCount} transparent`);
      console.log(`Unique colors found: ${colorMap.size}`);
      
      // If no colors were found (all transparent), return empty array
      if (colorMap.size === 0) {
        console.warn('No opaque pixels found in image');
        resolve([]);
        return;
      }
      
      // Sort by frequency and get top colors (up to 12)
      const sortedColors = Array.from(colorMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 12);
      
      const totalPixels = sortedColors.reduce((sum, [, count]) => sum + count, 0);
      
      const colors = sortedColors.map(([rgb, count]) => {
        const [r, g, b] = rgb.split(',').map(Number);
        const hex = rgbToHex(r, g, b);
        const name = getColorName(hex);
        const percentage = Math.round((count / totalPixels) * 100);
        
        return { hex, name, percentage };
      });
      
      // Ensure we always return at least one color if we have any opaque pixels
      if (colors.length === 0 && colorMap.size > 0) {
        const firstColor = Array.from(colorMap.entries())[0];
        const [r, g, b] = firstColor[0].split(',').map(Number);
        const hex = rgbToHex(r, g, b);
        const name = getColorName(hex);
        resolve([{ hex, name, percentage: 100 }]);
        return;
      }
      
      resolve(colors);
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
}
