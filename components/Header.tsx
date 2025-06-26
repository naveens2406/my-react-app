
import { useState } from "react";
import { Search, Menu, Plus, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import LoginDialog from "./LoginDialog";
import VoiceSearch from "./VoiceSearch";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications Enabled",
      description: "You'll now receive notifications for new videos and updates.",
      duration: 3000,
    });
  };

  const handleVoiceSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md bg-gray-900/95">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
            <div className="bg-red-600 p-2 rounded-lg shadow-lg">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span className="text-xl font-semibold">YouTube</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <div className="relative flex-1">
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-l-full rounded-r-none border-r-0 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
            <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 border-l-0 rounded-r-none px-6 transition-all duration-200 hover:scale-105">
              <Search className="h-5 w-5" />
            </Button>
            <VoiceSearch onVoiceSearch={handleVoiceSearch} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <Plus className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNotificationClick}
            className="text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <Bell className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setLoginDialogOpen(true)}
            className="text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <User className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <LoginDialog 
        isOpen={loginDialogOpen}
        onClose={() => setLoginDialogOpen(false)}
      />
    </>
  );
};

export default Header;
