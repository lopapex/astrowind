import bgVideo from '~/assets/videos/background.mp4';
import VideoAsset from './assets/VideoAsset';
import { useEffect, useState } from 'react';

type VideoProps = {
  id?: string;
  noSupport: string;
  creative: string;
  culture: string;
  community?: string | null;
  discover?: string | null;
  message?: string | null;
};

const Video = ({ id, noSupport, community, creative, culture, discover, message }: VideoProps) => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    updateOrientation();
    window.addEventListener('resize', updateOrientation);

    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return (
    <div className="relative mt-0 overflow-hidden bg-black lg:mt-[-79px]">
      <div
        className={`relative overflow-hidden bg-black ${
          !isPortrait ? 'w-full aspect-[16/9] lg:aspect-auto lg:h-[100vh]' : 'w-full lg:h-[100vh]'
        }`}
        style={isPortrait ? { height: 'calc(100vh - 73px)' } : undefined}
      >
        <video
          id={id}
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setIsVideoLoaded(true)}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 z-0 h-full w-full bg-black object-cover transition-opacity duration-300 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={bgVideo} type="video/mp4" />
          {noSupport}
        </video>
      </div>

      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-orange-500">
        <div className="flex flex-col items-center justify-center text-5xl uppercase lg:text-video">
          <div className="font-primary">{creative}</div>
          <div className="font-primary">{culture}</div>
          <div className="font-secondary">{community}</div>
        </div>
      </div>

      <div className="absolute bottom-[10px] left-1/2 z-10 -translate-x-1/2 transform lg:bottom-[40px]">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mb-2 w-[80vw] text-center text-sm text-orange-500 lg:w-[700px] lg:text-base">
            {message}
          </div>

          {discover && <VideoAsset />}

          <div className="text-sm font-secondary text-orange-500 lg:text-base">{discover}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;