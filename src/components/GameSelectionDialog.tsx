import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface GameSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GameSelectionDialog = ({ open, onOpenChange }: GameSelectionDialogProps) => {
  const [selectedGames, setSelectedGames] = useState<number[]>([1]); // Game 1 selected by default

  const availableGames = [
    { id: 1, name: "Game 1" },
    { id: 2, name: "Game 2" },
    { id: 3, name: "Game 3" },
    { id: 4, name: "Game 1" },
    { id: 5, name: "Game 1" },
    { id: 6, name: "Game 1" },
    { id: 7, name: "Game 1" },
    { id: 8, name: "Game 1" },
  ];

  const toggleGameSelection = (gameId: number) => {
    setSelectedGames(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  const handleUpdate = () => {
    // Handle the update logic here
    console.log("Selected games:", selectedGames);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-gaming-dark border-gaming-border">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-foreground mb-8">
            Select Games
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Games Grid */}
          <div className="grid grid-cols-4 gap-4">
            {availableGames.map((game) => (
              <div
                key={game.id}
                onClick={() => toggleGameSelection(game.id)}
                className={`
                  aspect-video rounded-lg p-4 cursor-pointer transition-all duration-200
                  flex items-center justify-center text-white font-medium
                  ${selectedGames.includes(game.id) 
                    ? 'bg-gaming-red border-2 border-blue-500' 
                    : 'bg-gaming-red/80 hover:bg-gaming-red border-2 border-transparent'
                  }
                `}
              >
                {game.name}
              </div>
            ))}
          </div>

          {/* Arrow pointing down */}
          <div className="flex justify-center">
            <ChevronDown className="w-8 h-8 text-gaming-red" />
          </div>

          {/* Update Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleUpdate}
              className="bg-gaming-red hover:bg-gaming-red-dark text-white px-12 py-3 text-lg font-semibold rounded-lg"
            >
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameSelectionDialog;