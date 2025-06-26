import { useState, useMemo } from "react";
import VideoCard from "./VideoCard";
import ShareDialog from "./ShareDialog";

const mockVideos = [
  {
    id: "1",
    title: "The Future of Web Development in 2024",
    channel: "TechTalks",
    views: "2.1M",
    timestamp: "2 days ago",
    duration: "12:34",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Technology"
  },
  {
    id: "2",
    title: "Amazing Nature Documentary: Wildlife Adventures",
    channel: "Nature Explorer",
    views: "5.3M",
    timestamp: "1 week ago",
    duration: "24:15",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Nature"
  },
  {
    id: "3",
    title: "Epic Gaming Moments - Best Highlights 2024",
    channel: "GameMaster",
    views: "1.8M",
    timestamp: "3 days ago",
    duration: "18:42",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Gaming"
  },
  {
    id: "4",
    title: "Cooking Masterclass: Italian Pasta Recipes",
    channel: "Chef's Kitchen",
    views: "892K",
    timestamp: "5 days ago",
    duration: "15:20",
    thumbnail: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Cooking"
  },
  {
    id: "5",
    title: "Latest Music Hits 2024 - Top 10 Songs",
    channel: "Music Central",
    views: "3.2M",
    timestamp: "1 day ago",
    duration: "22:18",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Music"
  },
  {
    id: "6",
    title: "Science Explained: Quantum Physics for Beginners",
    channel: "Science Today",
    views: "1.1M",
    timestamp: "4 days ago",
    duration: "28:45",
    thumbnail: "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Education"
  },
  {
    id: "7",
    title: "Travel Vlog: Exploring Tokyo's Hidden Gems",
    channel: "Wanderlust",
    views: "756K",
    timestamp: "6 days ago",
    duration: "19:33",
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Travel"
  },
  {
    id: "8",
    title: "Fitness Transformation: 30-Day Challenge Results",
    channel: "FitLife",
    views: "2.8M",
    timestamp: "2 weeks ago",
    duration: "16:22",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Fitness"
  },
  {
    id: "9",
    title: "Breaking News: Climate Change Summit 2024",
    channel: "Global News",
    views: "4.7M",
    timestamp: "12 hours ago",
    duration: "45:12",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "News"
  },
  {
    id: "10",
    title: "World Cup Finals Highlights",
    channel: "Sports Center",
    views: "8.9M",
    timestamp: "3 days ago",
    duration: "32:18",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Sports"
  },
  {
    id: "11",
    title: "Fashion Week Paris 2024 - Runway Shows",
    channel: "Style TV",
    views: "1.3M",
    timestamp: "1 week ago",
    duration: "26:45",
    thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Fashion"
  },
  {
    id: "12",
    title: "AI Revolution: Machine Learning Explained",
    channel: "Tech Insider",
    views: "2.4M",
    timestamp: "5 days ago",
    duration: "31:22",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Technology"
  },
  {
    id: "13",
    title: "Relaxing Jazz Music for Study & Work",
    channel: "Chill Vibes",
    views: "956K",
    timestamp: "2 days ago",
    duration: "2:15:30",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Music"
  },
  {
    id: "14",
    title: "Home Workout: Full Body HIIT Training",
    channel: "Fitness Pro",
    views: "1.7M",
    timestamp: "4 days ago",
    duration: "25:00",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Fitness"
  },
  {
    id: "15",
    title: "Street Food Around the World",
    channel: "Food Explorer",
    views: "3.1M",
    timestamp: "1 week ago",
    duration: "18:35",
    thumbnail: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Cooking"
  },
  {
    id: "16",
    title: "Space Exploration: Mars Mission Updates",
    channel: "Space Academy",
    views: "2.9M",
    timestamp: "6 days ago",
    duration: "23:12",
    thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Education"
  },
  {
    id: "17",
    title: "Photography Masterclass: Portrait Lighting",
    channel: "PhotoPro",
    views: "1.2M",
    timestamp: "3 days ago",
    duration: "34:25",
    thumbnail: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Education"
  },
  {
    id: "18",
    title: "Cryptocurrency Trends 2024",
    channel: "CryptoNews",
    views: "3.8M",
    timestamp: "1 day ago",
    duration: "21:14",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Technology"
  },
  {
    id: "19",
    title: "Ocean Life: Deep Sea Mysteries",
    channel: "Ocean Explorer",
    views: "2.3M",
    timestamp: "5 days ago",
    duration: "41:33",
    thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Nature"
  },
  {
    id: "20",
    title: "Guitar Lessons: Beginner to Advanced",
    channel: "Music Academy",
    views: "1.9M",
    timestamp: "1 week ago",
    duration: "52:18",
    thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Music"
  },
  {
    id: "21",
    title: "Mobile App Development: React Native",
    channel: "CodeMaster",
    views: "1.5M",
    timestamp: "4 days ago",
    duration: "38:42",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Technology"
  },
  {
    id: "22",
    title: "Basketball Skills Training",
    channel: "Sports Academy",
    views: "2.7M",
    timestamp: "2 days ago",
    duration: "29:15",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Sports"
  },
  {
    id: "23",
    title: "Digital Art: Procreate Techniques",
    channel: "ArtStudio",
    views: "987K",
    timestamp: "6 days ago",
    duration: "33:27",
    thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Education"
  },
  {
    id: "24",
    title: "Meditation and Mindfulness Guide",
    channel: "Wellness Channel",
    views: "1.4M",
    timestamp: "3 days ago",
    duration: "45:12",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Fitness"
  },
  {
    id: "25",
    title: "History of Ancient Civilizations",
    channel: "History Today",
    views: "2.1M",
    timestamp: "1 week ago",
    duration: "56:33",
    thumbnail: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a2e?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Education"
  },
  {
    id: "26",
    title: "Gardening Tips for Beginners",
    channel: "Green Thumb",
    views: "823K",
    timestamp: "5 days ago",
    duration: "27:45",
    thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a045efd7?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Nature"
  },
  {
    id: "27",
    title: "DIY Home Improvement Projects",
    channel: "Home Helper",
    views: "1.8M",
    timestamp: "2 days ago",
    duration: "42:18",
    thumbnail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Education"
  },
  {
    id: "28",
    title: "Stand-up Comedy: Best Moments 2024",
    channel: "Comedy Central",
    views: "4.2M",
    timestamp: "1 day ago",
    duration: "35:22",
    thumbnail: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Entertainment"
  },
  {
    id: "29",
    title: "Yoga for Stress Relief",
    channel: "Yoga Master",
    views: "1.6M",
    timestamp: "4 days ago",
    duration: "31:45",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Fitness"
  },
  {
    id: "30",
    title: "Electric Vehicle Revolution",
    channel: "Auto Tech",
    views: "3.5M",
    timestamp: "3 days ago",
    duration: "28:12",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Technology"
  },
  {
    id: "31",
    title: "Wildlife Photography Safari",
    channel: "Wild Lens",
    views: "2.8M",
    timestamp: "6 days ago",
    duration: "48:33",
    thumbnail: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Nature"
  },
  {
    id: "32",
    title: "Quantum Computing Explained",
    channel: "Science Simplified",
    views: "1.3M",
    timestamp: "5 days ago",
    duration: "37:21",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Education"
  },
  {
    id: "33",
    title: "Drone Racing Championship",
    channel: "Sky Sports",
    views: "2.4M",
    timestamp: "2 days ago",
    duration: "44:15",
    thumbnail: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Sports"
  },
  {
    id: "34",
    title: "Baking Perfect Bread at Home",
    channel: "Bakery Secrets",
    views: "1.7M",
    timestamp: "1 week ago",
    duration: "25:44",
    thumbnail: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Cooking"
  },
  {
    id: "35",
    title: "Virtual Reality Gaming Experience",
    channel: "VR World",
    views: "3.1M",
    timestamp: "3 days ago",
    duration: "39:18",
    thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Gaming"
  },
  {
    id: "36",
    title: "Classical Music Concert Hall",
    channel: "Symphony Orchestra",
    views: "956K",
    timestamp: "4 days ago",
    duration: "1:23:15",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Music"
  },
  {
    id: "37",
    title: "Sustainable Living Guide",
    channel: "Eco Living",
    views: "1.2M",
    timestamp: "5 days ago",
    duration: "33:27",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Education"
  },
  {
    id: "38",
    title: "Movie Reviews: Top Films 2024",
    channel: "Cinema Critics",
    views: "2.9M",
    timestamp: "2 days ago",
    duration: "47:33",
    thumbnail: "https://images.unsplash.com/photo-1489599779691-2b4eaed40e4e?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Entertainment"
  },
  {
    id: "39",
    title: "Marathon Training Program",
    channel: "Running Coach",
    views: "1.8M",
    timestamp: "6 days ago",
    duration: "52:12",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Fitness"
  },
  {
    id: "40",
    title: "Investing in Stock Market 2024",
    channel: "Finance Guru",
    views: "4.1M",
    timestamp: "1 day ago",
    duration: "41:25",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Education"
  },
  {
    id: "41",
    title: "Antarctic Research Expedition",
    channel: "Polar Science",
    views: "1.4M",
    timestamp: "1 week ago",
    duration: "36:48",
    thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Nature"
  },
  {
    id: "42",
    title: "Cybersecurity Best Practices",
    channel: "Security Expert",
    views: "2.2M",
    timestamp: "3 days ago",
    duration: "29:33",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Technology"
  },
  {
    id: "43",
    title: "Esports Tournament Highlights",
    channel: "Gaming Pro",
    views: "5.7M",
    timestamp: "12 hours ago",
    duration: "1:02:15",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Gaming"
  },
  {
    id: "44",
    title: "Interior Design Trends 2024",
    channel: "Design Studio",
    views: "1.9M",
    timestamp: "4 days ago",
    duration: "34:22",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Fashion"
  },
  {
    id: "45",
    title: "World News Update: Global Events",
    channel: "International News",
    views: "6.3M",
    timestamp: "6 hours ago",
    duration: "25:18",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "News"
  },
  {
    id: "46",
    title: "Healthy Smoothie Recipes",
    channel: "Nutrition Plus",
    views: "1.1M",
    timestamp: "5 days ago",
    duration: "18:45",
    thumbnail: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Cooking"
  },
  {
    id: "47",
    title: "Artificial Intelligence in Healthcare",
    channel: "Med Tech",
    views: "2.6M",
    timestamp: "2 days ago",
    duration: "43:12",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c75?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Technology"
  },
  {
    id: "48",
    title: "Olympic Swimming Techniques",
    channel: "Swim Coach Pro",
    views: "3.4M",
    timestamp: "1 week ago",
    duration: "38:27",
    thumbnail: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Sports"
  },
  {
    id: "49",
    title: "Fashion Week Milan 2024",
    channel: "Fashion TV",
    views: "2.8M",
    timestamp: "3 days ago",
    duration: "55:33",
    thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Fashion"
  },
  {
    id: "50",
    title: "Climate Change Solutions",
    channel: "Earth Science",
    views: "4.5M",
    timestamp: "1 day ago",
    duration: "49:18",
    thumbnail: "https://images.unsplash.com/photo-1569163139394-de44cb5894d9?w=640&h=360&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Education"
  }
];

