import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-3 lg:py-4 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
<div className="flex items-center">
  <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center  overflow-hidden">
    <img
      src="/images/nav.png"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </div>
</div>



        {/* Center Navigation - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          <a href="#" className="text-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Home
          </a>
          <a href="#" className="text-muted-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Games
          </a>
          <a href="#" className="text-muted-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Tournaments
          </a>
          <a href="#" className="text-muted-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Leagues
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="w-6 h-6" />
          </Button>
          
          {/* Desktop buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="text-muted-foreground hover:text-foreground border-gaming-border bg-transparent hover:bg-gaming-border/20 px-5 py-2 text-sm font-semibold uppercase tracking-wide"
            >
              LOGIN
            </Button>
            <Button className="gaming-button text-white hover:text-white px-5 py-2 text-sm font-bold uppercase tracking-wide">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;