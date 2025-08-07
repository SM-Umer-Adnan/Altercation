const StreamsAndProfiles = () => {
  const profiles = [
    { id: 1, username: "Username", avatar: "/placeholder.svg" },
    { id: 2, username: "Username", avatar: "/placeholder.svg" },
    { id: 3, username: "Username", avatar: "/placeholder.svg" },
    { id: 4, username: "Username", avatar: "/placeholder.svg" },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8" style={{ paddingTop: "20px", paddingBottom: "0px" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 sm:gap-6">
{/* Featured Profile Streams */}
<div className="lg:col-span-2">
  <div
    className="gaming-card bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 lg:p-8 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] xl:min-h-[438px] flex items-center justify-center rounded-none"
  >
    <div className="text-center space-y-2">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Featured Profile Streams</h3>
      <p className="text-muted-foreground text-sm lg:text-base">(Iframe)</p>
    </div>
  </div>
</div>

{/* Featured Profiles */}
<div className="lg:col-span-1">
  <div
    className="gaming-card bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 lg:p-8 h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] rounded-none"
  >
    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Featured Profiles</h3>
    <div className="space-y-3 lg:space-y-4 max-h-72 lg:max-h-80 overflow-y-auto custom-scrollbar">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center space-x-3 p-2.5 sm:p-3 lg:p-4 rounded-lg bg-gaming-border/15 hover:bg-gaming-border/30 transition-all duration-200 cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-muted rounded-full flex items-center justify-center text-[10px] sm:text-xs lg:text-sm font-medium text-center leading-tight flex-shrink-0">
            Profile<br />Pic
          </div>
          <span className="text-foreground font-medium text-sm lg:text-base">{profile.username}</span>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default StreamsAndProfiles;