interface VideoGridProps {
  searchQuery: string;
  selectedCategory: string;
  onVideoSelect: (video: any) => void;
  setSelectedCategory: (category: string) => void;
  onAddToWatchLater: (video: any) => void;
  onAddToLiked: (video: any) => void;
}

const VideoGrid = ({ 
  searchQuery, 
  selectedCategory, 
  onVideoSelect, 
  setSelectedCategory,
  onAddToWatchLater,
  onAddToLiked
}: VideoGridProps) => {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedVideoForShare, setSelectedVideoForShare] = useState(null);

  const handleShare = (video: any) => {
    setSelectedVideoForShare(video);
    setShareDialogOpen(true);
  };

  const filteredVideos = useMemo(() => {
    let filtered = mockVideos;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(video => {
        switch (selectedCategory) {
          case "Gaming":
            return video.category === "Gaming";
          case "Music":
            return video.category === "Music";
          case "Education":
            return video.category === "Education";
          case "Technology":
            return video.category === "Technology";
          case "News":
            return video.category === "News";
          case "Sports":
            return video.category === "Sports";
          case "Fashion":
            return video.category === "Fashion";
          case "Cooking":
            return video.category === "Cooking";
          case "Fitness":
            return video.category === "Fitness";
          case "Travel":
            return video.category === "Travel";
          case "Nature":
            return video.category === "Nature";
          case "Entertainment":
            return video.category === "Entertainment";
          case "Trending":
            return parseInt(video.views.replace(/[^\d]/g, '')) > 1000000;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const categories = ["All", "Trending", "Music", "Gaming", "Technology", "Sports", "Education", "News", "Fashion", "Cooking", "Fitness", "Travel", "Nature", "Entertainment"];

  return (
    <div className="p-6 animate-fade-in">
      {/* Category Pills */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-white text-black shadow-lg'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 animate-fade-in">
        {filteredVideos.map((video, index) => (
          <div
            key={video.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <VideoCard
              video={video}
              onClick={() => onVideoSelect(video)}
              onAddToWatchLater={onAddToWatchLater}
              onAddToLiked={onAddToLiked}
              onShare={handleShare}
            />
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-gray-400 text-lg">No videos found</p>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your search or category filter</p>
        </div>
      )}

      <ShareDialog
        isOpen={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        video={selectedVideoForShare}
      />
    </div>
  );
};

export default VideoGrid;
