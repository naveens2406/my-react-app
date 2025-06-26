import { Home, Compass, PlaySquare, Clock, ThumbsUp, Flame, Music, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onNavigateToWatchLater: () => void;
  onNavigateToLiked: () => void;
  onNavigateToHome: () => void;
  onNavigateToYourVideos: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToYou: () => void;
  watchLaterCount: number;
  likedCount: number;
}

const Sidebar = ({ 
  isOpen, 
  selectedCategory, 
  setSelectedCategory,
  onNavigateToWatchLater,
  onNavigateToLiked,
  onNavigateToHome,
  onNavigateToYourVideos,
  onNavigateToSubscriptions,
  onNavigateToYou,
  watchLaterCount,
  likedCount
}: SidebarProps) => {
  const mainItems = [
    { icon: Home, label: "Home", category: "All", onClick: onNavigateToHome },
    { icon: Compass, label: "Explore", category: "Trending" },
    { icon: PlaySquare, label: "Subscriptions", category: "Subscriptions", onClick: onNavigateToSubscriptions },
    { icon: User, label: "You", category: "You", onClick: onNavigateToYou },
  ];

  const libraryItems = [
    { icon: PlaySquare, label: "Your videos", category: "Your videos", onClick: onNavigateToYourVideos },
    { icon: Clock, label: "Watch later", category: "Watch later", onClick: onNavigateToWatchLater, count: watchLaterCount },
    { icon: ThumbsUp, label: "Liked videos", category: "Liked", onClick: onNavigateToLiked, count: likedCount },
  ];

  const exploreItems = [
    { icon: Flame, label: "Trending", category: "Trending" },
    { icon: Music, label: "Music", category: "Music" },
    { icon: Gamepad2, label: "Gaming", category: "Gaming" },
    { icon: Newspaper, label: "News", category: "News" },
    { icon: Trophy, label: "Sports", category: "Sports" },
    { icon: Lightbulb, label: "Learning", category: "Education" },
    { icon: Shirt, label: "Fashion", category: "Fashion" },
  ];

  if (!isOpen) {
    return (
      <aside className="w-20 bg-gray-900 border-r border-gray-800 py-4 hidden lg:block">
        <div className="flex flex-col items-center gap-6">
          {mainItems.map(({ icon: Icon, label, category, onClick }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              onClick={() => onClick ? onClick() : setSelectedCategory(category)}
              className={`w-12 h-12 flex flex-col items-center gap-1 text-xs hover:bg-gray-800 ${
                selectedCategory === category ? 'bg-gray-800' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
            </Button>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 py-4 overflow-y-auto hidden lg:block">
      <div className="px-3">
        <div className="space-y-2 mb-6">
          {mainItems.map(({ icon: Icon, label, category, onClick }) => (
            <Button
              key={label}
              variant="ghost"
              onClick={() => onClick ? onClick() : setSelectedCategory(category)}
              className={`w-full justify-start gap-6 hover:bg-gray-800 ${
                selectedCategory === category ? 'bg-gray-800' : ''
              }`}
            >
              <Icon className="h-6 w-6" />
              {label}
            </Button>
          ))}
        </div>

        <hr className="border-gray-800 mb-4" />

        <div className="space-y-2 mb-6">
          <h3 className="text-gray-400 font-semibold text-sm px-3 mb-2">Library</h3>
          {libraryItems.map(({ icon: Icon, label, category, onClick, count }) => (
            <Button
              key={label}
              variant="ghost"
              onClick={() => onClick ? onClick() : setSelectedCategory(category)}
              className={`w-full justify-start gap-6 hover:bg-gray-800 ${
                selectedCategory === category ? 'bg-gray-800' : ''
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="flex-1 text-left">{label}</span>
              {count !== undefined && count > 0 && (
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">{count}</span>
              )}
            </Button>
          ))}
        </div>

        <hr className="border-gray-800 mb-4" />

        <div className="space-y-2">
          <h3 className="text-gray-400 font-semibold text-sm px-3 mb-2">Explore</h3>
          {exploreItems.map(({ icon: Icon, label, category }) => (
            <Button
              key={label}
              variant="ghost"
              onClick={() => setSelectedCategory(category)}
              className={`w-full justify-start gap-6 hover:bg-gray-800 ${
                selectedCategory === category ? 'bg-gray-800' : ''
              }`}
            >
              <Icon className="h-6 w-6" />
              {label}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
