import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoProps {
  src: string;
  poster?: string;
  title: string;
  caption?: string;
}

const Video = ({ src, poster, title, caption }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/95 shadow-xl shadow-black/20">
      <div className="relative">
        <video
          className="h-full w-full rounded-3xl bg-black"
          src={src}
          poster={poster}
          controls
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg">
              <Play className="h-7 w-7" />
            </div>
          </div>
        )}
      </div>
      <div className="space-y-2 p-5 text-left">
        <p className="text-sm font-semibold text-text-primary">{title}</p>
        {caption && <p className="text-sm text-text-secondary">{caption}</p>}
      </div>
    </div>
  );
};

export default Video;
