import bgVideo from '~/assets/videos/background.mp4';
import VideoAsset from './assets/VideoAsset';
import { useEffect, useState } from 'react';

type VideoProps = {
  id?: string;
  noSupport: string;
  creative: string;
  culture: string;
  community: string;
  discover: string;
  message: string;
};

const Video = ({ id, noSupport, community, creative, culture, discover, message }: VideoProps) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return (
    <div className="relative mt-0 lg:mt-[-79px]">
      <video
        id={id}
        loop
        muted
        autoPlay
        playsInline
        className={`bg-black
    ${
      !isPortrait
        ? 'w-full h-auto aspect-[16/9] lg:aspect-auto lg:h-[100vh]'
        : 'w-auto left-1/2 relative transform -translate-x-1/2 object-cover lg:h-[100vh]'
    }
  `}
        style={isPortrait ? { height: 'calc(100vh - 73px)' } : undefined}
      >
        <source src={bgVideo} type="video/mp4" />
        {noSupport}
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-orange-500">
        <div className="text-5xl lg:text-video uppercase flex flex-col justify-center items-center">
          <div className="font-primary">{creative}</div>
          <div className="font-primary">{culture}</div>
          <div className="font-secondary">{community}</div>
        </div>
      </div>
      <div className="absolute bottom-[10px] lg:bottom-[40px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="text-orange-500 text-center text-sm lg:text-base mb-2 w-[80vw] lg:w-[700px]">{message}</div>

          <VideoAsset />
          <div className="text-orange-500 font-secondary text-sm lg:text-base">{discover}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
