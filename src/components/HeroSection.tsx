import { Button } from "@/components/ui/button";
import { max } from "date-fns";

const HeroSection = () => {
  return (
<section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
  {/* Background image at the bottom, responsive, smaller, and pushed down */}
 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
 <img
  src="/images/header.png"
  alt="Bottom background strip"
  className="w-[1900px] sm:w-[600px] md:w-[800px] lg:w-[2000px] xl:w-[1900px] max-w-[2000px] object-contain mb-[-20px]"
/>

</div>


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center space-y-6 sm:space-y-8 relative z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] tracking-tight">
        <span className="block">Start battling in</span>
        <span className="block">tournaments & win</span>
        <span className="block text-gaming-red">cash today</span>
      </h1>

      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium">
        One of the world's most powerful esports platforms, leading the 
        industry in tournament hosting.
      </p>

      <div className="pt-2 sm:pt-4">
        <Button className="gaming-button text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 lg:py-4 hover:text-white font-bold uppercase tracking-wider shadow-red">
          LET'S PLAY
        </Button>
      </div>
    </div>
  </div>

  {/* Decorative blur elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -left-20 sm:-left-32 top-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-80 lg:h-80 bg-gaming-red opacity-[0.02] rounded-full blur-3xl"></div>
    <div className="absolute -right-20 sm:-right-32 bottom-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-80 lg:h-80 bg-gaming-red opacity-[0.02] rounded-full blur-3xl"></div>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-gaming-red opacity-[0.01] rounded-full blur-3xl"></div>
  </div>
</section>

  );
};

export default HeroSection;