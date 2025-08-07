import { ChevronRight } from "lucide-react";

const FeaturedTournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "Title/System",
      matchup: "Team name vs Opponent name",
      tournamentName: "Tournament name"
    },
    {
      id: 2,
      title: "Title/System",
      matchup: "Team name vs Opponent name", 
      tournamentName: "Tournament name"
    },
    {
      id: 3,
      title: "Title/System",
      matchup: "Team name vs Opponent name",
      tournamentName: "Tournament name"
    }
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8" style={{ paddingTop: "20px"}}>
      <div className="max-w-7xl mx-auto">
       <div className="gaming-card bg-white/10 backdrop-blur-md border border-white/20 rounded-none p-4 sm:p-6 lg:p-8">
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Featured Tournaments</h2>

  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
    {tournaments.map((tournament, index) => (
      <div
        key={tournament.id}
        className="grid grid-cols-12 gap-3 sm:gap-4 items-center p-3 sm:p-4 lg:p-6 rounded-lg bg-gaming-border/15 hover:bg-gaming-border/30 transition-all duration-200"
      >
        {/* Tournament Info */}
        <div className="col-span-11 grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          <div className="space-y-1">
            <p className="text-xs lg:text-sm text-muted-foreground font-medium">Title/System</p>
            <p className="font-semibold text-sm lg:text-base">{tournament.title}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs lg:text-sm text-muted-foreground font-medium">Team name vs Opponent name</p>
            <p className="font-semibold text-sm lg:text-base">{tournament.tournamentName}</p>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="col-span-1 flex justify-end">
          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gaming-red rounded-full flex items-center justify-center cursor-pointer hover:bg-gaming-red-dark transition-all duration-200 shadow-red hover:shadow-lg">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default FeaturedTournaments;