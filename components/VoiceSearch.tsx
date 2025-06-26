
import { useState, useRef } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface VoiceSearchProps {
  onVoiceSearch: (query: string) => void;
}

const VoiceSearch = ({ onVoiceSearch }: VoiceSearchProps) => {
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();
  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Voice Search Not Supported",
        description: "Your browser doesn't support voice search.",
        duration: 3000,
      });
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      toast({
        title: "Listening...",
        description: "Speak now to search for videos.",
        duration: 2000,
      });
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onVoiceSearch(transcript);
      toast({
        title: "Voice Search",
        description: `Searching for: "${transcript}"`,
        duration: 3000,
      });
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      toast({
        title: "Voice Search Error",
        description: "Could not recognize speech. Please try again.",
        duration: 3000,
      });
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={isListening ? stopListening : startListening}
      className={`text-white transition-all duration-200 hover:scale-105 ${
        isListening ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-gray-800'
      }`}
    >
      {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
    </Button>
  );
};

export default VoiceSearch;
