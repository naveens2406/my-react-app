
import { ArrowLeft, Camera, Mic, Settings as SettingsIcon, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface GoLiveProps {
  onBack: () => void;
}

const GoLive = ({ onBack }: GoLiveProps) => {
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
        <h1 className="text-3xl font-bold">Go Live</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Stream Setup */}
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Stream Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Stream Title</label>
                <Input 
                  placeholder="Enter your live stream title"
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea 
                  placeholder="Describe what you'll be streaming about"
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2">
                  <option>Gaming</option>
                  <option>Music</option>
                  <option>Education</option>
                  <option>Entertainment</option>
                  <option>Sports</option>
                  <option>Technology</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Public Stream</p>
                  <p className="text-sm text-gray-400">Anyone can find and watch</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable Chat</p>
                  <p className="text-sm text-gray-400">Allow viewers to chat</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Save Stream</p>
                  <p className="text-sm text-gray-400">Save as video after stream ends</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview and Controls */}
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Camera className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-400">Camera preview will appear here</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Camera
                </Button>
                <Button variant="outline" size="sm">
                  <Mic className="h-4 w-4 mr-2" />
                  Microphone
                </Button>
                <Button variant="outline" size="sm">
                  <SettingsIcon className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Stream Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-2xl font-bold">0</span>
                  </div>
                  <p className="text-sm text-gray-400">Viewers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-2xl font-bold">0</span>
                  </div>
                  <p className="text-sm text-gray-400">Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-lg py-3">
              Start Live Stream
            </Button>
            <Button variant="outline" onClick={onBack}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoLive;
