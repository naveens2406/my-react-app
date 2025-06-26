
import { useState, useEffect } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCard from "../components/VideoCard";

interface WatchLaterProps {
  onBack: () => void;
  watchLaterVideos: any[];
  onVideoSelect: (video: any) => void;
  onRemoveFromWatchLater: (videoId: string) => void;
}

const WatchLater = ({ onBack, watchLaterVideos, onVideoSelect, onRemoveFromWatchLater }: WatchLaterProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="text-white hover:bg-gray-800 transition-all duration-200"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-3">
          <Clock className="h-8 w-8 text-blue-500" />
          <div>
            <h1 className="text-3xl font-bold">Watch Later</h1>
            <p className="text-gray-400">{watchLaterVideos.length} videos</p>
          </div>
        </div>
      </div>

      {watchLaterVideos.length === 0 ? (
        <div className="text-center py-12">
          <Clock className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-400 mb-2">No videos saved</h2>
          <p className="text-gray-500">Videos you save to watch later will appear here</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {watchLaterVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => onVideoSelect(video)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLater;
