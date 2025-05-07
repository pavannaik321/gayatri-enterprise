import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react'; // Optional: Replace with any icon library

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-56 bg-black">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-56 object-cover"
      />
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-black p-2 rounded-full shadow-lg transition"
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>
    </div>
  );
}
