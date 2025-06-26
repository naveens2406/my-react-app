
import { ArrowLeft, Bell, BellOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoCard from "../components/VideoCard";

interface SubscriptionsProps {
  onBack: () => void;
  onVideoSelect: (video: any) => void;
}

const Subscriptions = ({ onBack, onVideoSelect }: SubscriptionsProps) => {
  const subscribedChannels = [
    {
      id: "1",
      name: "Tech Reviews Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      subscribers: "2.5M subscribers",
      isNotified: true,
      latestVideo: {
        id: "sub1",
        title: "Latest iPhone 15 Pro Review - Everything You Need to Know!",
        channel: "Tech Reviews Pro",
        views: "1.2M",
        timestamp: "2 hours ago",
        duration: "12:34",
        thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop"
      }
    },
    {
      id: "2", 
      name: "Cooking Master Chef",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      subscribers: "892K subscribers",
      isNotified: false,
      latestVideo: {
        id: "sub2",
        title: "5-Minute Pasta Recipe That Will Change Your Life",
        channel: "Cooking Master Chef",
        views: "456K",
        timestamp: "1 day ago",
        duration: "8:21",
        thumbnail: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop"
      }
    }
  ];

  const subscriptionVideos = [
    {
      id: "sub3",
      title: "Morning Workout Routine - 10 Minutes Daily",
      channel: "Fitness Pro",
      views: "234K",
      timestamp: "3 hours ago", 
      duration: "10:15",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      id: "sub4",
      title: "JavaScript Tutorial for Beginners - Complete Course",
      channel: "Code Academy",
      views: "1.8M",
      timestamp: "1 week ago",
      duration: "45:30",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
    },
    {
      id: "sub5",
      title: "Travel Vlog: Hidden Gems in Tokyo",
      channel: "Adventure Seeker",
      views: "567K",
      timestamp: "2 days ago",
      duration: "15:42",
      thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop"
    }
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
        <h1 className="text-3xl font-bold">Subscriptions</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subscribedChannels.map((channel) => (
            <Card key={channel.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={channel.avatar}
                    alt={channel.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{channel.name}</h3>
                    <p className="text-sm text-gray-400">{channel.subscribers}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                  >
                    {channel.isNotified ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                  </Button>
                </div>
                {channel.latestVideo && (
                  <div className="cursor-pointer" onClick={() => onVideoSelect(channel.latestVideo)}>
                    <img 
                      src={channel.latestVideo.thumbnail}
                      alt={channel.latestVideo.title}
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <p className="text-sm text-gray-300 line-clamp-2">{channel.latestVideo.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{channel.latestVideo.timestamp}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Latest from Subscriptions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {[...subscribedChannels.map(ch => ch.latestVideo), ...subscriptionVideos].map((video, index) => (
            <VideoCard
              key={`${video?.id}-${index}`}
              video={video!}
              onClick={() => onVideoSelect(video)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
