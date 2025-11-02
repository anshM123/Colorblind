import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function EyeSaverToggle() {
  const [eyeSaverMode, setEyeSaverMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("eyeSaverMode") === "true";
    setEyeSaverMode(savedMode);
    applyEyeSaverMode(savedMode);
  }, []);

  const applyEyeSaverMode = (enabled: boolean) => {
    const root = document.documentElement;
    if (enabled) {
      root.style.setProperty('--eye-saver-filter', 'sepia(0.15) saturate(0.85)');
      root.classList.add('eye-saver-mode');
    } else {
      root.style.setProperty('--eye-saver-filter', 'none');
      root.classList.remove('eye-saver-mode');
    }
  };

  const toggleEyeSaverMode = () => {
    const newMode = !eyeSaverMode;
    setEyeSaverMode(newMode);
    localStorage.setItem("eyeSaverMode", String(newMode));
    applyEyeSaverMode(newMode);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleEyeSaverMode}
      data-testid="button-eyesaver-toggle"
      aria-label={`${eyeSaverMode ? "Disable" : "Enable"} Eye Saver mode`}
      className={eyeSaverMode ? "text-amber-600 dark:text-amber-500" : ""}
    >
      {eyeSaverMode ? (
        <Eye className="h-5 w-5" />
      ) : (
        <EyeOff className="h-5 w-5" />
      )}
    </Button>
  );
}
