import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  const steps = [
    {
      number: "01",
      title: "Sign up for free with a third-party account"
    },
    {
      number: "02", 
      title: "Create a team and invite teammates"
    },
    {
      number: "03",
      title: "Play tournaments, compete, & win cash"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-[1.1] tracking-tight">
          <span className="block">Getting</span>
          <span className="block">started</span>
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
          {steps.map((step) => (
            <div key={step.number} className="text-left space-y-3 sm:space-y-4 lg:space-y-6">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gaming-red block leading-none">
                {step.number}
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
        
  <Button asChild className="gaming-button text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 lg:py-4 hover:text-white font-bold uppercase tracking-wider shadow-red">
          <Link to="/signup">SIGN UP</Link>
        </Button>
      </div>
    </section>
  );
};

export default GettingStarted;