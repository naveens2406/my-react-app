
import { useState } from "react";
import { ArrowLeft, Upload, BarChart3, Eye, Heart, MessageCircle, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface YourVideosProps {
  onBack: () => void;
  onGoLive: () => void;
}

const YourVideos = ({ onBack, onGoLive }: YourVideosProps) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadedVideos] = useState([
    {
      id: "1",
      title: "My First Video Upload",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop",
      views: 1250,
      likes: 89,
      comments: 23,
      uploadDate: "2 days ago",
      duration: "5:42"
    },
    {
      id: "2", 
      title: "Tutorial: How to Code",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      views: 3400,
      likes: 156,
      comments: 45,
      uploadDate: "1 week ago",
      duration: "12:30"
    }
  ]);

  const analyticsData = [
    { name: 'Jan', views: 400, likes: 24 },
    { name: 'Feb', views: 300, likes: 13 },
    { name: 'Mar', views: 200, likes: 98 },
    { name: 'Apr', views: 278, likes: 39 },
    { name: 'May', views: 189, likes: 48 },
    { name: 'Jun', views: 239, likes: 38 },
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
        <h1 className="text-3xl font-bold">Your Videos</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <Button
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Video
        </Button>
        <Button
          onClick={onGoLive}
          className="bg-red-600 hover:bg-red-700"
        >
          <Radio className="h-4 w-4 mr-2" />
          Go Live
        </Button>
      </div>

      {showUploadForm && (
        <Card className="bg-gray-800 border-gray-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Upload New Video</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Video File</label>
              <Input type="file" accept="video/*" className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <Input placeholder="Enter video title" className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea placeholder="Enter video description" className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Thumbnail</label>
              <Input type="file" accept="image/*" className="bg-gray-700 border-gray-600" />
            </div>
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">Upload</Button>
              <Button variant="outline" onClick={() => setShowUploadForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Views Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Likes Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Bar dataKey="likes" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Uploaded Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {uploadedVideos.map((video) => (
            <Card key={video.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {video.views.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {video.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {video.comments}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{video.uploadDate}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourVideos;
