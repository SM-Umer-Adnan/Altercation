import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedBanner = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8" style={{paddingBottom: "0px" }}>
      <div className="max-w-7xl mx-auto">
<div
  className="gaming-card bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 lg:p-8 relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] xl:min-h-[350px] flex items-center justify-center"
  style={{ borderRadius: "0px" }} // You can remove this if you're using Tailwind's `rounded-*`
>
  {/* Left Arrow */}
  <Button 
    variant="ghost" 
    size="icon"
    className="absolute left-3 sm:left-4 lg:left-6 z-10 bg-gaming-red hover:bg-gaming-red-dark text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shadow-red"
  >
    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
  </Button>
  
  {/* Banner Content */}
  <div className="text-center">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-muted-foreground">Featured Banner</h2>
  </div>
  
  {/* Right Arrow */}
  <Button 
    variant="ghost" 
    size="icon"
    className="absolute right-3 sm:right-4 lg:right-6 z-10 bg-gaming-red hover:bg-gaming-red-dark text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shadow-red"
  >
    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
  </Button>
</div>

      </div>
    </section>
  );
};

export default FeaturedBanner;