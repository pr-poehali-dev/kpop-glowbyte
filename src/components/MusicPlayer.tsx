import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks: Track[] = [
    { id: "1", title: "Трек 1", artist: "GLOWBYTE", duration: "0:00" },
    { id: "2", title: "Трек 2", artist: "GLOWBYTE", duration: "0:00" },
    { id: "3", title: "Трек 3", artist: "GLOWBYTE", duration: "0:00" },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };

  return (
    <div className="glass rounded-2xl p-5 max-w-md mx-auto">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-playfair text-lg font-medium text-glowbyte-800">
              {tracks[currentTrack].title}
            </h3>
            <p className="text-sm text-glowbyte-600">
              {tracks[currentTrack].artist}
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-glowbyte-200 flex items-center justify-center">
            <Icon name="Music2" className="h-5 w-5 text-glowbyte-600" />
          </div>
        </div>

        <div className="mb-4">
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="w-full"
            disabled
          />
          <div className="flex justify-between text-xs text-glowbyte-600 mt-1">
            <span>0:00</span>
            <span>{tracks[currentTrack].duration}</span>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <Button
            onClick={prevTrack}
            variant="ghost"
            size="icon"
            className="text-glowbyte-700 hover:text-glowbyte-900 hover:bg-glowbyte-100"
            disabled
          >
            <Icon name="SkipBack" />
          </Button>

          <Button
            onClick={togglePlay}
            size="icon"
            className={cn(
              "h-12 w-12 rounded-full bg-glowbyte-500 text-white hover:bg-glowbyte-600",
              "transition-all duration-300",
            )}
            disabled
          >
            <Icon name={isPlaying ? "Pause" : "Play"} className="h-5 w-5" />
          </Button>

          <Button
            onClick={nextTrack}
            variant="ghost"
            size="icon"
            className="text-glowbyte-700 hover:text-glowbyte-900 hover:bg-glowbyte-100"
            disabled
          >
            <Icon name="SkipForward" />
          </Button>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-glowbyte-700 mb-2">
            Плейлист
          </h4>
          <div className="space-y-2">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className={cn(
                  "w-full text-left p-2 rounded-md flex justify-between items-center",
                  currentTrack === index
                    ? "bg-glowbyte-100 text-glowbyte-700"
                    : "text-glowbyte-600",
                )}
              >
                <div className="flex items-center">
                  <span className="w-5 text-xs">{index + 1}</span>
                  <span>{track.title}</span>
                </div>
                <span className="text-xs opacity-70">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
