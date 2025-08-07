const InfoSections = () => {
  return (
    <div className="space-y-8 sm:space-y-12 lg:space-y-20">
      {/* Daily Tournaments Section */}
      <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gaming-red rounded-full"></div>
              <span className="text-gaming-red font-bold text-xs sm:text-sm lg:text-base uppercase tracking-widest">TOURNAMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="block">Daily tournaments</span>
              <span className="block">hosted by us</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-lg">
              One of the world's most powerful esports platforms, leading the gaming industry in making 
              tournament hosting easier for you.
            </p>
          </div>
         <div className="gaming-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 lg:p-12 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] xl:min-h-[350px] flex items-center justify-center">
  {/* <span className="text-muted-foreground text-sm sm:text-base lg:text-lg font-medium">Image Placeholder</span> */}
</div>

        </div>
      </section>

      {/* LAN Events Section */}
      <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
        <div className="gaming-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 lg:p-12 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] xl:min-h-[350px] flex items-center justify-center">
  {/* <span className="text-muted-foreground text-sm sm:text-base lg:text-lg font-medium">Image Placeholder</span> */}
</div>

          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gaming-red rounded-full"></div>
              <span className="text-gaming-red font-bold text-xs sm:text-sm lg:text-base uppercase tracking-widest">LAN EVENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="block">Grassroots LAN</span>
              <span className="block">events for you</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-lg">
              One of the world's most powerful esports platforms, leading the gaming industry in making 
              tournament hosting easier for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSections;