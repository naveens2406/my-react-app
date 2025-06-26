import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import VideoPlayer from "../components/VideoPlayer";
import WatchLater from "./WatchLater";
import LikedVideos from "./LikedVideos";
import YourVideos from "./YourVideos";
import Subscriptions from "./Subscriptions";
import YouPage from "./YouPage";
import GoLive from "./GoLive";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentView, setCurrentView] = useState("home"); // home, watchlater, liked, yourvideos, subscriptions, you, golive
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleBackToHome = () => {
    setSelectedVideo(null);
    setCurrentView("home");
  };

  const handleAddToWatchLater = (video) => {
    setWatchLaterVideos(prev => {
      if (!prev.find(v => v.id === video.id)) {
        return [...prev, video];
      }
      return prev;
    });
  };

  const handleAddToLiked = (video) => {
    setLikedVideos(prev => {
      if (!prev.find(v => v.id === video.id)) {
        return [...prev, video];
      }
      return prev;
    });
  };

  const handleRemoveFromWatchLater = (videoId) => {
    setWatchLaterVideos(prev => prev.filter(v => v.id !== videoId));
  };

  const handleNavigateToWatchLater = () => {
    setCurrentView("watchlater");
    setSelectedVideo(null);
  };

  const handleNavigateToLiked = () => {
    setCurrentView("liked");
    setSelectedVideo(null);
  };

  const handleNavigateToYourVideos = () => {
    setCurrentView("yourvideos");
    setSelectedVideo(null);
  };

  const handleNavigateToSubscriptions = () => {
    setCurrentView("subscriptions");
    setSelectedVideo(null);
  };

  const handleNavigateToYou = () => {
    setCurrentView("you");
    setSelectedVideo(null);
  };

  const handleNavigateToGoLive = () => {
    setCurrentView("golive");
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={sidebarOpen}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onNavigateToWatchLater={handleNavigateToWatchLater}
          onNavigateToLiked={handleNavigateToLiked}
          onNavigateToHome={() => setCurrentView("home")}
          onNavigateToYourVideos={handleNavigateToYourVideos}
          onNavigateToSubscriptions={handleNavigateToSubscriptions}
          onNavigateToYou={handleNavigateToYou}
          watchLaterCount={watchLaterVideos.length}
          likedCount={likedVideos.length}
        />
        
        <main className={`flex-1 transition-all duration-300 overflow-y-auto ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
          {selectedVideo ? (
            <VideoPlayer 
              video={selectedVideo}
              onBack={handleBackToHome}
              onAddToLiked={handleAddToLiked}
              isLiked={likedVideos.some(v => v.id === selectedVideo.id)}
            />
          ) : currentView === "watchlater" ? (
            <WatchLater
              onBack={handleBackToHome}
              watchLaterVideos={watchLaterVideos}
              onVideoSelect={handleVideoSelect}
              onRemoveFromWatchLater={handleRemoveFromWatchLater}
            />
          ) : currentView === "liked" ? (
            <LikedVideos
              onBack={handleBackToHome}
              likedVideos={likedVideos}
              onVideoSelect={handleVideoSelect}
            />
          ) : currentView === "yourvideos" ? (
            <YourVideos
              onBack={handleBackToHome}
              onGoLive={handleNavigateToGoLive}
            />
          ) : currentView === "subscriptions" ? (
            <Subscriptions
              onBack={handleBackToHome}
              onVideoSelect={handleVideoSelect}
            />
          ) : currentView === "you" ? (
            <YouPage
              onBack={handleBackToHome}
              onNavigateToHistory={() => {}}
              onNavigateToSettings={() => {}}
            />
          ) : currentView === "golive" ? (
            <GoLive
              onBack={handleBackToHome}
            />
          ) : (
            <VideoGrid 
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onVideoSelect={handleVideoSelect}
              setSelectedCategory={setSelectedCategory}
              onAddToWatchLater={handleAddToWatchLater}
              onAddToLiked={handleAddToLiked}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
