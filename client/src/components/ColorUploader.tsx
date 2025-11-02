import { Upload, X, Image as ImageIcon } from "lucide-react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ColorUploaderProps {
  onImageUpload: (file: File) => void;
}

export function ColorUploader({ onImageUpload }: ColorUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    onImageUpload(file);
  };

  const clearPreview = () => {
    setPreview(null);
  };

  if (preview) {
    return (
      <Card className="relative overflow-hidden">
        <img src={preview} alt="Uploaded" className="w-full h-auto max-h-96 object-contain" />
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4"
          onClick={clearPreview}
          data-testid="button-clear-image"
        >
          <X className="h-4 w-4" />
        </Button>
      </Card>
    );
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        border-2 border-dashed rounded-2xl p-12 min-h-96 flex flex-col items-center justify-center
        transition-all cursor-pointer
        ${isDragging ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-border hover-elevate'}
      `}
      data-testid="dropzone-upload"
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
        id="file-upload"
        data-testid="input-file"
      />
      
      <label htmlFor="file-upload" className="cursor-pointer text-center space-y-6 w-full">
        <div className="flex justify-center">
          {isDragging ? (
            <ImageIcon className="h-20 w-20 text-primary" />
          ) : (
            <Upload className="h-20 w-20 text-muted-foreground" />
          )}
        </div>
        
        <div className="space-y-2">
          <p className="text-xl font-semibold">
            {isDragging ? 'Drop your image here' : 'Drag & drop your image here'}
          </p>
          <p className="text-muted-foreground">
            or click to browse your files
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Supports: JPG, PNG, WebP, GIF
        </div>
      </label>
    </div>
  );
}
