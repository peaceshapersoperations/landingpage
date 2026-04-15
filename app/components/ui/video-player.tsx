import { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@hugeicons/core-free-icons';
import { Button } from './button';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <div
      className={`relative aspect-square md:aspect-4/3 lg:aspect-square w-full bg-black rounded-[40px] md:rounded-[60px] overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
      />

      {/* Play/Pause button overlay */}
      <div
        className={`absolute ${isPlaying ? 'left-6 bottom-10' : 'inset-0 flex items-center justify-center'} pointer-events-none`}
      >
        <Button
          size={isPlaying ? 'sm' : 'lg'}
          variant="accent"
          onClick={togglePlayPause}
          className={`pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/20 ${isPlaying ? 'p-5 py-6' : ''}`}
          icon={isPlaying ? PauseIcon : PlayIcon}
        >
          {!isPlaying ? 'Play' : 'Pause'}
        </Button>
      </div>

      {/* Video controls hint */}
      <div
        className={`absolute ${isPlaying ? 'bottom-10 right-6' : 'bottom-4 left-4 right-4'} text-center`}
      >
        <p className="text-white/60 text-xs">
          Click to {isPlaying ? 'pause' : 'play'}
        </p>
      </div>
    </div>
  );
}
