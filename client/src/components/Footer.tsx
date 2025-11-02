import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ColorSense</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making color identification accessible for everyone, especially those with color vision deficiency.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-tool">
                  Color Tool
                </a>
              </li>
              <li>
                <a href="#learn-more" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-education">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-accessibility">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for accessibility
          </p>
        </div>
      </div>
    </footer>
  );
}
