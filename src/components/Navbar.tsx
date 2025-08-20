import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { toast } from "@/hooks/use-toast";
const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const flag = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthed(flag);
    const userStr = localStorage.getItem('authUser');
    try {
      const parsed = userStr ? JSON.parse(userStr) : null;
      setUsername(parsed?.username ?? null);
    } catch {
      setUsername(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authUser');
    setIsAuthed(false);
    navigate('/login');
  };

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
                   <Link to="/" className="text-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Home
         </Link>
                   <Link to="/games" className="text-muted-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">

            Games
          </Link>
          <a href="#" className="text-muted-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Tournaments
          </a>
          <a href="#" className="text-muted-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Leagues
          </a>
          {isAuthed && (
            <a href="#" className="text-muted-foreground hover:text-gaming-red transition-colors font-medium text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gaming-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Matches
            </a>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Mobile menu button */}
           <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="lg:hidden text-muted-foreground hover:text-foreground"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] sm:w-80">
              <div className="mt-2">
                {isAuthed ? (
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 ring-2 ring-ring/20">
                      <AvatarImage src="/images/person2.png" alt="User profile picture" />
                      <AvatarFallback>{(username?.[0] ?? 'U').toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{username ?? 'Username'}</p>
                      <p className="text-xs text-muted-foreground">Signed in</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Welcome! Sign in to access more features.</p>
                )}
              </div>

                            {isAuthed && (
                <div className="mt-4 flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Open notifications">
                    <Bell className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Open settings">
                    <Settings className="w-5 h-5" />
                  </Button>
                </div>
              )}

              <nav className="mt-6 grid gap-3">
                <Link to="/" className="text-foreground hover:text-gaming-red font-medium">Home</Link>
                <Link to="/games" className="text-muted-foreground hover:text-foreground">Games</Link>
                <a href="#" className="text-muted-foreground hover:text-foreground">Tournaments</a>
                <a href="#" className="text-muted-foreground hover:text-foreground">Leagues</a>
                 {isAuthed && (
                  <a href="#" className="text-muted-foreground hover:text-foreground">Matches</a>
                )}
              </nav>

              <div className="mt-6 grid gap-3">
                {isAuthed ? (
                  <Button onClick={handleLogout} variant="secondary" className="uppercase font-semibold tracking-wide">
                    LOG OUT
                  </Button>
                ) : (
                  <>
                    <Button asChild variant="outline" className="justify-center">
                      <Link to="/login">LOGIN</Link>
                    </Button>
                    <Button asChild className="gaming-button text-white hover:text-white justify-center">
                      <Link to="/signup">SIGN UP</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
          
        {/* Desktop actions */}
          <div className="hidden sm:flex items-center space-x-4">
            {isAuthed ? (
              <>
               <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground" aria-label="Open notifications">
                      <Bell className="w-6 h-6" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-80 p-0">
                    <div className="p-4 border-b">
                      <h3 className="text-lg font-semibold">Notifications</h3>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3 rounded-md border bg-card text-card-foreground p-3">
                        <span className="text-sm font-medium">team invite</span>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => toast({ title: "Invitation accepted" })}>Accept</Button>
                          <Button size="sm" variant="secondary" onClick={() => toast({ title: "Invitation declined" })}>Deny</Button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground">
                  <Settings className="w-6 h-6" />
                </Button>
                <Avatar className="h-9 w-9 ring-2 ring-ring/20">
                  <AvatarImage src="/images/person2.png" alt="User profile picture" />
                  <AvatarFallback>{(username?.[0] ?? 'U').toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-xl font-semibold text-foreground hidden md:inline">
                  {username ?? 'Username'}
                </span>
                <Button onClick={handleLogout} variant="secondary" className="uppercase font-semibold tracking-wide">
                  LOG OUT
                </Button>
              </>
            ) : (
              <>
                <Button 
                  asChild
                  variant="outline" 
                  className="text-muted-foreground hover:text-foreground border-gaming-border bg-transparent hover:bg-gaming-border/20 px-5 py-2 text-sm font-semibold uppercase tracking-wide"
                >
                  <Link to="/login" aria-label="Go to login page">LOGIN</Link>
                </Button>
                <Button asChild className="gaming-button text-white hover:text-white px-5 py-2 text-sm font-bold uppercase tracking-wide">
                  <Link to="/signup" aria-label="Go to sign up page">SIGN UP</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;