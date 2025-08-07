import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 border-t border-gaming-border/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        {/* Left side - Logo and Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
         <div className="flex items-center">
 <div className="w-30 h-24 md:w-32 md:h-32 flex items-center justify-center  overflow-hidden">
  <img
    src="/images/Altercationlogo.png"
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>

</div>

          
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">
              © Copyright 2024 Altercation.<br className="sm:hidden" />
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <span className="text-xs sm:text-sm lg:text-base text-muted-foreground font-bold uppercase tracking-wider">FOLLOW US</span>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <a href="#" className="p-2 lg:p-3 hover:text-gaming-red transition-colors">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </a>
            <a href="#" className="p-2 lg:p-3 hover:text-gaming-red transition-colors">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </a>
            <a href="#" className="p-2 lg:p-3 hover:text-gaming-red transition-colors">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;