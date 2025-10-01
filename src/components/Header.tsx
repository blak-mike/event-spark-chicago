import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            IRL Events
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium transition-smooth hover:text-primary">Home</a>
          <a href="#services" className="text-sm font-medium transition-smooth hover:text-primary">Services</a>
          <a href="#programs" className="text-sm font-medium transition-smooth hover:text-primary">Programs</a>
          <a href="#testimonials" className="text-sm font-medium transition-smooth hover:text-primary">Reviews</a>
          <a href="#contact" className="text-sm font-medium transition-smooth hover:text-primary">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="hero" size="sm" className="hidden sm:flex">
            <Phone className="w-4 h-4" />
            (630) 550-9595
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
