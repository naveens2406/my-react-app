
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    id: string;
    title: string;
    thumbnail: string;
  } | null;
}

const ShareDialog = ({ isOpen, onClose, video }: ShareDialogProps) => {
  const { toast } = useToast();
  const videoUrl = video ? `https://youtube-clone.com/watch?v=${video.id}` : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(videoUrl);
    toast({
      title: "Link Copied",
      description: "Video link has been copied to clipboard.",
      duration: 3000,
    });
  };

  const handleShareTo = (platform: string) => {
    toast({
      title: `Shared to ${platform}`,
      description: `Video has been shared to ${platform}.`,
      duration: 3000,
    });
    onClose();
  };

  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle>Share "{video.title}"</DialogTitle>
          <DialogDescription className="text-gray-400">
            Choose where you'd like to share this video
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Copy Link */}
          <div className="flex gap-2">
            <Input
              value={videoUrl}
              readOnly
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button onClick={handleCopyLink} variant="outline" className="border-gray-600 hover:bg-gray-700">
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          {/* Social Media Platforms */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleShareTo("WhatsApp")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={() => handleShareTo("Instagram")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Instagram className="h-4 w-4 mr-2" />
              Instagram
            </Button>
            <Button
              onClick={() => handleShareTo("Facebook")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button
              onClick={() => handleShareTo("Twitter")}
              className="bg-blue-400 hover:bg-blue-500 text-white"
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
