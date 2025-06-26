import { ArrowLeft, History, Settings, User, PlaySquare, Clock, ThumbsUp, Download, HelpCircle, Shield, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

interface YouPageProps {
  onBack: () => void;
  onNavigateToHistory: () => void;
  onNavigateToSettings: () => void;
}

const YouPage = ({ onBack, onNavigateToHistory, onNavigateToSettings }: YouPageProps) => {
  const recentHistory = [
    {
      id: "1",
      title: "How to Build a React App from Scratch",
      channel: "CodeMaster",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=100&fit=crop",
      watchedAt: "2 hours ago"
    },
    {
      id: "2",
      title: "Amazing Nature Documentary",
      channel: "Wildlife TV",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=100&fit=crop",
      watchedAt: "Yesterday"
    }
  ];

  const menuItems = [
    { icon: PlaySquare, label: "Your videos", action: () => {} },
    { icon: Download, label: "Downloads", action: () => {} },
    { icon: Clock, label: "Watch later", action: () => {} },
    { icon: ThumbsUp, label: "Liked videos", action: () => {} },
  ];

  const settingsItems = [
    { icon: Settings, label: "Settings", action: onNavigateToSettings },
    { icon: HelpCircle, label: "Help & feedback", action: () => {} },
    { icon: Shield, label: "Privacy policy", action: () => {} },
    { icon: Palette, label: "Appearance", action: () => {} },
    { icon: Globe, label: "Language", action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="text-white hover:bg-gray-800"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-3xl font-bold">You</h1>
      </div>

      {/* Profile Section */}
      <Card className="bg-gray-800 border-gray-700 mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" />
              <AvatarFallback>
                <User className="w-8 h-8" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold text-white">NAVEEN S 23CSR143</h2>
              <p className="text-gray-400">Create a channel</p>
              <div className="flex gap-4 mt-2">
                <Button variant="outline" size="sm">Switch account</Button>
                <Button variant="outline" size="sm">Google Account</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* History Section */}
      <Card className="bg-gray-800 border-gray-700 mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <History className="h-5 w-5" />
            History
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onNavigateToHistory}
            className="text-blue-400 hover:text-blue-300"
          >
            View all
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentHistory.map((video) => (
              <div key={video.id} className="flex items-center gap-3 hover:bg-gray-750 p-2 rounded cursor-pointer">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-16 h-10 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white line-clamp-1">{video.title}</h4>
                  <p className="text-xs text-gray-400">{video.channel} • {video.watchedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Your Library</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={item.action}
                  className="w-full justify-start gap-3 text-white hover:bg-gray-700"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Settings & Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {settingsItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={item.action}
                  className="w-full justify-start gap-3 text-white hover:bg-gray-700"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Settings */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Quick Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Dark mode</p>
                <p className="text-sm text-gray-400">Use dark theme</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Notifications</p>
                <p className="text-sm text-gray-400">Get notified about new videos</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Autoplay</p>
                <p className="text-sm text-gray-400">Automatically play next video</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YouPage;
