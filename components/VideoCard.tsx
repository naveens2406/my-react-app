
import { useState } from "react";
import { MoreVertical, Plus, Share, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    channel: string;
    views: string;
    timestamp: string;
    duration: string;
    thumbnail: string;
  };
  onClick: () => void;
  onAddToWatchLater?: (video: any) => void;
  onAddToLiked?: (video: any) => void;
  onShare?: (video: any) => void;
}

const VideoCard = ({ video, onClick, onAddToWatchLater, onAddToLiked, onShare }: VideoCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleAddToQueue = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to Queue",
      description: `"${video.title}" has been added to your queue.`,
      duration: 3000,
    });
  };

  const handleWatchLater = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToWatchLater?.(video);
    toast({
      title: "Added to Watch Later",
      description: `"${video.title}" has been saved to watch later.`,
      duration: 3000,
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare?.(video);
  };

  return (
    <div 
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="aspect-video relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
          )}
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            {video.duration}
          </div>
          
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black transition-all duration-300 ${
            isHovered ? 'bg-opacity-20' : 'bg-opacity-0'
          }`} />
          
          {/* Play button overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-3 px-1 flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white line-clamp-2 text-sm leading-5 group-hover:text-gray-300 transition-colors duration-200">
            {video.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-200">
            {video.channel}
          </p>
          <p className="text-gray-500 text-sm">
            {video.views} views • {video.timestamp}
          </p>
        </div>
        
        {/* Three dots dropdown menu - moved outside video to the right */}
        <div className="ml-2 flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
                onClick={handleDropdownClick}
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white z-50">
              <DropdownMenuItem onClick={handleAddToQueue} className="hover:bg-gray-700 cursor-pointer">
                <Plus className="h-4 w-4 mr-2" />
                Add to Queue
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleWatchLater} className="hover:bg-gray-700 cursor-pointer">
                <Clock className="h-4 w-4 mr-2" />
                Watch Later
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleShare} className="hover:bg-gray-700 cursor-pointer">
                <Share className="h-4 w-4 mr-2" />
                Share
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
