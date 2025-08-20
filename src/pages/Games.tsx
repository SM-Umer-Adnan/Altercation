import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameSelectionDialog from "@/components/GameSelectionDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Games = () => {
  const [isAuthed, setIsAuthed] = useState(false);
    const [showGameSelection, setShowGameSelection] = useState(false);


  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthed(authStatus === 'true');
  }, []);

  const games = [
    { id: 1, name: "Game 1" },
    { id: 2, name: "Game 2" },
    { id: 3, name: "Game 3" },
    { id: 4, name: "Game 4" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {games.map((game) => (
            <div key={game.id} className="gaming-card">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-center font-medium text-foreground">{game.name}</h3>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {games.map((game) => (
            <div key={`${game.id}-2`} className="gaming-card">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-center font-medium text-foreground">{game.name}</h3>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {games.map((game) => (
            <div key={`${game.id}-3`} className="gaming-card">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-center font-medium text-foreground">{game.name}</h3>
            </div>
          ))}
        </div>

        {/* Add/Remove Games Button - Only for logged in users */}
        {isAuthed && (
          <div className="flex justify-start mt-8">
            <Button
              variant="default"
              size="lg"
                            onClick={() => setShowGameSelection(true)}

              className="bg-gaming-red hover:bg-gaming-red/90 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center gap-2"
            >
              <Plus className="w-8 h-8" />
              <span className="text-sm font-medium text-center">Add/Remove<br />Games</span>
            </Button>
          </div>
        )}
                {/* Game Selection Dialog */}
        <GameSelectionDialog 
          open={showGameSelection} 
          onOpenChange={setShowGameSelection} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Games;